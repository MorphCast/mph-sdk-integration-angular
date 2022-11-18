import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likely-age',
  templateUrl: './likely-age.component.html',
  styleUrls: ['./likely-age.component.css']
})
export class LikelyAgeComponent implements OnInit {
  ageValue = 0;
  ageMin = 0;
  ageMax = 10;
  timeout:any = undefined 
  constructor() {
    
   }

  ngOnInit(): void {
    window.addEventListener("CY_FACE_AGE_RESULT", (this.handleAgeEvent));
  }

  resetTimeout=() => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.ageValue = 0;
      this.ageMin = 0;
      this.ageMax = 0;
    }, 3000);
  }
  
  handleAgeEvent= (evt:any) => {
    this.resetTimeout();
    this.ageValue = Math.floor(evt.detail.output.numericAge) || 0;
    this.ageMin = Math.floor(this.ageValue / 10) * 10;
    this.ageMax = (Math.floor(this.ageValue / 10) + 1) * 10;
  }
  
}
