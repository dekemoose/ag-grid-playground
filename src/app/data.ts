import { ColDef } from 'ag-grid-enterprise';

export const columnDefs: ColDef[] = [
  { field: 'make', filter: 'agTextColumnFilter' },
  { field: 'model' },
  { field: 'price' },
];

export const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 },
];

export const csvTestData = [
  {
    Fund_Name: 'Miracle Capital Partners, LP',
    As_of_Date: '30-Apr-2020',
    CCY: 'USD',
    CCY_Holdings_Amt: '1,387,888,037.23',
    Holdings_USD_Equiv: '1,387,888,037.23',
  },
  {
    Fund_Name: 'Miracle Capital Offshore Fund, Ltd',
    As_of_Date: '30-Apr-2020',
    CCY: 'USD',
    CCY_Holdings_Amt: '979,576,847.43',
    Holdings_USD_Equiv: '979,576,847.43',
  },
  {
    Fund_Name: 'Miracle Capital Partners, LP',
    As_of_Date: '30-Apr-2020',
    CCY: 'EUR',
    CCY_Holdings_Amt: '1,518,965.41',
    Holdings_USD_Equiv: '1,663,722.82',
  },
];

export const csvTestColumnDefs: ColDef[] = [
  { field: 'Fund_Name', flex: 1 },
  { field: 'As_of_Date', flex: 1 },
  { field: 'CCY', flex: 1 },
  { field: 'CCY_Holdings_Amt', flex: 1 },
  { field: 'Holdings_USD_Equiv', flex: 1 },
];
