'use strict';

angular.module('rpsOnlineApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('arena', {
        url: '/arena',
        templateUrl: 'app/arena/arena.html',
        controller: 'ArenaCtrl'
      });
  });
