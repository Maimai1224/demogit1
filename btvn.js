    //bai5
var Doituong = {
    Ten : "Nguyen Thi M",
    Tuoi: 21,
    Gioitinh:"Nu",
    Xephang:[1,2,3,4,5,6],
	KhongBiet: null,
    KhongCoGi: undefined,
	Vuive: true,

}
console.log('Doi tuong:',Doituong)

//bai4
var ten ="Nguyen Thi M";
var tuoi = 21;
var ngaysinh = [2002,05,14];
var sothich ="ngu nuong";
var vuive = true;

console.log('ten:', ten , 'Tuoi:', tuoi,  'Ngaysinh:',ngaysinh ,  'So thich:',sothich,  'Vuive:',vuive)

//bai7 dien tich ,  chu vi tam giac,hcn
   //dien tich tam giac
var a = 10;
var h = 20;
var s = (a*h)/2;
console.log('Dien tich tam giac: ',s)
   //dien tich , chu vi HCN
var width = 10;
var height = 20;
var s = width*height;
var p = 2*(width+height);
console.log('Dien tich chu nhat: ',s)
console.log('Chu vi chu nhat: ',p)


//btbs 1

var a = 10;
var x = --a + a++;
console.log(x);

//gt a=10
//x= 9 + a++ -->a=9
//x=9+9=18 



//btbs 2

var a = 10;
var b = 18;
var x = a-- + b++ - ++b - ++a;
console.log(x);
//gt:
// a=10 , b=18
//x= 10 + 18 - ++b - ++a --> a=9 , b=19
//x = 10 + 18 - 20 - 10 = -2







