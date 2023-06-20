var person1 = {name: "John", age: 30};
var person2 = {name: "John", age: 30};
var person3 = {name: "John", age: 25};
areObjectsEqual(person1, person2); // Kết quả là true
//areObjectsEqual(person1, person3); // Kết quả là false
console.log(areObjectsEqual)



function areObjectsEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  
    return true;
  }







