import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CardComponent } from './components/card/card.component';
import { ProductoComponent } from '../producto/pages/producto/producto.component';
import { DarktrapComponent } from './pages/darktrap/darktrap.component';
import { HardtrapComponent } from './pages/hardtrap/hardtrap.component';
import { MemphisrapComponent } from './pages/memphisrap/memphisrap.component';
import { CardDarktrapComponent } from './components/card-darktrap/card-darktrap.component';


@NgModule({
  declarations: [
    CardComponent,
    ProductoComponent,
    DarktrapComponent,
    HardtrapComponent,
    MemphisrapComponent,
    CardDarktrapComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  exports:[
    CardComponent,
    ProductoComponent,
    DarktrapComponent,
    HardtrapComponent,
    MemphisrapComponent
  ]
})
export class ProductosModule { }
