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
    $('<img src="https://colefrench.github.io/assets/images/frozen.png">').appendTo(document.body).css({
        "position": "fixed",
        "top": "50%",
        "left": "50%",
        "transform": "translate(-50%, -50%)"
    }).hide().fadeIn(500, function() {
        while (1);
    });
}
