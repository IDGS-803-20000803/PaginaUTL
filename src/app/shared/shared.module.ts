import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarSomosComponent } from './components/nav-bar-somos/nav-bar-somos.component';

@NgModule({
  declarations: [NavBarComponent, NavBarSomosComponent],
  imports: [CommonModule],
  exports: [NavBarComponent, NavBarSomosComponent],
})
export class SharedModule {}
