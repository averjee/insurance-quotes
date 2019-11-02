import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@NgModule({
    imports: [RouterModule.forRoot([
        { path: "", component: ListComponent },
        { path: "add", component: FormComponent },
        { path: "**", redirectTo: "" }
    ])],
    exports: [RouterModule]
})

export class AppRouterModule { }