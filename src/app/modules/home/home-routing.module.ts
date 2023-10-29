import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { NavBarComponent } from 'src/app/shared/components/nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
