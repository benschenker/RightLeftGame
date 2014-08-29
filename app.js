var app = angular.module('gameLvR', [])
.controller('GameController', ['$scope','$timeout',function($scope,$timeout){
	$scope.commands = ["LEFT", "RIGHT"];
	$scope.command = "";
	$scope.points = 0;
	$scope.clickLock = false; //will respond to clicks only if false
	$scope.correctnessClass = "";
	
	$scope.setCorrectness = function(text){
		$scope.correctnessClass = text;
	}
	
	$scope.tryClick = function(text){
		if(!$scope.clickLock){
			$scope.clickLock = true;
			if($scope.command == text){
				$scope.points++;
				$scope.setCorrectness("correct");
				$scope.reset();
			}
			else{
				$scope.points-=5;
				$scope.setCorrectness("wrong");
				$scope.reset();
			}
		}
	}
	
	$scope.reset = function(){
			$timeout($scope.resetCommand,100);
	}
	
	$scope.resetCommand = function(){
		$scope.command = $scope.commands[Math.random()>.5 ? 1:0];
		$scope.setCorrectness("l");
		$scope.clickLock = false;
	}
	
	$scope.resetCommand(); //initialize our command
	
	
}]);


