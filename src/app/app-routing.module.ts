import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'tabbed',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)},
  { path: 'error/:error_id', loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorPageModule) },
  { path: 'error/:error_id/:return_to', loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
