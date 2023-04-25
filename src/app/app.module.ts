import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { SuccessComponent } from './components/success/success.component';
import { FaqComponent } from './components/faq/faq.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './screens/home/home.component';
import { UserAgreementComponent } from './screens/user-agreement/user-agreement.component';
import { NumWithPointPipe } from './pipes/num-with-point.pipe';
import { DiscordServerComponent } from './components/discord-server/discord-server.component';
import { DashboardInfoComponent } from './components/dashboard-info/dashboard-info.component';
import { MembershipInfoComponent } from './components/membership-info/membership-info.component';
import { ServiceInfoComponent } from './components/service-info/service-info.component';
import { FaqCardComponent } from './components/faq/components/faq-card/faq-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SuccessComponent,
    FaqComponent,
    FeaturesComponent,
    FooterComponent,
    ContactsComponent,
    HomeComponent,
    UserAgreementComponent,
    NumWithPointPipe,
    DiscordServerComponent,
    DashboardInfoComponent,
    MembershipInfoComponent,
    ServiceInfoComponent,
    FaqCardComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
