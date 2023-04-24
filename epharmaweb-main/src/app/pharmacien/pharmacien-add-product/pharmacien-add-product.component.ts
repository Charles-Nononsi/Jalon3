import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { product } from '../../data-type';
@Component({
  selector: 'app-pharmacien-add-product',
  templateUrl: './pharmacien-add-product.component.html',
  styleUrls: ['./pharmacien-add-product.component.css']
})
export class PharmacienAddProductComponent implements OnInit {
  addProductMessage: string | undefined;
  constructor(private product: ProductService) { }

  ngOnInit(): void {

  }

  submit(data: product) {
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result)
      if (result) {
        this.addProductMessage = "Product is add successfully";
      }
    });

    setTimeout(() => {
      this.addProductMessage = undefined
    }, 4000);
  }
}
