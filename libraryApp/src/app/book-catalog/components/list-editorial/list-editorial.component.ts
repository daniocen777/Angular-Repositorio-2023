import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Editorial {
  id?: number;
  description?: string;
}

const ELEMENT_DATA: Editorial[] = [
  { id: 1, description: 'Hydrogen' },
  { id: 2, description: 'Helium' },
  { id: 3, description: 'Lithium' },
  { id: 4, description: 'Beryllium' },
  { id: 5, description: 'Boron' },
  { id: 6, description: 'Carbon' },
  { id: 7, description: 'Nitrogen' },
  { id: 8, description: 'Oxygen' },
  { id: 9, description: 'Fluorine' },
  { id: 10, description: 'Neon' },
];

@Component({
  selector: 'app-list-editorial',
  templateUrl: './list-editorial.component.html',
  styleUrls: ['./list-editorial.component.scss']
})
export class ListEditorialComponent implements OnInit, AfterViewInit {

  dataSource!: MatTableDataSource<Editorial>;
  columns: string[] = ['id', 'description'];
  totalElements!: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngOnInit(): void {
    this.totalElements = ELEMENT_DATA.length;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}