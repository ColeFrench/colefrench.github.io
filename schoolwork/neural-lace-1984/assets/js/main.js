var clicked = false;

$("a").click(function() {
    if (clicked) {
        return;
    }

    clicked = true;
    var container = $(".centered");
    var title = container.find("> div");
    var titleExtras = title.find("> h3, > h5");
    var button = container.find("> a");
    var titleHeight = 0;
    var containerWidth = container.width();
    var normWidth = 0;

    container.css({
        marginTop: container.offset().top,
        width: containerWidth
    }).removeClass("centered").addClass("container");

    titleExtras.hide();
    button.hide();
    titleHeight = title.height();
    titleExtras.show();

    title.animate({
        height: titleHeight
    }, 750);

    titleExtras.animate({
        opacity: 0
    }, 750, function() {
        $(this).hide().css("opacity", "");
        title.css("height", "");
    });

    container.animate({
        marginTop: "1em"
    }, 750, function() {
        $(this).css("width", "");
        normWidth = $(this).width();
        $(this).css("width", containerWidth).animate({
            width: normWidth
        }, 750, function() {
            $(this).css("width", "").find("> .content").hide().removeClass("d-none").fadeIn(750);
        });
    });
});
