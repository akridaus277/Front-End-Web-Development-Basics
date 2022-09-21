var recipe=[];
recipe[0]="Ambil wajan dan letakkan di atas kompor";
recipe[1]="tuangkan minyak ke wajan";
recipe[2]="ambil mangkok dan telur";
recipe[3]="pecahkan isi telur ke mangkuk";
recipe[4]="masukkan sedikit garam ke dalam mangkuk berisi telur";
recipe[5]="ambil sendok kemudian aduk telur dalma mangkuk menggunakan sendok";
recipe[6]="nyalakan api kompor pada wajan";
recipe[7]="tunggu minyak panas";
recipe[8]="tuangkan telur ke dalam minyak pada wajan";
recipe[9]="tunggu 3 menit";
recipe[10]="balik telur dadar";
recipe[11]="tunggu 3 menit lagi";
recipe[12]="tiriskan dadar dan sajikan ke piring";

last_step = recipe[12];
console.log("step pertama pada resep dadar adalah : "+recipe[0]);
console.log("step terakhir pada resep dadar adalah : "+last_step);

let text = "";
for(var i=0;i<recipe.length;i++){
    
    text += "<li>"+ recipe[i] + "</li>";
}
document.querySelector("#recipe").innerHTML = text;
document.querySelector("#firstStepRecipe").innerHTML = "Firt step recipe ini adalah : <br>"+recipe[0];
document.querySelector("#lastStepRecipe").innerHTML = "Last step recipe ini adalah : <br>"+last_step;




