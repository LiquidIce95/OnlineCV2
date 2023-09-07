import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

interface Dot {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  isStatic?: boolean;
}

const PROXIMITY_THRESHOLD_RATIO = 0.17;
const DOT_COUNT = 70;

@Component({
  selector: 'app-dot-simulation',
  templateUrl: './dot-simulation.component.html',
  styleUrls: ['./dot-simulation.component.css']
})
export class DotSimulationComponent implements AfterViewInit {
  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  dots: Dot[] = [];
  private staticDotStartCoords: { x: number, y: number } | null = null;
  private isAiming: boolean = false;
  private X: number = 0;
  private Y: number = 0;
  private dot: Dot | null = null; 
  private proximityThreshold: number = PROXIMITY_THRESHOLD_RATIO * window.innerHeight;
  private tutorialText: string | null = 'Click on a dot in the lower quarter!';


  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight;
    this.initializeDots();
    requestAnimationFrame(this.animate);
    this.canvas.nativeElement.addEventListener('mousedown', this.mouseDown);
  }

  private drawTutorial() {
    if (this.tutorialText) {
      this.ctx.font = '2vh Calibri';
      this.ctx.fillStyle = 'black';
      this.ctx.fillText(this.tutorialText, 20, 50);
    }
  }
  private initializeDots() {
    for (let i = 0; i < DOT_COUNT; i++) {
      this.dots.push(this.createRandomDot());
    }
  }

  private createRandomDot(): Dot {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      size: Math.random() * 4 + 2,
      isStatic: false,
    };
  }

  private mouseDown = (event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;

    for (let i = 0; i < this.dots.length; i++) {
      const distance = this.getDistance(x, y, this.dots[i].x, this.dots[i].y);
      
      if (distance < this.dots[i].size * 1 && !this.dots[i].isStatic) {
        this.enterStaticMode(i, x, y);
      } else if (this.dots[i].isStatic) {
        this.exitStaticMode(i, x, y);
      }
    }
  }

  private enterStaticMode(index: number, x: number, y: number) {
    this.dots[index].isStatic = true;
    this.staticDotStartCoords = { x, y };
    this.dots[index].x = x;
    this.dots[index].y = y;
    this.isAiming = true;
    this.dot = this.dots[index];
    this.canvas.nativeElement.addEventListener('mousemove', this.mouseMove);
    
    if(this.tutorialText != null){
      this.tutorialText = 'Click on a spot to launch dot';
    }

  }

  private exitStaticMode(index: number, x: number, y: number) {
    this.dots[index].dx = (x - this.staticDotStartCoords!.x)/50;
    this.dots[index].dy = (y - this.staticDotStartCoords!.y)/50;
    this.dots[index].isStatic = false;
    this.staticDotStartCoords = null;
    this.canvas.nativeElement.removeEventListener('mousemove', this.mouseMove);
    this.isAiming = false;
    this.dot = null;

    if(this.tutorialText != null){
      this.tutorialText = null;
    }

  }

  private getDistance(x1: number, y1: number, x2: number, y2: number): number {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
  }

  private animate = () => {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    this.dots.forEach(dot => {
      this.moveDot(dot);
      this.edgeCollision(dot);
      this.drawDot(dot);
    });
    
    this.dotInteraction();
    this.drawAim();
    this.drawTutorial();

    
    requestAnimationFrame(this.animate);
  }

  private moveDot(dot: Dot) {
    if (!dot.isStatic) { 
      dot.x += dot.dx;
      dot.y += dot.dy;
    }
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
    for (let i = 0; i < this.dots.length; i++) {
      for (let j = i + 1; j < this.dots.length; j++) {
        const distance = this.getDistance(this.dots[i].x, this.dots[i].y, this.dots[j].x, this.dots[j].y);

        this.handleDotCollision(i, j, distance);
        this.drawLineIfCloseEnough(i, j, distance);
      }
    }
  }

  private handleDotCollision(i: number, j: number, distance: number) {
    const minDist = this.dots[i].size + this.dots[j].size;
    if (distance < minDist) {
      [this.dots[i].dx, this.dots[j].dx] = [this.dots[j].dx, this.dots[i].dx];
      [this.dots[i].dy, this.dots[j].dy] = [this.dots[j].dy, this.dots[i].dy];
    }
  }

  private drawLineIfCloseEnough(i: number, j: number, distance: number) {
    if (distance < this.proximityThreshold) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.dots[i].x, this.dots[i].y);
      this.ctx.lineTo(this.dots[j].x, this.dots[j].y);
      this.ctx.strokeStyle = `rgba(0, 0, 0, ${1 - distance / this.proximityThreshold})`;
      this.ctx.stroke();
    }
  }

  drawAim() {
    if(this.dot) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.dot.x, this.dot.y);
      this.ctx.lineTo(this.X, this.Y);
      this.ctx.strokeStyle = 'rgba(100, 0, 0, 0.8)';
      this.ctx.stroke();
    }
  }

  private mouseMove = (event: MouseEvent) => {
    this.X = event.clientX;
    this.Y = event.clientY;
  }
}
