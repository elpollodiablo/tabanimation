// tablinks-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
//import { enterAnimation } from './animations/nav-animation';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
  		{
        path: 'a/:something',
				loadChildren: () => import('../pages/workflow/workflow.module').then(m => m.WorkflowPageModule),
      },
  		{
        path: 'b/:something',
        loadChildren: () => import('../pages/search/search.module').then(m => m.SearchPageModule),
      },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
