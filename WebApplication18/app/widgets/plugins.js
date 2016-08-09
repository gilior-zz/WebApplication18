(function ($) {
    function DoSomething(someParamater) {
    }
    $.fn.swipe = function (settings) {
        var config = {
            settingA: "Example",
            settingB: 5
        };
        if (settings) {
            $.extend(config, settings);
        }
        return this.each(function () {
        });
    };
})(jQuery);
//# sourceMappingURL=plugins.js.map