import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { ProductoServiceService } from '../services/producto-service.service';
import { AddProductoPage } from '../add-producto/add-producto.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  productoDatos: any;

  constructor(private navController: NavController, private productoService: ProductoServiceService, private toastController: ToastController, private modalController: ModalController, private nav: NavController) { }

  ngOnInit() {
    this.getProducto();
  }

  getProducto() {
    this.productoService.getProductos().subscribe(res => {
          this.productoDatos = res;
        },
        err => console.error(err)
    );    
  }

  editProducto(producto: any){

    localStorage.setItem("id_producto",producto.id_producto);
    localStorage.setItem("nombre_producto",producto.nombre_producto);
    localStorage.setItem("precio_producto",producto.precio_producto);
    this.navController.navigateRoot('/edit-producto')
    
  }

  addProducto(){
    this.navController.navigateRoot('/add-producto')
  }


  deleteProducto(producto: any) {
    this.productoService.deleteProducto(producto.id_producto)
      .subscribe(
        res => {
          this.toastDelete(producto.nombre_producto);
          this.ngOnInit();
        },
        err => console.error(err)
      )
  }












  // TOASTS

  async toastDelete(nombre_producto: any) {
    const toast = await this.toastController.create({
      message: 'Producto Eliminado: '+nombre_producto,
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }
}
