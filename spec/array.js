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
			expect(arr.length).toBe(3);
			arr.shift()
			expect(arr.length).toBe(2);
		});	
	});

	describe("indexOf()", function(){

		it("Devuelve el primer indice coincidente", function(){		
			var arr = [1,2,3];
			expect(arr.indexOf(1) != -1 ).toBe(true);
		});
		it("Si no encuentra devolverá -1", function(){		
			var arr = [1,2,3];
			expect(arr.indexOf(5) == -1 ).toBe(true);
		});
 		it("Si hay dos elementos devolverá el primer indice", function(){		
			var arr = [1,1,2,2];
			expect(arr.indexOf(2)).toBe(2);
		});		
	});

	describe("join()", function(){
		it("Debe convertir el array en un string usando el parámetro como separador", function(){
			expect(arr.join('-')).toBe("1-2-3-4")
		})
	})

	describe("pop()", function(){

		it("Elimina el último elemento", function(){
			arr.pop();
			expect(arr.length).toBe(3);
		});
		it("Y lo devuelve", function(){
			expect([1,2,3,4].pop()).toBe(4)
		});
	});

	describe("push()", function(){

		it("Inserta un nuevo elemento en array", function(){
			arr.push(5);
			expect(arr.length).toBe(4);
		});

	});

	describe("reduce()", function(){

		it("Debe aplicar una función a cada valor del array de izquierda a derecha", function(){
			var arr = [1,2,3,-1];
			var sum = function(a, b){
				return a + b;
			};
			expect(arr.reduce(sum)).toBe(5);
		});
	})

	describe("reduceRight()", function(){

		it("Debe aplicar una función a cada valor del array de derecha a izquierda", function(){
			var arr = [1,-1];
			var sum = function(a, b){
				return a + b;
			};
			expect(arr.reduceRight(sum)).toBe(0);
		});
	})

})