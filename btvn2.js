//bai 6
/**
 * /**  Cách sử dụng Array và Object khác nhau như thế nào. Viết câu trả lời ở phía dưới. khác nhau cơ bản của Array và Object là Object có thuộc tính, trong Object sẽ có key và value, còn Array là tập hợp các phần tử. Nên sự khác nhau về cách dùng giữa 2 đối tượng này là Object có thể lấy ra giá trị của một thuộc tính bất kì bằng synxtax này: obj['attribute_name'] còn Array thì không.Array chỉ có thấy lấy giá trị ra bằng index
 * khác nhau cơ bản của Array và Object là :
 * Object có thuộc tính, trong Object sẽ có key và value 
 * còn Array là tập hợp các phần tử. Nên sự khác nhau về cách dùng giữa 2 đối tượng này là Object có thể lấy ra giá trị của một thuộc tính bất kì bằng synxtax này: obj['attribute_name'] còn Array thì không.Array chỉ có thấy lấy giá trị ra bằng index
 */
/*
Khai báo một array "listAnimal" chứa các object mô tả danh sách các con vật.
Mỗi con vật có 2 thuộc tính: name và age trong đó name có kiểu string, age có kiểu number.
* {name}: string;
* {age}: number;
*/

var listAnimal = [
  {name:'Meo', age: 2},
  {name:'Cho', age: 3},
  {name:'Ga', age: 1},
  {name:'Ca voi', age: 20},
  {name:'Ca heo', age: 10},
  
];
console.log(listAnimal)

//bai 9

// tăng 2 đơn vi.
var emptyArray = [ 1,  2, 3];

var updateArray = emptyArray.map(function (value)  
{
    return value +2;
})
console.log(updateArray);

//tăng gấp đôi
var emptyArray = [ 2,  4, 6];

var updateArray = emptyArray.map(function (value)  
{
    return value * 2;
})
console.log(updateArray);

    
// bai 10 Viết hàm tính thể tích khối hộp

function getBoxVolume(w, h, l) {
    return w* h* l;
   }
let result = getBoxVolume(10,20,30);
console.log('dien tich hinh hop : ',result)

// bai 11  Khai báo object có properties và methods
var rectangle = {
    width: 20,
    height: 30,
    getWidth: function() {
      return this.width;
    },
    getHeight: function() {
      return this.height;
    },
    getArea: function() {
      return this.getWidth() * this.getHeight();
    }
  };
  rectangle.getArea();

  //bai 13  Kiểm tra 1 số có phải là số nguyên tố hay không

  function isPrimeNumber (x) {
    var soUoc = 1;
    for (var i = 2; i <= x; i++) {
        if (x % i == 0) {
            soUoc = soUoc + 1;
        }
    }
    if (soUoc == 2) {
        return true; // trả về kết quả true;
    } else {
        return false; // trả về kết quả false;
    }
}
var x= 1;
if (isPrimeNumber(x)) {
    console.log(x + ' là số nguyên tố');
} else {
    console.log(x + ' không phải số nguyên tố');
}








