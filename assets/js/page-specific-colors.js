var page = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);
var dir = window.location.href.substring(0, window.location.href.lastIndexOf("/"));
dir = dir.substring(dir.lastIndexOf("/") + 1);
var pColor = "#aaa";
var sColor = "#777";
var aboutPColor = "#dd0000";
var aboutSColor = "#aa0000";
var schoolworkPColor = "#dddd00";
var schoolworkSColor = "#aaaa00";
var roboticsPColor = "#00dddd";
var roboticsSColor = "#00aaaa";
var toolsPColor = "#dd00dd";
var toolsSColor = "#aa00aa";

$("#about").css("color", aboutPColor).hover(function(e) {
    $(this).css("color", e.type == "mouseenter" ? aboutSColor : aboutPColor);
});

$("#schoolwork").css("color", schoolworkPColor).hover(function(e) {
    $(this).css("color", e.type == "mouseenter" ? schoolworkSColor : schoolworkPColor);
});

$("#robotics").css("color", roboticsPColor).hover(function(e) {
    $(this).css("color", e.type == "mouseenter" ? roboticsSColor : roboticsPColor);
});

$("#tools").css("color", toolsPColor).hover(function(e) {
    $(this).css("color", e.type == "mouseenter" ? toolsSColor : toolsPColor);
});

if (~page.indexOf(".html")) {
    page = page.substring(0, page.lastIndexOf(".html"));
}

switch (page) {
    case "about":
        pColor = aboutPColor;
        sColor = aboutSColor;
        break;
    case "robotics":
        pColor = roboticsPColor;
        sColor = roboticsSColor;
        break;
    default:
        switch (dir) {
            case "schoolwork":
                pColor = schoolworkPColor;
                sColor = schoolworkSColor;
                break;
            case "tools":
                pColor = toolsPColor;
                sColor = toolsSColor;
                break;
        }
}

$(".container a, #github").css("color", pColor).hover(function(e) {
    $(this).css("color", e.type == "mouseenter" ? sColor : pColor);
});
