interface JQuery {
    swip(): JQuery;
    swip(settings: Object): JQuery;
}

(function ($) {

    function DoSomething(someParamater: string): void {

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