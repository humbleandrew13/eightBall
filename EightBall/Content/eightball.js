function Shake() {
    document.getElementById("shake-results").innerHTML = "";
    setTimeout(function () {
        var phrases = ["<br>&nbsp;&nbsp;&nbsp;&nbsp;Yes", "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No", "<br>Mayhaps", "Please Try<br>&nbsp;&nbsp;&nbsp;Again", "<br>Definitely", "&nbsp;&nbsp;&nbsp;&nbsp;It Is<br>Decidedly<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;So", "Most Likely<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Not"];
        var randomNum = Math.round(Math.random() * (phrases.length - 1));
        document.getElementById("shake-results").innerHTML = phrases[randomNum];
    }, 2000)
    
};

$("img").click(function () {
    $(this).animate({ paddingLeft: "50px" }, 200);
    $(this).animate({ paddingLeft: "0px" }, 200);
    $(this).animate({ paddingLeft: "50px" }, 200);
    $(this).animate({ paddingLeft: "0px" }, 200);
    $(this).animate({ paddingLeft: "50px" }, 200);
    $(this).animate({ paddingLeft: "0px" }, 200);
    $(this).animate({ paddingLeft: "50px" }, 200);
    $(this).animate({ paddingLeft: "0px" }, 200);
    $(this).animate({ paddingLeft: "50px" }, 200);
    $(this).animate({ paddingLeft: "0px" }, 200);
});

$("p").click(function () {
    $("img").animate({ paddingLeft: "50px" }, 200);
    $("img").animate({ paddingLeft: "0px" }, 200);
    $("img").animate({ paddingLeft: "50px" }, 200);
    $("img").animate({ paddingLeft: "0px" }, 200);
    $("img").animate({ paddingLeft: "50px" }, 200);
    $("img").animate({ paddingLeft: "0px" }, 200);
    $("img").animate({ paddingLeft: "50px" }, 200);
    $("img").animate({ paddingLeft: "0px" }, 200);
    $("img").animate({ paddingLeft: "50px" }, 200);
    $("img").animate({ paddingLeft: "0px" }, 200);
});
