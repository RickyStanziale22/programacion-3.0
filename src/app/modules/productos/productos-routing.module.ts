import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from '../producto/pages/producto/producto.component';
import { DarktrapComponent } from './pages/darktrap/darktrap.component';
import { HardtrapComponent } from './pages/hardtrap/hardtrap.component';
import { MemphisrapComponent } from './pages/memphisrap/memphisrap.component';

const routes: Routes = [
  {
    path: "productos", component: ProductoComponent
  },
  {
    path: "darktrap", component: DarktrapComponent
  },
  {
    path: "hardtrap", component: HardtrapComponent
  },
  {
    path: "memphisrap", component: MemphisrapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
