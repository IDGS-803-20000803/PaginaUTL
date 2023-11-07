import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SomosUtlRoutingModule } from './somos-utl-routing.module';
import { PageComponent } from '../soy-aspirante/page/page.component';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, SharedModule, SomosUtlRoutingModule],
})
export class SomosUtlModule {}
