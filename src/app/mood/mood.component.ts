import { Component, OnInit, ViewChild,ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.css']
})
export class MoodComponent implements AfterViewInit {
  crtDisableTimeout:any;
  gridN=38;
  @ViewChild('grid') grid:ElementRef | undefined;
  @ViewChild('pin_wrap') pin_wrap:ElementRef | undefined;
  @ViewChild('pin') pin:ElementRef | undefined;

  constructor() { }

  ngAfterViewInit(): void {
    this.crtDisableTimeout = setTimeout(() => this.hidePin(), 1500);
    window.addEventListener("CY_FACE_AROUSAL_VALENCE_RESULT", this.fn);
    window.addEventListener("resize", this.fn2);
  }

  enableGrid = (n:number) => {
   this.gridN = n;
  }

  fn = (evt:any) => {
    clearTimeout(this.crtDisableTimeout);
    
    this.showPin();
    this.setEmotion(evt.detail.output);
    this.crtDisableTimeout = setTimeout(() => this.hidePin(), 3000);
  };
  fn2 = () => {
    this.setDim();
  };

  setDim = () => {
    let grid = this.grid?.nativeElement;
    let pin_wrap = this.pin_wrap?.nativeElement
    if (!grid || grid.clientWidth === 0) {
      setTimeout(() => {
        this.setDim();
      }, 10);
    } else {
      pin_wrap.style.width = grid.clientWidth + "px";
      pin_wrap.style.height = grid.clientHeight + "px";
    }
  }

  setEmotion = ({ arousal = 0, valence = 0 }) => {
    let { x, y } = this.calcCoorinate({ valence, arousal });
    x = Math.max(x, 5.15); // check img ratio to avoid ellipse
    y = Math.max(y, 6);
    //console.log(x,y);

    this.setPinPosition(x, y);
  }

  calcCoorinate = ({ valence = 0, arousal = 0 }) => {
    const img_outer_width = 800;
    const img_inner_width = 598;
    const img_x_offset = 101;

    const img_outer_height = 686;
    const img_inner_height = 598;
    const img_y_offset = 45;

    const normalized = (z:any) => (z + 1) / 2;

    return {
      x:
        (100 * (img_x_offset + img_inner_width * normalized(valence))) /
        img_outer_width,
      y:
        (100 * (img_y_offset + img_inner_height * normalized(arousal))) /
        img_outer_height,
    };
  }

  setPinPosition(x:any, y:any) {
    let pin = this.pin?.nativeElement;
   pin.style.left = `${x - 5.15}%`; // check img ratio to avoid ellipse
   pin.style.bottom = `${y - 6}%`;
  }

  showPin() {
    let pin = this.pin?.nativeElement;
    pin.style.opacity = 0.7;
  }

  hidePin() {
    let pin = this.pin?.nativeElement;
    pin.style.opacity = 0;
  }

  

}
