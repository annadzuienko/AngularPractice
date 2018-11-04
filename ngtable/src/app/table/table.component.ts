import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { Table } from './Table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  characters: Table[];	

  constructor(private tservice: TableService) { }

  ngOnInit() {
  	this
      .tservice
      .getcharacters()
      .subscribe((data: Table[]) => {
        this.characters = data;
    });
  }
  settings = {
    columns: {
      colorName: {
        title: 'colorName'
      },
      hexValue: {
        title: 'hexValue'
      }
    }
  };
}


