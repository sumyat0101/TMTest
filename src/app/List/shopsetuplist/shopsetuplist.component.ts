import { Component , OnInit} from '@angular/core';
import { Shopsetup } from 'src/app/model/shopsetup.model';

@Component({
  selector: 'app-shopsetuplist',
  templateUrl: './shopsetuplist.component.html',
  styleUrls: ['./shopsetuplist.component.css']
})
export class ShopsetuplistComponent implements OnInit {

  Shopsetup:Shopsetup [] =[
    {
    id: 'SS0001',
    name:'Nature Republic',
    unitNo : '02-02',
    contactPerson:'Su Su',
    phone: 9258741962,
    shopTypeName:'Hyper Market',
    shopTypeCode: 'Hyper Market',
    propertyName: 'MTower',
    shopCode:'Ocean Super Center',
    createdBy:'Su Su',
    approvedBy:'KKLwin',
    remark:''
  },
  {
    id: 'SS0003',
    name:'Lotteria',
    unitNo : '02-02',
    contactPerson:'Su Hlaing',
    phone: 9258741962,
    shopTypeName:'Hyper Market',
    shopTypeCode: 'Hyper Market',
    propertyName: 'MTower',
    shopCode:'Ocean Super Center',
    createdBy:'Su Su',
    approvedBy:'KKLwin',
    remark:''
  }
];

constructor(){  }

ngOnInit(): void{

}
onclick() {
    
}
}
