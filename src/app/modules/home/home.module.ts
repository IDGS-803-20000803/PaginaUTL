import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PageComponent } from './page/page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { NormativaComponent } from './normativa/normativa.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { UtlComponent } from './utl/utl.component';


@NgModule({
  declarations: [
    PageComponent,
    AboutComponent,
    MensajeComponent,
    NormativaComponent,
    ContactanosComponent,
    NoticiasComponent,
    UtlComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HomeModule { }
