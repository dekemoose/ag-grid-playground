import { Component } from '@angular/core';
import 'ag-grid-enterprise';
import { ColDef, RowGroupingDisplayType } from 'ag-grid-community';
import { SimpleCellRenderer } from './simple-cell-renderer.component';
import { getData } from './data';

@Component({
  selector: 'app-row-group-test',
  templateUrl: './row-group-test.component.html',
  styleUrls: ['./row-group-test.component.scss']
})
export class RowGroupTestComponent {
  public columnDefs: ColDef[] = [
    // this column shows just the country group values, but has not group renderer, so there is no expand / collapse functionality
    {
      headerName: 'Country Group - No Renderer',
      showRowGroup: 'country',
      minWidth: 250,
    },
    // same as before, but we show all group values, again with no cell renderer
    {
      headerName: 'All Groups - No Renderer',
      showRowGroup: true,
      minWidth: 240,
    },
    // add in a cell renderer
    {
      headerName: 'Group Renderer A',
      showRowGroup: true,
      cellRenderer: 'agGroupCellRenderer',
      minWidth: 220,
    },
    // add in a field
    {
      headerName: 'Group Renderer B',
      field: 'city',
      showRowGroup: true,
      cellRenderer: 'agGroupCellRenderer',
      minWidth: 220,
    },
    // add in a cell renderer params
    {
      headerName: 'Group Renderer C',
      field: 'city',
      minWidth: 240,
      showRowGroup: true,
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: {
        suppressCount: true,
        checkbox: true,
        innerRenderer: SimpleCellRenderer,
        suppressDoubleClickExpand: true,
        suppressEnterExpand: true,
      }
    },
    { headerName: 'Type', field: 'type', rowGroup: true },
    { headerName: 'Country', field: 'country', rowGroup: true },
    { headerName: 'City', field: 'city', hide: true },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 120,
    resizable: true,
  };
  public rowData: any[] | null = getData();
  public groupDisplayType: RowGroupingDisplayType = 'custom';
  public groupDefaultExpanded = 1;
  public rowSelection: 'single' | 'multiple' = 'multiple';
}
