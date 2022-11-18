import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-face-tracker',
  templateUrl: './face-tracker.component.html',
  styleUrls: ['./face-tracker.component.css']
})

export class FaceTrackerComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    this.faceTracker = document.querySelector("#faceTracker");
    window.addEventListener("CY_FACE_DETECTOR_RESULT", this.handleFaceEvents);
    window.addEventListener(
    // eslint-disable-next-line no-undef
    "CY_CAMERA_RESULT",
    this.setSdkDimensions)
  }


  timeout: any;
  faceTracker:any;
  sdk_w:any;
  sdk_h:any;
  @Input() videoEl: any;

  handleFaceEvents = (evt:any) => {
    if (evt.detail && evt.detail.rects && evt.detail.rects.length > 0) {
      const $vid = this.videoEl;

      const scale_w = $vid.offsetWidth / this.sdk_w;
      const scale_h = $vid.offsetHeight / this.sdk_h;

      const y_diff = $vid.offsetHeight - (this.sdk_h*2);
      const x_diff = $vid.offsetWidth - (this.sdk_w *2);

      const offset_x = Math.round(x_diff / 2);
      const offset_y = Math.round(y_diff / 2);
      this.faceTracker.style.width =
        Math.round(evt.detail.rects[0].width * scale_w) + "px";
      this.faceTracker.style.height =
        Math.round(evt.detail.rects[0].height * scale_h) + "px";
      this.faceTracker.style.top =
        Math.round(evt.detail.rects[0].y * scale_h) +
        (y_diff > x_diff ? offset_y : 0) +
        "px";
      this.faceTracker.style.left =
        Math.round(evt.detail.rects[0].x * scale_w) +
        (y_diff < x_diff ? offset_x : 0) +
        "px";

      this.faceTracker.style.display = "block";
      this.resetTimeout();
    }
  }

  setSdkDimensions = (evt:any) => {
    this.sdk_w = evt.detail.width;
    this.sdk_h = evt.detail.height;
  }

  resetTimeout = () => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.setAllToZero, 500);
  }
  setAllToZero = () => {
    this.faceTracker.style.display = "none";
  }


}
