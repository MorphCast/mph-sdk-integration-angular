import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-bar',
  templateUrl: './single-bar.component.html',
  styleUrls: ['./single-bar.component.css']
})
export class SingleBarComponent implements OnInit {
  @Input() value: any;
  @Input() color1: any;
  @Input() color2: any;
  @Input() name: any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
