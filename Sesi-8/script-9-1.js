
var input_password1 = prompt("Silahkan masukkan password anda");
var input_password2 = prompt("Silahkan masukkan ulang password anda");
var message = "";
if(input_password1 === input_password2){
    message = "Selamat password yang anda masukkan benar";
    alert(message);
}else{
    alert("Maaf password yang anda masukkan salah");
    alert("Anda akan diarah kan ke situs google");
    window.location= 'https://www.google.com';
}

