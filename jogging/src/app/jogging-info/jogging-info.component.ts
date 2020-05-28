import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute,Router} from "@angular/router";
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
@Component({
  selector: 'app-jogging-info',
  templateUrl: './jogging-info.component.html',
  styleUrls: ['./jogging-info.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})

export class JoggingInfoComponent implements OnInit {
  date;
  duration=0;
  distance=0;
  speed=0;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    public ServiceService:ServiceService,
    private  router: Router) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
  onSubmit(){
    this.speed=this.distance/this.duration;
    let data={
     date: this.date  ? new Date(this.date).toLocaleDateString() : '',
     duration:this.duration,
     distance:this.distance,
     speed:this.speed,
    }
    console.log('data',data);
    this.ServiceService.jogging_deatil(data).
    subscribe((result:any)=>{
      if(result[0]){
        alert('submit sucessfully now you can check the list')
        console.log('result',result[0]);
      }
      else{
        console.log('no result');
      }

    })


  }
  onlist(){
    this.router.navigate(['/', 'list']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });


  }


}
