import { Component,ViewChild,ElementRef,AfterViewInit,OnInit  } from '@angular/core';

declare global {
  var CY: any;
}

import { getAiSdkControls } from "src/assets/helpers/ai-sdk/loader";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('VideoEl') videoEl:ElementRef | undefined;
  loadFaceTracker = false
  ngOnInit(){
    
  }
  ngAfterViewInit() {
    var ve: any = this.videoEl?.nativeElement;
    async function getAiSdk(){
      const { source, start } = await getAiSdkControls();
      
      
      await source.useCamera({
        toVideoElement: ve,
      });
        await start();
    }
   getAiSdk()

   setTimeout(() => { 
    this.loadFaceTracker = true
  }); 
  }
  title = 'angular-ai-sdk-example';
}
