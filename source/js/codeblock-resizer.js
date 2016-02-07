+function($) {
    'use strict';

    // Resize codeblocks to fit the screen width

    var CodeBlockResizer = function(elem) {
        this.$codeBlocks = $(elem);
    };

    CodeBlockResizer.prototype = {
        /**
         * Run main feature
         */
        run: function() {
            var self = this;
            // resize all codeblocks
            self.resize();
            // resize codeblocks when window is resized
            $(window).smartresize(function() {
                self.resize();
            });
        },

        /**
         * Resize codeblocks
         */
        resize: function() {
            var self = this;
            self.$codeBlocks.each(function() {
                var $gutter = $(this).find('.gutter');
                var $code = $(this).find('.code');
                // get padding of code div
                var codePaddings = $code.width() - $code.innerWidth();
                // codeblock div width with padding - gutter div with padding + code div padding
                var width = $(this).outerWidth() - $gutter.outerWidth() + codePaddings;
                // apply new width
                $code.css('width', width);
                $code.children('pre').css('width', width);
            });
        }
    };

    $(document).ready(function() {
        var resizer = new CodeBlockResizer('figure.highlight');
        resizer.run();
    });
}(jQuery);
