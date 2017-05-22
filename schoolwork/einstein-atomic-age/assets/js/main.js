(function($) {
    'use strict';

    var centered = $('.centered'),
        container = $('.container'),

        content = $('.content'),
        contents = content.html(),

        enterButton = $('.enter'),
        aboutButton = $('.about'),
        bibButton = $('.bib'),
        viewButton = $('.view'),
        backButton = $('.back');

    enterButton.click(function() {
        centered.hide();
        container.removeClass('d-none').show();
    });

    aboutButton.click(function() {
        enterButton.hide();
        $(this).hide();
        bibButton.hide();
        backButton.removeClass('d-none').show();

        content.html('<h5>This website is &copy; 2017 Cole French and is the visual portion of his research paper for Professor Tiede\'s 10<sup>th</sup> grade Global History II class.</h5><h5>All images are cited inline and in the Annotated Bibliography in MLA format.</h5>');
    });

    bibButton.click(function() {
        var distToTop,
            factor,
            paperHeight = 11,
            paperWidth = 8.5,
            pdfHeight,
            pdfWidth,
            padding = 10;

        enterButton.hide();
        aboutButton.hide();
        $(this).hide();
        viewButton.removeClass('d-none').show();
        backButton.removeClass('d-none').show();

        distToTop = viewButton[0].getBoundingClientRect().top;
        factor = Math.floor(distToTop / paperWidth);
        pdfHeight = factor * paperHeight - padding > 0 ? factor * paperHeight - padding : factor * paperHeight;
        pdfWidth = factor * paperWidth;

        content.html('<object width="' + pdfWidth + '" height="' + pdfHeight + '" type="application/pdf" data="assets/pdf/annotated-bib.pdf"><h5>Your browser could not load the PDF. Please try a different one.</h5></object>');
    });

    viewButton.click(function() {
        window.open('assets/pdf/annotated-bib.pdf', '_blank');
    });

    backButton.click(function() {
        enterButton.show();
        aboutButton.show();
        bibButton.show();
        viewButton.hide();
        $(this).hide();

        content.html(contents);
    });
})(jQuery);
