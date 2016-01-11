/**
 * Created by alemjc on 11/15/15.
 */
$(document).ready(function(){
    var imagesClicked = 0;



    var imgs = document.getElementsByTagName("img");
    $("#startbutton").on("click", startGame);
    for(var i = 0; i < imgs.length; i++){
        var image = imgs[i];
        image.addEventListener("click",imageClickResolver);

    }


    function startGame(){
        document.getElementById("startbutton").style.visibility="hidden";
        $("#startbutton").value = "hidden";
        setTimeout(timedOut,20000);
    }

    function timedOut(){
        var images = document.getElementsByTagName("img");
        for (var i = 0; i < images.length; i++){
            images[i].setAttribute("about","not-clicked");
        }

        $("#results").html("Number of imaged clicked = " + imagesClicked);
        $('#results-modal').modal();
        imagesClicked = 0;


        document.getElementById("startbutton").style.visibility="visible";
        $("#startbutton").value = "visible";
    }

    function imageClickResolver(){

        if($("#startbutton").value === "visible"){
            return;
        }

        var img = event.target;

        var about = img.getAttribute("about");

        if(about !== "clicked"){
            imagesClicked++;
            img.setAttribute("about","clicked");
        }
    }
    $("#verified-btn").on("click", function() {
        $('#verified-modal').modal();
    });
});