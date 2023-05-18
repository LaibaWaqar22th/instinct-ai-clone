import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntentsComponent } from './pages/intents/intents.component';
import { PageLayoutComponent } from './pages/page-layout/page-layout.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { TrainYourBotComponent } from './pages/train-your-bot/train-your-bot.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { CatchAllComponent } from './pages/catch-all/catch-all.component';
import { NewIntentComponent } from './pages/new-intent/new-intent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path:'',component:AppComponent},
  { path: 'train-your-bot', component: TrainYourBotComponent },
  { path: 'intents', component: IntentsComponent },
  { path: 'catch-all', component: CatchAllComponent },
  { path: 'analytics', component: AnalyticsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageLayoutComponent,
    SidebarComponent,
    TrainYourBotComponent,
    AnalyticsComponent,
    IntentsComponent,
    CatchAllComponent,
    NewIntentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
