# Billing App
This repo, is a backend only rest api services setup for a billing application. This is meant to be useful for students learning front end skills either React/Angular/Vue. There is always a need for Backend API's to be setup for them to create any meaningful application. 

## API's
### Customer Resource 

| method | url | action | request | response | auth (headers) |
|-----|-------|--------|---------|------| ------|
| GET | /customers | lists all customers | - | empty array or array of objects | { Authorization : 'Bearer token'} | 
| POST | /customers | create a customer | body - string | id - number, body - string, createdAt - date | { Authorization : 'Bearer token'} |
| GET | /customers/:id | get a customer | - | id - number, body - string, createdAt - date | { Authorization : 'Bearer token'} |
| PUT | /customers/:id | update a customer | body - string | id - number, body - string, createdAt - date | { Authorization : 'Bearer token'} |
| DELETE | /customers/:id | delete a customer | - | id - number, body - string, createdAt - date  | { Authorization : 'Bearer token'} |