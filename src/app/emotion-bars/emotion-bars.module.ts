import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmotionBarsComponent } from './emotion-bars.component';
import { SingleBarComponent } from '../single-bar/single-bar.component';


@NgModule({
  declarations: [
    EmotionBarsComponent,
    SingleBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [EmotionBarsComponent]

})
export class EmotionBarsModule { }
