# JSON (JavaScript Object Notation)

## Documentation
https://www.json.org/json-en.html

## File expension
.json

## Values
 - string 
 - number
 - array
 - object
 - booleans
 - null

 ### examples:

 #### string
 Must be doublequoted 
 empty string: ""

 ```json
 "this is a string"
 "Here is \"quote\" in the 'middle'"
 "heart symbol \u2665"
 ```

 ### Number 
 - no leading +
 - only one leading 0
 - decimal delimiter is .

 These are allowed:
 ```json
 0, 0.5, 
 345.54, 
 1200, 
 1.5e10, 2e-2, 2e+2, 
 -1, -11.4, 
```
 These are not allowed:
 ```json
 000.34, 
 +20,
 00034
 ```

 ### array
 Array begins with [ ]. Values in the array are separated by a comma.
 
 #### example

 ```json
 [1,2,3,4]
 ["text1","text2"],
 [true, null, false]

 [
    {"name":"Puk"}
 ]
 [
    [1,2,3],
    [4,5,6]
 ]
````
### Object

An object begins with {}. The object consists of comma speparated key-value pairs.
### example
```json
{
    "firstname":"matt",
    "lastname":"river"
}
```
```json
{
    "firstname":"Vera",
    "children":[
        {"firstname":"Vera","age":5}
        {"firstname":"John","age":7}
    ]
}
```