requirejs.config({
    baseUrl: 'scripts',
    paths: {
        jquery: 'libs/jquery.min',
        lib: 'libs'
        //node_dir: '/node_dir'
    }
});
requirejs([
        'jquery',
        'js/home'],
    function ($, home) {
        /*********info animation***********/
        var h = new home();
        h.init();
        h.animate();
    });

/****************************/