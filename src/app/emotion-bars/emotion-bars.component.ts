import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emotion-bars',
  templateUrl: './emotion-bars.component.html',
  styleUrls: ['./emotion-bars.component.css']
})
export class EmotionBarsComponent implements OnInit {

  angry:Number = 0;
  disgust:Number = 0;
  fear:Number = 0;
  happy:Number = 0;
  sad:Number = 0;
  surprise:Number = 0;
  neutral:Number = 0;

  constructor() { 
  
  }

  ngOnInit(): void {
    window.addEventListener("CY_FACE_EMOTION_RESULT", (evt:any) => {
      this.angry = evt.detail.output.emotion.Angry * 100;
      this.disgust = evt.detail.output.emotion.Disgust * 100;
      this.fear = evt.detail.output.emotion.Fear * 100;
      this.happy = evt.detail.output.emotion.Happy * 100;
      this.sad = evt.detail.output.emotion.Sad * 100;
      this.surprise = evt.detail.output.emotion.Surprise * 100;
      this.neutral = evt.detail.output.emotion.Neutral * 100;
    });
  }

}
