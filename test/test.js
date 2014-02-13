require("..");
require("should");

var vars = {
	numbers: {
		one: 1
	},
	strings: {
		one: "one"
	}
}

describe("[NUMBER]", function(){
	

	it("true is true", function(){
		vars.numbers.one.is.number.should.be.ok;
	});

	it("false is false", function(){
		vars.strings.one.is.number.should.not.be.ok;
	});
});