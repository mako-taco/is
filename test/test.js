require("..");
require("should");

var vars = {
	"truthy": {
		"true": true,
		"object": {},
		"one": 1
	},
	"falsey": {
		"false": false,
		"undefined": undefined,
		"null": null,
		"zero": 0
	},
	"number": {
		"one": 1,
		"prime": 7,
		"even": 2,
		"odd": 3
	},
	"numeric": {
		"number": 1,
		"string": "1"
	},
	"bool": {
		"true": true,
		"false": false
	},
	"string": {
		"word": "word",
		"email": "email@email.com",
		"url": "email.com"
	},
	"null": {
		"null": null,
	},
	"undefined": {
		"undefined": undefined
	},
	"int": {

	},
	"array": {

	},
	"object": {

	},
	"function": {

	},
	"NaN": {

	}
}


describe("a truthy", function(){

});

describe("a falsey", function(){

});

describe("a number", function(){
	it("is a number", function(){
		vars.number.one.is.number.should.be.ok;
	});

	it("is not a string", function(){
		vars.number.one.is.string.should.not.be.ok;
	});

	describe("that is even", function(){
		it("is an even", function(){
			vars.number.even.is.even.number.should.be.ok;
		});

		it("is not an odd", function(){
			vars.number.even.is.odd.number.should.not.be.ok;
		});
	});

	describe("that is odd", function(){
		it("is an odd", function(){
			vars.number.even.is.odd.number.should.not.be.ok;
		});
		it("is not an even", function(){
			vars.number.even.is.even.number.should.be.ok;
		});
	});

});

describe("a numeric", function(){

});

describe("a bool", function(){

});

describe("a string", function(){

});

describe("a null", function(){

});

describe("a undefined", function(){

});

describe("a int", function(){

});

describe("a array", function(){

});

describe("a object", function(){

});

describe("a function", function(){

});

describe("a NaN", function(){

});
