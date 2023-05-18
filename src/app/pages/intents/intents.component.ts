import { Component } from '@angular/core';

@Component({
  selector: 'app-intents',
  templateUrl: './intents.component.html',
  styleUrls: ['./intents.component.css']
})
export class IntentsComponent {

  createIntent = false
  intentList = [
    {
      name: "Greetings", subList: [
        "Hello there", "How are you doing ?", "Hope you are doing well", "Nice to see you"
      ], display: "none"
    },
    {
      name: "Bye", subList: [
        "See you", "Bye Bye"
      ], display: "none"
    },
    {
      name: "Location", subList: [
        "Istanbul", "Mumbai", "Frankfurt"
      ], display: "none"
    },
    {
      name: "Office hours", subList: [
        "6hrs", "8hrs", "5hrs"
      ], display: "none"
    }

  ]

  constructor() { }

  setDisplay(i) {
    if (this.intentList[i].display === "none") {
      this.intentList[i].display = "block"
    } else {
      this.intentList[i].display = "none"
    }
  }


  newIntent() {
    this.createIntent = !this.createIntent
  }

}
