(function () {
	function Is (obj) {
		Object.defineProperties(this, {
			'a': {
				value: function (ctor) {
					return obj instanceof ctor;
				}
			},
			'truthy': {
				get: function () {
					return !!obj;
				}
			},
			'falsey': {
				get: function () {
					return !obj;
				}
			},
			'number': {
				get: function () {
					return obj && obj.constructor === Number;
				}
			},
			'numeric': {
				get: function () {
					return (parseFloat(obj) == obj) && !isNaN(obj);
				}
			},
			'bool': {
				get: function () {
					return obj === true || obj === false;
				}
			},
			'string': {
				get: function () {
					return obj && obj.constructor === String;
				}
			},
			'null': {
				get: function () {
					return obj === null;
				}
			},
			'undefined': {
				get: function () {
					var undefined;
					return obj === undefined;
				}
			},
			'int': {
				get: function () {
					return ~~obj === obj;
				}
			},
			'number': {
				get: function () {
					return (obj && obj.constructor === Number) && !obj.is.NaN;
				}
			},
			'array': {
				get: function () {
 					return obj && obj.constructor === Array;
				}
			},
			'object': {
				get: function () {
					return obj !== null && !obj.is.string && !obj.is.number && !obj.is.bool && !obj.is.undefined && !obj.is.null && !obj.is.NaN;
				}
			},
			'function': {
				get: function () {
					return obj && obj.constructor === Function;
				}
			},
			'NaN': {
				get: function () {
					return isNaN(obj);
				}
			}
		});
	};

	Object.defineProperty(Object.prototype, 'is', {
		get: function () {
			return new Is(this)
		}
	});
}());