(function () {
    'use strict';

    angular
        .module('cbc')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/pages/main/main.html',
                controller: 'MainController',
                controllerAs: 'vm'
            });

        $stateProvider
            .state('cbc', {
                url: '/cbc',
                templateUrl: 'app/pages/cbc/cbc.html',
                controller: 'CbcController',
                controllerAs: 'vm'
            });
        $stateProvider
            .state('drama', {
                url: '/drama',
                templateUrl: 'app/pages/drama/drama.html',
                controller: 'DramaController',
                controllerAs: 'vm'
            });
        $stateProvider
            .state('extras', {
                url: '/extras',
                templateUrl: 'app/pages/extras/extras.html',
                controller: 'ExtrasController',
                controllerAs: 'vm'
            });
        $stateProvider
            .state('live', {
                url: '/live/:channel',
                templateUrl: 'app/pages/liveStreaming/liveStreaming.html',
                controller: 'LiveStreamingController',
                controllerAs: 'vm'
            });

        $stateProvider
            .state('news', {
                url: '/news',
                templateUrl: 'app/pages/newsViewer/newsViewer.html',
                controller: 'NewsViewerController',
                controllerAs: 'vm'
            });

        $stateProvider
            .state('newsList', {
                url: '/newsList',
                templateUrl: 'app/pages/newsList/newsList.html',
                controller: 'NewsListController',
                controllerAs: 'vm'
            });

        $stateProvider
            .state('program', {
                url: '/program',
                templateUrl: 'app/pages/program/program.html',
                controller: 'ProgramController',
                controllerAs: 'vm'
            });

        $stateProvider
            .state('singleNews', {
                url: '/singleNews',
                templateUrl: 'app/pages/singleNews/singleNews.html',
                controller: 'SingleNewsController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
