import { ValidateTypes } from "../inc/btDecorator";

class ProductService{
    @ValidateTypes()
    updateProduct(id:number,name:string,price:number){
        // console.log("Product updated!", id, name, price);

    }
}

const productService = new ProductService();
productService.updateProduct(1, "New Name", 100);