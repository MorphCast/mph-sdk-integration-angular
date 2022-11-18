import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gender-component',
  templateUrl: './gender.component.component.html',
  styleUrls: ['./gender.component.component.css']
})
export class GenderComponentComponent implements OnInit {
  gender = "";

  constructor() { }

  ngOnInit(): void {
    window.addEventListener("CY_FACE_GENDER_RESULT", (evt:any) => {
      this.gender = evt.detail.output.mostConfident || "";
    });
  }

}
