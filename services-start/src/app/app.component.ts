import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit{
  accounts: { name: string; status }[] = [];
  constructor(private accountService:AccountService){}
  ngOnInit(): void {
    this.accounts=this.accountService.accounts;
  }
   
}
