# Employee data storage

## employee.json

```json
[
    {
        "id":1,
        "firstname":"Leila",
        "lastname":"Hökki",
        "department":"ict",
        "salary":4000
    },
    {
        "id":2,
        "firstname":"Matt",
        "lastname":"River",
        "department":"ict",
        "salary":4000
    }
]
```

### public API (methods of Datastorage class)

#### datastorageLayer.js
-   getAll()
    -   returns an array of all employees / []
-   getOne(id)
    -   returns an employee object / NOT_FOUND
-   insert(newEmployee)
    -   returns INSERT_OK / NOT_INSERTED / ALREADY_IN_USE
-   update(updatedEmployee)
    -   returns UPDATE_OK / NOT_UPDATED
-   remove(id)
    -   REMOVE_OK / NOT_FOUND / NOT_REMOVED
-   getters for status codes
    -   returns an array of status codes