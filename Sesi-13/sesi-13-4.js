console.log("Start Sesi-13-4.js");
class Avenger{
    constructor(nama){
        this.nama = nama;
    }
    getNama(){
        return this.nama;
    }
}

let spiderman = new Avenger('Peter Parker');
console.log(spiderman);