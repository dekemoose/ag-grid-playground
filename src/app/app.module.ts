import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { RowGroupTestComponent } from './row-group-test/row-group-test.component';
import { SimpleCellRenderer } from './row-group-test/simple-cell-renderer.component';
import { BaseGridTestComponent } from './base-grid-test/base-grid-test.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AgGridModule],
  declarations: [AppComponent, RowGroupTestComponent, SimpleCellRenderer, BaseGridTestComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
