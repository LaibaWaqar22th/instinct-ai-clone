import { Component } from '@angular/core';

@Component({
  selector: 'app-train-your-bot',
  templateUrl: './train-your-bot.component.html',
  styleUrls: ['./train-your-bot.component.css']
})
export class TrainYourBotComponent {
  createIntent=false
  newIntent(){
    this.createIntent=!this.createIntent
  }
}
