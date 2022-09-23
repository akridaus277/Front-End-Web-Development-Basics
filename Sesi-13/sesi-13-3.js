console.log("Start Sesi-13-3.js");
function Pegawai(namaDepan,namaBelakang){
    this.namaDepan = namaDepan;
    this.namaBelakang = namaBelakang;
    this.getNamaLengkap = function(){
        return this.namaDepan+' '+this.namaBelakang;
    }
}


let pegawai1 = new Pegawai('Tony','Stark');
console.log(pegawai1);
console.log(Pegawai.prototype);
console.log('Halo',pegawai1.getNamaLengkap());

console.log(pegawai1 instanceof Pegawai);
console.log(pegawai1 instanceof Object);
console.log("End Sesi-13-3.js");
