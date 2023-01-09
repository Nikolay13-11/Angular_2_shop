# Changelog

### Introduction 

- FirstComponent
  - added for test to show different data in template. Was remove from app component.
- ProductComponent
  - was added. Collects cart which I pass from Parent list component using Input and method which say to console information that we buy something.
- ProductListComponent
  - was added. Get list of products from ProductService. Build list of products using gnFor and pass product to child productComponents.
- ProductsService
  - was added. Collects mock array with products and method to get list of products.
- ProductModel
  - was added. Includes only one interface for product.
- CartListComponent
  - was added. Collect UI part to show cart with items and icon with count of elements.
- CartService 
  - Was added. This service collect array with two mock items which we can get using getCart method.
- Header Component
  - was added basic header component with only name of the shop


### Components
  1. Add separate modules for every entity of app;
  2. App module was remove, App component change to standalone and start of application begin from the App Component;
  3. To ProductComponent add button to add product to the cart with disable possibility which depends on availability of the product;
  4. To Cart Service add methods to get totalCost and totalQuantity;
  5. Add onQuantityIncrease/onQuantityDecrease methods to change quantity of the products in the cart;
  6. Add onDeleteItem method to delete items from the cart;
  7. Information about cost and quantity added to the Cart Component;
  8. To App Component add Template variable to show Title. @ViewChild uses to pass data to this variable. Also added ng-content to project Title in the Header Component;
  9. Add HighLightDirective to change background of cart items;
  10. Header component change to standalone;

