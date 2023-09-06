import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

interface Dot {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
}

@Component({
  selector: 'app-dot-simulation',
  templateUrl: './dot-simulation.component.html',
  styleUrls: ['./dot-simulation.component.css']
})
export class DotSimulationComponent implements AfterViewInit {
  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  dots: Dot[] = [];  // Property 'dots' declared and initialized here

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight;
    this.initializeDots();
    requestAnimationFrame(this.animate);
  }

  private initializeDots() {
    for (let i = 0; i < 70; i++) {
      this.dots.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        size: Math.random() * 4 + 2
      });
    }
  }

  private animate = () => {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.dots.forEach(dot => {
      this.moveDot(dot);
      this.edgeCollision(dot);
      this.drawDot(dot);
    });
    this.dotInteraction();
    requestAnimationFrame(this.animate);
  }

  private moveDot(dot: Dot) {
    dot.x += dot.dx;
    dot.y += dot.dy;
  }

  private edgeCollision(dot: Dot) {
    if (dot.x <= 0 || dot.x >= window.innerWidth) dot.dx = -dot.dx;
    if (dot.y <= 0 || dot.y >= window.innerHeight) dot.dy = -dot.dy;
  }

  private drawDot(dot: Dot) {
    this.ctx.beginPath();
    this.ctx.arc(dot.x, dot.y, dot.size, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  private dotInteraction() {
    const proximityThreshold = 15 * (window.innerHeight / 100);  // 15vh

    for (let i = 0; i < this.dots.length; i++) {
      for (let j = i + 1; j < this.dots.length; j++) {
        const dx = this.dots[i].x - this.dots[j].x;
        const dy = this.dots[i].y - this.dots[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Dot collision
        const minDist = this.dots[i].size + this.dots[j].size;
        if (distance < minDist) {
          [this.dots[i].dx, this.dots[j].dx] = [this.dots[j].dx, this.dots[i].dx];
          [this.dots[i].dy, this.dots[j].dy] = [this.dots[j].dy, this.dots[i].dy];
        }

        // Draw line if close enough
        if (distance < proximityThreshold) {  // 3vh
          this.ctx.beginPath();
          this.ctx.moveTo(this.dots[i].x, this.dots[i].y);
          this.ctx.lineTo(this.dots[j].x, this.dots[j].y);
          this.ctx.strokeStyle = `rgba(0, 0, 0, ${1 - distance / proximityThreshold})`;  // Fade-in effect
          this.ctx.stroke();
        }
      }
    }
  }
}
