
$('#optionOrigin').change(function (e) { 
    e.preventDefault();
    $('#optionDestination').text("You Chose "+this.value);
});

