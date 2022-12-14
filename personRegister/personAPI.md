# Person API

## persons.json
```json
[
    {"firstname":"Matt","lastname":"River", "age":30},
    {"firstname":"Jesse","lastname":"River", "age":10},
    {"firstname":"Mary","lastname":"Smith", "age":50}
]
```

## Datalayer for persons

## function **search(key,value)**

Function returns an array of person objects. Search criterion is passed to the function as parameters. If parameters are missing, all persons will be returned.

-   search() returns an array of all persons
-   search(key,value) returns an array of all matching persons

If no match is found an empty array is returned

## Server usage

## search all persons
http://localhost:3000/persons

same origin fetch: /persons

## search by firstname
http://localhost:3000/persons/firstname?value=Matt

same origin fetch: /persons/firstname?value=Matt

## search by lastname
http://localhost:3000/persons/lastname?value=River

same origin fetch: /persons/lastname?value=River

## search by age
http://localhost:3000/persons/age?value=30

same origin fetch: /persons/age?value=30

## SPA (single page application)
uses fetch to get data to the browser.

## Additional info

Server serves also styles and javascript 