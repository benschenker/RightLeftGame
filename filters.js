angular.module('gameFilters', []).filter('checkmark', function() {
  return function(input) {
		if(input<0){
			return '';
		}
		else{
			return input ? '\u2713' : '\u2718';
		}
    
  };
});
