import { Component, OnInit } from '@angular/core';
import { WaitressService } from '../../../../core/services/waitress.service';

@Component({
  selector: 'app-my-bills',
  templateUrl: './my-bills.component.html',
  styleUrls: ['./my-bills.component.css']
})
export class MyBillsComponent implements OnInit {
   public bills: object[];
  constructor(private waitressService: WaitressService) {
    this.bills = [];
   }

  ngOnInit() {
    
  }

}

