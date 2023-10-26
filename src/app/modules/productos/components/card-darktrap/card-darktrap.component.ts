import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-darktrap',
  templateUrl: './card-darktrap.component.html',
  styleUrls: ['./card-darktrap.component.css']
})
export class CardDarktrapComponent {
  coleccionProductos:Producto[]=[]
  darktrap:Producto[]=[]
  productosSeleccionado!:Producto
  modalVisible:boolean = false

  constructor(public servicioCrud:CrudService){
  }
  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto =>{
      this.coleccionProductos = producto;

      this.mostrarDarktrap();
    })
  }

  mostrarVer(info: Producto){
    // al seleccionar "ver más" el modal visible pasa a "true"
    this.modalVisible = true;
    // muestra la información del producto que se seleccione
    this.productosSeleccionado = info;
  }

  mostrarDarktrap(){
    // forEach itera la colección/ arreglo
    this.coleccionProductos.forEach(producto =>{
      /* si la categoría del producto es igual a "collares"
        se va a enviar a la colección "collares"*/
      if(producto.categoria === "darktrap"){
        this.darktrap.push(producto);
      }
    })
  }
}
