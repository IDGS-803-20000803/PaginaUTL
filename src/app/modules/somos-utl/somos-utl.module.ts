import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { SharedModule } from '../../shared/shared.module';
import { SomosUtlRoutingModule } from './somos-utl-routing.module';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, SharedModule, SomosUtlRoutingModule],
})
export class SomosUtlModule {}
