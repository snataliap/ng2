var ac_main =
webpackJsonpac__name_([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(13))(45)

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(13))(37)

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cache__ = __webpack_require__(449);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return __WEBPACK_IMPORTED_MODULE_0__cache__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error__ = __webpack_require__(56);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return __WEBPACK_IMPORTED_MODULE_1__error__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event__ = __webpack_require__(156);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return __WEBPACK_IMPORTED_MODULE_2__event__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_listener__ = __webpack_require__(42);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EventListener", function() { return __WEBPACK_IMPORTED_MODULE_3__event_listener__["EventListener"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fetch__ = __webpack_require__(450);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Fetch", function() { return __WEBPACK_IMPORTED_MODULE_4__fetch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guard__ = __webpack_require__(157);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Guard", function() { return __WEBPACK_IMPORTED_MODULE_5__guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__log__ = __webpack_require__(88);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return __WEBPACK_IMPORTED_MODULE_6__log__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_bind__ = __webpack_require__(451);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ModelBinder", function() { return __WEBPACK_IMPORTED_MODULE_7__model_bind__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model__ = __webpack_require__(452);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return __WEBPACK_IMPORTED_MODULE_8__model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__event_manager__ = __webpack_require__(87);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EventManager", function() { return __WEBPACK_IMPORTED_MODULE_9__event_manager__["EventManager"]; });











/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(517);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "cloneDeep", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "startCase", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "assignWith", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "yes", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "no", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toCamelCase", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "orderBy", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "max", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "min", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sumBy", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["A"]; });


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





__WEBPACK_IMPORTED_MODULE_1__template__["a" /* TemplatePath */].register('custom-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_1__template__["a" /* TemplatePath */].register('custom-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var ColumnView = function () {
	function ColumnView(model) {
		_classCallCheck(this, ColumnView);

		this.model = model;
		this.colspan = 1;
		this.rowspan = 1;
	}

	_createClass(ColumnView, null, [{
		key: 'model',
		value: function model(_model) {
			if (_model) {
				ColumnView.assign(_model);
			} else {
				_model = new __WEBPACK_IMPORTED_MODULE_0__column_model__["a" /* ColumnModel */]();
			}

			_model.origin = 'custom';
			return _model;
		}
	}, {
		key: 'assign',
		value: function assign(body) {
			var etalon = this.model();
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.keys(etalon)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var key = _step.value;

					if (!body.hasOwnProperty(key)) {
						var etalonValue = etalon[key];
						if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utility__["isFunction"])(etalonValue)) {
							etalonValue = etalonValue.bind(body);
						}
						body[key] = etalonValue;
					} else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utility__["isObject"])(body[key]) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utility__["isFunction"])(body[key])) {
						body[key] = Object.assign({}, etalon[key], body[key]);
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return body;
		}
	}]);

	return ColumnView;
}();



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_model__ = __webpack_require__(513);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_path__ = __webpack_require__(514);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__template_path__["a"]; });



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["map"] = map;
/* harmony export (immutable) */ __webpack_exports__["getValue"] = getValue;
/* harmony export (immutable) */ __webpack_exports__["find"] = find;
/* harmony export (immutable) */ __webpack_exports__["findIndex"] = findIndex;
/* harmony export (immutable) */ __webpack_exports__["findView"] = findView;
/* harmony export (immutable) */ __webpack_exports__["dataView"] = dataView;
/* harmony export (immutable) */ __webpack_exports__["lineView"] = lineView;
/* harmony export (immutable) */ __webpack_exports__["widthFactory"] = widthFactory;


function map(columns) {
	return columns.reduce(function (memo, column) {
		memo[column.key] = column;
		return memo;
	}, {});
}

function getValue(column) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(column.value) ? function (row) {
		return column.value(row);
	} : function (row) {
		return row[column.key];
	};
}

function find(columns, key) {
	var index = findIndex(columns, key);
	return index < 0 ? null : columns[index];
}

function findIndex(columns, key) {
	var length = columns.length;
	while (length--) {
		var column = columns[length];
		if (column.key == key) {
			return length;
		}
	}

	return -1;
}

function findView(columns, key) {
	var length = columns.length;

	while (length--) {
		var column = columns[length];
		if (column.model.key == key) {
			return column;
		}
	}

	return null;
}

function dataView(columns, model) {
	var groupBy = new Set(model.group().by);
	var pivotBy = new Set(model.pivot().by);
	return columns.filter(function (c) {
		return !groupBy.has(c.model.key) && !pivotBy.has(c.model.key) && c.model.isVisible !== false;
	});
}

function lineView(columnRows) {
	var height = columnRows.length;
	if (height === 1) {
		var columnRow = columnRows[0];
		return columnRow.filter(function (c) {
			return c.model.pin === 'left';
		}).concat(columnRow.filter(function (c) {
			return !c.model.pin;
		})).concat(columnRow.filter(function (c) {
			return c.model.pin === 'right';
		}));
	}

	if (height > 1) {
		var viewColumns = columnRows[0].filter(function (c) {
			return c.model.type !== 'pivot' && c.model.type !== 'pad';
		});
		var pivotColumns = columnRows[columnRows.length - 1].filter(function (c) {
			return c.model.type === 'pivot' || c.model.type === 'pad';
		});
		return viewColumns.filter(function (c) {
			return c.model.pin === 'left';
		}).concat(viewColumns.filter(function (c) {
			return !c.model.pin;
		})).concat(pivotColumns).concat(viewColumns.filter(function (c) {
			return c.model.pin === 'right';
		}));
	}

	return [];
}

function widthFactory(model, form) {
	var layout = model.layout;
	form = form || layout().columns;

	function materialize(column) {
		var width = column.width;
		if (('' + width).indexOf('%') >= 0) {
			return width;
		}

		return Math.max(parseInt(width), parseInt(column.minWidth || 20)) + 'px';
	}

	return function (column) {
		if (form.hasOwnProperty(column.key)) {
			column = form[column.key];
		}

		return column.width || column.width === 0 ? materialize(column) : null;
	};
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__command__ = __webpack_require__(386);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return __WEBPACK_IMPORTED_MODULE_0__command__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command_manager__ = __webpack_require__(140);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CommandManager", function() { return __WEBPACK_IMPORTED_MODULE_1__command_manager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__composite_command_manager__ = __webpack_require__(387);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CompositeCommandManager", function() { return __WEBPACK_IMPORTED_MODULE_2__composite_command_manager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table_command_manager__ = __webpack_require__(388);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TableCommandManager", function() { return __WEBPACK_IMPORTED_MODULE_3__table_command_manager__["a"]; });





/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(90);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__resource__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__ = __webpack_require__(171);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resource_factory__ = __webpack_require__(485);
/* unused harmony namespace reexport */




/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(48), exports);
tslib_1.__exportStar(__webpack_require__(130), exports);
tslib_1.__exportStar(__webpack_require__(49), exports);
tslib_1.__exportStar(__webpack_require__(302), exports);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__disposable_view__ = __webpack_require__(96);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(518);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__view__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_model__ = __webpack_require__(519);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__view_model__["a"]; });




/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataColumnModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var DataColumnModel = function (_ColumnModel) {
	_inherits(DataColumnModel, _ColumnModel);

	function DataColumnModel() {
		_classCallCheck(this, DataColumnModel);

		var _this = _possibleConstructorReturn(this, (DataColumnModel.__proto__ || Object.getPrototypeOf(DataColumnModel)).apply(this, arguments));

		_this.isDefault = true;
		_this.aggregation = null;
		_this.aggregationOptions = {
			distinct: false,
			separator: '; '
		};
		return _this;
	}

	return DataColumnModel;
}(__WEBPACK_IMPORTED_MODULE_0__column_model__["a" /* ColumnModel */]);

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aggregation__ = __webpack_require__(496);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Aggregation", function() { return __WEBPACK_IMPORTED_MODULE_0__aggregation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__convert__ = __webpack_require__(497);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "parseFactory", function() { return __WEBPACK_IMPORTED_MODULE_1__convert__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return __WEBPACK_IMPORTED_MODULE_1__convert__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return __WEBPACK_IMPORTED_MODULE_1__convert__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid__ = __webpack_require__(498);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GridService", function() { return __WEBPACK_IMPORTED_MODULE_2__grid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guid__ = __webpack_require__(499);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return __WEBPACK_IMPORTED_MODULE_3__guid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__merge__ = __webpack_require__(502);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_4__merge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__middleware__ = __webpack_require__(503);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Middleware", function() { return __WEBPACK_IMPORTED_MODULE_5__middleware__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__path__ = __webpack_require__(182);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return __WEBPACK_IMPORTED_MODULE_6__path__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__job_line__ = __webpack_require__(500);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "jobLine", function() { return __WEBPACK_IMPORTED_MODULE_7__job_line__["a"]; });









/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["get"] = get;
/* harmony export (immutable) */ __webpack_exports__["getFactory"] = getFactory;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;




function get(row, column) {
	return column.$value ? column.$value({ $row: row, $column: column }) : column.value ? column.value(row) : column.path ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services__["compile"])(column.path)(row) : row[column.key];
}

function getFactory(column) {
	var get = column.$value ? function (row) {
		return column.$value({ $row: row, $column: column });
	} : column.value ? function (row) {
		return column.value(row);
	} : column.path ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services__["compile"])(column.path) : function (row) {
		return row[column.key];
	};

	return function (row) {
		return get(row);
	};
}

function set(row, column, value) {
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(column.$value)) {
		return column.$value({ $row: row, $value: value, $column: column });
	}

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(column.value)) {
		return column.value(row, value);
	}

	if (column.path) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services__["compile"])(column.path)(row, value);
	}

	if (row.hasOwnProperty(column.key)) {
		return row[column.key] = value;
	}

	throw new __WEBPACK_IMPORTED_MODULE_2__infrastructure__["AppError"]('value', 'Row can\'t be edit on "' + column.key + '" column');
}

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnModel; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var ColumnModel = function () {
	function ColumnModel() {
		var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'text';

		_classCallCheck(this, ColumnModel);

		this.type = type;
		this.key = null;
		this.title = null;
		this.value = null;
		this.path = null;
		this.pin = null;
		this.origin = 'specific';
		this.source = 'user';
		this.class = 'data';
		this.editor = null;
		this.editorOptions = {
			trigger: 'click',
			label: null,
			value: __WEBPACK_IMPORTED_MODULE_0__utility__["identity"],
			commit: new __WEBPACK_IMPORTED_MODULE_1__command__["Command"](),
			cancel: new __WEBPACK_IMPORTED_MODULE_1__command__["Command"](),
			actions: []
		};

		this.width = null;
		this.minWidth = 20;
		this.maxWidth = null;

		this.canEdit = true;
		this.canResize = true;
		this.canSort = true;
		this.canMove = true;
		this.canFilter = true;
		this.canHighlight = true;
		this.canFocus = true;

		this.isVisible = true;
		this.index = -1;

		this.label = null;
	}

	_createClass(ColumnModel, [{
		key: 'toString',
		value: function toString() {
			return this.type + ': ' + this.title;
		}
	}]);

	return ColumnModel;
}();

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_PREFIX", function() { return GRID_PREFIX; });
var GRID_PREFIX = 'q-grid';

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var group_view_1 = __webpack_require__(152);
var filter_view_1 = __webpack_require__(150);
var pivot_view_1 = __webpack_require__(169);
var sort_view_1 = __webpack_require__(184);
var pagination_view_1 = __webpack_require__(160);
var column_view_1 = __webpack_require__(385);
var head_view_1 = __webpack_require__(154);
var body_view_1 = __webpack_require__(139);
var foot_view_1 = __webpack_require__(151);
var layout_view_1 = __webpack_require__(158);
var selection_view_1 = __webpack_require__(179);
var highlight_view_1 = __webpack_require__(155);
var edit_view_1 = __webpack_require__(148);
var navigation_view_1 = __webpack_require__(159);
var scroll_view_1 = __webpack_require__(175);
var style_view_1 = __webpack_require__(185);
var row_details_view_1 = __webpack_require__(174);
var component_1 = __webpack_require__(10);
var grid_1 = __webpack_require__(50);
var scroll_1 = __webpack_require__(134);
var ViewCoreService = (function () {
    function ViewCoreService(root, gridServiceFactory, vscroll) {
        this.root = root;
        this.gridServiceFactory = gridServiceFactory;
        this.vscroll = vscroll;
        this.group = null;
        this.filter = null;
        this.pivot = null;
        this.sort = null;
        this.pagination = null;
        this.columns = null;
        this.head = null;
        this.body = null;
        this.foot = null;
        this.layout = null;
        this.selection = null;
        this.highlight = null;
        this.edit = null;
        this.nav = null;
        this.scroll = null;
        this.style = null;
        this.rowDetails = null;
    }
    ViewCoreService.prototype.init = function () {
        var root = this.root;
        var model = root.model;
        var table = root.table;
        var commandManager = root.commandManager;
        var gridService = this.gridServiceFactory.service(model);
        this.style = new style_view_1.StyleView(model, table);
        this.head = new head_view_1.HeadView(model, table, 'q-grid-core-th');
        this.body = new body_view_1.BodyView(model, table);
        this.foot = new foot_view_1.FootView(model, table);
        this.columns = new column_view_1.ColumnView(model, gridService);
        this.layout = new layout_view_1.LayoutView(model, table, gridService);
        this.selection = new selection_view_1.SelectionView(model, table, commandManager, gridService);
        this.group = new group_view_1.GroupView(model, commandManager);
        this.pivot = new pivot_view_1.PivotView(model);
        this.highlight = new highlight_view_1.HighlightView(model, table, setTimeout);
        this.sort = new sort_view_1.SortView(model);
        this.filter = new filter_view_1.FilterView(model);
        this.edit = new edit_view_1.EditView(model, table, commandManager);
        this.nav = new navigation_view_1.NavigationView(model, table, commandManager);
        this.pagination = new pagination_view_1.PaginationView(model);
        this.scroll = new scroll_view_1.ScrollView(model, table, this.vscroll, gridService);
        this.rowDetails = new row_details_view_1.RowDetailsView(model, table, commandManager);
    };
    ViewCoreService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [component_1.RootService,
            grid_1.GridService,
            scroll_1.VScrollService])
    ], ViewCoreService);
    return ViewCoreService;
}());
exports.ViewCoreService = ViewCoreService;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(137), exports);
tslib_1.__exportStar(__webpack_require__(52), exports);
tslib_1.__exportStar(__webpack_require__(80), exports);
tslib_1.__exportStar(__webpack_require__(82), exports);
tslib_1.__exportStar(__webpack_require__(81), exports);


/***/ }),
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(13))(61)

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(89);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_builder__ = __webpack_require__(463);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__node_builder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_service__ = __webpack_require__(464);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__node_service__["a"]; });




/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(13))(192)

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_type_column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_type__ = __webpack_require__(84);
/* harmony export (immutable) */ __webpack_exports__["columnFactory"] = columnFactory;





function merge(target, source) {
	if (target && source) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utility__["assignWith"])(target, source, function (s, t) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utility__["isUndefined"])(s) ? t : s;
		});
	}

	return target || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utility__["clone"])(source);
}

function columnFactory(model) {
	var columnList = model.columnList;
	var columnMap = {
		'text': __WEBPACK_IMPORTED_MODULE_3__column_type__["b" /* TextColumn */],
		'number': __WEBPACK_IMPORTED_MODULE_3__column_type__["c" /* NumberColumn */],
		'bool': __WEBPACK_IMPORTED_MODULE_3__column_type__["d" /* BoolColumn */],
		'date': __WEBPACK_IMPORTED_MODULE_3__column_type__["e" /* DateColumn */],
		'array': __WEBPACK_IMPORTED_MODULE_3__column_type__["f" /* ArrayColumn */],
		'email': __WEBPACK_IMPORTED_MODULE_3__column_type__["g" /* EmailColumn */],
		'password': __WEBPACK_IMPORTED_MODULE_3__column_type__["h" /* PasswordColumn */],
		'select': __WEBPACK_IMPORTED_MODULE_3__column_type__["i" /* SelectColumn */],
		'group': __WEBPACK_IMPORTED_MODULE_3__column_type__["j" /* GroupColumn */],
		'pivot': __WEBPACK_IMPORTED_MODULE_3__column_type__["k" /* PivotColumn */],
		'row-number': __WEBPACK_IMPORTED_MODULE_3__column_type__["l" /* RowNumberColumn */],
		'row-indicator': __WEBPACK_IMPORTED_MODULE_3__column_type__["m" /* RowIndicatorColumn */],
		'row-options': __WEBPACK_IMPORTED_MODULE_3__column_type__["n" /* RowOptionsColumn */],
		'row-expand': __WEBPACK_IMPORTED_MODULE_3__column_type__["o" /* RowExpandColumn */],
		'row-details': __WEBPACK_IMPORTED_MODULE_3__column_type__["p" /* RowDetailsColumn */],
		'pad': __WEBPACK_IMPORTED_MODULE_3__column_type__["q" /* PadColumn */],
		'time': __WEBPACK_IMPORTED_MODULE_3__column_type__["r" /* TimeColumn */],
		'url': __WEBPACK_IMPORTED_MODULE_3__column_type__["s" /* UrlColumn */],
		'file': __WEBPACK_IMPORTED_MODULE_3__column_type__["t" /* FileColumn */],
		'image': __WEBPACK_IMPORTED_MODULE_3__column_type__["u" /* ImageColumn */],
		'reference': __WEBPACK_IMPORTED_MODULE_3__column_type__["v" /* ReferenceColumn */],
		'id': __WEBPACK_IMPORTED_MODULE_3__column_type__["w" /* IdColumn */],
		'custom': __WEBPACK_IMPORTED_MODULE_2__column_type_column_model_view__["a" /* ColumnView */]
	};

	var create = function create(entityType, columnType, body) {
		var Type = columnMap[entityType];
		var settings = columnList().reference[columnType];
		body = merge(body, settings);

		var model = Type.model(body);
		return new Type(model);
	};

	return function (type) {
		var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Guard"].notNullOrEmpty(type, 'type');

		if (columnMap.hasOwnProperty(type)) {
			return create(type, type, body);
		}

		return create('custom', type, body);
	};
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListener", function() { return EventListener; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventListener = function () {
	function EventListener(element, manager) {
		_classCallCheck(this, EventListener);

		this.element = element;
		this.manager = manager;
		this.handlers = {};
	}

	_createClass(EventListener, [{
		key: "on",
		value: function on(name, f) {
			var _this = this;

			var manager = this.manager;
			var handler = manager.bind(f);
			var handlerSet = this.handlers[name] || (this.handlers[name] = []);
			handlerSet.push(handler);
			this.element.addEventListener(name, handler, false);
			return function () {
				_this.element.removeEventListener(name, handler);
				var index = handlerSet.indexOf(handler);
				if (index >= 0) {
					handlerSet.splice(index, 1);
				}
			};
		}
	}, {
		key: "off",
		value: function off() {
			var handlers = this.handlers;
			var element = this.element;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.keys(handlers)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var key = _step.value;
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = Array.from(handlers[key])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var handler = _step2.value;

							element.removeEventListener(key, handler);
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	}]);

	return EventListener;
}();

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__markup__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_css_escape__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_css_escape___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_css_escape__);
/* harmony export (immutable) */ __webpack_exports__["c"] = sheet;
/* harmony export (immutable) */ __webpack_exports__["a"] = escapeAttr;
/* harmony export (immutable) */ __webpack_exports__["b"] = escape;



function sheet(id, source) {
	var sheetId = id + '-' + source;
	var sheet = document.getElementById(sheetId);
	var getSheet = function getSheet() {
		if (!sheet) {
			sheet = document.createElement('style');
			sheet.type = 'text/css';
			sheet.id = escapeAttr(sheetId);
			document.getElementsByTagName('head')[0].appendChild(sheet);
		}

		return sheet;
	};

	return {
		set: function set(css) {
			var sheet = getSheet();
			var lines = __WEBPACK_IMPORTED_MODULE_0__markup__["a" /* buildLines */](css);
			var styleId = '#' + escape(id);
			sheet.innerHTML = lines.map(function (line) {
				return styleId + ' ' + line;
			}).join('\n');
		},
		remove: function remove() {
			if (sheet) {
				sheet.parentNode.removeChild(sheet);
			}
		}
	};
}

function escapeAttr(name) {
	return name.replace(/\s|\t|\n|"|'/g, '_');
}

function escape(name) {
	return __WEBPACK_IMPORTED_MODULE_1_css_escape___default()(escapeAttr(name));
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_path__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_value__ = __webpack_require__(19);
/* harmony export (immutable) */ __webpack_exports__["get"] = get;
/* harmony export (immutable) */ __webpack_exports__["getFactory"] = getFactory;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;




function get(row, column) {
	return column.$label ? column.$label({ $row: row }) : column.label ? column.label(row) : column.labelPath ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_path__["a" /* compile */])(column.labelPath)(row) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_value__["get"])(row, column);
}

function getFactory(column) {
	var get = column.$label ? function (row) {
		return column.$label({ $row: row });
	} : column.label ? function (row) {
		return column.label(row);
	} : column.labelPath ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_path__["a" /* compile */])(column.labelPath) : function (row) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_value__["get"])(row, column);
	};

	return function (row) {
		return get(row);
	};
}

function set(row, column, label) {
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(column.$label)) {
		return column.$label({ $row: row, $label: label });
	}

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(column.label)) {
		return column.label(row, label);
	}

	if (column.labelPath) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_path__["a" /* compile */])(column.labelPath)(row, label);
	}
}

/***/ }),
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(103)

/***/ }),
/* 47 */,
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var disposable_view_1 = __webpack_require__(96);
var NgComponent = (function (_super) {
    tslib_1.__extends(NgComponent, _super);
    function NgComponent() {
        return _super.call(this) || this;
    }
    NgComponent.prototype.ngOnInit = function () {
    };
    NgComponent.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    return NgComponent;
}(disposable_view_1.DisposableView));
exports.NgComponent = NgComponent;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var infrastructure_1 = __webpack_require__(3);
var core_1 = __webpack_require__(2);
var infrastructure_2 = __webpack_require__(3);
var utility_1 = __webpack_require__(4);
var RootService = (function () {
    function RootService(changeDetector) {
        this.changeDetector = changeDetector;
        this.gridModel = null;
        this.markup = {};
        this.bag = new Map();
        this.table = null;
        this.markup.document = document;
    }
    Object.defineProperty(RootService.prototype, "model", {
        get: function () {
            infrastructure_1.Guard.notNull(this.gridModel, 'model');
            return this.gridModel;
        },
        set: function (value) {
            this.gridModel = value;
        },
        enumerable: true,
        configurable: true
    });
    RootService.prototype.applyFactory = function (gf, mode) {
        if (gf === void 0) { gf = null; }
        if (mode === void 0) { mode = 'async'; }
        return function (lf, timeout) {
            if (utility_1.isUndefined(timeout)) {
                switch (mode) {
                    case 'async': {
                        timeout = 0;
                        break;
                    }
                    case 'sync': {
                        var result = lf();
                        if (gf) {
                            gf();
                        }
                        //this.changeDetector.detectChanges();
                        return result;
                    }
                    default:
                        throw new infrastructure_2.AppError('grid', "Invalid mode " + mode);
                }
            }
            return setTimeout(function () {
                lf();
                if (gf) {
                    gf();
                }
                //this.changeDetector.detectChanges();
            }, timeout);
        };
    };
    RootService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], RootService);
    return RootService;
}());
exports.RootService = RootService;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(330), exports);
tslib_1.__exportStar(__webpack_require__(135), exports);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var infrastructure_1 = __webpack_require__(3);
var utility_1 = __webpack_require__(4);
var core_1 = __webpack_require__(2);
var component_1 = __webpack_require__(10);
var infrastructure_2 = __webpack_require__(3);
var PluginComponent = (function (_super) {
    tslib_1.__extends(PluginComponent, _super);
    function PluginComponent(root) {
        var _this = _super.call(this) || this;
        _this.root = root;
        _this.gridModel = null;
        _this.context = { $implicit: _this };
        _this.binder = new infrastructure_1.ModelBinder(_this);
        _this.commit = utility_1.noop;
        _this.models = [];
        return _this;
    }
    PluginComponent.prototype.setup = function () {
        return this.binder.bind(this.model, this.models, false);
    };
    PluginComponent.prototype.ngOnInit = function () {
        this.commit = this.setup();
        this.commit();
    };
    PluginComponent.prototype.ngOnChanges = function (changes) {
        this.commit();
    };
    PluginComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.binder.bind(null);
    };
    Object.defineProperty(PluginComponent.prototype, "model", {
        get: function () {
            var model = this.gridModel || (this.root && this.root.model);
            infrastructure_2.Guard.notNull('model', model);
            return model;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        core_1.Input('model'),
        tslib_1.__metadata("design:type", Object)
    ], PluginComponent.prototype, "gridModel", void 0);
    PluginComponent = tslib_1.__decorate([
        tslib_1.__param(0, core_1.Optional()),
        tslib_1.__metadata("design:paramtypes", [component_1.RootService])
    ], PluginComponent);
    return PluginComponent;
}(component_1.NgComponent));
exports.PluginComponent = PluginComponent;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var template_directive_1 = __webpack_require__(348);
var template_link_directive_1 = __webpack_require__(347);
var template_cache_directive_1 = __webpack_require__(136);
var TemplateModule = (function () {
    function TemplateModule() {
    }
    TemplateModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                template_directive_1.TemplateDirective,
                template_link_directive_1.TemplateLinkDirective,
                template_cache_directive_1.TemplateCacheDirective
            ],
            exports: [
                template_directive_1.TemplateDirective,
                template_link_directive_1.TemplateLinkDirective,
                template_cache_directive_1.TemplateCacheDirective
            ],
            imports: [],
            providers: []
        })
    ], TemplateModule);
    return TemplateModule;
}());
exports.TemplateModule = TemplateModule;


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell__ = __webpack_require__(357);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cell__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cell_selector__ = __webpack_require__(358);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__cell_selector__["a"]; });



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__row__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cell__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fake__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utility__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Box; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var Box = function () {
	function Box(context, model) {
		_classCallCheck(this, Box);

		this.context = context;
		this.model = model;
	}

	_createClass(Box, [{
		key: 'cell',
		value: function cell(rowIndex, columnIndex) {
			return this.cellCore(rowIndex, columnIndex);
		}
	}, {
		key: 'column',
		value: function column(index) {
			var columnFactory = this.createColumnCore.bind(this);
			return columnFactory(index);
		}
	}, {
		key: 'row',
		value: function row(index) {
			return this.rowCore(index);
		}
	}, {
		key: 'rows',
		value: function rows() {
			var _this = this;

			var rowFactory = this.createRowCore.bind(this);
			var elements = this.getElements();
			if (elements.length > 0) {
				if (elements.length > 1) {
					var rows = __WEBPACK_IMPORTED_MODULE_5__utility__["zip"].apply(undefined, _toConsumableArray(elements.map(function (element) {
						return _this.rowsCore(element);
					})));
					return rows.map(function (entry, index) {
						return rowFactory(index, new __WEBPACK_IMPORTED_MODULE_4__container__["a" /* Container */](entry));
					});
				}

				return this.rowsCore(elements[0]).map(function (row, index) {
					return rowFactory(index, row);
				});
			}

			return [];
		}
	}, {
		key: 'rowCount',
		value: function rowCount() {
			var _this2 = this;

			// TODO: improve performance
			var elements = this.getElements();
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utility__["max"])(elements.map(function (element) {
				return _this2.rowsCore(element).length;
			}));
		}
	}, {
		key: 'columnCount',
		value: function columnCount() {
			var _this3 = this;

			// TODO: improve performance
			var elements = this.getElements();
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utility__["sumBy"])(elements, function (element) {
				var rows = _this3.rowsCore(element);
				return rows.length ? rows[0].cells.length : 0;
			});
		}
	}, {
		key: 'getElements',
		value: function getElements() {
			return this.getElementsCore() || [new __WEBPACK_IMPORTED_MODULE_3__fake__["c" /* FakeTable */]()];
		}
	}, {
		key: 'getElementsCore',
		value: function getElementsCore() {
			return null;
		}
	}, {
		key: 'rowCore',
		value: function rowCore(index) {
			var _this4 = this;

			var rowFactory = this.createRowCore.bind(this);
			if (index >= 0 && index < this.rowCount()) {
				var elements = this.getElements();
				if (elements.length > 0) {
					if (elements.length > 1) {
						var box = elements.map(function (element) {
							return _this4.rowsCore(element)[index];
						});
						return rowFactory(index, new __WEBPACK_IMPORTED_MODULE_4__container__["a" /* Container */](box));
					}

					return rowFactory(index, this.rowsCore(elements[0])[index]);
				}
			}

			return rowFactory(index, new __WEBPACK_IMPORTED_MODULE_3__fake__["b" /* FakeElement */]());
		}
	}, {
		key: 'cellCore',
		value: function cellCore(rowIndex, columnIndex) {
			var _this5 = this;

			var cellFactory = this.createCellCore.bind(this);
			if (rowIndex >= 0 && rowIndex < this.rowCount()) {
				if (columnIndex >= 0 && columnIndex < this.columnCount()) {
					var elements = this.getElements();
					var cells = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utility__["flatten"])(elements.map(function (element) {
						return Array.from(_this5.rowsCore(element)[rowIndex].cells);
					}));
					return cellFactory(rowIndex, columnIndex, cells[columnIndex]);
				}
			}

			return cellFactory(rowIndex, columnIndex, new __WEBPACK_IMPORTED_MODULE_3__fake__["b" /* FakeElement */]());
		}
	}, {
		key: 'rowsCore',
		value: function rowsCore(element) {
			var rows = element.rows;
			var isDataRow = this.context.isDataRow;
			var result = [];
			for (var i = 0, length = rows.length; i < length; i++) {
				var row = rows[i];
				if (!isDataRow(row)) {
					continue;
				}

				result.push(row);
			}

			return result;
		}
	}, {
		key: 'rowCellsCore',
		value: function rowCellsCore(index) {
			var _this6 = this;

			var cellFactory = this.createCellCore.bind(this);
			if (index >= 0 && index < this.rowCount()) {
				var elements = this.getElements();
				var cells = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utility__["flatten"])(elements.map(function (element) {
					return Array.from(_this6.rowsCore(element)[index].cells);
				}));
				return cells.map(function (cell, i) {
					return cellFactory(index, i, cell);
				});
			}

			return [];
		}
	}, {
		key: 'columnCellsCore',
		value: function columnCellsCore(index) {
			var cellFactory = this.createCellCore.bind(this);
			var column = this.findColumnCore(index);
			if (column) {
				return column.rows.map(function (row, i) {
					return cellFactory(i, index, row.cells[column.index]);
				});
			}

			return [];
		}
	}, {
		key: 'findColumnCore',
		value: function findColumnCore(index) {
			if (index >= 0 && this.rowCount() > 0) {
				var elements = this.getElements();
				var startIndex = 0;
				for (var i = 0, length = elements.length; i < length; i++) {
					var element = elements[i];
					var rows = this.rowsCore(element);
					var cells = rows[0].cells;
					var endIndex = startIndex + cells.length;
					if (index < endIndex) {
						return {
							rows: rows,
							index: index - startIndex
						};
					}

					startIndex = endIndex;
				}
			}

			return null;
		}
	}, {
		key: 'createRowCore',
		value: function createRowCore(index, element) {
			return new __WEBPACK_IMPORTED_MODULE_0__row__["a" /* Row */](this, index, element);
		}
	}, {
		key: 'createColumnCore',
		value: function createColumnCore(index) {
			return new __WEBPACK_IMPORTED_MODULE_1__column__["a" /* Column */](this, index);
		}
	}, {
		key: 'createCellCore',
		value: function createCellCore(rowIndex, columnIndex, element) {
			return new __WEBPACK_IMPORTED_MODULE_2__cell__["a" /* Cell */](this.context, rowIndex, columnIndex, element);
		}
	}]);

	return Box;
}();

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_list__ = __webpack_require__(144);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element__ = __webpack_require__(394);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__element__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layer__ = __webpack_require__(395);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__layer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table__ = __webpack_require__(396);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__table__["a"]; });





/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppError; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var AppError = function (_Error) {
	_inherits(AppError, _Error);

	function AppError(name, message) {
		_classCallCheck(this, AppError);

		var _this = _possibleConstructorReturn(this, (AppError.__proto__ || Object.getPrototypeOf(AppError)).call(this, message));

		_this.name = _this.constructor.name;
		_this.message = 'qgrid.' + name + ': ' + message;
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(Error.captureStackTrace)) {
			Error.captureStackTrace(_this, _this.constructor);
		} else {
			_this.stack = new Error(message).stack;
		}
		return _this;
	}

	return AppError;
}(Error);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter_pipe__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination_pipe__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_pipe__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_pipe__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memo_pipe__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__group_pipe__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pivot_pipe__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__column_pipe__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_pipe__ = __webpack_require__(478);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pipe; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











var Pipe = function () {
	function Pipe() {
		_classCallCheck(this, Pipe);
	}

	_createClass(Pipe, null, [{
		key: 'data',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_3__data_pipe__["a" /* dataPipe */];
		}
	}, {
		key: 'filter',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_0__filter_pipe__["a" /* filterPipe */];
		}
	}, {
		key: 'pagination',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_1__pagination_pipe__["a" /* paginationPipe */];
		}
	}, {
		key: 'sort',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_2__sort_pipe__["a" /* sortPipe */];
		}
	}, {
		key: 'memo',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_4__memo_pipe__["a" /* memoPipe */];
		}
	}, {
		key: 'group',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_5__group_pipe__["a" /* groupPipe */];
		}
	}, {
		key: 'pivot',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_6__pivot_pipe__["a" /* pivotPipe */];
		}
	}, {
		key: 'column',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_7__column_pipe__["a" /* columnPipe */];
		}
	}, {
		key: 'view',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_8__view_pipe__["a" /* viewPipe */];
		}
	}]);

	return Pipe;
}();

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_pipe_unit__ = __webpack_require__(162);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "columnPipeUnit", function() { return __WEBPACK_IMPORTED_MODULE_0__column_pipe_unit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_pipe_unit__ = __webpack_require__(163);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "defaultPipeUnit", function() { return __WEBPACK_IMPORTED_MODULE_1__default_pipe_unit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipe_unit__ = __webpack_require__(164);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PipeUnit", function() { return __WEBPACK_IMPORTED_MODULE_2__pipe_unit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_pipe_unit__ = __webpack_require__(165);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "viewPipeUnit", function() { return __WEBPACK_IMPORTED_MODULE_3__view_pipe_unit__["a"]; });





/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(13))(189)

/***/ }),
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var TableCoreService = (function () {
    function TableCoreService() {
    }
    TableCoreService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], TableCoreService);
    return TableCoreService;
}());
exports.TableCoreService = TableCoreService;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var TemplateCacheService = (function () {
    function TemplateCacheService() {
        this.cache = new Map();
    }
    TemplateCacheService.prototype.get = function (key) {
        return this.cache.get(key);
    };
    TemplateCacheService.prototype.put = function (key, value) {
        this.cache.set(key, value);
    };
    TemplateCacheService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], TemplateCacheService);
    return TemplateCacheService;
}());
exports.TemplateCacheService = TemplateCacheService;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var TemplateHostService = (function () {
    function TemplateHostService() {
        this.key = null;
    }
    TemplateHostService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], TemplateHostService);
    return TemplateHostService;
}());
exports.TemplateHostService = TemplateHostService;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var TemplateLinkService = (function () {
    function TemplateLinkService() {
        this.cache = new Map();
    }
    TemplateLinkService.prototype.get = function (key) {
        return this.cache.get(key);
    };
    TemplateLinkService.prototype.put = function (key, value) {
        this.cache.set(key, value);
    };
    TemplateLinkService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], TemplateLinkService);
    return TemplateLinkService;
}());
exports.TemplateLinkService = TemplateLinkService;


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_list_generate__ = __webpack_require__(359);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__column_list_generate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_list_model__ = __webpack_require__(360);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__column_list_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_list_sort__ = __webpack_require__(361);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__column_list_sort__["a"]; });




/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_column__ = __webpack_require__(362);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__array_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bool_column__ = __webpack_require__(363);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__bool_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_column__ = __webpack_require__(364);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__date_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_column__ = __webpack_require__(365);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__email_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__file_column__ = __webpack_require__(366);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_4__file_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_row_column__ = __webpack_require__(367);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_5__filter_row_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__group_column__ = __webpack_require__(368);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__group_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__id_column__ = __webpack_require__(369);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_7__id_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__image_column__ = __webpack_require__(370);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_8__image_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__number_column__ = __webpack_require__(371);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_9__number_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pad_column__ = __webpack_require__(372);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_10__pad_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__password_column__ = __webpack_require__(373);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_11__password_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pivot_column__ = __webpack_require__(374);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_12__pivot_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reference_column__ = __webpack_require__(375);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_13__reference_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__row_indicator_column__ = __webpack_require__(378);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_14__row_indicator_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__row_number_column__ = __webpack_require__(379);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_15__row_number_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__row_options_column__ = __webpack_require__(380);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_16__row_options_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__row_expand_column__ = __webpack_require__(377);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_17__row_expand_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__row_details_column__ = __webpack_require__(376);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_18__row_details_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__select_column__ = __webpack_require__(381);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_19__select_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__text_column__ = __webpack_require__(382);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_20__text_column__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_20__text_column__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__time_column__ = __webpack_require__(383);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_21__time_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__url_column__ = __webpack_require__(384);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_22__url_column__["a"]; });
























/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleBox; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleBox = function () {
	function StyleBox(context) {
		_classCallCheck(this, StyleBox);

		this.context = context;
		this.entries = new Map();
	}

	_createClass(StyleBox, [{
		key: "addClass",
		value: function addClass(item, name) {
			var key = this.key(item);
			if (key !== null) {
				var entry = this.entries.get(key);
				if (!entry) {
					entry = new Set();
					this.entries.set(key, entry);
				}

				entry.add(name);
			}
		}
	}, {
		key: "removeClass",
		value: function removeClass(item, name) {
			var key = this.key(item);
			if (key !== null) {
				var entry = this.entries.get(key);
				if (entry) {
					entry.delete(name);
					if (!entry.size) {
						this.entries.delete(key);
					}

					return true;
				}
			}

			return false;
		}
	}, {
		key: "key",
		value: function key(item) {
			return item;
		}
	}]);

	return StyleBox;
}();

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flatView; });
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



function flatView(obj) {
	var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ', ';

	var result = {};

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = Object.entries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _slicedToArray(_step.value, 2),
			    prop = _step$value[0],
			    value = _step$value[1];

			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isArray"])(value)) {
				var items = [];
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var item = _step2.value;

						items.push(item);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				result[prop] = items.join(separator);
			} else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isObject"])(value)) {
				var flatObject = flatView(value, separator);
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = Object.entries(flatObject)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var _step3$value = _slicedToArray(_step3.value, 2),
						    flatProp = _step3$value[0],
						    flatValue = _step3$value[1];

						result[prop + '.' + flatProp] = flatValue;
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
			} else {
				result[prop] = value;
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return result;
}



/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventManager", function() { return EventManager; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventManager = function () {
	function EventManager(context) {
		var apply = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (f) {
			return f();
		};

		_classCallCheck(this, EventManager);

		this.context = context;
		this.apply = apply;
	}

	_createClass(EventManager, [{
		key: "bind",
		value: function bind(f) {
			var handler = f.bind(this.context);
			var apply = this.apply;
			return function () {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				return apply(function () {
					return handler.apply(undefined, args);
				});
			};
		}
	}]);

	return EventManager;
}();

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Log; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*eslint-disable  no-console, no-unused-vars, no-undef*/

var Log = function () {
	function Log() {
		_classCallCheck(this, Log);
	}

	_createClass(Log, null, [{
		key: "info",
		value: function info(source, message) {
			if (!"development".PRODUCTION) {
				console.info("qgrid." + source + ": " + message);
			}
		}
	}, {
		key: "warn",
		value: function warn(source, message) {
			console.warn("qgrid." + source + ": " + message);
		}
	}, {
		key: "error",
		value: function error(source, message) {
			console.error("qgrid." + source + ": " + message);
		}
	}]);

	return Log;
}();

/*eslint-enable*/

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Node; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(key) {
	var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'group';

	_classCallCheck(this, Node);

	this.key = key;
	this.level = level;
	this.rows = [];
	this.children = [];
	this.type = type;
	this.state = {
		expand: false
	};
};

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resource; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resource = function Resource() {
	var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	_classCallCheck(this, Resource);

	this.data = data;
	this.scope = scope;
};

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowDetails; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RowDetails = function RowDetails(item, column) {
	_classCallCheck(this, RowDetails);

	this.item = item;
	this.column = column;
};

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__row_model__ = __webpack_require__(488);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__row_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__row__ = __webpack_require__(487);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__row__["a"]; });



/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_state__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleSelectionState; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var MultipleSelectionState = function (_SelectionState) {
	_inherits(MultipleSelectionState, _SelectionState);

	function MultipleSelectionState(model, service) {
		_classCallCheck(this, MultipleSelectionState);

		var _this = _possibleConstructorReturn(this, (MultipleSelectionState.__proto__ || Object.getPrototypeOf(MultipleSelectionState)).call(this, model, service));

		_this.items = new Map();
		return _this;
	}

	_createClass(MultipleSelectionState, [{
		key: 'entries',
		value: function entries() {
			return Array.from(this.items.values());
		}
	}, {
		key: 'selectCore',
		value: function selectCore(item, state, key) {
			if (state) {
				this.items.set(key(item), item);
			} else {
				this.items.delete(key(item));
			}
		}
	}, {
		key: 'stateCore',
		value: function stateCore(item, key) {
			return this.items.has(key(item));
		}
	}, {
		key: 'clearCore',
		value: function clearCore() {
			this.items = new Map();
		}
	}]);

	return MultipleSelectionState;
}(__WEBPACK_IMPORTED_MODULE_0__selection_state__["a" /* SelectionState */]);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionState; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var SelectionState = function () {
	function SelectionState(model, service) {
		_classCallCheck(this, SelectionState);

		this.model = model;
		this.service = service;
	}

	_createClass(SelectionState, [{
		key: 'select',
		value: function select(item) {
			var _this = this;

			var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
			var key = arguments[2];

			key = key || this.keyFactory();
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isArray"])(item)) {
				item.forEach(function (item) {
					return _this.select(item, state, key);
				});
				return;
			}

			if (item instanceof __WEBPACK_IMPORTED_MODULE_1__node__["a" /* Node */]) {
				var rows = this.model.data().rows;
				if (rows.length) {
					item.rows.forEach(function (index) {
						return _this.select(rows[index], state, key);
					});
					return;
				}
			}

			this.selectCore(item, state, key);
		}
	}, {
		key: 'toggle',
		value: function toggle(item) {
			var state = this.state(item);
			return this.select(item, state === null || !state);
		}
	}, {
		key: 'state',
		value: function state(item, key) {
			var _this2 = this;

			key = key || this.keyFactory();
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isArray"])(item)) {
				var all = item.every(function (item) {
					return _this2.state(item, key);
				});
				return all ? true : item.some(function (item) {
					return _this2.state(item, key);
				}) ? null : false;
			}

			if (item instanceof __WEBPACK_IMPORTED_MODULE_1__node__["a" /* Node */]) {
				var rows = this.model.data().rows;
				if (rows.length) {
					var _all = item.rows.length && item.rows.every(function (index) {
						return _this2.state(rows[index], key);
					});
					return _all ? true : item.rows.some(function (index) {
						return _this2.state(rows[index], key);
					}) ? null : false;
				}
			}

			return this.stateCore(item, key);
		}
	}, {
		key: 'keyFactory',
		value: function keyFactory() {
			return this.service.hashFactory();
		}
	}, {
		key: 'clear',
		value: function clear() {
			this.clearCore();
		}
	}, {
		key: 'selectCore',
		value: function selectCore() {}
	}, {
		key: 'clearCore',
		value: function clearCore() {}
	}, {
		key: 'stateCore',
		value: function stateCore() {
			return false;
		}
	}]);

	return SelectionState;
}();

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_pair__ = __webpack_require__(504);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return map; });


var key = __WEBPACK_IMPORTED_MODULE_0__services_pair__["a" /* key */];
var index = __WEBPACK_IMPORTED_MODULE_0__services_pair__["b" /* index */];
var direction = __WEBPACK_IMPORTED_MODULE_0__services_pair__["c" /* value */];
var map = __WEBPACK_IMPORTED_MODULE_0__services_pair__["d" /* map */];

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisposableView", function() { return DisposableView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var DisposableView = function () {
	function DisposableView() {
		_classCallCheck(this, DisposableView);

		this.disposes = [];
	}

	_createClass(DisposableView, [{
		key: 'using',
		value: function using(dispose) {
			__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Guard"].invokable(dispose, 'dispose');

			this.disposes.push(dispose);
			return this.dispose.bind(this);
		}
	}, {
		key: 'dispose',
		value: function dispose() {
			var temp = this.disposes;
			this.disposes = [];
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = temp[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var dispose = _step.value;

					dispose();
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	}]);

	return DisposableView;
}();

/***/ }),
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Angular 2
var platform_browser_1 = __webpack_require__(30);
var core_1 = __webpack_require__(2);
// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) {
    return value;
};
if (false) {
    core_1.enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        platform_browser_1.disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(core_1.ApplicationRef);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        platform_browser_1.enableDebugTools(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
exports.decorateModuleRef = _decorateModuleRef;
exports.ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(13))(236)

/***/ }),
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = tslib_1.__decorate([
        core_1.Injectable()
    ], AppState);
    return AppState;
}());
exports.AppState = AppState;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(285), exports);


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(286), exports);


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(231);
var Observable_1 = __webpack_require__(227);
__webpack_require__(729);
__webpack_require__(40);
var Human = (function () {
    function Human() {
    }
    return Human;
}());
exports.Human = Human;
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getPeople = function (count) {
        return this.http.get("./data/people/" + count + ".json")
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.extractData = function (responce) {
        return responce.json();
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    DataService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var transfer = null;
var DragService = (function () {
    function DragService() {
    }
    Object.defineProperty(DragService, "mimeType", {
        get: function () {
            return 'application/x-q-grid+json';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragService, "transfer", {
        get: function () {
            return transfer;
        },
        set: function (value) {
            transfer = value;
        },
        enumerable: true,
        configurable: true
    });
    DragService.decode = function (source) {
        return JSON.parse(source); // eslint-disable-line angular/json-functions
    };
    DragService.encode = function (source) {
        return JSON.stringify(source); // eslint-disable-line angular/json-functions
    };
    DragService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], DragService);
    return DragService;
}());
exports.DragService = DragService;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(289), exports);


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(301), exports);
tslib_1.__exportStar(__webpack_require__(135), exports);


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var infrastructure_1 = __webpack_require__(3);
var utility_1 = __webpack_require__(4);
var ng_component_1 = __webpack_require__(48);
var ModelComponent = (function (_super) {
    tslib_1.__extends(ModelComponent, _super);
    function ModelComponent(root) {
        var _this = _super.call(this) || this;
        _this.root = root;
        _this.binder = new infrastructure_1.ModelBinder(_this);
        _this.commit = utility_1.noop;
        _this.models = [];
        return _this;
    }
    ModelComponent.prototype.setup = function () {
        return this.binder.bind(this.model, this.models, false);
    };
    ModelComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.commit = this.setup();
        this.commit();
    };
    ModelComponent.prototype.ngOnChanges = function (changes) {
        this.commit();
    };
    ModelComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.binder.bind(null);
    };
    Object.defineProperty(ModelComponent.prototype, "model", {
        get: function () {
            return this.root.model;
        },
        enumerable: true,
        configurable: true
    });
    return ModelComponent;
}(ng_component_1.NgComponent));
exports.ModelComponent = ModelComponent;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var services_1 = __webpack_require__(17);
var utility_1 = __webpack_require__(4);
var services_2 = __webpack_require__(17);
var component_1 = __webpack_require__(10);
var ColumnListService = (function () {
    function ColumnListService(root) {
        this.root = root;
    }
    ColumnListService.prototype.copy = function (target, source) {
        Object.keys(source)
            .filter(function (key) { return !utility_1.isUndefined(source[key]) && key !== 'value'; })
            .forEach(function (key) {
            var value = source[key];
            var accessor = services_1.compile(key);
            var targetValue = accessor(target);
            var parse = services_2.parseFactory(services_2.getType(targetValue));
            var sourceValue = parse(value);
            accessor(target, sourceValue);
        });
    };
    ColumnListService.prototype.add = function (column) {
        var columnList = this.root.model.columnList;
        columnList({
            columns: columnList().columns.concat([column])
        });
    };
    ColumnListService.prototype.register = function (column) {
        var columnList = this.root.model.columnList;
        var reference = utility_1.clone(columnList().columns);
        reference[column.type] = column;
        columnList({ reference: reference });
    };
    ColumnListService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [component_1.RootService])
    ], ColumnListService);
    return ColumnListService;
}());
exports.ColumnListService = ColumnListService;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(305), exports);
tslib_1.__exportStar(__webpack_require__(306), exports);


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(310), exports);


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(323), exports);


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var infrastructure_1 = __webpack_require__(3);
var command_1 = __webpack_require__(8);
var services_1 = __webpack_require__(17);
var pipe_1 = __webpack_require__(161);
var units_1 = __webpack_require__(58);
var utility_1 = __webpack_require__(4);
var value_1 = __webpack_require__(19);
var label_1 = __webpack_require__(44);
var core_1 = __webpack_require__(2);
var GridService = (function () {
    function GridService() {
    }
    GridService.prototype.model = function () {
        return new infrastructure_1.Model();
    };
    GridService.prototype.service = function (model) {
        var apply = utility_1.noop;
        return new services_1.GridService(model, apply);
    };
    Object.defineProperty(GridService.prototype, "pipe", {
        get: function () {
            return pipe_1.Pipe;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridService.prototype, "pipeUnit", {
        get: function () {
            return units_1.PipeUnit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridService.prototype, "Command", {
        get: function () {
            return command_1.Command;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridService.prototype, "valueFactory", {
        get: function () {
            return value_1.getFactory;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridService.prototype, "labelFactory", {
        get: function () {
            return label_1.getFactory;
        },
        enumerable: true,
        configurable: true
    });
    GridService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], GridService);
    return GridService;
}());
exports.GridService = GridService;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var template_cache_service_1 = __webpack_require__(80);
var template_host_service_1 = __webpack_require__(81);
var TemplateCacheDirective = (function () {
    function TemplateCacheDirective(templateCache, templateRef, templateHost) {
        this.templateCache = templateCache;
        this.templateRef = templateRef;
        this.templateHost = templateHost;
        this.key = '';
    }
    TemplateCacheDirective.prototype.ngOnInit = function () {
        if (this.templateHost) {
            this.templateCache.put(this.key + "-" + this.templateHost.key, this.templateRef);
        }
        else {
            this.templateCache.put(this.key, this.templateRef);
        }
    };
    tslib_1.__decorate([
        core_1.Input('for'),
        tslib_1.__metadata("design:type", Object)
    ], TemplateCacheDirective.prototype, "key", void 0);
    TemplateCacheDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: 'ng-template[for]'
        }),
        tslib_1.__param(2, core_1.Optional()),
        tslib_1.__metadata("design:paramtypes", [template_cache_service_1.TemplateCacheService,
            core_1.TemplateRef,
            template_host_service_1.TemplateHostService])
    ], TemplateCacheDirective);
    return TemplateCacheDirective;
}());
exports.TemplateCacheDirective = TemplateCacheDirective;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var infrastructure_1 = __webpack_require__(3);
var ThemeService = (function () {
    function ThemeService() {
        this.changed = new infrastructure_1.Event();
        this.themeName = '';
    }
    Object.defineProperty(ThemeService.prototype, "name", {
        get: function () {
            return this.themeName;
        },
        set: function (value) {
            if (value !== this.themeName) {
                this.themeName = value;
                this.changed.emit({
                    newValue: value,
                    oldValue: value
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    ThemeService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], ThemeService);
    return ThemeService;
}());
exports.ThemeService = ThemeService;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var ThemeService = (function () {
    function ThemeService() {
        this.name = 'material';
    }
    ThemeService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], ThemeService);
    return ThemeService;
}());
exports.ThemeService = ThemeService;


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_column_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__row_details__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_value__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_label__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyView", function() { return BodyView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var BodyView = function (_View) {
	_inherits(BodyView, _View);

	function BodyView(model, table) {
		_classCallCheck(this, BodyView);

		var _this = _possibleConstructorReturn(this, (BodyView.__proto__ || Object.getPrototypeOf(BodyView)).call(this, model));

		_this.table = table;
		_this.rows = [];
		_this.columnList = [];
		_this.using(model.viewChanged.watch(function () {
			return _this.invalidate(model);
		}));
		return _this;
	}

	_createClass(BodyView, [{
		key: 'invalidate',
		value: function invalidate(model) {
			__WEBPACK_IMPORTED_MODULE_3__infrastructure__["Log"].info('view.body', 'invalidate');

			this.invalidateRows(model);
			this.invalidateColumns(model);
		}
	}, {
		key: 'invalidateRows',
		value: function invalidateRows(model) {
			this.table.view.removeLayer('blank');
			this.rows = model.view().rows;
			if (!this.rows.length) {
				var layerState = model.layer();
				if (layerState.resource.data.hasOwnProperty('blank')) {
					var layer = this.table.view.addLayer('blank');
					layer.resource('blank', layerState.resource);
				}
			}
		}
	}, {
		key: 'invalidateColumns',
		value: function invalidateColumns(model) {
			var columns = model.view().columns;
			this.columnList = __WEBPACK_IMPORTED_MODULE_1__column_column_service__["lineView"](columns);
		}
	}, {
		key: 'colspan',
		value: function colspan(row, column) {
			if (row instanceof __WEBPACK_IMPORTED_MODULE_5__row_details__["a" /* RowDetails */] && column.type === 'row-details') {
				return this.table.data.columns().length;
			}

			return 1;
		}
	}, {
		key: 'rowspan',
		value: function rowspan() {
			return 1;
		}
	}, {
		key: 'columns',
		value: function columns(row, pin) {
			if (row instanceof __WEBPACK_IMPORTED_MODULE_5__row_details__["a" /* RowDetails */]) {
				return [row.column];
			}

			return this.columnList.filter(function (c) {
				return c.model.pin === pin;
			});
		}
	}, {
		key: 'valueFactory',
		value: function valueFactory(column) {
			var getValueFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			var model = this.model;
			var getValue = (getValueFactory || __WEBPACK_IMPORTED_MODULE_6__services_value__["getFactory"])(column);

			return function (row) {
				if (row instanceof __WEBPACK_IMPORTED_MODULE_4__node__["a" /* Node */]) {
					var node = row;
					var rows = model.data().rows;
					switch (node.type) {
						case 'group':
							{
								var aggregation = column.aggregation;
								if (aggregation) {
									if (!__WEBPACK_IMPORTED_MODULE_2__services__["Aggregation"].hasOwnProperty(aggregation)) {
										throw new __WEBPACK_IMPORTED_MODULE_3__infrastructure__["AppError"]('view.body', 'Aggregation ' + aggregation + ' is not registered');
									}

									var groupRows = node.rows.map(function (i) {
										return rows[i];
									});
									return __WEBPACK_IMPORTED_MODULE_2__services__["Aggregation"][aggregation](groupRows, getValue, column.aggregationOptions);
								}

								return null;
							}
						case 'row':
							{
								var rowIndex = node.rows[0];
								return getValue(rows[rowIndex], column);
							}
						case 'value':
							{
								return getValue(node, column);
							}
						default:
							throw new __WEBPACK_IMPORTED_MODULE_3__infrastructure__["AppError"]('view.body', 'Invalid node type ' + node.type);
					}
				}

				if (row instanceof __WEBPACK_IMPORTED_MODULE_5__row_details__["a" /* RowDetails */]) {
					return null;
				}

				return getValue(row);
			};
		}
	}, {
		key: 'labelFactory',
		value: function labelFactory(column) {
			return this.valueFactory(column, __WEBPACK_IMPORTED_MODULE_7__services_label__["getFactory"]);
		}
	}, {
		key: 'value',
		value: function value(row, column, _value) {
			if (arguments.length == 3) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__services_value__["set"])(row, column, _value);
				return;
			}

			var getValue = this.valueFactory(column);
			return getValue(row);
		}
	}, {
		key: 'label',
		value: function label(row, column, value) {
			if (arguments.length === 3) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__services_label__["set"])(row, column, value);
				return;
			}

			var getLabel = this.labelFactory(column);
			return getLabel(row);
		}
	}]);

	return BodyView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);



/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommandManager; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommandManager = function () {
	function CommandManager() {
		var apply = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (f) {
			return f();
		};

		_classCallCheck(this, CommandManager);

		this.apply = apply;
	}

	_createClass(CommandManager, [{
		key: "invoke",
		value: function invoke(commands) {
			// First we need to get list of executable commands, cause execution of prev command can
			// impact on canExecute of next command
			this.apply(function () {
				return commands.forEach(function (cmd) {
					return cmd.execute();
				});
			});
			return commands.length > 0;
		}
	}, {
		key: "filter",
		value: function filter(commands) {
			return commands.filter(function (cmd) {
				return cmd.canExecute();
			});
		}
	}]);

	return CommandManager;
}();

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cell__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cell; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Cell = function (_Element) {
	_inherits(Cell, _Element);

	function Cell(context, rowIndex, columnIndex) {
		var element = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

		_classCallCheck(this, Cell);

		var _this = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this, element));

		_this.context = context;
		_this.rowIndex = rowIndex;
		_this.columnIndex = columnIndex;
		return _this;
	}

	_createClass(Cell, [{
		key: 'model',
		get: function get() {
			var model = this.context.model(this.getElement());
			return model ? new __WEBPACK_IMPORTED_MODULE_1__cell__["a" /* Cell */](model) : null;
		}
	}]);

	return Cell;
}(__WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */]);

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Column; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Column = function () {
	function Column(box, index) {
		_classCallCheck(this, Column);

		this.box = box;
		this.index = index;
	}

	_createClass(Column, [{
		key: "cells",
		value: function cells() {
			return this.box.columnCellsCore(this.index);
		}
	}, {
		key: "cell",
		value: function cell(rowIndex) {
			return this.box.cell(rowIndex, this.index);
		}
	}, {
		key: "addClass",
		value: function addClass(name) {
			this.cells().forEach(function (cell) {
				return cell.addClass(name);
			});
		}
	}, {
		key: "removeClass",
		value: function removeClass(name) {
			this.cells().forEach(function (cell) {
				return cell.removeClass(name);
			});
		}
	}]);

	return Column;
}();

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unit__ = __webpack_require__(146);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Element; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Element = function (_Unit) {
	_inherits(Element, _Unit);

	function Element(element) {
		_classCallCheck(this, Element);

		var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this));

		_this.element = element;
		return _this;
	}

	_createClass(Element, [{
		key: 'getElementCore',
		value: function getElementCore() {
			return this.element;
		}
	}]);

	return Element;
}(__WEBPACK_IMPORTED_MODULE_0__unit__["a" /* Unit */]);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FakeClassList; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FakeClassList = function () {
	function FakeClassList() {
		_classCallCheck(this, FakeClassList);
	}

	_createClass(FakeClassList, [{
		key: "add",
		value: function add() {}
	}, {
		key: "remove",
		value: function remove() {}
	}]);

	return FakeClassList;
}();

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__row__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Row; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Row = function (_Element) {
	_inherits(Row, _Element);

	function Row(box, index) {
		var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

		_classCallCheck(this, Row);

		var _this = _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this, element));

		_this.box = box;
		_this.index = index;
		return _this;
	}

	_createClass(Row, [{
		key: 'cells',
		value: function cells() {
			return this.box.rowCellsCore(this.index);
		}
	}, {
		key: 'cell',
		value: function cell(columnIndex) {
			return this.box.cellCore(this.index, columnIndex);
		}
	}, {
		key: 'getKeyElementCore',
		value: function getKeyElementCore() {
			var element = _get(Row.prototype.__proto__ || Object.getPrototypeOf(Row.prototype), 'getElement', this).call(this);
			if (element.elements) {
				return element.elements[0];
			}

			return element;
		}
	}, {
		key: 'model',
		get: function get() {
			var model = this.box.context.model(this.getKeyElementCore());
			return model ? new __WEBPACK_IMPORTED_MODULE_1__row__["a" /* Row */](model) : null;
		}
	}]);

	return Row;
}(__WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */]);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fake__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_css__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Unit; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var fakeElement = new __WEBPACK_IMPORTED_MODULE_0__fake__["b" /* FakeElement */]();
var Unit = function () {
	function Unit() {
		_classCallCheck(this, Unit);
	}

	_createClass(Unit, [{
		key: 'rect',
		value: function rect() {
			return this.getElement().getBoundingClientRect();
		}
	}, {
		key: 'addClass',
		value: function addClass(name) {
			this.addClassCore(name);
		}
	}, {
		key: 'removeClass',
		value: function removeClass(name) {
			this.removeClassCore(name);
		}
	}, {
		key: 'hasClass',
		value: function hasClass(name) {
			return this.hasClassCore(name);
		}
	}, {
		key: 'width',
		value: function width() {
			return this.getElement().clientWidth;
		}
	}, {
		key: 'height',
		value: function height() {
			return this.getElement().clientHeight;
		}
	}, {
		key: 'getElement',
		value: function getElement() {
			return this.getElementCore() || fakeElement;
		}
	}, {
		key: 'addClassCore',
		value: function addClassCore(name) {
			this.getElement().classList.add(__WEBPACK_IMPORTED_MODULE_1__services_css__["a" /* escapeAttr */](name));
		}
	}, {
		key: 'removeClassCore',
		value: function removeClassCore(name) {
			this.getElement().classList.remove(__WEBPACK_IMPORTED_MODULE_1__services_css__["a" /* escapeAttr */](name));
		}
	}, {
		key: 'hasClassCore',
		value: function hasClassCore(name) {
			return this.getElement().classList.contains(name);
		}
	}, {
		key: 'getElementCore',
		value: function getElementCore() {
			return null;
		}
	}]);

	return Unit;
}();

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_label__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellEditor; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var CellEditorCore = function () {
	function CellEditorCore() {
		_classCallCheck(this, CellEditorCore);

		this.value = null;
		this.fetch = __WEBPACK_IMPORTED_MODULE_2__utility__["noop"];
		this.resetFetch = __WEBPACK_IMPORTED_MODULE_2__utility__["noop"];
	}

	_createClass(CellEditorCore, [{
		key: 'commit',
		value: function commit() {}
	}, {
		key: 'reset',
		value: function reset() {}
	}, {
		key: 'options',
		get: function get() {
			return {};
		}
	}]);

	return CellEditorCore;
}();

var empty = new CellEditorCore();

var CellEditor = function (_CellEditorCore) {
	_inherits(CellEditor, _CellEditorCore);

	function CellEditor(cell) {
		_classCallCheck(this, CellEditor);

		var _this = _possibleConstructorReturn(this, (CellEditor.__proto__ || Object.getPrototypeOf(CellEditor)).call(this));

		_this.cell = cell;
		_this.fetch = _this.fetchFactory();
		_this.resetFetch = _this.fetch.run(cell.row);

		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utility__["isUndefined"])(cell.value)) {
			_this.value = null;
		} else {
			var parse = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services__["parseFactory"])(cell.column.type);
			var typedValue = parse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utility__["clone"])(cell.value));
			_this.value = typedValue === null ? cell.value : typedValue;
		}

		_this.label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utility__["isUndefined"])(cell.label) ? null : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utility__["clone"])(cell.label);
		return _this;
	}

	_createClass(CellEditor, [{
		key: 'commit',
		value: function commit() {
			this.cell.value = this.value;
			this.cell.label = this.label;
			this.resetFetch();
			this.resetFetch = __WEBPACK_IMPORTED_MODULE_2__utility__["noop"];
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.value = this.cell.value;
			this.resetFetch();
			this.resetFetch = __WEBPACK_IMPORTED_MODULE_2__utility__["noop"];
		}
	}, {
		key: 'getLabel',
		value: function getLabel(item) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services_label__["get"])(item, this.options);
		}
	}, {
		key: 'fetchFactory',
		value: function fetchFactory() {
			var options = this.options;
			if (options && options.fetch) {
				return new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Fetch"](options.fetch);
			}
			return new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Fetch"](this.cell.value);
		}
	}, {
		key: 'title',
		get: function get() {
			return this.cell.column.title;
		}
	}, {
		key: 'column',
		get: function get() {
			return this.cell.column;
		}
	}, {
		key: 'options',
		get: function get() {
			return this.cell.column.editorOptions;
		}
	}, {
		key: 'commandManager',
		get: function get() {
			return this.cell.commandManager;
		}
	}], [{
		key: 'empty',
		get: function get() {
			return empty;
		}
	}]);

	return CellEditor;
}(CellEditorCore);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_cell_view__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_row_view__ = __webpack_require__(415);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditView", function() { return EditView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var EditView = function (_View) {
	_inherits(EditView, _View);

	function EditView(model, table, commandManager) {
		_classCallCheck(this, EditView);

		var _this = _possibleConstructorReturn(this, (EditView.__proto__ || Object.getPrototypeOf(EditView)).call(this, model));

		_this.cell = new __WEBPACK_IMPORTED_MODULE_1__edit_cell_view__["a" /* EditCellView */](model, table, commandManager);
		_this.row = new __WEBPACK_IMPORTED_MODULE_2__edit_row_view__["a" /* EditRowView */](model, table, commandManager);
		return _this;
	}

	_createClass(EditView, [{
		key: 'onDestroy',
		value: function onDestroy() {
			this.cell.destroy();
			this.row.destroy();
		}
	}]);

	return EditView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Visitor; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Visitor = function () {
	function Visitor() {
		_classCallCheck(this, Visitor);
	}

	_createClass(Visitor, [{
		key: 'visit',
		value: function visit(item, depth) {
			switch (item.kind) {
				case 'group':
					return this.visitGroup(item, (depth || 0) + 1);
				case 'condition':
					return this.visitCondition(item, depth || 0);
				case 'function':
					return this.visitFunction(item, depth || 0);
				default:
					throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"])('expression.visitor', 'Invalid kind ' + item.kind);
			}
		}
	}, {
		key: 'visitGroup',
		value: function visitGroup(group, depth) {
			if (group.right) {
				this.visit(group.left, depth);
				this.visit(group.right, depth);
			}

			return this.visit(group.left, depth);
		}
	}, {
		key: 'visitCondition',
		value: function visitCondition(condition, depth) {
			switch (condition.op) {
				case 'isNotNull':
				case 'isNull':
				case 'isNotEmpty':
				case 'isEmpty':
				case 'isNumeric':
				case 'isNotNumeric':
					return this.visitUnary(condition, depth);
				case 'equals':
				case 'notEquals':
				case 'greaterThanOrEquals':
				case 'greaterThan':
				case 'lessThanOrEquals':
				case 'lessThan':
				case 'like':
				case 'notLike':
				case 'startsWith':
				case 'endsWith':
				case 'match':
					return this.visitBinary(condition, depth);
				case 'between':
					return this.visitBetween(condition, depth);
				case 'in':
					return this.visitIn(condition, depth);
				default:
					throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('expression.visitor', 'Invalid operation ' + condition.op);
			}
		}
	}, {
		key: 'visitUnary',
		value: function visitUnary(condition) {
			this.visitLeft(condition.left);
		}
	}, {
		key: 'visitBinary',
		value: function visitBinary(condition /*, depth*/) {
			this.visitLeft(condition.left);
			this.visitRight(condition.right);
		}
	}, {
		key: 'visitLeft',
		value: function visitLeft(left) {
			if (left.kind) {
				switch (left.kind) {
					case 'function':
						this.visitArguments(left.arguments);
				}
			}
		}
	}, {
		key: 'visitBetween',
		value: function visitBetween() /*condition, depth*/{}
	}, {
		key: 'visitIn',
		value: function visitIn() /*condition, depth*/{}
	}, {
		key: 'visitFunction',
		value: function visitFunction() /*fn*/{}
	}, {
		key: 'visitArguments',
		value: function visitArguments(args) {
			var _this = this;

			return args.map(function (arg) {
				switch (arg.kind) {
					case 'condition':
					case 'group':
						_this.visit(arg);
				}
			});
		}
	}]);

	return Visitor;
}();

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterView", function() { return FilterView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var FilterView = function (_View) {
	_inherits(FilterView, _View);

	function FilterView(model) {
		_classCallCheck(this, FilterView);

		return _possibleConstructorReturn(this, (FilterView.__proto__ || Object.getPrototypeOf(FilterView)).call(this, model));
	}

	_createClass(FilterView, [{
		key: 'has',
		value: function has(column) {
			var key = column.key;
			var filterBy = this.model.filter().by;
			return filterBy.hasOwnProperty(key);
		}
	}]);

	return FilterView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_column_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_value__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootView", function() { return FootView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var FootView = function (_View) {
	_inherits(FootView, _View);

	function FootView(model, table) {
		_classCallCheck(this, FootView);

		var _this = _possibleConstructorReturn(this, (FootView.__proto__ || Object.getPrototypeOf(FootView)).call(this, model));

		_this.table = table;
		_this.rows = [];
		_this.columns = [];

		_this.valueFactory = __WEBPACK_IMPORTED_MODULE_4__services_value__["getFactory"];

		_this.using(model.viewChanged.watch(function () {
			return _this.invalidate(model);
		}));
		return _this;
	}

	_createClass(FootView, [{
		key: 'invalidate',
		value: function invalidate(model) {
			__WEBPACK_IMPORTED_MODULE_3__infrastructure__["Log"].info('view.foot', 'invalidate');

			var columns = model.view().columns;
			this.columns = __WEBPACK_IMPORTED_MODULE_1__column_column_service__["lineView"](columns);
			this.rows = new Array(this.count);
		}
	}, {
		key: 'value',
		value: function value(column) {
			if (column.aggregation) {
				var aggregation = column.aggregation;
				var aggregationOptions = column.aggregationOptions;

				if (!__WEBPACK_IMPORTED_MODULE_2__services__["Aggregation"].hasOwnProperty(aggregation)) {
					throw new __WEBPACK_IMPORTED_MODULE_3__infrastructure__["AppError"]('foot', 'Aggregation ' + aggregation + ' is not registered');
				}

				var rows = this.model.data().rows;
				var getValue = this.valueFactory(column);

				return __WEBPACK_IMPORTED_MODULE_2__services__["Aggregation"][aggregation](rows, getValue, aggregationOptions);
			}
			return null;
		}
	}, {
		key: 'count',
		get: function get() {
			var model = this.model;
			var columns = model.data().columns;
			var resourceCount = model.foot().resource.count;

			for (var i = 0, length = columns.length; i < length; i++) {
				if (columns[i].aggregation) {
					return Math.max(resourceCount, 1);
				}
			}

			return resourceCount;
		}
	}]);

	return FootView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_value__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupView", function() { return GroupView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var GroupView = function (_View) {
	_inherits(GroupView, _View);

	function GroupView(model, commandManager) {
		_classCallCheck(this, GroupView);

		var _this = _possibleConstructorReturn(this, (GroupView.__proto__ || Object.getPrototypeOf(GroupView)).call(this, model));

		_this.valueFactory = __WEBPACK_IMPORTED_MODULE_3__services_value__["getFactory"];
		_this.toggleStatus = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
			execute: function execute(node) {
				if (!node) {
					node = model.navigation().cell.row;
				}

				var toggle = model.group().toggle;
				if (toggle.execute(node) !== false) {
					node.state.expand = !node.state.expand;
					var view = model.view;
					var nodes = view().nodes;
					view({ rows: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node__["b" /* flatView */])(nodes) }, { behavior: 'core', source: 'group.view' });
				}
			},
			canExecute: function canExecute(node) {
				if (!node) {
					var cell = model.navigation().cell;
					if (cell && cell.column.type === 'group') {
						node = cell.row;
					}
				}

				var toggle = model.group().toggle;
				return node && node.type === 'group' && toggle.canExecute(node);
			},
			shortcut: model.group().shortcut.toggle
		});

		var shortcut = model.action().shortcut;
		shortcut.register(commandManager, [_this.toggleStatus]);
		return _this;
	}

	_createClass(GroupView, [{
		key: 'count',
		value: function count(node) {
			return node.children.length || node.rows.length;
		}
	}, {
		key: 'status',
		value: function status(node) {
			return node.state.expand ? 'expand' : 'collapse';
		}
	}, {
		key: 'offset',
		value: function offset(node) {
			var groupColumn = (this.model.view().columns[0] || []).find(function (c) {
				return c.model.type === 'group';
			});
			if (groupColumn) {
				return groupColumn.model.offset * node.level;
			}

			return 0;
		}
	}, {
		key: 'value',
		value: function value(node) {
			return node.key;
		}
	}]);

	return GroupView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group_model__ = __webpack_require__(441);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__group_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group_view__ = __webpack_require__(152);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_build__ = __webpack_require__(440);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__group_build__["a"]; });




/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__command__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_column_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__column_type__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utility__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadView", function() { return HeadView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var HeadView = function (_View) {
	_inherits(HeadView, _View);

	function HeadView(model, table, tagName) {
		_classCallCheck(this, HeadView);

		var _this = _possibleConstructorReturn(this, (HeadView.__proto__ || Object.getPrototypeOf(HeadView)).call(this, model));

		_this.table = table;
		_this.tagName = tagName;
		_this.rows = [];

		_this.drop = new __WEBPACK_IMPORTED_MODULE_2__command__["Command"]({
			canExecute: function canExecute(e) {
				if (e.source && e.source.key === tagName) {
					var key = e.target.value;
					var map = __WEBPACK_IMPORTED_MODULE_3__column_column_service__["map"](model.data().columns);
					return map.hasOwnProperty(key) && map[key].canMove;
				}

				return false;
			},
			execute: function execute(e) {
				var view = model.view;
				var columnRows = view().columns;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = columnRows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var columns = _step.value;

						var targetIndex = columns.findIndex(function (c) {
							return c.model.key === e.target.value;
						});
						var sourceIndex = columns.findIndex(function (c) {
							return c.model.key === e.source.value;
						});
						if (targetIndex >= 0 && sourceIndex >= 0) {
							var sourceColumn = columns[sourceIndex].model;
							var targetColumn = columns[targetIndex].model;
							var indexMap = Array.from(model.columnList().index);
							var sourceColumnIndex = indexMap.indexOf(sourceColumn.key);
							var targetColumnIndex = indexMap.indexOf(targetColumn.key);
							indexMap.splice(sourceColumnIndex, 1);
							indexMap.splice(targetColumnIndex, 0, sourceColumn.key);
							model.columnList({ index: indexMap });
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
		});

		_this.drag = new __WEBPACK_IMPORTED_MODULE_2__command__["Command"]({
			canExecute: function canExecute(e) {
				if (e.source.key === tagName) {
					var map = __WEBPACK_IMPORTED_MODULE_3__column_column_service__["map"](model.data().columns);
					return map.hasOwnProperty(e.source.value) && map[e.source.value].canMove !== false;
				}

				return false;
			}
		});

		_this.resize = new __WEBPACK_IMPORTED_MODULE_2__command__["Command"]({
			canExecute: function canExecute(e) {
				if (e.source.key === tagName) {
					var map = table.data.columnMap();
					return map.hasOwnProperty(e.source.value) && map[e.source.value].canResize !== false;
				}

				return false;
			}
		});

		_this.filter = new __WEBPACK_IMPORTED_MODULE_2__command__["Command"]({
			canExecute: function canExecute() {
				return true;
			},
			execute: function execute(e) {
				var key = e.source.sourceKey;
				var filter = _this.model.filter;
				var by = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utility__["clone"])(filter().by);
				var search = e.search;
				if (search.length) {
					by[key] = {
						expression: {
							kind: 'group',
							op: 'and',
							left: {
								kind: 'condition',
								left: key,
								op: 'like',
								right: search
							},
							right: null
						}
					};
				} else {
					delete by[key];
				}

				filter({ by: by });
			}
		});

		_this.using(model.viewChanged.watch(function () {
			return _this.invalidate(model);
		}));

		_this.using(model.filterChanged.watch(function (e) {
			if (e.hasChanges('unit')) {
				_this.invalidate(model);
			}
		}));
		return _this;
	}

	_createClass(HeadView, [{
		key: 'transfer',
		value: function transfer(column) {
			return {
				key: this.tagName,
				value: column.key
			};
		}
	}, {
		key: 'invalidate',
		value: function invalidate(model) {
			__WEBPACK_IMPORTED_MODULE_1__infrastructure__["Log"].info('view.head', 'invalidate');

			this.rows = Array.from(model.view().columns);

			if (model.filter().unit === 'row') {
				var filterRow = this.table.data.columns().map(function (c) {
					return new __WEBPACK_IMPORTED_MODULE_4__column_type__["x" /* FilterRowColumn */](c);
				});
				this.rows.push(filterRow);
			}
		}
	}]);

	return HeadView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sort_sort_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cell__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selection__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__definition__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightView", function() { return HighlightView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var HighlightView = function (_View) {
	_inherits(HighlightView, _View);

	function HighlightView(model, table, timeout) {
		_classCallCheck(this, HighlightView);

		var _this = _possibleConstructorReturn(this, (HighlightView.__proto__ || Object.getPrototypeOf(HighlightView)).call(this, model));

		_this.timeout = timeout;
		_this.table = table;

		_this.cellSelector = new __WEBPACK_IMPORTED_MODULE_4__cell__["b" /* CellSelector */](model, table);
		_this.selectionService = new __WEBPACK_IMPORTED_MODULE_5__selection__["b" /* SelectionService */](model);

		// TODO: get rid of this variable, maybe using table class?
		var waitForLayout = false;

		var sortBlurs = [];
		var columnHoverBlurs = [];
		var rowHoverBlurs = [];
		var selectionBlurs = [];

		_this.column = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
			canExecute: function canExecute() {
				return !model.drag().isActive;
			},
			execute: function execute(column, state) {
				if (!waitForLayout) {
					var columns = Array.from(model.highlight().columns);
					var index = columns.indexOf(column.key);
					var hasChanges = false;
					if (state) {
						if (index < 0) {
							columns.push(column.key);
							hasChanges = true;
						}
					} else {
						if (index >= 0) {
							columns.splice(index, 1);
							hasChanges = true;
						}
					}

					if (hasChanges) {
						model.highlight({
							columns: columns
						}, {
							source: 'highlight.view'
						});
					}
				}
			}
		});

		_this.row = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
			canExecute: function canExecute() {
				return !model.drag().isActive;
			},
			execute: function execute(row, state) {
				if (!waitForLayout) {
					var rows = Array.from(model.highlight().rows);
					var index = rows.indexOf(row);
					var hasChanges = false;
					if (state) {
						if (index < 0) {
							rows.push(row);
							hasChanges = true;
						}
					} else {
						if (index >= 0) {
							rows.splice(index, 1);
							hasChanges = true;
						}
					}

					if (hasChanges) {
						model.highlight({
							rows: rows
						}, {
							source: 'highlight.view'
						});
					}
				}
			}
		});

		_this.using(model.selectionChanged.watch(function (e) {
			if (e.hasChanges('items')) {
				selectionBlurs = _this.invalidateSelection(selectionBlurs);
			}
		}));

		_this.using(model.viewChanged.watch(function () {
			waitForLayout = true;
			_this.timeout(function () {
				columnHoverBlurs = _this.invalidateColumnHover(columnHoverBlurs);
				rowHoverBlurs = _this.invalidateRowHover(rowHoverBlurs);
				sortBlurs = _this.invalidateSortBy(sortBlurs);
				selectionBlurs = _this.invalidateSelection(selectionBlurs);
				waitForLayout = false;
			}, 100);
		}));

		_this.using(model.sortChanged.watch(function (e) {
			if (!waitForLayout && e.hasChanges('by')) {
				sortBlurs = _this.invalidateSortBy(sortBlurs);
			}
		}));

		_this.using(model.highlightChanged.watch(function (e) {
			if (!waitForLayout && e.tag.source !== 'highlight') {
				if (e.hasChanges('columns')) {
					columnHoverBlurs = _this.invalidateColumnHover(columnHoverBlurs);
				}

				if (e.hasChanges('rows')) {
					rowHoverBlurs = _this.invalidateRowHover(rowHoverBlurs);
				}
			}
		}));

		_this.using(model.scrollChanged.watch(function () {
			var highlight = model.highlight;
			if (highlight().rows.length) {
				highlight({
					rows: []
				}, {
					source: 'highlight.view'
				});
			}
		}));
		return _this;
	}

	_createClass(HighlightView, [{
		key: 'invalidateColumnHover',
		value: function invalidateColumnHover(dispose) {
			dispose.forEach(function (f) {
				return f();
			});
			dispose = [];
			var highlightColumns = this.model.highlight().columns;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = highlightColumns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var columnKey = _step.value;

					dispose.push(this.highlightColumn(columnKey, 'highlighted'));
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return dispose;
		}
	}, {
		key: 'invalidateRowHover',
		value: function invalidateRowHover(dispose) {
			dispose.forEach(function (f) {
				return f();
			});
			dispose = [];
			var highlightRows = this.model.highlight().rows;
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = highlightRows[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var rowIndex = _step2.value;

					dispose.push(this.highlightRow(rowIndex, 'highlighted'));
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			return dispose;
		}
	}, {
		key: 'invalidateSortBy',
		value: function invalidateSortBy(dispose) {
			dispose.forEach(function (f) {
				return f();
			});
			dispose = [];

			var sortBy = this.model.sort().by;
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = sortBy[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var entry = _step3.value;

					var key = __WEBPACK_IMPORTED_MODULE_3__sort_sort_service__["a" /* key */](entry);
					dispose.push(this.highlightColumn(key, 'sorted'));
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			return dispose;
		}
	}, {
		key: 'invalidateSelection',
		value: function invalidateSelection(dispose) {
			var _this2 = this;

			dispose.forEach(function (f) {
				return f();
			});

			var selectionItems = this.model.selection().items;
			var entries = this.selectionService.lookup(selectionItems);
			var cells = this.cellSelector.map(entries);
			dispose = cells.map(function (cell) {
				return _this2.highlightCell(cell, 'selected');
			});
			return dispose;
		}
	}, {
		key: 'columnIndex',
		value: function columnIndex(key) {
			var columns = this.table.data.columns();
			var index = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["findIndex"](columns, key);
			if (index >= 0) {
				// TODO: add pivot col support
				var column = columns[index];
				if (!column.canHighlight) {
					return -1;
				}
			}

			return index;
		}
	}, {
		key: 'highlightColumn',
		value: function highlightColumn(key, cls) {
			var table = this.table;
			var index = this.columnIndex(key);
			if (index < 0) {
				return __WEBPACK_IMPORTED_MODULE_6__utility__["noop"];
			}

			var head = table.head;
			head.column(index).addClass(__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"] + '-' + cls);
			head.column(index - 1).addClass(__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"] + '-' + cls + '-prev');
			head.column(index + 1).addClass(__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"] + '-' + cls + '-next');
			table.body.column(index).addClass(__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"] + '-' + cls);
			table.foot.column(index).addClass(__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"] + '-' + cls);

			return this.blurColumn(key, cls);
		}
	}, {
		key: 'blurColumn',
		value: function blurColumn(key, cls) {
			var table = this.table;
			var index = this.columnIndex(key);
			if (index < 0) {
				return __WEBPACK_IMPORTED_MODULE_6__utility__["noop"];
			}

			return function () {
				var head = table.head;
				head.column(index).removeClass(__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"] + '-' + cls);
				head.column(index - 1).removeClass(__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"] + '-' + cls + '-prev');
				head.column(index + 1).removeClass(__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"] + '-' + cls + '-next');
				table.body.column(index).removeClass(__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"] + '-' + cls);
				table.foot.column(index).removeClass(__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"] + '-' + cls);
			};
		}
	}, {
		key: 'highlightRow',
		value: function highlightRow(index, cls) {
			var table = this.table;
			if (index < 0) {
				return __WEBPACK_IMPORTED_MODULE_6__utility__["noop"];
			}

			table.body.row(index).addClass(__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"] + '-' + cls);
			return this.blurRow(index, cls);
		}
	}, {
		key: 'blurRow',
		value: function blurRow(index, cls) {
			var table = this.table;
			if (index < 0) {
				return __WEBPACK_IMPORTED_MODULE_6__utility__["noop"];
			}

			return function () {
				return table.body.row(index).removeClass(__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"] + '-' + cls);
			};
		}
	}, {
		key: 'highlightCell',
		value: function highlightCell(cell, cls) {
			cell.addClass(__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"] + '-' + cls);
			return this.blurCell(cell, cls);
		}
	}, {
		key: 'blurCell',
		value: function blurCell(cell, cls) {
			return function () {
				return cell.removeClass(__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"] + '-' + cls);
			};
		}
	}]);

	return HighlightView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = function () {
	function Event() {
		var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
			return null;
		};

		_classCallCheck(this, Event);

		this.handlers = [];
		this.isDirty = false;
		this.e = e;
	}

	_createClass(Event, [{
		key: 'on',
		value: function on(f) {
			var lifecycle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'app';

			var handlers = this.handlers;
			var handler = { f: f };
			var off = function off() {
				var index = handlers.indexOf(handler);
				if (index >= 0) {
					handlers.splice(index, 1);
				}
			};

			handler.off = off;
			handler.lifecycle = lifecycle;
			handlers.push(handler);
			return off;
		}
	}, {
		key: 'watch',
		value: function watch(f) {
			var lifecycle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'app';

			var off = this.on(f, lifecycle);
			if (this.isDirty) {
				f(this.e(), off);
			}

			return off;
		}
	}, {
		key: 'emit',
		value: function emit(e) {
			this.isDirty = true;
			var temp = Array.from(this.handlers);
			for (var i = 0, length = temp.length; i < length; i++) {
				var handler = temp[i];
				handler.f(e, handler.off);
			}
		}
	}, {
		key: 'dispose',
		value: function dispose() {
			var lifecycle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			var temp = Array.from(this.handlers);
			for (var i = 0, length = temp.length; i < length; i++) {
				var handler = temp[i];
				if (!lifecycle || handler.lifecycle === lifecycle) {
					handler.off();
				}
			}
		}
	}]);

	return Event;
}();

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guard; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Guard = function () {
	function Guard() {
		_classCallCheck(this, Guard);
	}

	_createClass(Guard, null, [{
		key: 'notUndefined',

		/**
   * If value is undefined exception will be thrown
   * @param {any} value - Value to check
   * @param {string} name - Argument name
   */
		value: function notUndefined(value, name) {
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utility__["isUndefined"])(value)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('guard.notUndefined', name);
			}
		}

		/**
   * If value is null or undefined exception will be thrown
   * @param {any} value - Value to check
   * @param {string} name - Argument name
   */

	}, {
		key: 'notNull',
		value: function notNull(value, name) {
			if (value === null || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utility__["isUndefined"])(value)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('guard.notNull', name);
			}
		}

		/**
   * If value is null or undefined or empty exception will be thrown
   * @param {any} value - Value to check
   * @param {string} name - Argument name
   */

	}, {
		key: 'notNullOrEmpty',
		value: function notNullOrEmpty(value, name) {
			if (value === null || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utility__["isUndefined"])(value) || value === '') {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('guard.notNullOrEmpty', name);
			}
		}

		/**
   * If value is not a function exception will be thrown
   * @param {any} value - Value to check
   * @param {string} name - Argument name
   */

	}, {
		key: 'invokable',
		value: function invokable(value, name) {
			if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utility__["isFunction"])(value)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('guard.invokable', name);
			}
		}
	}]);

	return Guard;
}();

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_css__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipe_units__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__infrastructure__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutView", function() { return LayoutView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var LayoutView = function (_View) {
	_inherits(LayoutView, _View);

	function LayoutView(model, table, service) {
		_classCallCheck(this, LayoutView);

		var _this = _possibleConstructorReturn(this, (LayoutView.__proto__ || Object.getPrototypeOf(LayoutView)).call(this, model));

		_this.model = model;
		_this.table = table;
		_this.service = service;

		_this.onInit();
		return _this;
	}

	_createClass(LayoutView, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			var model = this.model;

			model.viewChanged.watch(function (e) {
				if (e.hasChanges('columns')) {
					_this2.invalidateColumns();
				}
			});

			model.layoutChanged.watch(function (e) {
				if (e.hasChanges('columns')) {
					var form = _this2.getForm();
					_this2.invalidateColumns(form);
				}
			});

			model.columnListChanged.watch(function (e) {
				if (e.hasChanges('index') && e.tag.behavior !== 'core') {
					_this2.service.invalidate('column.list', e.tag, __WEBPACK_IMPORTED_MODULE_4__pipe_units__["PipeUnit"].column);
				}
			});
		}
	}, {
		key: 'getForm',
		value: function getForm() {
			var model = this.model;
			var layout = model.layout;
			var state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utility__["clone"])(layout().columns);
			var headRow = this.table.head.row(0);
			if (headRow) {
				var columns = this.table.data.columns();
				var length = columns.length;

				var _loop = function _loop() {
					var column = columns[length];
					if (!state.hasOwnProperty(column.key)) {
						if (column.canResize) {
							var index = columns.findIndex(function (c) {
								return c === column;
							});
							state[column.key] = { width: headRow.cell(index).width() };
						}
					}
				};

				while (length--) {
					_loop();
				}
			}

			return state;
		}
	}, {
		key: 'invalidateColumns',
		value: function invalidateColumns(form) {
			__WEBPACK_IMPORTED_MODULE_5__infrastructure__["Log"].info('layout', 'invalidate columns');

			var model = this.model;
			var getWidth = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["widthFactory"](model, form);
			var columns = this.table.data.columns();
			var style = {};
			var length = columns.length;
			while (length--) {
				var _column = columns[length];
				var width = getWidth(_column);
				if (null !== width) {
					var key = __WEBPACK_IMPORTED_MODULE_1__services_css__["b" /* escape */](_column.key);
					var sizeStyle = {
						'width': width,
						'min-width': width,
						'max-width': width
					};

					style['td.q-grid-' + key] = sizeStyle;
					style['th.q-grid-' + key] = sizeStyle;
				}
			}

			var sheet = __WEBPACK_IMPORTED_MODULE_1__services_css__["c" /* sheet */](this.gridId, 'layout');
			sheet.set(style);
		}
	}, {
		key: 'dispose',
		value: function dispose() {
			_get(LayoutView.prototype.__proto__ || Object.getPrototypeOf(LayoutView.prototype), 'dispose', this).call(this);

			var sheet = __WEBPACK_IMPORTED_MODULE_1__services_css__["c" /* sheet */](this.gridId, 'layout');
			sheet.remove();
		}
	}, {
		key: 'gridId',
		get: function get() {
			return this.model.grid().id;
		}
	}]);

	return LayoutView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__definition__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cell__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationView", function() { return NavigationView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var NavigationView = function (_View) {
	_inherits(NavigationView, _View);

	function NavigationView(model, table, commandManager) {
		_classCallCheck(this, NavigationView);

		var _this = _possibleConstructorReturn(this, (NavigationView.__proto__ || Object.getPrototypeOf(NavigationView)).call(this, model));

		_this.table = table;
		var shortcut = model.action().shortcut;
		var navigation = new __WEBPACK_IMPORTED_MODULE_2__navigation__["a" /* Navigation */](model, table);

		_this.using(shortcut.register(commandManager, navigation.commands));

		_this.blur = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
			execute: function execute(row, column) {
				return table.body.cell(row, column).removeClass(__WEBPACK_IMPORTED_MODULE_3__definition__["GRID_PREFIX"] + '-focus');
			},
			canExecute: function canExecute(row, column, cell) {
				return cell || table.body.cell(row, column).model !== null;
			}
		});

		_this.focus = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
			execute: function execute(row, column) {
				return table.body.cell(row, column).addClass(__WEBPACK_IMPORTED_MODULE_3__definition__["GRID_PREFIX"] + '-focus');
			},
			canExecute: function canExecute(row, column, cell) {
				cell = cell || table.body.cell(row, column).model;
				return cell && cell.column.canFocus;
			}
		});

		_this.focusCell = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
			execute: function execute(cell) {
				return model.navigation({ cell: new __WEBPACK_IMPORTED_MODULE_4__cell__["a" /* Cell */](cell) });
			},
			canExecute: function canExecute(cell) {
				return cell && cell.column.canFocus && !__WEBPACK_IMPORTED_MODULE_4__cell__["a" /* Cell */].equals(cell, model.navigation().cell);
			}
		});

		_this.scrollTo = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
			execute: function execute(row, column) {
				return _this.scroll(table.view, table.body.cell(row, column));
			},
			canExecute: function canExecute(row, column) {
				return table.body.cell(row, column).model !== null;
			}
		});

		_this.using(model.navigationChanged.watch(function (e) {
			if (e.hasChanges('cell')) {
				// We need this one to toggle focus from details to main grid
				// or when user change navigation cell through the model
				if (!_this.table.view.isFocused()) {
					_this.table.view.focus();
				}

				var navState = e.state;
				var newTarget = e.changes.cell.newValue;
				var oldTarget = e.changes.cell.oldValue;
				var newRow = navState.rowIndex;
				var newColumn = navState.columnIndex;
				var oldRow = e.changes.cell.oldValue ? e.changes.cell.oldValue.rowIndex : -1;
				var oldColumn = e.changes.cell.oldValue ? e.changes.cell.oldValue.columnIndex : -1;

				if (_this.blur.canExecute(oldRow, oldColumn, oldTarget)) {
					_this.blur.execute(oldRow, oldColumn);
				}

				if (_this.focus.canExecute(newRow, newColumn, newTarget)) {
					_this.focus.execute(newRow, newColumn);
				}

				if (e.tag.source !== 'navigation.scroll' && _this.scrollTo.canExecute(newRow, newColumn)) {
					_this.scrollTo.execute(newRow, newColumn);
				}

				model.focus({
					rowIndex: newRow,
					columnIndex: newColumn
				}, {
					source: 'navigation.view'
				});
			}
		}));

		_this.using(model.focusChanged.watch(function (e) {
			if (e.tag.source !== 'navigation.view') {
				model.navigation({
					cell: table.body.cell(e.state.rowIndex, e.state.columnIndex).model
				});
			}
		}));

		_this.using(model.viewChanged.watch(function (e) {
			if (e.tag.behavior !== 'core') {
				model.navigation({ cell: null });
			}
		}));
		return _this;
	}

	_createClass(NavigationView, [{
		key: 'scroll',
		value: function scroll(view, target) {
			var tr = target.rect();
			var vr = view.rect();
			var scrollState = this.model.scroll();

			if (view.canScrollTo(target, 'left')) {
				if (vr.left > tr.left || vr.left > tr.right || vr.right < tr.left || vr.right < tr.right) {

					if (vr.width < tr.width || vr.left > tr.left || vr.left > tr.right) {
						view.scrollLeft(tr.left - vr.left + scrollState.left);
					} else if (vr.left < tr.left || vr.right < tr.right) {
						view.scrollLeft(tr.right - vr.right + scrollState.left);
					}
				}
			}

			if (view.canScrollTo(target, 'top')) {
				if (vr.top > tr.top || vr.top > tr.bottom || vr.bottom < tr.top || vr.bottom < tr.bottom) {

					if (vr.height < tr.height || vr.top > tr.top || vr.top > tr.bottom) {
						view.scrollTop(tr.top - vr.top + scrollState.top);
					} else if (vr.top < tr.top || vr.bottom < tr.bottom) {
						view.scrollTop(tr.bottom - vr.bottom + scrollState.top);
					}
				}
			}
		}
	}]);

	return NavigationView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationView", function() { return PaginationView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var PaginationView = function (_View) {
	_inherits(PaginationView, _View);

	function PaginationView(model) {
		_classCallCheck(this, PaginationView);

		var _this = _possibleConstructorReturn(this, (PaginationView.__proto__ || Object.getPrototypeOf(PaginationView)).call(this, model));

		_this.using(model.dataChanged.watch(function (e) {
			if (e.hasChanges('rows') && e.tag.behavior !== 'core') {
				model.pagination({
					current: 0
				});
			}
		}));

		_this.using(model.filterChanged.watch(function (e) {
			if (e.hasChanges('by')) {
				model.pagination({
					current: 0
				});
			}
		}));

		_this.using(model.pivotChanged.watch(function (e) {
			if (e.hasChanges('by')) {
				model.pagination({
					current: 0
				});
			}
		}));

		_this.using(model.groupChanged.watch(function (e) {
			if (e.hasChanges('by')) {
				model.pagination({
					current: 0
				});
			}
		}));
		return _this;
	}

	_createClass(PaginationView, [{
		key: 'current',
		get: function get() {
			return this.model.pagination().current;
		}
	}, {
		key: 'size',
		get: function get() {
			return this.model.pagination().size;
		}
	}]);

	return PaginationView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(57);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Pipe", function() { return __WEBPACK_IMPORTED_MODULE_0__pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_build__ = __webpack_require__(475);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "build", function() { return __WEBPACK_IMPORTED_MODULE_1__pipe_build__["a"]; });



/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return columnPipeUnit; });


var columnPipeUnit = [function (memo, context, next) {
	var view = context.model.view();
	next({
		rows: view.rows,
		pivot: view.pivot,
		nodes: view.nodes
	});
}, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].column, function (memo, context, next) {
	context.model.view({
		columns: memo.columns
	}, {
		source: context.source || 'column.pipe.unit'
	});

	next(memo);
}];

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultPipeUnit; });


var defaultPipeUnit = [__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].data, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].filter, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].sort, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].memo, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].group, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].pivot, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].column, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].pagination, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].view];

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__default_pipe_unit__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_pipe_unit__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_pipe_unit__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeUnit; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var PipeUnit = function () {
	function PipeUnit() {
		_classCallCheck(this, PipeUnit);
	}

	_createClass(PipeUnit, null, [{
		key: 'default',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_0__default_pipe_unit__["a" /* defaultPipeUnit */];
		}
	}, {
		key: 'view',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_1__view_pipe_unit__["a" /* viewPipeUnit */];
		}
	}, {
		key: 'column',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_2__column_pipe_unit__["a" /* columnPipeUnit */];
		}
	}]);

	return PipeUnit;
}();

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return viewPipeUnit; });


var viewPipeUnit = [__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].data, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].memo, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].column, __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].view];

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pivot_build__ = __webpack_require__(479);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pivot_build__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pivot_form__ = __webpack_require__(167);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pivot__ = __webpack_require__(168);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pivot_model__ = __webpack_require__(480);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__pivot_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pivot_view__ = __webpack_require__(169);
/* unused harmony namespace reexport */






/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = pivotForm;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



function injectData(schema, source, target) {
	return Object.keys(source).filter(function (key) {
		return !schema.hasOwnProperty(key);
	}).reduce(function (memo, key) {
		memo[key] = source[key];
		return memo;
	}, target);
}

function expandData(schema, source) {
	var baseline = Object.keys(schema).map(function (key) {
		var node = schema[key];
		return source && source.hasOwnProperty(key) ? expandData(node, source[key]) : expandData(node);
	});

	return baseline.length ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["flatten"])(baseline, true) : [source];
}

function liftSchema(schema) {
	var baseline = [];

	function lift(schema, depth) {
		var derivatives = schema ? Object.keys(schema).map(function (key) {
			var node = schema[key];
			return {
				key: key,
				value: lift(node, depth + 1)
			};
		}) : [];

		if (derivatives.length > 0) if (!baseline[depth]) {
			baseline[depth] = derivatives;
		} else {
			var _baseline$depth;

			(_baseline$depth = baseline[depth]).push.apply(_baseline$depth, _toConsumableArray(derivatives));
		}

		return derivatives.length && derivatives.reduce(function (memo, d) {
			return memo + d.value;
		}, 0) || 1;
	}

	lift(schema, 0);
	return baseline;
}

function sortSchema(schema, comparator) {
	return Object.keys(schema).sort(comparator).reduce(function (memo, key) {
		memo[key] = sortSchema(schema[key], comparator);
		return memo;
	}, {});
}

function pivotForm(source, comparator) {
	if (source.schema && source.data) {
		var schema = sortSchema(source.schema, comparator);
		var rows = source.data.map(function (row) {
			return injectData(schema, row, expandData(schema, row));
		});
		var heads = liftSchema(schema);
		return { heads: heads, rows: rows };
	}

	return { heads: [], rows: [] };
}

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pivot;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plan = function () {
	function Plan(schema) {
		_classCallCheck(this, Plan);

		this.isRoot = !arguments.length;
		this.current = this.schema = schema || {};
	}

	_createClass(Plan, [{
		key: "branch",
		value: function branch() {
			return new Plan(this.current);
		}
	}, {
		key: "cursor",
		value: function cursor(name) {
			var schema = this.schema;
			this.current = schema.hasOwnProperty(name) ? schema[name] : schema[name] = {};
		}
	}, {
		key: "compile",
		value: function compile(data) {
			if (this.isRoot) {
				return {
					schema: this.schema,
					data: data
				};
			} else {
				return data;
			}
		}
	}]);

	return Plan;
}();

function factory(plan) {
	return function (name) {
		plan.cursor(name);
		return function (settings) {
			return pivot(settings, plan.branch());
		};
	};
}

function pivot(settings, plan) {
	plan = plan || new Plan();

	var pivot = factory(plan);
	var aggregate = function aggregate(row) {
		return settings.selector(row).reduce(function (memo, selection) {
			var name = settings.name(selection);
			memo[name] = settings.value(selection, row, pivot(name));
			return memo;
		}, settings.factory(row));
	};

	return function (rows) {
		return plan.compile(plan.isRoot ? rows.map(aggregate) : aggregate(rows));
	};
}

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_value__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PivotView", function() { return PivotView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var PivotView = function (_View) {
	_inherits(PivotView, _View);

	function PivotView(model) {
		_classCallCheck(this, PivotView);

		var _this = _possibleConstructorReturn(this, (PivotView.__proto__ || Object.getPrototypeOf(PivotView)).call(this, model));

		_this.rows = [];
		_this.valueFactory = __WEBPACK_IMPORTED_MODULE_3__services_value__["getFactory"];

		_this.using(model.viewChanged.watch(function () {
			return _this.invalidate(model);
		}));
		return _this;
	}

	_createClass(PivotView, [{
		key: 'invalidate',
		value: function invalidate(model) {
			__WEBPACK_IMPORTED_MODULE_2__infrastructure__["Log"].info('view.pivot', 'invalidate');

			var pivot = model.view().pivot;
			var pivotRows = pivot.rows;
			if (pivotRows.length && model.group().by.length) {
				var build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__group__["a" /* groupBuilder */])(model);
				this.rows = build(this.valueFactory);
			} else {
				this.rows = pivotRows;
			}
		}
	}, {
		key: 'value',
		value: function value(row, column) {
			var rowIndex = this.model.view().rows.indexOf(row);
			return this.rows[rowIndex][column.index];
		}
	}]);

	return PivotView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_model__ = __webpack_require__(481);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PluginModel", function() { return __WEBPACK_IMPORTED_MODULE_0__plugin_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugin_service__ = __webpack_require__(482);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PluginService", function() { return __WEBPACK_IMPORTED_MODULE_1__plugin_service__["a"]; });



/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnumerableResource; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var EnumerableResource = function (_Resource) {
	_inherits(EnumerableResource, _Resource);

	function EnumerableResource() {
		var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

		_classCallCheck(this, EnumerableResource);

		var _this = _possibleConstructorReturn(this, (EnumerableResource.__proto__ || Object.getPrototypeOf(EnumerableResource)).call(this, data, scope));

		_this.count = count;
		return _this;
	}

	return EnumerableResource;
}(__WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]);

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__row_details__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__row_details_status__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_column_factory__ = __webpack_require__(41);
/* harmony export (immutable) */ __webpack_exports__["b"] = flatView;
/* harmony export (immutable) */ __webpack_exports__["c"] = invalidateStatus;
/* harmony export (immutable) */ __webpack_exports__["a"] = toggleStatus;





function flatView(table, mode) {
	var result = [];
	var model = table.model;
	var createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__column_column_factory__["columnFactory"])(model);
	var rows = model.view().rows;
	var status = model.row().status;
	var showAll = mode === 'all';
	rows.forEach(function (row) {
		if (!(row instanceof __WEBPACK_IMPORTED_MODULE_0__row_details__["a" /* RowDetails */])) {
			result.push(row);
			var state = status.get(row) || showAll && new __WEBPACK_IMPORTED_MODULE_1__row_details_status__["a" /* RowDetailsStatus */](true);
			if (state && state instanceof __WEBPACK_IMPORTED_MODULE_1__row_details_status__["a" /* RowDetailsStatus */]) {
				if (state.expand) {
					var column = createColumn('row-details');
					result.push(new __WEBPACK_IMPORTED_MODULE_0__row_details__["a" /* RowDetails */](row, column));
				}
			}
		}
	});

	return result;
}

function invalidateStatus(rows, status) {
	return new Map(Array.from(status.entries()).filter(function (entry) {
		var row = entry[0];
		var status = entry[1];
		return rows.indexOf(row) >= 0 || !(status instanceof __WEBPACK_IMPORTED_MODULE_1__row_details_status__["a" /* RowDetailsStatus */]);
	}));
}

function toggleStatus(rows, status) {
	var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'single';

	switch (mode) {
		case 'all':
			status = new Map(status.entries());
			rows.forEach(function (row) {
				if (!status.has(row)) {
					status.set(row, new __WEBPACK_IMPORTED_MODULE_1__row_details_status__["a" /* RowDetailsStatus */](true));
				}
			});
			break;
		case 'single':
			status = invalidateStatus(rows, status);
			break;
		case 'multiple':
			status = new Map(status.entries());
			break;
		default:
			throw new __WEBPACK_IMPORTED_MODULE_2__infrastructure__["AppError"]('row.details.service', 'Invalid mode ' + mode);
	}

	rows.forEach(function (row) {
		var state = status.get(row);
		if (!state) {
			status.set(row, new __WEBPACK_IMPORTED_MODULE_1__row_details_status__["a" /* RowDetailsStatus */](true));
		} else {
			state.expand = !state.expand;
		}
	});

	return status;
}

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowDetailsStatus; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RowDetailsStatus = function RowDetailsStatus(expand) {
	_classCallCheck(this, RowDetailsStatus);

	this.expand = expand;
};

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__row_details_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__row_details__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowDetailsView", function() { return RowDetailsView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var RowDetailsView = function (_View) {
	_inherits(RowDetailsView, _View);

	function RowDetailsView(model, table, commandManager) {
		_classCallCheck(this, RowDetailsView);

		var _this = _possibleConstructorReturn(this, (RowDetailsView.__proto__ || Object.getPrototypeOf(RowDetailsView)).call(this, model));

		_this.toggleStatus = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
			execute: function execute(row) {
				if (!row) {
					var cell = model.navigation().cell;
					row = cell.row;
				}

				var status = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__row_details_service__["a" /* toggleStatus */])([row], model.row().status, model.row().mode);
				model.row({
					status: status
				}, {
					source: 'row.details.view',
					behavior: 'core'
				});
			},
			canExecute: function canExecute(row) {
				if (!row) {
					var cell = model.navigation().cell;
					if (cell && cell.column.type === 'row-expand') {
						row = cell.row;
					}
				}

				return !!row;
			},
			shortcut: model.row().shortcut.toggle
		});

		_this.using(model.rowChanged.watch(function (e) {
			if (e.hasChanges('status')) {
				model.view({
					rows: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__row_details_service__["b" /* flatView */])(table, e.state.mode)
				}, {
					source: 'row.details.view',
					behavior: 'core'
				});
			}
		}));

		_this.using(model.viewChanged.watch(function (e) {
			if (e.tag.source !== 'row.details.view') {
				model.row({
					status: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__row_details_service__["c" /* invalidateStatus */])(e.state.rows, model.row().status)
				});
			}
		}));

		var shortcut = model.action().shortcut;
		shortcut.register(commandManager, [_this.toggleStatus]);
		return _this;
	}

	_createClass(RowDetailsView, [{
		key: 'status',
		value: function status(row) {
			if (row instanceof __WEBPACK_IMPORTED_MODULE_3__row_details__["a" /* RowDetails */]) {
				return null;
			}

			var status = this.model.row().status;
			var state = status.get(row);
			return state && state.expand ? 'expand' : 'collapse';
		}
	}]);

	return RowDetailsView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return ScrollView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ScrollView = function (_View) {
	_inherits(ScrollView, _View);

	function ScrollView(model, table, vscroll, gridService) {
		_classCallCheck(this, ScrollView);

		var _this = _possibleConstructorReturn(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call(this, model));

		_this.table = table;

		var scroll = model.scroll;
		_this.y = vscroll.factory({
			threshold: model.pagination().size,
			rowHeight: model.row().height
		});

		_this.y.container.drawEvent.on(function (e) {
			scroll({
				cursor: e.position
			}, {
				source: 'scroll.view',
				behavior: 'core'
			});

			var currentPage = Math.floor(e.position / model.pagination().size);
			model.pagination({
				current: currentPage
			}, {
				source: 'scroll.view',
				behavior: 'core'
			});
		});

		switch (scroll().mode) {
			case 'virtual':
				{
					_this.y.settings.fetch = function (skip, take, d) {
						model.fetch({
							skip: skip
						}, {
							source: 'scroll.view',
							behavior: 'core'
						});

						gridService.invalidate('scroll.view').then(function () {
							var total = model.data().rows.length;
							model.pagination({
								count: total
							}, {
								source: 'scroll.view',
								behavior: 'core'
							});

							d.resolve(total);
						});
					};

					break;
				}
			default:
				_this.using(model.paginationChanged.watch(function () {
					_this.y.container.reset();
				}));
		}

		_this.using(model.scrollChanged.watch(function (e) {
			if (e.hasChanges('left') || e.hasChanges('top')) {
				_this.invalidate();
			}
		}));
		return _this;
	}

	_createClass(ScrollView, [{
		key: 'invalidate',
		value: function invalidate() {
			__WEBPACK_IMPORTED_MODULE_1__infrastructure__["Log"].info('layout', 'invalidate scroll');

			var table = this.table;
			var scroll = this.model.scroll();

			table.view.scrollLeft(scroll.left);
			table.view.scrollTop(scroll.top);
		}
	}, {
		key: 'mode',
		get: function get() {
			return this.model.scroll().mode;
		}
	}]);

	return ScrollView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_range__ = __webpack_require__(177);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selection_model__ = __webpack_require__(492);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__selection_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_view__ = __webpack_require__(179);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selection_service__ = __webpack_require__(178);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__selection_service__["a"]; });





/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionRange; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var SelectionRange = function () {
	function SelectionRange(model) {
		_classCallCheck(this, SelectionRange);

		this.model = model;
	}

	_createClass(SelectionRange, [{
		key: 'build',
		value: function build() {
			var rangeMap = {
				'row': this.buildRows.bind(this),
				'column': this.buildColumns.bind(this),
				'cell': this.buildCells.bind(this),
				'mix': this.buildMix.bind(this)
			};

			var model = this.model;
			return function () {
				var selection = model.selection();
				var buildRange = rangeMap[selection.unit];
				if (!buildRange) {
					throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["AppError"]('range.builder', 'Invalid unit ' + selection.unit);
				}

				return buildRange.apply(undefined, arguments);
			};
		}
	}, {
		key: 'buildRows',
		value: function buildRows(startCell, endCell) {
			var model = this.model;
			var rows = model.view().rows;
			if (!endCell) {
				return [rows[startCell.rowIndex]];
			}

			var startIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
			var endIndex = Math.max(startCell.rowIndex, endCell.rowIndex);
			return rows.slice(startIndex, endIndex + 1);
		}
	}, {
		key: 'buildColumns',
		value: function buildColumns(startCell, endCell) {
			var model = this.model;
			var columns = __WEBPACK_IMPORTED_MODULE_0__column_column_service__["lineView"](model.view().columns);
			if (!endCell) {
				return [columns.find(function (c) {
					return c.model === startCell.column;
				}).model];
			}

			var startIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
			var endIndex = Math.max(startCell.columnIndex, endCell.columnIndex);
			return columns.slice(startIndex, endIndex + 1).map(function (column) {
				return column.model;
			});
		}
	}, {
		key: 'buildCells',
		value: function buildCells(startCell, endCell) {
			if (!endCell) {
				return [{
					column: startCell.column,
					row: startCell.row
				}];
			}

			var model = this.model;
			var rows = model.view().rows;
			var columns = __WEBPACK_IMPORTED_MODULE_0__column_column_service__["lineView"](model.view().columns);

			var startRowIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
			var endRowIndex = Math.max(startCell.rowIndex, endCell.rowIndex);

			var startColumnIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
			var endColumnIndex = Math.max(startCell.columnIndex, endCell.columnIndex);

			var selectedRows = rows.slice(startRowIndex, endRowIndex + 1);
			var selectedColumns = columns.slice(startColumnIndex, endColumnIndex + 1);

			var items = [];
			selectedRows.forEach(function (row) {
				selectedColumns.filter(function (column) {
					return column.model.type !== 'row-indicator' && column.model.type !== 'row-options';
				}).forEach(function (column) {
					items.push({
						column: column.model,
						row: row
					});
				});
			});

			return items;
		}
	}, {
		key: 'buildMix',
		value: function buildMix(startCell, endCell) {
			var mixUnit = startCell.column.type === 'row-indicator' ? 'row' : 'cell';
			var range = mixUnit === 'row' ? this.buildRows(startCell, endCell) : this.buildCells(startCell, endCell);
			return range.map(function (item) {
				return {
					item: item,
					unit: mixUnit
				};
			});
		}
	}]);

	return SelectionRange;
}();

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_value__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionService; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





function hashColumnKeyFactory(model) {
	var selectionState = model.selection();
	var selectionKey = selectionState.key;
	if (selectionKey.column === __WEBPACK_IMPORTED_MODULE_0__utility__["identity"]) {
		return function (column) {
			return column.key;
		};
	}

	// TODO: investigate if is it necessary to use JSON.stringify here
	return __WEBPACK_IMPORTED_MODULE_0__utility__["identity"];
}

function hashRowKeyFactory(model) {
	var selectionState = model.selection();
	var selectionKey = selectionState.key;
	if (selectionKey.row === __WEBPACK_IMPORTED_MODULE_0__utility__["identity"]) {
		var columns = model.data().columns;
		var index = columns.findIndex(function (column) {
			return column.type === 'id';
		});
		if (index >= 0) {
			var idColumn = columns[index];
			var getId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_value__["getFactory"])(idColumn);
			return getId;
		} else {
			var rows = model.data().rows;
			return function (row) {
				return rows.indexOf(row);
			};
		}
	}

	// TODO: investigate if is it necessary to use JSON.stringify here
	return __WEBPACK_IMPORTED_MODULE_0__utility__["identity"];
}

function hashKeyFactory(model) {
	var selectionState = model.selection();
	switch (selectionState.unit) {
		case 'row':
			return hashRowKeyFactory(model);
		case 'column':
			return hashColumnKeyFactory(model);
		case 'cell':
			{
				var hashColumnKey = hashColumnKeyFactory(model);
				var hashRowKey = hashRowKeyFactory(model);
				return function (key) {
					return hashColumnKey(key.column) + '[' + hashRowKey(key.row) + ']';
				};
			}
		case 'mix':
			{
				var _hashColumnKey = hashColumnKeyFactory(model);
				var _hashRowKey = hashRowKeyFactory(model);
				return function (key, entry) {
					if (!entry.unit) {
						return key;
					}

					switch (entry.unit) {
						case 'column':
							return _hashColumnKey(key);
						case 'row':
							return _hashRowKey(key);
						case 'cell':
							return _hashColumnKey(key.column) + '[' + _hashRowKey(key.row) + ']';
						default:
							throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["AppError"]('selection.service', 'Invalid unit ' + entry.unit);
					}
				};
			}
		default:
			throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["AppError"]('selection.service', 'Invalid unit ' + selectionState.unit);
	}
}

function cellMatchFactory() {
	return function (x, y) {
		return x.column === y.column && x.row === y.row;
	};
}

function keySelector(unit, selector) {
	switch (unit) {
		case 'row':
			return selector.row;
		case 'column':
			return selector.column;
		case 'cell':
			return function (entry) {
				if (entry.row && entry.column) {
					return {
						row: selector.row(entry.row),
						column: selector.column(entry.column)
					};
				}

				return entry;
			};
		default:
			throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["AppError"]('selection.state', 'Invalid unit ' + unit);
	}
}

function lookupColumnFactory(model, selectKey) {
	var selectionState = model.selection();
	if (selectionState.key.column === __WEBPACK_IMPORTED_MODULE_0__utility__["identity"]) {
		return __WEBPACK_IMPORTED_MODULE_0__utility__["identity"];
	}

	var dataState = model.data();
	var columns = dataState.columns;
	return function (items) {
		var result = [];
		columns.forEach(function (column) {
			var colKey = selectKey(column);
			var found = items.indexOf(colKey) > -1;
			if (found) {
				result.push(column);
			}
		});

		return result;
	};
}

function lookupRowFactory(model, selectKey) {
	var selectionState = model.selection();
	if (selectionState.key.row === __WEBPACK_IMPORTED_MODULE_0__utility__["identity"]) {
		return __WEBPACK_IMPORTED_MODULE_0__utility__["identity"];
	}

	var dataState = model.data();
	var rows = dataState.rows;
	return function (items) {
		var result = [];
		rows.forEach(function (row) {
			var rowKey = selectKey(row);
			var found = items.indexOf(rowKey) > -1;
			if (found) {
				result.push(row);
			}
		});
		return result;
	};
}

function lookupCellFactory(model, selectKey) {
	var selectionState = model.selection();
	if (selectionState.key.row === __WEBPACK_IMPORTED_MODULE_0__utility__["identity"] && selectionState.key.column === __WEBPACK_IMPORTED_MODULE_0__utility__["identity"]) {
		return __WEBPACK_IMPORTED_MODULE_0__utility__["identity"];
	}

	var dataState = model.data();
	var rows = dataState.rows;
	var columns = dataState.columns;
	var match = cellMatchFactory();
	return function (items) {
		var result = [];
		columns.forEach(function (column) {
			rows.forEach(function (row) {
				var cell = {
					column: column,
					row: row
				};

				var index = items.findIndex(function (item) {
					return match(item, selectKey(cell));
				});
				if (index >= 0) {
					result.push(cell);
				}
			});
		});
		return result;
	};
}

var SelectionService = function () {
	function SelectionService(model) {
		_classCallCheck(this, SelectionService);

		this.model = model;
	}

	_createClass(SelectionService, [{
		key: 'lookup',
		value: function lookup(items, unit) {
			var entries = [];
			if (items.length === 0) {
				return entries;
			}

			var model = this.model;
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isUndefined"])(unit)) {
				unit = model.selection().unit;
			}

			switch (unit) {
				case 'column':
					{
						var selectKey = this.keyFactory('column');
						var lookup = lookupColumnFactory(model, selectKey);
						entries = lookup(items);
						break;
					}
				case 'row':
					{
						var _selectKey = this.keyFactory('row');
						var _lookup = lookupRowFactory(model, _selectKey);
						entries = _lookup(items);
						break;
					}
				case 'cell':
					{
						var _selectKey2 = this.keyFactory('cell');
						var _lookup2 = lookupCellFactory(model, _selectKey2);
						entries = _lookup2(items);
						break;
					}
				case 'mix':
					{
						var _entries, _entries2, _entries3;

						var rowKeys = items.filter(function (key) {
							return key.unit === 'row';
						}).map(function (key) {
							return key.item;
						});
						var columnKeys = items.filter(function (key) {
							return key.unit === 'column';
						}).map(function (key) {
							return key.item;
						});
						var cellKeys = items.filter(function (key) {
							return key.unit === 'cell';
						}).map(function (key) {
							return key.item;
						});

						(_entries = entries).push.apply(_entries, _toConsumableArray(this.lookup(rowKeys, 'row').map(function (entry) {
							return { item: entry, unit: 'row' };
						})));
						(_entries2 = entries).push.apply(_entries2, _toConsumableArray(this.lookup(columnKeys, 'column').map(function (entry) {
							return { item: entry, unit: 'column' };
						})));
						(_entries3 = entries).push.apply(_entries3, _toConsumableArray(this.lookup(cellKeys, 'cell').map(function (entry) {
							return { item: entry, unit: 'cell' };
						})));
						break;
					}
				default:
					throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["AppError"]('selection.state', 'Invalid unit ' + unit);
			}

			return entries;
		}
	}, {
		key: 'map',
		value: function map(entries) {
			var selectionState = this.model.selection();
			var selectKey = this.keyFactory();
			switch (selectionState.unit) {
				case 'column':
				case 'row':
				case 'cell':
					return entries.map(selectKey);
				case 'mix':
					return entries.map(function (entry) {
						return {
							unit: entry.unit,
							item: selectKey(entry)
						};
					});
				default:
					throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["AppError"]('selection.state', 'Invalid unit ' + selectionState.unit);
			}
		}
	}, {
		key: 'keyFactory',
		value: function keyFactory(unit) {
			var selectionState = this.model.selection();
			unit = unit || selectionState.unit;
			switch (unit) {
				case 'column':
				case 'row':
				case 'cell':
					return keySelector(unit, selectionState.key);
				case 'mix':
					{
						var cellKey = keySelector('cell', selectionState.key);
						var rowKey = keySelector('row', selectionState.key);
						var columnKey = keySelector('column', selectionState.key);

						return function (entry) {
							if (!entry.unit) {
								return __WEBPACK_IMPORTED_MODULE_0__utility__["identity"];
							}

							switch (entry.unit) {
								case 'column':
									return columnKey(entry.item);
								case 'row':
									return rowKey(entry.item);
								case 'cell':
									return cellKey(entry.item);
								default:
									throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["AppError"]('selection.service', 'Invalid unit ' + entry.unit);
							}
						};
					}
				default:
					throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["AppError"]('selection.service', 'Invalid unit ' + unit);
			}
		}
	}, {
		key: 'hashFactory',
		value: function hashFactory() {
			var selectKey = this.keyFactory();
			var selectHash = hashKeyFactory(this.model);
			return function (entry) {
				var key = selectKey(entry);
				var hashKey = selectHash(key, entry);
				return hashKey;
			};
		}
	}]);

	return SelectionService;
}();

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__command__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selection_range__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selection_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__definition__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selection_command_manager__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__grid_core_pipe_units__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionView", function() { return SelectionView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var SelectionView = function (_View) {
	_inherits(SelectionView, _View);

	function SelectionView(model, table, commandManager, gridService) {
		_classCallCheck(this, SelectionView);

		var _this = _possibleConstructorReturn(this, (SelectionView.__proto__ || Object.getPrototypeOf(SelectionView)).call(this, model));

		_this.table = table;

		_this.selectionService = new __WEBPACK_IMPORTED_MODULE_5__selection_service__["a" /* SelectionService */](model);
		_this.selectionState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__state__["a" /* selectionStateFactory */])(model, _this.selectionService);
		_this.selectionRange = new __WEBPACK_IMPORTED_MODULE_4__selection_range__["a" /* SelectionRange */](model);

		var selectionCommandManager = new __WEBPACK_IMPORTED_MODULE_8__selection_command_manager__["a" /* SelectionCommandManager */](model, commandManager);
		var shortcut = model.action().shortcut;
		var commands = _this.commands;

		_this.using(shortcut.register(selectionCommandManager, commands));
		_this.toggleRow = commands.get('toggleRow');
		_this.toggleColumn = commands.get('toggleColumn');
		_this.toggleCell = commands.get('toggleCell');
		_this.reset = commands.get('reset');

		_this.using(model.navigationChanged.watch(function (e) {
			if (e.tag.source === 'selection.view') {
				return;
			}

			if (e.hasChanges('cell')) {
				if (_this.toggleCell.canExecute(e.state.cell)) {
					_this.toggleCell.execute(e.state.cell);
				}
			}
		}));

		_this.using(model.selectionChanged.watch(function (e) {
			if (e.hasChanges('mode')) {
				var newClassName = __WEBPACK_IMPORTED_MODULE_6__definition__["GRID_PREFIX"] + '-select-' + e.state.mode;
				var view = table.view;
				view.addClass(newClassName);

				if (e.changes.mode.oldValue != e.changes.mode.newValue) {
					var oldClassName = __WEBPACK_IMPORTED_MODULE_6__definition__["GRID_PREFIX"] + '-select-' + e.changes.mode.oldValue;
					view.removeClass(oldClassName);
				}
			}

			if (e.hasChanges('unit') || e.hasChanges('mode')) {
				gridService.invalidate('selection', e.changes, __WEBPACK_IMPORTED_MODULE_9__grid_core_pipe_units__["PipeUnit"].column);

				if (!e.hasChanges('items')) {
					_this.selectionState.clear();
					model.selection({
						items: []
					}, {
						source: 'selection.view'
					});

					_this.selectionState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__state__["a" /* selectionStateFactory */])(model, _this.selectionService);
				}
			}

			if (e.hasChanges('items') && e.tag.source !== 'selection.view') {
				// Don't use commit it came outside already

				var oldEntries = _this.selectionService.lookup(e.changes.items.oldValue);
				_this.select(oldEntries, false);

				var newEntries = _this.selectionService.lookup(e.state.items);
				_this.select(newEntries, true);
			}
		}));
		return _this;
	}

	_createClass(SelectionView, [{
		key: 'selectRange',
		value: function selectRange(startCell, endCell, source) {
			var buildRange = this.selectionRange.build();
			var range = buildRange(startCell, endCell);
			var commit = this.select(range, true, source);
			commit();
		}
	}, {
		key: 'toggle',
		value: function toggle(items) {
			var _this2 = this;

			var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'custom';

			var toggle = this.model.selection().toggle;
			var e = {
				items: items,
				source: source,
				kind: 'toggle'
			};

			if (toggle.canExecute(e)) {
				toggle.execute(e);

				var selectionState = this.selectionState;
				if (!arguments.length || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utility__["isUndefined"])(items)) {
					items = this.model.view().rows;
				}

				selectionState.toggle(items);

				return function () {
					var items = _this2.selectionService.map(selectionState.entries());
					_this2.model.selection({
						items: items
					}, {
						source: 'selection.view'
					});
				};
			} else {
				return __WEBPACK_IMPORTED_MODULE_7__utility__["noop"];
			}
		}
	}, {
		key: 'select',
		value: function select(items, state) {
			var _this3 = this;

			var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'custom';

			var toggle = this.model.selection().toggle;
			var e = {
				items: items,
				state: state,
				source: source,
				kind: 'select'
			};

			if (toggle.canExecute(e)) {
				toggle.execute(e);
				var selectionState = this.selectionState;
				selectionState.select(items, state);

				return function () {
					var items = _this3.selectionService.map(selectionState.entries());
					_this3.model.selection({
						items: items
					}, {
						source: 'selection.view'
					});
				};
			} else {
				return __WEBPACK_IMPORTED_MODULE_7__utility__["noop"];
			}
		}
	}, {
		key: 'state',
		value: function state(item) {
			if (!arguments.length) {
				item = this.rows;
			}

			return this.selectionState.state(item) === true;
		}
	}, {
		key: 'isIndeterminate',
		value: function isIndeterminate(item) {
			if (!arguments.length) {
				item = this.rows;
			}

			return this.selectionState.state(item) === null;
		}
	}, {
		key: 'navigateTo',
		value: function navigateTo(rowIndex, columnIndex) {
			var cellModel = this.table.body.cell(rowIndex, columnIndex).model;
			this.model.navigation({ cell: cellModel }, { source: 'selection.view' });
		}
	}, {
		key: 'commands',
		get: function get() {
			var _this4 = this;

			var model = this.model;
			var shortcut = model.selection().shortcut;
			var commands = {
				toggleCell: new __WEBPACK_IMPORTED_MODULE_2__command__["Command"]({
					canExecute: function canExecute(item) {
						var selectionState = model.selection();
						return item && selectionState.mode !== 'range' && (selectionState.unit === 'cell' || selectionState.unit === 'mix');
					},
					execute: function execute(item, source) {
						var selectionState = model.selection();
						switch (selectionState.unit) {
							case 'cell':
								{
									var commit = _this4.toggle(item, source);
									commit();
									break;
								}
							case 'mix':
								{
									if (item.column.type === 'row-indicator') {
										var _commit = _this4.toggle({ item: item.row, unit: 'row' }, source);
										_commit();
										break;
									} else {
										var _commit2 = _this4.toggle({ item: item, unit: 'cell' }, source);
										_commit2();
										break;
									}
								}
						}
					}
				}),
				toggleRow: new __WEBPACK_IMPORTED_MODULE_2__command__["Command"]({
					execute: function execute(item, source) {
						var commit = _this4.toggle(item, source);
						commit();
					}
				}),
				toggleColumn: new __WEBPACK_IMPORTED_MODULE_2__command__["Command"]({
					execute: function execute(item, source) {
						var commit = _this4.toggle(item, source);
						commit();
					}
				}),
				toggleActiveRow: new __WEBPACK_IMPORTED_MODULE_2__command__["Command"]({
					canExecute: function canExecute() {
						return model.selection().unit === 'row' && _this4.rows.length > 0;
					},
					execute: function execute() {
						var navState = model.navigation();
						var rowIndex = navState.rowIndex;

						var row = void 0;
						if (rowIndex >= 0) {
							row = _this4.rows[rowIndex];
						} else {
							row = _this4.rows[rowIndex + 1];
						}

						var commit = _this4.toggle(row);
						commit();
					},
					shortcut: shortcut.toggleRow
				}),
				togglePrevRow: new __WEBPACK_IMPORTED_MODULE_2__command__["Command"]({
					canExecute: function canExecute() {
						return model.selection().unit === 'row' && model.navigation().rowIndex > 0;
					},
					execute: function execute() {
						var navState = model.navigation();
						var rowIndex = navState.rowIndex;
						var row = _this4.rows[rowIndex];
						var commit = _this4.toggle(row);
						commit();

						_this4.navigateTo(rowIndex - 1, navState.columnIndex);
					},
					shortcut: shortcut.togglePreviousRow
				}),
				toggleNextRow: new __WEBPACK_IMPORTED_MODULE_2__command__["Command"]({
					canExecute: function canExecute() {
						return model.selection().unit === 'row' && model.navigation().rowIndex < _this4.rows.length - 1;
					},
					execute: function execute() {
						var navState = model.navigation();
						var rowIndex = navState.rowIndex;
						var row = _this4.rows[rowIndex];
						var commit = _this4.toggle(row);
						commit();

						_this4.navigateTo(rowIndex + 1, navState.columnIndex);
					},
					shortcut: shortcut.toggleNextRow
				}),
				toggleActiveColumn: new __WEBPACK_IMPORTED_MODULE_2__command__["Command"]({
					canExecute: function canExecute() {
						return model.selection().unit === 'column' && model.navigation().columnIndex >= 0;
					},
					execute: function execute() {
						var columnIndex = model.navigation().columnIndex;
						var column = _this4.columns[columnIndex];
						var commit = _this4.toggle(column);
						commit();
					},
					shortcut: shortcut.toggleColumn
				}),
				toggleNextColumn: new __WEBPACK_IMPORTED_MODULE_2__command__["Command"]({
					canExecute: function canExecute() {
						return model.selection().unit === 'column' && model.navigation().columnIndex < _this4.columns.length - 1;
					},
					execute: function execute() {
						var navState = model.navigation();
						var columnIndex = navState.columnIndex;
						var column = _this4.columns[columnIndex];
						var commit = _this4.toggle(column);
						commit();

						_this4.navigateTo(navState.rowIndex, columnIndex + 1);
					},
					shortcut: shortcut.toggleNextColumn
				}),
				togglePrevColumn: new __WEBPACK_IMPORTED_MODULE_2__command__["Command"]({
					canExecute: function canExecute() {
						return model.selection().unit === 'column' && model.navigation().columnIndex > 0;
					},
					execute: function execute() {
						var navState = model.navigation();
						var columnIndex = navState.columnIndex;
						var column = _this4.columns[columnIndex];
						var commit = _this4.toggle(column);
						commit();

						_this4.navigateTo(navState.rowIndex, columnIndex - 1);
					},
					shortcut: shortcut.togglePreviousColumn
				}),
				selectAll: new __WEBPACK_IMPORTED_MODULE_2__command__["Command"]({
					canExecute: function canExecute() {
						return model.selection().mode === 'multiple';
					},
					execute: function execute() {
						var entries = [];
						switch (model.selection().unit) {
							case 'row':
								{
									entries = model.data().rows;
									break;
								}
							case 'column':
								{
									entries = model.data().columns;
									break;
								}
							case 'cell':
							case 'mix':
								{
									var buildRange = _this4.selectionRange.build();
									var body = _this4.table.body;
									var startCell = body.cell(0, 0);
									var endCell = body.cell(body.rowCount() - 1, body.columnCount() - 1);
									entries = buildRange(startCell, endCell);
									break;
								}
							default:
								throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["AppError"]('selection.view', 'Invalid unit ' + model.selection().unit);
						}

						var commit = _this4.select(entries, true);
						commit();
					},
					shortcut: shortcut.selectAll
				})
			};

			return new Map(Object.entries(commands));
		}
	}, {
		key: 'selection',
		get: function get() {
			return this.model.selection();
		}
	}, {
		key: 'mode',
		get: function get() {
			return this.selection.mode;
		}
	}, {
		key: 'items',
		get: function get() {
			return this.selection.items;
		}
	}, {
		key: 'rows',
		get: function get() {
			return this.table.data.rows();
		}
	}, {
		key: 'columns',
		get: function get() {
			return this.table.data.columns();
		}
	}]);

	return SelectionView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_state__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleSelectionState; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SingleSelectionState = function (_SelectionState) {
	_inherits(SingleSelectionState, _SelectionState);

	function SingleSelectionState(model, service) {
		_classCallCheck(this, SingleSelectionState);

		var _this = _possibleConstructorReturn(this, (SingleSelectionState.__proto__ || Object.getPrototypeOf(SingleSelectionState)).call(this, model, service));

		_this.item = null;
		return _this;
	}

	_createClass(SingleSelectionState, [{
		key: 'entries',
		value: function entries() {
			return this.item ? [this.item] : [];
		}
	}, {
		key: 'selectCore',
		value: function selectCore(item, state) {
			if (state) {
				this.item = item;
			} else {
				this.item = null;
			}
		}
	}, {
		key: 'stateCore',
		value: function stateCore(item, key) {
			return this.item !== null && key(item) === key(this.item);
		}
	}, {
		key: 'clearCore',
		value: function clearCore() {
			this.item = null;
		}
	}]);

	return SingleSelectionState;
}(__WEBPACK_IMPORTED_MODULE_0__selection_state__["a" /* SelectionState */]);

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isImage;
function isImage(name) {
	return !!name && name.toLowerCase().search(/png|jpg|jpeg|svg/) > -1;
}

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compile;
function compile(path) {
	var parts = path.split('.');
	var last = parts.length - 1;
	var accessor = parts.filter(function (part, index) {
		return index !== last;
	}).reduce(function (accessor, part) {
		return accessor ? function (entry) {
			return accessor(entry)[part];
		} : function (entry) {
			return entry[part];
		};
	}, null);

	var key = parts[last];
	if (accessor) {
		return function (entry, value) {
			if (arguments.length === 2) {
				accessor(entry)[key] = value;
			}

			return accessor(entry)[key];
		};
	}

	return function (entry, value) {
		if (arguments.length === 2) {
			entry[key] = value;
		}

		return entry[key];
	};
}

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shortcut__ = __webpack_require__(505);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__shortcut__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shortcut_manager__ = __webpack_require__(506);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__shortcut_manager__["a"]; });



/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__command__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_column_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sort_sort_service__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortView", function() { return SortView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var SortView = function (_View) {
	_inherits(SortView, _View);

	function SortView(model) {
		_classCallCheck(this, SortView);

		var _this = _possibleConstructorReturn(this, (SortView.__proto__ || Object.getPrototypeOf(SortView)).call(this, model));

		_this.hover = false;
		_this.toggle = new __WEBPACK_IMPORTED_MODULE_2__command__["Command"]({
			canExecute: function canExecute(column) {
				var key = column.key;
				var map = __WEBPACK_IMPORTED_MODULE_3__column_column_service__["map"](model.data().columns);
				return map.hasOwnProperty(key) && map[key].canSort !== false;
			},
			execute: function execute(column) {
				var key = column.key;
				var sort = model.sort;
				var sortState = sort();
				var by = Array.from(sortState.by);
				var index = __WEBPACK_IMPORTED_MODULE_4__sort_sort_service__["c" /* index */](by, key);
				if (index >= 0) {
					var dir = __WEBPACK_IMPORTED_MODULE_4__sort_sort_service__["b" /* direction */](by[index]);
					switch (dir) {
						case 'desc':
							{
								by.splice(index, 1);
								_this.hover = false;
								break;
							}
						case 'asc':
							{
								var entry = _defineProperty({}, key, 'desc');
								by.splice(index, 1);
								by.splice(index, 0, entry);
								_this.hover = false;
								break;
							}
						default:
							throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__infrastructure__["AppError"])('head.core', 'Invalid sort direction ' + dir);
					}
				} else {
					if (sortState.mode === 'single') {
						by.length = 0;
					}

					var _entry2 = _defineProperty({}, key, 'asc');
					by.push(_entry2);
				}

				sort({ by: by }, { source: 'sort.view' });
			}
		});

		_this.onInit();
		return _this;
	}

	_createClass(SortView, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			var model = this.model;
			var sort = model.sort;

			this.using(model.columnListChanged.watch(function (e) {
				if (e.hasChanges('index')) {
					var sortState = sort();
					if (sortState.trigger.indexOf('reorder') >= 0) {
						var index = 0;
						var indexMap = model.columnList().index.reduce(function (memo, key) {
							memo[key] = index++;
							return memo;
						}, {});

						var sortBy = Array.from(sortState.by);
						sortBy.sort(function (x, y) {
							return indexMap[__WEBPACK_IMPORTED_MODULE_4__sort_sort_service__["a" /* key */](x)] - indexMap[__WEBPACK_IMPORTED_MODULE_4__sort_sort_service__["a" /* key */](y)];
						});

						if (!_this2.equals(sortBy, sortState.by)) {
							sort({ by: sortBy }, { source: 'sort.view' });
						}
					}
				}
			}));

			this.using(model.dataChanged.watch(function (e) {
				if (e.hasChanges('columns')) {
					var sortState = sort();
					var columnMap = __WEBPACK_IMPORTED_MODULE_3__column_column_service__["map"](e.state.columns);
					var sortBy = sortState.by.filter(function (entry) {
						return columnMap.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_4__sort_sort_service__["a" /* key */](entry));
					});
					if (!_this2.equals(sortBy, sortState.by)) {
						sort({ by: sortBy }, { source: 'sort.view' });
					}
				}
			}));
		}
	}, {
		key: 'equals',
		value: function equals(x, y) {
			return JSON.stringify(x) === JSON.stringify(y);
		}
	}, {
		key: 'direction',
		value: function direction(column) {
			var key = column.key;
			var state = this.model.sort();
			var by = state.by;
			return __WEBPACK_IMPORTED_MODULE_4__sort_sort_service__["d" /* map */](by)[key];
		}
	}, {
		key: 'order',
		value: function order(column) {
			var key = column.key;
			var state = this.model.sort();
			var by = state.by;
			return __WEBPACK_IMPORTED_MODULE_4__sort_sort_service__["c" /* index */](by, key);
		}
	}]);

	return SortView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_monitor__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_value__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_virtual__ = __webpack_require__(512);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleView", function() { return StyleView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var StyleView = function (_View) {
	_inherits(StyleView, _View);

	function StyleView(model, table) {
		_classCallCheck(this, StyleView);

		var _this = _possibleConstructorReturn(this, (StyleView.__proto__ || Object.getPrototypeOf(StyleView)).call(this, model));

		_this.table = table;
		_this.valueFactory = __WEBPACK_IMPORTED_MODULE_3__services_value__["getFactory"];
		_this.active = {
			row: false,
			cell: false
		};

		_this.monitor = {
			row: new __WEBPACK_IMPORTED_MODULE_1__style_monitor__["a" /* Monitor */](model),
			cell: new __WEBPACK_IMPORTED_MODULE_1__style_monitor__["a" /* Monitor */](model)
		};

		_this.using(model.viewChanged.watch(function () {
			_this.invalidate();
		}));

		_this.using(model.styleChanged.watch(function (e) {
			if (e.hasChanges('row')) {
				_this.active.row = e.state.row !== __WEBPACK_IMPORTED_MODULE_4__utility__["noop"];
			}

			if (e.hasChanges('cell')) {
				_this.active.cell = e.state.cell !== __WEBPACK_IMPORTED_MODULE_4__utility__["noop"];
			}

			_this.invalidate();
		}));
		return _this;
	}

	_createClass(StyleView, [{
		key: 'invalidate',
		value: function invalidate() {
			var active = this.active;
			var model = this.model;
			var isVirtual = model.scroll().mode === 'virtual';
			var isActive = isVirtual || active.row || active.cell;
			if (!isActive) {
				return;
			}

			var table = this.table;
			var valueFactory = this.valueFactory;
			var styleState = model.style();
			var bodyRows = table.body.rows();
			var rowMonitor = this.monitor.row;
			var cellMonitor = this.monitor.cell;
			var columns = table.data.columns();
			var columnMap = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["map"](columns);
			// TODO: improve perfomance
			var valueCache = new Map();
			var value = function value(row, column) {
				var getValue = valueCache.get(column);
				if (!getValue) {
					getValue = valueFactory(column);
					valueCache.set(column, getValue);
				}

				return getValue(row);
			};

			var isRowActive = active.row;
			var isCellActive = active.cell;
			var styleRow = styleState.row;
			var styleCell = styleState.cell;
			if (isVirtual) {
				isRowActive = true;
				isCellActive = true;
				styleRow = new __WEBPACK_IMPORTED_MODULE_5__style_virtual__["a" /* VirtualRowStyle */](table).applyFactory();
				styleCell = new __WEBPACK_IMPORTED_MODULE_5__style_virtual__["b" /* VirtualCellStyle */](table).applyFactory();
			}

			var domCell = cellMonitor.enter();
			var domRow = rowMonitor.enter();
			try {
				for (var i = 0, rowsLength = bodyRows.length; i < rowsLength; i++) {
					var bodyRow = bodyRows[i];
					var rowIndex = bodyRow.index;
					var dataRow = (bodyRow.model || {}).model;
					if (!dataRow) {
						continue;
					}

					if (isRowActive) {
						var rowContext = {
							class: domRow(bodyRow),
							row: rowIndex,
							value: value,
							columns: {
								map: columnMap,
								list: columns
							}
						};

						styleRow(dataRow, rowContext);
					}

					if (isCellActive) {
						var cells = bodyRow.cells();
						for (var j = 0, cellsLength = cells.length; j < cellsLength; j++) {
							var cell = cells[j];
							var column = columns[j];
							var cellContext = {
								class: domCell(cell),
								row: rowIndex,
								column: j,
								value: value,
								columns: {
									map: columnMap,
									list: columns
								}
							};

							styleCell(dataRow, column, cellContext);
						}
					}
				}
			} finally {
				rowMonitor.exit(domRow);
				cellMonitor.exit(domCell);
			}
		}
	}]);

	return StyleView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(13))(0)

/***/ }),
/* 228 */,
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(13))(132)

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(13))(141)

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(13))(142)

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(13))(233)

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(13))(241)

/***/ }),
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(13))(65)

/***/ }),
/* 240 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
// App
tslib_1.__exportStar(__webpack_require__(282), exports);


/***/ }),
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(13))(234)

/***/ }),
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var app_service_1 = __webpack_require__(123);
var AppComponent = (function () {
    function AppComponent(appState) {
        this.appState = appState;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [
                __webpack_require__(717),
                __webpack_require__(718)
            ],
            template: "\n    <header>\n    </header>\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n    <footer>\n    </footer>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [app_service_1.AppState])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(30);
var forms_1 = __webpack_require__(230);
var http_1 = __webpack_require__(231);
var core_1 = __webpack_require__(2);
var hmr_1 = __webpack_require__(116);
var router_1 = __webpack_require__(730);
var animations_1 = __webpack_require__(280);
var material_1 = __webpack_require__(232);
var flex_layout_1 = __webpack_require__(276);
/*
 * Platform and Environment providers/directives/pipes
 */
var environment_1 = __webpack_require__(115);
var app_routes_1 = __webpack_require__(284);
// App is our top level component
var app_component_1 = __webpack_require__(281);
var app_resolver_1 = __webpack_require__(283);
var app_service_1 = __webpack_require__(123);
var home_1 = __webpack_require__(124);
var no_content_1 = __webpack_require__(125);
var src_1 = __webpack_require__(129);
var data_service_1 = __webpack_require__(126);
// Application wide providers
var APP_PROVIDERS = app_resolver_1.APP_RESOLVER_PROVIDERS.concat([
    app_service_1.AppState,
    data_service_1.DataService
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        var state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = hmr_1.createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = hmr_1.createInputTransfer();
        // remove styles
        hmr_1.removeNgStyles();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [
                app_component_1.AppComponent,
                home_1.HomeComponent,
                no_content_1.NoContentComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true, preloadingStrategy: router_1.PreloadAllModules }),
                src_1.GridModule,
                animations_1.NoopAnimationsModule,
                material_1.MdButtonModule,
                material_1.MdCheckboxModule,
                material_1.MdCardModule,
                flex_layout_1.FlexLayoutModule
            ],
            providers: [
                environment_1.ENV_PROVIDERS,
                APP_PROVIDERS
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ApplicationRef, app_service_1.AppState])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var Observable_1 = __webpack_require__(227);
__webpack_require__(728);
var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.of({ res: 'I am data' });
    };
    DataResolver = tslib_1.__decorate([
        core_1.Injectable()
    ], DataResolver);
    return DataResolver;
}());
exports.DataResolver = DataResolver;
// an array of services to resolve routes with data
exports.APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var home_1 = __webpack_require__(124);
var no_content_1 = __webpack_require__(125);
exports.ROUTES = [
    { path: '', component: home_1.HomeComponent },
    { path: 'home', component: home_1.HomeComponent },
    { path: '**', component: no_content_1.NoContentComponent },
];


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var data_service_1 = __webpack_require__(126);
var index_ts_1 = __webpack_require__(129);
var fileSaver = __webpack_require__(531);
var xlsx = __webpack_require__(723);
var pdf = __webpack_require__(186);
__webpack_require__(534);
var HomeComponent = (function () {
    function HomeComponent(dataService, gridService) {
        this.dataService = dataService;
        this.gridService = gridService;
        this.rows = [];
        this.gridModel = null;
        this.gridModel = gridService.model();
        var imports = {
            fileSaver: fileSaver,
            xlsx: xlsx,
            pdf: pdf
        };
        this.gridModel
            .pagination({
            size: 40
        })
            .plugin({
            imports: imports
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService
            .getPeople(100)
            .map(function (humans) { return _this.madeIsFeemaleField(humans); })
            .map(function (humans) { return _this.madeEmailSingleField(humans); })
            .subscribe(function (people) {
            _this.rows = people;
        });
    };
    HomeComponent.prototype.madeIsFeemaleField = function (humans) {
        humans.forEach(function (human) {
            human['isFemail'] = human.gender === 'female';
        });
        return humans;
    };
    HomeComponent.prototype.madeEmailSingleField = function (humans) {
        humans.forEach(function (human) {
            var emails = human.contact.email;
            if (emails) {
                human.contact.singleEmail = emails.join(',');
            }
        });
        return humans;
    };
    HomeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'home',
            providers: [],
            template: __webpack_require__(681)
        }),
        tslib_1.__metadata("design:paramtypes", [data_service_1.DataService,
            index_ts_1.GridService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    NoContentComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'no-content',
            template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
        })
    ], NoContentComponent);
    return NoContentComponent;
}());
exports.NoContentComponent = NoContentComponent;


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Angular bootstraping
 */
var platform_browser_dynamic_1 = __webpack_require__(260);
var environment_1 = __webpack_require__(115);
var hmr_1 = __webpack_require__(116);
/*
 * App Module
 * our top level module that holds all of our components
 */
var app_1 = __webpack_require__(241);
/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(app_1.AppModule).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(environment_1.decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
// needed for hmr
// in prod this is replace for document ready
hmr_1.bootloader(main);


/***/ }),
/* 288 */,
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var dnd_1 = __webpack_require__(293);
var focus_1 = __webpack_require__(297);
var resize_1 = __webpack_require__(298);
var CommonModule = (function () {
    function CommonModule() {
    }
    CommonModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [],
            exports: [
                dnd_1.DndModule,
                focus_1.FocusModule,
                resize_1.ResizeModule
            ],
            imports: [],
            providers: []
        })
    ], CommonModule);
    return CommonModule;
}());
exports.CommonModule = CommonModule;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var drag_directive_1 = __webpack_require__(291);
var drop_directive_1 = __webpack_require__(292);
var DndModule = (function () {
    function DndModule() {
    }
    DndModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                drag_directive_1.DragDirective,
                drop_directive_1.DropDirective
            ],
            exports: [
                drag_directive_1.DragDirective,
                drop_directive_1.DropDirective
            ],
            imports: [],
            providers: []
        })
    ], DndModule);
    return DndModule;
}());
exports.DndModule = DndModule;


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var infrastructure_1 = __webpack_require__(3);
var event_listener_1 = __webpack_require__(42);
var drag_service_1 = __webpack_require__(127);
var definition_1 = __webpack_require__(24);
var component_1 = __webpack_require__(10);
var DragDirective = (function () {
    function DragDirective(root, elementRef) {
        this.root = root;
        this.element = elementRef.nativeElement;
        this.listener = new event_listener_1.EventListener(this.element, new infrastructure_1.EventManager(this));
    }
    DragDirective.prototype.ngOnInit = function () {
        this.element.classList.add(definition_1.GRID_PREFIX + "-can-drag");
        this.listener.on('dragstart', this.start);
        this.listener.on('dragend', this.end);
    };
    DragDirective.prototype.ngOnDestroy = function () {
        this.element.classList.remove(definition_1.GRID_PREFIX + "-can-drag");
        this.listener.off();
    };
    DragDirective.prototype.start = function (e) {
        var transfer = e.dataTransfer;
        if (this.canDrag(this.event()) === false) {
            e.preventDefault();
            transfer.effectAllowed = 'none';
            return false;
        }
        var source = this.transfer;
        this.element.classList.add(definition_1.GRID_PREFIX + "-drag");
        transfer.setData(drag_service_1.DragService.mimeType, drag_service_1.DragService.encode(source));
        transfer.effectAllowed = this.effect || 'move';
        drag_service_1.DragService.transfer = source;
        if (this.root) {
            var model = this.root.model;
            model.drag({ isActive: true });
        }
    };
    DragDirective.prototype.end = function () {
        this.element.classList.remove(definition_1.GRID_PREFIX + "-drag");
        drag_service_1.DragService.transfer = null;
        if (this.root) {
            var model = this.root.model;
            model.drag({ isActive: false });
        }
    };
    DragDirective.prototype.event = function () {
        var source = this.transfer;
        return {
            source: source,
            target: null
        };
    };
    tslib_1.__decorate([
        core_1.Input('q-grid-drag'),
        tslib_1.__metadata("design:type", Object)
    ], DragDirective.prototype, "transfer", void 0);
    tslib_1.__decorate([
        core_1.Input('q-grid-drag-effect'),
        tslib_1.__metadata("design:type", Object)
    ], DragDirective.prototype, "effect", void 0);
    tslib_1.__decorate([
        core_1.Input('q-grid-can-drag'),
        tslib_1.__metadata("design:type", Object)
    ], DragDirective.prototype, "canDrag", void 0);
    DragDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-drag]'
        }),
        tslib_1.__param(0, core_1.Optional()),
        tslib_1.__metadata("design:paramtypes", [component_1.RootService, core_1.ElementRef])
    ], DragDirective);
    return DragDirective;
}());
exports.DragDirective = DragDirective;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var infrastructure_1 = __webpack_require__(3);
var event_listener_1 = __webpack_require__(42);
var drag_service_1 = __webpack_require__(127);
var definition_1 = __webpack_require__(24);
var DropDirective = (function () {
    function DropDirective(elementRef) {
        this.onDrop = new core_1.EventEmitter();
        this.element = elementRef.nativeElement;
        this.listener = new event_listener_1.EventListener(this.element, new infrastructure_1.EventManager(this));
    }
    DropDirective.prototype.ngOnInit = function () {
        this.element.classList.add(definition_1.GRID_PREFIX + "-can-drop");
        this.listener.on('dragenter', this.enter);
        this.listener.on('dragover', this.over);
        this.listener.on('dragleave', this.leave);
        this.listener.on('drop', this.drop);
    };
    DropDirective.prototype.ngOnDestroy = function () {
        this.element.classList.remove(definition_1.GRID_PREFIX + "-can-drop");
        this.listener.off();
    };
    DropDirective.prototype.drop = function (e) {
        e.stopPropagation();
        this.element.classList.remove(definition_1.GRID_PREFIX + "-dragover");
        var event = this.event(e.dataTransfer);
        if (this.canDrop(event)) {
            this.onDrop.emit(event);
        }
        return false;
    };
    DropDirective.prototype.enter = function (e) {
        e.preventDefault();
        this.element.classList.add(definition_1.GRID_PREFIX + "-dragover");
        e.dataTransfer.dropEffect = this.effect || 'move';
        return false;
    };
    DropDirective.prototype.over = function (e) {
        e.preventDefault();
        var effect = this.effect || 'move';
        if (this.element.classList.contains(definition_1.GRID_PREFIX + "-drag") ||
            this.canDrop(this.event()) === false) {
            effect = 'none';
        }
        e.dataTransfer.dropEffect = effect;
        return false;
    };
    DropDirective.prototype.leave = function () {
        this.element.classList.remove(definition_1.GRID_PREFIX + "-dragover");
    };
    DropDirective.prototype.event = function (e) {
        var target = this.transfer;
        var source = arguments.length
            ? drag_service_1.DragService.decode(e.getData(drag_service_1.DragService.mimeType))
            : drag_service_1.DragService.transfer;
        return {
            source: source,
            target: target
        };
    };
    tslib_1.__decorate([
        core_1.Input('q-grid-drop'),
        tslib_1.__metadata("design:type", Object)
    ], DropDirective.prototype, "transfer", void 0);
    tslib_1.__decorate([
        core_1.Input('q-grid-drop-effect'),
        tslib_1.__metadata("design:type", Object)
    ], DropDirective.prototype, "effect", void 0);
    tslib_1.__decorate([
        core_1.Input('q-grid-can-drop'),
        tslib_1.__metadata("design:type", Object)
    ], DropDirective.prototype, "canDrop", void 0);
    tslib_1.__decorate([
        core_1.Output('q-grid-on-drop'),
        tslib_1.__metadata("design:type", Object)
    ], DropDirective.prototype, "onDrop", void 0);
    DropDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-drop]'
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
    ], DropDirective);
    return DropDirective;
}());
exports.DropDirective = DropDirective;


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(290), exports);


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var component_1 = __webpack_require__(10);
var AutoFocusDirective = (function () {
    function AutoFocusDirective(root, element) {
        this.root = root;
        this.element = element;
        this.delay = 100;
    }
    AutoFocusDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.model.viewChanged.watch(function (e, off) {
            if (_this.table.body.rowCount()) {
                var key = Object.keys(_this.markup).find(function (p) { return p.startsWith('body'); });
                var element = _this.markup[key];
                if (element) {
                    setTimeout(function () { return _this.element.nativeElement.focus(); }, _this.delay);
                }
                var focusIndex = _this.table.data.columns().findIndex(function (c) { return c.canFocus; });
                _this.model.focus({
                    rowIndex: 0,
                    columnIndex: focusIndex
                });
                off();
            }
        });
    };
    Object.defineProperty(AutoFocusDirective.prototype, "markup", {
        get: function () {
            return this.root.markup;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoFocusDirective.prototype, "model", {
        get: function () {
            return this.root.model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoFocusDirective.prototype, "table", {
        get: function () {
            return this.root.table;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        core_1.Input('q-grid-autofocus'),
        tslib_1.__metadata("design:type", Number)
    ], AutoFocusDirective.prototype, "delay", void 0);
    AutoFocusDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-autofocus]'
        }),
        tslib_1.__metadata("design:paramtypes", [component_1.RootService, core_1.ElementRef])
    ], AutoFocusDirective);
    return AutoFocusDirective;
}());
exports.AutoFocusDirective = AutoFocusDirective;


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var FocusDirective = (function () {
    function FocusDirective(elementRef) {
        this.elementRef = elementRef;
    }
    FocusDirective.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.focus();
    };
    FocusDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-focus]'
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
    ], FocusDirective);
    return FocusDirective;
}());
exports.FocusDirective = FocusDirective;


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var focus_directive_1 = __webpack_require__(295);
var autofocus_directive_1 = __webpack_require__(294);
var FocusModule = (function () {
    function FocusModule() {
    }
    FocusModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                focus_directive_1.FocusDirective,
                autofocus_directive_1.AutoFocusDirective
            ],
            exports: [
                focus_directive_1.FocusDirective,
                autofocus_directive_1.AutoFocusDirective
            ],
            imports: [],
            providers: []
        })
    ], FocusModule);
    return FocusModule;
}());
exports.FocusModule = FocusModule;


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(296), exports);


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(300), exports);


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var Infrastructure = __webpack_require__(3);
var definition_1 = __webpack_require__(24);
var component_1 = __webpack_require__(10);
var utility_1 = __webpack_require__(4);
var platform_browser_1 = __webpack_require__(30);
var ResizeDirective = (function (_super) {
    tslib_1.__extends(ResizeDirective, _super);
    function ResizeDirective(root, elementRef, document) {
        var _this = _super.call(this) || this;
        _this.root = root;
        _this.document = document;
        _this.listener = {
            divider: Infrastructure.EventListener,
            document: Infrastructure.EventListener
        };
        _this.context = {
            x: 0,
            width: 0
        };
        _this.element = elementRef.nativeElement;
        _this.divider = document.createElement('div');
        _this.listener.divider = new Infrastructure.EventListener(_this.divider, new Infrastructure.EventManager(_this));
        _this.listener.document = new Infrastructure.EventListener(document, new Infrastructure.EventManager(_this));
        return _this;
    }
    ResizeDirective.prototype.ngOnInit = function () {
        if (this.canResize(this.event())) {
            this.listener.divider.on('mousedown', this.dragStart);
            this.divider.classList.add(definition_1.GRID_PREFIX + "-divider");
            this.element.appendChild(this.divider);
        }
    };
    ResizeDirective.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.listener.divider.off();
        this.listener.document.off();
    };
    ResizeDirective.prototype.dragStart = function (e) {
        e.preventDefault();
        var context = this.context;
        context.width = this.element.clientWidth;
        context.x = e.screenX;
        this.listener.document.on('mousemove', this.drag);
        this.listener.document.on('mouseup', this.dragEnd);
        var model = this.model;
        model.drag({ isActive: true });
    };
    ResizeDirective.prototype.drag = function (e) {
        var model = this.model;
        var context = this.context;
        var layout = model.layout;
        var state = utility_1.clone(layout()[this.path]);
        state[this.key] = { width: context.width + e.screenX - context.x };
        layout((_a = {}, _a[this.path] = state, _a));
        var _a;
    };
    ResizeDirective.prototype.dragEnd = function () {
        this.listener.document.off();
        var model = this.model;
        model.drag({ isActive: false });
    };
    ResizeDirective.prototype.event = function () {
        var source = this.transfer;
        return {
            source: source,
            target: null
        };
    };
    Object.defineProperty(ResizeDirective.prototype, "model", {
        get: function () {
            return this.root.model;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        core_1.Input('q-grid-resize'),
        tslib_1.__metadata("design:type", Object)
    ], ResizeDirective.prototype, "key", void 0);
    tslib_1.__decorate([
        core_1.Input('q-grid-resize-path'),
        tslib_1.__metadata("design:type", Object)
    ], ResizeDirective.prototype, "path", void 0);
    tslib_1.__decorate([
        core_1.Input('q-grid-can-resize'),
        tslib_1.__metadata("design:type", Object)
    ], ResizeDirective.prototype, "canResize", void 0);
    tslib_1.__decorate([
        core_1.Input('q-grid-drag'),
        tslib_1.__metadata("design:type", Object)
    ], ResizeDirective.prototype, "transfer", void 0);
    ResizeDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-resize]'
        }),
        tslib_1.__param(0, core_1.Optional()), tslib_1.__param(2, core_1.Inject(platform_browser_1.DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [component_1.RootService, core_1.ElementRef, Object])
    ], ResizeDirective);
    return ResizeDirective;
}(component_1.NgComponent));
exports.ResizeDirective = ResizeDirective;


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var resize_directive_1 = __webpack_require__(299);
var ResizeModule = (function () {
    function ResizeModule() {
    }
    ResizeModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                resize_directive_1.ResizeDirective
            ],
            exports: [
                resize_directive_1.ResizeDirective
            ],
            imports: [],
            providers: []
        })
    ], ResizeModule);
    return ResizeModule;
}());
exports.ResizeModule = ResizeModule;


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var main_1 = __webpack_require__(331);
var theme_service_1 = __webpack_require__(138);
var template_1 = __webpack_require__(27);
var template_cache_directive_1 = __webpack_require__(136);
var infrastructure_1 = __webpack_require__(3);
var core_2 = __webpack_require__(448);
var grid_1 = __webpack_require__(50);
var column_1 = __webpack_require__(132);
var GridModule = (function () {
    function GridModule(themeService, theme) {
        core_2.setup(infrastructure_1.Model);
        themeService.name = theme.name;
    }
    GridModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [],
            exports: [
                grid_1.GridComponent,
                column_1.ColumnListComponent,
                column_1.ColumnComponent,
                template_cache_directive_1.TemplateCacheDirective
            ],
            imports: [
                main_1.MainModule,
                template_1.TemplateModule
            ],
            providers: [
                template_1.TemplateLinkService,
                template_1.ThemeService
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [template_1.ThemeService, theme_service_1.ThemeService])
    ], GridModule);
    return GridModule;
}());
exports.GridModule = GridModule;


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var infrastructure_1 = __webpack_require__(3);
var utility_1 = __webpack_require__(4);
var ng_component_1 = __webpack_require__(48);
var RootComponent = (function (_super) {
    tslib_1.__extends(RootComponent, _super);
    function RootComponent() {
        var _this = _super.call(this) || this;
        _this.model = null;
        _this.modelChanged = new infrastructure_1.Event();
        _this.models = [];
        _this.binder = new infrastructure_1.ModelBinder(_this);
        _this.commit = utility_1.noop;
        return _this;
    }
    RootComponent.prototype.ngOnInit = function () {
        this.commit = this.setup();
    };
    RootComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('model')) {
            this.modelChanged.emit(this.model);
            this.commit = this.setup();
            this.commit();
            return;
        }
        this.commit();
    };
    RootComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.binder.bind(null);
    };
    RootComponent.prototype.setup = function () {
        var run = true;
        if (!this.model) {
            this.model = new infrastructure_1.Model();
            this.modelChanged.emit(this.model);
            run = false;
        }
        return this.binder.bind(this.model, this.models, run);
    };
    return RootComponent;
}(ng_component_1.NgComponent));
exports.RootComponent = RootComponent;


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var ng_component_1 = __webpack_require__(48);
var theme_service_1 = __webpack_require__(137);
var definition_1 = __webpack_require__(24);
var infrastructure_1 = __webpack_require__(3);
var root_service_1 = __webpack_require__(49);
var BoxComponent = (function (_super) {
    tslib_1.__extends(BoxComponent, _super);
    function BoxComponent(root, element, theme) {
        var _this = _super.call(this) || this;
        _this.root = root;
        _this.theme = theme;
        _this.boxModel = null;
        _this.element = null;
        _this.element = element.nativeElement;
        return _this;
    }
    BoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initTheme();
        var model = this.model;
        this.using(model.dragChanged.watch(function (e) {
            if (e.hasChanges('isActive')) {
                if (model.drag().isActive) {
                    _this.element.classList.add(definition_1.GRID_PREFIX + "-drag");
                }
                else {
                    _this.element.classList.remove(definition_1.GRID_PREFIX + "-drag");
                }
            }
        }));
    };
    BoxComponent.prototype.initTheme = function () {
        var _this = this;
        var element = this.element;
        element.classList.add(definition_1.GRID_PREFIX);
        this.using(this.theme.changed.watch(function (e) {
            if (e) {
                element.classList.remove(definition_1.GRID_PREFIX + "-theme-" + e.oldValue);
            }
            element.classList.add(definition_1.GRID_PREFIX + "-theme-" + _this.theme.name);
        }));
    };
    Object.defineProperty(BoxComponent.prototype, "model", {
        get: function () {
            var model = this.boxModel || (this.root && this.root.model);
            infrastructure_1.Guard.notNull('model', model);
            return model;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        core_1.Input('model'),
        tslib_1.__metadata("design:type", Object)
    ], BoxComponent.prototype, "boxModel", void 0);
    BoxComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-box',
            template: '<ng-content></ng-content>'
        }),
        tslib_1.__param(0, core_1.Optional()),
        tslib_1.__metadata("design:paramtypes", [root_service_1.RootService, core_1.ElementRef, theme_service_1.ThemeService])
    ], BoxComponent);
    return BoxComponent;
}(ng_component_1.NgComponent));
exports.BoxComponent = BoxComponent;


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(303), exports);


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var model_component_1 = __webpack_require__(130);
var root_service_1 = __webpack_require__(49);
var column_list_service_1 = __webpack_require__(131);
var ColumnListComponent = (function (_super) {
    tslib_1.__extends(ColumnListComponent, _super);
    function ColumnListComponent(root) {
        var _this = _super.call(this, root) || this;
        _this.columnListGeneration = null;
        _this.models = ['columnList'];
        return _this;
    }
    tslib_1.__decorate([
        core_1.Input('generation'),
        tslib_1.__metadata("design:type", String)
    ], ColumnListComponent.prototype, "columnListGeneration", void 0);
    ColumnListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-columns',
            template: '<ng-content></ng-content>',
            providers: [column_list_service_1.ColumnListService]
        }),
        tslib_1.__metadata("design:paramtypes", [root_service_1.RootService])
    ], ColumnListComponent);
    return ColumnListComponent;
}(model_component_1.ModelComponent));
exports.ColumnListComponent = ColumnListComponent;


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var utility_1 = __webpack_require__(4);
var column_list_service_1 = __webpack_require__(131);
var columnService = __webpack_require__(7);
var column_factory_1 = __webpack_require__(41);
var component_1 = __webpack_require__(10);
var template_host_service_1 = __webpack_require__(81);
var ColumnComponent = (function () {
    function ColumnComponent(root, columnList, templateHost) {
        this.root = root;
        this.columnList = columnList;
        this.templateHost = templateHost;
    }
    ColumnComponent.prototype.ngOnInit = function () {
        var _this = this;
        var withKey = !utility_1.isUndefined(this.key);
        if (!withKey) {
            if (!utility_1.isUndefined(this.editor)) {
                this.key = "$default." + this.editor;
            }
            else if (!utility_1.isUndefined(this.type)) {
                this.key = "$default." + this.type;
            }
            else {
                this.key = '$default';
            }
        }
        var model = this.root.model;
        var createColumn = column_factory_1.columnFactory(model);
        var data = model.data;
        var dataState = data();
        var columns = utility_1.clone(dataState.columns);
        var column = columnService.find(columns, this.key);
        if (column) {
            createColumn(this.type || 'text', column);
        }
        else {
            column = createColumn(this.type || 'text').model;
            column.key = this.key;
            columns.source = 'template';
            columns.push(column);
        }
        this.templateHost.key = "cell-" + column.type + "-" + column.key + ".tpl.html";
        this.columnList.copy(column, this);
        // HACK: to understand if need to pass {$row: row} instead of just row in cell.core.js
        if (!utility_1.isUndefined(this.value)) {
            column.$value = utility_1.isUndefined(this.value) ? null : this.value;
        }
        if (!utility_1.isUndefined(this.label)) {
            column.$label = utility_1.isUndefined(this.label) ? null : this.label;
        }
        if (withKey) {
            this.columnList.add(column);
        }
        else {
            var settings = Object.keys(this)
                .filter(function (key) { return !utility_1.isUndefined(_this[key]) && column.hasOwnProperty(key); })
                .reduce(function (memo, key) {
                memo[key] = column[key];
                return memo;
            }, {});
            this.columnList.register(settings);
        }
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ColumnComponent.prototype, "type", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ColumnComponent.prototype, "key", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ColumnComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ColumnComponent.prototype, "value", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ColumnComponent.prototype, "pin", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ColumnComponent.prototype, "editor", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ColumnComponent.prototype, "editorOptions", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], ColumnComponent.prototype, "width", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], ColumnComponent.prototype, "minWidth", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], ColumnComponent.prototype, "maxWidth", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ColumnComponent.prototype, "canEdit", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ColumnComponent.prototype, "canResize", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ColumnComponent.prototype, "canSort", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ColumnComponent.prototype, "canMove", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ColumnComponent.prototype, "canFilter", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ColumnComponent.prototype, "canHighlight", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ColumnComponent.prototype, "canFocus", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ColumnComponent.prototype, "isVisible", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], ColumnComponent.prototype, "index", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ColumnComponent.prototype, "label", void 0);
    ColumnComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-column',
            template: '<ng-content></ng-content>',
            providers: [template_host_service_1.TemplateHostService]
        }),
        tslib_1.__metadata("design:paramtypes", [component_1.RootService,
            column_list_service_1.ColumnListService,
            template_host_service_1.TemplateHostService])
    ], ColumnComponent);
    return ColumnComponent;
}());
exports.ColumnComponent = ColumnComponent;


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var event_listener_1 = __webpack_require__(42);
var event_manager_1 = __webpack_require__(87);
var view_core_service_1 = __webpack_require__(26);
var component_1 = __webpack_require__(10);
var path_1 = __webpack_require__(467);
var table_core_service_1 = __webpack_require__(79);
var BodyCoreComponent = (function (_super) {
    tslib_1.__extends(BodyCoreComponent, _super);
    function BodyCoreComponent(element, $view, root, $table) {
        var _this = _super.call(this) || this;
        _this.$view = $view;
        _this.root = root;
        _this.$table = $table;
        _this.element = null;
        _this.rangeStartCell = null;
        _this.scrollContext = {
            top: 0,
            left: 0
        };
        _this.element = element.nativeElement;
        _this.scrollContext = {
            top: _this.element.scrollTop,
            left: _this.element.scrollLeft
        };
        return _this;
    }
    BodyCoreComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        var listener = new event_listener_1.EventListener(this.element, new event_manager_1.EventManager(this, this.root.applyFactory(null, 'sync')));
        this.using(listener.on('scroll', this.onScroll));
        this.using(listener.on('click', this.onClick));
        this.using(listener.on('mousedown', this.onMouseDown));
        this.using(listener.on('mouseup', this.onMouseUp));
        this.using(listener.on('mousemove', this.onMouseMove));
        this.using(listener.on('mouseleave', this.onMouseLeave));
    };
    BodyCoreComponent.prototype.onScroll = function () {
        var element = this.element;
        var scroll = this.model.scroll;
        var oldValue = this.scrollContext;
        var newValue = {};
        if (oldValue.top !== element.scrollTop) {
            oldValue.top = newValue.top = element.scrollTop;
        }
        if (oldValue.left !== element.scrollLeft) {
            oldValue.left = newValue.left = element.scrollLeft;
        }
        if (Object.keys(newValue)) {
            scroll(newValue, { source: 'body.core' });
        }
    };
    BodyCoreComponent.prototype.onClick = function (e) {
        var pathFinder = new path_1.PathService(this.root.bag);
        var cell = pathFinder.cell(e.path);
        if (cell) {
            this.navigate(cell);
            if (cell.column.editorOptions.trigger === 'click' && this.$view.edit.cell.enter.canExecute(cell)) {
                this.$view.edit.cell.enter.execute(cell);
            }
        }
    };
    BodyCoreComponent.prototype.onMouseDown = function (e) {
        var selectionState = this.selection;
        if (selectionState.area !== 'body') {
            return;
        }
        if (selectionState.mode === 'range') {
            var pathFinder = new path_1.PathService(this.root.bag);
            this.rangeStartCell = pathFinder.cell(e.path);
            if (this.rangeStartCell) {
                this.$view.selection.selectRange(this.rangeStartCell, null, 'body');
            }
            return;
        }
        switch (selectionState.unit) {
            case 'row': {
                var pathFinder = new path_1.PathService(this.root.bag);
                var cell = pathFinder.cell(e.path);
                if (cell && cell.column.type !== 'select') {
                    this.$view.selection.toggleRow.execute(cell.row, 'body');
                }
                break;
            }
            case 'column': {
                var pathFinder = new path_1.PathService(this.root.bag);
                var cell = pathFinder.cell(e.path);
                if (cell) {
                    this.$view.selection.toggleColumn.execute(cell.column, 'body');
                }
                break;
            }
            case 'mix': {
                var pathFinder = new path_1.PathService(this.root.bag);
                var cell = pathFinder.cell(e.path);
                if (cell && cell.column.type === 'row-indicator') {
                    this.$view.selection.toggleCell.execute(cell, 'body');
                }
            }
        }
    };
    BodyCoreComponent.prototype.onMouseMove = function (e) {
        var pathFinder = new path_1.PathService(this.root.bag);
        var row = pathFinder.row(e.path);
        if (row) {
            var index_1 = row.index;
            var highlightRow_1 = this.$view.highlight.row;
            if (highlightRow_1.canExecute(index_1)) {
                this.model
                    .highlight()
                    .rows
                    .filter(function (i) { return i !== index_1; })
                    .forEach(function (i) { return highlightRow_1.execute(i, false); });
                highlightRow_1.execute(index_1, true);
            }
        }
        if (this.selection.mode === 'range') {
            var startCell = this.rangeStartCell;
            var endCell = pathFinder.cell(e.path);
            if (startCell && endCell) {
                this.$view.selection.selectRange(startCell, endCell, 'body');
                this.navigate(endCell);
            }
        }
    };
    BodyCoreComponent.prototype.onMouseLeave = function () {
        var highlightRow = this.$view.highlight.row;
        this.model
            .highlight()
            .rows
            .forEach(function (i) { return highlightRow.execute(i, false); });
    };
    BodyCoreComponent.prototype.onMouseUp = function () {
        if (this.selection.mode === 'range') {
            this.rangeStartCell = null;
        }
    };
    BodyCoreComponent.prototype.navigate = function (cell) {
        var focus = this.$view.nav.focusCell;
        if (focus.canExecute(cell)) {
            focus.execute(cell);
        }
    };
    Object.defineProperty(BodyCoreComponent.prototype, "selection", {
        get: function () {
            return this.model.selection();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BodyCoreComponent.prototype, "model", {
        get: function () {
            return this.root.model;
        },
        enumerable: true,
        configurable: true
    });
    BodyCoreComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'tbody[q-grid-core-body]',
            template: __webpack_require__(682)
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef,
            view_core_service_1.ViewCoreService,
            component_1.RootService,
            table_core_service_1.TableCoreService])
    ], BodyCoreComponent);
    return BodyCoreComponent;
}(component_1.NgComponent));
exports.BodyCoreComponent = BodyCoreComponent;


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(307), exports);
tslib_1.__exportStar(__webpack_require__(309), exports);


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var definition_1 = __webpack_require__(24);
var view_core_service_1 = __webpack_require__(26);
var table_core_service_1 = __webpack_require__(79);
var component_1 = __webpack_require__(10);
var cell_1 = __webpack_require__(133);
var _1 = __webpack_require__(3);
var TdCoreDirective = (function () {
    function TdCoreDirective($view, root, viewContainerRef, cellService, table, element) {
        this.$view = $view;
        this.root = root;
        this.viewContainerRef = viewContainerRef;
        this.cellService = cellService;
        this.table = table;
        this.element = null;
        this.$implicit = this;
        this.element = element.nativeElement.parentNode;
    }
    TdCoreDirective.prototype.ngOnInit = function () {
        var column = this.column;
        var element = this.element;
        this.root.bag.set(element, this);
        element.classList.add(definition_1.GRID_PREFIX + "-" + column.key);
        element.classList.add(definition_1.GRID_PREFIX + "-" + column.type);
        if (column.editor) {
            element.classList.add(definition_1.GRID_PREFIX + "-" + column.editor);
        }
        this.mode('init');
    };
    TdCoreDirective.prototype.mode = function (value) {
        switch (value) {
            case 'view':
            case 'init': {
                var link = this.cellService.build('body', this.column, 'view');
                link(this.viewContainerRef, this);
                if (value !== 'init') {
                    this.element.classList.remove(definition_1.GRID_PREFIX + "-edit");
                }
                break;
            }
            case 'edit':
                {
                    var link = this.cellService.build('body', this.column, 'edit');
                    link(this.viewContainerRef, this);
                    this.element.classList.add(definition_1.GRID_PREFIX + "-edit");
                }
                break;
            default:
                throw new _1.AppError('td.core', "Invalid mode " + value);
        }
    };
    Object.defineProperty(TdCoreDirective.prototype, "value", {
        get: function () {
            var column = this.column;
            var row = this.row;
            return this.$view.body.value(row, column);
        },
        set: function (value) {
            var column = this.column;
            var row = this.row;
            this.$view.body.value(row, column, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdCoreDirective.prototype, "label", {
        get: function () {
            var column = this.column;
            var row = this.row;
            return this.$view.body.label(row, column);
        },
        set: function (label) {
            var column = this.column;
            var row = this.row;
            this.$view.body.label(row, column, label);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdCoreDirective.prototype, "column", {
        get: function () {
            var columns = this.$view.body.columns(this.row, this.table.pin);
            var columnView = columns[this.columnIndex];
            return columnView.model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdCoreDirective.prototype, "row", {
        get: function () {
            return this.$view.body.rows[this.rowIndex];
        },
        enumerable: true,
        configurable: true
    });
    TdCoreDirective.prototype.ngOnDestroy = function () {
        var element = this.element;
        this.root.bag.delete(element);
    };
    tslib_1.__decorate([
        core_1.Input('q-grid-core-row-index'),
        tslib_1.__metadata("design:type", Number)
    ], TdCoreDirective.prototype, "rowIndex", void 0);
    tslib_1.__decorate([
        core_1.Input('q-grid-core-column-index'),
        tslib_1.__metadata("design:type", Number)
    ], TdCoreDirective.prototype, "columnIndex", void 0);
    TdCoreDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-core-td]',
        }),
        tslib_1.__metadata("design:paramtypes", [view_core_service_1.ViewCoreService,
            component_1.RootService,
            core_1.ViewContainerRef,
            cell_1.CellService,
            table_core_service_1.TableCoreService,
            core_1.ElementRef])
    ], TdCoreDirective);
    return TdCoreDirective;
}());
exports.TdCoreDirective = TdCoreDirective;


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var template_1 = __webpack_require__(27);
var infrastructure_1 = __webpack_require__(3);
var utility_1 = __webpack_require__(4);
// import {templateJitUrl} from '@angular/compiler';
function canBuild(column) {
    return column.type !== 'pad';
}
function buildKeys(source, column, mode) {
    if (mode === void 0) { mode = 'view'; }
    var key = column.key;
    switch (mode) {
        case 'view': {
            var type = column.type;
            return [
                source + "-cell-" + type + "-" + key + ".tpl.html",
                source + "-cell-" + type + ".tpl.html",
                source + "-cell-text.tpl.html"
            ];
        }
        case 'edit': {
            var type = column.editor || column.type;
            return [
                mode + "-cell-" + type + "-" + key + ".tpl.html",
                mode + "-cell-" + type + ".tpl.html",
                mode + "-cell-text.tpl.html"
            ];
        }
        default:
            throw new infrastructure_1.AppError('cell.service', "Invalid mode \"" + mode + "\"");
    }
}
var CellService = (function () {
    function CellService(templateCache, templateLink) {
        this.templateCache = templateCache;
        this.templateLink = templateLink;
    }
    CellService.prototype.build = function (source, column, mode) {
        if (mode === void 0) { mode = 'view'; }
        if (!canBuild(column)) {
            return utility_1.noop;
        }
        var keys = buildKeys(source, column, mode);
        var template = this.findTemplate(keys);
        if (!template) {
            throw new infrastructure_1.AppError('cell.service', "Can't find template for " + keys[0]);
        }
        return function (viewContainerRef, context) {
            viewContainerRef.clear();
            viewContainerRef.createEmbeddedView(template, context);
        };
    };
    CellService.prototype.findTemplate = function (keys) {
        var templateCache = this.templateCache;
        var templateLink = this.templateLink;
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            var template = templateCache.get(key) || templateLink.get(key);
            if (template) {
                return template;
            }
        }
        return null;
    };
    CellService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [template_1.TemplateCacheService,
            template_1.TemplateLinkService])
    ], CellService);
    return CellService;
}());
exports.CellService = CellService;


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(30);
var view_1 = __webpack_require__(328);
var toolbar_1 = __webpack_require__(326);
var body_1 = __webpack_require__(308);
var head_1 = __webpack_require__(316);
var foot_1 = __webpack_require__(313);
var row_1 = __webpack_require__(321);
var scroll_1 = __webpack_require__(134);
var markup_1 = __webpack_require__(319);
var template_1 = __webpack_require__(27);
var template_module_1 = __webpack_require__(52);
var common_1 = __webpack_require__(128);
var table_1 = __webpack_require__(324);
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                view_1.ViewCoreComponent,
                table_1.TableCoreComponent,
                head_1.HeadCoreComponent,
                body_1.BodyCoreComponent,
                foot_1.FootCoreComponent,
                toolbar_1.ToolbarCoreComponent,
                row_1.TrCoreDirective,
                head_1.ThCoreDirective,
                body_1.TdCoreDirective,
                foot_1.TfCoreDirective,
                markup_1.MarkupDirective
            ],
            exports: [
                view_1.ViewCoreComponent,
                toolbar_1.ToolbarCoreComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                template_module_1.TemplateModule,
                common_1.CommonModule
            ],
            providers: [
                scroll_1.VScrollService,
                template_1.TemplateCacheService
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var view_core_service_1 = __webpack_require__(26);
var FootCoreComponent = (function () {
    function FootCoreComponent($view) {
        this.$view = $view;
    }
    FootCoreComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'tfoot[q-grid-core-foot]',
            template: __webpack_require__(683)
        }),
        tslib_1.__metadata("design:paramtypes", [view_core_service_1.ViewCoreService])
    ], FootCoreComponent);
    return FootCoreComponent;
}());
exports.FootCoreComponent = FootCoreComponent;


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(312), exports);
tslib_1.__exportStar(__webpack_require__(314), exports);


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var definition_1 = __webpack_require__(24);
var view_core_service_1 = __webpack_require__(26);
var template_1 = __webpack_require__(27);
var component_1 = __webpack_require__(10);
var TfCoreDirective = (function () {
    function TfCoreDirective($view, root, templateCache, templateLink, viewContainerRef, element) {
        this.$view = $view;
        this.root = root;
        this.templateCache = templateCache;
        this.templateLink = templateLink;
        this.viewContainerRef = viewContainerRef;
        this.element = null;
        this.$implicit = this;
        this.element = element.nativeElement.parentNode;
    }
    TfCoreDirective.prototype.ngOnInit = function () {
        var column = this.column;
        var element = this.element;
        this.root.bag.set(element, this);
        element.classList.add(definition_1.GRID_PREFIX + "-" + column.key);
        element.classList.add(definition_1.GRID_PREFIX + "-" + column.type);
        if (column.editor) {
            element.classList.add(definition_1.GRID_PREFIX + "-" + column.editor);
        }
        var template = this.templateCache.get('foot-cell-text.tpl.html') ||
            this.templateLink.get('foot-cell-text.tpl.html');
        this.viewContainerRef.createEmbeddedView(template, this);
    };
    Object.defineProperty(TfCoreDirective.prototype, "value", {
        get: function () {
            var column = this.column;
            return this.$view.foot.value(column);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TfCoreDirective.prototype, "column", {
        get: function () {
            return this.row[this.columnIndex].model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TfCoreDirective.prototype, "row", {
        get: function () {
            return this.$view.foot.rows[this.rowIndex];
        },
        enumerable: true,
        configurable: true
    });
    TfCoreDirective.prototype.ngOnDestroy = function () {
        var element = this.element;
        this.root.bag.set(element, this);
    };
    tslib_1.__decorate([
        core_1.Input('q-grid-core-row-index'),
        tslib_1.__metadata("design:type", Number)
    ], TfCoreDirective.prototype, "rowIndex", void 0);
    tslib_1.__decorate([
        core_1.Input('q-grid-core-column-index'),
        tslib_1.__metadata("design:type", Number)
    ], TfCoreDirective.prototype, "columnIndex", void 0);
    TfCoreDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-core-tf]'
        }),
        tslib_1.__metadata("design:paramtypes", [view_core_service_1.ViewCoreService,
            component_1.RootService,
            template_1.TemplateCacheService,
            template_1.TemplateLinkService,
            core_1.ViewContainerRef,
            core_1.ElementRef])
    ], TfCoreDirective);
    return TfCoreDirective;
}());
exports.TfCoreDirective = TfCoreDirective;


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var view_core_service_1 = __webpack_require__(26);
var HeadCoreComponent = (function () {
    function HeadCoreComponent($view) {
        this.$view = $view;
    }
    HeadCoreComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'thead[q-grid-core-head]',
            template: __webpack_require__(684)
        }),
        tslib_1.__metadata("design:paramtypes", [view_core_service_1.ViewCoreService])
    ], HeadCoreComponent);
    return HeadCoreComponent;
}());
exports.HeadCoreComponent = HeadCoreComponent;


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(315), exports);
tslib_1.__exportStar(__webpack_require__(317), exports);


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var definition_1 = __webpack_require__(24);
var view_core_service_1 = __webpack_require__(26);
var template_1 = __webpack_require__(27);
var component_1 = __webpack_require__(10);
var ThCoreDirective = (function () {
    function ThCoreDirective($view, root, templateCache, templateLink, viewContainerRef, element) {
        this.$view = $view;
        this.root = root;
        this.templateCache = templateCache;
        this.templateLink = templateLink;
        this.viewContainerRef = viewContainerRef;
        this.element = null;
        this.$implicit = this;
        this.element = element.nativeElement.parentNode;
    }
    ThCoreDirective.prototype.ngOnInit = function () {
        var column = this.column;
        var element = this.element;
        this.root.bag.set(element, this);
        element.classList.add(definition_1.GRID_PREFIX + "-" + column.key);
        element.classList.add(definition_1.GRID_PREFIX + "-" + column.type);
        if (column.editor) {
            element.classList.add(definition_1.GRID_PREFIX + "-" + column.editor);
        }
        var template = this.templateCache.get('head-cell-text.tpl.html') ||
            this.templateLink.get('head-cell-text.tpl.html');
        this.viewContainerRef.createEmbeddedView(template, this);
    };
    Object.defineProperty(ThCoreDirective.prototype, "column", {
        get: function () {
            return this.row[this.columnIndex].model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThCoreDirective.prototype, "row", {
        get: function () {
            return this.$view.head.rows[this.rowIndex];
        },
        enumerable: true,
        configurable: true
    });
    ThCoreDirective.prototype.ngOnDestroy = function () {
        var element = this.element;
        this.root.bag.delete(element);
    };
    tslib_1.__decorate([
        core_1.Input('q-grid-core-row-index'),
        tslib_1.__metadata("design:type", Number)
    ], ThCoreDirective.prototype, "rowIndex", void 0);
    tslib_1.__decorate([
        core_1.Input('q-grid-core-column-index'),
        tslib_1.__metadata("design:type", Number)
    ], ThCoreDirective.prototype, "columnIndex", void 0);
    ThCoreDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-core-th]'
        }),
        tslib_1.__metadata("design:paramtypes", [view_core_service_1.ViewCoreService,
            component_1.RootService,
            template_1.TemplateCacheService,
            template_1.TemplateLinkService,
            core_1.ViewContainerRef,
            core_1.ElementRef])
    ], ThCoreDirective);
    return ThCoreDirective;
}());
exports.ThCoreDirective = ThCoreDirective;


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(311), exports);


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(320), exports);


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var component_1 = __webpack_require__(10);
var MarkupDirective = (function () {
    function MarkupDirective(root, element) {
        this.root = root;
        this.element = element;
        this.name = '';
    }
    MarkupDirective.prototype.ngOnInit = function () {
        this.root.markup[this.name] = this.element.nativeElement;
    };
    MarkupDirective.prototype.ngOnDestroy = function () {
        delete this.root.markup[this.name];
    };
    tslib_1.__decorate([
        core_1.Input('q-grid-markup'),
        tslib_1.__metadata("design:type", Object)
    ], MarkupDirective.prototype, "name", void 0);
    MarkupDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-markup]'
        }),
        tslib_1.__metadata("design:paramtypes", [component_1.RootService, core_1.ElementRef])
    ], MarkupDirective);
    return MarkupDirective;
}());
exports.MarkupDirective = MarkupDirective;


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(322), exports);


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var view_core_service_1 = __webpack_require__(26);
var component_1 = __webpack_require__(10);
var TrCoreDirective = (function () {
    function TrCoreDirective($view, root, elementRef) {
        this.$view = $view;
        this.root = root;
        this.elementRef = elementRef;
        this.element = elementRef.nativeElement;
    }
    TrCoreDirective.prototype.ngOnInit = function () {
        var element = this.element;
        this.root.bag.set(element, this);
    };
    TrCoreDirective.prototype.ngOnDestroy = function () {
        var element = this.element;
        this.root.bag.delete(element);
    };
    tslib_1.__decorate([
        core_1.Input('q-grid-core-tr'),
        tslib_1.__metadata("design:type", Number)
    ], TrCoreDirective.prototype, "index", void 0);
    TrCoreDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-core-tr]'
        }),
        tslib_1.__metadata("design:paramtypes", [view_core_service_1.ViewCoreService,
            component_1.RootService,
            core_1.ElementRef])
    ], TrCoreDirective);
    return TrCoreDirective;
}());
exports.TrCoreDirective = TrCoreDirective;


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var infrastructure_1 = __webpack_require__(3);
var VScrollService = (function () {
    function VScrollService() {
    }
    VScrollService.prototype.factory = function () {
        return {
            settings: {},
            container: {
                reset: function () {
                },
                apply: function () {
                },
                drawEvent: new infrastructure_1.Event()
            }
        };
    };
    return VScrollService;
}());
exports.VScrollService = VScrollService;


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(325), exports);


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var component_1 = __webpack_require__(10);
var table_core_service_1 = __webpack_require__(79);
var TableCoreComponent = (function () {
    function TableCoreComponent(root, table) {
        this.root = root;
        this.table = table;
        this.pin = null;
    }
    TableCoreComponent.prototype.ngOnInit = function () {
        if (!this.pin) {
            this.pin = null;
        }
        this.table.pin = this.pin;
    };
    Object.defineProperty(TableCoreComponent.prototype, "columnStartIndex", {
        get: function () {
            var columns = this.root.table.data.columns();
            switch (this.pin) {
                case 'left':
                    return 0;
                case 'right':
                    return columns.filter(function (c) { return c.pin !== 'right'; }).length;
                default:
                    return columns.filter(function (c) { return c.pin === 'left'; }).length;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableCoreComponent.prototype, "visibility", {
        get: function () {
            return this.model.visibility();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableCoreComponent.prototype, "model", {
        get: function () {
            return this.root.model;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], TableCoreComponent.prototype, "pin", void 0);
    TableCoreComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-core-table',
            template: __webpack_require__(685),
            providers: [
                table_core_service_1.TableCoreService
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [component_1.RootService,
            table_core_service_1.TableCoreService])
    ], TableCoreComponent);
    return TableCoreComponent;
}());
exports.TableCoreComponent = TableCoreComponent;


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(327), exports);


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var ToolbarCoreComponent = (function () {
    function ToolbarCoreComponent() {
    }
    ToolbarCoreComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ToolbarCoreComponent.prototype, "position", void 0);
    ToolbarCoreComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-core-toolbar',
            template: __webpack_require__(686)
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ToolbarCoreComponent);
    return ToolbarCoreComponent;
}());
exports.ToolbarCoreComponent = ToolbarCoreComponent;


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(329), exports);
tslib_1.__exportStar(__webpack_require__(26), exports);


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var component_1 = __webpack_require__(10);
var view_core_service_1 = __webpack_require__(26);
var grid_1 = __webpack_require__(50);
var cell_1 = __webpack_require__(133);
var ViewCoreComponent = (function (_super) {
    tslib_1.__extends(ViewCoreComponent, _super);
    function ViewCoreComponent(root, view, gridService) {
        var _this = _super.call(this) || this;
        _this.root = root;
        _this.view = view;
        _this.gridService = gridService;
        return _this;
    }
    ViewCoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.view.init();
        var model = this.model;
        var gridService = this.gridService.service(model);
        // model.selectionChanged.watch(e => {
        //   // TODO: add event
        //   // if (e.hasChanges('entries')) {
        //   //   this.root.selectionChanged.emit({
        //   //     state: model.selection(),
        //   //     changes: e.changes
        //   //   });
        //   // }
        //
        // });
        var triggers = model.data().triggers;
        // TODO: think about invalidation queue
        var needInvalidate = true;
        Object.keys(triggers)
            .forEach(function (name) {
            return _this.using(model[name + 'Changed']
                .watch(function (e) {
                var changes = Object.keys(e.changes);
                if (e.tag.behavior !== 'core' && triggers[name].find(function (key) { return changes.indexOf(key) >= 0; })) {
                    needInvalidate = false;
                    gridService.invalidate(name, e.changes);
                }
            }));
        });
        if (needInvalidate) {
            gridService.invalidate('grid');
        }
    };
    ViewCoreComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        var view = this.view;
        view.style.dispose();
        view.head.dispose();
        view.body.dispose();
        view.foot.dispose();
        view.columns.dispose();
        view.layout.dispose();
        view.selection.dispose();
        view.group.dispose();
        view.pivot.dispose();
        view.highlight.dispose();
        view.sort.dispose();
        view.filter.dispose();
        view.edit.dispose();
        view.nav.dispose();
        view.pagination.dispose();
        view.scroll.dispose();
        view.rowDetails.dispose();
    };
    Object.defineProperty(ViewCoreComponent.prototype, "model", {
        get: function () {
            return this.root.model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewCoreComponent.prototype, "visibility", {
        get: function () {
            return this.model.visibility();
        },
        enumerable: true,
        configurable: true
    });
    ViewCoreComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-core-view',
            template: __webpack_require__(687),
            providers: [
                view_core_service_1.ViewCoreService,
                cell_1.CellService
            ]
        }),
        tslib_1.__param(0, core_1.Optional()),
        tslib_1.__metadata("design:paramtypes", [component_1.RootService,
            view_core_service_1.ViewCoreService,
            grid_1.GridService])
    ], ViewCoreComponent);
    return ViewCoreComponent;
}(component_1.NgComponent));
exports.ViewCoreComponent = ViewCoreComponent;


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var template_1 = __webpack_require__(27);
var component_1 = __webpack_require__(10);
var layer_1 = __webpack_require__(332);
var dom_1 = __webpack_require__(399);
var infrastructure_1 = __webpack_require__(3);
var command_1 = __webpack_require__(8);
var event_manager_1 = __webpack_require__(87);
var event_listener_1 = __webpack_require__(42);
var GridComponent = (function (_super) {
    tslib_1.__extends(GridComponent, _super);
    function GridComponent(rootService, element, changeDetector) {
        var _this = _super.call(this) || this;
        _this.rootService = rootService;
        _this.element = element;
        _this.changeDetector = changeDetector;
        _this.selectionChanged = new core_1.EventEmitter();
        _this.models = ['data', 'selection', 'sort', 'group', 'pivot', 'edit', 'style', 'action'];
        _this.using(_this.modelChanged.watch(function (model) { return _this.rootService.model = model; }));
        _this.listener = new event_listener_1.EventListener(element.nativeElement, new event_manager_1.EventManager(_this, rootService.applyFactory(null, 'sync')));
        return _this;
    }
    GridComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        var model = this.model;
        if (model.grid().status === 'bound') {
            throw new infrastructure_1.AppError('grid', "Model is already used by grid \"" + model.grid().id + "\"");
        }
        model.grid({
            status: 'bound'
        });
        if (!this.gridId) {
            this.element.nativeElement.id = model.grid().id;
        }
        var markup = this.rootService.markup;
        var layerService = new layer_1.LayerService(markup);
        var bag = this.rootService.bag;
        var tableContext = {
            layer: function (name) { return layerService.create(name); },
            model: function (element) { return bag.get(element) || null; }
        };
        var table = new dom_1.Table(model, markup, tableContext);
        this.rootService.table = table;
        this.rootService.commandManager = new command_1.TableCommandManager(this.rootService.applyFactory(), table);
        this.using(this.listener.on('keydown', function (e) {
            if (model.action().shortcut.keyDown(e)) {
                e.preventDefault();
                e.stopPropagation();
            }
        }));
        this.using(this.model.viewChanged.watch(function (e) {
            if (e.hasChanges('columns')) {
                _this.invalidateVisibility();
            }
        }));
    };
    GridComponent.prototype.invalidateVisibility = function () {
        var columns = this.model.data().columns;
        var visibility = this.model.visibility;
        visibility({
            pin: {
                left: columns.some(function (c) { return c.pin === 'left'; }),
                right: columns.some(function (c) { return c.pin === 'right'; })
            }
        });
    };
    Object.defineProperty(GridComponent.prototype, "isActive", {
        get: function () {
            return this.rootService.table.view.isFocused();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "visibility", {
        get: function () {
            // TODO: get rid of that
            return this.model.visibility();
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "model", void 0);
    tslib_1.__decorate([
        core_1.Input('rows'),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "dataRows", void 0);
    tslib_1.__decorate([
        core_1.Input('columns'),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "dataColumns", void 0);
    tslib_1.__decorate([
        core_1.Input('pipe'),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "dataPipe", void 0);
    tslib_1.__decorate([
        core_1.Input('selection'),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "selectionItems", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "selectionMode", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "selectionUnit", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "selectionKey", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "groupBy", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "pivotBy", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "sortBy", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "sortMode", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "editMode", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "editEnter", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "editCommit", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "editCancel", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "editReset", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "styleRow", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "styleCell", void 0);
    tslib_1.__decorate([
        core_1.Input('id'),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "gridId", void 0);
    tslib_1.__decorate([
        core_1.Input('actions'),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "actionItems", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "selectionChanged", void 0);
    GridComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid',
            providers: [
                component_1.RootService,
                template_1.TemplateCacheService
            ],
            styles: [
                __webpack_require__(719),
                __webpack_require__(720)
            ],
            template: __webpack_require__(688),
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [component_1.RootService, core_1.ElementRef, core_1.ChangeDetectorRef])
    ], GridComponent);
    return GridComponent;
}(component_1.RootComponent));
exports.GridComponent = GridComponent;


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(335), exports);


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(333), exports);


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var layer_1 = __webpack_require__(334);
var LayerService = (function () {
    function LayerService(markup) {
        this.markup = markup;
    }
    LayerService.prototype.create = function (name) {
        var markup = this.markup;
        // const node = markup.document.createElement(`div`);
        // node.classList.add(name);
        // node.classList.add(`${GRID_PREFIX}-layer`)
        // markup.view.appendChild(node);
        //
        // const ctrl = angular.element(markup.view).controller(VIEW_CORE_NAME);
        // if (!ctrl) {
        //   throw new AppError('box', 'Controller for box is not found')
        // }
        //
        // if (!ctrl.$scope) {
        //   throw new AppError('box', 'Controller scope for box is not found')
        // }
        return new layer_1.Layer();
    };
    return LayerService;
}());
exports.LayerService = LayerService;


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Layer = (function () {
    function Layer() {
    }
    Layer.prototype.resource = function (id, state) {
    };
    Layer.prototype.destroy = function () {
    };
    return Layer;
}());
exports.Layer = Layer;


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(30);
var grid_1 = __webpack_require__(50);
var column_1 = __webpack_require__(132);
var box_1 = __webpack_require__(304);
var core_2 = __webpack_require__(318);
var theme_module_1 = __webpack_require__(351);
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                grid_1.GridComponent,
                box_1.BoxComponent,
                column_1.ColumnListComponent,
                column_1.ColumnComponent
            ],
            exports: [
                grid_1.GridComponent,
                column_1.ColumnListComponent,
                column_1.ColumnComponent,
                box_1.BoxComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                core_2.CoreModule,
                theme_module_1.ThemeModule
            ],
            providers: [
                grid_1.GridService
            ]
        })
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var plugin_1 = __webpack_require__(170);
var plugin_component_1 = __webpack_require__(51);
var command_1 = __webpack_require__(8);
var json_1 = __webpack_require__(421);
var xml_1 = __webpack_require__(423);
var csv_1 = __webpack_require__(418);
var xlsx_1 = __webpack_require__(524);
var pdf_1 = __webpack_require__(523);
var download_1 = __webpack_require__(522);
var template_1 = __webpack_require__(27);
var component_1 = __webpack_require__(10);
var ExportComponent = (function (_super) {
    tslib_1.__extends(ExportComponent, _super);
    function ExportComponent(root, templateHost) {
        var _this = _super.call(this, root) || this;
        _this.root = root;
        _this.templateHost = templateHost;
        _this.csv = new command_1.Command({
            canExecute: function () { return _this.type === 'csv'; },
            execute: function () {
                var pluginService = new plugin_1.PluginService(_this.model);
                var fileSaver = pluginService.resolve('fileSaver');
                var csv = new csv_1.Csv();
                var data = csv.write(_this.rows, _this.columns);
                var download = download_1.downloadFactory(fileSaver);
                download(_this.id, data, "text/" + _this.type);
            }
        });
        _this.json = new command_1.Command({
            canExecute: function () { return _this.type === 'json'; },
            execute: function () {
                var pluginService = new plugin_1.PluginService(_this.model);
                var fileSaver = pluginService.resolve('fileSaver');
                var json = new json_1.Json();
                var data = json.write(_this.rows, _this.columns);
                var download = download_1.downloadFactory(fileSaver);
                download(_this.id, data, "text/" + _this.type);
            }
        });
        _this.xml = new command_1.Command({
            canExecute: function () { return _this.type === 'xml'; },
            execute: function () {
                var pluginService = new plugin_1.PluginService(_this.model);
                var fileSaver = pluginService.resolve('fileSaver');
                var xml = new xml_1.Xml();
                var data = xml.write(_this.rows);
                var download = download_1.downloadFactory(fileSaver);
                download(_this.id, data, "application/" + _this.type);
            }
        });
        _this.xlsx = new command_1.Command({
            canExecute: function () { return _this.type === 'xlsx'; },
            execute: function () {
                var pluginService = new plugin_1.PluginService(_this.model);
                var lib = pluginService.resolve('xlsx');
                var fileSaver = pluginService.resolve('fileSaver');
                var xlsx = new xlsx_1.Xlsx(lib);
                var data = xlsx.write(_this.rows, _this.columns);
                var download = download_1.downloadFactory(fileSaver);
                download(_this.id, data, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'xlsx');
            }
        });
        _this.pdf = new command_1.Command({
            canExecute: function () { return _this.type === 'pdf'; },
            execute: function () {
                var pluginService = new plugin_1.PluginService(_this.model);
                var lib = pluginService.resolve('pdf');
                var pdf = new pdf_1.Pdf(lib);
                pdf.write(_this.rows, _this.columns, _this.id);
            }
        });
        return _this;
    }
    ExportComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.templateHost.key = this.templateHostKey;
    };
    Object.defineProperty(ExportComponent.prototype, "rows", {
        get: function () {
            return this.root.model.data().rows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExportComponent.prototype, "columns", {
        get: function () {
            return this.root.model.data().columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExportComponent.prototype, "id", {
        get: function () {
            return this.root.model.grid().id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExportComponent.prototype, "templateContentKey", {
        get: function () {
            return ["content-" + this.templateHostKey, 'plugin-export.tpl.html'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExportComponent.prototype, "templateHostKey", {
        get: function () {
            return "plugin-export-" + this.type + ".tpl.html";
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ExportComponent.prototype, "type", void 0);
    ExportComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-export',
            template: __webpack_require__(689),
            providers: [template_1.TemplateHostService]
        }),
        tslib_1.__param(0, core_1.Optional()),
        tslib_1.__metadata("design:paramtypes", [component_1.RootService, template_1.TemplateHostService])
    ], ExportComponent);
    return ExportComponent;
}(plugin_component_1.PluginComponent));
exports.ExportComponent = ExportComponent;


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var export_component_1 = __webpack_require__(336);
var template_module_1 = __webpack_require__(52);
var ExportModule = (function () {
    function ExportModule() {
    }
    ExportModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                export_component_1.ExportComponent
            ],
            exports: [
                export_component_1.ExportComponent
            ],
            imports: [
                template_module_1.TemplateModule
            ],
            providers: []
        })
    ], ExportModule);
    return ExportModule;
}());
exports.ExportModule = ExportModule;


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(337), exports);


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(343), exports);
tslib_1.__exportStar(__webpack_require__(51), exports);


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(342), exports);


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var command_1 = __webpack_require__(8);
var plugin_component_1 = __webpack_require__(51);
var root_service_1 = __webpack_require__(49);
var PagerComponent = (function (_super) {
    tslib_1.__extends(PagerComponent, _super);
    function PagerComponent(root) {
        var _this = _super.call(this, root) || this;
        _this.next = new command_1.Command({
            execute: function () { return _this.current = _this.current + 1; },
            canExecute: function () { return (_this.current + 1) * _this.size < _this.total; }
        });
        _this.prev = new command_1.Command({
            execute: function () { return _this.current = _this.current - 1; },
            canExecute: function () { return _this.current > 0; }
        });
        _this.models = ['pagination'];
        return _this;
    }
    Object.defineProperty(PagerComponent.prototype, "size", {
        get: function () {
            return this.model.pagination().size;
        },
        set: function (value) {
            this.model.pagination({ size: value, current: 0 });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "sizeList", {
        get: function () {
            return this.model.pagination().sizeList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "current", {
        get: function () {
            return this.model.pagination().current;
        },
        set: function (value) {
            this.model.pagination({ current: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "from", {
        get: function () {
            return Math.min(this.total, this.current * this.size + 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "to", {
        get: function () {
            return Math.min(this.total, (this.current + 1) * this.size);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "total", {
        get: function () {
            return this.model.pagination().count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalPages", {
        get: function () {
            return Math.max(1, Math.ceil(this.total / this.size));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "scroll", {
        get: function () {
            return this.model.scroll();
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        core_1.Input('size'),
        tslib_1.__metadata("design:type", Object)
    ], PagerComponent.prototype, "paginationSize", void 0);
    tslib_1.__decorate([
        core_1.Input('sizeList'),
        tslib_1.__metadata("design:type", Object)
    ], PagerComponent.prototype, "paginationSizeList", void 0);
    PagerComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-pager',
            template: __webpack_require__(690)
        }),
        tslib_1.__param(0, core_1.Optional()),
        tslib_1.__metadata("design:paramtypes", [root_service_1.RootService])
    ], PagerComponent);
    return PagerComponent;
}(plugin_component_1.PluginComponent));
exports.PagerComponent = PagerComponent;


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var pager_component_1 = __webpack_require__(341);
var template_module_1 = __webpack_require__(52);
var PagerModule = (function () {
    function PagerModule() {
    }
    PagerModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                pager_component_1.PagerComponent
            ],
            exports: [
                pager_component_1.PagerComponent
            ],
            imports: [
                template_module_1.TemplateModule
            ],
            providers: []
        })
    ], PagerModule);
    return PagerModule;
}());
exports.PagerModule = PagerModule;


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var pagination_1 = __webpack_require__(340);
var progress_1 = __webpack_require__(344);
var export_1 = __webpack_require__(338);
var PluginModule = (function () {
    function PluginModule() {
    }
    PluginModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [],
            exports: [
                pagination_1.PagerModule,
                progress_1.ProgressModule,
                export_1.ExportModule
            ],
            imports: [],
            providers: []
        })
    ], PluginModule);
    return PluginModule;
}());
exports.PluginModule = PluginModule;


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(346), exports);


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var plugin_component_1 = __webpack_require__(51);
var component_1 = __webpack_require__(10);
var ProgressComponent = (function (_super) {
    tslib_1.__extends(ProgressComponent, _super);
    function ProgressComponent(root) {
        var _this = _super.call(this, root) || this;
        _this.models = ['progress'];
        return _this;
    }
    Object.defineProperty(ProgressComponent.prototype, "isBusy", {
        get: function () {
            var progressState = this.model.progress();
            return progressState.isBusy || progressState.queue.length;
        },
        enumerable: true,
        configurable: true
    });
    ProgressComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-progress',
            template: __webpack_require__(691)
        }),
        tslib_1.__param(0, core_1.Optional()),
        tslib_1.__metadata("design:paramtypes", [component_1.RootService])
    ], ProgressComponent);
    return ProgressComponent;
}(plugin_component_1.PluginComponent));
exports.ProgressComponent = ProgressComponent;


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var progress_component_1 = __webpack_require__(345);
var template_1 = __webpack_require__(27);
var ProgressModule = (function () {
    function ProgressModule() {
    }
    ProgressModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                progress_component_1.ProgressComponent
            ],
            exports: [
                progress_component_1.ProgressComponent
            ],
            imports: [
                template_1.TemplateModule
            ],
            providers: []
        })
    ], ProgressModule);
    return ProgressModule;
}());
exports.ProgressModule = ProgressModule;


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var template_link_service_1 = __webpack_require__(82);
var TemplateLinkDirective = (function () {
    function TemplateLinkDirective(templateLink, templateRef) {
        this.templateLink = templateLink;
        this.templateRef = templateRef;
        this.key = '';
    }
    TemplateLinkDirective.prototype.ngOnInit = function () {
        this.templateLink.put(this.key, this.templateRef);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], TemplateLinkDirective.prototype, "key", void 0);
    TemplateLinkDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: 'ng-template[key]'
        }),
        tslib_1.__metadata("design:paramtypes", [template_link_service_1.TemplateLinkService,
            core_1.TemplateRef])
    ], TemplateLinkDirective);
    return TemplateLinkDirective;
}());
exports.TemplateLinkDirective = TemplateLinkDirective;


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var template_link_service_1 = __webpack_require__(82);
var template_cache_service_1 = __webpack_require__(80);
var infrastructure_1 = __webpack_require__(3);
var utility_1 = __webpack_require__(4);
var TemplateDirective = (function () {
    function TemplateDirective(templateLink, templateCache, viewContainerRef) {
        this.templateLink = templateLink;
        this.templateCache = templateCache;
        this.viewContainerRef = viewContainerRef;
        this.key = '';
        this.context = null;
        this.template = null;
    }
    TemplateDirective.prototype.ngDoCheck = function () {
        var template = this.find(this.key);
        if (template !== this.template) {
            this.template = template;
            if (this.viewRef) {
                this.viewContainerRef.clear();
            }
            this.viewRef = this.viewContainerRef.createEmbeddedView(template, this.context);
        }
    };
    TemplateDirective.prototype.find = function (keys) {
        if (utility_1.isString(keys)) {
            var template = this.templateCache.get(keys) || this.templateLink.get(keys);
            return template || null;
        }
        if (utility_1.isArray(keys)) {
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var template = this.find(key);
                if (template) {
                    return template;
                }
            }
            return null;
        }
        throw new infrastructure_1.AppError('template.directive', 'Invalid key type');
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], TemplateDirective.prototype, "key", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], TemplateDirective.prototype, "context", void 0);
    TemplateDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: 'ng-container[key]'
        }),
        tslib_1.__metadata("design:paramtypes", [template_link_service_1.TemplateLinkService,
            template_cache_service_1.TemplateCacheService,
            core_1.ViewContainerRef])
    ], TemplateDirective);
    return TemplateDirective;
}());
exports.TemplateDirective = TemplateDirective;


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var templates = [
    __webpack_require__(709),
    __webpack_require__(698),
    __webpack_require__(692),
    __webpack_require__(693),
    __webpack_require__(694),
    __webpack_require__(696),
    __webpack_require__(697),
    __webpack_require__(695),
    __webpack_require__(701),
    __webpack_require__(699),
    __webpack_require__(706),
    __webpack_require__(702),
    __webpack_require__(703),
    __webpack_require__(704),
    __webpack_require__(700),
    __webpack_require__(705),
    __webpack_require__(707),
    __webpack_require__(708),
    __webpack_require__(716),
    __webpack_require__(713),
    __webpack_require__(714),
    __webpack_require__(715),
    __webpack_require__(711),
    __webpack_require__(712),
    __webpack_require__(710)
];
exports.template = templates.join('\n\n');


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var templates_1 = __webpack_require__(349);
var ThemeComponent = (function () {
    function ThemeComponent() {
    }
    ThemeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-theme',
            template: templates_1.template
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ThemeComponent);
    return ThemeComponent;
}());
exports.ThemeComponent = ThemeComponent;


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(30);
var forms_1 = __webpack_require__(230);
var theme_service_1 = __webpack_require__(138);
var theme_component_1 = __webpack_require__(350);
var plugins_1 = __webpack_require__(339);
var template_1 = __webpack_require__(27);
var common_1 = __webpack_require__(128);
var material_1 = __webpack_require__(232);
var ThemeModule = (function () {
    function ThemeModule() {
    }
    ThemeModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                theme_component_1.ThemeComponent
            ],
            exports: [
                theme_component_1.ThemeComponent
            ],
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                template_1.TemplateModule,
                plugins_1.PluginModule,
                material_1.MdIconModule,
                material_1.MdButtonModule,
                material_1.MdCheckboxModule,
                material_1.MdSelectModule,
                material_1.MdTooltipModule,
                material_1.MdProgressBarModule,
                material_1.MdInputModule,
                material_1.MdDatepickerModule,
                material_1.MdNativeDateModule,
                material_1.MdChipsModule
            ],
            providers: [
                theme_service_1.ThemeService
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ThemeModule);
    return ThemeModule;
}());
exports.ThemeModule = ThemeModule;


/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Action */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Action = function Action(command, title, icon) {
	_classCallCheck(this, Action);

	this.command = command;
	this.title = title;
	this.icon = icon;
	this.id = null;
};

/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shortcut__ = __webpack_require__(183);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var ActionModel = function ActionModel() {
	_classCallCheck(this, ActionModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.items = [];
	this.shortcut = new __WEBPACK_IMPORTED_MODULE_1__shortcut__["a" /* Shortcut */](new __WEBPACK_IMPORTED_MODULE_1__shortcut__["b" /* ShortcutManager */]());
};

/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__action_model__ = __webpack_require__(353);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__action_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__action__ = __webpack_require__(352);
/* unused harmony namespace reexport */



/***/ }),
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var BodyModel = function BodyModel() {
	_classCallCheck(this, BodyModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.cache = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Cache"]();
};

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__body_model__ = __webpack_require__(355);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__body_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__body_view__ = __webpack_require__(139);
/* unused harmony namespace reexport */



/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cell; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Cell = function () {
	function Cell(cell) {
		_classCallCheck(this, Cell);

		this.entry = cell;

		// We need to cache it due to possible virtual mode;
		this.rowIndex = cell.rowIndex;
		this.columnIndex = cell.columnIndex;
		this.column = cell.column;
		this.row = cell.row;
	}

	_createClass(Cell, [{
		key: 'mode',
		value: function mode(value) {
			if (!this.entry.mode) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('cell', 'Internal model doesn\'t support mode');
			}

			this.entry.mode(value);
		}
	}, {
		key: 'value',
		get: function get() {
			if (!Cell.equals(this, this.entry)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('cell', 'Internal model doesn\'t match container');
			}

			return this.entry.value;
		},
		set: function set(value) {
			if (!Cell.equals(this, this.entry)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('cell', 'Internal model doesn\'t match container');
			}

			this.entry.value = value;
		}
	}, {
		key: 'label',
		get: function get() {
			if (!Cell.equals(this, this.entry)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('cell', 'Internal model doesn\'t match container');
			}

			return this.entry.label;
		},
		set: function set(label) {
			if (!Cell.equals(this, this.entry)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('cell', 'Internal model doesn\'t match container');
			}

			this.entry.label = label;
		}
	}], [{
		key: 'equals',
		value: function equals(x, y) {
			if (x === y) {
				return true;
			}

			if (!x || !y) {
				return false;
			}

			return x.rowIndex === y.rowIndex && x.columnIndex === y.columnIndex;
		}
	}]);

	return Cell;
}();

/***/ }),
/* 358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellSelector; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var CellSelector = function () {
	function CellSelector(model, table) {
		_classCallCheck(this, CellSelector);

		this.model = model;
		this.table = table;
	}

	_createClass(CellSelector, [{
		key: 'map',
		value: function map(items) {
			var selectionState = this.model.selection();
			switch (selectionState.unit) {
				case 'row':
					return this.mapFromRows(items);
				case 'column':
					return this.mapFromColumns(items);
				case 'cell':
					return this.mapFromCells(items);
				case 'mix':
					return this.mapFromMix(items);
				default:
					throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('cell.selector', 'Invalid unit ' + selectionState.unit);
			}
		}
	}, {
		key: 'mapFromRows',
		value: function mapFromRows(items) {
			var table = this.table;
			var result = [];
			var rows = table.data.rows();

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var item = _step.value;

					var index = rows.indexOf(item);
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = table.body.row(index).cells()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var cell = _step2.value;

							result.push(cell);
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return result;
		}
	}, {
		key: 'mapFromColumns',
		value: function mapFromColumns(items) {
			var table = this.table;
			var result = [];
			var columns = table.data.columns();

			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				var _loop = function _loop() {
					var item = _step3.value;

					var index = columns.findIndex(function (c) {
						return c === item;
					});
					result.push.apply(result, _toConsumableArray(table.body.column(index).cells()));
				};

				for (var _iterator3 = items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					_loop();
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			return result;
		}
	}, {
		key: 'mapFromCells',
		value: function mapFromCells(items) {
			var table = this.table;
			var result = [];
			var rows = table.data.rows();
			var columns = table.data.columns();

			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				var _loop2 = function _loop2() {
					var item = _step4.value;

					var rowIndex = rows.indexOf(item.row);
					var columnIndex = columns.findIndex(function (c) {
						return c === item.column;
					});
					result.push(table.body.cell(rowIndex, columnIndex));
				};

				for (var _iterator4 = items[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					_loop2();
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}

			return result;
		}
	}, {
		key: 'mapFromMix',
		value: function mapFromMix(items) {
			var entries = Array.from(items);
			var rows = entries.filter(function (item) {
				return item.unit === 'row';
			}).map(function (item) {
				return item.item;
			});
			var cells = entries.filter(function (item) {
				return item.unit === 'cell';
			}).map(function (item) {
				return item.item;
			});

			return [].concat(_toConsumableArray(this.mapFromRows(rows)), _toConsumableArray(this.mapFromCells(cells)));
		}
	}]);

	return CellSelector;
}();

/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_type__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_column_factory__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__infrastructure__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = generateFactory;
/* unused harmony export generate */
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }







function merge(left, right) {
	var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	var canAssign = void 0;
	if (force) {
		canAssign = function canAssign(source, target) {
			return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utility__["isUndefined"])(target) && target !== null ? target : source;
		};
	} else {
		canAssign = function canAssign(source, target) {
			return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utility__["isUndefined"])(target) && target !== null && source === null ? target : source;
		};
	}

	var doMerge = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services__["merge"])({
		equals: function equals(l, r) {
			return l.key === r.key;
		},
		update: function update(l, r) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utility__["assignWith"])(l, r, canAssign);
		},
		insert: function insert(r, left) {
			return left.push(r);
		},
		remove: __WEBPACK_IMPORTED_MODULE_2__utility__["noop"]
	});

	return doMerge(left, right);
}

function hasChanges(statistics) {
	return statistics.some(function (st) {
		return st.inserted || st.update;
	});
}

function generateFactory(model) {
	var data = model.data;
	var createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__column_column_factory__["columnFactory"])(model);
	return function () {
		var rows = data().rows;
		var templateColumns = model.columnList().columns;
		var generatedColumns = [];
		var generation = model.columnList().generation;
		if (generation) {
			switch (generation) {
				case 'deep':
					{
						generatedColumns.push.apply(generatedColumns, _toConsumableArray(generate({ rows: rows, columnFactory: createColumn, deep: true })));
						break;
					}
				case 'shallow':
					{
						generatedColumns.push.apply(generatedColumns, _toConsumableArray(generate({ rows: rows, columnFactory: createColumn, deep: false })));
						break;
					}
				default:
					throw new __WEBPACK_IMPORTED_MODULE_4__infrastructure__["AppError"]('column.list.generate', 'Invalid generation mode "' + generation + '"');
			}
		}

		var dataColumns = Array.from(data().columns);
		var statistics = [];

		if (generatedColumns.length) {
			statistics.push(merge(dataColumns, generatedColumns, false));
		}

		if (templateColumns.length) {
			statistics.push(merge(dataColumns, templateColumns, true));
		}

		return {
			columns: dataColumns,
			statistics: statistics,
			hasChanges: hasChanges(statistics)
		};
	};
}

function generate(settings) {
	var context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utility__["assignWith"])({
		deep: true,
		rows: [],
		columnFactory: function columnFactory() {
			return new __WEBPACK_IMPORTED_MODULE_1__column_type__["a" /* TextColumnModel */]();
		},
		title: __WEBPACK_IMPORTED_MODULE_2__utility__["startCase"]
	}, settings);
	if (context.rows.length) {
		return build(context.rows[0], null, context.columnFactory, context.deep, context.title);
	}
	return [];
}

function build(graph, path, columnFactory, deep, title) {
	var props = Object.getOwnPropertyNames(graph);
	return props.reduce(function (columns, prop) {
		var value = graph[prop];
		var propPath = path ? path + '.' + prop : prop;
		var type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services__["getType"])(value);
		switch (type) {
			case 'array':
				{
					var column = columnFactory(type).model;
					column.key = propPath;
					column.title = title(propPath, graph, column.length);
					column.path = propPath;
					column.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services__["compile"])(propPath);
					column.source = 'generation';
					columns.push(column);
					break;
				}
			case 'collection':
				{
					break;
				}
			case 'object':
				{
					if (deep) {
						columns.push.apply(columns, _toConsumableArray(build(value, propPath, columnFactory, true, title)));
					}
					break;
				}
			default:
				{
					var _column = columnFactory(type).model;
					_column.key = propPath;
					_column.title = title(propPath, graph, _column.length);
					_column.path = propPath;
					_column.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services__["compile"])(propPath);
					_column.source = 'generation';
					columns.push(_column);
					break;
				}
		}

		return columns;
	}, []);
}

/***/ }),
/* 360 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnListModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColumnListModel = function ColumnListModel() {
	_classCallCheck(this, ColumnListModel);

	this.generation = null; // deep | shallow
	this.index = [];
	this.columns = [];
	this.reference = {};
};

/***/ }),
/* 361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(7);
/* harmony export (immutable) */ __webpack_exports__["a"] = sortIndexFactory;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



function sortIndexFactory(model) {
	return function (columns) {
		var columnMap = __WEBPACK_IMPORTED_MODULE_0__column_column_service__["map"](columns);
		var index = model.columnList().index.filter(function (key) {
			return columnMap.hasOwnProperty(key);
		});

		var indexSet = new Set(index);
		var appendIndex = columns.filter(function (c) {
			return !indexSet.has(c.key);
		});
		var orderIndex = Array.from(appendIndex);
		orderIndex.sort(function (x, y) {
			if (x.index === y.index) {
				return appendIndex.indexOf(x) - appendIndex.indexOf(y);
			}

			if (x.index < 0) {
				return 1;
			}

			if (y.index < 0) {
				return -1;
			}

			return x.index - y.index;
		});

		index.push.apply(index, _toConsumableArray(orderIndex.map(function (c) {
			return c.key;
		})));
		return {
			index: index,
			hasChanges: orderIndex.length > 0
		};
	};
}

/***/ }),
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility__ = __webpack_require__(4);
/* unused harmony export ArrayColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('array-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('array-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var ArrayColumnModel = function (_DataColumnModel) {
	_inherits(ArrayColumnModel, _DataColumnModel);

	function ArrayColumnModel() {
		_classCallCheck(this, ArrayColumnModel);

		var _this = _possibleConstructorReturn(this, (ArrayColumnModel.__proto__ || Object.getPrototypeOf(ArrayColumnModel)).call(this, 'array'));

		_this.label = __WEBPACK_IMPORTED_MODULE_3__utility__["identity"];
		return _this;
	}

	return ArrayColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var ArrayColumn = function (_ColumnView) {
	_inherits(ArrayColumn, _ColumnView);

	function ArrayColumn(model) {
		_classCallCheck(this, ArrayColumn);

		return _possibleConstructorReturn(this, (ArrayColumn.__proto__ || Object.getPrototypeOf(ArrayColumn)).call(this, model));
	}

	_createClass(ArrayColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? ArrayColumn.assign(_model) : new ArrayColumnModel();
		}
	}]);

	return ArrayColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 363 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* unused harmony export BoolColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoolColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('bool-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('bool-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var BoolColumnModel = function (_DataColumnModel) {
	_inherits(BoolColumnModel, _DataColumnModel);

	function BoolColumnModel() {
		_classCallCheck(this, BoolColumnModel);

		var _this = _possibleConstructorReturn(this, (BoolColumnModel.__proto__ || Object.getPrototypeOf(BoolColumnModel)).call(this, 'bool'));

		_this.trueValue = true;
		_this.falseValue = false;

		// as we use 'this' pointer inside, we can't use lambda in 2 here
		_this.isIndeterminate = function (value) {
			return !(value === this.trueValue || value === this.falseValue);
		};

		_this.isChecked = function (value) {
			return value === this.trueValue;
		};
		return _this;
	}

	return BoolColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var BoolColumn = function (_ColumnView) {
	_inherits(BoolColumn, _ColumnView);

	function BoolColumn(model) {
		_classCallCheck(this, BoolColumn);

		return _possibleConstructorReturn(this, (BoolColumn.__proto__ || Object.getPrototypeOf(BoolColumn)).call(this, model));
	}

	_createClass(BoolColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? BoolColumn.assign(_model) : new BoolColumnModel();
		}
	}]);

	return BoolColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* unused harmony export DateColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('date-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('date-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var DateColumnModel = function (_DataColumnModel) {
	_inherits(DateColumnModel, _DataColumnModel);

	function DateColumnModel() {
		_classCallCheck(this, DateColumnModel);

		var _this = _possibleConstructorReturn(this, (DateColumnModel.__proto__ || Object.getPrototypeOf(DateColumnModel)).call(this, 'date'));

		_this.format = 'yyyy/MM/dd';
		return _this;
	}

	return DateColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var DateColumn = function (_ColumnView) {
	_inherits(DateColumn, _ColumnView);

	function DateColumn(model) {
		_classCallCheck(this, DateColumn);

		return _possibleConstructorReturn(this, (DateColumn.__proto__ || Object.getPrototypeOf(DateColumn)).call(this, model));
	}

	_createClass(DateColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? DateColumn.assign(_model) : new DateColumnModel();
		}
	}]);

	return DateColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 365 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* unused harmony export EmailColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('email-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('email-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var EmailColumnModel = function (_DataColumnModel) {
	_inherits(EmailColumnModel, _DataColumnModel);

	function EmailColumnModel() {
		_classCallCheck(this, EmailColumnModel);

		var _this = _possibleConstructorReturn(this, (EmailColumnModel.__proto__ || Object.getPrototypeOf(EmailColumnModel)).call(this, 'email'));

		_this.editorOptions.trigger = 'custom';
		return _this;
	}

	return EmailColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var EmailColumn = function (_ColumnView) {
	_inherits(EmailColumn, _ColumnView);

	function EmailColumn(model) {
		_classCallCheck(this, EmailColumn);

		return _possibleConstructorReturn(this, (EmailColumn.__proto__ || Object.getPrototypeOf(EmailColumn)).call(this, model));
	}

	_createClass(EmailColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? EmailColumn.assign(_model) : new EmailColumnModel();
		}
	}]);

	return EmailColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 366 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_file__ = __webpack_require__(181);
/* unused harmony export FileColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('file-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('file-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var FileColumnModel = function (_DataColumnModel) {
	_inherits(FileColumnModel, _DataColumnModel);

	function FileColumnModel() {
		_classCallCheck(this, FileColumnModel);

		var _this = _possibleConstructorReturn(this, (FileColumnModel.__proto__ || Object.getPrototypeOf(FileColumnModel)).call(this, 'file'));

		_this.canUpload = __WEBPACK_IMPORTED_MODULE_3__utility__["yes"];
		_this.editorOptions.trigger = 'custom';

		_this.hasPreview = function (name) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__services_file__["a" /* isImage */])(name);
		};
		return _this;
	}

	return FileColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var FileColumn = function (_ColumnView) {
	_inherits(FileColumn, _ColumnView);

	function FileColumn(model) {
		_classCallCheck(this, FileColumn);

		return _possibleConstructorReturn(this, (FileColumn.__proto__ || Object.getPrototypeOf(FileColumn)).call(this, model));
	}

	_createClass(FileColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? FileColumn.assign(_model) : new FileColumnModel();
		}
	}]);

	return FileColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* unused harmony export FilterRowColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterRowColumn; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('filter-row-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

var FilterRowColumnModel = function (_ColumnModel) {
	_inherits(FilterRowColumnModel, _ColumnModel);

	function FilterRowColumnModel(model) {
		_classCallCheck(this, FilterRowColumnModel);

		var _this = _possibleConstructorReturn(this, (FilterRowColumnModel.__proto__ || Object.getPrototypeOf(FilterRowColumnModel)).call(this));

		Object.assign(_this, model);

		_this.key = '$filter.row.' + model.key;
		_this.type = 'filter-row';
		_this.class = 'control';
		_this.canFilter = model.canFilter && model.class === 'data';

		_this.sourceKey = model.key;
		_this.sourceType = model.type;
		return _this;
	}

	return FilterRowColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var FilterRowColumn = function (_ColumnView) {
	_inherits(FilterRowColumn, _ColumnView);

	function FilterRowColumn(model) {
		_classCallCheck(this, FilterRowColumn);

		return _possibleConstructorReturn(this, (FilterRowColumn.__proto__ || Object.getPrototypeOf(FilterRowColumn)).call(this, new FilterRowColumnModel(model)));
	}

	return FilterRowColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);

/***/ }),
/* 368 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* unused harmony export GroupColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('group-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.type
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('group-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var GroupColumnModel = function (_ColumnModel) {
	_inherits(GroupColumnModel, _ColumnModel);

	function GroupColumnModel() {
		_classCallCheck(this, GroupColumnModel);

		var _this = _possibleConstructorReturn(this, (GroupColumnModel.__proto__ || Object.getPrototypeOf(GroupColumnModel)).call(this, 'group'));

		_this.key = '$group';
		_this.title = 'Group';
		_this.offset = 20;
		_this.canEdit = false;
		_this.canSort = false;
		_this.class = 'control';
		return _this;
	}

	return GroupColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var GroupColumn = function (_ColumnView) {
	_inherits(GroupColumn, _ColumnView);

	function GroupColumn(model) {
		_classCallCheck(this, GroupColumn);

		return _possibleConstructorReturn(this, (GroupColumn.__proto__ || Object.getPrototypeOf(GroupColumn)).call(this, model));
	}

	_createClass(GroupColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? GroupColumn.assign(_model) : new GroupColumnModel();
		}
	}]);

	return GroupColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 369 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* unused harmony export IdColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('id-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('id-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var IdColumnModel = function (_DataColumnModel) {
	_inherits(IdColumnModel, _DataColumnModel);

	function IdColumnModel() {
		_classCallCheck(this, IdColumnModel);

		return _possibleConstructorReturn(this, (IdColumnModel.__proto__ || Object.getPrototypeOf(IdColumnModel)).call(this, 'id'));
	}

	return IdColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var IdColumn = function (_ColumnView) {
	_inherits(IdColumn, _ColumnView);

	function IdColumn(model) {
		_classCallCheck(this, IdColumn);

		return _possibleConstructorReturn(this, (IdColumn.__proto__ || Object.getPrototypeOf(IdColumn)).call(this, model));
	}

	_createClass(IdColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? IdColumn.assign(_model) : new IdColumnModel();
		}
	}]);

	return IdColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 370 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_file__ = __webpack_require__(181);
/* unused harmony export ImageColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('image-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('image-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var ImageColumnModel = function (_DataColumnModel) {
	_inherits(ImageColumnModel, _DataColumnModel);

	function ImageColumnModel() {
		_classCallCheck(this, ImageColumnModel);

		var _this = _possibleConstructorReturn(this, (ImageColumnModel.__proto__ || Object.getPrototypeOf(ImageColumnModel)).call(this, 'image'));

		_this.canUpload = __WEBPACK_IMPORTED_MODULE_3__utility__["yes"];

		_this.hasPreview = function (name) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__services_file__["a" /* isImage */])(name);
		};
		return _this;
	}

	return ImageColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var ImageColumn = function (_ColumnView) {
	_inherits(ImageColumn, _ColumnView);

	function ImageColumn(model) {
		_classCallCheck(this, ImageColumn);

		return _possibleConstructorReturn(this, (ImageColumn.__proto__ || Object.getPrototypeOf(ImageColumn)).call(this, model));
	}

	_createClass(ImageColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? ImageColumn.assign(_model) : new ImageColumnModel();
		}
	}]);

	return ImageColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* unused harmony export NumberColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('number-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('number-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var NumberColumnModel = function (_DataColumnModel) {
	_inherits(NumberColumnModel, _DataColumnModel);

	function NumberColumnModel() {
		_classCallCheck(this, NumberColumnModel);

		var _this = _possibleConstructorReturn(this, (NumberColumnModel.__proto__ || Object.getPrototypeOf(NumberColumnModel)).call(this, 'number'));

		_this.format = '';
		return _this;
	}

	return NumberColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var NumberColumn = function (_ColumnView) {
	_inherits(NumberColumn, _ColumnView);

	function NumberColumn(model) {
		_classCallCheck(this, NumberColumn);

		return _possibleConstructorReturn(this, (NumberColumn.__proto__ || Object.getPrototypeOf(NumberColumn)).call(this, model));
	}

	_createClass(NumberColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? NumberColumn.assign(_model) : new NumberColumnModel();
		}
	}]);

	return NumberColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 372 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* unused harmony export PadColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PadColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('pad-cell', function (template) {
	return {
		model: template.for,
		resource: template.for + '.' + template.type
	};
});

var PadColumnModel = function (_ColumnModel) {
	_inherits(PadColumnModel, _ColumnModel);

	function PadColumnModel() {
		_classCallCheck(this, PadColumnModel);

		var _this = _possibleConstructorReturn(this, (PadColumnModel.__proto__ || Object.getPrototypeOf(PadColumnModel)).call(this, 'pad'));

		_this.key = '$pad';
		_this.title = '';
		_this.canEdit = false;
		_this.canSort = false;
		_this.canResize = false;
		_this.canHighlight = false;
		_this.canFocus = false;
		_this.class = 'markup';
		_this.source = 'generation';
		return _this;
	}

	return PadColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var PadColumn = function (_ColumnView) {
	_inherits(PadColumn, _ColumnView);

	function PadColumn(model) {
		_classCallCheck(this, PadColumn);

		return _possibleConstructorReturn(this, (PadColumn.__proto__ || Object.getPrototypeOf(PadColumn)).call(this, model));
	}

	_createClass(PadColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? PadColumn.assign(_model) : new PadColumnModel();
		}
	}]);

	return PadColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 373 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* unused harmony export PasswordColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('password-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('password-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var PasswordColumnModel = function (_DataColumnModel) {
	_inherits(PasswordColumnModel, _DataColumnModel);

	function PasswordColumnModel() {
		_classCallCheck(this, PasswordColumnModel);

		var _this = _possibleConstructorReturn(this, (PasswordColumnModel.__proto__ || Object.getPrototypeOf(PasswordColumnModel)).call(this, 'password'));

		_this.canSort = false;
		_this.canFilter = false;
		return _this;
	}

	return PasswordColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var PasswordColumn = function (_ColumnView) {
	_inherits(PasswordColumn, _ColumnView);

	function PasswordColumn(model) {
		_classCallCheck(this, PasswordColumn);

		return _possibleConstructorReturn(this, (PasswordColumn.__proto__ || Object.getPrototypeOf(PasswordColumn)).call(this, model));
	}

	_createClass(PasswordColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? PasswordColumn.assign(_model) : new PasswordColumnModel();
		}
	}]);

	return PasswordColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 374 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* unused harmony export PivotColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PivotColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('pivot-cell', function (template) {
	return {
		model: 'pivot',
		resource: template.for
	};
});

var PivotColumnModel = function (_ColumnModel) {
	_inherits(PivotColumnModel, _ColumnModel);

	function PivotColumnModel() {
		_classCallCheck(this, PivotColumnModel);

		var _this = _possibleConstructorReturn(this, (PivotColumnModel.__proto__ || Object.getPrototypeOf(PivotColumnModel)).call(this, 'pivot'));

		_this.key = '$pivot';
		_this.title = 'Pivot';
		_this.source = 'generation';
		_this.canEdit = false;
		_this.canSort = false;
		_this.canResize = false;
		_this.canHighlight = false;
		_this.width = 60;
		_this.rowIndex = 0;
		return _this;
	}

	return PivotColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var PivotColumn = function (_ColumnView) {
	_inherits(PivotColumn, _ColumnView);

	function PivotColumn(model) {
		_classCallCheck(this, PivotColumn);

		return _possibleConstructorReturn(this, (PivotColumn.__proto__ || Object.getPrototypeOf(PivotColumn)).call(this, model));
	}

	_createClass(PivotColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? PivotColumn.assign(_model) : new PivotColumnModel();
		}
	}]);

	return PivotColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 375 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infrastructure__ = __webpack_require__(3);
/* unused harmony export ReferenceColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferenceColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('reference-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('reference-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var ReferenceColumnModel = function (_DataColumnModel) {
	_inherits(ReferenceColumnModel, _DataColumnModel);

	function ReferenceColumnModel() {
		_classCallCheck(this, ReferenceColumnModel);

		var _this = _possibleConstructorReturn(this, (ReferenceColumnModel.__proto__ || Object.getPrototypeOf(ReferenceColumnModel)).call(this, 'reference'));

		_this.editorOptions.trigger = 'custom';
		_this.editorOptions.modelFactory = function () {
			return new __WEBPACK_IMPORTED_MODULE_3__infrastructure__["Model"]();
		};
		return _this;
	}

	return ReferenceColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var ReferenceColumn = function (_ColumnView) {
	_inherits(ReferenceColumn, _ColumnView);

	function ReferenceColumn(model) {
		_classCallCheck(this, ReferenceColumn);

		return _possibleConstructorReturn(this, (ReferenceColumn.__proto__ || Object.getPrototypeOf(ReferenceColumn)).call(this, model));
	}

	_createClass(ReferenceColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? ReferenceColumn.assign(_model) : new ReferenceColumnModel();
		}
	}]);

	return ReferenceColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 376 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowDetailsColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('row-details-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

var RowDetailsColumnModel = function (_ColumnModel) {
	_inherits(RowDetailsColumnModel, _ColumnModel);

	function RowDetailsColumnModel() {
		_classCallCheck(this, RowDetailsColumnModel);

		var _this = _possibleConstructorReturn(this, (RowDetailsColumnModel.__proto__ || Object.getPrototypeOf(RowDetailsColumnModel)).call(this, 'row-details'));

		_this.key = '$row.details';
		_this.title = 'Row Details';

		_this.canEdit = false;
		_this.canResize = false;
		_this.canHighlight = false;
		_this.class = 'control';
		return _this;
	}

	return RowDetailsColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var RowDetailsColumn = function (_ColumnView) {
	_inherits(RowDetailsColumn, _ColumnView);

	function RowDetailsColumn(model) {
		_classCallCheck(this, RowDetailsColumn);

		return _possibleConstructorReturn(this, (RowDetailsColumn.__proto__ || Object.getPrototypeOf(RowDetailsColumn)).call(this, model));
	}

	_createClass(RowDetailsColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? RowDetailsColumn.assign(_model) : new RowDetailsColumnModel();
		}
	}]);

	return RowDetailsColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 377 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowExpandColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('row-expand-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

var RowExpandColumnModel = function (_ColumnModel) {
	_inherits(RowExpandColumnModel, _ColumnModel);

	function RowExpandColumnModel() {
		_classCallCheck(this, RowExpandColumnModel);

		var _this = _possibleConstructorReturn(this, (RowExpandColumnModel.__proto__ || Object.getPrototypeOf(RowExpandColumnModel)).call(this, 'row-expand'));

		_this.key = '$row.expand';
		_this.title = 'Expand';

		_this.canEdit = false;
		_this.canResize = false;
		_this.class = 'control';
		return _this;
	}

	return RowExpandColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var RowExpandColumn = function (_ColumnView) {
	_inherits(RowExpandColumn, _ColumnView);

	function RowExpandColumn(model) {
		_classCallCheck(this, RowExpandColumn);

		return _possibleConstructorReturn(this, (RowExpandColumn.__proto__ || Object.getPrototypeOf(RowExpandColumn)).call(this, model));
	}

	_createClass(RowExpandColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? RowExpandColumn.assign(_model) : new RowExpandColumnModel();
		}
	}]);

	return RowExpandColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 378 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* unused harmony export RowIndicatorColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowIndicatorColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('row-indicator-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

var RowIndicatorColumnModel = function (_ColumnModel) {
	_inherits(RowIndicatorColumnModel, _ColumnModel);

	function RowIndicatorColumnModel() {
		_classCallCheck(this, RowIndicatorColumnModel);

		var _this = _possibleConstructorReturn(this, (RowIndicatorColumnModel.__proto__ || Object.getPrototypeOf(RowIndicatorColumnModel)).call(this, 'row-indicator'));

		_this.key = '$row.indicator';
		_this.title = 'Row Indicator';
		_this.canEdit = false;
		_this.canSort = false;
		_this.canResize = false;
		_this.canMove = false;
		_this.canFocus = false;
		_this.canHighlight = false;
		_this.class = 'control';
		_this.pin = 'left';
		return _this;
	}

	return RowIndicatorColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var RowIndicatorColumn = function (_ColumnView) {
	_inherits(RowIndicatorColumn, _ColumnView);

	function RowIndicatorColumn(model) {
		_classCallCheck(this, RowIndicatorColumn);

		return _possibleConstructorReturn(this, (RowIndicatorColumn.__proto__ || Object.getPrototypeOf(RowIndicatorColumn)).call(this, model));
	}

	_createClass(RowIndicatorColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? RowIndicatorColumn.assign(_model) : new RowIndicatorColumnModel();
		}
	}]);

	return RowIndicatorColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 379 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* unused harmony export RowNumberColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowNumberColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('row-number-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

var RowNumberColumnModel = function (_ColumnModel) {
	_inherits(RowNumberColumnModel, _ColumnModel);

	function RowNumberColumnModel() {
		_classCallCheck(this, RowNumberColumnModel);

		var _this = _possibleConstructorReturn(this, (RowNumberColumnModel.__proto__ || Object.getPrototypeOf(RowNumberColumnModel)).call(this, 'row-number'));

		_this.key = '$row.number';
		_this.title = '#';
		_this.canEdit = false;
		_this.canResize = false;
		_this.canMove = false;
		_this.canHighlight = false;
		_this.class = 'control';
		return _this;
	}

	return RowNumberColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var RowNumberColumn = function (_ColumnView) {
	_inherits(RowNumberColumn, _ColumnView);

	function RowNumberColumn(model) {
		_classCallCheck(this, RowNumberColumn);

		return _possibleConstructorReturn(this, (RowNumberColumn.__proto__ || Object.getPrototypeOf(RowNumberColumn)).call(this, model));
	}

	_createClass(RowNumberColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? RowNumberColumn.assign(_model) : new RowNumberColumnModel();
		}
	}]);

	return RowNumberColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 380 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* unused harmony export RowOptionsColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowOptionsColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('row-options-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('row-options-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var RowOptionsColumnModel = function (_DataColumnModel) {
	_inherits(RowOptionsColumnModel, _DataColumnModel);

	function RowOptionsColumnModel() {
		_classCallCheck(this, RowOptionsColumnModel);

		var _this = _possibleConstructorReturn(this, (RowOptionsColumnModel.__proto__ || Object.getPrototypeOf(RowOptionsColumnModel)).call(this, 'row-options'));

		_this.key = '$row.options';
		_this.title = '';
		_this.canEdit = true;
		_this.canResize = false;
		_this.canMove = false;
		_this.canHighlight = false;
		_this.width = 60;
		_this.class = 'control';
		_this.pin = 'right';
		return _this;
	}

	return RowOptionsColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var RowOptionsColumn = function (_ColumnView) {
	_inherits(RowOptionsColumn, _ColumnView);

	function RowOptionsColumn(model) {
		_classCallCheck(this, RowOptionsColumn);

		return _possibleConstructorReturn(this, (RowOptionsColumn.__proto__ || Object.getPrototypeOf(RowOptionsColumn)).call(this, model));
	}

	_createClass(RowOptionsColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? RowOptionsColumn.assign(_model) : new RowOptionsColumnModel();
		}
	}]);

	return RowOptionsColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* unused harmony export SelectColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('select-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

var SelectColumnModel = function (_ColumnModel) {
	_inherits(SelectColumnModel, _ColumnModel);

	function SelectColumnModel() {
		_classCallCheck(this, SelectColumnModel);

		var _this = _possibleConstructorReturn(this, (SelectColumnModel.__proto__ || Object.getPrototypeOf(SelectColumnModel)).call(this, 'select'));

		_this.key = '$select';
		_this.title = 'Select';
		_this.canEdit = false;
		_this.canResize = false;
		return _this;
	}

	return SelectColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var SelectColumn = function (_ColumnView) {
	_inherits(SelectColumn, _ColumnView);

	function SelectColumn(model) {
		_classCallCheck(this, SelectColumn);

		return _possibleConstructorReturn(this, (SelectColumn.__proto__ || Object.getPrototypeOf(SelectColumn)).call(this, model));
	}

	_createClass(SelectColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? SelectColumn.assign(_model) : new SelectColumnModel();
		}
	}]);

	return SelectColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 382 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextColumnModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TextColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('text-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('text-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('text-area-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var TextColumnModel = function (_DataColumnModel) {
	_inherits(TextColumnModel, _DataColumnModel);

	function TextColumnModel() {
		_classCallCheck(this, TextColumnModel);

		var _this = _possibleConstructorReturn(this, (TextColumnModel.__proto__ || Object.getPrototypeOf(TextColumnModel)).call(this, 'text'));

		_this.maxLength = 140;
		return _this;
	}

	return TextColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var TextColumn = function (_ColumnView) {
	_inherits(TextColumn, _ColumnView);

	function TextColumn(model) {
		_classCallCheck(this, TextColumn);

		return _possibleConstructorReturn(this, (TextColumn.__proto__ || Object.getPrototypeOf(TextColumn)).call(this, model));
	}

	_createClass(TextColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? TextColumn.assign(_model) : new TextColumnModel();
		}
	}]);

	return TextColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 383 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* unused harmony export TimeColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('time-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('time-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var TimeColumnModel = function (_DataColumnModel) {
	_inherits(TimeColumnModel, _DataColumnModel);

	function TimeColumnModel() {
		_classCallCheck(this, TimeColumnModel);

		var _this = _possibleConstructorReturn(this, (TimeColumnModel.__proto__ || Object.getPrototypeOf(TimeColumnModel)).call(this, 'time'));

		_this.format = 'h:mm a';
		return _this;
	}

	return TimeColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var TimeColumn = function (_ColumnView) {
	_inherits(TimeColumn, _ColumnView);

	function TimeColumn(model) {
		_classCallCheck(this, TimeColumn);

		return _possibleConstructorReturn(this, (TimeColumn.__proto__ || Object.getPrototypeOf(TimeColumn)).call(this, model));
	}

	_createClass(TimeColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? TimeColumn.assign(_model) : new TimeColumnModel();
		}
	}]);

	return TimeColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 384 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* unused harmony export UrlColumnModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('url-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('url-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var UrlColumnModel = function (_DataColumnModel) {
	_inherits(UrlColumnModel, _DataColumnModel);

	function UrlColumnModel() {
		_classCallCheck(this, UrlColumnModel);

		var _this = _possibleConstructorReturn(this, (UrlColumnModel.__proto__ || Object.getPrototypeOf(UrlColumnModel)).call(this, 'url'));

		_this.editorOptions.trigger = 'button';
		return _this;
	}

	return UrlColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var UrlColumn = function (_ColumnView) {
	_inherits(UrlColumn, _ColumnView);

	function UrlColumn(model) {
		_classCallCheck(this, UrlColumn);

		return _possibleConstructorReturn(this, (UrlColumn.__proto__ || Object.getPrototypeOf(UrlColumn)).call(this, model));
	}

	_createClass(UrlColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? UrlColumn.assign(_model) : new UrlColumnModel();
		}
	}]);

	return UrlColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */]);



/***/ }),
/* 385 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_units__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnView", function() { return ColumnView; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ColumnView = function (_View) {
	_inherits(ColumnView, _View);

	function ColumnView(model, service) {
		_classCallCheck(this, ColumnView);

		var _this = _possibleConstructorReturn(this, (ColumnView.__proto__ || Object.getPrototypeOf(ColumnView)).call(this, model));

		model.dataChanged.watch(function (e) {
			if (e.tag.behavior === 'core' || e.tag.source === 'column.view') {
				return;
			}

			if (e.hasChanges('columns') || e.hasChanges('rows')) {
				service.invalidate('column.view', e.changes, __WEBPACK_IMPORTED_MODULE_1__pipe_units__["PipeUnit"].column);
			}
		});

		_this.using(model.columnListChanged.watch(function (e) {
			if (e.hasChanges('columns') || e.hasChanges('generation')) {
				service.invalidate('column.view', e.changes, __WEBPACK_IMPORTED_MODULE_1__pipe_units__["PipeUnit"].column);
			}
		}));

		_this.using(model.filterChanged.watch(function (e) {
			if (e.hasChanges('unit')) {
				service.invalidate('column.view', e.changes, __WEBPACK_IMPORTED_MODULE_1__pipe_units__["PipeUnit"].column);
			}
		}));
		return _this;
	}

	return ColumnView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 386 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Command; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Command = function Command() {
	var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	_classCallCheck(this, Command);

	this.execute = context.execute || __WEBPACK_IMPORTED_MODULE_0__utility__["yes"];
	this.canExecute = context.canExecute || __WEBPACK_IMPORTED_MODULE_0__utility__["yes"];
	this.shortcut = context.shortcut;
};

/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompositeCommandManager; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CompositeCommandManager = function () {
	function CompositeCommandManager(manager) {
		_classCallCheck(this, CompositeCommandManager);

		this.manager = manager;
	}

	_createClass(CompositeCommandManager, [{
		key: "filter",
		value: function filter(commands) {
			return this.manager.filter(commands);
		}
	}, {
		key: "invoke",
		value: function invoke(commands) {
			return this.manager.invoke(commands);
		}
	}]);

	return CompositeCommandManager;
}();

/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__command_manager__ = __webpack_require__(140);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableCommandManager; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var TableCommandManager = function (_CommandManager) {
	_inherits(TableCommandManager, _CommandManager);

	function TableCommandManager(apply, table) {
		_classCallCheck(this, TableCommandManager);

		var _this = _possibleConstructorReturn(this, (TableCommandManager.__proto__ || Object.getPrototypeOf(TableCommandManager)).call(this, apply));

		_this.table = table;
		return _this;
	}

	_createClass(TableCommandManager, [{
		key: 'filter',
		value: function filter(commands) {
			if (this.isViewActive()) {
				return _get(TableCommandManager.prototype.__proto__ || Object.getPrototypeOf(TableCommandManager.prototype), 'filter', this).call(this, commands);
			}

			return [];
		}
	}, {
		key: 'isViewActive',
		value: function isViewActive() {
			return this.table.view.isFocused();
		}
	}]);

	return TableCommandManager;
}(__WEBPACK_IMPORTED_MODULE_0__command_manager__["a" /* CommandManager */]);

/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe_units_pipe_unit__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var DataModel = function DataModel() {
	_classCallCheck(this, DataModel);

	this.rows = [];
	this.columns = [];
	this.pipe = __WEBPACK_IMPORTED_MODULE_0__pipe_units_pipe_unit__["a" /* PipeUnit */].default;
	this.triggers = {
		'data': ['rows'],
		'pagination': ['current', 'size'],
		'sort': ['by'],
		'filter': ['by'],
		'group': ['by'],
		'pivot': ['by']
	};
};

/***/ }),
/* 390 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_model__ = __webpack_require__(389);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__data_model__["a"]; });


/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__virtual__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__box__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirtualBody; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





function getElements(markup) {
	var result = [];
	if (markup.hasOwnProperty('body-left')) {
		result.push(markup['body-left']);
	}

	if (markup.hasOwnProperty('body')) {
		result.push(markup['body']);
	}

	if (markup.hasOwnProperty('body-right')) {
		result.push(markup['body-right']);
	}

	return result;
}

var Body = function (_Box) {
	_inherits(Body, _Box);

	function Body(context, model, markup) {
		_classCallCheck(this, Body);

		var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, context, model));

		_this.markup = markup;
		return _this;
	}

	_createClass(Body, [{
		key: 'columnCount',
		value: function columnCount() {
			var columns = this.model.view().columns;
			return __WEBPACK_IMPORTED_MODULE_2__column_column_service__["lineView"](columns).length;
		}
	}, {
		key: 'rowCount',
		value: function rowCount() {
			var elements = this.getElements();
			if (elements.length) {
				return elements[0].rows.length;
			}

			return 0;
		}
	}, {
		key: 'getElementsCore',
		value: function getElementsCore() {
			return getElements(this.markup);
		}
	}]);

	return Body;
}(__WEBPACK_IMPORTED_MODULE_1__box__["a" /* Box */]);

var VirtualBody = function (_VirtualBox) {
	_inherits(VirtualBody, _VirtualBox);

	function VirtualBody(context, model, markup) {
		_classCallCheck(this, VirtualBody);

		var _this2 = _possibleConstructorReturn(this, (VirtualBody.__proto__ || Object.getPrototypeOf(VirtualBody)).call(this, context, model));

		_this2.markup = markup;
		return _this2;
	}

	_createClass(VirtualBody, [{
		key: 'columnCount',
		value: function columnCount() {
			var columns = this.model.view().columns;
			return __WEBPACK_IMPORTED_MODULE_2__column_column_service__["lineView"](columns).length;
		}
	}, {
		key: 'getElementsCore',
		value: function getElementsCore() {
			return getElements(this.markup);
		}
	}]);

	return VirtualBody;
}(__WEBPACK_IMPORTED_MODULE_0__virtual__["a" /* VirtualBox */]);

/***/ }),
/* 392 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_css__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Container = function () {
	function Container(elements) {
		_classCallCheck(this, Container);

		this.elements = elements;
	}

	_createClass(Container, [{
		key: 'getBoundingClientRect',
		value: function getBoundingClientRect() {
			var rects = this.elements.map(function (element) {
				return element.getBoundingClientRect();
			});
			var top = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utility__["min"])(rects.map(function (r) {
				return r.top;
			}));
			var left = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utility__["min"])(rects.map(function (r) {
				return r.left;
			}));
			var bottom = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utility__["max"])(rects.map(function (r) {
				return r.bottom;
			}));
			var right = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utility__["max"])(rects.map(function (r) {
				return r.right;
			}));
			return {
				height: bottom - top,
				width: right - left,
				top: top,
				left: left,
				right: right,
				bottom: bottom
			};
		}
	}, {
		key: 'addClass',
		value: function addClass(name) {
			this.elements.forEach(function (element) {
				return element.classList.add(__WEBPACK_IMPORTED_MODULE_0__services_css__["a" /* escapeAttr */](name));
			});
		}
	}, {
		key: 'removeClass',
		value: function removeClass(name) {
			this.elements.forEach(function (element) {
				return element.classList.remove(__WEBPACK_IMPORTED_MODULE_0__services_css__["a" /* escapeAttr */](name));
			});
		}
	}, {
		key: 'hasClass',
		value: function hasClass(name) {
			return this.elements.some(function (element) {
				return element.classList.contains(name);
			});
		}
	}, {
		key: 'clientWidth',
		get: function get() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utility__["max"])(this.elements.map(function (element) {
				return element.clientWidth;
			}));
		}
	}, {
		key: 'clientHeight',
		get: function get() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utility__["max"])(this.elements.map(function (element) {
				return element.clientHeight;
			}));
		}
	}, {
		key: 'classList',
		get: function get() {
			var _this = this;

			return {
				add: function add(name) {
					return _this.addClass(name);
				},
				remove: function remove(name) {
					return _this.removeClass(name);
				},
				contains: function contains(name) {
					return _this.hasClass(name);
				}
			};
		}
	}]);

	return Container;
}();

/***/ }),
/* 393 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Data = function () {
	function Data(model) {
		_classCallCheck(this, Data);

		this.model = model;
	}

	_createClass(Data, [{
		key: 'columns',
		value: function columns() {
			var columns = this.model.view().columns;
			return __WEBPACK_IMPORTED_MODULE_0__column_column_service__["lineView"](columns).map(function (v) {
				return v.model;
			});
		}
	}, {
		key: 'columnMap',
		value: function columnMap() {
			return __WEBPACK_IMPORTED_MODULE_0__column_column_service__["map"](this.columns());
		}
	}, {
		key: 'rows',
		value: function rows() {
			return this.model.view().rows;
		}
	}]);

	return Data;
}();

/***/ }),
/* 394 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_list__ = __webpack_require__(144);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FakeElement; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var FakeElement = function () {
	function FakeElement() {
		_classCallCheck(this, FakeElement);

		this.classList = new __WEBPACK_IMPORTED_MODULE_0__class_list__["a" /* FakeClassList */]();
	}

	_createClass(FakeElement, [{
		key: 'getBoundingClientRect',
		value: function getBoundingClientRect() {
			return {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
				width: 0,
				height: 0
			};
		}
	}, {
		key: 'clientWidth',
		get: function get() {
			return 0;
		}
	}, {
		key: 'clientHeight',
		get: function get() {
			return 0;
		}
	}]);

	return FakeElement;
}();

/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FakeLayer; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FakeLayer = function () {
	function FakeLayer() {
		_classCallCheck(this, FakeLayer);
	}

	_createClass(FakeLayer, [{
		key: "resource",
		value: function resource() {}
	}, {
		key: "destroy",
		value: function destroy() {}
	}]);

	return FakeLayer;
}();

/***/ }),
/* 396 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FakeTable; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FakeTable = function FakeTable() {
	_classCallCheck(this, FakeTable);

	this.rows = [];
};

/***/ }),
/* 397 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Foot; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Foot = function (_Box) {
	_inherits(Foot, _Box);

	function Foot(context, model, markup) {
		_classCallCheck(this, Foot);

		var _this = _possibleConstructorReturn(this, (Foot.__proto__ || Object.getPrototypeOf(Foot)).call(this, context, model));

		_this.markup = markup;
		return _this;
	}

	_createClass(Foot, [{
		key: 'getElementsCore',
		value: function getElementsCore() {
			var markup = this.markup;
			var result = [];
			if (markup.hasOwnProperty('foot-left')) {
				result.push(markup['foot-left']);
			}

			if (markup.hasOwnProperty('foot')) {
				result.push(markup['foot']);
			}

			if (markup.hasOwnProperty('foot-right')) {
				result.push(markup['foot-right']);
			}

			return result;
		}
	}]);

	return Foot;
}(__WEBPACK_IMPORTED_MODULE_0__box__["a" /* Box */]);

/***/ }),
/* 398 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Head; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Head = function (_Box) {
	_inherits(Head, _Box);

	function Head(context, model, markup) {
		_classCallCheck(this, Head);

		var _this = _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).call(this, context, model));

		_this.markup = markup;
		return _this;
	}

	_createClass(Head, [{
		key: 'getElementsCore',
		value: function getElementsCore() {
			var markup = this.markup;
			var result = [];
			if (markup.hasOwnProperty('head-left')) {
				result.push(markup['head-left']);
			}

			if (markup.hasOwnProperty('head')) {
				result.push(markup['head']);
			}

			if (markup.hasOwnProperty('head-right')) {
				result.push(markup['head-right']);
			}

			return result;
		}
	}]);

	return Head;
}(__WEBPACK_IMPORTED_MODULE_0__box__["a" /* Box */]);

/***/ }),
/* 399 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table__ = __webpack_require__(400);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return __WEBPACK_IMPORTED_MODULE_0__table__["a"]; });


/***/ }),
/* 400 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fake__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__head__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__body__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__foot__ = __webpack_require__(397);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }









var Table = function () {
	function Table(model, markup) {
		var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		_classCallCheck(this, Table);

		this.model = model;
		this.markup = markup;

		this.context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utility__["assignWith"])({
			mapper: {
				rowToView: model.scroll().mode === 'virtual' ? function (index) {
					return index - model.scroll().cursor;
				} : __WEBPACK_IMPORTED_MODULE_2__utility__["identity"],
				viewToRow: model.scroll().mode === 'virtual' ? function (index) {
					return index + model.scroll().cursor;
				} : __WEBPACK_IMPORTED_MODULE_2__utility__["identity"],
				columnToView: __WEBPACK_IMPORTED_MODULE_2__utility__["identity"],
				viewToColumn: __WEBPACK_IMPORTED_MODULE_2__utility__["identity"]
			},
			layer: function layer() {
				return new __WEBPACK_IMPORTED_MODULE_3__fake__["a" /* FakeLayer */]();
			},
			model: function model() {
				return null;
			},
			isDataRow: function isDataRow(row) {
				return !row.classList.contains('vscroll-mark');
			}
		}, context);

		this._head = null;
		this._body = null;
		this._foot = null;
		this._view = null;
	}

	_createClass(Table, [{
		key: 'headCore',
		value: function headCore() {
			return new __WEBPACK_IMPORTED_MODULE_4__head__["a" /* Head */](this.context, this.model, this.markup);
		}
	}, {
		key: 'bodyCore',
		value: function bodyCore() {
			if (this.model.scroll().mode === 'virtual') {
				return new __WEBPACK_IMPORTED_MODULE_5__body__["a" /* VirtualBody */](this.context, this.model, this.markup);
			}

			return new __WEBPACK_IMPORTED_MODULE_5__body__["b" /* Body */](this.context, this.model, this.markup);
		}
	}, {
		key: 'footCore',
		value: function footCore() {
			return new __WEBPACK_IMPORTED_MODULE_6__foot__["a" /* Foot */](this.context, this.model, this.markup);
		}
	}, {
		key: 'viewCore',
		value: function viewCore() {
			return new __WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */](this.markup, this.context);
		}
	}, {
		key: 'head',
		get: function get() {
			if (this._head) {
				return this._head;
			}

			return this._head = this.headCore();
		}
	}, {
		key: 'body',
		get: function get() {
			if (this._body) {
				return this._body;
			}

			return this._body = this.bodyCore();
		}
	}, {
		key: 'foot',
		get: function get() {
			if (this._foot) {
				return this._foot;
			}

			return this._foot = this.footCore();
		}
	}, {
		key: 'view',
		get: function get() {
			if (this._view) {
				return this._view;
			}

			return this._view = this.viewCore();
		}
	}, {
		key: 'data',
		get: function get() {
			return new __WEBPACK_IMPORTED_MODULE_1__data__["a" /* Data */](this.model);
		}
	}]);

	return Table;
}();

/***/ }),
/* 401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unit__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_css__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




function isParentOf(parent, element) {
	while (element) {
		if (element === parent) {
			return true;
		}

		element = element.parentNode;
	}

	return false;
}

var View = function (_Unit) {
	_inherits(View, _Unit);

	function View(markup, context) {
		_classCallCheck(this, View);

		var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this));

		_this.markup = markup;
		_this.context = context;
		_this.layers = new Map();
		return _this;
	}

	_createClass(View, [{
		key: 'focus',
		value: function focus() {
			var elements = this.getElementsCore('body');
			if (elements.length) {
				elements[0].focus();
				return true;
			}

			return false;
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.getElementsCore('body').forEach(function (element) {
				return element.blur();
			});
		}
	}, {
		key: 'isFocused',
		value: function isFocused() {
			var _this2 = this;

			return this.getElementsCore('body').some(function (element) {
				return _this2.isFocusedCore(element);
			});
		}
	}, {
		key: 'addLayer',
		value: function addLayer(name) {
			var layers = this.layers;
			if (layers.has(name)) {
				return layers.get(name);
			}

			var layer = this.context.layer(name);
			layers.set(name, layer);
			return layer;
		}
	}, {
		key: 'removeLayer',
		value: function removeLayer(name) {
			var layers = this.layers;
			if (layers.has(name)) {
				var layer = layers.get(name);
				layer.destroy();
				layers.delete(name);
				return true;
			}

			return false;
		}
	}, {
		key: 'addClass',
		value: function addClass(name) {
			if (this.markup.view) {
				this.markup.view.classList.add(__WEBPACK_IMPORTED_MODULE_1__services_css__["a" /* escapeAttr */](name));
			}
		}
	}, {
		key: 'removeClass',
		value: function removeClass(name) {
			if (this.markup.view) {
				this.markup.view.classList.remove(__WEBPACK_IMPORTED_MODULE_1__services_css__["a" /* escapeAttr */](name));
			}
		}
	}, {
		key: 'scrollLeft',
		value: function scrollLeft(value) {
			var markup = this.markup;
			if (arguments.length) {
				if (markup.head) {
					markup.head.scrollLeft = value;
				}

				if (markup.foot) {
					markup.foot.scrollLeft = value;
				}

				if (markup.body) {
					markup.body.scrollLeft = value;
				}
			}

			return this.getElement().scrollLeft;
		}
	}, {
		key: 'scrollTop',
		value: function scrollTop(value) {
			if (arguments.length) {
				this.getElementsCore('body').forEach(function (element) {
					return element.scrollTop = value;
				});
			}

			return this.getElement().scrollTop;
		}
	}, {
		key: 'canScrollTo',
		value: function canScrollTo(element, direction) {
			if (element) {
				switch (direction) {
					case 'left':
						{
							element = element.element;
							if (element) {
								var markup = this.markup;
								if (markup.table) {
									return isParentOf(markup.table, element);
								}
							}
							break;
						}
					case 'top':
						return true;
				}
			}

			return false;
		}
	}, {
		key: 'rect',
		value: function rect() {
			var markup = this.markup;
			if (markup.body) {
				return markup.body.getBoundingClientRect();
			}

			return _get(View.prototype.__proto__ || Object.getPrototypeOf(View.prototype), 'rect', this).call(this);
		}
	}, {
		key: 'getElementCore',
		value: function getElementCore() {
			return this.markup.body;
		}
	}, {
		key: 'isFocusedCore',
		value: function isFocusedCore(target) {
			var markup = this.markup;
			var current = markup.document.activeElement;
			return isParentOf(target, current);
		}
	}, {
		key: 'getElementsCore',
		value: function getElementsCore(key) {
			var markup = this.markup;
			return [key + '-left', key, key + '-right'].filter(function (key) {
				return markup.hasOwnProperty(key);
			}).map(function (key) {
				return markup[key];
			});
		}
	}]);

	return View;
}(__WEBPACK_IMPORTED_MODULE_0__unit__["a" /* Unit */]);

/***/ }),
/* 402 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__row__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__box__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cell_box__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__row_box__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__column_box__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fake__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__column_column_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirtualBox; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var VirtualBox = function (_Box) {
	_inherits(VirtualBox, _Box);

	function VirtualBox(context, model) {
		_classCallCheck(this, VirtualBox);

		var _this = _possibleConstructorReturn(this, (VirtualBox.__proto__ || Object.getPrototypeOf(VirtualBox)).call(this, context, model));

		_this.cellBox = new __WEBPACK_IMPORTED_MODULE_4__cell_box__["a" /* CellBox */](context);
		_this.rowBox = new __WEBPACK_IMPORTED_MODULE_5__row_box__["a" /* RowBox */](context);
		_this.columnBox = new __WEBPACK_IMPORTED_MODULE_6__column_box__["a" /* ColumnBox */](context);
		return _this;
	}

	_createClass(VirtualBox, [{
		key: 'addCellClass',
		value: function addCellClass(cell, name) {
			var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			if (force) {
				cell.addClassCore(name);
			} else {
				this.cellBox.addClass(cell, name);
			}
		}
	}, {
		key: 'removeCellClass',
		value: function removeCellClass(cell, name) {
			var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			if (force) {
				cell.removeClassCore(name);
			} else {
				this.cellBox.removeClass(cell, name);
			}
		}
	}, {
		key: 'addRowClass',
		value: function addRowClass(row, name) {
			var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			if (force) {
				row.addClassCore(name);
			} else {
				this.rowBox.addClass(row, name);
			}
		}
	}, {
		key: 'removeRowClass',
		value: function removeRowClass(row, name) {
			var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			if (force) {
				row.removeClassCore(name);
			} else {
				this.rowBox.removeClass(row, name);
			}
		}
	}, {
		key: 'addColumnClass',
		value: function addColumnClass(column, name) {
			var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			if (force) {
				column.addClassCore(name);
			} else {
				this.columnBox.addClass(column, name);
			}
		}
	}, {
		key: 'removeColumnClass',
		value: function removeColumnClass(column, name) {
			var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			if (force) {
				column.removeClassCore(name);
			} else {
				this.columnBox.removeClass(column, name);
			}
		}
	}, {
		key: 'rowCount',
		value: function rowCount() {
			return this.model.data().rows.length;
		}
	}, {
		key: 'columnCount',
		value: function columnCount() {
			var columns = this.model.view().columns;
			return __WEBPACK_IMPORTED_MODULE_8__column_column_service__["lineView"](columns).length;
		}
	}, {
		key: 'rowCore',
		value: function rowCore(index) {
			var viewIndex = this.context.mapper.rowToView(index);
			if (viewIndex >= 0 && viewIndex < _get(VirtualBox.prototype.__proto__ || Object.getPrototypeOf(VirtualBox.prototype), 'rowCount', this).call(this)) {
				return _get(VirtualBox.prototype.__proto__ || Object.getPrototypeOf(VirtualBox.prototype), 'rowCore', this).call(this, viewIndex);
			}

			var rowFactory = this.createRowCore.bind(this);
			return rowFactory(viewIndex, new __WEBPACK_IMPORTED_MODULE_7__fake__["b" /* FakeElement */]());
		}
	}, {
		key: 'cellCore',
		value: function cellCore(rowIndex, columnIndex) {
			var mapper = this.context.mapper;
			var viewRowIndex = mapper.rowToView(rowIndex);
			var viewColumnIndex = mapper.columnToView(columnIndex);
			if (viewRowIndex >= 0 && viewRowIndex < _get(VirtualBox.prototype.__proto__ || Object.getPrototypeOf(VirtualBox.prototype), 'rowCount', this).call(this)) {
				return _get(VirtualBox.prototype.__proto__ || Object.getPrototypeOf(VirtualBox.prototype), 'cellCore', this).call(this, viewRowIndex, viewColumnIndex);
			}

			var cellFactory = this.createCellCore.bind(this);
			return cellFactory(viewRowIndex, viewColumnIndex, new __WEBPACK_IMPORTED_MODULE_7__fake__["b" /* FakeElement */]());
		}
	}, {
		key: 'rowCellsCore',
		value: function rowCellsCore(index) {
			var viewIndex = this.context.mapper.rowToView(index);
			if (viewIndex >= 0 && viewIndex < _get(VirtualBox.prototype.__proto__ || Object.getPrototypeOf(VirtualBox.prototype), 'rowCount', this).call(this)) {
				return _get(VirtualBox.prototype.__proto__ || Object.getPrototypeOf(VirtualBox.prototype), 'rowCellsCore', this).call(this, viewIndex);
			}

			var cellFactory = this.createCellCore.bind(this);
			return _get(VirtualBox.prototype.__proto__ || Object.getPrototypeOf(VirtualBox.prototype), 'rowCellsCore', this).call(this, 0).map(function (cell, i) {
				return cellFactory(viewIndex, i, new __WEBPACK_IMPORTED_MODULE_7__fake__["b" /* FakeElement */]());
			});
		}
	}, {
		key: 'createRowCore',
		value: function createRowCore(index, element) {
			return new __WEBPACK_IMPORTED_MODULE_1__row__["a" /* VirtualRow */](this, index, element);
		}
	}, {
		key: 'createCellCore',
		value: function createCellCore(rowIndex, columnIndex, element) {
			return new __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* VirtualCell */](this, rowIndex, columnIndex, element);
		}
	}, {
		key: 'createColumnCore',
		value: function createColumnCore(index) {
			return new __WEBPACK_IMPORTED_MODULE_2__column__["a" /* VirtualColumn */](this, index);
		}
	}]);

	return VirtualBox;
}(__WEBPACK_IMPORTED_MODULE_3__box__["a" /* Box */]);

/***/ }),
/* 403 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_box__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellBox; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var CellBox = function (_StyleBox) {
	_inherits(CellBox, _StyleBox);

	function CellBox(context) {
		_classCallCheck(this, CellBox);

		return _possibleConstructorReturn(this, (CellBox.__proto__ || Object.getPrototypeOf(CellBox)).call(this, context));
	}

	_createClass(CellBox, [{
		key: 'key',
		value: function key(cell) {
			return cell.dataRowIndex + 'x' + cell.dataColumnIndex;
		}
	}]);

	return CellBox;
}(__WEBPACK_IMPORTED_MODULE_0__style_box__["a" /* StyleBox */]);

/***/ }),
/* 404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_column_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cell__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirtualCell; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var VirtualCell = function (_Cell) {
	_inherits(VirtualCell, _Cell);

	function VirtualCell(box, rowIndex, columnIndex) {
		var element = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

		_classCallCheck(this, VirtualCell);

		var _this = _possibleConstructorReturn(this, (VirtualCell.__proto__ || Object.getPrototypeOf(VirtualCell)).call(this, box.context, rowIndex, columnIndex, element));

		_this.box = box;

		var mapper = box.context.mapper;
		_this.dataRowIndex = mapper.viewToRow(rowIndex);
		_this.dataColumnIndex = mapper.viewToColumn(columnIndex);
		return _this;
	}

	_createClass(VirtualCell, [{
		key: 'addClass',
		value: function addClass(name) {
			var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			this.box.addCellClass(this, name, force);
		}
	}, {
		key: 'removeClass',
		value: function removeClass(name) {
			var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			this.box.removeCellClass(this, name, force);
		}
	}, {
		key: 'model',
		get: function get() {
			var rowIndex = this.dataRowIndex;
			var columnIndex = this.dataColumnIndex;
			if (rowIndex >= 0 && columnIndex >= 0) {
				var gridModel = this.box.model;
				var rows = gridModel.data().rows;
				var columns = __WEBPACK_IMPORTED_MODULE_1__column_column_service__["lineView"](gridModel.view().columns).map(function (v) {
					return v.model;
				});

				if (rows.length > rowIndex && columns.length > columnIndex) {
					var model = {
						rowIndex: rowIndex,
						columnIndex: columnIndex,
						row: rows[rowIndex],
						column: columns[columnIndex]
					};

					return new __WEBPACK_IMPORTED_MODULE_2__cell__["a" /* Cell */](model);
				}
			}

			return null;
		}
	}]);

	return VirtualCell;
}(__WEBPACK_IMPORTED_MODULE_0__cell__["a" /* Cell */]);

/***/ }),
/* 405 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_box__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnBox; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ColumnBox = function (_StyleBox) {
	_inherits(ColumnBox, _StyleBox);

	function ColumnBox(context) {
		_classCallCheck(this, ColumnBox);

		return _possibleConstructorReturn(this, (ColumnBox.__proto__ || Object.getPrototypeOf(ColumnBox)).call(this, context));
	}

	_createClass(ColumnBox, [{
		key: 'key',
		value: function key(column) {
			return column.dataIndex;
		}
	}]);

	return ColumnBox;
}(__WEBPACK_IMPORTED_MODULE_0__style_box__["a" /* StyleBox */]);

/***/ }),
/* 406 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column__ = __webpack_require__(142);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirtualColumn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var VirtualColumn = function (_Column) {
	_inherits(VirtualColumn, _Column);

	function VirtualColumn(box, index) {
		_classCallCheck(this, VirtualColumn);

		var _this = _possibleConstructorReturn(this, (VirtualColumn.__proto__ || Object.getPrototypeOf(VirtualColumn)).call(this, box, index));

		_this.box = box;

		var mapper = box.context.mapper;
		_this.dataIndex = mapper.viewToColumn(index);
		return _this;
	}

	_createClass(VirtualColumn, [{
		key: 'cells',
		value: function cells() {
			return this.box.columnCellsCore(this.dataIndex);
		}
	}, {
		key: 'cell',
		value: function cell(rowIndex) {
			return this.box.cell(rowIndex, this.dataIndex);
		}
	}, {
		key: 'addClass',
		value: function addClass(name) {
			var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			this.box.addColumnClass(this, name, force);
		}
	}, {
		key: 'removeClass',
		value: function removeClass(name) {
			var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			this.box.removeColumnClass(this, name, force);
		}
	}]);

	return VirtualColumn;
}(__WEBPACK_IMPORTED_MODULE_0__column__["a" /* Column */]);

/***/ }),
/* 407 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box__ = __webpack_require__(402);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__box__["a"]; });


/***/ }),
/* 408 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_box__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowBox; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var RowBox = function (_StyleBox) {
	_inherits(RowBox, _StyleBox);

	function RowBox(context) {
		_classCallCheck(this, RowBox);

		return _possibleConstructorReturn(this, (RowBox.__proto__ || Object.getPrototypeOf(RowBox)).call(this, context));
	}

	_createClass(RowBox, [{
		key: 'key',
		value: function key(row) {
			return row.dataIndex;
		}
	}]);

	return RowBox;
}(__WEBPACK_IMPORTED_MODULE_0__style_box__["a" /* StyleBox */]);

/***/ }),
/* 409 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__row__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__row__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirtualRow; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var VirtualRow = function (_Row) {
	_inherits(VirtualRow, _Row);

	function VirtualRow(box, index) {
		var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

		_classCallCheck(this, VirtualRow);

		var _this = _possibleConstructorReturn(this, (VirtualRow.__proto__ || Object.getPrototypeOf(VirtualRow)).call(this, box, index, element));

		var mapper = box.context.mapper;
		_this.dataIndex = mapper.viewToRow(index);
		return _this;
	}

	_createClass(VirtualRow, [{
		key: 'cells',
		value: function cells() {
			return this.box.rowCellsCore(this.dataIndex);
		}
	}, {
		key: 'cell',
		value: function cell(columnIndex) {
			return this.box.cellCore(this.dataIndex, columnIndex);
		}
	}, {
		key: 'addClass',
		value: function addClass(name) {
			var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			this.box.addRowClass(this, name, force);
		}
	}, {
		key: 'removeClass',
		value: function removeClass(name) {
			var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			this.box.removeRowClass(this, name, force);
		}
	}, {
		key: 'model',
		get: function get() {
			var index = this.dataIndex;
			if (index >= 0) {
				var gridModel = this.box.model;
				var rows = gridModel.data().rows;
				if (rows.length > index) {
					var model = { index: index, model: rows[index] };
					return new __WEBPACK_IMPORTED_MODULE_1__row__["a" /* Row */](model);
				}
			}

			return null;
		}
	}]);

	return VirtualRow;
}(__WEBPACK_IMPORTED_MODULE_0__row__["a" /* Row */]);

/***/ }),
/* 410 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DragModel = function DragModel() {
	_classCallCheck(this, DragModel);

	this.isActive = false;
};

/***/ }),
/* 411 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drag_model__ = __webpack_require__(410);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__drag_model__["a"]; });


/***/ }),
/* 412 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shortcut__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_cell_editor__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_value__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_label__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCellView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }









var EditCellView = function () {
	function EditCellView(model, table, commandManager) {
		_classCallCheck(this, EditCellView);

		this.model = model;
		this.table = table;

		this.editor = __WEBPACK_IMPORTED_MODULE_3__edit_cell_editor__["a" /* CellEditor */].empty;
		this.commandManager = commandManager;

		this.shortcut = model.action().shortcut;
		var commands = this.commands;
		this.shortcutOff = this.shortcut.register(commandManager, commands);

		this.enter = commands.get('enter');
		this.commit = commands.get('commit');
		this.cancel = commands.get('cancel');
		this.reset = commands.get('reset');
	}

	_createClass(EditCellView, [{
		key: 'contextFactory',
		value: function contextFactory(cell, value, label, tag) {
			return {
				column: cell.column,
				row: cell.row,
				columnIndex: cell.columnIndex,
				rowIndex: cell.rowIndex,
				oldValue: cell.value,
				newValue: arguments.length >= 2 ? value : cell.value,
				oldLabel: cell.label,
				newLabel: arguments.length >= 3 ? label : cell.label,
				unit: 'cell',
				tag: tag,
				valueFactory: __WEBPACK_IMPORTED_MODULE_4__services_value__["getFactory"],
				labelFactory: __WEBPACK_IMPORTED_MODULE_5__services_label__["getFactory"]
			};
		}
	}, {
		key: 'canEdit',
		value: function canEdit(cell) {
			if (cell) {
				return cell.column.canEdit && this.model.edit().mode === 'cell';
			}

			return false;
		}
	}, {
		key: 'shortcutFactory',
		value: function shortcutFactory(type) {
			var _this = this;

			var model = this.model;
			var edit = model.edit;
			return function () {
				var shortcuts = edit()[type + 'Shortcuts'];
				var cell = _this.editor.cell || model.navigation().cell;
				if (cell) {
					var _type = cell.column && cell.column.editor ? cell.column.editor : cell.column.type;
					if (shortcuts.hasOwnProperty(_type)) {
						return shortcuts[_type];
					}
				}

				return shortcuts['$default'];
			};
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.editor.reset();
			this.shortcutOff();
		}
	}, {
		key: 'commands',
		get: function get() {
			var _this2 = this;

			var model = this.model;
			var table = this.table;
			var commands = {
				enter: new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
					shortcut: this.shortcutFactory('enter'),
					canExecute: function canExecute(cell) {
						// TODO: source should be set up from outside
						var source = cell ? 'mouse' : 'keyboard';
						if (source === 'keyboard' && __WEBPACK_IMPORTED_MODULE_2__shortcut__["a" /* Shortcut */].isControl(_this2.shortcut.keyCode)) {
							return false;
						}

						cell = cell || model.navigation().cell;
						return cell && cell.column.canEdit && model.edit().mode === 'cell' && model.edit().state === 'view' && model.edit().enter.canExecute(_this2.contextFactory(cell));
					},
					execute: function execute(cell, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('cell.edit', 'edit mode');
						if (e) {
							e.stopImmediatePropagation();
						}

						// TODO: source should be set up from outside
						var source = cell ? 'mouse' : 'keyboard';
						cell = cell || model.navigation().cell;
						if (cell && model.edit().enter.execute(_this2.contextFactory(cell, cell.value, cell.label)) !== false) {
							_this2.editor = new __WEBPACK_IMPORTED_MODULE_3__edit_cell_editor__["a" /* CellEditor */](cell);
							if (source === 'keyboard' && __WEBPACK_IMPORTED_MODULE_2__shortcut__["a" /* Shortcut */].isPrintable(_this2.shortcut.keyCode)) {
								var parse = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__services__["parseFactory"])(cell.column.type);
								var value = __WEBPACK_IMPORTED_MODULE_2__shortcut__["a" /* Shortcut */].stringify(_this2.shortcut.keyCode);
								var typedValue = parse(value);
								if (typedValue !== null) {
									_this2.value = typedValue;
								}
							}

							model.edit({ state: 'edit' });
							cell.mode('edit');
							return true;
						}

						return false;
					}
				}),
				commit: new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
					shortcut: this.shortcutFactory('commit'),
					// TODO: add validation support
					canExecute: function canExecute(cell) {
						cell = cell || _this2.editor.cell || model.navigation().cell;
						return cell && cell.column.canEdit && model.edit().mode === 'cell' && model.edit().state === 'edit' && model.edit().commit.canExecute(_this2.contextFactory(cell));
					},
					execute: function execute(cell, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('cell.edit', 'commit');
						if (e) {
							e.stopImmediatePropagation();
						}

						cell = cell || _this2.editor.cell || model.navigation().cell;
						if (cell && model.edit().commit.execute(_this2.contextFactory(cell, _this2.value, _this2.label, _this2.tag)) !== false) {
							_this2.editor.commit();
							_this2.editor = __WEBPACK_IMPORTED_MODULE_3__edit_cell_editor__["a" /* CellEditor */].empty;
							model.edit({ state: 'view' });
							cell.mode('view');
							table.view.focus();
							return true;
						}

						return false;
					}
				}),
				cancel: new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
					shortcut: this.shortcutFactory('cancel'),
					canExecute: function canExecute(cell) {
						cell = cell || _this2.editor.cell || model.navigation().cell;
						return cell && cell.column.canEdit && model.edit().mode === 'cell' && model.edit().state === 'edit' && model.edit().cancel.canExecute(_this2.contextFactory(cell, _this2.value, _this2.label));
					},
					execute: function execute(cell, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('cell.edit', 'cancel');
						if (e) {
							e.stopImmediatePropagation();
						}

						cell = cell || _this2.editor.cell || model.navigation().cell;
						var label = _this2.label;
						var value = cell.value;

						if (cell && model.edit().cancel.execute(_this2.contextFactory(cell, value, label)) !== false) {
							_this2.editor.reset();
							_this2.editor = __WEBPACK_IMPORTED_MODULE_3__edit_cell_editor__["a" /* CellEditor */].empty;

							model.edit({ state: 'view' });
							cell.mode('view');
							table.view.focus();
							return true;
						}

						return false;
					}
				}),
				reset: new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
					canExecute: function canExecute(cell) {
						cell = cell || _this2.editor.cell || model.navigation().cell;
						return cell && cell.column.canEdit && model.edit().mode === 'cell' && model.edit().state === 'edit' && model.edit().reset.canExecute(_this2.contextFactory(cell, _this2.value, _this2.label));
					},
					execute: function execute(cell, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('cell.edit', 'reset');
						if (e) {
							e.stopImmediatePropagation();
						}

						cell = cell || _this2.editor.cell || model.navigation().cell;
						if (cell && model.edit().reset.execute(_this2.contextFactory(cell, _this2.value, _this2.label)) !== false) {
							_this2.editor.reset();
							return true;
						}

						return false;
					}
				})
			};

			return new Map(Object.entries(commands));
		}
	}, {
		key: 'fetch',
		get: function get() {
			return this.editor.fetch;
		}
	}, {
		key: 'value',
		get: function get() {
			return this.editor.value;
		},
		set: function set(value) {
			this.editor.value = value;
		}
	}, {
		key: 'label',
		get: function get() {
			return this.editor.label;
		},
		set: function set(label) {
			this.editor.label = label;
		}
	}, {
		key: 'column',
		get: function get() {
			return this.editor.column;
		}
	}, {
		key: 'options',
		get: function get() {
			return this.editor.options;
		}
	}]);

	return EditCellView;
}();

/***/ }),
/* 413 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var EditModel = function EditModel() {
	_classCallCheck(this, EditModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.mode = null; // cell | row
	this.state = 'view'; // view | edit
	this.enter = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]();
	this.commit = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]();
	this.cancel = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]();
	this.reset = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]();

	this.cancelShortcuts = {
		'$default': 'escape'
	};

	this.enterShortcuts = {
		'$default': '*',
		'row': 'F2|Enter',
		'form': 'F2|Enter'
	};

	this.commitShortcuts = {
		'$default': 'tab|shift+tab|enter',
		'date': 'ctrl+s',
		'array': 'ctrl+s',
		'reference': 'ctrl+s',
		'email': 'ctrl+s',
		'file': 'ctrl+s',
		'image': 'ctrl+s',
		'row': 'ctrl+s',
		'form': 'ctrl+s'
	};
};

/***/ }),
/* 414 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_cell_editor__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_value__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_label__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowEditor; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var RowEditorCore = function () {
	function RowEditorCore() {
		_classCallCheck(this, RowEditorCore);

		this.editors = [];
	}

	_createClass(RowEditorCore, [{
		key: 'commit',
		value: function commit() {}
	}, {
		key: 'reset',
		value: function reset() {}
	}]);

	return RowEditorCore;
}();

var CellView = function () {
	function CellView(row, column) {
		_classCallCheck(this, CellView);

		this.row = row;
		this.column = column;
	}

	_createClass(CellView, [{
		key: 'value',
		get: function get() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_value__["get"])(this.row, this.column);
		},
		set: function set(value) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_value__["set"])(this.row, this.column, value);
		}
	}, {
		key: 'label',
		get: function get() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services_label__["get"])(this.row, this.column);
		},
		set: function set(value) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services_label__["set"])(this.row, this.column, value);
		}
	}]);

	return CellView;
}();

var empty = new RowEditorCore();
var RowEditor = function (_RowEditorCore) {
	_inherits(RowEditor, _RowEditorCore);

	function RowEditor(row, columns) {
		_classCallCheck(this, RowEditor);

		var _this = _possibleConstructorReturn(this, (RowEditor.__proto__ || Object.getPrototypeOf(RowEditor)).call(this));

		_this.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["cloneDeep"])(row);
		_this.row = row;

		_this.editors = columns.filter(function (column) {
			return column.canEdit;
		}).map(function (column) {
			return new __WEBPACK_IMPORTED_MODULE_1__edit_cell_editor__["a" /* CellEditor */](new CellView(_this.value, column));
		});
		return _this;
	}

	_createClass(RowEditor, [{
		key: 'commit',
		value: function commit() {
			this.editors.forEach(function (editor) {
				return editor.commit();
			});
			Object.assign(this.row, this.value);
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.editors.forEach(function (editor) {
				return editor.reset();
			});
			this.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["cloneDeep"])(this.row);
		}
	}], [{
		key: 'empty',
		get: function get() {
			return empty;
		}
	}]);

	return RowEditor;
}(RowEditorCore);

/***/ }),
/* 415 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_row_editor__ = __webpack_require__(414);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRowView; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var EditRowView = function () {
	function EditRowView(model, table, commandManager) {
		_classCallCheck(this, EditRowView);

		this.model = model;
		this.table = table;
		this.editor = __WEBPACK_IMPORTED_MODULE_2__edit_row_editor__["a" /* RowEditor */].empty;

		var shortcut = model.action().shortcut;
		var commands = this.commands;
		this.shortcutOff = shortcut.register(commandManager, commands);

		this.enter = commands.get('enter');
		this.commit = commands.get('commit');
		this.cancel = commands.get('cancel');
		this.reset = commands.get('reset');
	}

	_createClass(EditRowView, [{
		key: 'contextFactory',
		value: function contextFactory(row) {
			return {
				row: row,
				current: this.editor.current,
				unit: 'row'
			};
		}
	}, {
		key: 'shortcutFactory',
		value: function shortcutFactory(type) {
			var edit = this.model.edit;
			return function () {
				var shortcuts = edit()[type + 'Shortcuts'];
				return shortcuts['row'] || shortcuts['$default'];
			};
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.shortcutOff();
		}
	}, {
		key: 'commands',
		get: function get() {
			var _this = this;

			var model = this.model;
			var commands = {
				enter: new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
					shortcut: this.shortcutFactory('enter'),
					canExecute: function canExecute(row) {
						row = row || model.navigation().row;
						return row && model.edit().mode === 'row' && model.edit().state === 'view' && model.edit().enter.canExecute(_this.contextFactory(row));
					},
					execute: function execute(row, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('row.edit', 'edit mode');
						if (e) {
							e.stopImmediatePropagation();
						}

						var columns = _this.model.data().columns;
						_this.editor = new __WEBPACK_IMPORTED_MODULE_2__edit_row_editor__["a" /* RowEditor */](row, columns);
						model.edit({ state: 'edit' });
					}
				}),
				commit: new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
					shortcut: this.shortcutFactory('commit'),
					// TODO: add validation support
					canExecute: function canExecute(row) {
						row = row || model.navigation().row;
						return row && model.edit().mode === 'row' && model.edit().state === 'edit' && model.edit().commit.canExecute(_this.contextFactory(row));
					},
					execute: function execute(cell, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('row.edit', 'commit');
						if (e) {
							e.stopImmediatePropagation();
						}

						_this.editor.commit();
						_this.editor = __WEBPACK_IMPORTED_MODULE_2__edit_row_editor__["a" /* RowEditor */].empty;
						model.edit({ state: 'view' });
					}
				}),
				cancel: new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
					shortcut: this.shortcutFactory('cancel'),
					canExecute: function canExecute(row) {
						row = row || model.navigation().row;
						return row && model.edit().mode === 'row' && model.edit().state === 'edit' && model.edit().cancel.canExecute(_this.contextFactory(row));
					},
					execute: function execute(row, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('cell.edit', 'cancel');
						if (e) {
							e.stopImmediatePropagation();
						}

						_this.editor.reset();
						_this.editor = __WEBPACK_IMPORTED_MODULE_2__edit_row_editor__["a" /* RowEditor */].empty;
						model.edit({ state: 'view' });
					}
				}),
				reset: new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
					canExecute: function canExecute(row) {
						row = row || model.navigation().row;
						return row && model.edit().mode === 'row' && model.edit().state === 'edit' && model.edit().reset.canExecute(_this.contextFactory(row));
					},
					execute: function execute(row, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('row.edit', 'reset');
						if (e) {
							e.stopImmediatePropagation();
						}

						if (row && model.edit().reset.execute(_this.contextFactory(row)) !== false) {
							_this.editor.reset();
							return false;
						}
					}
				})
			};
			return new Map(Object.entries(commands));
		}
	}]);

	return EditRowView;
}();

/***/ }),
/* 416 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_model__ = __webpack_require__(413);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__edit_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_view__ = __webpack_require__(148);
/* unused harmony namespace reexport */



/***/ }),
/* 417 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_value__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Csv; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var DELIMITER = ',';

function escape(value) {
	var result = '' + value;
	result = result.replace(/"/g, '""');
	result = /[\n",]/.test(result) ? '"' + result + '"' : result;
	return result;
}

var Csv = function () {
	function Csv() {
		_classCallCheck(this, Csv);
	}

	_createClass(Csv, [{
		key: 'write',
		value: function write(rows, columns) {
			var result = [];
			var values = [];
			var head = [];
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var column = _step.value;

					if (column.class === 'data') {
						values.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_value__["getFactory"])(column));
						head.push(escape(column.title));
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			result.push(head.join(DELIMITER));

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = rows[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var row = _step2.value;

					var line = [];
					var _iteratorNormalCompletion3 = true;
					var _didIteratorError3 = false;
					var _iteratorError3 = undefined;

					try {
						for (var _iterator3 = values[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
							var getValue = _step3.value;

							line.push(escape(getValue(row)));
						}
					} catch (err) {
						_didIteratorError3 = true;
						_iteratorError3 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion3 && _iterator3.return) {
								_iterator3.return();
							}
						} finally {
							if (_didIteratorError3) {
								throw _iteratorError3;
							}
						}
					}

					result.push(line.join(DELIMITER));
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			return result.join('\n');
		}
	}]);

	return Csv;
}();

/***/ }),
/* 418 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__csv__ = __webpack_require__(417);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Csv", function() { return __WEBPACK_IMPORTED_MODULE_0__csv__["a"]; });


/***/ }),
/* 419 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ExportModel = function ExportModel() {
	_classCallCheck(this, ExportModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
};

/***/ }),
/* 420 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__export_model__ = __webpack_require__(419);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__export_model__["a"]; });


/***/ }),
/* 421 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__json__ = __webpack_require__(422);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Json", function() { return __WEBPACK_IMPORTED_MODULE_0__json__["a"]; });


/***/ }),
/* 422 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__export_service__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Json; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



function updateTitles(rows, titles) {
	var result = [];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = rows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var row = _step.value;

			var obj = {};
			var values = Object.values(row);
			for (var i = 0; i < titles.length; i++) {
				obj[titles[i]] = values[i];
			}
			result.push(obj);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return JSON.stringify(result, '', 4);
}

var Json = function () {
	function Json() {
		_classCallCheck(this, Json);
	}

	_createClass(Json, [{
		key: 'write',
		value: function write(rows, columns) {
			var titles = [];
			var result = [];

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = rows[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var row = _step2.value;

					result.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__export_service__["a" /* flatView */])(row));
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = columns[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var column = _step3.value;

					titles.push(column.title);
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			return updateTitles(result, titles);
		}
	}]);

	return Json;
}();

/***/ }),
/* 423 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xml__ = __webpack_require__(424);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Xml", function() { return __WEBPACK_IMPORTED_MODULE_0__xml__["a"]; });


/***/ }),
/* 424 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Xml; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var begin = '<?xml version="1.0" encoding="UTF-8"?><root>';

function escape(value) {
	var result = '' + value;
	var characters = [/</g, />/g, /&/g, /'/g, /"/g, /\s\s+/g, /\n/g];
	var replacements = ['&lt;', '&gt;', '&amp;', '&apos;', '&quot;', ' ', '&#xA;'];
	for (var i = 0; i < characters.length; i++) {
		result = result.replace(characters[i], replacements[i]);
	}
	return result;
}

function objToXml(obj) {
	var result = '';

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = Object.entries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _slicedToArray(_step.value, 2),
			    prop = _step$value[0],
			    value = _step$value[1];

			if (obj.hasOwnProperty(prop)) {
				if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isObject"])(value) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isArray"])(value) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isString"])(value)) {
					result += '<' + prop + '>' + objToXml(value) + '</' + prop + '>';
				} else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isArray"])(value)) {
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var item = _step2.value;

							if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isString"])(item)) {
								result += '<' + prop + '>' + escape(item) + '</' + prop + '>';
							} else {
								result += '<' + prop + '>' + objToXml(item) + '</' + prop + '>';
							}
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				} else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isString"])(value)) {
					result += '<' + prop + '>' + escape(value) + '</' + prop + '>';
				}
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return result;
}

var Xml = function () {
	function Xml() {
		_classCallCheck(this, Xml);
	}

	_createClass(Xml, [{
		key: 'write',
		value: function write(rows) {
			var result = [begin];
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = rows[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var row = _step3.value;

					result.push(objToXml({ row: row }));
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			result.push('</root>');
			return result.join('');
		}
	}]);

	return Xml;
}();

/***/ }),
/* 425 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = castFactory;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



function castFactory(r) {
	var rt = typeof r === 'undefined' ? 'undefined' : _typeof(r),
	    asString = '' + r,
	    asNumber = +r,
	    asDate = new Date(r);

	return function (l) {
		var lt = typeof l === 'undefined' ? 'undefined' : _typeof(l);
		if (rt === lt) {
			return r;
		}

		switch (lt) {
			case 'number':
				return asNumber;
			case 'string':
				return asString;
			case 'date':
				return asDate;
			default:
				throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"])('cast.factory', 'Unsupported format ' + lt);
		}
	};
}

/***/ }),
/* 426 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = build;
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function build(filterBy) {
	var op = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'and';

	var expressions = [];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = Object.entries(filterBy)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _slicedToArray(_step.value, 2),
			    key = _step$value[0],
			    filter = _step$value[1];

			if (filter.expression) {
				expressions.push(filter.expression);
			}

			if (filter.items && filter.items.length) {
				expressions.push(toExpression(key, filter.items));
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return compile(expressions, op);
}

function toExpression(key, items) {
	return {
		kind: 'group',
		op: 'and',
		left: {
			kind: 'condition',
			left: key,
			op: 'in',
			right: Array.from(items)

		},
		right: null
	};
}

function compile(expressions, op) {
	var root = {
		kind: 'group',
		op: op,
		left: null,
		right: null
	};

	var current = root;

	expressions.forEach(function (expr) {
		if (!current.left) {
			current.left = expr;
		} else {
			var next = {
				kind: 'group',
				op: op,
				left: expr,
				right: null
			};

			current.right = next;
			current = next;
		}
	});

	return root.left ? root : null;
}

/***/ }),
/* 427 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expression_build__ = __webpack_require__(426);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__expression_build__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expression_visitor__ = __webpack_require__(149);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__predicate_visitor__ = __webpack_require__(428);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__predicate_visitor__["a"]; });




/***/ }),
/* 428 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cast_factory__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expression_visitor__ = __webpack_require__(149);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredicateVisitor; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PredicateVisitor = function (_Visitor) {
	_inherits(PredicateVisitor, _Visitor);

	function PredicateVisitor(valueFactory) {
		_classCallCheck(this, PredicateVisitor);

		var _this = _possibleConstructorReturn(this, (PredicateVisitor.__proto__ || Object.getPrototypeOf(PredicateVisitor)).call(this));

		_this.valueFactory = valueFactory;
		return _this;
	}

	_createClass(PredicateVisitor, [{
		key: 'visitGroup',
		value: function visitGroup(group) {
			if (group.right) {
				var lp = this.visit(group.left),
				    rp = this.visit(group.right);

				switch (group.op) {
					case 'and':
						return function (value) {
							return lp(value) && rp(value);
						};
					case 'or':
						return function (value) {
							return lp(value) || rp(value);
						};
					default:
						throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"])('predicate.visitor', 'Invalid operation ' + group.op);
				}
			} else {
				return this.visit(group.left);
			}
		}
	}, {
		key: 'visitCondition',
		value: function visitCondition(condition) {
			var r = condition.right,
			    name = condition.left,
			    getValue = this.valueFactory(name),
			    castAs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cast_factory__["a" /* castFactory */])(r);

			switch (condition.op) {
				case 'isNotNull':
					return function (l) {
						var v = getValue(l);
						return v || v === 0;
					};
				case 'isNull':
					return function (l) {
						var v = getValue(l);
						return !v && v !== 0;
					};
				case 'equals':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v);
						return v === r;
					};
				case 'notEquals':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v);
						return v !== r;
					};
				case 'greaterThanOrEquals':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v);
						return v >= r;
					};
				case 'greaterThan':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v);
						return v > r;
					};
				case 'lessThanOrEquals':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v);
						return v <= r;
					};
				case 'lessThan':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v);
						return v < r;
					};
				case 'between':
					return function (l) {
						var v = getValue(l);

						return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cast_factory__["a" /* castFactory */])(r[0])(v) <= v && v <= __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cast_factory__["a" /* castFactory */])(r[1])(v);
					};
				case 'in':
					return function (l) {
						var value = getValue(l);
						var v = !value && value !== 0 ? 'null' : value;

						var map = r.reduce(function (memo, item) {
							memo[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cast_factory__["a" /* castFactory */])(item)(v)] = true;
							return memo;
						}, {});

						return map.hasOwnProperty(v);
					};
				case 'like':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v);
						return v && ('' + v).toLowerCase().includes(('' + r).toLowerCase());
					};
				case 'notLike':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v);
						return v && !('' + v).toLowerCase().includes(('' + r).toLowerCase());
					};
				case 'startsWith':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v),
						    substr = v.substr(0, r.length);
						return r === substr;
					};
				case 'endsWith':
					return function (l) {
						var v = getValue(l),
						    r = castAs(v),
						    substr = v.slice(-r.length);
						return r === substr;
					};
				default:
					throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('predicate.visitor', 'Invalid operation ' + condition.op);
			}
		}
	}]);

	return PredicateVisitor;
}(__WEBPACK_IMPORTED_MODULE_2__expression_visitor__["a" /* Visitor */]);

/***/ }),
/* 429 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FetchModel = function FetchModel() {
	_classCallCheck(this, FetchModel);

	this.skip = 0;
};

/***/ }),
/* 430 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fetch_model__ = __webpack_require__(429);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fetch_model__["a"]; });


/***/ }),
/* 431 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__match__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var FilterModel = function FilterModel() {
	_classCallCheck(this, FilterModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.by = {};
	this.match = __WEBPACK_IMPORTED_MODULE_1__match__["a" /* match */];
	this.fetch = __WEBPACK_IMPORTED_MODULE_2__utility__["noop"];
	this.unit = 'default'; // default|row
};

/***/ }),
/* 432 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter_model__ = __webpack_require__(431);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__filter_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter_view__ = __webpack_require__(150);
/* unused harmony namespace reexport */



/***/ }),
/* 433 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expression__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_column_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = match;




function match(context) {
	var model = context.model;
	var expression = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__expression__["a" /* build */])(model.filter().by);
	if (expression !== null) {
		var valueFactory = context.valueFactory;
		var columnMap = __WEBPACK_IMPORTED_MODULE_1__column_column_service__["map"](model.data().columns);
		var visitor = new __WEBPACK_IMPORTED_MODULE_0__expression__["b" /* PredicateVisitor */](function (key) {
			return valueFactory(columnMap[key]);
		});
		return visitor.visit(expression);
	}

	return __WEBPACK_IMPORTED_MODULE_2__utility__["yes"];
}

/***/ }),
/* 434 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FocusModel = function FocusModel() {
	_classCallCheck(this, FocusModel);

	this.rowIndex = -1;
	this.columnIndex = -1;
};

/***/ }),
/* 435 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__focus_model__ = __webpack_require__(434);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__focus_model__["a"]; });


/***/ }),
/* 436 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var FootModel = function FootModel() {
	_classCallCheck(this, FootModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* EnumerableResource */]();
	this.cache = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Cache"]();
};

/***/ }),
/* 437 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foot_model__ = __webpack_require__(436);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__foot_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foot_view__ = __webpack_require__(151);
/* unused harmony namespace reexport */



/***/ }),
/* 438 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var GridModel = function GridModel() {
	_classCallCheck(this, GridModel);

	this.id = 'q-grid-' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services__["guid"])();
	this.status = 'unbound'; //unbound | bound
};

/***/ }),
/* 439 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_model__ = __webpack_require__(438);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__grid_model__["a"]; });


/***/ }),
/* 440 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(17);
/* harmony export (immutable) */ __webpack_exports__["a"] = groupBuilder;




function groupBuilder(model) {
	var viewState = model.view();
	var dataState = model.data();

	var pivot = model.view().pivot;
	var pivotRows = pivot.rows;
	var pivotRowLength = pivotRows[0].length;

	var groupBy = model.group().by;
	var groupByLength = groupBy.length;

	var columnMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_service__["map"])(dataState.columns);
	var rows = dataState.rows;
	var nodes = viewState.rows;

	return function (valueFactory) {
		var result = [];

		var _loop = function _loop(i, nodeLength) {
			var node = nodes[i];
			var key = groupBy[Math.min(node.level, groupByLength - 1)];
			var column = columnMap[key];
			if (!column) {
				throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["AppError"]('view.pivot', 'Invalid key "' + key + '"');
			}

			var aggregation = column.aggregation || 'count';
			if (!__WEBPACK_IMPORTED_MODULE_2__services__["Aggregation"].hasOwnProperty(aggregation)) {
				throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["AppError"]('view.pivot', 'Aggregation ' + aggregation + ' is not registered');
			}

			var getValue = valueFactory(column);
			var aggregate = __WEBPACK_IMPORTED_MODULE_2__services__["Aggregation"][aggregation];

			var aggRow = new Array(pivotRowLength);
			for (var j = 0, rowLength = node.rows.length; j < rowLength; j++) {
				var rowIndex = node.rows[j];
				var pivotRow = pivotRows[rowIndex];
				var row = rows[rowIndex];
				for (var k = 0; k < pivotRowLength; k++) {
					if (pivotRow[k]) {
						var value = aggRow[k];
						if (!value) {
							value = [];
							aggRow[k] = value;
						}
						value.push(row);
					}
				}
			}

			result.push(aggRow.map(function (rs) {
				return aggregate(rs, getValue, column.aggregationOptions);
			}));
		};

		for (var i = 0, nodeLength = nodes.length; i < nodeLength; i++) {
			_loop(i, nodeLength);
		}

		return result;
	};
}

/***/ }),
/* 441 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var GroupModel = function GroupModel() {
	_classCallCheck(this, GroupModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.by = [];
	this.shortcut = {
		toggle: 'space'
	};
	this.toggle = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]();
};

/***/ }),
/* 442 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var HeadModel = function HeadModel() {
	_classCallCheck(this, HeadModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.cache = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Cache"]();
};

/***/ }),
/* 443 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__head_model__ = __webpack_require__(442);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__head_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__head_view__ = __webpack_require__(154);
/* unused harmony namespace reexport */



/***/ }),
/* 444 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HighlightModel = function HighlightModel() {
	_classCallCheck(this, HighlightModel);

	this.columns = [];
	this.rows = [];
};

/***/ }),
/* 445 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__highlight_model__ = __webpack_require__(444);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__highlight_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__highlight_view__ = __webpack_require__(155);
/* unused harmony namespace reexport */



/***/ }),
/* 446 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ImportModel = function ImportModel() {
	_classCallCheck(this, ImportModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
};

/***/ }),
/* 447 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__import_model__ = __webpack_require__(446);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__import_model__["a"]; });


/***/ }),
/* 448 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__head__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__body__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__focus__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__column_list__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__row__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__selection__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__foot__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sort__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__group__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pivot__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__plugin__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__edit__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__toolbar__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__layer__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pagination__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__progress__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__highlight__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__visibility__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__filter__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__drag__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__style__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__scroll__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__export__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__import__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__action__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__fetch__ = __webpack_require__(430);
/* harmony export (immutable) */ __webpack_exports__["setup"] = setup;
































function setup(model) {
	model.register('grid', __WEBPACK_IMPORTED_MODULE_0__grid__["a" /* GridModel */]).register('view', __WEBPACK_IMPORTED_MODULE_1__view__["b" /* ViewModel */]).register('data', __WEBPACK_IMPORTED_MODULE_2__data__["a" /* DataModel */]).register('selection', __WEBPACK_IMPORTED_MODULE_10__selection__["a" /* SelectionModel */]).register('head', __WEBPACK_IMPORTED_MODULE_3__head__["a" /* HeadModel */]).register('body', __WEBPACK_IMPORTED_MODULE_4__body__["a" /* BodyModel */]).register('navigation', __WEBPACK_IMPORTED_MODULE_6__navigation__["a" /* NavigationModel */]).register('focus', __WEBPACK_IMPORTED_MODULE_7__focus__["a" /* FocusModel */]).register('foot', __WEBPACK_IMPORTED_MODULE_11__foot__["a" /* FootModel */]).register('layout', __WEBPACK_IMPORTED_MODULE_5__layout__["a" /* LayoutModel */]).register('row', __WEBPACK_IMPORTED_MODULE_9__row__["b" /* RowModel */]).register('columnList', __WEBPACK_IMPORTED_MODULE_8__column_list__["c" /* ColumnListModel */]).register('sort', __WEBPACK_IMPORTED_MODULE_12__sort__["a" /* SortModel */]).register('group', __WEBPACK_IMPORTED_MODULE_13__group__["b" /* GroupModel */]).register('pivot', __WEBPACK_IMPORTED_MODULE_14__pivot__["b" /* PivotModel */]).register('edit', __WEBPACK_IMPORTED_MODULE_16__edit__["a" /* EditModel */]).register('plugin', __WEBPACK_IMPORTED_MODULE_15__plugin__["PluginModel"]).register('toolbar', __WEBPACK_IMPORTED_MODULE_17__toolbar__["a" /* ToolbarModel */]).register('layer', __WEBPACK_IMPORTED_MODULE_18__layer__["a" /* LayerModel */]).register('pagination', __WEBPACK_IMPORTED_MODULE_19__pagination__["a" /* PaginationModel */]).register('progress', __WEBPACK_IMPORTED_MODULE_20__progress__["a" /* ProgressModel */]).register('highlight', __WEBPACK_IMPORTED_MODULE_21__highlight__["a" /* HighlightModel */]).register('visibility', __WEBPACK_IMPORTED_MODULE_22__visibility__["a" /* VisibilityModel */]).register('filter', __WEBPACK_IMPORTED_MODULE_23__filter__["a" /* FilterModel */]).register('drag', __WEBPACK_IMPORTED_MODULE_24__drag__["a" /* DragModel */]).register('style', __WEBPACK_IMPORTED_MODULE_25__style__["a" /* StyleModel */]).register('scroll', __WEBPACK_IMPORTED_MODULE_26__scroll__["a" /* ScrollModel */]).register('export', __WEBPACK_IMPORTED_MODULE_27__export__["a" /* ExportModel */]).register('import', __WEBPACK_IMPORTED_MODULE_28__import__["a" /* ImportModel */]).register('action', __WEBPACK_IMPORTED_MODULE_29__action__["a" /* ActionModel */]).register('fetch', __WEBPACK_IMPORTED_MODULE_30__fetch__["a" /* FetchModel */]);
}

/***/ }),
/* 449 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cache; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Cache = function () {
	function Cache() {
		_classCallCheck(this, Cache);

		this.items = {};
	}

	_createClass(Cache, [{
		key: 'set',
		value: function set(key, value) {
			this.items[key] = value;
		}
	}, {
		key: 'get',
		value: function get(key) {
			var entry = this.find(key);
			if (!entry) {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('cache.get', 'Entry with key was not found "' + key + '"');
			}

			return entry;
		}
	}, {
		key: 'has',
		value: function has(key) {
			var items = this.items;
			return items.hasOwnProperty(key);
		}
	}, {
		key: 'find',
		value: function find(key) {
			var items = this.items;
			if (items.hasOwnProperty(key)) {
				return items[key];
			}

			return null;
		}
	}, {
		key: 'remove',
		value: function remove(key) {
			if (!this.items.hasOwnProperty(key)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('cache.remove', 'Entry with key was not found "' + key + '"');
			}

			delete this.items[key];
		}
	}, {
		key: 'clear',
		value: function clear() {
			this.items = {};
		}
	}]);

	return Cache;
}();

/***/ }),
/* 450 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fetch; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Fetch = function () {
	function Fetch(select) {
		_classCallCheck(this, Fetch);

		this.select = select;
		this.busy = null;
		this.result = null;
	}

	_createClass(Fetch, [{
		key: 'run',
		value: function run(item) {
			var _this = this,
			    _arguments = arguments;

			var select = this.select;

			this.result = null;
			var alive = true;
			this.busy = new Promise(function (resolveBusy, rejectBusy) {
				var resolve = function resolve(data) {
					if (alive) {
						_this.result = data;
						resolveBusy(data);
					}
				};

				if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(select)) {
					var deferred = {
						resolve: resolve,
						reject: rejectBusy
					};

					var args = Array.from(_arguments).slice(1) || [];
					var result = select.apply(undefined, [item, deferred].concat(_toConsumableArray(args)));
					if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isUndefined"])(result)) {
						if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(result.then)) {
							// when options.fetch returns promise
							result.then(resolve);
							if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(result.catch)) {
								result.catch(rejectBusy);
							}
						} else {
							// when options.fetch return result
							resolve(result);
						}
					}
					// when user should invoke d.resolve or d.reject
				} else {
					// when options.fetch is result itself
					resolve(select);
				}
			});

			return function () {
				_this.busy = null;
				alive = false;
			};
		}
	}]);

	return Fetch;
}();

/***/ }),
/* 451 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelBinder; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var ModelBinder = function () {
	function ModelBinder(source) {
		_classCallCheck(this, ModelBinder);

		this.source = source;
		this.off = __WEBPACK_IMPORTED_MODULE_0__utility__["noop"];
	}

	_createClass(ModelBinder, [{
		key: 'bind',
		value: function bind(model, names) {
			var _this = this;

			var run = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

			this.off();
			var source = this.source;

			if (model) {
				var commits = [];
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					var _loop = function _loop() {
						var name = _step.value;

						var doBind = function doBind(e) {
							__WEBPACK_IMPORTED_MODULE_1__log__["a" /* Log */].info('model.bind', 'to ctrl "' + name + '[' + Object.keys(e.changes).join(', ') + ']"');

							var _iteratorNormalCompletion2 = true;
							var _didIteratorError2 = false;
							var _iteratorError2 = undefined;

							try {
								for (var _iterator2 = Object.keys(e.changes)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
									var key = _step2.value;

									var sourceKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["toCamelCase"])(name, key);
									if (source.hasOwnProperty(sourceKey)) {
										source[sourceKey] = e.changes[key].newValue;
									}
								}
							} catch (err) {
								_didIteratorError2 = true;
								_iteratorError2 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion2 && _iterator2.return) {
										_iterator2.return();
									}
								} finally {
									if (_didIteratorError2) {
										throw _iteratorError2;
									}
								}
							}
						};

						var state = model[name];
						if (run) {
							var value = state();
							doBind({
								changes: {
									newValue: value,
									oldValue: value
								}
							});
						}

						_this.off = model[name + 'Changed'].on(doBind);

						commits.push(function () {
							__WEBPACK_IMPORTED_MODULE_1__log__["a" /* Log */].info('model.bind', 'to model "' + name + '"');

							var oldState = state();
							var newState = {};
							var _iteratorNormalCompletion3 = true;
							var _didIteratorError3 = false;
							var _iteratorError3 = undefined;

							try {
								for (var _iterator3 = Object.keys(oldState)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
									var key = _step3.value;

									var sourceKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["toCamelCase"])(name, key);
									if (source.hasOwnProperty(sourceKey)) {
										var _value = source[sourceKey];
										if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isUndefined"])(_value)) {
											newState[key] = _value;
										}
									}
								}
							} catch (err) {
								_didIteratorError3 = true;
								_iteratorError3 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion3 && _iterator3.return) {
										_iterator3.return();
									}
								} finally {
									if (_didIteratorError3) {
										throw _iteratorError3;
									}
								}
							}

							state(newState);
						});
					};

					for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						_loop();
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				return function () {
					return commits.forEach(function (commit) {
						return commit();
					});
				};
			}

			this.off = __WEBPACK_IMPORTED_MODULE_0__utility__["noop"];
			return __WEBPACK_IMPORTED_MODULE_0__utility__["noop"];
		}
	}]);

	return ModelBinder;
}();

/***/ }),
/* 452 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guard__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utility__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var models = {};
var close = false;

var Model = function () {
	function Model() {
		var _this = this;

		_classCallCheck(this, Model);

		close = true;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			var _loop = function _loop() {
				var name = _step.value;

				var model = new models[name]();
				var changeSet = new Set();
				var watchArg = function watchArg() {
					var changes = Array.from(changeSet.values()).reduce(function (memo, key) {
						var value = model[key];
						memo[key] = { newValue: value, oldValue: value };
						return memo;
					}, {});

					return {
						state: model,
						hasChanges: changes.hasOwnProperty.bind(changes),
						changes: changes,
						tag: {},
						source: 'watch'
					};
				};

				var event = new __WEBPACK_IMPORTED_MODULE_0__event__["a" /* Event */](watchArg);
				_this[name + 'Changed'] = event;
				_this[name] = function (state, tag) {
					var length = arguments.length;
					if (length) {
						if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utility__["isObject"])(state)) {
							throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */]('model.' + name, '"' + state + '" is not a valid type, should be an object');
						}

						var hasChanges = false;
						var changes = {};
						var keys = Object.keys(state);
						for (var i = 0, keyLength = keys.length; i < keyLength; i++) {
							var key = keys[i];
							if (!model.hasOwnProperty(key)) {
								throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */]('model.' + name, '"' + key + '" is not a valid key, only [' + Object.keys(model).join(', ') + '] keys are supported');
							}

							var newValue = state[key];
							var oldValue = model[key];
							if (newValue !== oldValue) {
								__WEBPACK_IMPORTED_MODULE_3__log__["a" /* Log */].info('model', 'value changed - "' + name + '.' + key + '"');
								__WEBPACK_IMPORTED_MODULE_2__guard__["a" /* Guard */].notUndefined(newValue, 'model.' + name + '.' + key);

								model[key] = newValue;
								hasChanges = true;
								changes[key] = {
									newValue: newValue,
									oldValue: oldValue
								};

								changeSet.add(key);
							} else {
								__WEBPACK_IMPORTED_MODULE_3__log__["a" /* Log */].warn('model', 'value was not changed - "' + name + '.' + key + '"');
							}
						}

						if (hasChanges) {
							event.emit({
								state: model,
								hasChanges: changes.hasOwnProperty.bind(changes),
								changes: changes,
								tag: length > 1 ? tag : {},
								source: 'emit'
							});
						}
						return this;
					}

					return model;
				};
			};

			for (var _iterator = Object.keys(models)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				_loop();
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}

	_createClass(Model, null, [{
		key: 'dispose',
		value: function dispose(model) {
			var lifecycle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = Object.keys(model)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var _name = _step2.value;

					var entry = model[_name];
					if (entry instanceof __WEBPACK_IMPORTED_MODULE_0__event__["a" /* Event */]) {
						entry.dispose(lifecycle);
					}
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
		}
	}, {
		key: 'register',
		value: function register(name, model) {
			if (models.hasOwnProperty(name)) {
				throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */]('model', '"' + name + '" is already registered');
			}

			if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utility__["isFunction"])(model)) {
				throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */]('model.' + name, '"' + model + '" is not a valid type, should be an constructor function');
			}

			if (close) {
				throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */]('model.' + name, 'can\'t register, registration was closed');
			}

			models[name] = model;
			return Model;
		}
	}]);

	return Model;
}();

/***/ }),
/* 453 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CharReader */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CharReader = function () {
	function CharReader(text) {
		_classCallCheck(this, CharReader);

		this.text = text || '';
		this.peeks = [];
		this.position = 0;
		this.length = this.text.length;
	}

	_createClass(CharReader, [{
		key: 'read',
		value: function read() {
			var peeks = this.peeks;
			if (peeks.length > 0) {
				return peeks.pop();
			}

			var nextPosition = this.position + 1;
			if (nextPosition < this.length) {
				var c = this.text[this.position];
				this.position = nextPosition;
				return c;
			}

			return CharReader.eof;
		}
	}, {
		key: 'peek',
		value: function peek() {
			return this.peekCore(0);
		}
	}, {
		key: 'peekPeek',
		value: function peekPeek() {
			return this.peekCore(1);
		}
	}, {
		key: 'peekCore',
		value: function peekCore(offset) {
			var peeks = this.peeks;
			if (offset < peeks.length) {
				return peeks[offset];
			}

			var length = this.length;
			for (var i = peeks.length; i <= offset; i++) {
				var nextPosition = this.position + 1;
				if (nextPosition >= length) {
					return CharReader.eof;
				}

				var c = this.text[this.position];
				this.position = nextPosition;
				peeks.push(c);
			}

			return peeks[offset];
		}
	}, {
		key: 'seek',
		value: function seek(offset) {
			var peeks = this.peeks;
			var peekCount = peeks.length;
			peeks.splice(0, Math.Min(offset, peekCount));
			offset -= peekCount;
			while (--offset >= 0) {
				this.read();
			}

			return this.peek();
		}
	}], [{
		key: 'eof',
		get: function get() {
			return undefined;
		}
	}]);

	return CharReader;
}();

/***/ }),
/* 454 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__char_reader__ = __webpack_require__(453);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keyboard__ = __webpack_require__(455);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__keyboard__["a"]; });



/***/ }),
/* 455 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keyboard; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var controlSet = new Set(['shift', 'ctrl', 'alt', 'pause', 'break', 'capslock', 'escape', 'insert', 'left', 'right', 'end', 'home', 'pageup', 'pagedown', 'up', 'down', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', 'numlock', 'scrolllock']);

var nonPrintableSet = new Set(['enter']);

var codeMap = new Map().set(8, 'backspace').set(9, 'tab').set(13, 'enter').set(16, 'shift').set(17, 'ctrl').set(20, 'capslock').set(27, 'escape').set(32, 'space').set(33, 'pageup').set(34, 'pagedown').set(35, 'end').set(36, 'home').set(37, 'left').set(38, 'up').set(39, 'right').set(40, 'down').set(45, 'insert').set(46, 'delete').set(112, 'f1').set(113, 'f2').set(114, 'f3').set(115, 'f4').set(116, 'f5').set(117, 'f6').set(118, 'f7').set(119, 'f8').set(120, 'f9').set(121, 'f10').set(122, 'f11').set(123, 'f12').set(144, 'numlock').set(145, 'scrolllock');

var codeSet = new Set(codeMap.values());

var printableMap = new Map().set('space', ' ');

var Keyboard = function () {
	function Keyboard() {
		_classCallCheck(this, Keyboard);
	}

	_createClass(Keyboard, null, [{
		key: 'isPrintable',
		value: function isPrintable(code) {
			return !nonPrintableSet.has(code) && !Keyboard.isControl(code);
		}
	}, {
		key: 'isControl',
		value: function isControl(code) {
			return controlSet.has(code);
		}
	}, {
		key: 'stringify',
		value: function stringify(code, key) {
			if (codeSet.has(code)) {
				return printableMap.get(code) || '';
			}

			return key;
		}
	}, {
		key: 'translate',
		value: function translate(code) {
			return codeMap.get(code) || String.fromCharCode(code);
		}
	}]);

	return Keyboard;
}();

/***/ }),
/* 456 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layer_model__ = __webpack_require__(457);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__layer_model__["a"]; });


/***/ }),
/* 457 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var LayerModel = function LayerModel() {
	_classCallCheck(this, LayerModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
};

/***/ }),
/* 458 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_model__ = __webpack_require__(459);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__layout_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_view__ = __webpack_require__(158);
/* unused harmony namespace reexport */



/***/ }),
/* 459 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LayoutModel = function LayoutModel() {
	_classCallCheck(this, LayoutModel);

	this.columns = {};
};

/***/ }),
/* 460 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navigation_model__ = __webpack_require__(462);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__navigation_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_view__ = __webpack_require__(159);
/* unused harmony namespace reexport */



/***/ }),
/* 461 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__command__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Navigation; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Navigation = function () {
	function Navigation(model, table) {
		_classCallCheck(this, Navigation);

		this.model = model;
		this.table = table;
	}

	_createClass(Navigation, [{
		key: 'positon',
		value: function positon(y, direction) {
			var body = this.table.body;
			var index = 0;
			var offset = 0;
			var lastRow = this.lastRow;

			// TODO: improve performance
			while (index <= lastRow && offset <= y) {
				offset += body.row(index).height();
				index++;
			}

			if (direction === 'down' && body.row(index)) {
				offset -= body.row(index).height();
				index--;
			}

			return {
				row: Math.max(this.firstRow, Math.min(lastRow, index)),
				offset: offset
			};
		}
	}, {
		key: 'goTo',
		value: function goTo(row, column) {
			var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'navigation';

			var cell = this.cell(row, column);
			if (!cell) {
				// TODO: make it better, right it just a huck for row-details,
				// need to support rowspan and colspan
				cell = this.cell(row, this.firstColumn);
			}

			this.model.navigation({ cell: cell }, { source: source });
		}
	}, {
		key: 'cell',
		value: function cell(row, column) {
			return this.table.body.cell(row, column).model;
		}
	}, {
		key: 'columns',
		get: function get() {
			var columns = this.table.data.columns();
			var indicies = [];
			for (var i = 0, length = columns.length; i < length; i++) {
				var column = columns[i];
				if (column.canFocus) {
					indicies.push(i);
				}
			}
			return indicies;
		}
	}, {
		key: 'currentColumn',
		get: function get() {
			var columns = this.columns;
			if (!columns.length) {
				return -1;
			}

			var column = this.model.navigation().columnIndex;
			var index = columns.indexOf(column);
			return columns[Math.max(0, index)];
		}
	}, {
		key: 'nextColumn',
		get: function get() {
			var columns = this.columns;
			if (!columns.length) {
				return -1;
			}

			var column = this.model.navigation().columnIndex;
			var index = columns.indexOf(column);
			return index < columns.length - 1 ? columns[index + 1] : -1;
		}
	}, {
		key: 'prevColumn',
		get: function get() {
			var columns = this.columns;
			if (!columns.length) {
				return -1;
			}

			var column = this.model.navigation().columnIndex;
			var index = columns.indexOf(column);
			return index > 0 ? columns[index - 1] : -1;
		}
	}, {
		key: 'lastColumn',
		get: function get() {
			var columns = this.columns;
			if (!columns.length) {
				return -1;
			}

			return columns[columns.length - 1];
		}
	}, {
		key: 'firstColumn',
		get: function get() {
			var columns = this.columns;
			if (!columns.length) {
				return -1;
			}

			return columns[0];
		}
	}, {
		key: 'currentRow',
		get: function get() {
			return this.model.navigation().rowIndex;
		}
	}, {
		key: 'nextRow',
		get: function get() {
			var row = this.model.navigation().rowIndex + 1;
			return row <= this.lastRow ? row : -1;
		}
	}, {
		key: 'prevRow',
		get: function get() {
			var row = this.model.navigation().rowIndex - 1;
			return row >= 0 ? row : -1;
		}
	}, {
		key: 'firstRow',
		get: function get() {
			return 0;
		}
	}, {
		key: 'lastRow',
		get: function get() {
			return this.table.body.rowCount() - 1;
		}
	}, {
		key: 'commands',
		get: function get() {
			var _this = this;

			var model = this.model;
			var table = this.table;
			var shortcut = model.navigation().shortcut;
			var inViewState = function inViewState() {
				return model.edit().state === 'view';
			};

			var commands = {
				goDown: new __WEBPACK_IMPORTED_MODULE_0__command__["Command"]({
					shortcut: shortcut.down,
					canExecute: function canExecute() {
						return inViewState() && _this.nextRow >= 0;
					},
					execute: function execute() {
						return _this.goTo(_this.nextRow, _this.currentColumn);
					}
				}),
				goUp: new __WEBPACK_IMPORTED_MODULE_0__command__["Command"]({
					shortcut: shortcut.up,
					canExecute: function canExecute() {
						return inViewState() && _this.prevRow >= 0;
					},
					execute: function execute() {
						return _this.goTo(_this.prevRow, _this.currentColumn);
					}
				}),
				goRight: new __WEBPACK_IMPORTED_MODULE_0__command__["Command"]({
					shortcut: shortcut.right,
					canExecute: function canExecute() {
						return inViewState() && _this.nextColumn >= 0;
					},
					execute: function execute() {
						return _this.goTo(_this.currentRow, _this.nextColumn);
					}
				}),
				goLeft: new __WEBPACK_IMPORTED_MODULE_0__command__["Command"]({
					shortcut: shortcut.left,
					canExecute: function canExecute() {
						return inViewState() && _this.prevColumn >= 0;
					},
					execute: function execute() {
						return _this.goTo(_this.currentRow, _this.prevColumn);
					}
				}),
				goNext: new __WEBPACK_IMPORTED_MODULE_0__command__["Command"]({
					shortcut: shortcut.next,
					canExecute: function canExecute() {
						var hasNextColumn = _this.nextColumn >= 0;
						var hasNextRow = _this.nextRow >= 0;
						return hasNextColumn || hasNextRow;
					},
					execute: function execute() {
						var hasNextColumn = _this.nextColumn >= 0;
						if (!hasNextColumn) {
							_this.goTo(_this.nextRow, _this.firstColumn);
							return;
						}

						_this.goTo(_this.currentRow, _this.nextColumn);
					}
				}),
				goPrevious: new __WEBPACK_IMPORTED_MODULE_0__command__["Command"]({
					shortcut: shortcut.previous,
					canExecute: function canExecute() {
						var hasPrevColumn = _this.prevColumn >= 0;
						var hasPrevRow = _this.prevRow >= 0;
						return hasPrevColumn || hasPrevRow;
					},
					execute: function execute() {
						var hasPrevColumn = _this.prevColumn >= 0;
						if (!hasPrevColumn) {
							_this.goTo(_this.prevRow, _this.lastColumn);
							return;
						}

						_this.goTo(_this.currentRow, _this.prevColumn);
					}
				}),
				home: new __WEBPACK_IMPORTED_MODULE_0__command__["Command"]({
					shortcut: shortcut.home,
					canExecute: function canExecute() {
						return inViewState() && _this.prevRow >= 0;
					},
					execute: function execute() {
						return _this.goTo(_this.firstRow, _this.currentColumn);
					}
				}),
				end: new __WEBPACK_IMPORTED_MODULE_0__command__["Command"]({
					shortcut: shortcut.end,
					canExecute: function canExecute() {
						return inViewState() && _this.nextRow >= 0;
					},
					execute: function execute() {
						return _this.goTo(_this.lastRow, _this.currentColumn);
					}
				}),
				pageUp: new __WEBPACK_IMPORTED_MODULE_0__command__["Command"]({
					shortcut: shortcut.pageUp,
					canExecute: function canExecute() {
						return inViewState() && _this.prevRow >= 0;
					},
					execute: function execute() {
						var view = table.view;
						var position = _this.positon(view.scrollTop() - view.height(), 'up');
						view.scrollTop(position.offset);
						_this.goTo(position.row, _this.currentColumn, 'navigation.scroll');
					}
				}),
				pageDown: new __WEBPACK_IMPORTED_MODULE_0__command__["Command"]({
					shortcut: shortcut.pageDown,
					canExecute: function canExecute() {
						return inViewState() && _this.nextRow >= 0;
					},
					execute: function execute() {
						var view = table.view;
						var position = _this.positon(view.scrollTop() + view.height(), 'down');
						view.scrollTop(position.offset);
						_this.goTo(position.row, _this.currentColumn, 'navigation.scroll');
					}
				})
			};

			return new Map(Object.entries(commands));
		}
	}]);

	return Navigation;
}();

/***/ }),
/* 462 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationModel; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavigationModel = function () {
	function NavigationModel() {
		_classCallCheck(this, NavigationModel);

		this.cell = null;
		this.shortcut = {
			up: 'up',
			down: 'down',
			left: 'left',
			right: 'right',
			next: 'tab',
			previous: 'shift+tab',
			home: 'home',
			end: 'end',
			pageUp: 'pageUp',
			pageDown: 'pageDown'
		};
	}

	_createClass(NavigationModel, [{
		key: 'rowIndex',
		get: function get() {
			return this.cell ? this.cell.rowIndex : -1;
		}
	}, {
		key: 'columnIndex',
		get: function get() {
			return this.cell ? this.cell.columnIndex : -1;
		}
	}, {
		key: 'row',
		get: function get() {
			return this.cell ? this.cell.row : null;
		}
	}, {
		key: 'column',
		get: function get() {
			return this.column ? this.cell.column : null;
		}
	}]);

	return NavigationModel;
}();

/***/ }),
/* 463 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node__ = __webpack_require__(89);
/* harmony export (immutable) */ __webpack_exports__["a"] = nodeBuilder;



function nodeBuilder(columnMap, groupBy, valueFactory) {
	var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	if (groupBy.length === 0) {
		return function () {
			return [];
		};
	}

	var groupKey = groupBy[0];
	if (!columnMap.hasOwnProperty(groupKey)) {
		throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('node.builder', 'can\'t find column "' + groupKey + '"');
	}

	var column = columnMap[groupKey];
	var getValue = valueFactory(column);
	return function (rows) {
		var getRowIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (i) {
			return i;
		};

		var keys = [];
		var nodes = [];
		var groups = {};
		for (var i = 0, length = rows.length; i < length; i++) {
			var row = rows[i];
			var index = getRowIndex(i);
			var key = getValue(row);
			if (!groups.hasOwnProperty(key)) {
				var node = new __WEBPACK_IMPORTED_MODULE_1__node__["a" /* Node */](key, level);
				node.rows.push(index);
				keys.push(key);
				nodes.push(node);
				groups[key] = {
					node: node,
					rows: [row]
				};
			} else {
				var group = groups[key];
				group.node.rows.push(index);
				group.rows.push(row);
				keys.push(key);
			}
		}

		var nextGroupBy = groupBy.slice(1);
		if (nextGroupBy.length) {
			var build = nodeBuilder(columnMap, nextGroupBy, valueFactory, level + 1);

			var _loop = function _loop(_i, _length) {
				var key = keys[_i];
				var group = groups[key];
				var node = group.node;
				var rows = node.rows;
				node.children = build(group.rows, function (i) {
					return rows[i];
				});
			};

			for (var _i = 0, _length = keys.length; _i < _length; _i++) {
				_loop(_i, _length);
			}
		}

		return nodes;
	};
}

/***/ }),
/* 464 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(89);
/* harmony export (immutable) */ __webpack_exports__["a"] = flatView;


function flatView(nodes) {
	var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	for (var i = 0, nodesLength = nodes.length; i < nodesLength; i++) {
		var node = nodes[i];
		result.push(node);

		if (node.state.expand) {
			var children = node.children;
			if (children.length) {
				flatView(children, result);
			} else {
				var rows = node.rows;
				for (var j = 0, rowsLength = rows.length; j < rowsLength; j++) {
					var row = rows[j];
					var rowNode = new __WEBPACK_IMPORTED_MODULE_0__node__["a" /* Node */](node.key, node.level + 1, 'row');
					rowNode.rows = [row];
					children.push(rowNode);
					result.push(rowNode);
				}
			}
		}
	}

	return result;
}

/***/ }),
/* 465 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pagination_model__ = __webpack_require__(466);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pagination_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination_view__ = __webpack_require__(160);
/* unused harmony namespace reexport */



/***/ }),
/* 466 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PaginationModel = function PaginationModel() {
	_classCallCheck(this, PaginationModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.current = 0;
	this.size = 50;
	this.sizeList = [5, 10, 20, 30, 40, 50];
	this.count = 0;
};

/***/ }),
/* 467 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__path_service__ = __webpack_require__(468);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PathService", function() { return __WEBPACK_IMPORTED_MODULE_0__path_service__["a"]; });


/***/ }),
/* 468 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathService; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PathService = function () {
	function PathService(bag) {
		_classCallCheck(this, PathService);

		this.bag = bag;
	}

	_createClass(PathService, [{
		key: 'cell',
		value: function cell(path) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = path[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var node = _step.value;

					if (node.nodeName === 'TD' || node.nodeName === 'TH') {
						if (!this.bag.has(node)) {
							new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('path.find', 'Can\'t find model for ' + node.nodeName);
						}

						return this.bag.get(node);
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return null;
		}
	}, {
		key: 'row',
		value: function row(path) {
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = path[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var node = _step2.value;

					if (node.nodeName === 'TR') {
						if (!this.bag.has(node)) {
							new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('path.find', 'Can\'t find model for ' + node.nodeName);
						}

						return this.bag.get(node);
					}
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			return null;
		}
	}]);

	return PathService;
}();

/***/ }),
/* 469 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_factory__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_column_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_list__ = __webpack_require__(83);
/* harmony export (immutable) */ __webpack_exports__["a"] = columnPipe;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }






function columnPipe(memo, context, next) {
	var model = context.model;
	var pivot = memo.pivot;
	var nodes = memo.nodes;
	var heads = pivot.heads;
	var dataColumns = [];
	var addDataColumns = dataColumnsFactory(model);

	/*
  * We need to invoke addDataColumns earlier that others because it setups data.columns model property
  *
  */
	addDataColumns(dataColumns, { rowspan: heads.length, row: 0 });

	var addSelectColumn = selectColumnFactory(model);
	var addGroupColumn = groupColumnFactory(model, nodes);
	var addExpandColumn = expandColumnFactory(model);
	var addPivotColumns = pivotColumnsFactory(model);
	var addPadColumn = padColumnFactory(model);
	var columns = [];

	/*
  * Add column with select boxes
  * if selection unit is row
  *
  */
	addSelectColumn(columns, { rowspan: heads.length, row: 0 });

	/*
  * Add group column with nodes
  *
  */
	addGroupColumn(columns, { rowspan: heads.length, row: 0 });

	/*
  * Add row expand column
  */
	addExpandColumn(columns, { rowspan: heads.length, row: 0 });

	columns.forEach(function (c, i) {
		return c.index = i;
	});

	/*
  *Add columns defined by user
  * that are visible
  *
  */
	columns.push.apply(columns, dataColumns);

	/*
  * Persist order of draggable columns
  *
  */
	var index = 0;
	var columnMap = __WEBPACK_IMPORTED_MODULE_1__column_column_service__["map"](columns.map(function (c) {
		return c.model;
	}));
	var indexMap = model.columnList().index.filter(function (key) {
		return columnMap.hasOwnProperty(key);
	}).reduce(function (memo, key) {
		memo[key] = index++;
		return memo;
	}, {});

	var notIndexedColumns = columns.filter(function (c) {
		return !indexMap.hasOwnProperty(c.model.key);
	});
	var indexedColumns = columns.filter(function (c) {
		return indexMap.hasOwnProperty(c.model.key);
	});
	var startIndex = notIndexedColumns.length;

	notIndexedColumns.forEach(function (c, i) {
		return c.model.index = i;
	});
	indexedColumns.forEach(function (c) {
		return c.model.index = startIndex + indexMap[c.model.key];
	});

	columns.sort(function (x, y) {
		return x.model.index - y.model.index;
	});

	if (heads.length) {
		/*
   * Add column rows for pivoted data
   * if pivot is turned on
   *
   */

		memo.columns = addPivotColumns(columns, heads);
	} else {
		/*
   * Add special column type
   * that fills remaining place (width = 100%)
   *
   */
		addPadColumn(columns, { rowspan: heads.length, row: 0 });
		memo.columns = [columns];
	}

	next(memo);
}

function selectColumnFactory(model) {
	var dataColumns = model.data().columns;
	var selection = model.selection();

	var selectColumn = dataColumns.find(function (item) {
		return item.type === 'select';
	});
	var indicatorColumn = dataColumns.find(function (item) {
		return item.type === 'row-indicator';
	});

	if (!indicatorColumn && selection.unit === 'mix') {
		var createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["columnFactory"])(model);
		return function (columns, context) {
			var indicatorColumn = createColumn('row-indicator');
			indicatorColumn.model.source = 'generation';
			indicatorColumn.rowspan = context.rowspan;
			if (indicatorColumn.model.isVisible) {
				columns.push(indicatorColumn);
				return indicatorColumn;
			}
		};
	}

	if (!selectColumn && selection.unit === 'row' && selection.mode !== 'range') {
		var _createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["columnFactory"])(model);
		return function (columns, context) {
			var selectColumn = _createColumn('select');
			selectColumn.model.source = 'generation';
			selectColumn.rowspan = context.rowspan;
			if (selectColumn.model.isVisible) {
				columns.push(selectColumn);
				return selectColumn;
			}
		};
	}

	return __WEBPACK_IMPORTED_MODULE_2__utility__["noop"];
}

function groupColumnFactory(model, nodes) {
	var dataColumns = model.data().columns;
	var groupColumn = dataColumns.find(function (item) {
		return item.type === 'group';
	});
	if (nodes.length && !groupColumn) {
		var createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["columnFactory"])(model);
		return function (columns, context) {
			var groupColumn = createColumn('group');
			groupColumn.model.source = 'generation';
			groupColumn.rowspan = context.rowspan;
			if (groupColumn.model.isVisible) {
				columns.push(groupColumn);
				return groupColumn;
			}
		};
	}

	return __WEBPACK_IMPORTED_MODULE_2__utility__["noop"];
}

function expandColumnFactory(model) {
	var dataColumns = model.data().columns;
	var expandColumn = dataColumns.find(function (item) {
		return item.type === 'row-expand';
	});
	if (model.row().unit === 'details' && !expandColumn) {
		var createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["columnFactory"])(model);
		return function (columns, context) {
			var expandColumn = createColumn('row-expand');
			expandColumn.model.source = 'generation';
			expandColumn.rowspan = context.rowspan;
			if (expandColumn.model.isVisible) {
				columns.push(expandColumn);
				return expandColumn;
			}
		};
	}

	return __WEBPACK_IMPORTED_MODULE_2__utility__["noop"];
}

function dataColumnsFactory(model) {
	var getColumns = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__column_list__["a" /* generateFactory */])(model);
	var getIndex = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__column_list__["b" /* sortIndexFactory */])(model);
	var createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["columnFactory"])(model);
	return function (columns, context) {
		var result = getColumns();
		if (result.hasChanges) {
			model.data({
				columns: result.columns
			}, {
				source: 'column.pipe',
				behavior: 'core'
			});
		}

		columns.push.apply(columns, _toConsumableArray(__WEBPACK_IMPORTED_MODULE_1__column_column_service__["dataView"](result.columns.map(function (columnBody) {
			var dataColumn = createColumn(columnBody.type || 'text', columnBody);
			dataColumn.rowspan = context.rowspan;
			return dataColumn;
		}), model)));

		var indexResult = getIndex(columns.map(function (column) {
			return column.model;
		}));
		if (indexResult.hasChanges) {
			model.columnList({
				index: indexResult.index
			}, {
				source: 'column.pipe',
				behavior: 'core'
			});
		}

		return result.columns;
	};
}

function padColumnFactory(model) {
	var createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["columnFactory"])(model);
	return function (columns, context) {
		var padColumn = createColumn('pad');
		padColumn.rowspan = context.rowspan;
		columns.push(padColumn);
		return padColumn;
	};
}

function pivotColumnsFactory(model) {
	var createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["columnFactory"])(model);
	var addPadColumn = padColumnFactory(model);
	return function (columns, heads) {
		var rows = [columns];

		/*
   * Data columns + first row pivot columns
   *
   */
		var head = heads[0];
		var headLength = head.length;
		var row = new Array(headLength);
		var startIndex = columns.length;
		for (var j = 0; j < headLength; j++) {
			var headColumn = head[j];
			var pivotColumn = createColumn('pivot');
			pivotColumn.colspan = headColumn.value;
			var pivotColumnModel = pivotColumn.model;
			pivotColumnModel.title = headColumn.key;
			pivotColumnModel.key = pivotColumnModel.key + ('[0][' + j + ']');

			pivotColumnModel.rowIndex = 0;
			pivotColumnModel.index = startIndex + j;
			row[j] = pivotColumn;
		}

		var firstRow = rows[0];
		firstRow.push.apply(firstRow, row);

		/*
   * Add special column type
   * that fills remaining place (width = 100%)
   *
   */
		addPadColumn(firstRow, { rowspan: 1, row: 0 });

		/*
   * Next rows pivot columns
   *
   */
		for (var i = 1, length = heads.length; i < length; i++) {
			var _head = heads[i];
			var _headLength = _head.length;
			var _row = new Array(_headLength);
			for (var _j = 0; _j < _headLength; _j++) {
				var _headColumn = _head[_j];
				var _pivotColumn = createColumn('pivot');
				_pivotColumn.colspan = _headColumn.value;
				var _pivotColumnModel = _pivotColumn.model;
				_pivotColumnModel.title = _headColumn.key;
				_pivotColumnModel.key = _pivotColumnModel.key + ('[' + i + '][' + _j + ']');

				_pivotColumnModel.rowIndex = i;
				_pivotColumnModel.index = _j;
				_row[_j] = _pivotColumn;
			}

			/*
    * Add special column type
    * that fills remaining place (width = 100%)
    *
    */
			addPadColumn(_row, { rowspan: 1, row: i });

			rows.push(_row);
		}

		return rows;
	};
}

/***/ }),
/* 470 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_factory__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_list__ = __webpack_require__(83);
/* harmony export (immutable) */ __webpack_exports__["a"] = dataPipe;



function dataPipe(data, context, next) {
	var model = context.model;
	addDataRows(model, data);
	addDataColumns(model);
	next(data);
}

function addDataRows(model, rows) {
	model.data({ rows: rows }, { source: 'data.pipe', behavior: 'core' });
}

function addDataColumns(model) {
	var getColumns = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__column_list__["a" /* generateFactory */])(model);
	var createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["columnFactory"])(model);
	var result = getColumns();
	var dataColumns = result.columns.map(function (columnBody) {
		return createColumn(columnBody.type || 'text', columnBody).model;
	});

	if (result.hasChanges) {
		model.data({
			columns: dataColumns
		}, {
			source: 'data.pipe',
			behavior: 'core'
		});
	}
}

/***/ }),
/* 471 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = filterPipe;
function filterPipe(data, context, next) {
	var model = context.model;
	var filterState = model.filter();
	var match = filterState.match(context);
	var result = [];

	for (var i = 0, length = data.length; i < length; i++) {
		var item = data[i];
		if (match(item)) {
			result.push(item);
		}
	}

	next(result);
}

/***/ }),
/* 472 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node__ = __webpack_require__(34);
/* harmony export (immutable) */ __webpack_exports__["a"] = groupPipe;



function groupPipe(memo, context, next) {
	var model = context.model;
	var dataState = model.data();
	var groupState = model.group();

	var build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__node__["c" /* nodeBuilder */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_service__["map"])(dataState.columns), groupState.by, context.valueFactory);

	memo.nodes = build(memo.rows);
	next(memo);
}

/***/ }),
/* 473 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = memoPipe;
function memoPipe(data, context, next) {
	next({
		rows: data,
		pivot: { heads: [], rows: [] },
		nodes: []
	});
}

/***/ }),
/* 474 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(34);
/* harmony export (immutable) */ __webpack_exports__["a"] = paginationPipe;


function paginationPipe(memo, context, next) {
	var model = context.model;
	if (model.scroll().mode === 'virtual') {
		next(memo);
		return;
	}

	if (memo.hasOwnProperty('rows')) {
		var _rows = memo.nodes.length ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__node__["b" /* flatView */])(memo.nodes) : memo.rows;
		memo.rows = paginate(model, _rows);
		next(memo);
		return;
	}

	var rows = paginate(model, memo);
	next(rows);
}

function paginate(model, rows) {
	var paginationState = model.pagination();
	var size = paginationState.size;
	var current = paginationState.current;
	var start = current * size;
	model.pagination({ count: rows.length }, { source: 'pagination.pipe', behavior: 'core' });
	return rows.slice(start, start + size);
}

/***/ }),
/* 475 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(17);
/* harmony export (immutable) */ __webpack_exports__["a"] = build;


function build(model, valueFactory) {
	return function run(source, changes, pipe) {
		var pipes = pipe || model.data().pipe;
		var middleware = new __WEBPACK_IMPORTED_MODULE_0__services__["Middleware"](pipes);
		var context = {
			model: model,
			source: source,
			valueFactory: valueFactory,
			changes: changes
		};

		return middleware.run(context, model.data().rows);
	};
}

/***/ }),
/* 476 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pivot__ = __webpack_require__(166);
/* harmony export (immutable) */ __webpack_exports__["a"] = pivotPipe;



function pivotPipe(memo, context, next) {
	var model = context.model;
	var dataState = model.data();
	var pivotState = model.pivot();
	var build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__pivot__["a" /* build */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_service__["map"])(dataState.columns), pivotState.by, context.valueFactory);

	memo.pivot = build(memo.rows);
	next(memo);
}

/***/ }),
/* 477 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_sort_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_column_service__ = __webpack_require__(7);
/* harmony export (immutable) */ __webpack_exports__["a"] = sortPipe;





function sortPipe(data, context, next) {
	var model = context.model;
	var by = model.sort().by;
	var result = data;

	if (by.length) {
		var columns = model.data().columns;
		var mappings = [];
		var directions = [];

		for (var i = 0, length = by.length; i < length; i++) {
			var sortEntry = by[i];
			var sortKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__sort_sort_service__["a" /* key */])(sortEntry);
			var sortDir = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__sort_sort_service__["b" /* direction */])(sortEntry);
			var sortColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__column_column_service__["find"])(columns, sortKey);
			if (!sortColumn) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('sort.pipe', 'Column "' + sortKey + '" is not found');
			}

			mappings.push(context.valueFactory(sortColumn));
			directions.push(sortDir);
		}

		result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utility__["orderBy"])(data, mappings, directions);
	}

	next(result);
}

/***/ }),
/* 478 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(34);
/* harmony export (immutable) */ __webpack_exports__["a"] = viewPipe;


function viewPipe(memo, context, next) {
	var model = context.model;
	var rows = memo.rows;
	if (memo.nodes.length) {
		if (rows.length && !(rows[0] instanceof __WEBPACK_IMPORTED_MODULE_0__node__["a" /* Node */])) {
			rows = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__node__["b" /* flatView */])(memo.nodes);
		}
	}

	model.view({
		rows: rows,
		nodes: memo.nodes,
		pivot: memo.pivot,
		columns: memo.columns
	}, {
		source: context.source || 'view.pipe',
		behavior: 'core'
	});

	next(memo);
}

/***/ }),
/* 479 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pivot__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pivot_form__ = __webpack_require__(167);
/* harmony export (immutable) */ __webpack_exports__["a"] = build;




function buildFactory(columnMap, valueFactory) {
	return function run(pivot, pivotBy) {
		var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

		var key = pivotBy[0];
		var column = columnMap[key];
		var getValue = valueFactory(column);

		return pivot({
			factory: function factory() {
				return {};
			},
			selector: function selector(row) {
				return [getValue(row)];
			},
			name: __WEBPACK_IMPORTED_MODULE_0__utility__["identity"],
			value: function value(parent, row, pivot) {
				var nextPivotBy = pivotBy.slice(1);
				if (nextPivotBy.length) {
					return run(pivot, nextPivotBy, level + 1)(row);
				}

				return true;
			}
		});
	};
}

function build(columnMap, pivotBy, valueFactory) {
	var doPivot = null;
	if (pivotBy.length) {
		var doBuild = buildFactory(columnMap, valueFactory);
		doPivot = doBuild(__WEBPACK_IMPORTED_MODULE_1__pivot__["a" /* pivot */], pivotBy);
	}

	return function (rows) {
		if (doPivot) {
			var data = doPivot(rows);
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__pivot_form__["a" /* pivotForm */])(data);
		}

		return { heads: [], rows: [] };
	};
}

/***/ }),
/* 480 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PivotModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PivotModel = function PivotModel() {
	_classCallCheck(this, PivotModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.by = [];
};

/***/ }),
/* 481 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluginModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PluginModel = function PluginModel() {
	_classCallCheck(this, PluginModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.imports = {};
};

/***/ }),
/* 482 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluginService; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PluginService = function () {
	function PluginService(model) {
		_classCallCheck(this, PluginService);

		this.model = model;
	}

	_createClass(PluginService, [{
		key: 'resolve',
		value: function resolve(name) {
			var lib = this.model.plugin().imports[name];
			if (!lib) {
				switch (name) {
					case 'xlsx':
						{
							throw new __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__["AppError"]('plugin.service', 'To use export plugin for xlsx format please add http://github.com/SheetJS/js-xlsx library to your project');
						}
					case 'fileSaver':
						{
							throw new __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__["AppError"]('plugin.service', 'To use export plugin for file saving please add https://github.com/eligrey/FileSaver.js library to your project');
						}
					case 'pdf':
						{
							throw new __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__["AppError"]('plugin.service', 'To use export plugin for pdf format please add https://github.com/MrRio/jsPDF and https://github.com/simonbengtsson/jsPDF-AutoTable libraries to your project');
						}
					default:
						{
							throw new __WEBPACK_IMPORTED_MODULE_0__grid_core_infrastructure__["AppError"]('import library', 'Can\'t find ' + name + ' library in imports');
						}
				}
			}
			return lib;
		}
	}]);

	return PluginService;
}();

/***/ }),
/* 483 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__progress_model__ = __webpack_require__(484);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__progress_model__["a"]; });


/***/ }),
/* 484 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ProgressModel = function ProgressModel() {
	_classCallCheck(this, ProgressModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.isBusy = false;
	this.queue = [];
};

/***/ }),
/* 485 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__ = __webpack_require__(171);
/* unused harmony export factory */



function factory(resource, key) {
	var data = resource.data;
	var scope = resource.scope;
	if (resource instanceof __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__["a" /* EnumerableResource */]) {
		var keyIndex = 1;
		var count = resource.count;
		var originKey = key;
		while (data.hasOwnProperty(key)) {
			key = originKey + keyIndex++;
		}

		if (count < keyIndex) {
			count = keyIndex;
		}

		return function (content, env) {
			// TODO: do we need full clone here?
			data[key] = content;
			if (Object.keys(env).length) {
				scope[key] = env;
			}
			return new __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__["a" /* EnumerableResource */](data, scope, count);
		};
	}

	return function (content, env) {
		// TODO: do we need full clone here?
		data[key] = content;
		if (Object.keys(env).length) {
			scope[key] = env;
		}
		return new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */](data, scope);
	};
}

/***/ }),
/* 486 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__row_details_service__ = __webpack_require__(172);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__row_details_view__ = __webpack_require__(174);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__row_details_status__ = __webpack_require__(173);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__row_details__ = __webpack_require__(91);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__row_details__["a"]; });





/***/ }),
/* 487 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Row; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Row = function () {
	function Row(row) {
		_classCallCheck(this, Row);

		this.entry = row;

		// We need to cache it due to possible virtual mode;
		this.index = row.index;
	}

	_createClass(Row, [{
		key: 'model',
		get: function get() {
			if (!Row.equals(this, this.entry)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('row', 'Internal model doesn\'t match container');
			}

			return this.entry.model;
		}
	}], [{
		key: 'equals',
		value: function equals(x, y) {
			if (x === y) {
				return true;
			}

			if (!x || !y) {
				return false;
			}

			return x.index === y.index;
		}
	}]);

	return Row;
}();

/***/ }),
/* 488 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var RowModel = function RowModel() {
	_classCallCheck(this, RowModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();

	this.mode = 'single'; //single|multiple|all
	this.unit = 'data'; //data|details
	this.height = 0;
	this.status = new Map();
	this.shortcut = {
		toggle: 'space'
	};
};

/***/ }),
/* 489 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scroll_model__ = __webpack_require__(490);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__scroll_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_view__ = __webpack_require__(175);
/* unused harmony namespace reexport */



/***/ }),
/* 490 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollModel = function ScrollModel() {
	_classCallCheck(this, ScrollModel);

	this.mode = 'default';

	this.top = 0;
	this.left = 0;
	this.cursor = 0;
};

/***/ }),
/* 491 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__command__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionCommandManager; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SelectionCommandManager = function (_CompositeCommandMana) {
	_inherits(SelectionCommandManager, _CompositeCommandMana);

	function SelectionCommandManager(model, manager) {
		_classCallCheck(this, SelectionCommandManager);

		var _this = _possibleConstructorReturn(this, (SelectionCommandManager.__proto__ || Object.getPrototypeOf(SelectionCommandManager)).call(this, manager));

		_this.model = model;
		return _this;
	}

	_createClass(SelectionCommandManager, [{
		key: 'filter',
		value: function filter(commands) {
			if (this.model.edit().state !== 'edit') {
				return _get(SelectionCommandManager.prototype.__proto__ || Object.getPrototypeOf(SelectionCommandManager.prototype), 'filter', this).call(this, commands);
			}

			return [];
		}
	}]);

	return SelectionCommandManager;
}(__WEBPACK_IMPORTED_MODULE_0__command__["CompositeCommandManager"]);

/***/ }),
/* 492 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__command__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var SelectionModel = function SelectionModel() {
	_classCallCheck(this, SelectionModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.unit = 'cell'; //row|cell|column|mix
	this.mode = 'single'; //single|multiple|range
	this.items = [];
	this.area = 'body'; //body, custom
	this.toggle = new __WEBPACK_IMPORTED_MODULE_2__command__["Command"]();
	this.key = {
		row: __WEBPACK_IMPORTED_MODULE_1__utility__["identity"],
		column: __WEBPACK_IMPORTED_MODULE_1__utility__["identity"]
	};
	this.shortcut = {
		toggleRow: 'shift+space',
		togglePreviousRow: 'shift+up',
		toggleNextRow: 'shift+down',
		toggleColumn: 'ctrl+space',
		toggleNextColumn: 'shift+right',
		togglePreviousColumn: 'shift+left',
		selectAll: 'ctrl+a'
	};
};

/***/ }),
/* 493 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multiple_selection_state__ = __webpack_require__(93);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selection_state_factory__ = __webpack_require__(495);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__selection_state_factory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_state__ = __webpack_require__(94);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_selection_state__ = __webpack_require__(180);
/* unused harmony namespace reexport */





/***/ }),
/* 494 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multiple_selection_state__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeSelectionState; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var RangeSelectionState = function (_MultipleSelectionSta) {
	_inherits(RangeSelectionState, _MultipleSelectionSta);

	function RangeSelectionState(model, service) {
		_classCallCheck(this, RangeSelectionState);

		return _possibleConstructorReturn(this, (RangeSelectionState.__proto__ || Object.getPrototypeOf(RangeSelectionState)).call(this, model, service));
	}

	_createClass(RangeSelectionState, [{
		key: 'select',
		value: function select(item) {
			var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utility__["isArray"])(item)) {
				this.clear();
			}

			_get(RangeSelectionState.prototype.__proto__ || Object.getPrototypeOf(RangeSelectionState.prototype), 'select', this).call(this, item, state);
		}
	}]);

	return RangeSelectionState;
}(__WEBPACK_IMPORTED_MODULE_0__multiple_selection_state__["a" /* MultipleSelectionState */]);

/***/ }),
/* 495 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__single_selection_state__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multiple_selection_state__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range_selection_state__ = __webpack_require__(494);
/* harmony export (immutable) */ __webpack_exports__["a"] = selectionStateFactory;





function selectionStateFactory(model, service) {
	var mode = model.selection().mode;
	switch (mode) {
		case 'single':
			return new __WEBPACK_IMPORTED_MODULE_1__single_selection_state__["a" /* SingleSelectionState */](model, service);
		case 'multiple':
			return new __WEBPACK_IMPORTED_MODULE_2__multiple_selection_state__["a" /* MultipleSelectionState */](model, service);
		case 'range':
			return new __WEBPACK_IMPORTED_MODULE_3__range_selection_state__["a" /* RangeSelectionState */](model, service);
		default:
			throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('selection.state.factory', 'Invalid selection mode "' + mode + '"');
	}
}

/***/ }),
/* 496 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aggregation; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Aggregation = function () {
	function Aggregation() {
		_classCallCheck(this, Aggregation);
	}

	_createClass(Aggregation, null, [{
		key: 'first',
		value: function first(rows, getValue) {
			if (!rows.length) {
				return null;
			}

			return getValue(rows[0]);
		}
	}, {
		key: 'last',
		value: function last(rows, getValue) {
			if (!rows.length) {
				return null;
			}

			return getValue(rows[rows.length - 1]);
		}
	}, {
		key: 'max',
		value: function max(rows, getValue) {
			if (!rows.length) {
				return null;
			}

			var length = rows.length;
			var i = 0;
			var max = getValue(rows[i++]);

			while (i < length) {
				if (getValue(rows[i]) > max) {
					max = getValue(rows[i]);
				}
				i++;
			}

			return max;
		}
	}, {
		key: 'min',
		value: function min(rows, getValue) {
			if (!rows.length) {
				return null;
			}

			var length = rows.length;
			var i = 0;
			var min = getValue(rows[i++]);

			while (i < length) {
				if (getValue(rows[i]) < min) {
					min = getValue(rows[i]);
				}
				i++;
			}

			return min;
		}
	}, {
		key: 'minMax',
		value: function minMax(rows, getValue) {
			if (!rows.length) {
				return null;
			}

			var length = rows.length;
			var i = 0;
			var min = getValue(rows[i++]);
			var max = min;

			while (i < length) {
				if (getValue(rows[i]) < min) {
					min = getValue(rows[i]);
				}

				if (getValue(rows[i]) > max) {
					max = getValue(rows[i]);
				}

				i++;
			}

			return [min, max];
		}
	}, {
		key: 'avg',
		value: function avg(rows, getValue, options) {
			if (!rows.length) {
				return null;
			}

			if (options.distinct) {
				var uniqueSet = new Set();
				return Aggregation.sum(rows, getValue, options, uniqueSet) / uniqueSet.size;
			}

			return Aggregation.sum(rows, getValue, options) / rows.length;
		}
	}, {
		key: 'sum',
		value: function sum(rows, getValue, options, container) {
			if (!rows.length) {
				return null;
			}

			var length = rows.length;
			var i = 0;
			var sum = 0;

			if (options.distinct) {
				var uniqueValues = container || new Set();
				var value = null;

				while (i < length) {
					value = Number(getValue(rows[i]));

					if (!uniqueValues.has(value)) {
						sum += value;
						uniqueValues.add(value);
					}

					i++;
				}

				return sum;
			}

			while (i < length) {
				sum += Number(getValue(rows[i]));
				i++;
			}

			return sum;
		}
	}, {
		key: 'join',
		value: function join(rows, getValue, options) {
			if (!rows.length) {
				return null;
			}

			var separator = options.separator || '';
			var length = rows.length;
			var i = 0;
			var join = getValue(rows[i++]);

			if (options.distinct) {
				var uniqueValues = new Set();
				var value = join;
				uniqueValues.add(value);

				while (i < length) {
					value = getValue(rows[i]);

					if (!uniqueValues.has(value)) {
						join += separator + value;
						uniqueValues.add(value);
					}

					i++;
				}

				return join;
			}

			while (i < length) {
				join += separator + getValue(rows[i]);
				i++;
			}

			return join;
		}
	}, {
		key: 'count',
		value: function count(rows, getValue, options) {
			if (!rows.length) {
				return null;
			}

			if (options.distinct) {
				var length = rows.length;
				var i = 0;
				var uniqueValues = new Set();
				var value = null;

				while (i < length) {
					value = Number(getValue(rows[i]));
					uniqueValues.add(value);
					i++;
				}

				return uniqueValues.size;
			}

			return rows.length;
		}
	}]);

	return Aggregation;
}();

/***/ }),
/* 497 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = parseFactory;
/* harmony export (immutable) */ __webpack_exports__["b"] = getType;
/* harmony export (immutable) */ __webpack_exports__["c"] = isPrimitive;


function parseFactory(type) {
	switch (type) {
		case 'text':
		case 'currency':
			return parseText;
		case 'number':
			return parseNumber;
		case 'date':
			return parseDate;
		case 'bool':
			return parseBool;
		default:
			return __WEBPACK_IMPORTED_MODULE_0__utility__["identity"];
	}
}

function getType(value) {
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isArray"])(value)) {
		if (value.length) {
			var itemType = getType(value[0]);
			if (!isPrimitive(itemType)) {
				return 'collection';
			}
		}

		return 'array';
	}

	if (parseNumber(value) !== null && !isNaN(value)) {
		return 'number';
	}

	if (parseBool(value) !== null) {
		return 'bool';
	}

	if (parseDate(value) !== null) {
		return 'date';
	}

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isEmail"])(value)) {
		return 'email';
	}

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isString"])(value)) {
		return 'text';
	}

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isObject"])(value)) {
		return 'object';
	}

	return 'text';
}

function isPrimitive(type) {
	switch (type) {
		case 'date':
		case 'bool':
		case 'text':
		case 'number':
		case 'email':
			return true;
		default:
			return false;
	}
}

function parseBool(value) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isBoolean"])(value) ? value : value === 'true' ? true : value === 'false' ? false : null;
}

function parseText(value) {
	return value !== null ? '' + value : null;
}

function parseDate(value) {
	if (value === null) {
		return null;
	}

	if (value instanceof Date) {
		return value;
	}

	value = '' + value;
	var m = value.match(/^(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/);
	if (m) {
		var utc = Date.UTC(m[1], m[3] ? m[3] - 1 : 0, m[5] || 1, m[7] || 0, m[8] || 0, m[10] || 0, m[12] ? Number('0.' + m[12]) * 1000 : 0);
		var date = new Date(utc);
		if (m[13]) {
			// has gmt offset or Z
			if (m[14]) {
				// has gmt offset
				date.setUTCMinutes(date.getUTCMinutes() + (m[15] == '-' ? 1 : -1) * (Number(m[16]) * 60 + (m[18] ? Number(m[18]) : 0)));
			}
		}
		return date;
	}

	return null;
}

function parseNumber(value) {
	var number = parseFloat(value);
	if (!isNaN(number) && isFinite(number)) {
		return number;
	}

	return null;
}

/***/ }),
/* 498 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_value__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridService; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var GridService = function () {
	function GridService(model) {
		var apply = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_2__utility__["noop"];

		_classCallCheck(this, GridService);

		this.model = model;
		this.apply = apply;
	}

	_createClass(GridService, [{
		key: 'invalidate',
		value: function invalidate() {
			var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'invalidate';
			var changes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var pipe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			__WEBPACK_IMPORTED_MODULE_1__infrastructure__["Log"].info('invalidate', source);

			var model = this.model;
			model.head().cache.clear();
			model.body().cache.clear();
			model.foot().cache.clear();

			var cancelBusy = this.busy();
			var run = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__pipe__["build"])(model, __WEBPACK_IMPORTED_MODULE_4__services_value__["getFactory"]);
			return run(source, changes, pipe).then(this.apply).then(cancelBusy).catch(cancelBusy);
		}
	}, {
		key: 'busy',
		value: function busy() {
			var id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services__["guid"])();
			var progress = this.model.progress;
			progress({ queue: progress().queue.concat([id]) });
			return function () {
				var queue = Array.from(progress().queue);
				var index = queue.indexOf(id);
				if (index >= 0) {
					queue.splice(index, 1);
					progress({ queue: queue });
				}
			};
		}
	}]);

	return GridService;
}();

/***/ }),
/* 499 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = guid;
function guid() {
	function p8(s) {
		var p = (Math.random().toString(16) + '000000000').substr(2, 8);
		return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p;
	}

	return p8() + p8(true) + p8(true) + p8();
}

/***/ }),
/* 500 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = jobLine;



function jobLine(delay) {
	var timeout = null;
	var cancel = function cancel() {
		if (timeout) {
			clearTimeout(timeout);
			timeout = null;
		}
	};

	return function (job) {
		cancel();
		if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utility__["isFunction"])(job)) {
			throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('job.line', 'job is not invokable');
		}

		var doJob = function doJob() {
			job();
			timeout = null;
		};

		timeout = setTimeout(doJob, delay);
	};
}

/***/ }),
/* 501 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export build */
/* harmony export (immutable) */ __webpack_exports__["a"] = buildLines;
function build(style) {
	return buildLines(style).join('\n');
}

function buildLines(style) {
	return Object.keys(style).reduce(function (memo, key) {
		var entry = style[key];
		var body = Object.keys(entry).reduce(function (memo, key) {
			memo.push('\t' + key + ':' + entry[key] + ' !important;');
			return memo;
		}, []);

		memo.push(key + '{\n' + body.join('\n') + '\n}');
		return memo;
	}, []);
}

/***/ }),
/* 502 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = merge;


function merge(settings) {
	var context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["assignWith"])({
		equals: function equals(l, r) {
			return l === r;
		},
		update: function update(l, r /*left, i*/) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["assignWith"])(l, r);
			return l;
		},
		remove: function remove(l, left, i) {
			left.splice(i, 1);
			return l;
		},
		insert: function insert(r, left) {
			left.push(r);
			return r;
		}
	}, settings);

	return function (left, right, result) {
		var ls = left.slice();
		var rs = right.slice();
		var updated = 0;
		var removed = 0;

		result = result || left;
		for (var i = 0, lsLength = ls.length; i < lsLength; i++) {
			var l = ls[i];
			var matched = false;
			for (var j = 0, rsLength = rs.length; j < rsLength; j++) {
				var r = rs[j];
				if (context.equals(l, r, i, j)) {
					context.update(l, r, result, result.indexOf(l));
					updated++;
					matched = true;
					rs.splice(j, 1);
					break;
				}
			}

			if (!matched) {
				context.remove(l, result, result.indexOf(l));
				removed++;
			}
		}

		var inserted = rs.length;
		for (var _i = 0; _i < inserted; _i++) {
			context.insert(rs[_i], result);
		}

		if (context.sort) {
			left.sort(context.sort(left, right));
		}

		return {
			updated: updated,
			removed: removed,
			inserted: inserted
		};
	};
}

/***/ }),
/* 503 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Middleware; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Middleware = function () {
	function Middleware(pipes) {
		_classCallCheck(this, Middleware);

		this.pipes = pipes;
	}

	_createClass(Middleware, [{
		key: "run",
		value: function run(context) {
			var memo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			var pipes = this.pipes.map(function (pipe) {
				return function (memo) {
					return new Promise(function (resolve, reject) {
						return pipe(memo, context, resolve, reject);
					});
				};
			});

			return start(pipes, memo);
		}
	}]);

	return Middleware;
}();

function start(pipes, memo) {
	pipes = Array.from(pipes);
	return new Promise(function (resolve, reject) {
		invoke(memo);

		function invoke(memo) {
			if (pipes.length) {
				var pipe = pipes.shift();
				var promise = pipe(memo);
				promise.then(invoke).catch(function (ex) {
					reject(ex);
					throw ex;
				});
			} else {
				resolve(memo);
			}
		}
	});
}

/***/ }),
/* 504 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = key;
/* harmony export (immutable) */ __webpack_exports__["b"] = index;
/* harmony export (immutable) */ __webpack_exports__["c"] = value;
/* harmony export (immutable) */ __webpack_exports__["d"] = map;


function key(pair) {
	var key = Object.keys(pair)[0];
	if (!key) {
		throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('pair', 'Key is not defined in "' + pair + '"');
	}

	return key;
}

function index(pairs, pairKey) {
	return pairs.map(key).findIndex(function (k) {
		return k === pairKey;
	});
}

function value(pair) {
	var pairKey = key(pair);
	return pair[pairKey];
}

function map(pairs) {
	return pairs.reduce(function (memo, pair) {
		var pairKey = key(pair);
		memo[pairKey] = pair[pairKey];
		return memo;
	}, {});
}

/***/ }),
/* 505 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__io__ = __webpack_require__(454);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shortcut; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Shortcut = function () {
	function Shortcut(manager) {
		_classCallCheck(this, Shortcut);

		this.manager = manager;
	}

	_createClass(Shortcut, [{
		key: 'factory',
		value: function factory(commandManager) {
			var self = this;
			return {
				register: function register(commands) {
					return self.register(commandManager, commands);
				}
			};
		}
	}, {
		key: 'keyDown',
		value: function keyDown(e) {
			var code = Shortcut.translate(e);
			this.keyCode = {
				key: e.key,
				code: code
			};

			return this.manager.execute(code);
		}
	}, {
		key: 'register',
		value: function register(commandManager, commands) {
			return this.manager.register(commandManager, commands);
		}
	}], [{
		key: 'isControl',
		value: function isControl(keyCode) {
			if (!keyCode) {
				return false;
			}

			var code = keyCode.code;
			var parts = code.split('+');
			return parts.some(function (part) {
				return part === 'ctrl' || part === 'alt';
			}) || parts.every(function (part) {
				return __WEBPACK_IMPORTED_MODULE_0__io__["a" /* Keyboard */].isControl(part);
			});
		}
	}, {
		key: 'isPrintable',
		value: function isPrintable(keyCode) {
			if (!keyCode) {
				return false;
			}

			var code = keyCode.code;
			var parts = code.split('+');
			return parts.some(function (part) {
				return __WEBPACK_IMPORTED_MODULE_0__io__["a" /* Keyboard */].isPrintable(part);
			});
		}
	}, {
		key: 'stringify',
		value: function stringify(keyCode) {
			if (!keyCode) {
				return '';
			}

			return __WEBPACK_IMPORTED_MODULE_0__io__["a" /* Keyboard */].stringify(keyCode.code, keyCode.key);
		}
	}, {
		key: 'translate',
		value: function translate(e) {
			var codes = [];
			var code = __WEBPACK_IMPORTED_MODULE_0__io__["a" /* Keyboard */].translate(e.keyCode).toLowerCase();
			if (e.ctrlKey) {
				codes.push('ctrl');
			}

			if (e.shiftKey) {
				codes.push('shift');
			}

			if (e.altKey) {
				codes.push('alt');
			}

			if (code !== 'ctrl' && code !== 'shift' && code !== 'alt') {
				codes.push(code);
			}

			return codes.join('+');
		}
	}]);

	return Shortcut;
}();

/***/ }),
/* 506 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortcutManager; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var ShortcutManager = function () {
	function ShortcutManager() {
		_classCallCheck(this, ShortcutManager);

		this.managerMap = new Map();
	}

	_createClass(ShortcutManager, [{
		key: 'register',
		value: function register(manager, commands) {
			var _this = this;

			var cmds = commands.values ? commands.values() : commands;
			var context = this.managerMap.get(manager);
			if (!context) {
				context = {
					commands: [],
					shortcuts: new Map()
				};

				this.managerMap.set(manager, context);
			}

			var disposes = [];
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				var _loop = function _loop() {
					var cmd = _step.value;

					if (cmd.shortcut) {
						if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(cmd.shortcut)) {
							context.commands.push(cmd);
							disposes.push(function () {
								var index = context.commands.indexOf(cmd);
								if (index >= 0) {
									context.commands.splice(index, 1);
								}
							});
						} else {
							cmd.shortcut.toLowerCase().split('|').forEach(function (shortcut) {
								var temp = [];
								if (context.shortcuts.has(shortcut)) {
									temp = context.shortcuts.get(shortcut);
								}
								temp.push(cmd);
								context.shortcuts.set(shortcut, temp);
								disposes.push(function () {
									var shortcutCommands = context.shortcuts.get(shortcut);
									if (shortcutCommands) {
										var index = shortcutCommands.indexOf(cmd);
										if (index >= 0) {
											shortcutCommands.splice(index, 1);
											if (!shortcutCommands.length) {
												context.shortcuts.delete(shortcut);
											}
										}
									}
								});
							});
						}
					}
				};

				for (var _iterator = cmds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					_loop();
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return function () {
				disposes.forEach(function (dispose) {
					return dispose();
				});
				if (context.commands.length === 0 && Object.keys(context.shortcuts).length === 0) {
					_this.managerMap.delete(manager);
				}
			};
		}
	}, {
		key: 'execute',
		value: function execute(code) {
			var notWildcard = function notWildcard(cmd) {
				return cmd.shortcut !== '*';
			};
			var find = this.findFactory(code);
			var entries = Array.from(this.managerMap.entries()).map(function (entry) {
				var manager = entry[0];
				var commands = entry[1];
				return {
					commands: manager.filter(find(commands)),
					manager: entry[0]
				};
			}).filter(function (entry) {
				return entry.commands.length > 0;
			});

			var allCommands = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["flatten"])(entries.map(function (x) {
				return x.commands;
			}));
			var wildCardPredicate = allCommands.filter(notWildcard).length > 0 ? notWildcard : __WEBPACK_IMPORTED_MODULE_0__utility__["yes"];
			return entries.reduce(function (memo, entry) {
				var commands = entry.commands;
				var manager = entry.manager;
				var invokableCommands = commands.filter(wildCardPredicate);
				if (invokableCommands.length) {
					memo |= manager.invoke(invokableCommands);
				}

				return memo;
			}, false);
		}
	}, {
		key: 'findFactory',
		value: function findFactory(code) {
			var _this2 = this;

			return function (context) {
				var result = [];
				if (context.shortcuts.has(code)) {
					result = result.concat(context.shortcuts.get(code));
				}

				result = result.concat(context.commands.map(function (cmd) {
					return new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({ execute: cmd.execute, canExecute: cmd.canExecute, shortcut: cmd.shortcut() });
				}).filter(function (cmd) {
					return _this2.test(cmd.shortcut, code);
				}));

				return result;
			};
		}
	}, {
		key: 'test',
		value: function test(shortcut, code) {
			code = code.toLowerCase();
			return ('' + shortcut).toLowerCase().split('|').some(function (shct) {
				return shct === '*' || code === shct;
			});
		}
	}]);

	return ShortcutManager;
}();

/***/ }),
/* 507 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sort_model__ = __webpack_require__(508);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sort_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sort_view__ = __webpack_require__(184);
/* unused harmony namespace reexport */



/***/ }),
/* 508 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var SortModel = function SortModel() {
	_classCallCheck(this, SortModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.by = [];
	this.mode = 'multiple';
	this.trigger = ['reorder'];
};

/***/ }),
/* 509 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_model__ = __webpack_require__(510);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__style_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_view__ = __webpack_require__(185);
/* unused harmony namespace reexport */



/***/ }),
/* 510 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var StyleModel = function StyleModel() {
	_classCallCheck(this, StyleModel);

	this.row = __WEBPACK_IMPORTED_MODULE_0__utility__["noop"];
	this.cell = __WEBPACK_IMPORTED_MODULE_0__utility__["noop"];
};

/***/ }),
/* 511 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_css__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Monitor; });
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Entry = function () {
	function Entry(element, sheets, markDirty) {
		_classCallCheck(this, Entry);

		this.element = element;
		this.list = new Set();
		this.sheets = sheets;
		this.markDirty = markDirty;
	}

	_createClass(Entry, [{
		key: 'class',
		value: function _class(key, style) {
			key = __WEBPACK_IMPORTED_MODULE_0__services_css__["b" /* escape */](key);
			this.list.add(key);
			this.markDirty(this);
			if (style) {
				var sheets = this.sheets;
				if (!sheets.has(key)) {
					sheets.set(key, style);
				}
			}
		}
	}]);

	return Entry;
}();

var Monitor = function () {
	function Monitor(model) {
		_classCallCheck(this, Monitor);

		this.model = model;
		this.entries = new Set();
		this.newSheets = new Map();
		this.oldSheets = new Map();
	}

	_createClass(Monitor, [{
		key: 'enter',
		value: function enter() {
			var newSheets = this.newSheets;
			var entries = this.entries;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var entry = _step.value;
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = entry.list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var cls = _step2.value;

							entry.element.removeClass(cls, true);
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			entries = this.entries = new Set();
			var markDirty = function markDirty(entry) {
				return entries.add(entry);
			};

			return function (element) {
				var entry = new Entry(element, newSheets, markDirty);
				return entry.class.bind(entry);
			};
		}
	}, {
		key: 'exit',
		value: function exit() {
			var entries = this.entries;
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = entries[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var entry = _step3.value;
					var _iteratorNormalCompletion6 = true;
					var _didIteratorError6 = false;
					var _iteratorError6 = undefined;

					try {
						for (var _iterator6 = entry.list[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
							var cls = _step6.value;

							entry.element.addClass(cls, true);
						}
					} catch (err) {
						_didIteratorError6 = true;
						_iteratorError6 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion6 && _iterator6.return) {
								_iterator6.return();
							}
						} finally {
							if (_didIteratorError6) {
								throw _iteratorError6;
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			var newSheets = this.newSheets;
			var oldSheets = this.oldSheets;
			var id = this.model.grid().id;
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = oldSheets.keys()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var _cls = _step4.value;

					if (!newSheets.has(_cls)) {
						var sheet = __WEBPACK_IMPORTED_MODULE_0__services_css__["c" /* sheet */](id, _cls);
						sheet.remove();
					}
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}

			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
				for (var _iterator5 = newSheets.entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var _step5$value = _slicedToArray(_step5.value, 2),
					    _cls2 = _step5$value[0],
					    style = _step5$value[1];

					if (!oldSheets.has(_cls2)) {
						var _sheet = __WEBPACK_IMPORTED_MODULE_0__services_css__["c" /* sheet */](id, _cls2);
						_sheet.set(_defineProperty({}, '.' + _cls2, style));
					}
				}
			} catch (err) {
				_didIteratorError5 = true;
				_iteratorError5 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion5 && _iterator5.return) {
						_iterator5.return();
					}
				} finally {
					if (_didIteratorError5) {
						throw _iteratorError5;
					}
				}
			}

			this.oldSheets = newSheets;
			this.newSheets = new Map();
		}
	}]);

	return Monitor;
}();

/***/ }),
/* 512 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirtualRowStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VirtualCellStyle; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VirtualRowStyle = function () {
	function VirtualRowStyle(table) {
		_classCallCheck(this, VirtualRowStyle);

		var model = table.model;
		this.table = table;
		this.model = model;
	}

	_createClass(VirtualRowStyle, [{
		key: "applyFactory",
		value: function applyFactory() {
			var model = this.model;
			var style = model.style().row;
			var mapper = this.table.context.mapper;
			var box = this.table.body.rowBox;
			var entries = box.entries;

			return function (row, context) {
				context.row = mapper.viewToRow(context.row);

				var model = {
					dataIndex: context.row
				};

				var key = box.key(model);
				var classList = entries.get(key);
				if (classList) {
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = classList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var cls = _step.value;

							context.class(cls);
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				}

				style(row, context);
			};
		}
	}]);

	return VirtualRowStyle;
}();

var VirtualCellStyle = function () {
	function VirtualCellStyle(table) {
		_classCallCheck(this, VirtualCellStyle);

		var model = table.model;
		this.table = table;
		this.model = model;
	}

	_createClass(VirtualCellStyle, [{
		key: "applyFactory",
		value: function applyFactory() {
			var model = this.model;
			var style = model.style().cell;
			var mapper = this.table.context.mapper;
			var cellBox = this.table.body.cellBox;
			var cellEntries = cellBox.entries;
			var columnBox = this.table.body.columnBox;
			var columnEntries = columnBox.entries;

			return function (row, column, context) {
				context.column = mapper.viewToColumn(context.column);
				context.row = mapper.viewToRow(context.row);

				// column level
				var columnModel = {
					dataIndex: context.column
				};

				var columnKey = columnBox.key(columnModel);
				var columnClassList = columnEntries.get(columnKey);
				if (columnClassList) {
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = columnClassList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var cls = _step2.value;

							context.class(cls);
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				}

				// cell level
				var cellModel = {
					dataRowIndex: context.row,
					dataColumnIndex: context.column
				};

				var cellKey = cellBox.key(cellModel);
				var cellClassList = cellEntries.get(cellKey);
				if (cellClassList) {
					var _iteratorNormalCompletion3 = true;
					var _didIteratorError3 = false;
					var _iteratorError3 = undefined;

					try {
						for (var _iterator3 = cellClassList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
							var _cls = _step3.value;

							context.class(_cls);
						}
					} catch (err) {
						_didIteratorError3 = true;
						_iteratorError3 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion3 && _iterator3.return) {
								_iterator3.return();
							}
						} finally {
							if (_didIteratorError3) {
								throw _iteratorError3;
							}
						}
					}
				}

				// add classes
				style(row, column, context);
			};
		}
	}]);

	return VirtualCellStyle;
}();

/***/ }),
/* 513 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TemplateModel */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TemplateModel = function TemplateModel() {
	_classCallCheck(this, TemplateModel);

	this.resource = {};
};

/***/ }),
/* 514 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatePath; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var resolvers = {};

var TemplatePath = function () {
	function TemplatePath() {
		_classCallCheck(this, TemplatePath);
	}

	_createClass(TemplatePath, null, [{
		key: 'register',
		value: function register(name, resolve) {
			if (resolvers.hasOwnProperty(name)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('template.path', '"' + name + '" is already registered');
			}

			resolvers[name] = resolve;
			return TemplatePath;
		}
	}, {
		key: 'get',
		value: function get(source) {
			var path = this.find(source);
			if (!path) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('template.path', 'Template path can\'t be found');
			}

			return path;
		}
	}, {
		key: 'find',
		value: function find(source) {
			var getName = this.name;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.keys(resolvers)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var key = _step.value;

					var name = getName(key);
					var value = source[name];
					if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utility__["isUndefined"])(value) && value !== null) {
						var path = resolvers[key](source, value);
						if (path) {
							return path;
						}
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return null;
		}
	}, {
		key: 'name',
		value: function name(_name) {
			return '_' + _name;
		}
	}, {
		key: 'require',
		get: function get() {
			var getName = this.name;
			return Object.keys(resolvers).reduce(function (memo, key) {
				memo[getName(key)] = '^^?' + key;
				return memo;
			}, {});
		}
	}]);

	return TemplatePath;
}();



/***/ }),
/* 515 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar_model__ = __webpack_require__(516);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__toolbar_model__["a"]; });


/***/ }),
/* 516 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ToolbarModel = function ToolbarModel() {
	_classCallCheck(this, ToolbarModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
};

/***/ }),
/* 517 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isArray__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isString__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isString___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isString__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isBoolean__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isBoolean___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_isBoolean__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isNumber__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isNumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isNumber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isDate__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isDate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isDate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_clone__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_clone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_clone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_cloneDeepWith__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_cloneDeepWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_cloneDeepWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isUndefined__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_debounce__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_merge__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_flatten__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_flatten___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_flatten__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_orderBy__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_orderBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_orderBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_startCase__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_startCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash_startCase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_assignWith__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_assignWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_lodash_assignWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_uniq__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_lodash_uniq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_sumBy__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_sumBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_lodash_sumBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_lodash_maxBy__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_lodash_maxBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_lodash_maxBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash_minBy__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash_minBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_lodash_minBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash_zip__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_lodash_zip__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2_lodash_isArray___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3_lodash_isString___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_9_lodash_isUndefined___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4_lodash_isBoolean___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6_lodash_isDate___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5_lodash_isNumber___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7_lodash_clone___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_8_lodash_cloneDeepWith___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_10_lodash_debounce___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_11_lodash_merge___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_12_lodash_flatten___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_14_lodash_startCase___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_15_lodash_assignWith___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_16_lodash_uniq___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_13_lodash_orderBy___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_18_lodash_maxBy___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_19_lodash_minBy___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_17_lodash_sumBy___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_20_lodash_zip___default.a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return yes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return no; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return toCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return noop; });






















var noop = function noop() {};
var yes = function yes() {
	return true;
};
var no = function no() {
	return false;
};
var identity = function identity(arg) {
	return arg;
};

var toCamelCase = function toCamelCase() {
	for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
		names[_key] = arguments[_key];
	}

	var length = names.length;
	var nameList = names.map(function (name) {
		return '' + name;
	});
	if (length > 0) {
		return nameList[0] + nameList.slice(1).map(function (name) {
			return name[0].toUpperCase() + name.substring(1, name.length);
		}).join('');
	}

	return '';
};

var isEmail = function isEmail(value) {
	if (value) {
		var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		return re.test(value);
	}

	return false;
};



/***/ }),
/* 518 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__disposable_view__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var View = function (_DisposableView) {
	_inherits(View, _DisposableView);

	function View(model) {
		_classCallCheck(this, View);

		var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this));

		_this.model = model;
		return _this;
	}

	return View;
}(__WEBPACK_IMPORTED_MODULE_0__disposable_view__["DisposableView"]);

/***/ }),
/* 519 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewModel = function ViewModel() {
	_classCallCheck(this, ViewModel);

	this.items = [];
	this.rows = [];
	this.columns = [];
	this.nodes = [];
	this.pivot = { heads: [], rows: [] };
};

/***/ }),
/* 520 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visibility_model__ = __webpack_require__(521);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__visibility_model__["a"]; });


/***/ }),
/* 521 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisibilityModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var VisibilityModel = function VisibilityModel() {
	_classCallCheck(this, VisibilityModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	this.head = true;
	this.foot = true;
	this.body = true;
	this.toolbar = {
		top: true,
		bottom: true,
		right: false,
		left: false
	};

	this.pin = {
		left: false,
		right: false
	};

	this.plugin = {};
};

/***/ }),
/* 522 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["downloadFactory"] = downloadFactory;
function downloadFactory(fileSaver) {
	return function download(name, data, mimeType, extension) {
		var blob = new Blob([data], { type: mimeType });
		var type = extension ? extension : mimeType.split('/')[1];
		var fileName = name + '.' + type;
		fileSaver.saveAs(blob, fileName);
	};
}

/***/ }),
/* 523 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_core_export_export_service__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pdf", function() { return Pdf; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Pdf = function () {
	function Pdf(jsPDF) {
		_classCallCheck(this, Pdf);

		this.jsPDF = jsPDF;
	}

	_createClass(Pdf, [{
		key: 'write',
		value: function write(rows, columns, name) {
			var jsPDF = this.jsPDF;
			var titles = [];
			var values = [];
			var doc = new jsPDF({ orientation: 'landscape', unit: 'in' });
			var tableOptions = {
				styles: {
					overflow: 'linebreak',
					fontSize: 8,
					columnWidth: 'auto',
					overflowColumns: true
				},
				headerStyles: {
					overflow: 'ellipsize'
				},
				pageBreak: 'auto',
				margin: 0
			};
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var column = _step.value;

					titles.push({ title: column.title, dataKey: column.path });
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = rows[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var row = _step2.value;

					values.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__grid_core_export_export_service__["a" /* flatView */])(row));
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			doc.autoTable(titles, values, tableOptions);
			doc.save(name + '.pdf');
		}
	}]);

	return Pdf;
}();

/***/ }),
/* 524 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_core_export_export_service__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xlsx", function() { return Xlsx; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



function sheet_to_workbook(sheet) {
	var sheets = {};
	sheets['Sheet1'] = sheet;
	return { SheetNames: ['Sheet1'], Sheets: sheets };
}

function toArrayBuffer(excel) {
	var buffer = new ArrayBuffer(excel.length);
	var view = new Uint8Array(buffer);
	for (var i = 0; i < excel.length; ++i) {
		view[i] = excel.charCodeAt(i) & 0xFF;
	}
	return buffer;
}

var Xlsx = function () {
	function Xlsx(xlsx) {
		_classCallCheck(this, Xlsx);

		this.xlsx = xlsx;
	}

	_createClass(Xlsx, [{
		key: 'write',
		value: function write(rows, columns) {
			var result = [];
			var headers = [];
			var excelOptions = { bookType: 'xlsx', bookSST: true, cellDates: true, compression: true, type: 'binary' };

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = rows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var row = _step.value;

					result.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__grid_core_export_export_service__["a" /* flatView */])(row));
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = columns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var column = _step2.value;

					headers.push(column.title);
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			var worksheet = this.xlsx.utils.json_to_sheet(result);
			var workbook = sheet_to_workbook(this.updateTitles(worksheet, headers));
			var excel = this.xlsx.write(workbook, excelOptions);

			return toArrayBuffer(excel);
		}
	}, {
		key: 'updateTitles',
		value: function updateTitles(worksheet, headers) {
			var range = this.xlsx.utils.decode_range(worksheet['!ref']);
			for (var i = range.s.r; i <= range.e.r; ++i) {
				var address = this.xlsx.utils.encode_col(i) + '1';
				if (!worksheet[address]) continue;
				worksheet[address].v = headers[i];
			}
			return worksheet;
		}
	}]);

	return Xlsx;
}();

/***/ }),
/* 525 */,
/* 526 */,
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)(undefined);
// imports


// module
exports.push([module.i, "html, body {\n  font-family: Roboto, 'Helvetica Neue', sans-serif;\n  font-size: 14px;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\nmain {\n  height: 100%; }\n  main .mat-card {\n    height: calc(100% - 32px);\n    margin: 15px;\n    padding: 0 16px; }\n", ""]);

// exports


/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)(undefined);
// imports


// module
exports.push([module.i, "/*\n*\n*  Responsive attributes\n*\n*  References:\n*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex\n*  2) https://css-tricks.com/almanac/properties/f/flex/\n*  3) https://css-tricks.com/snippets/css/a-guide-to-flexbox/\n*  4) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items\n*  5) http://godban.com.ua/projects/flexgrid\n*\n*\n*/\n/* IE10-IE11 column-flex bug fix (set proper default value) */\n.layout-column > .flex {\n  -ms-flex-basis: auto;\n  flex-basis: auto; }\n\n/* Apply Mixins to create Layout/Flexbox styles */\n.flex-order {\n  order: 0; }\n\n.flex-order--20 {\n  order: -20; }\n\n.flex-order--19 {\n  order: -19; }\n\n.flex-order--18 {\n  order: -18; }\n\n.flex-order--17 {\n  order: -17; }\n\n.flex-order--16 {\n  order: -16; }\n\n.flex-order--15 {\n  order: -15; }\n\n.flex-order--14 {\n  order: -14; }\n\n.flex-order--13 {\n  order: -13; }\n\n.flex-order--12 {\n  order: -12; }\n\n.flex-order--11 {\n  order: -11; }\n\n.flex-order--10 {\n  order: -10; }\n\n.flex-order--9 {\n  order: -9; }\n\n.flex-order--8 {\n  order: -8; }\n\n.flex-order--7 {\n  order: -7; }\n\n.flex-order--6 {\n  order: -6; }\n\n.flex-order--5 {\n  order: -5; }\n\n.flex-order--4 {\n  order: -4; }\n\n.flex-order--3 {\n  order: -3; }\n\n.flex-order--2 {\n  order: -2; }\n\n.flex-order--1 {\n  order: -1; }\n\n.flex-order-0 {\n  order: 0; }\n\n.flex-order-1 {\n  order: 1; }\n\n.flex-order-2 {\n  order: 2; }\n\n.flex-order-3 {\n  order: 3; }\n\n.flex-order-4 {\n  order: 4; }\n\n.flex-order-5 {\n  order: 5; }\n\n.flex-order-6 {\n  order: 6; }\n\n.flex-order-7 {\n  order: 7; }\n\n.flex-order-8 {\n  order: 8; }\n\n.flex-order-9 {\n  order: 9; }\n\n.flex-order-10 {\n  order: 10; }\n\n.flex-order-11 {\n  order: 11; }\n\n.flex-order-12 {\n  order: 12; }\n\n.flex-order-13 {\n  order: 13; }\n\n.flex-order-14 {\n  order: 14; }\n\n.flex-order-15 {\n  order: 15; }\n\n.flex-order-16 {\n  order: 16; }\n\n.flex-order-17 {\n  order: 17; }\n\n.flex-order-18 {\n  order: 18; }\n\n.flex-order-19 {\n  order: 19; }\n\n.flex-order-20 {\n  order: 20; }\n\n.offset-0, .flex-offset-0 {\n  margin-left: 0; }\n  [dir=rtl] .offset-0, [dir=rtl] .flex-offset-0 {\n    margin-left: auto;\n    margin-right: 0; }\n\n.offset-5, .flex-offset-5 {\n  margin-left: 5%; }\n  [dir=rtl] .offset-5, [dir=rtl] .flex-offset-5 {\n    margin-left: auto;\n    margin-right: 5%; }\n\n.offset-10, .flex-offset-10 {\n  margin-left: 10%; }\n  [dir=rtl] .offset-10, [dir=rtl] .flex-offset-10 {\n    margin-left: auto;\n    margin-right: 10%; }\n\n.offset-15, .flex-offset-15 {\n  margin-left: 15%; }\n  [dir=rtl] .offset-15, [dir=rtl] .flex-offset-15 {\n    margin-left: auto;\n    margin-right: 15%; }\n\n.offset-20, .flex-offset-20 {\n  margin-left: 20%; }\n  [dir=rtl] .offset-20, [dir=rtl] .flex-offset-20 {\n    margin-left: auto;\n    margin-right: 20%; }\n\n.offset-25, .flex-offset-25 {\n  margin-left: 25%; }\n  [dir=rtl] .offset-25, [dir=rtl] .flex-offset-25 {\n    margin-left: auto;\n    margin-right: 25%; }\n\n.offset-30, .flex-offset-30 {\n  margin-left: 30%; }\n  [dir=rtl] .offset-30, [dir=rtl] .flex-offset-30 {\n    margin-left: auto;\n    margin-right: 30%; }\n\n.offset-35, .flex-offset-35 {\n  margin-left: 35%; }\n  [dir=rtl] .offset-35, [dir=rtl] .flex-offset-35 {\n    margin-left: auto;\n    margin-right: 35%; }\n\n.offset-40, .flex-offset-40 {\n  margin-left: 40%; }\n  [dir=rtl] .offset-40, [dir=rtl] .flex-offset-40 {\n    margin-left: auto;\n    margin-right: 40%; }\n\n.offset-45, .flex-offset-45 {\n  margin-left: 45%; }\n  [dir=rtl] .offset-45, [dir=rtl] .flex-offset-45 {\n    margin-left: auto;\n    margin-right: 45%; }\n\n.offset-50, .flex-offset-50 {\n  margin-left: 50%; }\n  [dir=rtl] .offset-50, [dir=rtl] .flex-offset-50 {\n    margin-left: auto;\n    margin-right: 50%; }\n\n.offset-55, .flex-offset-55 {\n  margin-left: 55%; }\n  [dir=rtl] .offset-55, [dir=rtl] .flex-offset-55 {\n    margin-left: auto;\n    margin-right: 55%; }\n\n.offset-60, .flex-offset-60 {\n  margin-left: 60%; }\n  [dir=rtl] .offset-60, [dir=rtl] .flex-offset-60 {\n    margin-left: auto;\n    margin-right: 60%; }\n\n.offset-65, .flex-offset-65 {\n  margin-left: 65%; }\n  [dir=rtl] .offset-65, [dir=rtl] .flex-offset-65 {\n    margin-left: auto;\n    margin-right: 65%; }\n\n.offset-70, .flex-offset-70 {\n  margin-left: 70%; }\n  [dir=rtl] .offset-70, [dir=rtl] .flex-offset-70 {\n    margin-left: auto;\n    margin-right: 70%; }\n\n.offset-75, .flex-offset-75 {\n  margin-left: 75%; }\n  [dir=rtl] .offset-75, [dir=rtl] .flex-offset-75 {\n    margin-left: auto;\n    margin-right: 75%; }\n\n.offset-80, .flex-offset-80 {\n  margin-left: 80%; }\n  [dir=rtl] .offset-80, [dir=rtl] .flex-offset-80 {\n    margin-left: auto;\n    margin-right: 80%; }\n\n.offset-85, .flex-offset-85 {\n  margin-left: 85%; }\n  [dir=rtl] .offset-85, [dir=rtl] .flex-offset-85 {\n    margin-left: auto;\n    margin-right: 85%; }\n\n.offset-90, .flex-offset-90 {\n  margin-left: 90%; }\n  [dir=rtl] .offset-90, [dir=rtl] .flex-offset-90 {\n    margin-left: auto;\n    margin-right: 90%; }\n\n.offset-95, .flex-offset-95 {\n  margin-left: 95%; }\n  [dir=rtl] .offset-95, [dir=rtl] .flex-offset-95 {\n    margin-left: auto;\n    margin-right: 95%; }\n\n.offset-33, .flex-offset-33 {\n  margin-left: calc(100% / 3); }\n\n.offset-66, .flex-offset-66 {\n  margin-left: calc(200% / 3); }\n  [dir=rtl] .offset-66, [dir=rtl] .flex-offset-66 {\n    margin-left: auto;\n    margin-right: calc(200% / 3); }\n\n.layout-align,\n.layout-align-start-stretch {\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: stretch; }\n\n.layout-align-start,\n.layout-align-start-start,\n.layout-align-start-center,\n.layout-align-start-end,\n.layout-align-start-stretch {\n  justify-content: flex-start; }\n\n.layout-align-center,\n.layout-align-center-start,\n.layout-align-center-center,\n.layout-align-center-end,\n.layout-align-center-stretch {\n  justify-content: center; }\n\n.layout-align-end,\n.layout-align-end-start,\n.layout-align-end-center,\n.layout-align-end-end,\n.layout-align-end-stretch {\n  justify-content: flex-end; }\n\n.layout-align-space-around,\n.layout-align-space-around-center,\n.layout-align-space-around-start,\n.layout-align-space-around-end,\n.layout-align-space-around-stretch {\n  justify-content: space-around; }\n\n.layout-align-space-between,\n.layout-align-space-between-center,\n.layout-align-space-between-start,\n.layout-align-space-between-end,\n.layout-align-space-between-stretch {\n  justify-content: space-between; }\n\n.layout-align-start-start,\n.layout-align-center-start,\n.layout-align-end-start,\n.layout-align-space-between-start,\n.layout-align-space-around-start {\n  align-items: flex-start;\n  align-content: flex-start; }\n\n.layout-align-start-center,\n.layout-align-center-center,\n.layout-align-end-center,\n.layout-align-space-between-center,\n.layout-align-space-around-center {\n  align-items: center;\n  align-content: center;\n  max-width: 100%; }\n\n.layout-align-start-center > *,\n.layout-align-center-center > *,\n.layout-align-end-center > *,\n.layout-align-space-between-center > *,\n.layout-align-space-around-center > * {\n  max-width: 100%;\n  box-sizing: border-box; }\n\n.layout-align-start-end,\n.layout-align-center-end,\n.layout-align-end-end,\n.layout-align-space-between-end,\n.layout-align-space-around-end {\n  align-items: flex-end;\n  align-content: flex-end; }\n\n.layout-align-start-stretch,\n.layout-align-center-stretch,\n.layout-align-end-stretch,\n.layout-align-space-between-stretch,\n.layout-align-space-around-stretch {\n  align-items: stretch;\n  align-content: stretch; }\n\n.flex {\n  flex: 1;\n  box-sizing: border-box; }\n\n.flex-grow {\n  flex: 1 1 100%;\n  box-sizing: border-box; }\n\n.flex-initial {\n  flex: 0 1 auto;\n  box-sizing: border-box; }\n\n.flex-auto {\n  flex: 1 1 auto;\n  box-sizing: border-box; }\n\n.flex-none {\n  flex: 0 0 auto;\n  box-sizing: border-box; }\n\n.flex-noshrink {\n  flex: 1 0 auto;\n  box-sizing: border-box; }\n\n.flex-nogrow {\n  flex: 0 1 auto;\n  box-sizing: border-box; }\n\n.flex-0 {\n  flex: 1 1 0%;\n  max-width: 0%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-0 {\n  flex: 1 1 0%;\n  max-width: 0%;\n  max-height: 100%;\n  box-sizing: border-box;\n  min-width: 0; }\n\n.layout-column > .flex-0 {\n  flex: 1 1 0%;\n  max-width: 100%;\n  max-height: 0%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-0 {\n  flex: 1 1 0%;\n  max-width: 0%;\n  max-height: 100%;\n  box-sizing: border-box;\n  min-width: 0; }\n\n.layout-column > .flex-0 {\n  flex: 1 1 0%;\n  max-width: 100%;\n  max-height: 0%;\n  box-sizing: border-box;\n  min-height: 0; }\n\n.flex-5 {\n  flex: 1 1 5%;\n  max-width: 5%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-5 {\n  flex: 1 1 5%;\n  max-width: 5%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-5 {\n  flex: 1 1 5%;\n  max-width: 100%;\n  max-height: 5%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-5 {\n  flex: 1 1 5%;\n  max-width: 5%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-5 {\n  flex: 1 1 5%;\n  max-width: 100%;\n  max-height: 5%;\n  box-sizing: border-box; }\n\n.flex-10 {\n  flex: 1 1 10%;\n  max-width: 10%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-10 {\n  flex: 1 1 10%;\n  max-width: 10%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-10 {\n  flex: 1 1 10%;\n  max-width: 100%;\n  max-height: 10%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-10 {\n  flex: 1 1 10%;\n  max-width: 10%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-10 {\n  flex: 1 1 10%;\n  max-width: 100%;\n  max-height: 10%;\n  box-sizing: border-box; }\n\n.flex-15 {\n  flex: 1 1 15%;\n  max-width: 15%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-15 {\n  flex: 1 1 15%;\n  max-width: 15%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-15 {\n  flex: 1 1 15%;\n  max-width: 100%;\n  max-height: 15%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-15 {\n  flex: 1 1 15%;\n  max-width: 15%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-15 {\n  flex: 1 1 15%;\n  max-width: 100%;\n  max-height: 15%;\n  box-sizing: border-box; }\n\n.flex-20 {\n  flex: 1 1 20%;\n  max-width: 20%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-20 {\n  flex: 1 1 20%;\n  max-width: 20%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-20 {\n  flex: 1 1 20%;\n  max-width: 100%;\n  max-height: 20%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-20 {\n  flex: 1 1 20%;\n  max-width: 20%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-20 {\n  flex: 1 1 20%;\n  max-width: 100%;\n  max-height: 20%;\n  box-sizing: border-box; }\n\n.flex-25 {\n  flex: 1 1 25%;\n  max-width: 25%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-25 {\n  flex: 1 1 25%;\n  max-width: 25%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-25 {\n  flex: 1 1 25%;\n  max-width: 100%;\n  max-height: 25%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-25 {\n  flex: 1 1 25%;\n  max-width: 25%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-25 {\n  flex: 1 1 25%;\n  max-width: 100%;\n  max-height: 25%;\n  box-sizing: border-box; }\n\n.flex-30 {\n  flex: 1 1 30%;\n  max-width: 30%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-30 {\n  flex: 1 1 30%;\n  max-width: 30%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-30 {\n  flex: 1 1 30%;\n  max-width: 100%;\n  max-height: 30%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-30 {\n  flex: 1 1 30%;\n  max-width: 30%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-30 {\n  flex: 1 1 30%;\n  max-width: 100%;\n  max-height: 30%;\n  box-sizing: border-box; }\n\n.flex-35 {\n  flex: 1 1 35%;\n  max-width: 35%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-35 {\n  flex: 1 1 35%;\n  max-width: 35%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-35 {\n  flex: 1 1 35%;\n  max-width: 100%;\n  max-height: 35%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-35 {\n  flex: 1 1 35%;\n  max-width: 35%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-35 {\n  flex: 1 1 35%;\n  max-width: 100%;\n  max-height: 35%;\n  box-sizing: border-box; }\n\n.flex-40 {\n  flex: 1 1 40%;\n  max-width: 40%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-40 {\n  flex: 1 1 40%;\n  max-width: 40%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-40 {\n  flex: 1 1 40%;\n  max-width: 100%;\n  max-height: 40%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-40 {\n  flex: 1 1 40%;\n  max-width: 40%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-40 {\n  flex: 1 1 40%;\n  max-width: 100%;\n  max-height: 40%;\n  box-sizing: border-box; }\n\n.flex-45 {\n  flex: 1 1 45%;\n  max-width: 45%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-45 {\n  flex: 1 1 45%;\n  max-width: 45%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-45 {\n  flex: 1 1 45%;\n  max-width: 100%;\n  max-height: 45%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-45 {\n  flex: 1 1 45%;\n  max-width: 45%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-45 {\n  flex: 1 1 45%;\n  max-width: 100%;\n  max-height: 45%;\n  box-sizing: border-box; }\n\n.flex-50 {\n  flex: 1 1 50%;\n  max-width: 50%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-50 {\n  flex: 1 1 50%;\n  max-width: 50%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-50 {\n  flex: 1 1 50%;\n  max-width: 100%;\n  max-height: 50%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-50 {\n  flex: 1 1 50%;\n  max-width: 50%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-50 {\n  flex: 1 1 50%;\n  max-width: 100%;\n  max-height: 50%;\n  box-sizing: border-box; }\n\n.flex-55 {\n  flex: 1 1 55%;\n  max-width: 55%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-55 {\n  flex: 1 1 55%;\n  max-width: 55%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-55 {\n  flex: 1 1 55%;\n  max-width: 100%;\n  max-height: 55%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-55 {\n  flex: 1 1 55%;\n  max-width: 55%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-55 {\n  flex: 1 1 55%;\n  max-width: 100%;\n  max-height: 55%;\n  box-sizing: border-box; }\n\n.flex-60 {\n  flex: 1 1 60%;\n  max-width: 60%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-60 {\n  flex: 1 1 60%;\n  max-width: 60%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-60 {\n  flex: 1 1 60%;\n  max-width: 100%;\n  max-height: 60%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-60 {\n  flex: 1 1 60%;\n  max-width: 60%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-60 {\n  flex: 1 1 60%;\n  max-width: 100%;\n  max-height: 60%;\n  box-sizing: border-box; }\n\n.flex-65 {\n  flex: 1 1 65%;\n  max-width: 65%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-65 {\n  flex: 1 1 65%;\n  max-width: 65%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-65 {\n  flex: 1 1 65%;\n  max-width: 100%;\n  max-height: 65%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-65 {\n  flex: 1 1 65%;\n  max-width: 65%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-65 {\n  flex: 1 1 65%;\n  max-width: 100%;\n  max-height: 65%;\n  box-sizing: border-box; }\n\n.flex-70 {\n  flex: 1 1 70%;\n  max-width: 70%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-70 {\n  flex: 1 1 70%;\n  max-width: 70%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-70 {\n  flex: 1 1 70%;\n  max-width: 100%;\n  max-height: 70%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-70 {\n  flex: 1 1 70%;\n  max-width: 70%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-70 {\n  flex: 1 1 70%;\n  max-width: 100%;\n  max-height: 70%;\n  box-sizing: border-box; }\n\n.flex-75 {\n  flex: 1 1 75%;\n  max-width: 75%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-75 {\n  flex: 1 1 75%;\n  max-width: 75%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-75 {\n  flex: 1 1 75%;\n  max-width: 100%;\n  max-height: 75%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-75 {\n  flex: 1 1 75%;\n  max-width: 75%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-75 {\n  flex: 1 1 75%;\n  max-width: 100%;\n  max-height: 75%;\n  box-sizing: border-box; }\n\n.flex-80 {\n  flex: 1 1 80%;\n  max-width: 80%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-80 {\n  flex: 1 1 80%;\n  max-width: 80%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-80 {\n  flex: 1 1 80%;\n  max-width: 100%;\n  max-height: 80%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-80 {\n  flex: 1 1 80%;\n  max-width: 80%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-80 {\n  flex: 1 1 80%;\n  max-width: 100%;\n  max-height: 80%;\n  box-sizing: border-box; }\n\n.flex-85 {\n  flex: 1 1 85%;\n  max-width: 85%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-85 {\n  flex: 1 1 85%;\n  max-width: 85%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-85 {\n  flex: 1 1 85%;\n  max-width: 100%;\n  max-height: 85%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-85 {\n  flex: 1 1 85%;\n  max-width: 85%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-85 {\n  flex: 1 1 85%;\n  max-width: 100%;\n  max-height: 85%;\n  box-sizing: border-box; }\n\n.flex-90 {\n  flex: 1 1 90%;\n  max-width: 90%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-90 {\n  flex: 1 1 90%;\n  max-width: 90%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-90 {\n  flex: 1 1 90%;\n  max-width: 100%;\n  max-height: 90%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-90 {\n  flex: 1 1 90%;\n  max-width: 90%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-90 {\n  flex: 1 1 90%;\n  max-width: 100%;\n  max-height: 90%;\n  box-sizing: border-box; }\n\n.flex-95 {\n  flex: 1 1 95%;\n  max-width: 95%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-95 {\n  flex: 1 1 95%;\n  max-width: 95%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-95 {\n  flex: 1 1 95%;\n  max-width: 100%;\n  max-height: 95%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-95 {\n  flex: 1 1 95%;\n  max-width: 95%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-95 {\n  flex: 1 1 95%;\n  max-width: 100%;\n  max-height: 95%;\n  box-sizing: border-box; }\n\n.flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex {\n  min-width: 0; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-column > .flex {\n  min-height: 0; }\n\n.layout, .layout-column, .layout-row {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.layout-column {\n  flex-direction: column; }\n\n.layout-row {\n  flex-direction: row; }\n\n.layout-padding-sm > *,\n.layout-padding > .flex-sm {\n  padding: 4px; }\n\n.layout-padding,\n.layout-padding-gt-sm,\n.layout-padding-md,\n.layout-padding > *,\n.layout-padding-gt-sm > *,\n.layout-padding-md > *,\n.layout-padding > .flex,\n.layout-padding > .flex-gt-sm,\n.layout-padding > .flex-md {\n  padding: 8px; }\n\n.layout-padding-gt-md > *,\n.layout-padding-lg > *,\n.layout-padding-gt-lg > *,\n.layout-padding > .flex-gt-md,\n.layout-padding > .flex-lg,\n.layout-padding > .flex-lg,\n.layout-padding > .flex-gt-lg {\n  padding: 16px; }\n\n.layout-margin-sm > *,\n.layout-margin > .flex-sm {\n  margin: 4px; }\n\n.layout-margin,\n.layout-margin-gt-sm,\n.layout-margin-md,\n.layout-margin > *,\n.layout-margin-gt-sm > *,\n.layout-margin-md > *,\n.layout-margin > .flex,\n.layout-margin > .flex-gt-sm,\n.layout-margin > .flex-md {\n  margin: 8px; }\n\n.layout-margin-gt-md > *,\n.layout-margin-lg > *,\n.layout-margin-gt-lg > *,\n.layout-margin > .flex-gt-md,\n.layout-margin > .flex-lg,\n.layout-margin > .flex-gt-lg {\n  margin: 16px; }\n\n.layout-wrap {\n  flex-wrap: wrap; }\n\n.layout-nowrap {\n  flex-wrap: nowrap; }\n\n.layout-fill {\n  margin: 0;\n  width: 100%;\n  min-height: 100%;\n  height: 100%; }\n\n/* Apply Mixins to create Layout/Flexbox styles */\n.flex-order {\n  order: 0; }\n\n.flex-order--20 {\n  order: -20; }\n\n.flex-order--19 {\n  order: -19; }\n\n.flex-order--18 {\n  order: -18; }\n\n.flex-order--17 {\n  order: -17; }\n\n.flex-order--16 {\n  order: -16; }\n\n.flex-order--15 {\n  order: -15; }\n\n.flex-order--14 {\n  order: -14; }\n\n.flex-order--13 {\n  order: -13; }\n\n.flex-order--12 {\n  order: -12; }\n\n.flex-order--11 {\n  order: -11; }\n\n.flex-order--10 {\n  order: -10; }\n\n.flex-order--9 {\n  order: -9; }\n\n.flex-order--8 {\n  order: -8; }\n\n.flex-order--7 {\n  order: -7; }\n\n.flex-order--6 {\n  order: -6; }\n\n.flex-order--5 {\n  order: -5; }\n\n.flex-order--4 {\n  order: -4; }\n\n.flex-order--3 {\n  order: -3; }\n\n.flex-order--2 {\n  order: -2; }\n\n.flex-order--1 {\n  order: -1; }\n\n.flex-order-0 {\n  order: 0; }\n\n.flex-order-1 {\n  order: 1; }\n\n.flex-order-2 {\n  order: 2; }\n\n.flex-order-3 {\n  order: 3; }\n\n.flex-order-4 {\n  order: 4; }\n\n.flex-order-5 {\n  order: 5; }\n\n.flex-order-6 {\n  order: 6; }\n\n.flex-order-7 {\n  order: 7; }\n\n.flex-order-8 {\n  order: 8; }\n\n.flex-order-9 {\n  order: 9; }\n\n.flex-order-10 {\n  order: 10; }\n\n.flex-order-11 {\n  order: 11; }\n\n.flex-order-12 {\n  order: 12; }\n\n.flex-order-13 {\n  order: 13; }\n\n.flex-order-14 {\n  order: 14; }\n\n.flex-order-15 {\n  order: 15; }\n\n.flex-order-16 {\n  order: 16; }\n\n.flex-order-17 {\n  order: 17; }\n\n.flex-order-18 {\n  order: 18; }\n\n.flex-order-19 {\n  order: 19; }\n\n.flex-order-20 {\n  order: 20; }\n\n.offset-0, .flex-offset-0 {\n  margin-left: 0; }\n  [dir=rtl] .offset-0, [dir=rtl] .flex-offset-0 {\n    margin-left: auto;\n    margin-right: 0; }\n\n.offset-5, .flex-offset-5 {\n  margin-left: 5%; }\n  [dir=rtl] .offset-5, [dir=rtl] .flex-offset-5 {\n    margin-left: auto;\n    margin-right: 5%; }\n\n.offset-10, .flex-offset-10 {\n  margin-left: 10%; }\n  [dir=rtl] .offset-10, [dir=rtl] .flex-offset-10 {\n    margin-left: auto;\n    margin-right: 10%; }\n\n.offset-15, .flex-offset-15 {\n  margin-left: 15%; }\n  [dir=rtl] .offset-15, [dir=rtl] .flex-offset-15 {\n    margin-left: auto;\n    margin-right: 15%; }\n\n.offset-20, .flex-offset-20 {\n  margin-left: 20%; }\n  [dir=rtl] .offset-20, [dir=rtl] .flex-offset-20 {\n    margin-left: auto;\n    margin-right: 20%; }\n\n.offset-25, .flex-offset-25 {\n  margin-left: 25%; }\n  [dir=rtl] .offset-25, [dir=rtl] .flex-offset-25 {\n    margin-left: auto;\n    margin-right: 25%; }\n\n.offset-30, .flex-offset-30 {\n  margin-left: 30%; }\n  [dir=rtl] .offset-30, [dir=rtl] .flex-offset-30 {\n    margin-left: auto;\n    margin-right: 30%; }\n\n.offset-35, .flex-offset-35 {\n  margin-left: 35%; }\n  [dir=rtl] .offset-35, [dir=rtl] .flex-offset-35 {\n    margin-left: auto;\n    margin-right: 35%; }\n\n.offset-40, .flex-offset-40 {\n  margin-left: 40%; }\n  [dir=rtl] .offset-40, [dir=rtl] .flex-offset-40 {\n    margin-left: auto;\n    margin-right: 40%; }\n\n.offset-45, .flex-offset-45 {\n  margin-left: 45%; }\n  [dir=rtl] .offset-45, [dir=rtl] .flex-offset-45 {\n    margin-left: auto;\n    margin-right: 45%; }\n\n.offset-50, .flex-offset-50 {\n  margin-left: 50%; }\n  [dir=rtl] .offset-50, [dir=rtl] .flex-offset-50 {\n    margin-left: auto;\n    margin-right: 50%; }\n\n.offset-55, .flex-offset-55 {\n  margin-left: 55%; }\n  [dir=rtl] .offset-55, [dir=rtl] .flex-offset-55 {\n    margin-left: auto;\n    margin-right: 55%; }\n\n.offset-60, .flex-offset-60 {\n  margin-left: 60%; }\n  [dir=rtl] .offset-60, [dir=rtl] .flex-offset-60 {\n    margin-left: auto;\n    margin-right: 60%; }\n\n.offset-65, .flex-offset-65 {\n  margin-left: 65%; }\n  [dir=rtl] .offset-65, [dir=rtl] .flex-offset-65 {\n    margin-left: auto;\n    margin-right: 65%; }\n\n.offset-70, .flex-offset-70 {\n  margin-left: 70%; }\n  [dir=rtl] .offset-70, [dir=rtl] .flex-offset-70 {\n    margin-left: auto;\n    margin-right: 70%; }\n\n.offset-75, .flex-offset-75 {\n  margin-left: 75%; }\n  [dir=rtl] .offset-75, [dir=rtl] .flex-offset-75 {\n    margin-left: auto;\n    margin-right: 75%; }\n\n.offset-80, .flex-offset-80 {\n  margin-left: 80%; }\n  [dir=rtl] .offset-80, [dir=rtl] .flex-offset-80 {\n    margin-left: auto;\n    margin-right: 80%; }\n\n.offset-85, .flex-offset-85 {\n  margin-left: 85%; }\n  [dir=rtl] .offset-85, [dir=rtl] .flex-offset-85 {\n    margin-left: auto;\n    margin-right: 85%; }\n\n.offset-90, .flex-offset-90 {\n  margin-left: 90%; }\n  [dir=rtl] .offset-90, [dir=rtl] .flex-offset-90 {\n    margin-left: auto;\n    margin-right: 90%; }\n\n.offset-95, .flex-offset-95 {\n  margin-left: 95%; }\n  [dir=rtl] .offset-95, [dir=rtl] .flex-offset-95 {\n    margin-left: auto;\n    margin-right: 95%; }\n\n.offset-33, .flex-offset-33 {\n  margin-left: calc(100% / 3); }\n\n.offset-66, .flex-offset-66 {\n  margin-left: calc(200% / 3); }\n  [dir=rtl] .offset-66, [dir=rtl] .flex-offset-66 {\n    margin-left: auto;\n    margin-right: calc(200% / 3); }\n\n.layout-align,\n.layout-align-start-stretch {\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: stretch; }\n\n.layout-align-start,\n.layout-align-start-start,\n.layout-align-start-center,\n.layout-align-start-end,\n.layout-align-start-stretch {\n  justify-content: flex-start; }\n\n.layout-align-center,\n.layout-align-center-start,\n.layout-align-center-center,\n.layout-align-center-end,\n.layout-align-center-stretch {\n  justify-content: center; }\n\n.layout-align-end,\n.layout-align-end-start,\n.layout-align-end-center,\n.layout-align-end-end,\n.layout-align-end-stretch {\n  justify-content: flex-end; }\n\n.layout-align-space-around,\n.layout-align-space-around-center,\n.layout-align-space-around-start,\n.layout-align-space-around-end,\n.layout-align-space-around-stretch {\n  justify-content: space-around; }\n\n.layout-align-space-between,\n.layout-align-space-between-center,\n.layout-align-space-between-start,\n.layout-align-space-between-end,\n.layout-align-space-between-stretch {\n  justify-content: space-between; }\n\n.layout-align-start-start,\n.layout-align-center-start,\n.layout-align-end-start,\n.layout-align-space-between-start,\n.layout-align-space-around-start {\n  align-items: flex-start;\n  align-content: flex-start; }\n\n.layout-align-start-center,\n.layout-align-center-center,\n.layout-align-end-center,\n.layout-align-space-between-center,\n.layout-align-space-around-center {\n  align-items: center;\n  align-content: center;\n  max-width: 100%; }\n\n.layout-align-start-center > *,\n.layout-align-center-center > *,\n.layout-align-end-center > *,\n.layout-align-space-between-center > *,\n.layout-align-space-around-center > * {\n  max-width: 100%;\n  box-sizing: border-box; }\n\n.layout-align-start-end,\n.layout-align-center-end,\n.layout-align-end-end,\n.layout-align-space-between-end,\n.layout-align-space-around-end {\n  align-items: flex-end;\n  align-content: flex-end; }\n\n.layout-align-start-stretch,\n.layout-align-center-stretch,\n.layout-align-end-stretch,\n.layout-align-space-between-stretch,\n.layout-align-space-around-stretch {\n  align-items: stretch;\n  align-content: stretch; }\n\n.flex {\n  flex: 1;\n  box-sizing: border-box; }\n\n.flex-grow {\n  flex: 1 1 100%;\n  box-sizing: border-box; }\n\n.flex-initial {\n  flex: 0 1 auto;\n  box-sizing: border-box; }\n\n.flex-auto {\n  flex: 1 1 auto;\n  box-sizing: border-box; }\n\n.flex-none {\n  flex: 0 0 auto;\n  box-sizing: border-box; }\n\n.flex-noshrink {\n  flex: 1 0 auto;\n  box-sizing: border-box; }\n\n.flex-nogrow {\n  flex: 0 1 auto;\n  box-sizing: border-box; }\n\n.flex-0 {\n  flex: 1 1 0%;\n  max-width: 0%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-0 {\n  flex: 1 1 0%;\n  max-width: 0%;\n  max-height: 100%;\n  box-sizing: border-box;\n  min-width: 0; }\n\n.layout-column > .flex-0 {\n  flex: 1 1 0%;\n  max-width: 100%;\n  max-height: 0%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-0 {\n  flex: 1 1 0%;\n  max-width: 0%;\n  max-height: 100%;\n  box-sizing: border-box;\n  min-width: 0; }\n\n.layout-column > .flex-0 {\n  flex: 1 1 0%;\n  max-width: 100%;\n  max-height: 0%;\n  box-sizing: border-box;\n  min-height: 0; }\n\n.flex-5 {\n  flex: 1 1 5%;\n  max-width: 5%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-5 {\n  flex: 1 1 5%;\n  max-width: 5%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-5 {\n  flex: 1 1 5%;\n  max-width: 100%;\n  max-height: 5%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-5 {\n  flex: 1 1 5%;\n  max-width: 5%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-5 {\n  flex: 1 1 5%;\n  max-width: 100%;\n  max-height: 5%;\n  box-sizing: border-box; }\n\n.flex-10 {\n  flex: 1 1 10%;\n  max-width: 10%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-10 {\n  flex: 1 1 10%;\n  max-width: 10%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-10 {\n  flex: 1 1 10%;\n  max-width: 100%;\n  max-height: 10%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-10 {\n  flex: 1 1 10%;\n  max-width: 10%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-10 {\n  flex: 1 1 10%;\n  max-width: 100%;\n  max-height: 10%;\n  box-sizing: border-box; }\n\n.flex-15 {\n  flex: 1 1 15%;\n  max-width: 15%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-15 {\n  flex: 1 1 15%;\n  max-width: 15%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-15 {\n  flex: 1 1 15%;\n  max-width: 100%;\n  max-height: 15%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-15 {\n  flex: 1 1 15%;\n  max-width: 15%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-15 {\n  flex: 1 1 15%;\n  max-width: 100%;\n  max-height: 15%;\n  box-sizing: border-box; }\n\n.flex-20 {\n  flex: 1 1 20%;\n  max-width: 20%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-20 {\n  flex: 1 1 20%;\n  max-width: 20%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-20 {\n  flex: 1 1 20%;\n  max-width: 100%;\n  max-height: 20%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-20 {\n  flex: 1 1 20%;\n  max-width: 20%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-20 {\n  flex: 1 1 20%;\n  max-width: 100%;\n  max-height: 20%;\n  box-sizing: border-box; }\n\n.flex-25 {\n  flex: 1 1 25%;\n  max-width: 25%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-25 {\n  flex: 1 1 25%;\n  max-width: 25%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-25 {\n  flex: 1 1 25%;\n  max-width: 100%;\n  max-height: 25%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-25 {\n  flex: 1 1 25%;\n  max-width: 25%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-25 {\n  flex: 1 1 25%;\n  max-width: 100%;\n  max-height: 25%;\n  box-sizing: border-box; }\n\n.flex-30 {\n  flex: 1 1 30%;\n  max-width: 30%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-30 {\n  flex: 1 1 30%;\n  max-width: 30%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-30 {\n  flex: 1 1 30%;\n  max-width: 100%;\n  max-height: 30%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-30 {\n  flex: 1 1 30%;\n  max-width: 30%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-30 {\n  flex: 1 1 30%;\n  max-width: 100%;\n  max-height: 30%;\n  box-sizing: border-box; }\n\n.flex-35 {\n  flex: 1 1 35%;\n  max-width: 35%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-35 {\n  flex: 1 1 35%;\n  max-width: 35%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-35 {\n  flex: 1 1 35%;\n  max-width: 100%;\n  max-height: 35%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-35 {\n  flex: 1 1 35%;\n  max-width: 35%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-35 {\n  flex: 1 1 35%;\n  max-width: 100%;\n  max-height: 35%;\n  box-sizing: border-box; }\n\n.flex-40 {\n  flex: 1 1 40%;\n  max-width: 40%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-40 {\n  flex: 1 1 40%;\n  max-width: 40%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-40 {\n  flex: 1 1 40%;\n  max-width: 100%;\n  max-height: 40%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-40 {\n  flex: 1 1 40%;\n  max-width: 40%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-40 {\n  flex: 1 1 40%;\n  max-width: 100%;\n  max-height: 40%;\n  box-sizing: border-box; }\n\n.flex-45 {\n  flex: 1 1 45%;\n  max-width: 45%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-45 {\n  flex: 1 1 45%;\n  max-width: 45%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-45 {\n  flex: 1 1 45%;\n  max-width: 100%;\n  max-height: 45%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-45 {\n  flex: 1 1 45%;\n  max-width: 45%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-45 {\n  flex: 1 1 45%;\n  max-width: 100%;\n  max-height: 45%;\n  box-sizing: border-box; }\n\n.flex-50 {\n  flex: 1 1 50%;\n  max-width: 50%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-50 {\n  flex: 1 1 50%;\n  max-width: 50%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-50 {\n  flex: 1 1 50%;\n  max-width: 100%;\n  max-height: 50%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-50 {\n  flex: 1 1 50%;\n  max-width: 50%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-50 {\n  flex: 1 1 50%;\n  max-width: 100%;\n  max-height: 50%;\n  box-sizing: border-box; }\n\n.flex-55 {\n  flex: 1 1 55%;\n  max-width: 55%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-55 {\n  flex: 1 1 55%;\n  max-width: 55%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-55 {\n  flex: 1 1 55%;\n  max-width: 100%;\n  max-height: 55%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-55 {\n  flex: 1 1 55%;\n  max-width: 55%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-55 {\n  flex: 1 1 55%;\n  max-width: 100%;\n  max-height: 55%;\n  box-sizing: border-box; }\n\n.flex-60 {\n  flex: 1 1 60%;\n  max-width: 60%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-60 {\n  flex: 1 1 60%;\n  max-width: 60%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-60 {\n  flex: 1 1 60%;\n  max-width: 100%;\n  max-height: 60%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-60 {\n  flex: 1 1 60%;\n  max-width: 60%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-60 {\n  flex: 1 1 60%;\n  max-width: 100%;\n  max-height: 60%;\n  box-sizing: border-box; }\n\n.flex-65 {\n  flex: 1 1 65%;\n  max-width: 65%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-65 {\n  flex: 1 1 65%;\n  max-width: 65%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-65 {\n  flex: 1 1 65%;\n  max-width: 100%;\n  max-height: 65%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-65 {\n  flex: 1 1 65%;\n  max-width: 65%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-65 {\n  flex: 1 1 65%;\n  max-width: 100%;\n  max-height: 65%;\n  box-sizing: border-box; }\n\n.flex-70 {\n  flex: 1 1 70%;\n  max-width: 70%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-70 {\n  flex: 1 1 70%;\n  max-width: 70%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-70 {\n  flex: 1 1 70%;\n  max-width: 100%;\n  max-height: 70%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-70 {\n  flex: 1 1 70%;\n  max-width: 70%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-70 {\n  flex: 1 1 70%;\n  max-width: 100%;\n  max-height: 70%;\n  box-sizing: border-box; }\n\n.flex-75 {\n  flex: 1 1 75%;\n  max-width: 75%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-75 {\n  flex: 1 1 75%;\n  max-width: 75%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-75 {\n  flex: 1 1 75%;\n  max-width: 100%;\n  max-height: 75%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-75 {\n  flex: 1 1 75%;\n  max-width: 75%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-75 {\n  flex: 1 1 75%;\n  max-width: 100%;\n  max-height: 75%;\n  box-sizing: border-box; }\n\n.flex-80 {\n  flex: 1 1 80%;\n  max-width: 80%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-80 {\n  flex: 1 1 80%;\n  max-width: 80%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-80 {\n  flex: 1 1 80%;\n  max-width: 100%;\n  max-height: 80%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-80 {\n  flex: 1 1 80%;\n  max-width: 80%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-80 {\n  flex: 1 1 80%;\n  max-width: 100%;\n  max-height: 80%;\n  box-sizing: border-box; }\n\n.flex-85 {\n  flex: 1 1 85%;\n  max-width: 85%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-85 {\n  flex: 1 1 85%;\n  max-width: 85%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-85 {\n  flex: 1 1 85%;\n  max-width: 100%;\n  max-height: 85%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-85 {\n  flex: 1 1 85%;\n  max-width: 85%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-85 {\n  flex: 1 1 85%;\n  max-width: 100%;\n  max-height: 85%;\n  box-sizing: border-box; }\n\n.flex-90 {\n  flex: 1 1 90%;\n  max-width: 90%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-90 {\n  flex: 1 1 90%;\n  max-width: 90%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-90 {\n  flex: 1 1 90%;\n  max-width: 100%;\n  max-height: 90%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-90 {\n  flex: 1 1 90%;\n  max-width: 90%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-90 {\n  flex: 1 1 90%;\n  max-width: 100%;\n  max-height: 90%;\n  box-sizing: border-box; }\n\n.flex-95 {\n  flex: 1 1 95%;\n  max-width: 95%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-95 {\n  flex: 1 1 95%;\n  max-width: 95%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-95 {\n  flex: 1 1 95%;\n  max-width: 100%;\n  max-height: 95%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-95 {\n  flex: 1 1 95%;\n  max-width: 95%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-95 {\n  flex: 1 1 95%;\n  max-width: 100%;\n  max-height: 95%;\n  box-sizing: border-box; }\n\n.flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex {\n  min-width: 0; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-column > .flex {\n  min-height: 0; }\n\n.layout, .layout-column, .layout-row {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.layout-column {\n  flex-direction: column; }\n\n.layout-row {\n  flex-direction: row; }\n\n.layout-padding-sm > *,\n.layout-padding > .flex-sm {\n  padding: 4px; }\n\n.layout-padding,\n.layout-padding-gt-sm,\n.layout-padding-md,\n.layout-padding > *,\n.layout-padding-gt-sm > *,\n.layout-padding-md > *,\n.layout-padding > .flex,\n.layout-padding > .flex-gt-sm,\n.layout-padding > .flex-md {\n  padding: 8px; }\n\n.layout-padding-gt-md > *,\n.layout-padding-lg > *,\n.layout-padding-gt-lg > *,\n.layout-padding > .flex-gt-md,\n.layout-padding > .flex-lg,\n.layout-padding > .flex-lg,\n.layout-padding > .flex-gt-lg {\n  padding: 16px; }\n\n.layout-margin-sm > *,\n.layout-margin > .flex-sm {\n  margin: 4px; }\n\n.layout-margin,\n.layout-margin-gt-sm,\n.layout-margin-md,\n.layout-margin > *,\n.layout-margin-gt-sm > *,\n.layout-margin-md > *,\n.layout-margin > .flex,\n.layout-margin > .flex-gt-sm,\n.layout-margin > .flex-md {\n  margin: 8px; }\n\n.layout-margin-gt-md > *,\n.layout-margin-lg > *,\n.layout-margin-gt-lg > *,\n.layout-margin > .flex-gt-md,\n.layout-margin > .flex-lg,\n.layout-margin > .flex-gt-lg {\n  margin: 16px; }\n\n.layout-wrap {\n  flex-wrap: wrap; }\n\n.layout-nowrap {\n  flex-wrap: nowrap; }\n\n.layout-fill {\n  margin: 0;\n  width: 100%;\n  min-height: 100%;\n  height: 100%; }\n\n.q-grid tbody > tr.vscroll-mark {\n  height: 0; }\n\n.q-grid ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px; }\n\n.q-grid ::-webkit-scrollbar-thumb {\n  height: 15px;\n  background-color: #c8c8c8;\n  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.07); }\n\n.q-grid ::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none; }\n\n.q-grid ::-webkit-scrollbar-corner {\n  background-color: transparent; }\n\n.q-grid ::-webkit-scrollbar-track,\n.q-grid ::-webkit-scrollbar-track-piece {\n  background-color: #f8f8f8; }\n\n.q-grid.q-grid-box {\n  height: 100%;\n  min-height: 100%;\n  max-height: 100%; }\n\n.q-grid tbody > tr.vscroll-mark {\n  height: 0; }\n\n.q-grid .q-grid-table table {\n  border-spacing: 0;\n  overflow: hidden;\n  table-layout: fixed;\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  width: 100%; }\n  .q-grid .q-grid-table table thead, .q-grid .q-grid-table table tfoot {\n    /* head takes the height it requires,\n           and it's not scaled when table is resized */\n    flex: 0 0 auto;\n    width: calc(100% - 8px);\n    overflow: hidden; }\n  .q-grid .q-grid-table table tbody {\n    /* body takes all the remaining available space */\n    flex: 1 1 auto;\n    display: block;\n    overflow-y: scroll;\n    outline: none;\n    overflow-anchor: none; }\n  .q-grid .q-grid-table table tbody tr {\n    width: 100%;\n    display: table-row;\n    table-layout: fixed; }\n\n.q-grid .q-grid-table.q-grid-table-left thead, .q-grid .q-grid-table.q-grid-table-left tfoot {\n  width: 100%; }\n\n.q-grid .q-grid-with-right-pin .q-grid-table.q-grid-table-center thead, .q-grid .q-grid-with-right-pin .q-grid-table.q-grid-table-center tfoot {\n  width: 100%; }\n\n.q-grid td, .q-grid th {\n  vertical-align: middle;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  position: relative;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box; }\n  .q-grid td > *, .q-grid th > * {\n    vertical-align: middle; }\n  .q-grid td.q-grid-pivot, .q-grid th.q-grid-pivot {\n    text-align: center; }\n\n.q-grid thead th > div {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  outline: none; }\n\n.q-grid thead td, .q-grid thead th, .q-grid tfoot td, .q-grid tfoot th, .q-grid tbody td, .q-grid tbody th {\n  width: 150px;\n  min-width: 150px;\n  max-width: 150px; }\n  .q-grid thead td.q-grid-pad, .q-grid thead th.q-grid-pad, .q-grid tfoot td.q-grid-pad, .q-grid tfoot th.q-grid-pad, .q-grid tbody td.q-grid-pad, .q-grid tbody th.q-grid-pad {\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%;\n    padding: 0 0 0 1px !important;\n    margin: 0 !important; }\n  .q-grid thead td.q-grid-group, .q-grid thead th.q-grid-group, .q-grid tfoot td.q-grid-group, .q-grid tfoot th.q-grid-group, .q-grid tbody td.q-grid-group, .q-grid tbody th.q-grid-group {\n    width: 200px;\n    min-width: 200px;\n    max-width: 200px; }\n  .q-grid thead td.q-grid-pivot, .q-grid thead th.q-grid-pivot, .q-grid tfoot td.q-grid-pivot, .q-grid tfoot th.q-grid-pivot, .q-grid tbody td.q-grid-pivot, .q-grid tbody th.q-grid-pivot {\n    width: 80px;\n    min-width: 80px;\n    max-width: 80px; }\n  .q-grid thead td.q-grid-email, .q-grid thead th.q-grid-email, .q-grid tfoot td.q-grid-email, .q-grid tfoot th.q-grid-email, .q-grid tbody td.q-grid-email, .q-grid tbody th.q-grid-email {\n    width: 200px;\n    min-width: 200px;\n    max-width: 200px; }\n  .q-grid thead td.q-grid-password, .q-grid thead th.q-grid-password, .q-grid tfoot td.q-grid-password, .q-grid tfoot th.q-grid-password, .q-grid tbody td.q-grid-password, .q-grid tbody th.q-grid-password {\n    width: 100px;\n    min-width: 100px;\n    max-width: 100px; }\n  .q-grid thead td.q-grid-bool, .q-grid thead th.q-grid-bool, .q-grid tfoot td.q-grid-bool, .q-grid tfoot th.q-grid-bool, .q-grid tbody td.q-grid-bool, .q-grid tbody th.q-grid-bool {\n    width: 80px;\n    min-width: 80px;\n    max-width: 80px; }\n  .q-grid thead td.q-grid-date, .q-grid thead th.q-grid-date, .q-grid tfoot td.q-grid-date, .q-grid tfoot th.q-grid-date, .q-grid tbody td.q-grid-date, .q-grid tbody th.q-grid-date {\n    width: 110px;\n    min-width: 110px;\n    max-width: 110px; }\n  .q-grid thead td.q-grid-number, .q-grid thead th.q-grid-number, .q-grid tfoot td.q-grid-number, .q-grid tfoot th.q-grid-number, .q-grid tbody td.q-grid-number, .q-grid tbody th.q-grid-number {\n    width: 100px;\n    min-width: 100px;\n    max-width: 100px; }\n  .q-grid thead td.q-grid-array, .q-grid thead th.q-grid-array, .q-grid tfoot td.q-grid-array, .q-grid tfoot th.q-grid-array, .q-grid tbody td.q-grid-array, .q-grid tbody th.q-grid-array {\n    width: 250px;\n    min-width: 250px;\n    max-width: 250px; }\n  .q-grid thead td.q-grid-row-indicator, .q-grid thead th.q-grid-row-indicator, .q-grid tfoot td.q-grid-row-indicator, .q-grid tfoot th.q-grid-row-indicator, .q-grid tbody td.q-grid-row-indicator, .q-grid tbody th.q-grid-row-indicator {\n    width: 55px;\n    min-width: 55px;\n    max-width: 55px; }\n  .q-grid thead td.q-grid-row-expand, .q-grid thead th.q-grid-row-expand, .q-grid tfoot td.q-grid-row-expand, .q-grid tfoot th.q-grid-row-expand, .q-grid tbody td.q-grid-row-expand, .q-grid tbody th.q-grid-row-expand {\n    width: 55px;\n    min-width: 55px;\n    max-width: 55px; }\n  .q-grid thead td.q-grid-row-number, .q-grid thead th.q-grid-row-number, .q-grid tfoot td.q-grid-row-number, .q-grid tfoot th.q-grid-row-number, .q-grid tbody td.q-grid-row-number, .q-grid tbody th.q-grid-row-number {\n    width: 55px;\n    min-width: 55px;\n    max-width: 55px; }\n  .q-grid thead td.q-grid-select, .q-grid thead th.q-grid-select, .q-grid tfoot td.q-grid-select, .q-grid tfoot th.q-grid-select, .q-grid tbody td.q-grid-select, .q-grid tbody th.q-grid-select {\n    width: 55px;\n    min-width: 55px;\n    max-width: 55px; }\n\n.q-grid tbody td.q-grid-number {\n  text-align: right; }\n\n.q-grid tbody td.q-grid-bool, .q-grid tbody td.q-grid-password, .q-grid tbody td.q-grid-select {\n  text-align: center; }\n\n.q-grid tbody td.q-grid-dropdown select {\n  width: 100%; }\n\n.q-grid tbody td.q-grid-row-options {\n  cursor: pointer; }\n\n.q-grid .q-grid-can-drag {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -khtml-user-drag: element;\n  -webkit-user-drag: element; }\n\n.q-grid th .q-grid-divider {\n  top: 20%;\n  bottom: 20%;\n  right: 0;\n  height: 60%;\n  width: 4px;\n  z-index: 2;\n  background: transparent;\n  position: absolute;\n  border-right: 1px solid rgba(0, 0, 0, 0.12);\n  cursor: col-resize;\n  visibility: hidden; }\n\n.q-grid th:hover .q-grid-divider, .q-grid th.q-grid-highlighted-prev .q-grid-divider {\n  visibility: visible; }\n\n.q-grid .q-grid-toolbar-left, .q-grid .q-grid-toolbar-right {\n  max-width: 250px;\n  overflow: auto; }\n\n.q-grid .q-grid-view {\n  position: relative; }\n  .q-grid .q-grid-view.q-grid-select-range thead td, .q-grid .q-grid-view.q-grid-select-range thead th, .q-grid .q-grid-view.q-grid-select-range tfoot td, .q-grid .q-grid-view.q-grid-select-range tfoot th, .q-grid .q-grid-view.q-grid-select-range tbody td, .q-grid .q-grid-view.q-grid-select-range tbody th {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n  .q-grid .q-grid-view .q-grid-table-left,\n  .q-grid .q-grid-view .q-grid-table-right {\n    margin-bottom: 8px; }\n    .q-grid .q-grid-view .q-grid-table-left tbody,\n    .q-grid .q-grid-view .q-grid-table-right tbody {\n      overflow-x: hidden; }\n  .q-grid .q-grid-view > .q-grid-table-left tbody {\n    overflow-y: hidden; }\n\n.q-grid .q-grid-with-right-pin .q-grid-table-center tbody {\n  overflow-y: hidden; }\n\n.q-grid .q-grid-view .q-grid-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)(undefined);
// imports


// module
exports.push([module.i, ".q-grid.q-grid-theme-material.q-grid-box {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.q-grid.q-grid-theme-material .q-grid-view thead tr, .q-grid.q-grid-theme-material .q-grid-view tfoot tr {\n  height: 56px; }\n  .q-grid.q-grid-theme-material .q-grid-view thead tr th, .q-grid.q-grid-theme-material .q-grid-view thead tr td, .q-grid.q-grid-theme-material .q-grid-view tfoot tr th, .q-grid.q-grid-theme-material .q-grid-view tfoot tr td {\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 12px;\n    font-weight: bold;\n    padding: 0 16px; }\n    .q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-select, .q-grid.q-grid-theme-material .q-grid-view thead tr td.q-grid-select, .q-grid.q-grid-theme-material .q-grid-view tfoot tr th.q-grid-select, .q-grid.q-grid-theme-material .q-grid-view tfoot tr td.q-grid-select {\n      text-overflow: clip; }\n      .q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-select md-checkbox, .q-grid.q-grid-theme-material .q-grid-view thead tr td.q-grid-select md-checkbox, .q-grid.q-grid-theme-material .q-grid-view tfoot tr th.q-grid-select md-checkbox, .q-grid.q-grid-theme-material .q-grid-view tfoot tr td.q-grid-select md-checkbox {\n        margin: 0 0 0 2px; }\n    .q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-filter-row md-input-container, .q-grid.q-grid-theme-material .q-grid-view thead tr td.q-grid-filter-row md-input-container, .q-grid.q-grid-theme-material .q-grid-view tfoot tr th.q-grid-filter-row md-input-container, .q-grid.q-grid-theme-material .q-grid-view tfoot tr td.q-grid-filter-row md-input-container {\n      margin: 0;\n      padding: 0; }\n      .q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-filter-row md-input-container .md-errors-spacer, .q-grid.q-grid-theme-material .q-grid-view thead tr td.q-grid-filter-row md-input-container .md-errors-spacer, .q-grid.q-grid-theme-material .q-grid-view tfoot tr th.q-grid-filter-row md-input-container .md-errors-spacer, .q-grid.q-grid-theme-material .q-grid-view tfoot tr td.q-grid-filter-row md-input-container .md-errors-spacer {\n        min-height: 0 !important; }\n    .q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-filter-row input[placeholder], .q-grid.q-grid-theme-material .q-grid-view thead tr td.q-grid-filter-row input[placeholder], .q-grid.q-grid-theme-material .q-grid-view tfoot tr th.q-grid-filter-row input[placeholder], .q-grid.q-grid-theme-material .q-grid-view tfoot tr td.q-grid-filter-row input[placeholder] {\n      text-overflow: ellipsis; }\n    .q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-filter-row input::-moz-placeholder, .q-grid.q-grid-theme-material .q-grid-view thead tr td.q-grid-filter-row input::-moz-placeholder, .q-grid.q-grid-theme-material .q-grid-view tfoot tr th.q-grid-filter-row input::-moz-placeholder, .q-grid.q-grid-theme-material .q-grid-view tfoot tr td.q-grid-filter-row input::-moz-placeholder {\n      text-overflow: ellipsis; }\n    .q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-filter-row input:-moz-placeholder, .q-grid.q-grid-theme-material .q-grid-view thead tr td.q-grid-filter-row input:-moz-placeholder, .q-grid.q-grid-theme-material .q-grid-view tfoot tr th.q-grid-filter-row input:-moz-placeholder, .q-grid.q-grid-theme-material .q-grid-view tfoot tr td.q-grid-filter-row input:-moz-placeholder {\n      text-overflow: ellipsis; }\n    .q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-filter-row input:-ms-input-placeholder, .q-grid.q-grid-theme-material .q-grid-view thead tr td.q-grid-filter-row input:-ms-input-placeholder, .q-grid.q-grid-theme-material .q-grid-view tfoot tr th.q-grid-filter-row input:-ms-input-placeholder, .q-grid.q-grid-theme-material .q-grid-view tfoot tr td.q-grid-filter-row input:-ms-input-placeholder {\n      text-overflow: ellipsis; }\n    .q-grid.q-grid-theme-material .q-grid-view thead tr th label, .q-grid.q-grid-theme-material .q-grid-view thead tr td label, .q-grid.q-grid-theme-material .q-grid-view tfoot tr th label, .q-grid.q-grid-theme-material .q-grid-view tfoot tr td label {\n      display: inline; }\n    .q-grid.q-grid-theme-material .q-grid-view thead tr th:hover label, .q-grid.q-grid-theme-material .q-grid-view thead tr td:hover label, .q-grid.q-grid-theme-material .q-grid-view tfoot tr th:hover label, .q-grid.q-grid-theme-material .q-grid-view tfoot tr td:hover label {\n      font-weight: bold; }\n\n.q-grid.q-grid-theme-material tbody {\n  border-collapse: separate; }\n  .q-grid.q-grid-theme-material tbody > tr {\n    height: 48px; }\n    .q-grid.q-grid-theme-material tbody > tr.q-grid-highlighted {\n      background-color: #eee; }\n    .q-grid.q-grid-theme-material tbody > tr:hover td.q-grid-text-area > span {\n      overflow: hidden;\n      position: relative;\n      line-height: 1.2em;\n      max-height: 3.6em;\n      text-align: justify;\n      margin-right: -1em;\n      padding-right: 1em; }\n      .q-grid.q-grid-theme-material tbody > tr:hover td.q-grid-text-area > span:before {\n        content: '...';\n        position: absolute;\n        right: 0;\n        bottom: 0; }\n      .q-grid.q-grid-theme-material tbody > tr:hover td.q-grid-text-area > span:after {\n        content: '';\n        position: absolute;\n        right: 0;\n        width: 1em;\n        height: 1em;\n        margin-top: 0.2em;\n        background-color: #eee; }\n    .q-grid.q-grid-theme-material tbody > tr.q-grid-selected {\n      background-color: #f5f5f5; }\n    .q-grid.q-grid-theme-material tbody > tr td {\n      color: rgba(0, 0, 0, 0.87);\n      font-size: 13px;\n      border-top: 1px solid rgba(0, 0, 0, 0.12);\n      padding: 0 16px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-array ul {\n        list-style: none;\n        margin: 0;\n        padding: 0;\n        overflow: hidden; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-array ul li {\n          display: inline-block;\n          min-width: 16px;\n          padding: 4px 8px;\n          text-align: center;\n          white-space: nowrap;\n          vertical-align: middle;\n          background-color: #e0e0e0;\n          border-radius: 16px;\n          margin-right: 4px; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-array ul li:last-child {\n          margin-right: 0; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-row-indicator md-icon {\n        font-size: 13px;\n        width: 13px;\n        height: 13px;\n        min-width: 13px;\n        min-height: 13px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-select md-checkbox {\n        margin: 0; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-selected:not(.q-grid-focus), .q-grid.q-grid-theme-material tbody > tr td.q-grid-sorted {\n        background-color: #f5f5f5; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-highlighted.q-grid-text-area > span {\n        overflow: hidden;\n        position: relative;\n        line-height: 1.2em;\n        max-height: 3.6em;\n        text-align: justify;\n        margin-right: -1em;\n        padding-right: 1em; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-highlighted.q-grid-text-area > span:before {\n          content: '...';\n          position: absolute;\n          right: 0;\n          bottom: 0; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-highlighted.q-grid-text-area > span:after {\n          content: '';\n          position: absolute;\n          right: 0;\n          width: 1em;\n          height: 1em;\n          margin-top: 0.2em;\n          background-color: #eee; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-text-area > span {\n        display: block;\n        white-space: normal;\n        overflow: hidden;\n        position: relative;\n        line-height: 1.2em;\n        max-height: 3.6em;\n        text-align: justify;\n        margin-right: -1em;\n        padding-right: 1em; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-text-area > span:before {\n          content: '...';\n          position: absolute;\n          right: 0;\n          bottom: 0; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-text-area > span:after {\n          content: '';\n          position: absolute;\n          right: 0;\n          width: 1em;\n          height: 1em;\n          margin-top: 0.2em;\n          background-color: #fff; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file > div, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url > div, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email > div, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference > div {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        outline: none; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-download,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-download,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-download,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-download,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-reference-edit {\n        position: absolute;\n        top: calc(50% - 8px);\n        font-size: 12px;\n        min-width: 16px;\n        width: 16px;\n        min-height: 16px;\n        height: 16px;\n        outline: none;\n        border: none;\n        background: transparent;\n        padding: 0;\n        margin: 0 2px; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-download md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-url-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-email-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-reference-edit md-icon, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-download md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-url-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-email-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-reference-edit md-icon, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-download md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-url-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-email-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-reference-edit md-icon, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-download md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-url-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-email-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-reference-edit md-icon {\n          color: rgba(0, 0, 0, 0.54);\n          font-size: 16px;\n          height: 16px;\n          width: 16px;\n          min-height: 16px;\n          min-width: 16px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-reference-edit {\n        right: 0; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-download, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-download, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-download, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-download {\n        right: 16px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file {\n        padding: 0 32px 0 16px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-image {\n        text-align: center; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-image img {\n          max-height: 24px;\n          max-width: 24px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-row-details {\n        background: #fff; }\n\n.q-grid.q-grid-theme-material tbody {\n  border-collapse: separate; }\n  .q-grid.q-grid-theme-material tbody > tr {\n    height: 48px; }\n    .q-grid.q-grid-theme-material tbody > tr.q-grid-highlighted {\n      background-color: #eee; }\n    .q-grid.q-grid-theme-material tbody > tr:hover td.q-grid-text-area > span {\n      overflow: hidden;\n      position: relative;\n      line-height: 1.2em;\n      max-height: 3.6em;\n      text-align: justify;\n      margin-right: -1em;\n      padding-right: 1em; }\n      .q-grid.q-grid-theme-material tbody > tr:hover td.q-grid-text-area > span:before {\n        content: '...';\n        position: absolute;\n        right: 0;\n        bottom: 0; }\n      .q-grid.q-grid-theme-material tbody > tr:hover td.q-grid-text-area > span:after {\n        content: '';\n        position: absolute;\n        right: 0;\n        width: 1em;\n        height: 1em;\n        margin-top: 0.2em;\n        background-color: #eee; }\n    .q-grid.q-grid-theme-material tbody > tr.q-grid-selected {\n      background-color: #f5f5f5; }\n    .q-grid.q-grid-theme-material tbody > tr td {\n      color: rgba(0, 0, 0, 0.87);\n      font-size: 13px;\n      border-top: 1px solid rgba(0, 0, 0, 0.12);\n      padding: 0 16px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-array ul {\n        list-style: none;\n        margin: 0;\n        padding: 0;\n        overflow: hidden; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-array ul li {\n          display: inline-block;\n          min-width: 16px;\n          padding: 4px 8px;\n          text-align: center;\n          white-space: nowrap;\n          vertical-align: middle;\n          background-color: #e0e0e0;\n          border-radius: 16px;\n          margin-right: 4px; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-array ul li:last-child {\n          margin-right: 0; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-row-indicator md-icon {\n        font-size: 13px;\n        width: 13px;\n        height: 13px;\n        min-width: 13px;\n        min-height: 13px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-select md-checkbox {\n        margin: 0; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-selected:not(.q-grid-focus), .q-grid.q-grid-theme-material tbody > tr td.q-grid-sorted {\n        background-color: #f5f5f5; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-highlighted.q-grid-text-area > span {\n        overflow: hidden;\n        position: relative;\n        line-height: 1.2em;\n        max-height: 3.6em;\n        text-align: justify;\n        margin-right: -1em;\n        padding-right: 1em; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-highlighted.q-grid-text-area > span:before {\n          content: '...';\n          position: absolute;\n          right: 0;\n          bottom: 0; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-highlighted.q-grid-text-area > span:after {\n          content: '';\n          position: absolute;\n          right: 0;\n          width: 1em;\n          height: 1em;\n          margin-top: 0.2em;\n          background-color: #eee; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-text-area > span {\n        display: block;\n        white-space: normal;\n        overflow: hidden;\n        position: relative;\n        line-height: 1.2em;\n        max-height: 3.6em;\n        text-align: justify;\n        margin-right: -1em;\n        padding-right: 1em; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-text-area > span:before {\n          content: '...';\n          position: absolute;\n          right: 0;\n          bottom: 0; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-text-area > span:after {\n          content: '';\n          position: absolute;\n          right: 0;\n          width: 1em;\n          height: 1em;\n          margin-top: 0.2em;\n          background-color: #fff; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file > div, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url > div, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email > div, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference > div {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        outline: none; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-download,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-download,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-download,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-download,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-reference-edit {\n        position: absolute;\n        top: calc(50% - 8px);\n        font-size: 12px;\n        min-width: 16px;\n        width: 16px;\n        min-height: 16px;\n        height: 16px;\n        outline: none;\n        border: none;\n        background: transparent;\n        padding: 0;\n        margin: 0 2px; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-download md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-url-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-email-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-reference-edit md-icon, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-download md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-url-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-email-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-reference-edit md-icon, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-download md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-url-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-email-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-reference-edit md-icon, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-download md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-url-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-email-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-reference-edit md-icon {\n          color: rgba(0, 0, 0, 0.54);\n          font-size: 16px;\n          height: 16px;\n          width: 16px;\n          min-height: 16px;\n          min-width: 16px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-reference-edit {\n        right: 0; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-download, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-download, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-download, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-download {\n        right: 16px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file {\n        padding: 0 32px 0 16px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-image {\n        text-align: center; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-image img {\n          max-height: 24px;\n          max-width: 24px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-row-details {\n        background: #fff; }\n\n.q-grid.q-grid-theme-material tfoot > tr {\n  height: 48px; }\n  .q-grid.q-grid-theme-material tfoot > tr td {\n    color: rgba(0, 0, 0, 0.87);\n    font-size: 13px;\n    border-top: 1px rgba(0, 0, 0, 0.12) solid;\n    padding: 0 16px; }\n\n.q-grid.q-grid-theme-material .q-grid-pager {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  height: 24px;\n  color: rgba(0, 0, 0, 0.54);\n  float: right;\n  padding: 16px 0;\n  font-size: 12px; }\n  .q-grid.q-grid-theme-material .q-grid-pager > div md-select {\n    width: 50px;\n    max-width: 50px;\n    background: transparent;\n    border: 0;\n    margin: 0 0 0 12px;\n    display: inline-flex;\n    vertical-align: middle; }\n    .q-grid.q-grid-theme-material .q-grid-pager > div md-select .mat-select-trigger {\n      min-width: 50px;\n      width: 50px; }\n      .q-grid.q-grid-theme-material .q-grid-pager > div md-select .mat-select-trigger .mat-select-value {\n        font-size: 12px; }\n  .q-grid.q-grid-theme-material .q-grid-pager > div .q-grid-page {\n    margin-left: 32px;\n    margin-right: 14px; }\n  .q-grid.q-grid-theme-material .q-grid-pager > div button {\n    background: transparent;\n    border: none;\n    font-size: 20px;\n    width: 24px;\n    height: 24px;\n    min-width: 24px;\n    min-height: 24px;\n    padding: 0;\n    display: inline-flex;\n    vertical-align: middle; }\n    .q-grid.q-grid-theme-material .q-grid-pager > div button .mat-button-wrapper {\n      line-height: 24px; }\n    .q-grid.q-grid-theme-material .q-grid-pager > div button.q-grid-prev-page {\n      margin-left: 18px;\n      margin-right: 0; }\n    .q-grid.q-grid-theme-material .q-grid-pager > div button.q-grid-next-page {\n      margin-left: 24px;\n      margin-right: 14px; }\n\n.q-grid.q-grid-theme-material .q-grid-toolbar-right {\n  margin: 0px 4px; }\n\n.q-grid.q-grid-theme-material .q-grid-sort-bar {\n  height: 100%;\n  padding: 0 10px; }\n  .q-grid.q-grid-theme-material .q-grid-sort-bar label {\n    font-weight: bold; }\n  .q-grid.q-grid-theme-material .q-grid-sort-bar ul {\n    list-style-type: none;\n    margin: 0;\n    display: inline-block;\n    padding: 0; }\n    .q-grid.q-grid-theme-material .q-grid-sort-bar ul li {\n      display: inline-block; }\n  .q-grid.q-grid-theme-material .q-grid-sort-bar button {\n    background: transparent;\n    border: none;\n    margin-right: 12px; }\n  .q-grid.q-grid-theme-material .q-grid-sort-bar select {\n    background: transparent;\n    border: none;\n    width: 90px; }\n  .q-grid.q-grid-theme-material .q-grid-sort-bar md-input-container {\n    margin: 0; }\n\n.q-grid.q-grid-theme-material .q-grid-group-bar {\n  height: 100%;\n  padding: 0 10px; }\n  .q-grid.q-grid-theme-material .q-grid-group-bar label {\n    font-weight: bold; }\n  .q-grid.q-grid-theme-material .q-grid-group-bar ul {\n    list-style-type: none;\n    margin: 0;\n    display: inline-block;\n    padding: 0; }\n    .q-grid.q-grid-theme-material .q-grid-group-bar ul li {\n      display: inline-block; }\n  .q-grid.q-grid-theme-material .q-grid-group-bar button {\n    background: transparent;\n    border: none;\n    margin-right: 12px; }\n  .q-grid.q-grid-theme-material .q-grid-group-bar select {\n    background: transparent;\n    border: none;\n    width: 90px; }\n  .q-grid.q-grid-theme-material .q-grid-group-bar md-input-container {\n    margin: 0; }\n\n.q-grid.q-grid-theme-material .q-grid-pivot-bar {\n  height: 100%;\n  padding: 0 10px; }\n  .q-grid.q-grid-theme-material .q-grid-pivot-bar label {\n    font-weight: bold; }\n  .q-grid.q-grid-theme-material .q-grid-pivot-bar ul {\n    list-style-type: none;\n    margin: 0;\n    display: inline-block;\n    padding: 0; }\n    .q-grid.q-grid-theme-material .q-grid-pivot-bar ul li {\n      display: inline-block; }\n  .q-grid.q-grid-theme-material .q-grid-pivot-bar button {\n    background: transparent;\n    border: none;\n    margin-right: 12px; }\n  .q-grid.q-grid-theme-material .q-grid-pivot-bar select {\n    background: transparent;\n    border: none;\n    width: 90px; }\n  .q-grid.q-grid-theme-material .q-grid-pivot-bar md-input-container {\n    margin: 0; }\n\n.q-grid.q-grid-theme-material .q-grid-selection-bar {\n  margin-top: 20px;\n  height: 100%;\n  padding: 0 10px; }\n  .q-grid.q-grid-theme-material .q-grid-selection-bar label {\n    font-weight: bold; }\n  .q-grid.q-grid-theme-material .q-grid-selection-bar ul {\n    list-style-type: none;\n    margin: 0;\n    display: inline-block;\n    padding: 0; }\n    .q-grid.q-grid-theme-material .q-grid-selection-bar ul li {\n      display: inline-block; }\n  .q-grid.q-grid-theme-material .q-grid-selection-bar button {\n    background: transparent;\n    border: none;\n    margin-right: 12px; }\n  .q-grid.q-grid-theme-material .q-grid-selection-bar select {\n    background: transparent;\n    border: none;\n    width: 90px; }\n  .q-grid.q-grid-theme-material .q-grid-selection-bar md-input-container {\n    margin: 0; }\n    .q-grid.q-grid-theme-material .q-grid-selection-bar md-input-container .md-errors-spacer {\n      height: 0;\n      min-height: 0; }\n\n.q-grid.q-grid-theme-material td.q-grid-group button, .q-grid.q-grid-theme-material td.q-grid-row-expand button {\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  margin: 0;\n  padding: 0;\n  min-height: 24px; }\n  .q-grid.q-grid-theme-material td.q-grid-group button md-icon, .q-grid.q-grid-theme-material td.q-grid-row-expand button md-icon {\n    opacity: 0.54; }\n  .q-grid.q-grid-theme-material td.q-grid-group button + span, .q-grid.q-grid-theme-material td.q-grid-row-expand button + span {\n    vertical-align: middle; }\n\n.q-grid.q-grid-theme-material .q-grid-arrow-right {\n  transform: rotate(90deg); }\n\n.q-grid.q-grid-theme-material .q-grid-view thead tr:last-child th.q-grid-pivot {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.q-grid.q-grid-theme-material .q-grid-view thead th.q-grid-pivot {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-left: 1px solid rgba(0, 0, 0, 0.12);\n  padding: 0; }\n  .q-grid.q-grid-theme-material .q-grid-view thead th.q-grid-pivot:nth-last-child(2) {\n    border-right: 1px solid rgba(0, 0, 0, 0.12); }\n\n.q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-drag) th:hover .q-grid-sort {\n  visibility: visible; }\n\n.q-grid.q-grid-theme-material .q-grid-sort {\n  position: absolute;\n  display: inline;\n  cursor: pointer;\n  visibility: hidden;\n  font-size: 12px;\n  width: 16px;\n  outline: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  left: 0;\n  margin-top: -1px; }\n  .q-grid.q-grid-theme-material .q-grid-sort.q-grid-active {\n    visibility: visible; }\n    .q-grid.q-grid-theme-material .q-grid-sort.q-grid-active md-icon {\n      color: rgba(0, 0, 0, 0.87); }\n    .q-grid.q-grid-theme-material .q-grid-sort.q-grid-active + label {\n      color: rgba(0, 0, 0, 0.87); }\n  .q-grid.q-grid-theme-material .q-grid-sort md-icon {\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 16px;\n    height: 16px;\n    width: 16px;\n    min-height: 16px;\n    min-width: 16px; }\n\n.q-grid.q-grid-theme-material td md-checkbox .md-label, .q-grid.q-grid-theme-material th md-checkbox .md-label {\n  display: none; }\n\n.q-grid.q-grid-theme-material td.q-grid-edit {\n  overflow: visible !important; }\n  .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor {\n    position: absolute;\n    width: 160px;\n    height: 40px;\n    border-radius: 4px;\n    background-color: #fcfcfc;\n    color: rgba(0, 0, 0, 0.87);\n    padding: 24px;\n    left: 4px;\n    top: 0;\n    box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    flex-direction: column;\n    z-index: 1;\n    box-sizing: content-box; }\n    .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor md-input-container {\n      padding: 0;\n      margin: 0; }\n    .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-text-area {\n      height: 160px;\n      width: 300px; }\n      .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-text-area textarea {\n        height: 150px !important; }\n    .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-date {\n      width: 200px !important;\n      height: 110px !important; }\n      .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-date .md-datepicker-button {\n        margin-left: 0;\n        padding: 0;\n        width: 24px;\n        height: 24px; }\n      .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-date .md-datepicker-triangle-button {\n        margin-right: 0;\n        padding: 0;\n        width: 24px;\n        height: 24px; }\n    .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor h2 {\n      margin-top: 0; }\n    .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-array {\n      min-height: 120px;\n      width: 400px;\n      height: inherit;\n      padding-bottom: 0; }\n      .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-array .q-grid-array-view {\n        max-height: 400px;\n        overflow-y: auto; }\n    .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-url, .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-email {\n      height: auto;\n      width: 270px;\n      padding-bottom: 0; }\n      .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-url .q-grid-url-fields,\n      .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-url .q-grid-email-fields, .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-email .q-grid-url-fields,\n      .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-email .q-grid-email-fields {\n        padding-top: 8px; }\n    .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file {\n      height: auto;\n      width: 270px;\n      padding-bottom: 0; }\n      .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file h2 {\n        text-align: left; }\n  .q-grid.q-grid-theme-material td.q-grid-edit.q-grid-dropdown md-select {\n    margin: 5px 0;\n    max-height: 30px; }\n  .q-grid.q-grid-theme-material td.q-grid-edit.q-grid-autocomplete md-autocomplete {\n    min-width: 30px;\n    background-color: transparent; }\n  .q-grid.q-grid-theme-material td.q-grid-edit.q-grid-autocomplete md-autocomplete-wrap {\n    box-shadow: none; }\n  .q-grid.q-grid-theme-material td.q-grid-edit.q-grid-autocomplete input {\n    border-color: #3f51b5;\n    border-width: 0 0 2px 0;\n    border-radius: 0;\n    border-style: solid;\n    line-height: 26px;\n    padding: 2px 2px 1px 2px;\n    height: 30px; }\n  .q-grid.q-grid-theme-material td.q-grid-edit.q-grid-row-options {\n    padding: 0;\n    margin: 0;\n    width: 100%; }\n  .q-grid.q-grid-theme-material td.q-grid-edit md-checkbox {\n    margin: 0; }\n\n.q-grid.q-grid-theme-material .q-grid-editor.q-grid-reference {\n  height: 350px;\n  width: 500px; }\n\n.q-grid.q-grid-theme-material .q-grid-file-upload-area {\n  position: relative;\n  border: 1px dashed rgba(0, 0, 0, 0.12);\n  text-align: center;\n  height: 120px; }\n  .q-grid.q-grid-theme-material .q-grid-file-upload-area .q-grid-file-upload-message {\n    position: relative;\n    top: 40%; }\n    .q-grid.q-grid-theme-material .q-grid-file-upload-area .q-grid-file-upload-message span {\n      overflow: hidden;\n      text-overflow: ellipsis; }\n    .q-grid.q-grid-theme-material .q-grid-file-upload-area .q-grid-file-upload-message md-icon {\n      margin: 0 5px; }\n  .q-grid.q-grid-theme-material .q-grid-file-upload-area.q-grid-file-has-preview .q-grid-file-upload-message {\n    visibility: hidden; }\n  .q-grid.q-grid-theme-material .q-grid-file-upload-area .q-grid-file-upload-filename {\n    padding: 10px;\n    font-weight: bold;\n    color: rgba(0, 0, 0, 0.54); }\n  .q-grid.q-grid-theme-material .q-grid-file-upload-area input {\n    opacity: 0;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    left: 0;\n    top: 0;\n    z-index: 2; }\n  .q-grid.q-grid-theme-material .q-grid-file-upload-area .q-grid-file-preview {\n    opacity: 1;\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    vertical-align: middle;\n    text-align: center; }\n    .q-grid.q-grid-theme-material .q-grid-file-upload-area .q-grid-file-preview img {\n      position: relative;\n      max-height: 100%;\n      max-width: 100%;\n      z-index: 3; }\n\n.q-grid.q-grid-theme-material .q-grid-file-upload-area:hover {\n  background-color: #f5f5f5; }\n  .q-grid.q-grid-theme-material .q-grid-file-upload-area:hover .q-grid-file-preview {\n    opacity: 0;\n    transition: opacity .2s ease-in-out; }\n    .q-grid.q-grid-theme-material .q-grid-file-upload-area:hover .q-grid-file-preview img {\n      z-index: 1; }\n  .q-grid.q-grid-theme-material .q-grid-file-upload-area:hover .q-grid-file-upload-message {\n    visibility: visible; }\n\n.q-grid.q-grid-theme-material .q-grid-actions .md-button {\n  margin: 8px 0 8px 8px;\n  float: right; }\n\n.q-grid.q-grid-theme-material .q-grid-visibility ul {\n  list-style-type: none; }\n\n.q-grid.q-grid-theme-material .q-grid-toolbar .q-grid-column-chooser .q-grid-column-chooser-filter {\n  margin-top: 18px; }\n\n.q-grid.q-grid-theme-material .q-grid-column-chooser {\n  width: 320px; }\n  .q-grid.q-grid-theme-material .q-grid-column-chooser ul {\n    list-style-type: none;\n    padding: 0; }\n  .q-grid.q-grid-theme-material .q-grid-column-chooser md-checkbox {\n    margin: 0 0 10px 0; }\n  .q-grid.q-grid-theme-material .q-grid-column-chooser .q-grid-column-chooser-filter {\n    margin-left: 4px;\n    margin-right: 4px;\n    margin-bottom: 0;\n    margin-top: 0; }\n    .q-grid.q-grid-theme-material .q-grid-column-chooser .q-grid-column-chooser-filter .md-errors-spacer {\n      display: none; }\n  .q-grid.q-grid-theme-material .q-grid-column-chooser .q-grid-column-chooser-list {\n    margin: 0;\n    overflow-y: auto;\n    height: 340px; }\n    .q-grid.q-grid-theme-material .q-grid-column-chooser .q-grid-column-chooser-list md-input-container {\n      margin: 0; }\n  .q-grid.q-grid-theme-material .q-grid-column-chooser .q-grid-column-chooser-actions {\n    padding: 7px 0; }\n\n.q-grid.q-grid-theme-material .q-grid-progress {\n  position: relative; }\n  .q-grid.q-grid-theme-material .q-grid-progress md-progress-linear {\n    position: absolute; }\n\n.q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-drag) tbody td.q-grid-highlighted, .q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-drag) tbody tr.q-grid-highlighted {\n  background-color: #eee; }\n\n.q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-drag) tbody td.q-grid-focus {\n  outline: 2px solid rgba(63, 81, 181, 0.25);\n  outline-offset: -2px; }\n\n.q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-drag) tbody td.q-grid-edit {\n  outline: 2px solid rgba(63, 81, 181, 0.5) !important;\n  outline-offset: -2px; }\n\n.q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-active) tbody td {\n  border-top-color: rgba(0, 0, 0, 0.06); }\n  .q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-active) tbody td.q-grid-focus {\n    outline-color: rgba(63, 81, 181, 0.05); }\n\n.q-grid.q-grid-theme-material .q-grid-highlight-part {\n  background-color: yellow;\n  color: #000; }\n\n.q-grid.q-grid-theme-material.q-grid-popup-panel md-card {\n  margin: 0; }\n  .q-grid.q-grid-theme-material.q-grid-popup-panel md-card md-card-content {\n    max-height: 500px;\n    overflow: hidden; }\n  .q-grid.q-grid-theme-material.q-grid-popup-panel md-card md-card-header {\n    width: 100%;\n    padding: 0;\n    background-color: #fff; }\n    .q-grid.q-grid-theme-material.q-grid-popup-panel md-card md-card-header md-card-title {\n      padding: 0; }\n      .q-grid.q-grid-theme-material.q-grid-popup-panel md-card md-card-header md-card-title md-card-title-text {\n        margin-left: 16px; }\n        .q-grid.q-grid-theme-material.q-grid-popup-panel md-card md-card-header md-card-title md-card-title-text .md-subhead {\n          line-height: 30px;\n          vertical-align: middle; }\n      .q-grid.q-grid-theme-material.q-grid-popup-panel md-card md-card-header md-card-title md-card-title-actions {\n        margin-right: 16px; }\n    .q-grid.q-grid-theme-material.q-grid-popup-panel md-card md-card-header .md-icon-button {\n      padding: 0;\n      margin: 0;\n      max-height: 30px;\n      min-height: 20px; }\n\n.q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-drag) th:hover .q-grid-column-filter {\n  visibility: visible; }\n\n.q-grid.q-grid-theme-material .q-grid-column-filter {\n  visibility: hidden;\n  position: absolute;\n  right: 0;\n  top: calc(50% - 8px); }\n  .q-grid.q-grid-theme-material .q-grid-column-filter.q-grid-active {\n    visibility: visible; }\n    .q-grid.q-grid-theme-material .q-grid-column-filter.q-grid-active md-icon {\n      color: rgba(0, 0, 0, 0.87); }\n    .q-grid.q-grid-theme-material .q-grid-column-filter.q-grid-active + label {\n      color: rgba(0, 0, 0, 0.87); }\n  .q-grid.q-grid-theme-material .q-grid-column-filter button {\n    font-size: 12px;\n    width: 16px;\n    min-width: 16px;\n    min-height: 16px;\n    height: 16px;\n    outline: none;\n    border: none;\n    background: transparent;\n    padding: 0;\n    left: 0;\n    margin: 0 2px; }\n    .q-grid.q-grid-theme-material .q-grid-column-filter button md-icon {\n      color: rgba(0, 0, 0, 0.54);\n      font-size: 16px;\n      height: 16px;\n      width: 16px;\n      min-height: 16px;\n      min-width: 16px; }\n\n.q-grid.q-grid-theme-material .q-grid-column-filter-panel {\n  width: 320px; }\n  .q-grid.q-grid-theme-material .q-grid-column-filter-panel ul {\n    list-style-type: none;\n    padding: 0; }\n  .q-grid.q-grid-theme-material .q-grid-column-filter-panel md-input-container {\n    margin: 0;\n    width: 100%; }\n  .q-grid.q-grid-theme-material .q-grid-column-filter-panel md-checkbox {\n    margin: 0 0 10px 0; }\n  .q-grid.q-grid-theme-material .q-grid-column-filter-panel .q-grid-column-filter-filter {\n    margin-left: 4px;\n    margin-right: 4px;\n    margin-bottom: 0;\n    margin-top: 0; }\n    .q-grid.q-grid-theme-material .q-grid-column-filter-panel .q-grid-column-filter-filter .md-errors-spacer {\n      display: none; }\n  .q-grid.q-grid-theme-material .q-grid-column-filter-panel .q-grid-column-filter-list {\n    overflow-y: auto;\n    height: 376px; }\n    .q-grid.q-grid-theme-material .q-grid-column-filter-panel .q-grid-column-filter-list ul {\n      margin: 0; }\n  .q-grid.q-grid-theme-material .q-grid-column-filter-panel .q-grid-column-filter-actions {\n    padding: 7px 0; }\n\n.q-grid.q-grid-theme-material .q-grid-edit-form-panel {\n  width: 550px;\n  height: 450px; }\n  .q-grid.q-grid-theme-material .q-grid-edit-form-panel .q-grid-edit-form-panel-body {\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 10px 20px 0 0; }\n  .q-grid.q-grid-theme-material .q-grid-edit-form-panel .q-grid-edit-form-reference {\n    height: 300px;\n    margin-bottom: 40px; }\n  .q-grid.q-grid-theme-material .q-grid-edit-form-panel .q-grid-edit-form-file {\n    margin-bottom: 40px; }\n  .q-grid.q-grid-theme-material .q-grid-edit-form-panel .q-grid-edit-form-bool {\n    margin-bottom: 20px; }\n  .q-grid.q-grid-theme-material .q-grid-edit-form-panel .q-grid-edit-form-array {\n    margin-bottom: 20px; }\n  .q-grid.q-grid-theme-material .q-grid-edit-form-panel .q-grid-edit-form-panel-actions {\n    margin-bottom: -20px; }\n    .q-grid.q-grid-theme-material .q-grid-edit-form-panel .q-grid-edit-form-panel-actions .md-button {\n      margin: 8px 0 8px 8px;\n      float: right; }\n  .q-grid.q-grid-theme-material .q-grid-edit-form-panel md-input-container {\n    margin: 0;\n    width: 100%; }\n  .q-grid.q-grid-theme-material .q-grid-edit-form-panel .md-datepicker-input-container {\n    width: 100%; }\n    .q-grid.q-grid-theme-material .q-grid-edit-form-panel .md-datepicker-input-container .md-input {\n      max-width: none; }\n  .q-grid.q-grid-theme-material .q-grid-edit-form-panel h4.md-title {\n    margin-top: 0; }\n\n.q-grid.q-grid-theme-material .q-grid-edit-form-popup h2 {\n  margin: 0 0 0 0; }\n\n.q-grid.q-grid-theme-material .q-grid-edit-form-popup md-icon {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n  min-height: 16px;\n  min-width: 16px; }\n\n.q-grid.q-grid-theme-material .q-grid-export {\n  padding: 10px 0; }\n\n.q-grid.q-grid-theme-material md-menu-item .md-button {\n  text-align: left;\n  display: inline-block;\n  border-radius: 0;\n  margin: auto 0;\n  font-size: 15px;\n  text-transform: none;\n  font-weight: 400;\n  height: 100%;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%; }\n\n.q-grid-excel .q-grid.q-grid-theme-material .q-grid-view thead tr {\n  height: 24px;\n  background-color: #eee;\n  border-spacing: 0;\n  border-collapse: collapse; }\n  .q-grid-excel .q-grid.q-grid-theme-material .q-grid-view thead tr th {\n    border-left: 1px solid #d2d2d2; }\n    .q-grid-excel .q-grid.q-grid-theme-material .q-grid-view thead tr th label {\n      color: black;\n      font-weight: normal; }\n    .q-grid-excel .q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-highlighted {\n      background-color: #9FD5B7; }\n    .q-grid-excel .q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-sorted {\n      background-color: #D3F0E0; }\n    .q-grid-excel .q-grid.q-grid-theme-material .q-grid-view thead tr th .q-grid-divider {\n      display: none; }\n    .q-grid-excel .q-grid.q-grid-theme-material .q-grid-view thead tr th.focused-row-header {\n      background-color: #d2d2d2;\n      border-bottom: 1px solid #227447; }\n      .q-grid-excel .q-grid.q-grid-theme-material .q-grid-view thead tr th.focused-row-header label {\n        color: #227447; }\n\n.q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody {\n  border-collapse: collapse;\n  border-spacing: 0; }\n  .q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr:first-child td.q-grid-focus:first-child {\n    border-left-width: 1px;\n    border-top-width: 1px; }\n  .q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td {\n    color: black;\n    border: 1px solid #ccc;\n    line-height: 21px;\n    padding: 0 4px 0 4px;\n    background-color: white;\n    vertical-align: top;\n    overflow: hidden;\n    outline-width: 0;\n    border-collapse: collapse;\n    border-spacing: 0; }\n    .q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td:not(.q-grid-row-number) {\n      cursor: cell; }\n    .q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.q-grid-array ul {\n      display: inline-block;\n      vertical-align: middle; }\n    .q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.q-grid-array ul li {\n      display: block;\n      min-width: 0;\n      text-align: left;\n      padding: 0;\n      vertical-align: middle;\n      background-color: transparent;\n      border-radius: 0;\n      margin-right: 0; }\n      .q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.q-grid-array ul li::after {\n        content: ',';\n        white-space: pre; }\n      .q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.q-grid-array ul li:last-child::after {\n        content: ''; }\n    .q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.q-grid-focus {\n      background-color: white !important;\n      border: 2px solid #227447; }\n    .q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.q-grid-focus.q-grid-edit input {\n      border: none; }\n    .q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.q-grid-selected {\n      background-color: white !important; }\n    .q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.q-grid-row-number {\n      background-color: #eee; }\n    .q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.q-grid-sorted {\n      background-color: #c6c6c6;\n      border-left: 2px solid #227447;\n      border-right: 2px solid #227447; }\n    .q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.focused-row-header {\n      background-color: #d2d2d2;\n      border-right: 2px solid #227447; }\n\n.q-grid-embed {\n  margin: 16px 0; }\n  .q-grid-embed .q-grid.q-grid-theme-material .q-grid-view tr {\n    height: 32px; }\n  .q-grid-embed .q-grid.q-grid-theme-material .q-grid-view thead tr th {\n    color: rgba(0, 127, 163, 0.77);\n    background-color: rgba(0, 0, 0, 0.04); }\n    .q-grid-embed .q-grid.q-grid-theme-material .q-grid-view thead tr th .q-grid-sort.q-grid-active + label {\n      color: #007fa3; }\n", ""]);

// exports


/***/ }),
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */
/***/ (function(module, exports) {

module.exports = "<md-card>\n\t<q-grid q-grid-autofocus=\"200\"\n\t\t\t  [rows]=\"rows\"\n\t\t\t  [model]=\"gridModel\"\n\t\t\t  [groupBy]=\"['contact.address.state', 'gender']\">\n\t\t<q-grid-columns generation=\"deep\">\n\t\t\t<!--<q-grid-column key=\"name.last\">-->\n\t\t\t<!--<ng-template for=\"body\" let-$cell>-->\n\t\t\t<!--<span style=\"color: blue\">{{$cell.value}}</span>-->\n\t\t\t<!--</ng-template>-->\n\t\t\t<!--&lt;!&ndash;<ng-template for=\"edit\" let-$cell let-$view=\"$view\">&ndash;&gt;-->\n\t\t\t<!--&lt;!&ndash;<button (click)=\"$view.edit.cell.cancel.execute($cell, $event)\">custom template</button>&ndash;&gt;-->\n\t\t\t<!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\n\t\t\t<!--</q-grid-column>-->\n\t\t\t<!--<q-grid-column key=\"contact.singleEmail\" title=\"Experimental\" editor=\"password\">-->\n\t\t\t<!--</q-grid-column>-->\n\t\t</q-grid-columns>\n\t</q-grid>\n</md-card>\n"

/***/ }),
/* 682 */
/***/ (function(module, exports) {

module.exports = "<tr *ngFor=\"let $row of $view.body.rows; let $rowIndex = index\"\r\n\t [q-grid-core-tr]=\"$rowIndex\">\r\n\t<td *ngFor=\"let $column of $view.body.columns($row, $table.pin); let $columnIndex = index\">\r\n\t\t<ng-container q-grid-core-td\r\n\t\t\t\t\t\t  [q-grid-core-column-index]=\"$columnIndex\"\r\n\t\t\t\t\t\t  [q-grid-core-row-index]=\"$rowIndex\">\r\n\t\t</ng-container>\r\n\t</td>\r\n</tr>\r\n"

/***/ }),
/* 683 */
/***/ (function(module, exports) {

module.exports = "<tr *ngFor=\"let $row of $view.foot.rows; let $rowIndex = index\">\r\n\t<td *ngFor=\"let $column of $view.foot.columns; let $columnIndex = index\"\r\n\t\t [attr.rowspan]=\"$column.rowspan\"\r\n\t\t [attr.colspan]=\"$column.colspan\">\r\n\t\t<ng-container q-grid-core-tf\r\n\t\t\t\t\t\t  [q-grid-core-column-index]=\"$columnIndex\"\r\n\t\t\t\t\t\t  [q-grid-core-row-index]=\"$rowIndex\">\r\n\t\t</ng-container>\r\n\t</td>\r\n</tr>\r\n"

/***/ }),
/* 684 */
/***/ (function(module, exports) {

module.exports = "<tr *ngFor=\"let $row of $view.head.rows; let $rowIndex = index\">\n\t<th *ngFor=\"let $column of $row; let $columnIndex = index\"\n\t\t (mouseenter)=\"$view.highlight.column.execute($column.model, true)\"\n\t\t (mouseleave)=\"$view.highlight.column.execute($column.model, false)\"\n\t\t [attr.rowspan]=\"$column.rowspan\"\n\t\t [attr.colspan]=\"$column.colspan\"\n\t\t [q-grid-drag]=\"$view.head.transfer($column.model)\"\n\t\t [q-grid-drop]=\"$view.head.transfer($column.model)\"\n\t\t (q-grid-on-drop)=\"$view.head.drop.execute($event)\"\n\t\t [q-grid-can-drop]=\"$view.head.drop.canExecute\"\n\t\t [q-grid-can-drag]=\"$view.head.drag.canExecute\"\n\t\t [q-grid-resize]=\"$column.model.key\"\n\t\t q-grid-resize-path=\"columns\"\n\t\t [q-grid-can-resize]=\"$view.head.resize.canExecute\">\n\t\t<ng-container q-grid-core-th\n\t\t\t\t\t\t  [q-grid-core-column-index]=\"$columnIndex\"\n\t\t\t\t\t\t  [q-grid-core-row-index]=\"$rowIndex\">\n\t\t</ng-container>\n\t</th>\n</tr>\n"

/***/ }),
/* 685 */
/***/ (function(module, exports) {

module.exports = "<table q-grid-markup=\"table\">\n\t<thead *ngIf=\"visibility.head\"\n\t\t\t q-grid-core-head\n\t\t\t q-grid-markup=\"head\"\n\t\t\t q-grid-animate=\"false\"\n\t\t\t q-grid-core-head>\n\t</thead>\n\t<tbody *ngIf=\"visibility.body\"\n\t\t\t q-grid-markup=\"body\"\n\t\t\t q-grid-animate=\"false\"\n\t\t\t vscroll\n\t\t\t vscroll-port-y=\"$view.scroll.y\"\n\t\t\t q-grid-core-body\n\t\t\t tabindex=\"0\">\n\t</tbody>\n\t<tfoot *ngIf=\"visibility.foot\"\n\t\t\t q-grid-markup=\"foot\"\n\t\t\t q-grid-animate=\"false\"\n\t\t\t q-grid-core-foot>\n\t</tfoot>\n</table>\n"

/***/ }),
/* 686 */
/***/ (function(module, exports) {

module.exports = "<ng-container key=\"toolbar-{{position}}.tpl.html\"></ng-container>\n"

/***/ }),
/* 687 */
/***/ (function(module, exports) {

module.exports = "<q-grid-core-table *ngIf=\"visibility.pin.left\"\r\n\t\t\t\t\t\t pin=\"left\"\r\n\t\t\t\t\t\t class=\"q-grid-table q-grid-table-left layout-column\">\r\n</q-grid-core-table>\r\n<q-grid-core-table class=\"q-grid-table q-grid-table-center layout-column flex\">\r\n</q-grid-core-table>\r\n<q-grid-core-table *ngIf=\"visibility.pin.right\"\r\n\t\t\t\t\t\t pin=\"right\"\r\n\t\t\t\t\t\t class=\"q-grid-table q-grid-table-right layout-column\">\r\n</q-grid-core-table>\r\n"

/***/ }),
/* 688 */
/***/ (function(module, exports) {

module.exports = "<q-grid-theme></q-grid-theme>\n<q-grid-box class=\"q-grid-box layout-column\" [ngClass]=\"{'q-grid-active': isActive}\">\n\t<q-grid-core-toolbar position=\"top\"\n\t\t\t\t\t\t\t\tclass=\"q-grid-toolbar q-grid-toolbar-top flex-auto\"\n\t\t\t\t\t\t\t\t*ngIf=\"visibility.toolbar.top\">\n\t</q-grid-core-toolbar>\n\t<div class=\"flex-100 layout-row\"\n\t\t  [ngClass]=\"{\n\t\t  \t'q-grid-with-left-pin': visibility.pin.left,\n\t\t  \t'q-grid-with-right-pin': visibility.pin.right\n\t\t  }\">\n\t\t<q-grid-core-toolbar position=\"left\"\n\t\t\t\t\t\t\t\t\tclass=\"q-grid-toolbar q-grid-toolbar-left flex-auto\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"visibility.toolbar.left\">\n\t\t</q-grid-core-toolbar>\n\t\t<q-grid-core-view class=\"q-grid-view q-grid-view-center layout-column flex\"\n\t\t\t\t\t\t\t\tq-grid-markup=\"view\">\n\t\t</q-grid-core-view>\n\t\t<q-grid-core-toolbar position=\"right\"\n\t\t\t\t\t\t\t\t\tclass=\"q-grid-toolbar q-grid-toolbar-right flex-auto\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"visibility.toolbar.right\">\n\t\t</q-grid-core-toolbar>\n\t</div>\n\t<q-grid-core-toolbar position=\"bottom\"\n\t\t\t\t\t\t\t\tclass=\"q-grid-toolbar q-grid-toolbar-bottom flex-auto\"\n\t\t\t\t\t\t\t\t*ngIf=\"visibility.toolbar.bottom\">\n\t</q-grid-core-toolbar>\n</q-grid-box>\n"

/***/ }),
/* 689 */
/***/ (function(module, exports) {

module.exports = "<ng-container [key]=\"templateContentKey\" [context]=\"context\"></ng-container>\r\n"

/***/ }),
/* 690 */
/***/ (function(module, exports) {

module.exports = "<ng-container key=\"plugin-pager.tpl.html\" [context]=\"context\"></ng-container>\n"

/***/ }),
/* 691 */
/***/ (function(module, exports) {

module.exports = "<ng-container key=\"plugin-progress.tpl.html\" [context]=\"context\"></ng-container>\n"

/***/ }),
/* 692 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-array.tpl.html' let-$cell>\r\n\t<ul>\r\n\t\t<li *ngFor=\"let item of $cell.value\">{{item}}</li>\r\n\t</ul>\r\n</ng-template>"

/***/ }),
/* 693 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-bool.tpl.html' let-$cell>\r\n\t<md-icon *ngIf=\"$cell.value\">check</md-icon>\r\n</ng-template>\r\n"

/***/ }),
/* 694 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-email.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<a [href]=\"'mailto:$cell.value'\" (bind)=\"$cell.label || $cell.value\">\r\n\t\t{{$cell.value}}</a>\r\n\t<button class=\"q-grid-email-edit\"\r\n\t\t\t  mdTooltip='Edit Email'\r\n\t\t\t  [mdTooltipPosition]=\"'before'\"\r\n\t\t\t  aria-label=\"'email'\"\r\n\t\t\t  (disabled)=\"!$view.edit.cell.enter.canExecute($cell)\"\r\n\t\t\t  (click)=\"$view.edit.cell.enter.execute($cell)\">\r\n\t\t<md-icon>edit</md-icon>\r\n\t</button>\r\n</ng-template>\r\n"

/***/ }),
/* 695 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-group.tpl.html' let-$cell let-$view=\"$view\">\n\t<div [ngStyle]=\"{'padding-left': $view.group.offset($cell.row) + 'px'}\">\n\t\t<button (mouseup)=\"$view.group.toggleStatus.execute($cell.row)\"\n\t\t\t\t  *ngIf=\"$view.group.toggleStatus.canExecute($cell.row)\"\n\t\t\t\t  [ngSwitch]=\"$view.group.status($cell.row)\"\n\t\t\t\t  tabindex=\"-1\"\n\t\t\t\t  md-icon-button>\n\t\t\t<md-icon *ngSwitchCase=\"'expand'\">arrow_drop_down</md-icon>\n\t\t\t<md-icon class=\"q-grid-arrow-right\" *ngSwitchCase=\"'collapse'\">arrow_drop_up</md-icon>\n\t\t</button>\n\t\t<span>{{$view.group.value($cell.row)}}</span>\n\t\t<span *ngIf=\"$view.group.toggleStatus.canExecute($cell.row)\">({{$view.group.count($cell.row)}})</span>\n\t</div>\n</ng-template>\n"

/***/ }),
/* 696 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-image.tpl.html' let-$cell>\r\n\t<img *ngIf=\"$cell.value\" [src]=\"$cell.value\"/>\r\n\t<md-icon *ngIf=\"!$cell.value\">account_circle</md-icon>\r\n</ng-template>\r\n"

/***/ }),
/* 697 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-select.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<md-checkbox indeterminate=\"$view.selection.isIndeterminate($row)\"\r\n\t\t\t\t\t (checked)=\"$view.selection.state($row)\"\r\n\t\t\t\t\t (click)=\"$view.selection.toggleRow.execute($row)\"\r\n\t\t\t\t\t (disabled)=\"!$view.selection.toggleRow.canExecute($row)\"\r\n\t\t\t\t\t ariaLabel=\"Selection\">\r\n\t</md-checkbox>\r\n</ng-template>\r\n"

/***/ }),
/* 698 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-text.tpl.html' let-$cell>\r\n\t<span>{{$cell.value}}</span>\r\n</ng-template>\r\n"

/***/ }),
/* 699 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-array.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-array\">\r\n\t\t<h2 class=\"md-title\">Edit {{$cell.column.title}}</h2>\r\n\t\t<div class=\"q-grid-array-view\">\r\n\t\t\t<md-chip-list>\r\n\t\t\t\t<md-chip *ngFor=\"let item of $cell.value\" selected=\"true\">{{item}}</md-chip>\r\n\t\t\t</md-chip-list>\r\n\t\t</div>\r\n\t\t<div class=\"q-grid-actions\">\r\n\t\t\t<button md-button (click)=\"$view.edit.cell.commit.execute($cell, $event)\">Save</button>\r\n\t\t\t<button md-button (click)=\"$view.edit.cell.cancel.execute($cell, $event)\">Cancel</button>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 700 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-bool.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-bool\">\r\n\t\t<md-checkbox\r\n\t\t\tq-grid-focus\r\n\t\t\t[(ngModel)]=\"$view.edit.cell.value\"\r\n\t\t\t(blur)=\"$view.edit.cell.commit.execute($cell)\">\r\n\t\t</md-checkbox>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 701 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-date.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-date\">\r\n\t\t<h2 class=\"md-title\">Edit {{$cell.column.title}}</h2>\r\n\t\t<md-input-container>\r\n\t\t\t<input\r\n\t\t\t\tmdInput\r\n\t\t\t\tq-grid-focus\r\n\t\t\t\t[mdDatepicker]=\"myDatepicker\"\r\n\t\t\t\t[(ngModel)]=\"$view.edit.cell.value\"\r\n\t\t\t\t(blur)=\"$view.edit.cell.commit.execute($cell)\">\r\n\t\t\t<button mdSuffix [mdDatepickerToggle]=\"myDatepicker\"></button>\r\n\t\t</md-input-container>\r\n\t\t<div class=\"q-grid-actions\">\r\n\t\t\t<button md-button (click)=\"$view.edit.cell.commit.execute($cell, $event)\">Save</button>\r\n\t\t\t<button md-button (click)=\"$view.edit.cell.cancel.execute($cell, $event)\">Cancel</button>\r\n\t\t</div>\r\n\t\t<md-datepicker #myDatepicker></md-datepicker>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 702 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-dropdown.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div q-grid-editor q-grid-array>\r\n\t\t<md-select q-grid-focus [(ngModel)]=\"$view.edit.cell.value\" placeholder=\"Select a value\"\r\n\t\t\t\t\t  (onOpen)=\"$view.edit.cell.fetch.busy\"\r\n\t\t\t\t\t  (onClose)=\"$view.edit.cell.cancel.execute($cell)\">\r\n\t\t\t<md-option *ngFor=\"let option of $view.edit.cell.fetch.result\" [value]=\"option\">\r\n\t\t\t\t{{ option }}\r\n\t\t\t</md-option>\r\n\t\t</md-select>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 703 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-email.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-email\">\r\n\t\t<h2>Edit {{$cell.column.title}}</h2>\r\n\t\t<div layout=\"column\" class=\"q-grid-email-fields\" flex>\r\n\t\t\t<md-input-container *ngIf=\"$cell.column.label !== null\">\r\n\t\t\t\t<label>Label</label>\r\n\t\t\t\t<input mdInput\r\n\t\t\t\t\t\t type=\"text\"\r\n\t\t\t\t\t\t [(ngModel)]=\"$view.edit.cell.label\"\r\n\t\t\t\t\t\t (blur)=\"$view.edit.cell.commit.execute($cell)\">\r\n\t\t\t</md-input-container>\r\n\t\t\t<md-input-container>\r\n\t\t\t\t<label>Email</label>\r\n\t\t\t\t<input q-grid-focus\r\n\t\t\t\t\t\t mdInput\r\n\t\t\t\t\t\t type=\"email\"\r\n\t\t\t\t\t\t [(ngModel)]=\"$view.edit.cell.value\"\r\n\t\t\t\t\t\t (blur)=\"$view.edit.cell.commit.execute($cell)\">\r\n\t\t\t</md-input-container>\r\n\t\t</div>\r\n\t\t<div class=\"q-grid-actions\">\r\n\t\t\t<button md-button (click)=\"$view.edit.cell.commit.execute($cell, $event)\">Save\r\n\t\t\t</button>\r\n\t\t\t<button md-button (click)=\"$view.edit.cell.cancel.execute($cell, $event)\">Cancel\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 704 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-number.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-number\">\r\n\t\t<md-input-container>\r\n\t\t\t<input mdInput\r\n\t\t\t\t\t type=\"number\"\r\n\t\t\t\t\t #input\r\n\t\t\t\t\t q-grid-focus\r\n\t\t\t\t\t [(ngModel)]=\"$view.edit.cell.value\"\r\n\t\t\t\t\t (blur)=\"$view.edit.cell.commit.execute($cell)\">\r\n\t\t</md-input-container>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 705 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-password.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-password\">\r\n\t\t<md-input-container>\r\n\t\t\t<input mdInput\r\n\t\t\t\t\t [type]=\"'password'\"\r\n\t\t\t\t\t q-grid-focus\r\n\t\t\t\t\t (blur)=\"$view.edit.cell.commit.execute($cell)\"\r\n\t\t\t\t\t [(ngModel)]=\"$view.edit.cell.value\">\r\n\t\t</md-input-container>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 706 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-text.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-text\">\r\n\t\t<md-input-container>\r\n\t\t\t<input mdInput\r\n\t\t\t\t\t #input\r\n\t\t\t\t\t q-grid-focus\r\n\t\t\t\t\t maxlength=\"{{$cell.column.maxLength}}\"\r\n\t\t\t\t\t [(ngModel)]=\"$view.edit.cell.value\"\r\n\t\t\t\t\t (blur)=\"$view.edit.cell.commit.execute($cell)\">\r\n\t\t\t<md-hint align=\"end\">{{input.value.length}} / {{$cell.column.maxLength}}</md-hint>\r\n\t\t</md-input-container>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 707 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-textarea.tpl.html' let-$cell let-$view=\"$view\">\n\t<div class=\"q-grid-editor\">\n\t\t<md-input-container>\n            <textarea mdInput\n\t\t\t\t\t\t\t mdTextareaAutosize\n\t\t\t\t\t\t\t rows=\"10\"\n\t\t\t\t\t\t\t q-grid-focus\n\t\t\t\t\t\t\t (blur)=\"$view.edit.cell.commit.execute($cell)\"\n\t\t\t\t\t\t\t [(ngModel)]=\"$view.edit.cell.value\">\n            </textarea>\n\t\t</md-input-container>\n\t</div>\n</ng-template>\n\n<!--maxlength=\"{{$cell.column.maxLength}}\"-->\n"

/***/ }),
/* 708 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-text.tpl.html' let-$cell>\r\n\t<span>{{$cell.value}}</span>\r\n</ng-template>\r\n"

/***/ }),
/* 709 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"head-cell-text.tpl.html\" let-$cell let-$view=\"$view\">\r\n\t<div (click)=\"$view.sort.toggle.execute($cell.column)\"\r\n\t\t  (mouseover)=\"$view.sort.hover = true\"\r\n\t\t  (mouseleave)=\"$view.sort.hover = false\">\r\n\t\t<div class=\"q-grid-sort\"\r\n\t\t\t  [ngClass]=\"{'q-grid-active': $view.sort.order($cell.column) >= 0}\"\r\n\t\t\t  *ngIf=\"$cell.column.canSort\"\r\n\t\t\t  [ngSwitch]=\"$view.sort.direction($cell.column)\">\r\n\t\t\t<md-icon class=\"q-grid-asc\" *ngSwitchCase=\"'asc'\">arrow_downward</md-icon>\r\n\t\t\t<md-icon class=\"q-grid-desc\" *ngSwitchCase=\"'desc'\">arrow_upward</md-icon>\r\n\t\t\t<ng-container *ngSwitchDefault>\r\n\t\t\t\t<md-icon *ngIf=\"$view.sort.hover\">arrow_downward</md-icon>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t\t<label [mdTooltip]=\"$cell.column.title\">\r\n\t\t\t{{$cell.column.title}}\r\n\t\t</label>\r\n\t</div>\r\n\t<!--<q-grid:column-filter ng-if=\"$cell.column.canFilter\"-->\r\n\t<!--class=\"q-grid-column-filter\"-->\r\n\t<!--key=\"$cell.column.key\"-->\r\n\t<!--title=\"{{$cell.column.title}}\"-->\r\n\t<!--ng-class=\"{'q-grid-active': $view.filter.has($cell.column)}\">-->\r\n\t<!--</q-grid:column-filter>-->\r\n</ng-template>\r\n"

/***/ }),
/* 710 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"plugin-export.tpl.html\" let-$export>\r\n\t<div class=\"q-grid-export\">\r\n\t\t<button md-button *ngIf=\"$export[$export.type] && $export[$export.type].canExecute()\"\r\n\t\t\t\t  (click)=\"$export[$export.type].execute()\">\r\n\t\t\t<md-icon>file_download</md-icon>\r\n\t\t\tExport to {{$export.type}}\r\n\t\t</button>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 711 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"plugin-pager.tpl.html\" let-$pager>\n\t<div class=\"q-grid-pager\" [ngSwitch]=\"$pager.scroll.mode\">\n\t\t<div *ngSwitchCase=\"'virtual'\">\n\t\t\t<label class=\"q-grid-page\" [ngSwitch]=\"$pager.mode\">\n\t\t\t\t<span *ngSwitchCase=\"'row'\">{{$pager.from}}-{{$pager.to}} of {{$pager.total}}</span>\n\t\t\t\t<span *ngSwitchDefault>{{$pager.current + 1}} of {{$pager.totalPages}}</span>\n\t\t\t</label>\n\t\t</div>\n\t\t<div *ngSwitchDefault>\n\t\t\t<label class=\"q-grid-page-size\">Rows per page:</label>\n\t\t\t<md-select tabindex=\"-1\"\n\t\t\t\t\t\t  aria-label=\"Page Size List\"\n\t\t\t\t\t\t  class=\"q-grid-page-size\"\n\t\t\t\t\t\t  [(ngModel)]=\"$pager.size\">\n\t\t\t\t<md-option *ngFor=\"let size of $pager.sizeList\" [value]=\"size\">{{size}}</md-option>\n\t\t\t</md-select>\n\t\t\t<label class=\"q-grid-page\" ng-switch=\"::$pager.mode\">\n\t\t\t\t<span *ngSwitchCase=\"row\">{{$pager.from}}-{{$pager.to}} of {{$pager.total}}</span>\n\t\t\t\t<span *ngSwitchDefault>{{$pager.current + 1}} of {{$pager.totalPages}}</span>\n\t\t\t</label>\n\t\t\t<button tabindex=\"-1\"\n\t\t\t\t\t  md-button\n\t\t\t\t\t  class=\"md-icon-button q-grid-prev-page\"\n\t\t\t\t\t  [disabled]=\"!$pager.prev.canExecute()\"\n\t\t\t\t\t  (click)=\"$pager.prev.execute();\">\n\t\t\t\t<md-icon>keyboard_arrow_left</md-icon>\n\t\t\t</button>\n\t\t\t<button tabindex=\"-1\"\n\t\t\t\t\t  md-button\n\t\t\t\t\t  class=\"md-icon-button q-grid-next-page\"\n\t\t\t\t\t  [disabled]=\"!$pager.next.canExecute()\"\n\t\t\t\t\t  (click)=\"$pager.next.execute();\">\n\t\t\t\t<md-icon>keyboard_arrow_right</md-icon>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</ng-template>\n"

/***/ }),
/* 712 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"plugin-progress.tpl.html\" let-$progress>\r\n\t<div class=\"q-grid-progress\" *ngIf=\"$progress.isBusy\">\r\n\t\t<md-progress-bar mode=\"indeterminate\"></md-progress-bar>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 713 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"toolbar-bottom.tpl.html\">\r\n\t<q-grid-pager></q-grid-pager>\r\n</ng-template>\r\n"

/***/ }),
/* 714 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"toolbar-left.tpl.html\">\n</ng-template>\n"

/***/ }),
/* 715 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"toolbar-left.tpl.html\">\n</ng-template>\n"

/***/ }),
/* 716 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"toolbar-top.tpl.html\">\n\t<h3 class=\"mat-card-title\"\n\t\t style=\"margin: 0; height: 56px; line-height: 56px;\">\n\t\tANGULAR 2 QGRID SANDBOX\n\t</h3>\n\t<q-grid-progress></q-grid-progress>\n</ng-template>\n"

/***/ }),
/* 717 */,
/* 718 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(527);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 719 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(528);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 720 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(529);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(13))(183)

/***/ }),
/* 729 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(13))(186)

/***/ }),
/* 730 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(13))(235)

/***/ }),
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */,
/* 832 */,
/* 833 */,
/* 834 */,
/* 835 */,
/* 836 */,
/* 837 */,
/* 838 */,
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 865 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
],[287]);
//# sourceMappingURL=main.bundle.js.map