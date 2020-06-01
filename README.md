# Billing App
In this repo, the backend for a billing application has been setup. This is done to help the students who are learning front end development either React / Angular / Vue to build an application to test out their skills. 

The modules are as follows  
1. User 
2. Customer
3. Product 
4. Bill 


## API's **base url - http://dct-billing-app.herokuapp.com/api**


### User Resource 

| # | action | method | url | request | response | auth (headers) |
| ---- |-----|-------|--------|---------|------| ------|
| 1. | register a user | POST | /users/register | <ul> <li> username*  </li> <li> email*  </li> <li> password*  </li> <li> businessName  </li> <li> address  </li> </ul>  |  <ul> <li> _id </li> <li> username </li> <li> email </li>  <li> password </li> <li> businessName </li> <li> address</li> <li> createdAt</li> <li> updatedAt </li> </ul> | no | 
| 2. | login a user | POST | /users/login |  <ul> <li> email* </li> <li> password* </li> </ul> | <ul> <li>  token </li></ul> | no |
| 3. | get user information | GET | /users/account | - |  <ul> <li> _id </li> <li> username </li> <li> email </li>  <li> password </li> <li> businessName </li> <li> address</li> <li> createdAt</li> <li> updatedAt </li> </ul> | `{ Authorization : 'Bearer token'}` |

**note - * indicates a required field**

---

### Customer Resource 

| # | action | method | url | request | response | auth (headers) |
| ----- |-----|-------|--------|---------|------| ------|
| 1. | lists all customers | GET | /customers | - | empty array or array of objects <br/> | `{ Authorization : 'Bearer token'}` | 
| 2. | create a customer | POST | /customers  | <ul><li>name*</li> <li>mobile*</li> <li> email </li></ul> | <ul> <li>_id</li> <li> name </li> <li>mobile</li><li>email</li> <li>user</li><li>createdAt</li> <li>updatedAt</li> </ul>| `{ Authorization : 'Bearer token'}` |
| 3. | get a customer | GET | /customers/:id  | - | <ul> <li>_id</li> <li> name </li> <li>mobile</li><li>email</li> <li>user</li><li>createdAt</li> <li>updatedAt</li> </ul> | `{ Authorization : 'Bearer token'}` |
| 4. | update a customer | PUT | /customers/:id  | <ul><li>name*</li> <li>mobile*</li> <li> email </li></ul> | <ul> <li>_id</li> <li> name </li> <li>mobile</li><li>email</li> <li>user</li><li>createdAt</li> <li>updatedAt</li> </ul> | `{ Authorization : 'Bearer token'}` |
| 5. | delete a customer | DELETE | /customers/:id  | - | <ul> <li>_id</li> <li> name </li> <li>mobile</li><li>email</li> <li>user</li><li>createdAt</li> <li>updatedAt</li> </ul> | `{ Authorization : 'Bearer token'}` |

**note - * indicates a required field**

---

### Product Resource 

| # | action | method | url  | request | response | auth (headers) |
| ---- |-----|-------|--------|---------|------| ------|
| 1. | lists all products | GET | /products  | - | empty array or array of objects | { Authorization : 'Bearer token'} | 
| 2. | create a product | POST | /products  | <ul> <li>name*</li><li>price*</li> </ul> | <ul> <li>_id</li> <li>name</li><li>price</li><li>user</li><li>createdAt</li><li>updatedAt</li> </ul> | { Authorization : 'Bearer token'} |
| 3. | get a product | GET | /products/:id  | - | <ul> <li>_id</li> <li>name</li><li>price</li><li>user</li><li>createdAt</li><li>updatedAt</li> </ul> | { Authorization : 'Bearer token'} |
| 4. | update a product | PUT | /products/:id  |<ul> <li>name*</li><li>price*</li> </ul> | <ul> <li>_id</li> <li>name</li><li>price</li><li>user</li><li>createdAt</li><li>updatedAt</li> </ul> | { Authorization : 'Bearer token'} |
| 5. | delete a product | DELETE | /products/:id  | - | <ul> <li>_id</li> <li>name</li><li>price</li><li>user</li><li>createdAt</li><li>updatedAt</li> </ul>  | { Authorization : 'Bearer token'} |

**note - * indicates a required field**

---

### Bill Resource 

| # | action | method | url | request | response | auth (headers) |
| ---- |-----|-------|--------|---------|------| ------|
| 1. | List all bills | GET | /bills | - | empty array or array of objects | { Authorization : 'Bearer token'} | 
| 2. | create a bill | POST | /bills | <ul><li>date*</li><li>customer*</li><li>lineItems* <ul><li>product*</li><li>quantity</li></ul></li></ul> | <ul> <li>_id</li> <li>date</li><li>customer</li><li>lineItems <ul><li>_id</li><li>product</li><li>price</li><li>quantity</li><li>subTotal</li></ul> </li><li>user</li><li>createdAt</li><li>updatedAt</li><li>total</li> </ul> | { Authorization : 'Bearer token'} |
| 3. | get a bill | GET | /bills/:id  | - |  <ul> <li>_id</li> <li>date</li><li>customer</li><li>lineItems <ul><li>_id</li><li>product</li><li>price</li><li>quantity</li><li>subTotal</li></ul> </li><li>user</li><li>createdAt</li><li>updatedAt</li><li>total</li> </ul> | { Authorization : 'Bearer token'} |
| 4. | delete a bill  | DELETE | /bills/:id | - |  <ul> <li>_id</li> <li>date</li><li>customer</li><li>lineItems <ul><li>_id</li><li>product</li><li>price</li><li>quantity</li><li>subTotal</li></ul> </li><li>user</li><li>createdAt</li><li>updatedAt</li><li>total</li> </ul>  | { Authorization : 'Bearer token'} |

**note - * indicates a required field**

