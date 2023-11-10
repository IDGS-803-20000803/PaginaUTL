import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { AboutComponent } from './about/about.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { NormativaComponent } from './normativa/normativa.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { UtlComponent } from './utl/utl.component';


const routes: Routes = [
  {
    path: '',
    component: PageComponent,
  },
  {
    path: 'mensaje',
    component: MensajeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'normativa',
    component: NormativaComponent
  },
  {
    path: 'contactanos',
    component: ContactanosComponent
  },
  {
    path: 'noticias',
    component: NoticiasComponent
  },
  {
    path:'UTL',
    component: UtlComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
