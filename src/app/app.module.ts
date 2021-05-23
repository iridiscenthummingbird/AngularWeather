import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NowComponent} from './now/now.component';
import {TodayComponent} from './today/today.component';
import {ThreeDaysComponent} from './three-days/three-days.component';
import {WeekComponent} from './week/week.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import {FormsModule} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { NightPipe } from './night.pipe';

const routes: Routes = [
  {path: 'now', component: NowComponent},
  {path: 'today', component: TodayComponent},
  {path: '3days', component: ThreeDaysComponent},
  {path: 'week', component: WeekComponent},
  {path: '', redirectTo: 'now', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NowComponent,
    TodayComponent,
    ThreeDaysComponent,
    WeekComponent,
    NightPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
