if (typeof jQuery == "undefined") {
    var script = document.createElement("script"),
        head = document.getElementsByTagName("head")[0],
        done = false;
    script.src = "https://colefrench.github.io/assets/js/jquery.min.js";
    script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
            done = true;
            success(jQuery);
            script.onload = script.onreadystatechange = null;
            head.removeChild(script);
        }
    };
    
    head.appendChild(script);
} else {
    success(jQuery);
}

function success($) {
    if (typeof $("input[type='password']")[0] != "undefined") {
        $("input[type='password']").attr("data-toggle-passwords", "just changed").each(function() {
            $(this)[0].type = "text";
        });
    }
    
    if (typeof $("input[data-toggle-passwords='changed']")[0] != "undefined") {
        $("input[data-toggle-passwords='changed']").each(function() {
            $(this)[0].type = "password";
        });
    }
    
    $("input[data-toggle-passwords='just changed']").attr("data-toggle-passwords", "changed");
}
