(function() {
	
	var app = angular.module('gameLvR', ['gameFilters'])
	.controller('GameController', ['$scope','$timeout',function($scope,$timeout){
		$scope.commands = ["LEFT", "RIGHT"];
		$scope.command = "";
		$scope.feedback = -1;
		$scope.points = 0;
		$scope.tryClick = function(text){
			if($scope.command == text){
				$scope.points++;
				$scope.feedback = 1;
				$scope.reset();
			}
			else{
				$scope.points--;
				$scope.feedback = 0;
				$scope.reset();
			}
		}
		$scope.reset = function(){
				$timeout($scope.resetCommand,500);
			
		}
		$scope.resetCommand = function(){
			$scope.command = $scope.commands[Math.random()>.5 ? 1:0];
			$scope.feedback = -1;
		}
		$scope.resetCommand(); //initialize our command
	}]);

})();


