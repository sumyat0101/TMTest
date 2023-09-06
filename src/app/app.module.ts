import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { NavbarComponent } from './navbar/navbar.component';
import { StypesetupComponent } from './stypesetup/stypesetup.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ShopsetuplistComponent } from './List/shopsetuplist/shopsetuplist.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MasterSetupComponent,
    MemberComponent,
    PointCollectionComponent,
    PointRelationComponent,
    ReceiptAnalyzedComponent,
    VoucherComponent,
    LuckyDrawProgramComponent,
    PointRedemptionComponent,
    GiftCardIssueComponent,
    SystemComponent,
    NavbarComponent,
    StypesetupComponent,
    FormComponent,
    ShopsetuplistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
