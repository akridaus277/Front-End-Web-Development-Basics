window.onload = function(){
    document.getElementById('submit').onclick = function(e){
        e.preventDefault();
        var input_password1 = document.getElementById('password1').value;
        var input_password2 = document.getElementById('password2').value;
        var message = "";
        console.log("akjdfhi");
        if(input_password1 === input_password2){
            message = "Selamat password yang anda masukkan benar";
            alert(message);
            document.getElementById("warn").innerHTML = message;
        }else{
            message = "Maaf password yang anda masukkan salah";
            alert(message);
            document.getElementById("warn").innerHTML = message;
    
        }
    };
}





