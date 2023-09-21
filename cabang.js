// 1. Syntax Percabangan If
// hanya ada satu kondisi
var totalBelanja = 20000;

if(totalBelanja >= 10000) {
    document.getElementById("if").innerHTML = "Selamat Anda Dapat Piring Cantik"
}



// 2. Syntax Percabangan If Else
var umurPengunjung = 17;

if(umurPengunjung >= 17) {
    document.getElementById("ifelse").innerHTML = "Kamu boleh masuk ke wahana ini";
}else{
    document.getElementById("ifelse").innerHTML = "Maaf kamu tidak bisa masuk ke wahana ini";
}



// // 3. Syntax Percabangan If Else If
// var tiket = 5;

// if(tiket >= 6){
//     document.getElementById("ifelseif").innerHTML = "Dapet Popcorn";
// }else if(tiket >= 4){
//     document.getElementById("ifelseif").innerHTML = "Dapet Eskrim";
// }else if(tiket >= 2){
//     document.getElementById("ifelseif").innerHTML = "Dapet Coklat";
// }else{
//     document.getElementById("ifelseif").innerHTML = "Gadapet apa-apa";
// }



// 4. Syntax Percabangan Switch Case
// // Cara Pertama
// var umurPengunjung = prompt("Masukkan Umur Anda :");  // fungsi prompt sama seperti alert
// var wahana;

// switch(true){
//     case umurPengunjung >= 18:
//         wahana = "Boleh Masuk Wahana Mandi Bola";
//         document.getElementById("switchcase").innerHTML = wahana;
//         break;
//         //fungsi break untuk matiin atau berhentiin, agar tidak memproses case dibawahnya

//         case umurPengunjung >= 16:
//             wahana = "Boleh Masuk Wahana Flying Fox";
//             document.getElementById("switchcase").innerHTML = wahana;
//             break;

//         case umurPengunjung >= 14:
//             wahana = "Boleh Masuk Wahana Hujan Salju";
//             document.getElementById("switchcase").innerHTML = wahana;
//             break;
            
//         default:  //untuk kondisi yang tidak terpenuhi diatas
//             wahana = "Terimakasih sudah berkunjung";
//             document.getElementById("switchcase").innerHTML = wahana;
//         // gaperlu pake break; karna sudah kondisi terakhir 
// }

// // Cara Kedua
// var nilai = prompt("Masukkan Nilai Anda :");
// var grade = "";

// switch (true) {
//     case nilai > 90:
//         grade = "A+";
//         document.getElementById("switchcase").innerHTML = grade;
//         break;
//         case nilai > 80:
//             grade = "A";
//             document.getElementById("switchcase").innerHTML = grade;
//             break;
//         case nilai > 70:
//             grade = "B";
//             document.getElementById("switchcase").innerHTML = grade;
//             break;
//         case nilai > 60:
//             grade = "C";
//             document.getElementById("switchcase").innerHTML = grade;
//             break;
//             default:
//                 grade = "F"
//                 document.getElementById("switchcase").innerHTML = grade;
// }



// //  5. Syntax Percabangan Ternary (?)
// var tanya = prompt("Apakah Serang Ibu Kota Banten ?");

// var jawaban = (tanya.toUpperCase() == "IYA","yes","Y","Ya") ? "Benar" : "Salah";     //tulisan Benar: Salah: gabole terbalik, karna ibarat Benar: sebagai kondisi pertama dan Salah: sebagai kondisi kedua/else. 
// document.getElementById("ternary").innerHTML = jawaban;

// // var jawaban = (tanya.toUpperCase() === "IYA" || tanya.toUpperCase() === "YES" || tanya.toUpperCase() === "Y" || tanya.toUpperCase() === "YA") ? "Benar" : "Salah"; 


// 6. Syntax Percabangan Nested
var user = {
    nama: "Icha",
    email: "annisafarah@gmail.com",
    password: "123",
    role: "admin"
};

function masuk(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log(email);
    if(user.email == email) {
        if(user.password == password) {
            if(user.role == "admin"){
                alert("Selamat Datang " + user.nama);
            }
        }else{
            alert("Tidak Bisa Masuk");
        }
    }else{
        alert("Bukan Admin Woyy");
    }
}




//  // 6. Syntax Percabangan Nested
// var user ={
//     nama: "Icha",
//     email: "solos@gmail.com",
//     password: "123",
//     role: "admin"
// };

// function masuk(){
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;

//     console.log(email);
//     if(user.email == email) {
//         if(user.password == password) {
//             if(user.role == "admin") {
//                 alert("Selamat Datang" + user.nama);
//             }
//         }else{
//             alert("password yang Anda Masukkan Salah");
//         }
//     }else{
//         alert("Maaf, Anda Bukan Admin");
//     }

// }