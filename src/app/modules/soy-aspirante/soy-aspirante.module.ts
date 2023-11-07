import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SoyAspiranteRoutingModule } from './soy-aspirante-routing.module';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, SharedModule, SoyAspiranteRoutingModule],
})
export class SoyAspiranteModule {}
