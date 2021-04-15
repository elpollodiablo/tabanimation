import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkflowPage } from './workflow.page';

const routes: Routes = [
  {
    path: '',
    component: WorkflowPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    WorkflowPage,
  ],
  entryComponents: [
  ],
  exports: [
  ],

})
export class WorkflowPageModule {}
