$('#buttonCopyText').click(function (e) { 
    e.preventDefault();
    $('#textDestination').text($('#textOrigin').text());
    // console.log($('#textOrigin').text());

});


