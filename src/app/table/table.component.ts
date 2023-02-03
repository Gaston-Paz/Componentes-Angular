import { Component, Input, OnInit } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../user.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource();

  //Inputs
  @Input('columns')columns:string[]=[];
  @Input('titles')titles:string[]=[];
  @Input('data')data:any[]=[];
  @Input('props')props:string[]=[];

  constructor() {}

  ngOnInit(): void {    
    this.displayedColumns = this.columns;
    this.dataSource.data = this.data;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
