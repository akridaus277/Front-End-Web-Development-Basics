var my_bucket_list = ["popy","dhimas","yudha","bella","izaaz"];
document.querySelector("#myBucketList").innerHTML = "Isi my_bucket_list awal : "+my_bucket_list;

my_bucket_list.push("rachmad");
document.querySelector("#afterPush").innerHTML = "Isi my_bucket_list after push elemen 'rachmad' : "+my_bucket_list;
console.log("my_bucket_list setelah push elemen 'rachmad' : "+my_bucket_list);

my_bucket_list.unshift("veve");
document.querySelector("#afterUnshift").innerHTML = "Isi my_bucket_list after unshift elemen 'veve' : "+my_bucket_list;
console.log("my_bucket_list setelah unshift elemen 'veve' : "+my_bucket_list);

my_bucket_list.pop();
document.querySelector("#afterPop").innerHTML = "Isi my_bucket_list after pop : "+my_bucket_list;
console.log("my_bucket_list setelah pop : "+my_bucket_list);

my_bucket_list.shift();
document.querySelector("#afterShift").innerHTML = "Isi my_bucket_list after shift : "+my_bucket_list;
console.log("my_bucket_list setelah shift : "+my_bucket_list);