describe("Model Revealing Pattern", function(){
	it("should be defined", function(){
		expect(person).toBeDefined();
	});
	it("should have a public method init", function(){
		expect(person.init()).toBeDefined();
	});
	it("should have return one", function(){
		expect(person.init()).toBe(1);
	});
	it("should give the age when passing", function(){
		expect(person.age(23)).toBe('23');
	});
	it("name should not be accesible", function(){
		expect(person.__testonly__.name()).toBe("Miguel");
	});
	it("lastname should not be accesible", function(){
		expect(person.__testonly__.lastName()).toBe("Davila");
	});
});