import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dominant-emotion',
  templateUrl: './dominant-emotion.component.html',
  styleUrls: ['./dominant-emotion.component.css']
})
export class DominantEmotionComponent implements OnInit {
dominantEmotion = ""

  constructor() { }

  ngOnInit(): void {
    window.addEventListener("CY_FACE_EMOTION_RESULT", (evt:any) => {
      this.dominantEmotion = evt.detail.output.dominantEmotion || "" ;
    });
  }

}
