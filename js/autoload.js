/**
 * 定义一些常用的或自动导入的类
 */
var Loader = {
    loadCss: function (path) {
        H.loadCss(H.cssPath() + path);
    },
    loadJs: function (path, callback, id) {
        H.loadJs(H.jsPath() + path, callback, id);
    },
    tab: function () {
        this.loadJs('/plugins/bootstrap.tab.js');
    },
    player: function () {
        this.loadJs('/plugins/bootstrap.player.js');
    },
    configs: {
        'tab': '.h-tab',
        'player': '.player'
    }
};

(function ($) {
    H.each(Loader.configs, function (key, target) {
        if ($(target).length > 0 && H.isFunction(Loader[key])) {
            Loader[key]();
        }
    });
})(jQuery);