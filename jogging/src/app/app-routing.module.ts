import { DailyListComponent } from './daily-list/daily-list.component';
import { JoggingInfoComponent } from './jogging-info/jogging-info.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'info',pathMatch:'full'},
 {path:'info',component:JoggingInfoComponent},
  {path:'list',component:DailyListComponent},
 

 {path:'**',redirectTo:'info'}//wildcard entry

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
