import { Component } from '@angular/core';
import { ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;

  columnDefs = [
    { field: 'make', filter: 'agTextColumnFilter' },
    { field: 'model' },
    { field: 'price' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];

  onGridReady(event: GridReadyEvent) {
    this.gridApi = event.api;
    this.gridColumnApi = event.columnApi;
  }

  addFilter(field: string, values: any) {
    console.log(`Add filter is called...`);
    if (this.gridApi) {
      const colFilter = this.gridApi.getFilterInstance(field);
      if (colFilter) {
        console.log(`Setting filter on field ${field}`);
        colFilter.setModel({
          filterType: 'text',
          type: 'equals',
          filter: values,
        });
      }
      console.log(
        `Filter model is ${JSON.stringify(this.gridApi.getFilterModel())}`
      );
      this.gridApi.onFilterChanged();
    }
  }
}
