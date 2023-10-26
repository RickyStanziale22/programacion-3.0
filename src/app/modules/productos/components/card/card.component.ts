import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
//colleccion para productos basada en la interfaz producto
 coleccionProductos: Producto[] = [];

 productosSeleccionado!: Producto;

 modalVisible: boolean = false;

 constructor(
  public servicioCrud: CrudService
 ){}

 ngOnInit(): void{
   this.servicioCrud.obtenerProducto().subscribe(producto => {
     this.coleccionProductos = producto;
   }) 
 }

  mostrarVer(info: Producto){//botón de la crud -> ver más información
    this.modalVisible = true; 

    //mostramos la información del producto
    this.productosSeleccionado = info;
  }
}
