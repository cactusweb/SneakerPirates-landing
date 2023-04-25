import { Component, OnInit } from '@angular/core';
import { Faq } from './models/faq.interfaces';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  faqCards: Faq[] = [
    {
      question: 'How much does the monthly membership cost?',
      answer:
        'The monthly subscription costs $60. Through the referral program promo, the first month costs $49.',
    },
    {
      question: 'How much do additional products cost?',
      answer:
        'Customers can also purchase additional memberships (1 day - $5, 1 month - $25, permanent - $165). There is also a permanent subscription with a one-time payment from $590 to $640.',
    },
    {
      question: 'How to get membership?',
      answer:
        'You can get membership through the website and dashboard. The purchase link is available on our website. You need to link your Discord account and pay for the subscription. After that, you will automatically receive access to the Discord server through the dashboard.',
    },
    {
      question: 'What features are available with membership?',
      answer: 
      `- Detailed release information, including website, date, drop time and prices\n- Monitoring of new limited edition releases in Discord server \n- Notification system for new releases through Discord \n- Market analysis and profitability forecasts for releases \n- Community of members for sharing experience and communication \n- Online customer support through a ticket system on Discord`,
    },
    {
      question: 'How does the subscription renew?',
      answer:
        'After the purchase, your card is linked to the dashboard. The subscription is automatically renewed every month. You can always turn off the auto-renewal or change the linked card through the dashboard.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
