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

    $("audio")[0].pause();

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
    }, 500);

    titleExtras.animate({
        opacity: 0
    }, 500, function() {
        $(this).hide().css("opacity", "");
        title.css("height", "");
    });

    container.animate({
        marginTop: "1em"
    }, 500, function() {
        $(this).css("width", "");
        var normWidth = $(this).width();

        $(this).css("width", containerWidth).animate({
            width: normWidth
        }, 500, function() {
            $(this).css("width", "");
            var content = $(this).find("> .content");
            content.removeClass("d-none").show();
            var normHeight = $(this).height();
            content.hide();

            $(this).animate({
                height: normHeight
            }, 750, function() {
                content.show();
                $(this).css("height", "");
            });
        });
    });
});
