//bai 1: cho 1 chuỗi, viết chương trình đảo ngược chuỗi
/*
const str_input = prompt ("Input string"); 
let str_output = [] ; 
for (let i =0; i<str_input.length; i ++) { 
    str_output.unshift(str_input[i]); 
}; 
console.log(str_output.join(""));
*/ 
//bai 2: dau vao: 1 chuoi ky tu; dau ra: ki tu dau moi chu viet hoa
 /*
 function convert(str_input) {
for (let x= 0; x<str_input.length; x++) {
    let i = str_input[x].split(""); //tách từng chữ trong từ
    i[0] = i[0].toUpperCase();
    str_input[x] = i.join(""); //gộp lại thành từ  
}
    return console.log(str_input.join(" ")); //trả về câu
}
const str_input = prompt ("Input string").toLowerCase();
let str_output = str_input.split(" ");
convert(str_output); 
*/ 
//Bai 3: 
// input: 1 mang
//ouput: mang moi ko trung nhau 
//const sentence = prompt("nhap vao 1 mang, cach nhau boi dau (,)");
//let arr = sentence.split(","); 
//Bai 4: 
const employers = []; 
//Tao danh sach nhan vien; 
let loop  = true; 
while( loop) { 
 const choose = prompt (" choose C/R/U/D"); 
 if (choose == "C") { 
     const newemployer = Object();
     newemployer.name = "Nhap vao ten"; 
     newemployer.age = "Nhap vao tuoi";
     newemployer.salary = "Nhap vao luong";
     newemployer.job = "Nhap vao chuc vu";
     employers.push(newemployer);
     for (let i = 1; i <= employers.length; i++) {
         console.log(employers[i]); 
     } 
     } 
if (choose == "R") { 
    for (let i = 0; i <= employers.length -1; i++) { 
        console.log(employers[i]);
     }
  if (userInput == "U") { 
     //update luong
    const ten = prompt ("Ten nhan vien muon update ");
    let x = employers.name.indexOf(ten); 
    employers[x].salary = prompt(" tuoi ");

 if (userInput == "D") { 
    // chon vi tri nhan vien muon xoa 
    const index = Number(prompt("vi tri nhan vien muon xoa")) - 1; 
    delete(employers[index]); 
     }
 } else if( userInput === "E") { 
     //break; 
    loop = false; 
     }
}
}
