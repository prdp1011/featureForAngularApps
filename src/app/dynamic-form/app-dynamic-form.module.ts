import { DynamicAppFormComponent } from './app-dynamic-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MaterialModule } from './material.module';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';

const routes: Routes = [
  // { path: '', loadChildren: () => import(`./welcome/welcome.module`).then(m => m.WelcomeModule) },
  { path: '', component: DynamicAppFormComponent },
];

@NgModule({
  declarations: [
    DynamicAppFormComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
  ]
})
export class DynamicFormModule { }
