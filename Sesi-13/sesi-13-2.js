console.log("Start Sesi-13-2.js");
let pegawai = {
    namaDepan : "Tony",
    namaBelakang : "Stark",
    getNamaLengkap:function(){
        return this.namaDepan+' '+this.namaBelakang;
    }
};

console.log(pegawai.namaDepan);
console.log(pegawai);
console.log(pegawai.hasOwnProperty("namaTengah"));


pegawai.greeting = function(){
    console.log('Hello!',this.namaDepan);
}

pegawai.greeting();
console.log(pegawai.getNamaLengkap());
console.log("End Sesi-13-2.js");