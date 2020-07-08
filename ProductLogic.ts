import {Product} from './Product';

class ProductLogic{

    
    private products: Array<Product>;
    constructor(){
        this.products = new Array<Product>();
    }

    ListProducts(productList : Array<Product>): void {
        productList.forEach((product, index) => {
            console.log(JSON.stringify(product));
        })
    }

    ListAllProductByProperties(productList : Array<Product>, property:string) : void {
        this.GroupBy(productList,property).forEach((product, index) => {
            console.log(JSON.stringify(product));
        })
    }

     GroupBy(productList : Array<Product>, property:string) : Array<Product> {
        return productList.reduce((groupedProduct : any, product) => {
          let key = property;
          if (!groupedProduct[key]) {
            groupedProduct[key] = []
          }
          groupedProduct[key].push(product)
          return groupedProduct
        }, {})
      }

      AddProduct(product:Product): void{
        let validateProduct = this.products.filter(x=> x.ProductId === product.ProductId)
        if(validateProduct === undefined && this.ValidateProduct(product))
        {
            this.SaveAllProduct(product);
            console.log("Product Saved");
        }
        else
            console.log("Please provide valid Product");
      }

      ValidateProduct(product: Product) : boolean {

        if (!/^[a-zA-Z]+$/.test(product.ProductName)) {
            console.log("ProductName is not a string");
            return false;
        }

        if (!/^[a-zA-Z]+$/.test(product.Category)) {
            console.log("Category is not a string");
            return false;
        }

        if (!/^[a-zA-Z]+$/.test(product.Manufacturer)) {
            console.log("Manufacturer is not a string");
            return false;
        }

        if (product.Description.length > 100) {
            console.log("Description can not be more than 100 charachetrs");
            return false;
        }

        if (product.Price < 0) {
            console.log("Price can not be negative");
            return false;
        }

        return true;
      }

      SaveAllProduct(...productList : Array<Product>) : void{
        productList.forEach((product, i) => {
            this.products.push(product);
        })  
      }

    UpdateProduct(product: Product) : void {
        let updateIndex = this.products.indexOf(product);
        if(updateIndex >= 0 )
        {
            if(this.ValidateProduct(product))
            {
                this.products[updateIndex].ProductName = product.ProductName;
                this.products[updateIndex].Category = product.Category;
                this.products[updateIndex].Description = product.Description;
                this.products[updateIndex].Price = product.Price;
                this.products[updateIndex].Manufacturer = product.Manufacturer;
            }
        }
        
      }
    
     DeleteProduct(productId : number): void {
        this.products = this.products.filter(x => x.ProductId !== productId);
        console.log("Product Deleted");
     }

     ProductOperation() : void {
        this.AddProduct(new Product(1, "Lenovo123","Laptop","Lenovo","Good", 125000));
        this.AddProduct(new Product(2, "Dell123","Laptop","Dell","Good", 15000));
        this.AddProduct(new Product(3, "IBM14","Laptop","IBM","Good", 15000));
        this.AddProduct(new Product(4, "IBM123","Desktop","IBM","Good", 25600));
        this.AddProduct(new Product(5, "Dell13","Laptop","Dell","Good", -1235));

        this.ListAllProductByProperties(this.products, "Category");

        this.UpdateProduct(new Product(2, "Dell123","Laptop","Dell","expensive", 156000))

        this.DeleteProduct(3);

        this.ListProducts(this.products);
     }
}