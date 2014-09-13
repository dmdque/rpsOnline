'use strict';

angular.module('rpsOnlineApp')
  .controller('ArenaCtrl', function (
  $scope
  , hotkeys
  , socket
  ) {
    
    var arena_socket = socket.socket;

    $scope.playing_game = false;
    $scope.opponent_played = false;
    $scope.player_played = false;

     
    $scope.my_play = null;
    $scope.your_play = null;

    $scope.$watch('opponent_played', function(new_value, old_value) {
      console.log('watch');
      if($scope.playing_game && $scope.player_played && $scope.opponent_played) {
        console.log('play hands!', $scope.my_play, $scope.your_play);
      }
    });

    $scope.$watch('player_played', function(new_value, old_value) {
      console.log('watch');
      if($scope.playing_game && $scope.player_played && $scope.opponent_played) {
        console.log('play hands!', $scope.my_play, $scope.your_play);
      }
    });

    arena_socket.on('play', function(pose) {
      $scope.opponent_played = true;
      $scope.your_play = pose;
      console.log('play', pose);
    });

    
    $scope.playRock = function() {
      if($scope.playing_game == false) {
        $scope.playing_game = true;
        $scope.player_played = true;
        console.log('rock');
        $scope.my_play = "rock";
        arena_socket.emit('play', 'rock');
      } else {
        console.log('already playing game');
      }
    }

    $scope.playPaper = function() {
      if($scope.playing_game == false) {
        $scope.playing_game = true;
        $scope.player_played = true;
        console.log('paper');
        $scope.my_play = "paper";
        arena_socket.emit('play', 'paper');
      } else {
        console.log('already playing game');
      }
    }

    $scope.playScissors = function() {
      if($scope.playing_game == false) {
        $scope.playing_game = true;
        $scope.player_played = true;
        console.log('scissors');
        $scope.my_play = "scissors";
        arena_socket.emit('play', 'scissors');
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
