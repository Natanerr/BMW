
document.getElementById("SubButton").addEventListener( "mouseover" , mouseOver ) //Text to blue

document.getElementById("SubButton").addEventListener( "mouseout" , mouseOut ) //Text to white

document.getElementById("SubButton").addEventListener( "mouseover" , mouseBackground ) //Changing background color

document.getElementById("SubButton").addEventListener( "mouseout" , back ) //Back to default


function mouseOver () {

    document.getElementById("SubButton").style.color="black";

}

function mouseOut () {

    document.getElementById("SubButton").style.color="white";

}

function mouseBackground () {

    document.getElementById("SubButton").style.backgroundColor="#74BA43";

}

function back () {

    document.getElementById( "SubButton" ).style.backgroundColor="#BFDF32";

}
