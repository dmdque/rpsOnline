'use strict';

angular.module('rpsOnlineApp')
  .controller('ArenaCtrl', function (
  $scope
  , hotkeys
  ) {

    $scope.playing = false;
    $scope.my_play = null;
    
    $scope.playRock = function() {
      if($scope.playing == false) {
        console.log('rock');
        $scope.playing = true;
        $scope.my_play = 'rock';
      } else {
        console.log('already playing game');
      }
    }

    $scope.playPaper = function() {
      if($scope.playing == false) {
        $scope.playing = true;
        console.log('paper');
        $scope.my_play = 'paper';
      } else {
        console.log('already playing game');
      }
    }

    $scope.playScissors = function() {
      if($scope.playing == false) {
        $scope.playing = true;
        console.log('scissors');
        $scope.my_play = 'scissors';
      } else {
        console.log('already playing game');
      }
    }

    // You can pass it an object.  This hotkey will not be unbound unless manually removed
    // using the hotkeys.del() method

    hotkeys.add({
      combo: 'r',
      description: 'Plays rock',
      callback: $scope.playRock
    });

    hotkeys.add({
      combo: 'p',
      description: 'Plays paper',
      callback: $scope.playPaper
    });

    hotkeys.add({
      combo: 's',
      description: 'Plays scissors',
      callback: $scope.playScissors
    });

  });
