var pesertaCodingClass = [
    {
        nama:"Rijal",
        background:"Telkom",
        jenis_kelamin:"Laki-laki",
        photo:"https://img.freepik.com/free-photo/smiling-asian-man-using-tablet-computer_1262-18324.jpg",
        hobby:["coding","LOG","ghensin"],

    },
    {
        nama:"Poppy",
        background:"UNS",
        jenis_kelamin:"Perempuan",
        photo:"https://img.freepik.com/free-photo/serious-asian-guy-touching-invisible-wall_1262-18296.jpg",
        hobby:["coding"],

    },
    {
        nama:"Dhimas",
        background:"Udinus",
        jenis_kelamin:"Laki-laki",
        photo:"https://img.freepik.com/free-photo/cheerful-asian-man-pumping-fists-looking-away_1262-18156.jpg",
        hobby:["coding","traveling"],

    },
    {
        nama:"Yudha",
        background:"UII",
        jenis_kelamin:"Laki-laki",
        photo:"https://img.freepik.com/free-photo/occupation-successful-profession-camera-thumb_1262-2351.jpg",
        hobby:["coding","ngedota"],

    },
    {
        nama:"Arkaan",
        background:"ITB",
        jenis_kelamin:"Laki-laki",
        photo:"https://img.freepik.com/free-photo/confident-stylish-handsome-young-businessman-adjusting-necktie-looking-camera_1262-14183.jpg",
        hobby:["coding"],

    },
    {
        nama:"Aji",
        background:"UPN Veteran",
        jenis_kelamin:"Laki-laki",
        photo:"https://img.freepik.com/free-photo/smiling-student-glasses-carrying-laptop_1262-2429.jpg",
        hobby:["coding"],

    },
]
$.each( pesertaCodingClass, function( key, value ) {
    $('#output').append(
        `<div class='col-4 text-center '>
            <div class='card mb-4'>
                <img class='card-img-top'  src=${value.photo} width=100%>
                <div class='card-body'>
                    <h3 class="card-title">${value.nama}</h3>
                    <div class="row">
                        <div class="col-5">Background</div>
                        <div class="col-1">:</div>
                        <div class="col-6">${value.background}</div>
                    </div>
                    <div class="row">
                        <div class="col-5">Jenis Kelamin</div>
                        <div class="col-1">:</div>
                        <div class="col-6">${value.jenis_kelamin}</div>
                    </div>
                    <div class="row">
                        <div class="col-5">Hobby</div>
                        <div class="col-1">:</div>
                        <div class="col-6">${value.hobby}</div>
                    </div>
                </div>
            </div>
        </div>`);
  });

//   <div class="row"><div class="col-5">Background</div><div class="col-1">:</div><div class="col-6">${value.background}</div></div>
//   <div class="row"><div class="col-5">Jenis Kelamin</div><div class="col-1">:</div><div class="col-6">${value.jenis_kelamin}</div></div>
//   <div class="row"><div class="col-5">Hobby</div><div class="col-1">:</div><div class="col-6">${value.hobby}</div></div>
  
{/* <p class="card-text">${value.background}</p><p class="card-text">${value.jenis_kelamin}</p><p class="card-text">${value.hobby}</p> */}