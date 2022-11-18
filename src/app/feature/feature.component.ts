import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  timeout:any = undefined
  feat:string[] = ["","","","",""]
  constructor() { }

  ngOnInit(): void {
    window.addEventListener("CY_FACE_FEATURES_RESULT", (evt:any) => {
      this.resetTimeout();
      let features = this.extract(evt.detail.output.features, 5);
      this.feat = features.map(([feature]) => feature);
    });
  }

resetTimeout() {
  clearTimeout(this.timeout);
  this.timeout = setTimeout(() => {
    this.feat = ["", "", "", "", ""];
  }, 3000);
}

extract(obj:any, n:any) {
  let sortable = [];
  for (var feature in obj) {
    sortable.push([feature, obj[feature]]);
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });
  return sortable.slice(0, n);
}

}
