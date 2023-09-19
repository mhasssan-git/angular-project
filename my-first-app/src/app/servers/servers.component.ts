import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewserver: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName = 'Testserver';
  serverCreated=false;
  servers=['Testserver','Testserver 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewserver = true;
    }, 2000);
  }
  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated=true;
    this.serverCreationStatus = 'Server was created! Name is '+this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
