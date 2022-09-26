$('#coloredBox').mouseover(function () {
    $(this).css({'background-color': 'red'});
    $('#textColoredBox').css({'color': 'white'});
});
$('#coloredBox').mouseleave(function () {
    $(this).css({'background-color': 'yellow'});
    $('#textColoredBox').css({'color': 'black'});
});

