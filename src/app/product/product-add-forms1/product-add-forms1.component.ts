import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from '../product';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers : [CategoryService,ProductService,AlertifyService]
})
export class ProductAddForms1Component implements OnInit {

  constructor(private categoryService: CategoryService,
    private productService:ProductService,
    private alertifyService:AlertifyService
    ) { }
  //boş bir product nesnesi ile bir category dizisi oluşturuyoruz.
  model: Product = new Product();
  categories!: Category[];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  add(form:NgForm)
  {
    this.productService.addProduct(this.model).subscribe(data=>{
      this.alertifyService.success(data.name + " başarıyla eklendi");
    });

  }

}
