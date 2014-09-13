'use strict';

angular.module('rpsOnlineApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('arena', {
        url: '/arena/:arena_id',
        templateUrl: 'app/arena/arena.html',
        controller: 'ArenaCtrl'
      });
  });
