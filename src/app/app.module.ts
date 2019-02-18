import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpParentComponent } from './emp-parent/emp-parent.component';
import { EmpChildComponent } from './emp-child/emp-child.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpParentComponent,
    EmpChildComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

