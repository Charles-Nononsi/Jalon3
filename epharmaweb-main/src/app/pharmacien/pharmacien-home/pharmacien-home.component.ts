import { Component, OnInit } from '@angular/core';
import { product } from '../../data-type';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-pharmacien-home',
  templateUrl: './pharmacien-home.component.html',
  styleUrls: ['./pharmacien-home.component.css']
})
export class PharmacienHomeComponent implements OnInit {
  productCatalogue: undefined | product[];
  productMessage: undefined | string;
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.catalogue();
  }

  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = "product is deleted";

        this.catalogue();
      }
    });

    setTimeout(() => {
      this.productMessage = undefined
    }, 4000);
  }

  catalogue() {
    this.product.productCatalogue().subscribe((result) => {
      if (result) {
        this.productCatalogue = result;
      }
    });
  }

}
