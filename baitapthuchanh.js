/**
 * Bài 1

  Viết code, một dòng cho mỗi yêu cầu sau:

  Tạo một đối tượng user trống.
  Thêm thuộc tính `name` với giá trị David.
  Thêm thuộc tính `surname` với giá trị Xuan.
  Thay đổi giá trị của `name` thành Cafedev.
  Xóa thuộc tính `name` khỏi đối tượng.
 */


  let user = {
    name:'David',
    surname:'Xuan'
  };
 // user.name = "Cafedev";//Thay đổi giá trị của `name`
  delete user.name;//Xóa thuộc tính `name` khỏi đối tượng.
  console.log(user)

  

  //bai2 
  /**
 * Viết hàm isEmpty (obj) trả về true nếu đối tượng không có thuộc tính, ngược lại là false.

  Để sử dụng cho đoạn code sau:
  */
  
  function isEmpty(obj) {
    for (let key in obj) {  
        return false;
      }
      return true;
    }
  
  var schedule = {};
  
  console.log(isEmpty(schedule)); // true
  
  schedule["8:30"] = "get up";
  
  console.log(isEmpty(schedule)); // false

  // bai 3 
  /**
 * Chúng ta có một đối tượng lưu trữ tiền lương của nhóm chúng ta:
   */
  var salaries_1 = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  
  var salaries_2 = {}
  /*
    Viết code để tính tổng tất cả các khoản lương và lưu trữ trong biến tổng. 
    Nếu tiền lương trống, thì kết quả phải là 0.
  */
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
      };
      
      let sum = 0;
      for (let key in salaries) {
        sum += salaries[key];
      }
    console.log(sum)

     // bài 4
/*Tạo một hàm multiplyNumeric(obj) nhân tất cả các thuộc tính số của obj với 2.
với Object sau:
  */
  
  // before the call
  var menu = {
    width: 200,
    height: 300,
    title: "My menu cafedev"
  };
  
  console.log('before the call', menu);
  
  multiplyNumeric(menu);  
  console.log('after the call', menu);
  
 //after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu cafedev"
  };
  
function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }

//bai 5                 (chưa làm đc ☻)
//Sắp xếp các nhân viên có cùng phòng ban vào với nhau xong đó in ra (phòng ban là division)
//Kêt quả mong muốn :
/* 
{
  id : 1,
  name : "Divsion 1",
  employee: [
    {
      name: "Nguyễn Văn A",
      posision: "developer",
      division: 1,
    },
    {
      name: "Nguyễn Văn C",
      posision: "tester",
      division: 1,
    }
  ]
}
*/
var employees = [
    {
      name: "Nguyễn Văn A",
      posision: "developer",
      division: 1,
    },
    {
      name: "Nguyễn Văn B",
      posision: "comtor",
      division: 2,
    },
    {
      name: "Nguyễn Văn C",
      posision: "tester",
      division: 1,
    },
    {
      name: "Nguyễn Văn D",
      posision: "tester",
      division: 3,
    },
  ];
  
  var divisions = [
    {
      id: 1,
      name: "Division 1"
    },
    {
      id: 2,
      name: "Division 2"
    },
    {
      id: 3,
      name: "Division 3"
    },
  ];


  // bai 6 
  Bai6 


// in ra số lần xuất hiện của các số
            //var daySo = [1, 2, 3, 4, 1, 3, 4, 2, 1, 5]
/**
 * expect:
 * 1 - 3
 * 2 - 2
 * 3 - 2
 * 4 - 2
 * 5 - 1
 * */

  

function count_element_in_array(array, x){
    let count = 0;
    for(let i=0;i<array.length;i++){
      if(array[i]==x) 
        count ++;
    }
    console.log( "Phan tu " +  x  + " xuat hien " + count +  " lan");
}
let array = [1, 2, 3, 4, 1, 3, 4, 2, 1, 5]
count_element_in_array(array, 2);
count_element_in_array(array, 4);


// bai 7 // bai 7

// Viết một hàm JavaScript để kiểm tra xem hai đối tượng có chứa tất cả các thuộc tính giống nhau hay không.
function areObjectsEqual(obj1, obj2) {
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

// Ví dụ:
var object1 = {name: "John", age: 30};
var object2 = {name: "John", age: 30};
var object3 = {name: "John", age: 25};
areObjectsEqual(object1, object2); // Kết quả là true
areObjectsEqual(object1, object3); // Kết quả là false


