# Back-end Model (MongoDB)

Link : http://localhost:5001/graphql

## List
* [Model](#Model)
    * [User Model](#User-Model)
    * [Product Model](#Product-Model)
    * [Promotion Model](#Promotion-Model)
    * [Customer Model](#Customer-Model)
    * [Order Model](#Order-Model)

* [Mutation](#Mutation)
  * [User Mutation](#User-Mutation)
    * [createUser](#createUser)
    * [updateUserById](#updateUserById)
    * [removeUserById](#removeUserById)
    * [login](#login)
  * [Product Mutation](#Product-Mutation)
    * [createProduct](#createProduct)
    * [updateProductById](#updateProductById)
    * [removeProductById](#removeProductById)
  * [Promotion Mutation](#Promotion-Mutation)
    * [createPromotion](#createPromotion)
    * [updatePromotionById](#updatePromotionById)
    * [removePromotionById](#removePromotionById)
  * [Customer Mutation](#Customer-Mutation)
     * [createCustomer](#createCustomer)
     * [updateCustomerById](#updateCustomerById)
     * [removeCustomerById](#removeCustomerById)

[comment]: <> (  * [Order Mutation]&#40;#Order-Mutation&#41;)

[comment]: <> (    * [createCategory]&#40;#createCategory&#41;)

[comment]: <> (    * [updateCategoryById]&#40;#updateCategoryById&#41;)

[comment]: <> (    * [removeCategoryById]&#40;#removeCategoryById&#41;)
* [Query](#Query)
    * [UserQuery](#UserQuery)
    * [ProductQuery](#ProductQuery)
    * [PromotionQuery](#PromotionQuery)
    * [CustomerQuery](#CustomerQuery)
  

## Model

### User Model

|    Name     |          Type          |
| :---------: | :--------------------: |
|    type     | ENUM (CUSTOMER, ADMIN) |
|    name     |         String         |
|  username   |     String, unique     |
|  password   |         String         |


#### Product Model

|    Name     |            Type            |
| :---------: | :------------------------: |
|    name     |           String           |
| description |           String           |
|    type     |       ENUM(BEDROOM, BATHROOM, KITCHEN, LIVINGROOM, OTHER)      |
|  quantity   | String  |
|    price    |  String   |
|  imageUrl   |           String           |
|    tags     |           Array            |
|  timestamp  |            Date            |

#### Promotion Model

|    Name     |           Type           |
| :---------: | :----------------------: |
|    name     |          String          |
| amount |          String          |
|   discount    |         String          |
|    productId     |      String     |
|total|String|
|  timestamp  |           Date           |

#### Customer Model

|    Name     |          Type          |
| :---------: | :--------------------: |
| nameAddress | ENUM (CUSTOMER, ADMIN) |
|   address   |         String         |
|    email    |     String, unique     |
|     tel     |         String         |
|  authorId   |      <b>User</b>       |

#### Order Model
|    Name     |          Type          |
| :---------: | :--------------------: |
|   customerID   |         String         |
|   promotionID   |         String         |
|   productsID   |         String         |
|   timestamp  |         String         |
|   subtotal   |         String         |
|   total   |         String         |
|   status   |         INCOMPLETE, COMPLETED         |



## Mutation

### User Mutation

##### createUser

```
mutation{
  createUser(record:{
    type:CUSTOMER
    name:"Fourthza"
    username:"fourthza1"
    password:"1234"
    dateOfBirth:"2020-06-26"
  }) {
    recordId
  }
}
```

#### updateUserById

```
mutation{
  updateUserById(_id:"6072a13eb8c74417c0d60dac", record:{
    name:"Fourth"
  }){
    recordId
  }
}
```

#### removeUserById

```
mutation{
  removeUserById(_id:"6072a13eb8c74417c0d60dac"){
    recordId
  }
}
```

##### login

```
mutation{
  login(username:"Fourthza" password:"1234"){
    token
    user{
      _id
      name
    }
  }
}
```

### Product Mutation

#### createProduct

```
mutation{
  createProduct(record:{
    name:"TARVA ทาร์ฟวา"
    description:"โครงเตียง, ไม้สน/ลูร์เอย150x200 ซม"
    type:BEDROOM
    quantity:"10"
    price:"4990"
    imageUrl:"https://www.ikea.com/th/th/images/products/tarva-bed-frame-pine-luroey__0861223_pe555571_s5.jpg?f=g"
    tags:["Bedroom", "Best sale"]
  }) {
    recordId
  }
}
```

#### updateProductById

```
mutation{
  updateProductById(_id:"6072a141b8c74417c0d60dad", record:{
    name:"product update"
  }){
    recordId
  }
}
```

#### removeProductById

```
mutation{
  removeProductById(_id:"6072a141b8c74417c0d60dad"){
    recordId
  }
}
```

### Promotion Mutation

#### createPromotion

```
mutation{
  createPromotion(record:{
    name:"ที่นอนและเครื่องนอนอิเกียลด 15%"
    amount:10
		discount: 15
    productId: "6080574b264b196495bb8fb2"
  }) {
    recordId
  }
}
```

#### updatePromotionById

```
mutation{
  updatePromotionById(_id:"6072a143b8c74417c0d60dae", record:{
    name:"promotion best seller"
  }){
    recordId
  }
}
```

#### removePromotionById

```
mutation{
  removePromotionById(_id:"6072a143b8c74417c0d60dae"){
    recordId
  }
}
```

### Customer Mutation

#### createCustomer

```
mutation{
  createCustomer(record:{
    nameAddress:"address"
    address:"address"
    email:"email@h.com"
    tel:"0123456789"
    authorId:"606d5676e3f7c30f44cb6289"
  }) {
    recordId
  }
}
```

#### updateCustomerById

```
mutation{
  updateCustomerById(_id:"6072a15cb8c74417c0d60daf", record:{
    tel:"test hello"
  }){
    recordId
  }
}
```

#### removeCustomerById

```
mutation{
  removeCustomerById(_id:"6072a15cb8c74417c0d60daf"){
    recordId
  }
}
```




<hr>

## Query

#### UserQuery

```
query{
  user{
    _id
    name
    username
    type
  }
}
```

##### HTTP HEADERS\*

```
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZkNTY3NmUzZjdjMzBmNDRjYjYyODkiLCJpYXQiOjE2MTgxMTQ2MzMsImV4cCI6MTYxODIwMTAzM30.ma2Mklxz78njpgfO3zRnWcKvMUorXPjfTtHV6n8he00"
}
```

#### ProductQuery

```
query{
  products{
    _id
    name
    description
    type
    quantity
    price
    imageUrl
    tags
    timestamp
  }
}



```

#### PromotionQuery

```
query{
  promotions{
    _id
    name
  	amount
    discount
    timestamp
    product{
      name
      price
      imageUrl
    }
    total
  }
}
```

#### CustomerQuery

```
query{
  customers{
    author{
      name
      username
    }
    nameAddress
    address
    email
    tel
  }
}
```


