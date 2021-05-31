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
// Bài 4: 

//Tao danh sach nhan vien; 
const Academy = [
    {
        name : "John", 
        age : 30, 
        salary : 40000000, 
        job : "manager"
    }, 
    {
        name : "Sam", 
        age : 25, 
        salary : 20000000, 
        job : "worker"
    },
    {
        name : "Linda", 
        age : 23, 
        salary : 15000000, 
        job : "worker"
    }
]; 
//Tao hàm lọc theo lương hoặc chức vụ; 
function readfilter(arr, keyfilter) { 
    let newarr = []; 
if (keyfilter == "S") {
let valeS = Number(prompt("Input salary")); 
for (let x in arr)  { 
    if (arr[x].salary==valeS) {
        newarr.push(arr[x]);
    }
}
} else if (keyfilter == "J") { 
let valueJ = prompt("Input position").toLowerCase(); 
for (let x in arr) { 
    arr[x].job.toLowerCase();
    if (arr[x].job == valueJ) { 
    newarr.push(arr[x]);
    }
  } 
 }
 return console.table(newarr);
}

//Main
let loop  = true; 
while(loop) { 
 const choose = prompt (" choose C - Creat/R - Read/U - update/D - Delete/ E- Exit").toUpperCase(); 
 if (choose == "C") { 
     const newemployer = new Object();
     newemployer.name= prompt("Input name"); 
     newemployer.age = Number(prompt("Input age"));
     newemployer.salary = Number(prompt("Input salary"));
     newemployer.job = prompt("Input position");
     Academy.push(newemployer);
        }
 else if (choose == "R") { 
let c = Number(prompt ("choose 1 - read all or 2 - read function")); 
if (c==1) {
    for (let x in Academy) { 
        console.log("------------------------------");
       console.log("Name:" + Academy[x].name);
       console.log("Age:" + Academy[x].age);
       console.log("Salary:" + Academy[x].salary);
       console.log("Job:" + Academy[x].job);
       //console.table(Academy);
                    }
} else if(c==2) {
    let keyfilter = prompt("Read for S - Salary/ J - Position").toUpperCase();
    readfilter(Academy,keyfilter); 
    }
 } else if (choose == "U") { 
    let namefind = prompt("Inper name to find").toLowerCase();
    for (let x in Academy) { 
        if (Academy[x].name.toLowerCase() == namefind) 
        {
         Academy[x].name = prompt("Update name"); 
         Academy[x].age = Number(prompt("Update age")); 
         Academy[x].salary = Number(prompt("update salary")); 
         Academy[x].job = prompt("update job"); 
         console.log(Academy[x]); 
         }
} 
} else if (choose == "D") { 
    let namef = prompt("Inper name to find").toLowerCase();
    for (let x in Academy) { 
        if (Academy[x].name.toLowerCase() == namef) 
        {
         delete(Academy[x]); 
         }
      } 
    console.table(Academy);
} else if( userInput === "E") { 
    //break; 
   loop = false; 
    }
};
