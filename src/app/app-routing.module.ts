import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YamlGeneratorFormComponent } from './yaml-generator-form/yaml-generator-form.component';
import { StepTwoComponent } from './step-two/step-two.component';

const routes: Routes = [
  {
    path: '',
    component: YamlGeneratorFormComponent,
  },
  {
    path: 'detail',
    component: StepTwoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
