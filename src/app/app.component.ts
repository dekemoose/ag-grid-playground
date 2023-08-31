import { Component } from '@angular/core';
import { ColumnApi, GridApi } from 'ag-grid-enterprise';
import dayjs from 'dayjs';
import * as data from './data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  gridApi: GridApi;
  gridColumnApi: ColumnApi;

  columnDefs = data.csvTestColumnDefs;

  rowData = data.csvTestData;

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
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

  exportAs(format: string = 'CSV') {
    if (this.gridApi) {
      const datestr = dayjs().format('YYYYMMDDHHmmss');
      switch (format) {
        case 'CSV':
          this.gridApi.exportDataAsCsv({ fileName: `export_${datestr}.csv` });
          break;
        default:
          break;
      }
    }
  }
}
