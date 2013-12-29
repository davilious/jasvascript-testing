describe("Voy a testear el objecto String", function(){
	describe("TRIM", function(){
		it("Existe el objecto como proto", function(){
			expect(String.prototype).toBeDefined();
		})
		it("Metodo trim quita espacios en blanco por la derecha", function(){
			expect("string").toBe("string  ".trim());
		})
		it("Metodo trim quita espacios en blanco por la izquierda", function(){
			expect("string").toBe("   string".trim());
		})
		it("Metodo trim NO quita espacios en blanco en medio", function(){
			expect("string").not.toBe("st   ring".trim());
		})	
	})
})