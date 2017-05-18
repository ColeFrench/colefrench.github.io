var centered = $(".centered");
var container = $(".container");

var content = $(".content");
var contents = content.html();

var enterButton = $(".enter");
var aboutButton = $(".about");
var bibButton = $(".bib");
var backButton = $(".back");

enterButton.click(function() {
    centered.hide();
    container.removeClass("d-none").show();
});

aboutButton.click(function() {
    $(this).hide();
    enterButton.hide();
    bibButton.hide();
    backButton.removeClass("d-none").show();

    content.html("<h5>This website is &copy; 2017 Cole French and is the visual portion of his research paper for Professor Tiede's 10<sup>th</sup> grade Global History II class.</h5><h5>All images are cited inline and in the Annotated Bibliography in MLA format.</h5>");
});

bibButton.click(function() {
    $(this).hide();
    enterButton.hide();
    aboutButton.hide();
    backButton.removeClass("d-none").show();

    content.html("<object width=\"425\" height=\"550\" type=\"application/pdf\" data=\"assets/pdf/annotated-bib.pdf\"><h5>Your browser could not load the PDF. Please try a different one.</h5></object>");
});

backButton.click(function() {
    $(this).hide();
    enterButton.show();
    aboutButton.show();
    bibButton.show();

    content.html(contents);
});

/*
var delay = 500;

$(".image").hover(function() {
    var p = $(this).find("> p");
    var newHeight = 0;

    p.removeClass("d-none").show();
    newHeight = $(this).height();
    p.hide();

    $(this).animate({
        height: newHeight
    }, delay);

    p.show();
}, function() {
    var p = $(this).find("> p");
    var newHeight = 0;

    p.hide();
    newHeight = $(this).height();
    p.show();

    $(this).animate({
        height: newHeight
    }, delay);

    p.hide();
    $(this).css("height", "");
});
*/
