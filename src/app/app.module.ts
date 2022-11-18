import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GenderComponentComponent } from './gender.component/gender.component.component';
import { DominantEmotionComponent } from './dominant-emotion/dominant-emotion.component';
import { LikelyAgeComponent } from './likely-age/likely-age.component';
import { SingleBarComponent } from './single-bar/single-bar.component';
import { EmotionBarsComponent } from './emotion-bars/emotion-bars.component';
import { EmotionBarsModule } from './emotion-bars/emotion-bars.module';
import { FeatureComponent } from './feature/feature.component';
import { FaceTrackerComponent } from './face-tracker/face-tracker.component';
import { EngagementComponent } from './engagement/engagement.component';
import { MoodComponent } from './mood/mood.component';

@NgModule({
  declarations: [
    AppComponent,
    GenderComponentComponent,
    DominantEmotionComponent,
    LikelyAgeComponent,
    FeatureComponent,
    FaceTrackerComponent,
    EngagementComponent,
    MoodComponent,
  
  ],
  imports: [
    BrowserModule,
    EmotionBarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
