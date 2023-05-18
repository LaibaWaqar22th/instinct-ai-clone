import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  sideBarItems = ['bi-chat-right', 'bi-person-circle', 'bi-columns-gap', 'bi-cloud-arrow-down', 'bi-megaphone',
    'bi-graph-up', 'bi-qr-code-scan', 'bi-bar-chart-line']

}
