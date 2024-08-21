console.log("Hello Anh 3")
let name = "Hoang Minh Duong" // Kiểu let dùng để khai báo cho biến local, chỉ có tác dụng trong 1 khối lệnh thôi.
                              // Ưu tiên hơn kiểu var, vì nó tiết kiệm bộ nhớ hơn, vì nó chỉ được sử dụng trong 1 khối lệnh.
                              // Kiểu var có cách dùng tương tự, chỉ khác là biến toàn phần, ra ngoài khối lệnh vẫn sử dụng được.
let Name = "Anh 3"
console.log("name: " + name + ", Name: " + Name)   // Đặt tên biến phân biệt hoa thường

if(1 == 1){
    let z = 123
    console.log("z = " + z);
}

let x = 10
console.log(x === 10) // Phân biệt ==  : So sánh giá trị
                      //           === : So sánh giá trị và kiểu dữ liệu

const PI = 3.1416 // Biến const không thể gán cho một giá trị khác
console.log(`PI = ${PI}`) // Một kiểu in mới là dùng ``, bên trong muốn truyền giá trị thì phải có dạng ${value}

let members = ['Duong', 'Thai', 'Long', 'Chu', 'Canh', 'Lo']
console.log(members[1])

let i = 0;
while(i < 10){                      // Vòng lặp while
//  console.log(`i = ${i}`)
    i++; 
}

let mark = 10
if(mark >= 0 && mark < 4){          // Câu điều kiện
    console.log("Bad")
}else if(mark >= 4 && mark < 6){
    console.log("Nomal")
}else if(mark >= 6 && mark < 8){
    console.log("Good")
}else if(mark >= 8 && mark <= 10){
    console.log("Excellent")
}else{
    console.log("Invalid mark")
}

for(let i = 0; i < 10; i++){        // Vòng lặp for
    console.log(`i = ${i}`)
}

members.forEach(function(mem){      // for - each (function)
    console.log(mem)
})

console.log("********")

for(let i = 0; i < members.length - 1; i++){
    console.log(members[i])
}

console.log("********")

members.forEach((member) => {       // for - each (no function)
    console.log(member)
})

console.log("123456789")

for(let m of members){              // for - of
    console.log(m)
}

for(let i in members){              // for - in: index
    console.log(`i = ${i}`)
}

members.forEach((member, index, array) => {     // Combine member, index
    console.log(`${index + 1} is ${member}`)
})

