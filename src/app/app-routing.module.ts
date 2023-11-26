import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { UserAgreementComponent } from './screens/user-agreement/user-agreement.component';
import { PrivacyPolicyComponent } from './screens/privacy-policy/privacy-policy.component';
import { RefundDisputePolicyComponent } from './screens/refund-dispute-policy/refund-dispute-policy.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, data: { navMenu: true } },
  { path: 'user_agreement', component: UserAgreementComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'refund_dispute', component: RefundDisputePolicyComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
