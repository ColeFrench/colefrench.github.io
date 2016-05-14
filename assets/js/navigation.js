var toggle;

$("#navbar-button").click(function() {
    if (toggle) {
        setTimeout(function() {
            $("#navbar-left").css("visibility", "hidden");
        }, 250);
        $("#navbar-left").css("margin-left", -$("#navbar-left").width() * 2);
        $("body").css("margin-left", 55);
        $(this).css("margin-left", -55).css("color", "black");
    } else {
        $("#navbar-left").css("visibility", "visible").css("margin-left", -$("#navbar-left").width());
        $("body").css("margin-left", $("#navbar-left").width());
        $(this).css("margin-left", -$("#navbar-left").width()).css("color", "white");
    }
    
    toggle = !toggle;
});

$("#links h4 > a").click(function() {
    if ($(this).find("i").hasClass("fa-caret-down")) {
        $(this).find("i").removeClass("fa-caret-down").addClass("fa-caret-up");
        
        if($("#links h4 > a").not(this).find("i").hasClass("fa-caret-up")) {
            $("#links h4 > a").not(this).find("i").removeClass("fa-caret-up").addClass("fa-caret-down");
        }
    } else if ($(this).find("i").hasClass("fa-caret-up")) {
        $(this).find("i").removeClass("fa-caret-up").addClass("fa-caret-down");
    }
});
