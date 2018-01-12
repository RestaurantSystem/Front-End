import { Component, OnInit } from '@angular/core';
import { WaitressService } from '../../../../core/services/waitress.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
   public tables: object[];

  constructor(private waitressService: WaitressService) {
    this.tables = [];
   }
ngOnInit() {
    this.waitressService.getTables()
        .subscribe({
            next: data => {
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        this.tables.push(data[key]);
                    }
                }
            },
            complete: () => {
                console.log(this.tables);
            }
        });
            /*
            next: data => {
                this.table = data['table'];
                console.log(this.table);
            }*/
 }
}
