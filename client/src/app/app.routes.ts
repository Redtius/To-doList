import { Routes } from '@angular/router';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',

  },
  {
    path: 'login',
    redirectTo: 'home',
  },
  {
    path:'home',
    component:LandingpageComponent,
  },
  {
    path:'workspace',
    component:WorkspaceComponent,
  },
  {
    path:'**',
    redirectTo:'login',
  }


];
