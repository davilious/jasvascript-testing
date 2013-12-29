describe("Voy a testear el objecto Array", function(){
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
	var arr = [1,2,3,4];
	
	describe("isArray()", function(){
		
		it("Dado un array devuelve true si lo es", function(){
			expect(Array.isArray(arr)).toBe(true);
		})	
		it("Y devolvera false si no es array", function(){
			var arr = "[1,2,3]"
			expect(Array.isArray(arr)).toBe(false);
		});	
	});
	describe("concat()", function(){
		var arr2 = [5,6,7,6];

		it("Cambiara la dimension del array", function(){
			expect(arr.concat(arr2).length).toBe( arr.length + arr2.length );
		});
		
	});
	describe("every()", function(){
		function esMayorQueZero(element){
			return (element > 0);
		}
		it("Every existe en proto", function(){
			expect('every' in Array.prototype).toBe(true);
		})
		it("Testea que la todos los elementos del array cumplen cierta fn", function(){
			expect(arr.every( esMayorQueZero )).toBe(true);
		});
		it("Si un elemento de array no cumple la condicion devolvera false", function(){
			expect([-1,2,3,4].every( esMayorQueZero )).toBe(false);
		});		
	});
	describe("filter()", function(){
		function esMayorQueTres(element){
			return (element > 3);
		}
		it("Devolverá un nuevo array con los elementos que cumplan condicion", function(){		
			expect(arr.filter(esMayorQueTres).toString()).toBe('4');
			expect(arr.join(',')).toBe('1,2,3,4');
		});	
	});
	describe("map()", function(){
		function suma2(element){
			return (element  + 2);
		}
		it("Ejecutará una función para cada elemento", function(){		
			expect(arr.map(suma2).join(',')).toBe('3,4,5,6');
		});	
	});
	describe("shift()", function(){

		it("Debe sacar el primer elemento del array", function(){		
			expect([2,3,4].shift()).toBe(2);
		});
		it("Además cambiaría la longuitud", function(){		
			var arr = [1,2,3];
			arr.shift()
			expect(arr.length).toBe(2);
		});	
	});



})