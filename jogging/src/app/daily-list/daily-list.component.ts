import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrls: ['./daily-list.component.css']
})


export class DailyListComponent implements OnInit {
  name;
  displayedColumns: string[] = ['position','date', 'distance', 'duration', 'speed'];
  dataSource : MatTableDataSource<PeriodicElement>;
  selection = new SelectionModel<PeriodicElement>(true, []);



  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  date;

  constructor(public ServiceService:ServiceService,
    public router:Router) { }


onclick(){
  this.router.navigate(['/', 'info']).then(nav => {
    console.log(nav); // true if navigation is successful
  }, err => {
    console.log(err) // when there's an error
  });

}
speed(){
  let data={
    date:this.date
  }
  this.ServiceService.aveSpeed(data)
  .subscribe((result:any)=>{
    if(result){
      console.log(result);
    }
    else{
      console.error();
     }
  })
}



ngOnInit() {

    let   data={
        name:this.name
      }
      this.ServiceService.jogging_list(data)
      .subscribe((result:any)=>{
        if(result){
          console.log('result',result);
          let list = result.list.map((val,index)=>{
            delete val.id, val.v;
            val.date = val.date ? new Date(val.date).toLocaleDateString() : '';
            val.position = index+ 1;
            return val  });
            console.log('list',list);
            this.dataSource = new MatTableDataSource(list);
          this.dataSource.paginator = this.paginator;
        }
        else{
         console.error();
        }
      })
    }

}


export interface PeriodicElement {
  position: number;
   date:Date;
  distance: number;
 duration: number;
  speed: number;
}
