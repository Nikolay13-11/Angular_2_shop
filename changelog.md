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

### Services and DI
  1. Modify cart Service(add new methods and chang old to immutable approach);
  2. Add ConfigOptionsService with necessary methods and properties;
  3. Add ConstantsService with necessary methods and properties;
  4. Add GeneratorService with necessary methods and properties;
  5. Add generator genID and use in GeneratorService;
  6. Add LocalStorageService with necessary methods and properties;
  7. All Services inject to FirstComponent using @Optional();
  8. Add ChangeFontSizeDirective, which change font-weight for target element by click and include @Input() for set necessary value of font-weight or use default value;

### Pipes
  1. Add a few kinds of pipes. Currency, upperCase, keyValue, async;
  2. Add default currency for all application;
  3. Change getProducts method to return Promise array of products and use Async Pipe;
  4. Creat and add OrderByPipe to change order of cart;
  5. Add OrderByPipe pipe and necessary controls elements to CartListComponent;
  6. Change modules to use CommonModule, FormsModule by SharedModule;

### Routing
  1. Add routing in Application(include lazy loading modules and components);
  2. Rework Cart Component and add routing;
  3. Rework Header Component;
  4. Add empty "Process Order" Component and add routing with CanActivate Guard(depends on cart length);
  5. Add admin module with own routing and Guards(CanActivate, CanDeactivate, Resolve);
  6. Add components for admin:
  - Admin Component with navigation buttons;
  - Products Component to show table with all products in the shop;
  - AddProduct Component(now is empty) to add new products to the shop;
  - EditProduct Component(now is empty) to edit product(navigate to this component from Products table);
  - OrdersComponent(now is empty);
  7. Add Not found page;
  8. Add Login Component;
  9. Add Details Component for product;
