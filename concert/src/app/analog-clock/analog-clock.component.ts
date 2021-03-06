import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';
@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements OnInit {
  now: Date = new Date();

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  radius: number;

  constructor() {
  }
 
  ngOnInit() {
    // const secondElement: HTMLElement = <HTMLElement>document.getElementById('ac_second');
    // const minuteElement: HTMLElement = <HTMLElement>document.getElementById('ac_minute');
    // const hourElement: HTMLElement = <HTMLElement>document.getElementById('ac_hour');

    // const timer1 = timer(0, 1000);
    // timer1.subscribe((t) => {
    //   this.now = new Date();
    //   const second = this.now.getSeconds();
    //   const minute = this.now.getMinutes();
    //   const hour = this.now.getHours();
    //   secondElement.style.transform = 'rotate(' + (second * 6) + 'deg)';
    //   minuteElement.style.transform = 'rotate(' + ((minute * 6) + (second / 10)) + 'deg)';
    //   hourElement.style.transform = 'rotate(' + (((hour % 12) * 30) + (minute / 2)) + 'deg)';
    // console.log(`hour: ${(((hour % 12) * 30) + (minute / 2))}, minute: ${((minute * 6) + (second / 10))}`);
    // });

    this.canvas = <HTMLCanvasElement>  document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.radius = this.canvas.height / 2;

    this.ctx.translate(this.radius, this.radius);
    this.radius = this.radius * 0.90;

    const timer1 = timer(0, 1000);
    timer1.subscribe((t) => {
      this.drawClock();
    });
  }

  drawClock() {
    this.drawFace(this.ctx, this.radius);
    this.drawNumbers(this.ctx, this.radius);
    this.drawTime(this.ctx, this.radius);
  }

  drawFace(ctx: any, radius: number) {
    let grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#777');
    grad.addColorStop(0.5, '#ddd');
    grad.addColorStop(1, '#fff');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.05;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
    ctx.fillStyle = '#777';
    ctx.fill();
  }

  drawNumbers(ctx, radius) {
    let ang;
    let num;
    ctx.font = radius * 0.15 + 'px arial';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    for (num = 1; num < 13; num++) {
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.80);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.80);
      ctx.rotate(-ang);
    }
  }

  drawTime(ctx, radius) {
      const now = new Date();
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();
      // hour
      hour = hour % 12;
      hour = (hour * Math.PI / 6) +
      (minute * Math.PI / (6 * 60)) +
      (second * Math.PI / (360 * 60));
    this.drawHand(ctx, hour, radius * 0.4, radius * 0.06);
      // minute
      minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    this.drawHand(ctx, minute, radius * 0.6, radius * 0.05);
      // second
      second = (second * Math.PI / 30);
    this.drawHand(ctx, second, radius * 0.7, radius * 0.02);
  }

  drawHand(ctx, pos, length, width) {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = 'round';
      ctx.moveTo(0, 0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
  }
}
