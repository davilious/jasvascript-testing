var person = (function(age){
	
	var _name = function(){
		return "Miguel";
	}
	var _lastname = function(){
		return "Davila";
	}
	var init = function(){
		return 1;
	}
	var age = function(age){
		return age.toString();
	}
	return{
		init: init,
		age : age,
		/*Only for testing remove for production code*/
		__testonly__: { 
			name: _name,
			lastName: _lastname
		}
		/*Only for testing remove for production code*/
	}
})();