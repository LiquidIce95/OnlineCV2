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
    for (let i = 0; i < 50; i++) {
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
}
