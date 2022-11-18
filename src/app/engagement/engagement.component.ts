import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrls: ['./engagement.component.css']
})
export class EngagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener(
      "CY_FACE_AROUSAL_VALENCE_RESULT",
      this.handleArousalValenceEvents
    );
    window.addEventListener("CY_FACE_ATTENTION_RESULT", this.handleAttentionEvents);
  }

  arousal = 0;
  valence = 0;
  attention = 0;
  timeout:any;


  handleArousalValenceEvents = (evt:any) => {
    this.valence = Math.abs(evt.detail.output.valence * 100) || 0;
    this.arousal = Math.abs(evt.detail.output.arousal * 100) || 0;
    this.resetTimeout();
  }
  handleAttentionEvents = (evt:any) => {
    if (evt.detail.output.attention > 0.1) {
      this.attention = evt.detail.output.attention * 100 || 0;
      this.resetTimeout();
    }
  }
  resetTimeout = () => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.setAllToZero, 1500);
  }

  setAllToZero = () => {
    this.arousal = 0;
    this.valence = 0;
    this.attention = 0;
  }

}
