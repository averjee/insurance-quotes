import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './router.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { DataService } from './data.service';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    ReactiveFormsModule
  ],
  providers: [DataService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
