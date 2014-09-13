'use strict';

angular.module('rpsOnlineApp')
  .controller('ArenaCtrl', function (
  $scope
  , hotkeys
  , socket
  , $location
  ) {
    
    var arena_socket = socket.socket;

    $scope.playing_game = false;
    $scope.opponent_played = false;
    $scope.player_played = false;
     
    $scope.my_play = null;
    $scope.your_play = null;
    $scope.winner = null;


    $scope.room = $location.$$url.split('/')[2];
    arena_socket.emit('joinRoom', $location.$$url.split('/')[2]);
    console.log('room: ', $scope.room);

    var playGame = function(player_pose, opponent_pose) {
      if(player_pose == 'rock') {
        if(opponent_pose == 'rock') {
          return 'tie';
        } else if(opponent_pose == 'paper') {
          return 'opponent';
        } else if(opponent_pose == 'scissors') {
          return 'player';
        }
      } else if(player_pose == 'paper') {
        if(opponent_pose == 'rock') {
          return 'player';
        } else if(opponent_pose == 'paper') {
          return 'tie';
        } else if(opponent_pose == 'scissors') {
          return 'opponent';
        }
      } else { // if(player_pose == 'scissors') {
        if(opponent_pose == 'rock') {
          return 'opponent';
        } else if(opponent_pose == 'paper') {
          return 'player';
        } else { // if(opponent_pose == 'scissors') {
          return 'tie';
        }
      }
      
    }

    $scope.$watch('opponent_played', function(new_value, old_value) {
      console.log('watch');
      if($scope.playing_game && $scope.player_played && $scope.opponent_played) {
        console.log('play hands!', $scope.my_play, $scope.your_play);
        $scope.winner = playGame($scope.my_play, $scope.your_play);
        //arena_socket.emit('resetGame', $scope.room);
      }
    });

    $scope.$watch('player_played', function(new_value, old_value) {
      console.log('watch');
      if($scope.playing_game && $scope.player_played && $scope.opponent_played) {
        console.log('play hands!', $scope.my_play, $scope.your_play);
        $scope.winner = playGame($scope.my_play, $scope.your_play);
        //arena_socket.emit('resetGame', $scope.room);
      }
    });

    arena_socket.on('play', function(pose) {
      $scope.opponent_played = true;
      $scope.your_play = pose;
      console.log('play', pose);
    });

    arena_socket.on('resetGame', function() {
      console.log('reset game');
      $scope.reset();
    });
    
    $scope.playRock = function() {
      if($scope.playing_game == false) {
        $scope.playing_game = true;
        $scope.player_played = true;
        console.log('rock');
        $scope.my_play = "rock";
        arena_socket.emit('play', 'rock', $scope.room);
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
        arena_socket.emit('play', 'paper', $scope.room);
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
        arena_socket.emit('play', 'scissors', $scope.room);
      } else {
        console.log('already playing game');
      }
    }
  
    $scope.clear = function() {
      console.log('scope room: ', $scope.room);
      arena_socket.emit('resetGame', $scope.room);
      $scope.reset();
    }

    $scope.reset = function() {
      $scope.playing_game = false;
      $scope.opponent_played = false;
      $scope.player_played = false;
       
      $scope.my_play = null;
      $scope.your_play = null;
      $scope.winner = null;

      console.log('reset');
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

    // undo move
    hotkeys.add({
      combo: 'esc',
      description: 'Clear',
      callback: $scope.clear
    });

  });
