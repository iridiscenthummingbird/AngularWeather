import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NowComponent} from './now/now.component';
import {TodayComponent} from './today/today.component';
import {ThreeDaysComponent} from './three-days/three-days.component';
import {WeekComponent} from './week/week.component';


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
    WeekComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
