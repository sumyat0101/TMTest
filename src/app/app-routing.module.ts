import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MasterSetupComponent } from './master-setup/master-setup.component';
import { MemberComponent } from './member/member.component';
import { PointCollectionComponent } from './point-collection/point-collection.component';
import { PointRelationComponent } from './point-relation/point-relation.component';
import { ReceiptAnalyzedComponent } from './receipt-analyzed/receipt-analyzed.component';
import { VoucherComponent } from './voucher/voucher.component';
import { LuckyDrawProgramComponent } from './lucky-draw-program/lucky-draw-program.component';
import { PointRedemptionComponent } from './point-redemption/point-redemption.component';
import { GiftCardIssueComponent } from './gift-card-issue/gift-card-issue.component';
import { SystemComponent } from './system/system.component';

import { StypesetupComponent } from './stypesetup/stypesetup.component';
import { FormComponent } from './form/form.component';
import { ShopsetuplistComponent } from './List/shopsetuplist/shopsetuplist.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'msetup',component:MasterSetupComponent},
  {path:'member',component:MemberComponent},
  {path:'pcollection',component:PointCollectionComponent},
  {path:'prelation',component:PointRelationComponent},
  {path:'receiptanalyze',component:ReceiptAnalyzedComponent},
  {path:'voucher',component:VoucherComponent},
  {path:'luckydraw',component:LuckyDrawProgramComponent},
  {path:'predemption',component:PointRedemptionComponent},
  {path:'gcard',component:GiftCardIssueComponent},
  {path:'system',component:SystemComponent},
  {path:'stypesetup',component:StypesetupComponent},
  {path:'form',component:FormComponent},
  {path:'ssetuplist',component:ShopsetuplistComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
