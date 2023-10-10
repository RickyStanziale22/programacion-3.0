import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  coleccionProductos: Producto[] =[]; //creamos colleccion basada en interfaz producto
  
  productosSeleccionado!: Producto; // ! -> recibir valores vacios

  modalVisibleProducto: boolean = false;

  // modalVisible: boolean = false;
  // eliminarVisible: boolean = false;

  //formulario vínculado al archivo html
  producto = new FormGroup({
    nombre: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required),
    alt: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    precio: new FormControl(0,Validators.required),
    categoria: new FormControl('',Validators.required)
  })

  constructor(
    public servicioCrud: CrudService // patentamos servicio de forma local
  ){}
  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto =>{
      this.coleccionProductos = producto;
    })
  }
  async agregarProducto(){ //metodo para validar esos valores del producto agregado
    if(this.producto.valid){
      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!,
        descripcion: this.producto.value.descripcion!,
        precio: this.producto.value.precio!,
        categoria: this.producto.value.categoria!,
      };

      await this.servicioCrud.crearProducto(nuevoProducto)
      .then(producto => {
        alert("Ha agregadoun nuevo producto con exito :)");
      })
      .catch(error => {
        alert("Hubo un error al cargar el nuevo producto :( \n"+error); 
      })
    }
  }

  //EDITAR PRODUCTO -> VINCULA AL MODAL DE EDITAR
  mostrarEditar(productosSeleccionado: Producto){
    this.productosSeleccionado = productosSeleccionado;
/*retomamos y enviamos los valores de ese producto seleccionado,el ID no se vuelve a enviar porque no se modifica*/
    this.producto.setValue({
      nombre: productosSeleccionado.nombre,
      imagen: productosSeleccionado.imagen,
      alt: productosSeleccionado.alt,
      descripcion: productosSeleccionado.descripcion,
      precio: productosSeleccionado.precio,
      categoria: productosSeleccionado.categoria
    })
  }

  //vincula a boton "GUARDAR CAMBIOS"
  editarProducto(){
    let datos: Producto = {
      idProducto:this.productosSeleccionado.idProducto,
      //signo de exclamación "!" -> puede recibir valores vacios al iniciar 
      nombre: this.producto.value.nombre!,
      imagen: this.producto.value.imagen!,
      alt: this.producto.value.alt!,
      descripcion: this.producto.value.descripcion!,
      precio: this.producto.value.precio!,
      categoria: this.producto.value.categoria!,
    }

    this.servicioCrud.modificarProducto(this.productosSeleccionado.idProducto, datos).then(producto=>{
      alert("el producto fue modificado con éxito :).");
    })
    .catch(error =>{
      alert("no se pudo modificar el producto :( \n"+error);
    })
  } 
}
