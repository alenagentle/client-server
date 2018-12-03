import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { EndPipe } from './list/end.pipe'
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { DatalistComponent } from './datalist/datalist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ListComponent,
    ListItemComponent,
    EndPipe,
    DatalistComponent

  ],
  imports: [
  BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
