import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'instinct-ai-clone';
  route = ""

  addRoute(value) {
    this.route = value
    console.log(this.route)
  }
  constructor() { }

}

