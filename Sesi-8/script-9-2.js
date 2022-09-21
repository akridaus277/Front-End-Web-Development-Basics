
var input_angka = prompt("Silahkan masukkan angka antara 1 sampai 100");


if(80 <=input_angka && input_angka<100){
    alert("Your grade is A");
}else if(60 <=input_angka && input_angka<80){
    alert("Your grade is B");
}else if(40 <=input_angka && input_angka<60){
    alert("Your grade is C");
}else if(1 <=input_angka && input_angka<40){
    alert("Your grade is D");
}else {
    alert("cannot calculate your grade");
}

