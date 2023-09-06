import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TMTest';
  user:any;
  constructor(private apiservice: ApiService){

  }
  ngOnInit(): void{
    this.getAllShop();

  }

  getAllShop(){
    this.apiservice.getAllShop().subscribe((res)=>{
      this.user=res.shop;
    });
  }
}
