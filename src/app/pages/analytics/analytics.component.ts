import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  tableHead = ["Messages", "Importance", "Accuracy", "Catch all"]
  tableData = [
    { intent: "Greetings", messages: "110", importance: "98%", accuracy: "1", cach: "10" },
    { intent: "Bye", messages: "65", importance: "3%", accuracy: ".4", cach: "5" },
    { intent: "Location", messages: "59", importance: "38%", accuracy: "6", cach: "7" },
    { intent: "Office hours", messages: "8", importance: "4%", accuracy: "7.8", cach: "4" }
  ]
}
