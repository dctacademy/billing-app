# Billing App
This repo, is a backend only rest api services setup for a billing application. This is meant to be useful for students learning front end skills either React/Angular/Vue. There is always a need for Backend API's to be setup for them to create any meaningful application. 

## API's

### User Resource 

| method | url | action | request | response | auth (headers) |
|-----|-------|--------|---------|------| ------|
| POST | /users/register | register a user | username - string, email - string, password - string, businessName - string, address - string | _id - string, username - string, email - string, password - string, businessName - string, address - string, createdAt - String, updatedAt - String | no | 
| POST | /users/login | login a user | email - string, password - string| token - String | no |
| GET | /users/account | get user information | - |  _id - string, username - string, email - string, password - string, businessName - string, address - string, createdAt - String, updatedAt - String | { Authorization : 'Bearer token'} |

### Customer Resource 

| method | url | action | request | response | auth (headers) |
|-----|-------|--------|---------|------| ------|
| GET | /customers | lists all customers | - | empty array or array of objects | { Authorization : 'Bearer token'} | 
| POST | /customers | create a customer | body - string | id - number, body - string, createdAt - date | { Authorization : 'Bearer token'} |
| GET | /customers/:id | get a customer | - | id - number, body - string, createdAt - date | { Authorization : 'Bearer token'} |
| PUT | /customers/:id | update a customer | body - string | id - number, body - string, createdAt - date | { Authorization : 'Bearer token'} |
| DELETE | /customers/:id | delete a customer | - | id - number, body - string, createdAt - date  | { Authorization : 'Bearer token'} |

### Product Resource 

| method | url | action | request | response | auth (headers) |
|-----|-------|--------|---------|------| ------|
| GET | /products | lists all products | - | empty array or array of objects | { Authorization : 'Bearer token'} | 
| POST | /products | create a product | body - string | id - number, body - string, createdAt - date | { Authorization : 'Bearer token'} |
| GET | /products/:id | get a product | - | id - number, body - string, createdAt - date | { Authorization : 'Bearer token'} |
| PUT | /products/:id | update a product | body - string | id - number, body - string, createdAt - date | { Authorization : 'Bearer token'} |
| DELETE | /products/:id | delete a product | - | id - number, body - string, createdAt - date  | { Authorization : 'Bearer token'} |

### Bill Resource 

| method | url | action | request | response | auth (headers) |
|-----|-------|--------|---------|------| ------|
| GET | /bills | lists all bills | - | empty array or array of objects | { Authorization : 'Bearer token'} | 
| POST | /bills | create a bill | body - string | id - number, body - string, createdAt - date | { Authorization : 'Bearer token'} |
| GET | /bills/:id | get a bill | - | id - number, body - string, createdAt - date | { Authorization : 'Bearer token'} |
| DELETE | /bills/:id | delete a bill | - | id - number, body - string, createdAt - date  | { Authorization : 'Bearer token'} |