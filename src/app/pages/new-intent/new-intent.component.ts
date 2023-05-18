import { Component } from '@angular/core';

@Component({
  selector: 'app-new-intent',
  templateUrl: './new-intent.component.html',
  styleUrls: ['./new-intent.component.css']
})
export class NewIntentComponent {
  closeIntent(){
    window.location.reload()
  }
}
