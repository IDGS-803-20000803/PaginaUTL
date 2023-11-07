import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarSomosComponent } from './components/nav-bar-somos/nav-bar-somos.component';

@NgModule({
  declarations: [NavBarComponent, NavBarSomosComponent, FooterComponent],
  imports: [CommonModule],
  exports: [NavBarComponent, NavBarSomosComponent, FooterComponent],
})
export class SharedModule {}
