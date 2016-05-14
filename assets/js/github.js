var pathToRepo = "https://github.com/colefrench/colefrench.github.io";
var target;

$("#github").click(function() {
    target = pathToRepo + "/blob/master" + window.location.href.substring(window.location.protocol.length + pathToRepo.substring(pathToRepo.lastIndexOf("/") - 1, pathToRepo.length).length);
    
    if (window.location.href.charAt(window.location.href.length - 1) === "/") {
        target = target.concat("index");
    }
    
    if (window.location.href.substring(window.location.href.length - 5, window.location.href.length) !== ".html") {
        target = target.concat(".html");
    }
    
    window.location.href = target;
});
