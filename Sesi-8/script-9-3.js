
var gender = prompt("Masukkan gender anda :'laki-laki' atau 'perempuan'");


if(gender.toLowerCase()==="laki-laki" || gender.toLowerCase()==="perempuan"){
    var nama = prompt("Masukkan nama anda");
    if(gender=="laki-laki"){
        alert("Selamat Datang, Mr. "+nama);
    }else if(gender=="perempuan"){
        alert("Selamat Datang, Mrs. "+nama);
    }

    var minuman = prompt("minuman apa yang ingin anda pesan?");
    if(minuman.toLowerCase() === 'jus'){
        alert('Mohon maaf, Jus tidak tersedia');
    }else{
        alert("Siap "+nama+", satu "+minuman+" segera datang!");
    }
}else{
    alert("Tolong ketik gender sesuai format");
    location.reload();
}

