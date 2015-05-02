var app = angular.module('gameLvR', [])
.controller('GameController', ['$scope', '$interval', function($scope, $interval){
	$scope.commands = ["LEFT", "RIGHT"];
	$scope.game = {
		points: 0,
		timeLeft: 20,
		command: ""
	};
	
	$scope.tryClick = function(text){
		if($scope.game.timeLeft){
			if($scope.game.command === text){
				$scope.updatePoints(1);
			}
			else{
				$scope.updatePoints(-5);
			}
		}
	}
	
	$scope.updatePoints = function(points){
		$scope.game.points += points;
		$scope.resetCommand();
	};
	
	$scope.resetCommand = function(){
		$scope.game.command = $scope.commands[Math.round(Math.random())];
	}
	
	// Start the game
	$scope.resetCommand();
	$interval(function(){
		$scope.game.timeLeft-=1;
	},1000,20);
}]);


