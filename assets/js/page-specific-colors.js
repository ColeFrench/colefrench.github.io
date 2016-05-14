var page = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);
var pColor = "#aaa";
var sColor = "#777";

if (~page.indexOf(".html")) {
    page = page.substring(0, page.lastIndexOf(".html"));
}

switch (page) {
    case "about":
        pColor = "#dd0000";
        sColor = "#aa0000";
        break;
}

$("a, #github").css("color", pColor).hover(function(e) {
    $(this).css("color", e.type === "mouseenter" ? sColor : pColor);
});
