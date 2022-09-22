var them_dogs = [{
    name: 'Henry',
    age: 0.5,
    breed: 'Aussie',
    food: 'kibble',
    toys: ['tennis ball', 'chew toy'],
    picture: 'https://img.freepik.com/free-photo/portrait-cute-siberian-husky-dog-with-blue-eyes-gray-black-fur-sitting-floor-funny-little-puppy-like-wolf-isolated-white-real-animal-friend_7502-5579.jpg'
}, {
    name: 'Tilly',
    age: 5,
    breed: 'Mutt',
    food: 'kibble',
    toys: ['bone', 'kong', 'squeaky toy'],
    picture: 'https://img.freepik.com/free-photo/beagle-dog-sitting-with-white-background_53876-30186.jpg'
}, {
    name: 'Apollo',
    age: 10,
    breed: 'Labrador',
    food: 'absolutely anything',
    toys: ['old sock', 'other old sock', 'more old socks'],
    picture: 'https://img.freepik.com/free-photo/cute-spitz_144627-7076.jpg'
}]

$.each( them_dogs, function( key, value ) {
    $('#output').append(
        `<div class='col-4 text-center '>
            <div class='card mb-4'>
                <img class='card-img-top'  src=${value.picture} height=300px style='display: block; margin-left: auto; margin-right: auto;'>
                <div class='card-body'>
                    <h3 class="card-title">${value.name}</h3>
            </div>
 
        </div>`);
  });

