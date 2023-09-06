import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-stypesetup',
  templateUrl: './stypesetup.component.html',
  styleUrls: ['./stypesetup.component.css']
})
export class StypesetupComponent {
  shop: any;
 
  constructor(private apiservice: ApiService){

  }
  ngOnInit(): void{
    this.getAllShop();

  }

  getAllShop(){
    this.apiservice.getAllShop().subscribe((res)=>{
      this.shop=res.shop;
    });
  }

}
