var namaBuah = ['jeruk','melon','apel'];

getAll();
function getAll(){
    allData = '';
    if(namaBuah.length>0){
        $.each( namaBuah, function( key, value ) {
            allData += `<tr>
            <td>${value}</td>
            <td><button class="btn btn-primary"  onclick="ubahBuah(${key})" href=#>Ubah</button></td>
            <td><button class="btn btn-danger" onclick="hapusBuah(${key})" href=#>Hapus</button></td>
        </tr>`;
           
          });
    }else{
        allData='No Data Can be Shown';
    }
    $('#fruits').html(allData);
}

function tambahBuah() {
    var newBuah = document.getElementById("inputNamaBuah").value;
    if(!newBuah){
        alert("Maaf isian tidak boleh kosong");
    }else if(!isNaN(newBuah)){
        alert("Maaf input anda tidak valid");
    }else{
        namaBuah.push(newBuah);
    }

    getAll();   
}

function ubahBuah(keyArray){
    var newBuahName = prompt("Masukkan nama buah yang baru");
    if(newBuahName === null){
        return;
    }else if(!isNaN(newBuahName)){
        alert("Maaf input anda tidak valid");

    }else{
        namaBuah[keyArray] = newBuahName; 
    }
    
    getAll();  
}
function hapusBuah(keyArray){
    let text = "Apakah anda yakin akan menghapus buah ini?";
    if (confirm(text) == true) {
        namaBuah.splice(keyArray,1)
    } 
    getAll();  
}