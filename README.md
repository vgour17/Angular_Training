# Angular_Training

Assignment 2:

1. Create a Product class, this class will have properties like ProductId, ProductName, Category, Manufacturer, Description, Price
2. Create a ProductLogic class, this class will contains following methods
   1. List all Products
   2. List all products by (Category/Manufacturer)
   3. Create a new Product
      1. Validate the Product creation based on Following rules
         1. ProductId must be unique
         2. ProductName must be string
         3. Category Name, Manufacturer must be string
         4. Description should not be more than 100 charachetrs
         5. Price should not be -ve
   4. Update the product (with all validations)
   5. Delete the Product 
   6. Save all products in Array<Product>