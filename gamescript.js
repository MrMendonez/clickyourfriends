/**
 * Created by alemjc on 11/15/15.
 */
var imagesClicked = 0;



var imgs = document.getElementsByTagName("img");
document.getElementById("startbutton").addEventListener("click", startGame);
for(var i = 0; i < imgs.length; i++){
    var image = imgs[i];
    image.addEventListener("click",imageClickResolver);

}


function startGame(){
    document.getElementById("startbutton").style.visibility="hidden";
    document.getElementById("startbutton").value = "hidden";
    setTimeout(timedout,20000);
}

function timedout(){
    //TODO: reset what ever structure and tell user the number of images that were clicked.
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++){
        images[i].setAttribute("about","not clicked");
    }

    alert("Time is up!!! \n number of images clicked = "+imagesClicked);
    imagesClicked = 0;


    document.getElementById("startbutton").style.visibility="visible";
}

function imageClickResolver(){

    if(document.getElementById("startbutton").value === "visible"){
        return;
    }

    var img = event.target;

    var about = img.getAttribute("about");

    console.log("in imageClickResolver and about is: "+about);

    if(about !== "clicked"){
        imagesClicked++;
        img.setAttribute("about","clicked");
    }
}

