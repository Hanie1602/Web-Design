//1. Khai báo biến: có let, var, const (đều dùng như nhau)
let a = 4;
let b = 5;
let c = a + b;
console.log(c);         //console: Để in ra màn hình (in ra cửa sổ màn hình Console)

//2. Khai báo hằng số: dùng const
// Cách dùng: const a = "Hello";

//3. Hàm alert
// Cách dùng: alert("Hello");

//4. Hàm confirm
//Cách dùng: confirm("Are you sure you want to continue?")

//5. Hàn prompt: nó hiện 1 cái bảng, có thể nhập dữ liệu vào
//Cách dùng: prompt("What is your name?")
/*Cách dùng để hiện thị ra màn hình: let d = prompt("What is your name?")
                                     console.log(d);*/

//------------------------------------------------------------------
//Get elements by class name: Chọn tất cả các class có tên heading
const headings = document.getElementsByClassName('heading');
console.log(headings);

const heading1 = document.getElementById('h1');     //Chọn phần tử theo id
const heading = document.querySelector('#id');      //Chọn id: #id, Chọn class: .heading

//----------------------------Thêm element (Add)----------------------------
//Các dấu: . là class, # là id, để không là tab (cái thẻ)
const body = document.querySelector('body');        
body.append('Hello World!', " Có thể thêm nhiều String nữa");         //Thêm chữ vào cuối dòng của thẻ body

//----------------------------Tạo element (Create)----------------------------
const newDiv = document.createElement('div')
newDiv.innerText = 'Thêm nội dung vào khối div';        //Thay thế C2 vào
body.append(newDiv);   

const img_element = document.createElement("img");
img_element.src="../Images/Rái cá 0.jpg";
body.appendChild(img_element);

/* newDiv.textContent = 'Hello World': tương tự như newDiv.innerText = ' '
   newDiv.innerHTML = '<b>Hello Worl</b>': chữ sẽ được in đậm   (hết sức lưu ý khi sử dụng)
   body.append(newDiv): Thêm phần tử mới tạo ra được vào trong html
   
   Cách 2: an toàn hơn khi dùng innerHTML
   const bold = document.createElement('b')
   bold.innerText = 'Hello World'
   newDiv.append(bold)*/

//-------------------------------Xóa element (Delete)-------------------------------
const para2 = document.getElementById('p2');
para2.remove();

//----------------------------Thay đổi element (Change)----------------------------
const para02 = document.getElementById('p02');
para02.setAttribute('onclick', 'alert("Hello")');   //Đổi onlick(rỗng) -> thêm vào từ Hello
para02.setAttribute('id', 'p05');                   //Đổi id="p02" -> id="p05"
para02.classList.add('quote');                      //Đổi class="paragraph" -> class="paragraph quote"

const para03 = document.getElementById('p03');
para03.classList.remove('paragraph');               //Đổi class="paragraph" -> class
/* para03.classList.toggle('paragraph02'): nếu nó ko tìm thấy paragraph02 thì sẽ thêm vào
                                           nếu nó tìm thấy paragraph02 (nghĩa là này đã tồn tại) thì sẽ xóa */

//Chỉnh sửa style
const para01 = document.getElementById('p01');
para01.style.color = 'green';                       //Đổi màu chữ
para01.style.backgroundColor = 'lightyellow';

//----------------------------------------Loop----------------------------------------
//For loop
for (let i = 0; i <= 10; i++){
   console.log("JS easy");
}

var sum = 0;
for (var i = 0; i < a.length; i++) {
   sum += a[i];
}              

//While Loop
var i = 1;                          // khởi tạo
while (i < 100) {                   // Vòng lặp, nếu câu lệnh đúng
   i *= 2;                          // Tăng để tránh vòng lặp vô hạn
   console.log(i + ", ");   
}

let count = 0;
while(true){
   console.log("Hello");
   if (count == 0 ){
      break;
   }
}

//Do While Loop
var i = 1;                      
do {                            
   i *= 2;                     
   console.log(i + ", ");   
} while (i < 5)                        //Lặp lại vòng lặp nếu câu lệnh đúng ở cuối

//Array: Khai báo mảng
const number01 = [1,2,3];
const number02 = [4,5,6];
console.log(number01);

//Destructuring: Phân rã ra
const [d,e,f] = [12,32,44];
console.log(d,e);

//Spread: lan tỏa
const number03 = [...number01,...number02];
console.log(number03);

//Map: bình phương
const number04 = number02.map((element)=> element*element);       //Bình phương những phần tử của number2: 4^2, 5^2, 6^2
console.log(number04);

//----------------------------------------Event----------------------------------------
//Function for events
function inputHandler(){
   console.log("Thay doi trong Console");
}


/* 
   >> Function:
   function addNumbers(a, b) {         || Cách viết nhanh: const addNumberFuction = (a,b) => a + b;
      return a + b; ;
   }
   ~~ Qua Console viết:                || ~~ Qua Console viết:
   let rs = addNumbers(1, 2);          || const d = addNumberFuction(3,4);
   console.log(rs);                    || console.log(d);

   >> Cách 2: thay đổi chữ
   const para01 = document.getElementById('p01');
   para01.innerText = 'Tôi là Hanie';
   console.log(para01.innerText);
*/