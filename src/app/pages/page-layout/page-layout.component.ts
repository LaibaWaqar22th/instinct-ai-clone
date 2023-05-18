import { Component } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent {


  list: any;
  selected: any;
  constructor() {
    this.list = [
      {
        title: 'Train your bot', text: "Improve performance by providing user utterence or frequently asked questions", id: "train-your-bot"
      },
      {
        title: 'Intents', text: "View all answers you've created to improve the bot performance", id: "intents"
      },
      {
        title: 'Catch all', text: "Setup flows to handle unanswered or not helpful responses", id: "catch-all"
      },
      {
        title: 'Analytics', text: "Learn how your bot is performing and how you can make it better", id: "analytics"
      },
    ]
  }


  select(item) {
    this.selected = item.title
  }
  isActive(item) {
    return this.selected === item
  }

}
