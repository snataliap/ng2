(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ng2-qgrid"] = factory();
	else
		root["ng2-qgrid"] = factory();
})(this, (function() {
return webpackJsonpng2_qgrid([1,2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cache__ = __webpack_require__(300);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Cache", (function() { return __WEBPACK_IMPORTED_MODULE_0__cache__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error__ = __webpack_require__(53);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AppError", (function() { return __WEBPACK_IMPORTED_MODULE_1__error__["AppError"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event__ = __webpack_require__(151);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Event", (function() { return __WEBPACK_IMPORTED_MODULE_2__event__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_listener__ = __webpack_require__(48);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EventListener", (function() { return __WEBPACK_IMPORTED_MODULE_3__event_listener__["EventListener"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fetch__ = __webpack_require__(317);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Fetch", (function() { return __WEBPACK_IMPORTED_MODULE_4__fetch__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guard__ = __webpack_require__(152);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Guard", (function() { return __WEBPACK_IMPORTED_MODULE_5__guard__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__log__ = __webpack_require__(71);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Log", (function() { return __WEBPACK_IMPORTED_MODULE_6__log__["Log"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_bind__ = __webpack_require__(318);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ModelBinder", (function() { return __WEBPACK_IMPORTED_MODULE_7__model_bind__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model__ = __webpack_require__(72);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Model", (function() { return __WEBPACK_IMPORTED_MODULE_8__model__["Model"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__event_manager__ = __webpack_require__(73);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EventManager", (function() { return __WEBPACK_IMPORTED_MODULE_9__event_manager__["EventManager"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__range__ = __webpack_require__(319);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Range", (function() { return __WEBPACK_IMPORTED_MODULE_10__range__["a"]; }));












/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(301);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isObject", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["o"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isFunction", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["m"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isArray", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["i"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isString", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["p"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isUndefined", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["q"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isBoolean", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["j"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isDate", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["k"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNumber", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["n"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isEmail", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["l"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "clone", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["b"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "cloneDeep", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["c"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "debounce", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["d"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "merge", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["s"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "flatten", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["f"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "startCase", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["x"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "assignWith", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["a"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "uniq", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["B"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "identity", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["h"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "yes", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["C"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "no", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["u"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toCamelCase", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["A"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "noop", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["v"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "orderBy", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["w"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "max", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["r"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "min", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["t"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sumBy", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["y"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "zip", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["D"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "takeWhile", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["z"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "dropWhile", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["e"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "groupBy", (function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["g"]; }));


/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell_view__ = __webpack_require__(334);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__cell_view__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__row_view__ = __webpack_require__(335);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_view__ = __webpack_require__(58);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_2__column_view__["ColumnView"]; }));




/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_model__ = __webpack_require__(338);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_path__ = __webpack_require__(339);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_1__template_path__["a"]; }));



/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(75), exports);
tslib_1.__exportStar(__webpack_require__(154), exports);
tslib_1.__exportStar(__webpack_require__(33), exports);
tslib_1.__exportStar(__webpack_require__(322), exports);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__disposable_view__ = __webpack_require__(105);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(399);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_1__view__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_model__ = __webpack_require__(400);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_2__view_model__["a"]; }));




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__command__ = __webpack_require__(107);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Command", (function() { return __WEBPACK_IMPORTED_MODULE_0__command__["Command"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command_manager__ = __webpack_require__(162);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CommandManager", (function() { return __WEBPACK_IMPORTED_MODULE_1__command_manager__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__composite_command_manager__ = __webpack_require__(336);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CompositeCommandManager", (function() { return __WEBPACK_IMPORTED_MODULE_2__composite_command_manager__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table_command_manager__ = __webpack_require__(337);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TableCommandManager", (function() { return __WEBPACK_IMPORTED_MODULE_3__table_command_manager__["a"]; }));





/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(108);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_0__resource__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__ = __webpack_require__(164);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resource_factory__ = __webpack_require__(352);
/* unused harmony namespace reexport */




/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return DataColumnModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model__ = __webpack_require__(22);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var DataColumnModel = (function (_ColumnModel) {
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
})(__WEBPACK_IMPORTED_MODULE_0__column_model__["a" /* ColumnModel */]);

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["map"] = map;
/* harmony export (immutable) */ __webpack_exports__["getValue"] = getValue;
/* harmony export (immutable) */ __webpack_exports__["find"] = find;
/* harmony export (immutable) */ __webpack_exports__["findIndex"] = findIndex;
/* harmony export (immutable) */ __webpack_exports__["lineView"] = lineView;
/* harmony export (immutable) */ __webpack_exports__["expand"] = expand;
/* harmony export (immutable) */ __webpack_exports__["collapse"] = collapse;
/* harmony export (immutable) */ __webpack_exports__["widthFactory"] = widthFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);


function map(columns) {
	return columns.reduce((function (memo, column) {
		memo[column.key] = column;
		return memo;
	}), {});
}

function getValue(column) {
	return Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(column.value) ? function (row) {
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

function lineView(columnRows) {
	var height = columnRows.length;
	if (height === 1) {
		return Array.from(columnRows[0]);
	}

	if (height > 1) {
		var view = expand(columnRows);
		return collapse(view);
	}

	return [];
}

function expand(columnRows) {
	var height = columnRows.length;
	var view = [];
	var cursors = [];
	for (var ri = 0; ri < height; ri++) {
		var columnRow = columnRows[ri];
		var columnLength = columnRow.length;
		var cursor = cursors.length > ri ? cursors[ri] : cursors[ri] = 0;
		for (var ci = 0; ci < columnLength; ci++) {
			var column = columnRow[ci];
			var rowspan = column.rowspan;
			var colspan = column.colspan;
			for (var rj = 0; rj < rowspan; rj++) {
				for (var cj = 0; cj < colspan; cj++) {
					var rij = ri + rj;
					var cij = cursor + cj;
					var viewRow = view.length > rij ? view[rij] : view[rij] = [];
					viewRow[cij] = column;

					var rijCursor = cursors.length > rij ? cursors[rij] : cursors[rij] = 0;
					if (rijCursor === cij) {
						cursors[rij] = rijCursor + 1;
					}
				}
			}

			cursor += colspan;
			cursors[ri] = cursor;
		}
	}

	return view;
}

function collapse(view) {
	var line = [];
	var height = view.length;
	if (height) {
		var set = new Set();
		var lastRow = view[height - 1];
		var width = lastRow.length;
		for (var i = 0; i < width; i++) {
			var column = lastRow[i];
			if (set.has(column)) {
				continue;
			}

			line.push(column);
			set.add(column);
		}
	}

	return line;
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["get"] = get;
/* harmony export (immutable) */ __webpack_exports__["getFactory"] = getFactory;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure__ = __webpack_require__(3);




function get(row, column) {
	return column.$value ? column.$value({ $row: row, $column: column }) : column.value ? column.value(row) : column.path ? Object(__WEBPACK_IMPORTED_MODULE_1__path__["a" /* compile */])(column.path)(row) : row[column.key];
}

function getFactory(column) {
	var get = column.$value ? function (row) {
		return column.$value({ $row: row, $column: column });
	} : column.value ? function (row) {
		return column.value(row);
	} : column.path ? Object(__WEBPACK_IMPORTED_MODULE_1__path__["a" /* compile */])(column.path) : function (row) {
		return row[column.key];
	};

	return function (row) {
		return get(row);
	};
}

function set(row, column, value) {
	if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(column.$value)) {
		return column.$value({ $row: row, $value: value, $column: column });
	}

	if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(column.value)) {
		return column.value(row, value);
	}

	if (column.path) {
		return Object(__WEBPACK_IMPORTED_MODULE_1__path__["a" /* compile */])(column.path)(row, value);
	}

	if (row.hasOwnProperty(column.key)) {
		return row[column.key] = value;
	}

	throw new __WEBPACK_IMPORTED_MODULE_2__infrastructure__["AppError"]('value', 'Row can\'t be edit on "' + column.key + '" column');
}

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ColumnModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('custom-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('custom-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

var ColumnModel = (function () {
	function ColumnModel() {
		var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'text';

		_classCallCheck(this, ColumnModel);

		this.type = type;
		this.key = null;
		this.title = null;
		this.value = null;
		this.label = null;
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

		this.$label = null;
		this.$value = null;
	}

	_createClass(ColumnModel, [{
		key: 'toString',
		value: function toString() {
			return this.type + ': ' + this.title;
		}
	}]);

	return ColumnModel;
})();

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(148), exports);
tslib_1.__exportStar(__webpack_require__(74), exports);
tslib_1.__exportStar(__webpack_require__(103), exports);
tslib_1.__exportStar(__webpack_require__(102), exports);
tslib_1.__exportStar(__webpack_require__(104), exports);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aggregation__ = __webpack_require__(367);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Aggregation", (function() { return __WEBPACK_IMPORTED_MODULE_0__aggregation__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__convert__ = __webpack_require__(368);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "parseFactory", (function() { return __WEBPACK_IMPORTED_MODULE_1__convert__["c"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getType", (function() { return __WEBPACK_IMPORTED_MODULE_1__convert__["a"]; }));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", (function() { return __WEBPACK_IMPORTED_MODULE_1__convert__["b"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid__ = __webpack_require__(165);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GridService", (function() { return __WEBPACK_IMPORTED_MODULE_2__grid__["GridService"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guid__ = __webpack_require__(167);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "guid", (function() { return __WEBPACK_IMPORTED_MODULE_3__guid__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__merge__ = __webpack_require__(369);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "merge", (function() { return __WEBPACK_IMPORTED_MODULE_4__merge__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__middleware__ = __webpack_require__(166);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Middleware", (function() { return __WEBPACK_IMPORTED_MODULE_5__middleware__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__path__ = __webpack_require__(110);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "compile", (function() { return __WEBPACK_IMPORTED_MODULE_6__path__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__job_line__ = __webpack_require__(370);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "jobLine", (function() { return __WEBPACK_IMPORTED_MODULE_7__job_line__["a"]; }));









/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_PREFIX", (function() { return GRID_PREFIX; }));
var GRID_PREFIX = 'q-grid';

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var component_1 = __webpack_require__(9);
var grid_1 = __webpack_require__(118);
var scroll_1 = __webpack_require__(119);
var view_factory_1 = __webpack_require__(396);
var utility_1 = __webpack_require__(4);
var ViewCoreService = /** @class */ (function () {
    function ViewCoreService(root, gridServiceFactory, vscroll) {
        this.root = root;
        this.gridServiceFactory = gridServiceFactory;
        this.vscroll = vscroll;
        this.destroy = utility_1.noop;
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
        var selectors = {
            th: 'q-grid-core-th'
        };
        var injectViewServicesTo = view_factory_1.viewFactory(model, table, commandManager, gridService, this.vscroll, selectors);
        this.destroy = injectViewServicesTo(this);
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var infrastructure_1 = __webpack_require__(3);
var utility_1 = __webpack_require__(4);
var core_1 = __webpack_require__(2);
var component_1 = __webpack_require__(9);
var infrastructure_2 = __webpack_require__(3);
var PluginComponent = /** @class */ (function (_super) {
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
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var infrastructure_1 = __webpack_require__(3);
var core_1 = __webpack_require__(2);
var infrastructure_2 = __webpack_require__(3);
var utility_1 = __webpack_require__(4);
var bag_1 = __webpack_require__(106);
var RootService = /** @class */ (function () {
    function RootService(changeDetector) {
        this.changeDetector = changeDetector;
        this.gridModel = null;
        this.markup = {};
        this.bag = {
            head: new bag_1.Bag(),
            body: new bag_1.Bag(),
            foot: new bag_1.Bag()
        };
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
        var _this = this;
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
                        _this.changeDetector.detectChanges();
                        return result;
                    }
                    default:
                        throw new infrastructure_2.AppError('grid', "Invalid mode " + mode);
                }
            }
            return setTimeout((function () {
                lf();
                if (gf) {
                    gf();
                }
                _this.changeDetector.detectChanges();
            }), timeout);
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var TableCoreService = /** @class */ (function () {
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
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["columnFactory"] = columnFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scene_view_column_view__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_type__ = __webpack_require__(111);





function merge(target, source) {
	if (target && source) {
		return Object(__WEBPACK_IMPORTED_MODULE_1__utility__["assignWith"])(target, source, (function (s, t) {
			return Object(__WEBPACK_IMPORTED_MODULE_1__utility__["isUndefined"])(s) ? t : s;
		}));
	}

	return target || Object(__WEBPACK_IMPORTED_MODULE_1__utility__["clone"])(source);
}

function columnFactory(model) {
	var columnList = model.columnList;
	var columnMap = {
		'text': __WEBPACK_IMPORTED_MODULE_3__column_type__["v" /* TextColumn */],
		'number': __WEBPACK_IMPORTED_MODULE_3__column_type__["k" /* NumberColumn */],
		'bool': __WEBPACK_IMPORTED_MODULE_3__column_type__["b" /* BoolColumn */],
		'date': __WEBPACK_IMPORTED_MODULE_3__column_type__["d" /* DateColumn */],
		'array': __WEBPACK_IMPORTED_MODULE_3__column_type__["a" /* ArrayColumn */],
		'email': __WEBPACK_IMPORTED_MODULE_3__column_type__["e" /* EmailColumn */],
		'password': __WEBPACK_IMPORTED_MODULE_3__column_type__["m" /* PasswordColumn */],
		'select': __WEBPACK_IMPORTED_MODULE_3__column_type__["u" /* SelectColumn */],
		'group': __WEBPACK_IMPORTED_MODULE_3__column_type__["h" /* GroupColumn */],
		'pivot': __WEBPACK_IMPORTED_MODULE_3__column_type__["n" /* PivotColumn */],
		'row-number': __WEBPACK_IMPORTED_MODULE_3__column_type__["s" /* RowNumberColumn */],
		'row-indicator': __WEBPACK_IMPORTED_MODULE_3__column_type__["r" /* RowIndicatorColumn */],
		'row-options': __WEBPACK_IMPORTED_MODULE_3__column_type__["t" /* RowOptionsColumn */],
		'row-expand': __WEBPACK_IMPORTED_MODULE_3__column_type__["q" /* RowExpandColumn */],
		'row-details': __WEBPACK_IMPORTED_MODULE_3__column_type__["p" /* RowDetailsColumn */],
		'pad': __WEBPACK_IMPORTED_MODULE_3__column_type__["l" /* PadColumn */],
		'time': __WEBPACK_IMPORTED_MODULE_3__column_type__["x" /* TimeColumn */],
		'url': __WEBPACK_IMPORTED_MODULE_3__column_type__["y" /* UrlColumn */],
		'file': __WEBPACK_IMPORTED_MODULE_3__column_type__["f" /* FileColumn */],
		'image': __WEBPACK_IMPORTED_MODULE_3__column_type__["j" /* ImageColumn */],
		'reference': __WEBPACK_IMPORTED_MODULE_3__column_type__["o" /* ReferenceColumn */],
		'id': __WEBPACK_IMPORTED_MODULE_3__column_type__["i" /* IdColumn */],
		'currency': __WEBPACK_IMPORTED_MODULE_3__column_type__["c" /* CurrencyColumn */],
		'custom': __WEBPACK_IMPORTED_MODULE_2__scene_view_column_view__["ColumnView"]
	};

	var create = function create(entityType, columnType, body) {
		var Type = columnMap[entityType];
		var reference = columnList().reference;
		var defaultSettings = reference['$default'];
		body = merge(body, defaultSettings);
		var typeSettings = reference[columnType];
		body = merge(body, typeSettings);

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeUnit", (function() { return PipeUnit; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__units_default_pipe_unit__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__units_view_pipe_unit__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__units_column_pipe_unit__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__units_row_pipe_unit__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__units_row_details_pipe_unit__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__units_group_pipe_unit__ = __webpack_require__(389);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var PipeUnit = (function () {
	function PipeUnit() {
		_classCallCheck(this, PipeUnit);
	}

	_createClass(PipeUnit, null, [{
		key: 'default',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_0__units_default_pipe_unit__["a" /* defaultPipeUnit */];
		}
	}, {
		key: 'view',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_1__units_view_pipe_unit__["a" /* viewPipeUnit */];
		}
	}, {
		key: 'column',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_2__units_column_pipe_unit__["a" /* columnPipeUnit */];
		}
	}, {
		key: 'row',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_3__units_row_pipe_unit__["a" /* rowPipeUnit */];
		}
	}, {
		key: 'rowDetails',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_4__units_row_details_pipe_unit__["a" /* rowDetailsPipeUnit */];
		}
	}, {
		key: 'group',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_5__units_group_pipe_unit__["a" /* groupPipeUnit */];
		}
	}]);

	return PipeUnit;
})();

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListener", (function() { return EventListener; }));
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventListener = (function () {
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
})();

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["get"] = get;
/* harmony export (immutable) */ __webpack_exports__["getFactory"] = getFactory;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_path__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_value__ = __webpack_require__(19);




function get(row, column) {
	return column.$label ? column.$label({ $row: row }) : column.label ? column.label(row) : column.labelPath ? Object(__WEBPACK_IMPORTED_MODULE_1__services_path__["a" /* compile */])(column.labelPath)(row) : Object(__WEBPACK_IMPORTED_MODULE_2__services_value__["get"])(row, column);
}

function getFactory(column) {
	var get = column.$label ? function (row) {
		return column.$label({ $row: row });
	} : column.label ? function (row) {
		return column.label(row);
	} : column.labelPath ? Object(__WEBPACK_IMPORTED_MODULE_1__services_path__["a" /* compile */])(column.labelPath) : function (row) {
		return Object(__WEBPACK_IMPORTED_MODULE_2__services_value__["get"])(row, column);
	};

	return function (row) {
		return get(row);
	};
}

function set(row, column, label) {
	if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(column.$label)) {
		return column.$label({ $row: row, $label: label });
	}

	if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(column.label)) {
		return column.label(row, label);
	}

	if (column.labelPath) {
		return Object(__WEBPACK_IMPORTED_MODULE_1__services_path__["a" /* compile */])(column.labelPath)(row, label);
	}
}

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", (function() { return AppError; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var AppError = (function (_Error) {
	_inherits(AppError, _Error);

	function AppError(name, message) {
		_classCallCheck(this, AppError);

		var _this = _possibleConstructorReturn(this, (AppError.__proto__ || Object.getPrototypeOf(AppError)).call(this, message));

		_this.name = _this.constructor.name;
		_this.message = 'qgrid.' + name + ': ' + message;
		if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(Error.captureStackTrace)) {
			Error.captureStackTrace(_this, _this.constructor);
		} else {
			_this.stack = new Error(message).stack;
		}
		return _this;
	}

	return AppError;
})(Error);

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_list__ = __webpack_require__(157);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element__ = __webpack_require__(328);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_1__element__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layer__ = __webpack_require__(329);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_2__layer__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table__ = __webpack_require__(330);
/* unused harmony namespace reexport */





/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = sheet;
/* harmony export (immutable) */ __webpack_exports__["b"] = escapeAttr;
/* harmony export (immutable) */ __webpack_exports__["a"] = escape;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__markup__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_css_escape__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_css_escape___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_css_escape__);



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
			sheet.innerHTML = lines.map((function (line) {
				return styleId + ' ' + line;
			})).join('\n');
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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnView", (function() { return ColumnView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_type_column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility_index__ = __webpack_require__(4);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var ColumnView = (function () {
	function ColumnView(model) {
		_classCallCheck(this, ColumnView);

		this.model = model;

		this.colspan = 1;
		this.rowspan = 1;
		this.index = -1;
	}

	_createClass(ColumnView, null, [{
		key: 'model',
		value: function model(_model) {
			if (_model) {
				ColumnView.assign(_model);
			} else {
				_model = new __WEBPACK_IMPORTED_MODULE_0__column_type_column_model__["a" /* ColumnModel */]();
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
						if (Object(__WEBPACK_IMPORTED_MODULE_1__utility_index__["isFunction"])(etalonValue)) {
							etalonValue = etalonValue.bind(body);
						}
						body[key] = etalonValue;
					} else if (Object(__WEBPACK_IMPORTED_MODULE_1__utility_index__["isObject"])(body[key]) && !Object(__WEBPACK_IMPORTED_MODULE_1__utility_index__["isFunction"])(body[key])) {
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
})();



/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pipe", (function() { return Pipe; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_pipe__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter_pipe__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_pipe__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sort_pipe__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memo_pipe__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__group_pipe__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pivot_pipe__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__column_pipe__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_pipe__ = __webpack_require__(382);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











var Pipe = (function () {
	function Pipe() {
		_classCallCheck(this, Pipe);
	}

	_createClass(Pipe, null, [{
		key: 'data',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_0__data_pipe__["a" /* dataPipe */];
		}
	}, {
		key: 'filter',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_1__filter_pipe__["a" /* filterPipe */];
		}
	}, {
		key: 'pagination',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_2__pagination_pipe__["a" /* paginationPipe */];
		}
	}, {
		key: 'sort',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_3__sort_pipe__["a" /* sortPipe */];
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
})();

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(80);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__node__["Node"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_builder__ = __webpack_require__(375);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", (function() { return __WEBPACK_IMPORTED_MODULE_1__node_builder__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_service__ = __webpack_require__(193);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_2__node_service__["a"]; }));




/***/ }),
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
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", (function() { return Log; }));
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*eslint-disable  no-console, no-unused-vars, no-undef*/

var Log = (function () {
	function Log() {
		_classCallCheck(this, Log);
	}

	_createClass(Log, null, [{
		key: "info",
		value: function info(source, message) {
			if (!"production".PRODUCTION) {
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
})();

/*eslint-enable*/

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", (function() { return Model; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guard__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utility__ = __webpack_require__(4);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var models = {};
var close = false;

var Model = (function () {
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
					var changes = Array.from(changeSet.values()).reduce((function (memo, key) {
						var value = model[key];
						memo[key] = { newValue: value, oldValue: value };
						return memo;
					}), {});

					return {
						state: model,
						hasChanges: changes.hasOwnProperty.bind(changes),
						changes: changes,
						tag: {},
						source: 'watch'
					};
				};

				var event = new __WEBPACK_IMPORTED_MODULE_0__event__["a" /* Event */](watchArg);
				var equals = Model.equals;
				_this[name + 'Changed'] = event;
				_this[name] = function (state, tag) {
					var length = arguments.length;
					if (length) {
						if (!Object(__WEBPACK_IMPORTED_MODULE_4__utility__["isObject"])(state)) {
							throw new __WEBPACK_IMPORTED_MODULE_1__error__["AppError"]('model.' + name, '"' + state + '" is not a valid type, should be an object');
						}

						var hasChanges = false;
						var changes = {};
						var keys = Object.keys(state);
						for (var i = 0, keyLength = keys.length; i < keyLength; i++) {
							var key = keys[i];
							if (!model.hasOwnProperty(key)) {
								throw new __WEBPACK_IMPORTED_MODULE_1__error__["AppError"]('model.' + name, '"' + key + '" is not a valid key, only [' + Object.keys(model).join(', ') + '] keys are supported');
							}

							var newValue = state[key];
							var oldValue = model[key];
							if (!equals(newValue, oldValue)) {
								__WEBPACK_IMPORTED_MODULE_3__log__["Log"].info('model', 'value changed - "' + name + '.' + key + '"');
								__WEBPACK_IMPORTED_MODULE_2__guard__["a" /* Guard */].notUndefined(newValue, 'model.' + name + '.' + key);

								model[key] = newValue;
								hasChanges = true;
								changes[key] = {
									newValue: newValue,
									oldValue: oldValue
								};

								changeSet.add(key);
							} else {
								__WEBPACK_IMPORTED_MODULE_3__log__["Log"].warn('model', 'value was not changed - "' + name + '.' + key + '"');
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
		key: 'equals',
		value: function equals(x, y) {
			// TODO: improve equality algo
			if (x === y) {
				return true;
			}

			if (Object(__WEBPACK_IMPORTED_MODULE_4__utility__["isArray"])(x)) {
				if (x.length === 0 && y.length === 0) {
					return true;
				}
			}

			if (x instanceof Map) {
				if (x.size === 0 && y.size === 0) {
					return true;
				}
			}

			if (x instanceof Set) {
				if (x.size === 0 && y.size === 0) {
					return true;
				}
			}

			return false;
		}
	}, {
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
				throw new __WEBPACK_IMPORTED_MODULE_1__error__["AppError"]('model', '"' + name + '" is already registered');
			}

			if (!Object(__WEBPACK_IMPORTED_MODULE_4__utility__["isFunction"])(model)) {
				throw new __WEBPACK_IMPORTED_MODULE_1__error__["AppError"]('model.' + name, '"' + model + '" is not a valid type, should be an constructor function');
			}

			if (close) {
				throw new __WEBPACK_IMPORTED_MODULE_1__error__["AppError"]('model.' + name, 'can\'t register, registration was closed');
			}

			models[name] = model;
			return Model;
		}
	}]);

	return Model;
})();

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventManager", (function() { return EventManager; }));
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventManager = (function () {
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

				return apply((function () {
					return handler.apply(undefined, args);
				}));
			};
		}
	}]);

	return EventManager;
})();

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var template_directive_1 = __webpack_require__(320);
var template_link_directive_1 = __webpack_require__(321);
var template_cache_directive_1 = __webpack_require__(153);
var TemplateModule = /** @class */ (function () {
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var disposable_view_1 = __webpack_require__(105);
var NgComponent = /** @class */ (function (_super) {
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
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Box; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__row__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cell__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selector__ = __webpack_require__(77);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var Box = (function () {
	function Box(context, model, selectorMark) {
		_classCallCheck(this, Box);

		this.context = context;
		this.model = model;

		this.selectFactory = new __WEBPACK_IMPORTED_MODULE_3__selector__["a" /* SelectorFactory */](context.bag, selectorMark);
	}

	_createClass(Box, [{
		key: 'columnCount',
		value: function columnCount(rowIndex) {
			return this.selector.columnCount(rowIndex);
		}
	}, {
		key: 'column',
		value: function column(columnIndex) {
			var columnFactory = this.createColumnCore.bind(this);
			return columnFactory(columnIndex);
		}
	}, {
		key: 'columns',
		value: function columns(rowIndex) {
			var columnFactory = this.createColumnCore.bind(this);
			return this.selector.rowCells(rowIndex).map((function (cell) {
				return columnFactory(cell.columnIndex);
			}));
		}
	}, {
		key: 'row',
		value: function row(rowIndex) {
			return this.rowCore(rowIndex);
		}
	}, {
		key: 'rows',
		value: function rows(columnIndex) {
			var rowFactory = this.createRowCore.bind(this);
			return this.selector.rows(columnIndex).map((function (row) {
				return rowFactory(row.index, row.element);
			}));
		}
	}, {
		key: 'rowCount',
		value: function rowCount(columnIndex) {
			return this.selector.rowCount(columnIndex);
		}
	}, {
		key: 'cell',
		value: function cell(rowIndex, columnIndex) {
			return this.cellCore(rowIndex, columnIndex);
		}
	}, {
		key: 'getElements',
		value: function getElements() {
			return [];
		}
	}, {
		key: 'rowCore',
		value: function rowCore(index) {
			var rowFactory = this.createRowCore.bind(this);
			return rowFactory(index, this.selector.row(index).element);
		}
	}, {
		key: 'cellCore',
		value: function cellCore(rowIndex, columnIndex) {
			var cellFactory = this.createCellCore.bind(this);
			var cell = this.selector.cell(rowIndex, columnIndex);
			return cellFactory(cell.rowIndex, cell.columnIndex, cell.element);
		}
	}, {
		key: 'rowCellsCore',
		value: function rowCellsCore(rowIndex) {
			var cellFactory = this.createCellCore.bind(this);
			return this.selector.rowCells(rowIndex).map((function (cell) {
				return cellFactory(cell.columnIndex, cell.rowIndex, cell.element);
			}));
		}
	}, {
		key: 'columnCellsCore',
		value: function columnCellsCore(columnIndex) {
			var cellFactory = this.createCellCore.bind(this);
			return this.selector.columnCells(columnIndex).map((function (cell) {
				return cellFactory(cell.columnIndex, cell.rowIndex, cell.element);
			}));
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
	}, {
		key: 'selector',
		get: function get() {
			return this.selectFactory.create();
		}
	}]);

	return Box;
})();

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selector_factory__ = __webpack_require__(340);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__selector_factory__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector_mark__ = __webpack_require__(345);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_1__selector_mark__["a"]; }));



/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var model_1 = __webpack_require__(72);
var action_1 = __webpack_require__(79);
var command_1 = __webpack_require__(107);
var grid_1 = __webpack_require__(165);
var pipe_1 = __webpack_require__(59);
var pipe_unit_1 = __webpack_require__(42);
var value_1 = __webpack_require__(19);
var label_1 = __webpack_require__(49);
var row_details_status_1 = __webpack_require__(81);
var log_1 = __webpack_require__(71);
var utility_1 = __webpack_require__(4);
var GridService = /** @class */ (function () {
    function GridService() {
    }
    GridService.prototype.model = function () {
        return new model_1.Model();
    };
    GridService.prototype.service = function (model) {
        var start = function () {
            log_1.Log.info('service', 'invalidate start');
            model.scene({
                status: 'start'
            }, {
                source: 'grid',
                behavior: 'core'
            });
            return function () {
                return new Promise(function (resolve) {
                    setTimeout((function () {
                        model.scene({
                            status: 'stop'
                        }, {
                            source: 'grid',
                            behavior: 'core'
                        });
                        resolve();
                    }), 10);
                });
            };
        };
        return new grid_1.GridService(model, start);
    };
    Object.defineProperty(GridService.prototype, "noop", {
        get: function () {
            return utility_1.noop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridService.prototype, "identity", {
        get: function () {
            return utility_1.identity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridService.prototype, "pipe", {
        get: function () {
            return pipe_1.Pipe;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridService.prototype, "pipeUnit", {
        get: function () {
            return pipe_unit_1.PipeUnit;
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
    Object.defineProperty(GridService.prototype, "Action", {
        get: function () {
            return action_1.Action;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridService.prototype, "Node", {
        get: function () {
            return Node;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridService.prototype, "RowDetailsStatus", {
        get: function () {
            return row_details_status_1.RowDetailsStatus;
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
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", (function() { return Action; }));
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Action = function Action(command, title, icon) {
	_classCallCheck(this, Action);

	this.command = command;
	this.title = title;
	this.icon = icon;
	this.id = null;
};

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", (function() { return Node; }));
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
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowDetailsStatus", (function() { return RowDetailsStatus; }));
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RowDetailsStatus = function RowDetailsStatus(expand) {
	_classCallCheck(this, RowDetailsStatus);

	this.expand = expand;
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var view_core_service_1 = __webpack_require__(29);
var component_1 = __webpack_require__(9);
var TrCoreDirective = /** @class */ (function () {
    function TrCoreDirective($view, root, elementRef) {
        this.$view = $view;
        this.root = root;
        this.elementRef = elementRef;
        this.element = elementRef.nativeElement;
    }
    TrCoreDirective.prototype.ngOnInit = function () {
        this.root.bag[this.source].addRow(this);
    };
    TrCoreDirective.prototype.ngOnDestroy = function () {
        this.root.bag[this.source].deleteRow(this);
    };
    tslib_1.__decorate([
        core_1.Input('q-grid-core-row-index'),
        tslib_1.__metadata("design:type", Number)
    ], TrCoreDirective.prototype, "index", void 0);
    tslib_1.__decorate([
        core_1.Input('q-grid-core-tr'),
        tslib_1.__metadata("design:type", Object)
    ], TrCoreDirective.prototype, "model", void 0);
    tslib_1.__decorate([
        core_1.Input('q-grid-core-source'),
        tslib_1.__metadata("design:type", Object)
    ], TrCoreDirective.prototype, "source", void 0);
    TrCoreDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-core-tr]'
        }),
        tslib_1.__metadata("design:paramtypes", [view_core_service_1.ViewCoreService, component_1.RootService, core_1.ElementRef])
    ], TrCoreDirective);
    return TrCoreDirective;
}());
exports.TrCoreDirective = TrCoreDirective;


/***/ }),
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var template_1 = __webpack_require__(25);
var component_1 = __webpack_require__(9);
var layer_1 = __webpack_require__(155);
var dom_1 = __webpack_require__(325);
var infrastructure_1 = __webpack_require__(3);
var command_1 = __webpack_require__(11);
var event_manager_1 = __webpack_require__(73);
var event_listener_1 = __webpack_require__(48);
var GridComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GridComponent, _super);
    function GridComponent(rootService, element, changeDetector) {
        var _this = _super.call(this) || this;
        _this.rootService = rootService;
        _this.element = element;
        _this.changeDetector = changeDetector;
        _this.selectionChanged = new core_1.EventEmitter();
        _this.models = [
            'data',
            'selection',
            'sort',
            'group',
            'pivot',
            'edit',
            'style',
            'action'
        ];
        _this.using(_this.modelChanged.watch((function (model) { return (_this.rootService.model = model); })));
        var apply = rootService.applyFactory(null, 'sync');
        _this.listener = new event_listener_1.EventListener(element.nativeElement, new event_manager_1.EventManager(_this, apply));
        return _this;
    }
    GridComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        var model = this.model;
        var grid = model.grid;
        if (grid().status === 'bound') {
            throw new infrastructure_1.AppError('grid', "Model is already used by grid \"" + model.grid().id + "\"");
        }
        grid({
            status: 'bound',
            title: this.gridTitle
        });
        if (!this.gridId) {
            this.element.nativeElement.id = model.grid().id;
        }
        var markup = this.rootService.markup;
        var layerService = new layer_1.LayerService(markup);
        var tableContext = {
            layer: function (name) { return layerService.create(name); },
            bag: this.rootService.bag
        };
        var table = new dom_1.Table(model, markup, tableContext);
        this.rootService.table = table;
        this.rootService.commandManager = new command_1.TableCommandManager(this.rootService.applyFactory(), table);
        this.using(this.listener.on('keydown', (function (e) {
            if (model.action().shortcut.keyDown(e)) {
                e.preventDefault();
                e.stopPropagation();
            }
        })));
        this.using(this.model.viewChanged.watch((function (e) {
            if (e.hasChanges('columns')) {
                _this.invalidateVisibility();
            }
        })));
    };
    GridComponent.prototype.invalidateVisibility = function () {
        var columns = this.model.data().columns;
        var visibility = this.model.visibility;
        visibility({
            pin: {
                left: columns.some((function (c) { return c.pin === 'left'; })),
                right: columns.some((function (c) { return c.pin === 'right'; }))
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
        core_1.Input('header'),
        tslib_1.__metadata("design:type", Object)
    ], GridComponent.prototype, "gridTitle", void 0);
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
            providers: [component_1.RootService, template_1.TemplateCacheService],
            styles: [__webpack_require__(359), __webpack_require__(361)],
            template: __webpack_require__(363),
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [component_1.RootService,
            core_1.ElementRef,
            core_1.ChangeDetectorRef])
    ], GridComponent);
    return GridComponent;
}(component_1.RootComponent));
exports.GridComponent = GridComponent;


/***/ }),
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var TemplateLinkService = /** @class */ (function () {
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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var TemplateCacheService = /** @class */ (function () {
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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var TemplateHostService = /** @class */ (function () {
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
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisposableView", (function() { return DisposableView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var DisposableView = (function () {
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
})();

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bag", (function() { return Bag; }));
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bag = (function () {
	function Bag() {
		_classCallCheck(this, Bag);

		this.rows = new Set();
		this.cells = new Set();
		this.models = new Map();
	}

	_createClass(Bag, [{
		key: "findModel",
		value: function findModel(element) {
			return this.models.get(element);
		}
	}, {
		key: "hasModel",
		value: function hasModel(element) {
			return this.models.has(element);
		}
	}, {
		key: "addRow",
		value: function addRow(row) {
			this.rows.add(row);
			this.models.set(row.element, row);
		}
	}, {
		key: "addCell",
		value: function addCell(cell) {
			this.cells.add(cell);
			this.models.set(cell.element, cell);
		}
	}, {
		key: "deleteRow",
		value: function deleteRow(row) {
			this.rows.delete(row);
			this.models.delete(row.element);
		}
	}, {
		key: "deleteCell",
		value: function deleteCell(cell) {
			this.cells.delete(cell);
			this.models.delete(cell.element);
		}
	}]);

	return Bag;
})();

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", (function() { return Command; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Command = function Command() {
	var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	_classCallCheck(this, Command);

	this.execute = context.execute || __WEBPACK_IMPORTED_MODULE_0__utility__["yes"];
	this.canExecute = context.canExecute || __WEBPACK_IMPORTED_MODULE_0__utility__["yes"];
	this.shortcut = context.shortcut;
};

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Resource; }));
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resource = function Resource() {
	var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	_classCallCheck(this, Resource);

	this.data = data;
	this.scope = scope;
};

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return StyleBox; }));
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleBox = (function () {
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
})();

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compile;
function compile(path) {
	var parts = path.split('.');
	var last = parts.length - 1;
	var accessor = parts.filter((function (part, index) {
		return index !== last;
	})).reduce((function (accessor, part) {
		return accessor ? function (entry) {
			return accessor(entry)[part];
		} : function (entry) {
			return entry[part];
		};
	}), null);

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
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_column__ = __webpack_require__(168);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__array_column__["ArrayColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bool_column__ = __webpack_require__(169);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_1__bool_column__["BoolColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_column__ = __webpack_require__(170);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", (function() { return __WEBPACK_IMPORTED_MODULE_2__date_column__["DateColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_column__ = __webpack_require__(171);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", (function() { return __WEBPACK_IMPORTED_MODULE_3__email_column__["EmailColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__file_column__ = __webpack_require__(172);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", (function() { return __WEBPACK_IMPORTED_MODULE_4__file_column__["FileColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_row_column__ = __webpack_require__(174);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", (function() { return __WEBPACK_IMPORTED_MODULE_5__filter_row_column__["FilterRowColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__group_column__ = __webpack_require__(175);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", (function() { return __WEBPACK_IMPORTED_MODULE_6__group_column__["GroupColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__id_column__ = __webpack_require__(176);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", (function() { return __WEBPACK_IMPORTED_MODULE_7__id_column__["IdColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__image_column__ = __webpack_require__(177);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", (function() { return __WEBPACK_IMPORTED_MODULE_8__image_column__["ImageColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__number_column__ = __webpack_require__(178);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", (function() { return __WEBPACK_IMPORTED_MODULE_9__number_column__["NumberColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pad_column__ = __webpack_require__(179);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", (function() { return __WEBPACK_IMPORTED_MODULE_10__pad_column__["PadColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__password_column__ = __webpack_require__(180);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", (function() { return __WEBPACK_IMPORTED_MODULE_11__password_column__["PasswordColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pivot_column__ = __webpack_require__(181);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", (function() { return __WEBPACK_IMPORTED_MODULE_12__pivot_column__["PivotColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reference_column__ = __webpack_require__(182);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", (function() { return __WEBPACK_IMPORTED_MODULE_13__reference_column__["ReferenceColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__row_indicator_column__ = __webpack_require__(183);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", (function() { return __WEBPACK_IMPORTED_MODULE_14__row_indicator_column__["RowIndicatorColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__row_number_column__ = __webpack_require__(184);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", (function() { return __WEBPACK_IMPORTED_MODULE_15__row_number_column__["RowNumberColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__row_options_column__ = __webpack_require__(185);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", (function() { return __WEBPACK_IMPORTED_MODULE_16__row_options_column__["RowOptionsColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__row_expand_column__ = __webpack_require__(186);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", (function() { return __WEBPACK_IMPORTED_MODULE_17__row_expand_column__["RowExpandColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__row_details_column__ = __webpack_require__(187);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", (function() { return __WEBPACK_IMPORTED_MODULE_18__row_details_column__["RowDetailsColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__select_column__ = __webpack_require__(188);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", (function() { return __WEBPACK_IMPORTED_MODULE_19__select_column__["SelectColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__text_column__ = __webpack_require__(189);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", (function() { return __WEBPACK_IMPORTED_MODULE_20__text_column__["TextColumn"]; }));
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", (function() { return __WEBPACK_IMPORTED_MODULE_20__text_column__["TextColumnModel"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__time_column__ = __webpack_require__(190);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", (function() { return __WEBPACK_IMPORTED_MODULE_21__time_column__["TimeColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__url_column__ = __webpack_require__(191);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", (function() { return __WEBPACK_IMPORTED_MODULE_22__url_column__["UrlColumn"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__currency_column__ = __webpack_require__(192);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", (function() { return __WEBPACK_IMPORTED_MODULE_23__currency_column__["CurrencyColumn"]; }));

























/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_list_generate__ = __webpack_require__(366);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_0__column_list_generate__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_list_model__ = __webpack_require__(371);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_1__column_list_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_list_sort__ = __webpack_require__(372);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", (function() { return __WEBPACK_IMPORTED_MODULE_2__column_list_sort__["a"]; }));




/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", (function() { return key; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return index; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return direction; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", (function() { return map; }));
/* harmony export (immutable) */ __webpack_exports__["e"] = orderFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_pair__ = __webpack_require__(377);


var key = __WEBPACK_IMPORTED_MODULE_0__services_pair__["b" /* key */];
var index = __WEBPACK_IMPORTED_MODULE_0__services_pair__["a" /* index */];
var direction = __WEBPACK_IMPORTED_MODULE_0__services_pair__["d" /* value */];
var map = __WEBPACK_IMPORTED_MODULE_0__services_pair__["c" /* map */];

function orderFactory(model) {
	var sort = model.sort;
	return function (by) {
		var sortState = sort();
		if (sortState.trigger.indexOf('reorder') >= 0) {
			var _index = 0;
			var indexMap = model.columnList().index.reduce((function (memo, key) {
				memo[key] = _index++;
				return memo;
			}), {});

			by.sort((function (x, y) {
				return indexMap[key(x)] - indexMap[key(y)];
			}));
		}

		return by;
	};
}

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Scene; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_column_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node__ = __webpack_require__(60);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Scene = (function () {
	function Scene(model) {
		_classCallCheck(this, Scene);

		this.model = model;
	}

	_createClass(Scene, [{
		key: 'rows',
		value: function rows(memo) {
			var nodes = memo.nodes;
			var rows = memo.rows;
			if (nodes.length) {
				if (!(rows.length && rows[0] instanceof __WEBPACK_IMPORTED_MODULE_2__node__["a" /* Node */])) {
					return Object(__WEBPACK_IMPORTED_MODULE_2__node__["b" /* flatView */])(nodes);
				}
			}

			return rows;
		}
	}, {
		key: 'columnRows',
		value: function columnRows(items) {
			return items;
		}
	}, {
		key: 'columnLine',
		value: function columnLine(items) {
			return Object(__WEBPACK_IMPORTED_MODULE_1__column_column_service__["lineView"])(items);
		}
	}, {
		key: 'columnArea',
		value: function columnArea(items) {
			var line = Object(__WEBPACK_IMPORTED_MODULE_1__column_column_service__["lineView"])(items);
			var result = {
				left: [],
				right: [],
				null: []
			};

			for (var i = 0, length = line.length; i < length; i++) {
				var column = line[i];
				var pin = column.model.pin;
				var area = result[pin];
				if (!area) {
					throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure_index__["AppError"]('scene', 'Unsupported pin ' + pin);
				}

				area.push(column);
			}

			return result;
		}
	}]);

	return Scene;
})();

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = flatView;
/* harmony export (immutable) */ __webpack_exports__["b"] = invalidateStatus;
/* harmony export (immutable) */ __webpack_exports__["c"] = toggleStatus;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__row_details__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__row_details_status__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_column_factory__ = __webpack_require__(41);





function flatView(model, mode) {
	var result = [];
	var createColumn = Object(__WEBPACK_IMPORTED_MODULE_3__column_column_factory__["columnFactory"])(model);
	var rows = model.view().rows;
	var status = model.row().status;
	var showAll = mode === 'all';
	var columns = model.scene().column.line;
	var expandColumn = columns.find((function (c) {
		return c.model.type === 'row-expand';
	}));
	var columnIndex = expandColumn ? expandColumn.index : 0;
	rows.forEach((function (row) {
		if (!(row instanceof __WEBPACK_IMPORTED_MODULE_0__row_details__["a" /* RowDetails */])) {
			result.push(row);
			var state = status.get(row) || showAll && new __WEBPACK_IMPORTED_MODULE_1__row_details_status__["RowDetailsStatus"](true);
			if (state && state instanceof __WEBPACK_IMPORTED_MODULE_1__row_details_status__["RowDetailsStatus"]) {
				if (state.expand) {
					var column = createColumn('row-details');
					column.index = columnIndex;
					result.push(new __WEBPACK_IMPORTED_MODULE_0__row_details__["a" /* RowDetails */](row, column));
				}
			}
		}
	}));

	return result;
}

function invalidateStatus(rows, status) {
	return new Map(Array.from(status.entries()).filter((function (entry) {
		var row = entry[0];
		var status = entry[1];
		return rows.indexOf(row) >= 0 || !(status instanceof __WEBPACK_IMPORTED_MODULE_1__row_details_status__["RowDetailsStatus"]);
	})));
}

function toggleStatus(rows, status) {
	var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'single';

	switch (mode) {
		case 'all':
			status = new Map(status.entries());
			rows.forEach((function (row) {
				if (!status.has(row)) {
					status.set(row, new __WEBPACK_IMPORTED_MODULE_1__row_details_status__["RowDetailsStatus"](true));
				}
			}));
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

	rows.forEach((function (row) {
		var state = status.get(row);
		if (!state) {
			status.set(row, new __WEBPACK_IMPORTED_MODULE_1__row_details_status__["RowDetailsStatus"](true));
		} else {
			state.expand = !state.expand;
		}
	}));

	return status;
}

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return RowDetails; }));
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RowDetails = function RowDetails(item, column) {
	_classCallCheck(this, RowDetails);

	this.item = item;
	this.column = column;
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(390), exports);
tslib_1.__exportStar(__webpack_require__(391), exports);


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(99), exports);
tslib_1.__exportStar(__webpack_require__(78), exports);


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(395), exports);


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return DataRow; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_value__ = __webpack_require__(19);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var DataRow = (function () {
	function DataRow(model) {
		_classCallCheck(this, DataRow);

		this.model = model;
	}

	_createClass(DataRow, [{
		key: 'colspan',
		value: function colspan(row, column) {
			return column.colspan;
		}
	}, {
		key: 'rowspan',
		value: function rowspan() {
			return 1;
		}
	}, {
		key: 'columns',
		value: function columns(row, pin) {
			return this.columnList(pin);
		}
	}, {
		key: 'getValue',
		value: function getValue(row, column, select) {
			return select(row);
		}
	}, {
		key: 'setValue',
		value: function setValue(row, column, value) {
			return Object(__WEBPACK_IMPORTED_MODULE_0__services_value__["set"])(row, column, value);
		}
	}, {
		key: 'columnList',
		value: function columnList() {
			var pin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			var sceneState = this.model.scene();
			if (arguments.length) {
				return sceneState.column.area[pin] || [];
			}

			return sceneState.column.line;
		}
	}]);

	return DataRow;
})();

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group_model__ = __webpack_require__(412);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__group_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group_view__ = __webpack_require__(413);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_1__group_view__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_build__ = __webpack_require__(414);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", (function() { return __WEBPACK_IMPORTED_MODULE_2__group_build__["a"]; }));




/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_range__ = __webpack_require__(210);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selection_model__ = __webpack_require__(424);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_1__selection_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_view__ = __webpack_require__(425);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", (function() { return __WEBPACK_IMPORTED_MODULE_2__selection_view__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selection_service__ = __webpack_require__(212);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_3__selection_service__["a"]; }));





/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return MultipleSelectionState; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_state__ = __webpack_require__(124);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var MultipleSelectionState = (function (_SelectionState) {
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
})(__WEBPACK_IMPORTED_MODULE_0__selection_state__["a" /* SelectionState */]);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return SelectionState; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node__ = __webpack_require__(60);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var SelectionState = (function () {
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
			if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isArray"])(item)) {
				item.forEach((function (item) {
					return _this.select(item, state, key);
				}));
				return;
			}

			if (item instanceof __WEBPACK_IMPORTED_MODULE_1__node__["a" /* Node */]) {
				var rows = this.model.data().rows;
				if (rows.length) {
					item.rows.forEach((function (index) {
						return _this.select(rows[index], state, key);
					}));
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
			if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isArray"])(item)) {
				var all = item.every((function (item) {
					return _this2.state(item, key);
				}));
				return all ? true : item.some((function (item) {
					return _this2.state(item, key);
				})) ? null : false;
			}

			if (item instanceof __WEBPACK_IMPORTED_MODULE_1__node__["a" /* Node */]) {
				var rows = this.model.data().rows;
				if (rows.length) {
					var _all = item.rows.length && item.rows.every((function (index) {
						return _this2.state(rows[index], key);
					}));
					return _all ? true : item.rows.some((function (index) {
						return _this2.state(rows[index], key);
					})) ? null : false;
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
})();

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(126), exports);


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var template_1 = __webpack_require__(25);
var infrastructure_1 = __webpack_require__(3);
var utility_1 = __webpack_require__(4);
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
var CellService = /** @class */ (function () {
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
        tslib_1.__metadata("design:paramtypes", [template_1.TemplateCacheService, template_1.TemplateLinkService])
    ], CellService);
    return CellService;
}());
exports.CellService = CellService;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(474), exports);
tslib_1.__exportStar(__webpack_require__(228), exports);
tslib_1.__exportStar(__webpack_require__(230), exports);
tslib_1.__exportStar(__webpack_require__(231), exports);


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var infrastructure_1 = __webpack_require__(3);
var PopupService = /** @class */ (function () {
    function PopupService() {
        this.popups = new Map();
    }
    PopupService.prototype.open = function (popup) {
        if (this.popups.hasOwnProperty(popup.id)) {
            throw new infrastructure_1.AppError('popup.service', "Can't open popup '" + popup.id + "', it's already opened");
        }
        var element = popup.element;
        var settings = popup.settings;
        var target = this.targetize(null, settings);
        var pos = this.position(target, settings);
        this.popups[popup.id] = popup;
        element.setAttribute('id', popup.id);
        element.style.left = pos.left + 'px';
        element.style.top = pos.top + 'px';
        element.style.width = popup.settings.width + 'px';
        element.style.height = popup.settings.height + 'px';
        if (settings.resizable) {
            element.classList.add('resizable');
        }
        if (settings.collapsible) {
            element.classList.add('collapsible');
        }
        if (settings.class) {
            element.classList.add(settings.class);
        }
        popup.focus();
    };
    PopupService.prototype.close = function (id) {
        if (!this.isOpened(id)) {
            throw new infrastructure_1.AppError('popup.service', "Can't close popup '" + id + "', it's not opened");
        }
        var popup = this.popups.get(id);
        this.popups.delete(id);
        popup.close();
    };
    PopupService.prototype.closeAll = function () {
        for (var _i = 0, _a = Object.keys(this.popups); _i < _a.length; _i++) {
            var key = _a[_i];
            this.close(key);
        }
    };
    PopupService.prototype.isOpened = function (id) {
        return this.popups.hasOwnProperty(id);
    };
    PopupService.prototype.expand = function (id) {
        var popup = this.popups[id];
        popup.expand();
    };
    PopupService.prototype.collapse = function (id) {
        var popup = this.popups[id];
        popup.collapse();
    };
    PopupService.prototype.focus = function (id) {
        this.popups.forEach((function (p) { return p.unfocus(); }));
        var popup = this.popups.get(id);
        popup.focus();
    };
    PopupService.prototype.resize = function (id, settings) {
        var popup = this.popups.get(id);
        popup.resize(settings);
    };
    PopupService.prototype.targetize = function (target, settings) {
        if (!target) {
            return {
                offset: function () {
                    return {
                        left: window.innerWidth / 2,
                        top: (window.innerHeight - settings.height) / 2
                    };
                },
                height: function () {
                    return 500;
                },
                width: function () {
                    return 400;
                }
            };
        }
        var rect = target.getBoundingClientRect();
        return {
            offset: function () { return ({
                left: rect.left,
                top: rect.top
            }); },
            height: function () { return target.clientHeight; },
            width: function () { return target.clientWidth; }
        };
    };
    PopupService.prototype.position = function (target, settings) {
        var dy = settings.offsetTop || 0;
        var dx = settings.offsetLeft || 0;
        var w = window.innerWidth;
        var h = window.innerHeight;
        var p = target.offset();
        var x = p.left;
        var y = p.top;
        var eh = settings.height || target.height();
        var ew = settings.width || target.width();
        var eh2 = eh / 2;
        var ew2 = ew / 2;
        var gtx1 = x + ew2 > w;
        var ltx0 = x - ew2 < 0;
        var gty1 = y + eh > h;
        var lty0 = y - eh < 0;
        var l = ltx0 && gtx1
            ? w / 2 - ew2
            : gtx1 ? x - ew - dx : ltx0 ? x + dx : x - ew2 + dx;
        var t = lty0 && gty1
            ? h / 2 - eh2
            : gty1 ? y - eh - dy : lty0 ? y + dy : y + dy;
        return {
            left: l,
            top: t
        };
    };
    PopupService.prototype.get = function (id) {
        return this.popups.get(id);
    };
    PopupService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], PopupService);
    return PopupService;
}());
exports.PopupService = PopupService;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var PopupState = /** @class */ (function () {
    function PopupState() {
        this.expanded = false;
        this.active = false;
    }
    return PopupState;
}());
var PopupArea = /** @class */ (function () {
    function PopupArea() {
        this.top = 0;
        this.left = 0;
        this.width = 0;
        this.height = 0;
    }
    return PopupArea;
}());
var Popup = /** @class */ (function () {
    function Popup() {
        this.state = new PopupState();
        this.area = new PopupArea();
    }
    Popup.prototype.close = function () {
        var settings = this.settings;
        this.element.remove();
    };
    Popup.prototype.expand = function () {
        var element = this.element;
        this.area.top = element.clientTop;
        this.area.left = element.clientLeft;
        this.area.width = element.clientWidth;
        this.area.height = element.clientHeight;
        this.state.expanded = true;
        element.classList.add('expanded');
    };
    Popup.prototype.collapse = function () {
        var element = this.element;
        element.classList.remove('expanded');
        this.state.expanded = false;
        element.style.width = this.area.width + 'px';
        element.style.height = this.area.height + 'px';
        element.style.top = this.area.top + 'px';
        element.style.left = this.area.left + 'px';
    };
    Popup.prototype.focus = function () {
        this.state.active = true;
        this.element.classList.add('active');
        this.element.setAttribute('tabindex', '0');
        this.element.focus();
    };
    Popup.prototype.unfocus = function () {
        this.state.active = false;
        this.element.classList.remove('active');
        this.element.removeAttribute('tabindex');
    };
    Popup.prototype.isFocused = function () {
        return this.state.active;
    };
    Popup.prototype.resize = function (settings) {
        var width = Math.min(settings.width, this.body.clientWidth - this.element.offsetLeft);
        var height = Math.min(settings.height, this.body.clientHeight - this.element.offsetTop);
        this.element.setAttribute('width', width + "px");
        this.element.setAttribute('height', height + "px");
    };
    Popup = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], Popup);
    return Popup;
}());
exports.Popup = Popup;


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__action_model__ = __webpack_require__(556);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ActionModel", (function() { return __WEBPACK_IMPORTED_MODULE_0__action_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__action__ = __webpack_require__(79);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Action", (function() { return __WEBPACK_IMPORTED_MODULE_1__action__["Action"]; }));



/***/ }),
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var infrastructure_1 = __webpack_require__(3);
var ThemeService = /** @class */ (function () {
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
/* 149 */,
/* 150 */,
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Event; }));
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = (function () {
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
})();

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Guard; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Guard = (function () {
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
			if (Object(__WEBPACK_IMPORTED_MODULE_1__utility__["isUndefined"])(value)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["AppError"]('guard.notUndefined', name);
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
			if (value === null || Object(__WEBPACK_IMPORTED_MODULE_1__utility__["isUndefined"])(value)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["AppError"]('guard.notNull', name);
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
			if (value === null || Object(__WEBPACK_IMPORTED_MODULE_1__utility__["isUndefined"])(value) || value === '') {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["AppError"]('guard.notNullOrEmpty', name);
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
			if (!Object(__WEBPACK_IMPORTED_MODULE_1__utility__["isFunction"])(value)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["AppError"]('guard.invokable', name);
			}
		}
	}]);

	return Guard;
})();

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var template_cache_service_1 = __webpack_require__(103);
var template_host_service_1 = __webpack_require__(104);
var TemplateCacheDirective = /** @class */ (function () {
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
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var infrastructure_1 = __webpack_require__(3);
var utility_1 = __webpack_require__(4);
var ng_component_1 = __webpack_require__(75);
var ModelComponent = /** @class */ (function (_super) {
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
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(323), exports);


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Unit; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fake__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_css__ = __webpack_require__(57);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var fakeElement = new __WEBPACK_IMPORTED_MODULE_0__fake__["a" /* FakeElement */]();
var Unit = (function () {
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
			this.getElement().classList.add(__WEBPACK_IMPORTED_MODULE_1__services_css__["b" /* escapeAttr */](name));
		}
	}, {
		key: 'removeClassCore',
		value: function removeClassCore(name) {
			this.getElement().classList.remove(__WEBPACK_IMPORTED_MODULE_1__services_css__["b" /* escapeAttr */](name));
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
})();

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return FakeClassList; }));
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FakeClassList = (function () {
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
})();

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Row; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(159);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Row = (function (_Element) {
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
		key: 'model',
		value: function model() {
			var rowView = this.box.context.bag.findModel(this.getKeyElementCore());
			if (rowView) {
				return rowView.model;
			}

			return null;
		}
	}, {
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
	}]);

	return Row;
})(__WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */]);

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Element; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unit__ = __webpack_require__(156);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Element = (function (_Unit) {
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
})(__WEBPACK_IMPORTED_MODULE_0__unit__["a" /* Unit */]);

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Column; }));
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Column = (function () {
	function Column(box, index) {
		_classCallCheck(this, Column);

		this.box = box;
		this.index = index;
	}

	_createClass(Column, [{
		key: "model",
		value: function model() {
			var columns = this.box.model.view().columns;
			var column = columns[this.index];
			return column || null;
		}
	}, {
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
			var cells = this.cells();
			var length = cells.length;
			var i = 0;
			while (i < length) {
				var cell = cells[i++];
				cell.addClass(name);
			}
		}
	}, {
		key: "removeClass",
		value: function removeClass(name) {
			var cells = this.cells();
			var length = cells.length;
			var i = 0;
			while (i < length) {
				var cell = cells[i++];
				cell.removeClass(name);
			}
		}
	}]);

	return Column;
})();

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Cell; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_view__ = __webpack_require__(6);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Cell = (function (_Element) {
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
		value: function model() {
			var model = this.context.bag.findModel(this.getElement());
			return model ? new __WEBPACK_IMPORTED_MODULE_1__scene_view__["a" /* CellView */](model) : null;
		}
	}]);

	return Cell;
})(__WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */]);

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return CommandManager; }));
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommandManager = (function () {
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
			this.apply((function () {
				return commands.forEach((function (cmd) {
					return cmd.execute();
				}));
			}));
			return commands.length > 0;
		}
	}, {
		key: "filter",
		value: function filter(commands) {
			return commands.filter((function (cmd) {
				return cmd.canExecute();
			}));
		}
	}]);

	return CommandManager;
})();

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__row_model__ = __webpack_require__(351);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_0__row_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__row__ = __webpack_require__(353);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_1__row__["a"]; }));



/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return EnumerableResource; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(108);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var EnumerableResource = (function (_Resource) {
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
})(__WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]);

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridService", (function() { return GridService; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe_pipe_build__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guid__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_value__ = __webpack_require__(19);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var GridService = (function () {
	function GridService(model) {
		var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
			return __WEBPACK_IMPORTED_MODULE_2__utility__["noop"];
		};

		_classCallCheck(this, GridService);

		this.model = model;
		this.start = start;
		this.tasks = [];
	}

	_createClass(GridService, [{
		key: 'invalidate',
		value: function invalidate() {
			var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'invalidate';

			var _this = this;

			var changes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var pipe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			var queue = this.tasks;
			var nextTask = function nextTask() {
				queue.shift();
				var job = queue[0];
				if (job) {
					job();
				}
			};

			return new Promise(function (resolve, reject) {
				var task = function task() {
					__WEBPACK_IMPORTED_MODULE_1__infrastructure__["Log"].info('grid', 'run job ' + source);
					var model = _this.model;
					model.head().cache.clear();
					model.body().cache.clear();
					model.foot().cache.clear();

					var stop = _this.start();
					var cancelBusy = _this.busy();
					var run = Object(__WEBPACK_IMPORTED_MODULE_0__pipe_pipe_build__["a" /* build */])(model, __WEBPACK_IMPORTED_MODULE_4__services_value__["getFactory"]);
					var runNext = function runNext() {
						stop().then((function () {
							cancelBusy();
							nextTask();
						}));
					};

					return run(source, changes, pipe).then((function () {
						resolve();
						runNext();
					})).catch((function (ex) {
						__WEBPACK_IMPORTED_MODULE_1__infrastructure__["Log"].error('grid', ex);

						reject();
						runNext();
					}));
				};

				__WEBPACK_IMPORTED_MODULE_1__infrastructure__["Log"].info('grid', 'add job ' + source);
				queue.push(task);
				if (queue.length === 1) {
					task();
				}
			});
		}
	}, {
		key: 'busy',
		value: function busy() {
			var id = Object(__WEBPACK_IMPORTED_MODULE_3__guid__["a" /* guid */])();
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
})();

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Middleware; }));
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Middleware = (function () {
	function Middleware(pipes) {
		_classCallCheck(this, Middleware);

		this.pipes = pipes;
	}

	_createClass(Middleware, [{
		key: "run",
		value: function run(context) {
			var memo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			var pipes = this.pipes.map((function (pipe) {
				return function (memo) {
					return new Promise(function (resolve, reject) {
						return pipe(memo, context, resolve, reject);
					});
				};
			}));

			return start(pipes, memo);
		}
	}]);

	return Middleware;
})();

function start(pipes, memo) {
	pipes = Array.from(pipes);
	return new Promise(function (resolve, reject) {
		invoke(memo);

		function invoke(memo) {
			if (pipes.length) {
				var pipe = pipes.shift();
				var promise = pipe(memo);
				promise.then(invoke).catch((function (ex) {
					reject(ex);
					throw ex;
				}));
			} else {
				resolve(memo);
			}
		}
	});
}

/***/ }),
/* 167 */
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
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayColumnModel", (function() { return ArrayColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayColumn", (function() { return ArrayColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility__ = __webpack_require__(4);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('array-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('array-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

var ArrayColumnModel = (function (_DataColumnModel) {
	_inherits(ArrayColumnModel, _DataColumnModel);

	function ArrayColumnModel() {
		_classCallCheck(this, ArrayColumnModel);

		var _this = _possibleConstructorReturn(this, (ArrayColumnModel.__proto__ || Object.getPrototypeOf(ArrayColumnModel)).call(this, 'array'));

		_this.label = __WEBPACK_IMPORTED_MODULE_3__utility__["identity"];
		return _this;
	}

	return ArrayColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var ArrayColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoolColumnModel", (function() { return BoolColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoolColumn", (function() { return BoolColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('bool-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('bool-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

var BoolColumnModel = (function (_DataColumnModel) {
	_inherits(BoolColumnModel, _DataColumnModel);

	function BoolColumnModel() {
		_classCallCheck(this, BoolColumnModel);

		var _this = _possibleConstructorReturn(this, (BoolColumnModel.__proto__ || Object.getPrototypeOf(BoolColumnModel)).call(this, 'bool'));

		_this.trueValue = true;
		_this.falseValue = false;

		_this.editorOptions.trigger = 'focus';

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
})(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var BoolColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateColumnModel", (function() { return DateColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateColumn", (function() { return DateColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('date-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('date-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

var DateColumnModel = (function (_DataColumnModel) {
	_inherits(DateColumnModel, _DataColumnModel);

	function DateColumnModel() {
		_classCallCheck(this, DateColumnModel);

		var _this = _possibleConstructorReturn(this, (DateColumnModel.__proto__ || Object.getPrototypeOf(DateColumnModel)).call(this, 'date'));

		_this.format = 'yyyy/MM/dd';
		return _this;
	}

	return DateColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var DateColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailColumnModel", (function() { return EmailColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailColumn", (function() { return EmailColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('email-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('email-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

var EmailColumnModel = (function (_DataColumnModel) {
	_inherits(EmailColumnModel, _DataColumnModel);

	function EmailColumnModel() {
		_classCallCheck(this, EmailColumnModel);

		var _this = _possibleConstructorReturn(this, (EmailColumnModel.__proto__ || Object.getPrototypeOf(EmailColumnModel)).call(this, 'email'));

		_this.editorOptions.trigger = 'custom';
		return _this;
	}

	return EmailColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var EmailColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileColumnModel", (function() { return FileColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileColumn", (function() { return FileColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_file__ = __webpack_require__(173);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('file-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('file-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

var FileColumnModel = (function (_DataColumnModel) {
	_inherits(FileColumnModel, _DataColumnModel);

	function FileColumnModel() {
		_classCallCheck(this, FileColumnModel);

		var _this = _possibleConstructorReturn(this, (FileColumnModel.__proto__ || Object.getPrototypeOf(FileColumnModel)).call(this, 'file'));

		_this.canUpload = __WEBPACK_IMPORTED_MODULE_3__utility__["yes"];
		_this.editorOptions.trigger = 'custom';

		_this.hasPreview = function (name) {
			return Object(__WEBPACK_IMPORTED_MODULE_4__services_file__["a" /* isImage */])(name);
		};
		return _this;
	}

	return FileColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var FileColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isImage;
function isImage(name) {
	return !!name && name.toLowerCase().search(/png|jpg|jpeg|svg/) > -1;
}

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterRowColumnModel", (function() { return FilterRowColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterRowColumn", (function() { return FilterRowColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('filter-row-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

var FilterRowColumnModel = (function (_ColumnModel) {
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
})(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var FilterRowColumn = (function (_ColumnView) {
	_inherits(FilterRowColumn, _ColumnView);

	function FilterRowColumn(model) {
		_classCallCheck(this, FilterRowColumn);

		return _possibleConstructorReturn(this, (FilterRowColumn.__proto__ || Object.getPrototypeOf(FilterRowColumn)).call(this, new FilterRowColumnModel(model)));
	}

	return FilterRowColumn;
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupColumnModel", (function() { return GroupColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupColumn", (function() { return GroupColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('group-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.type
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('group-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

var GroupColumnModel = (function (_ColumnModel) {
	_inherits(GroupColumnModel, _ColumnModel);

	function GroupColumnModel() {
		_classCallCheck(this, GroupColumnModel);

		var _this = _possibleConstructorReturn(this, (GroupColumnModel.__proto__ || Object.getPrototypeOf(GroupColumnModel)).call(this, 'group'));

		_this.key = '$group';
		_this.path = 'key';

		_this.title = 'Group';
		_this.offset = 24;
		_this.canEdit = false;
		_this.canSort = false;
		_this.class = 'control';
		return _this;
	}

	return GroupColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var GroupColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdColumnModel", (function() { return IdColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdColumn", (function() { return IdColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('id-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('id-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

var IdColumnModel = (function (_DataColumnModel) {
	_inherits(IdColumnModel, _DataColumnModel);

	function IdColumnModel() {
		_classCallCheck(this, IdColumnModel);

		return _possibleConstructorReturn(this, (IdColumnModel.__proto__ || Object.getPrototypeOf(IdColumnModel)).call(this, 'id'));
	}

	return IdColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var IdColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageColumnModel", (function() { return ImageColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageColumn", (function() { return ImageColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_file__ = __webpack_require__(173);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('image-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('image-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

var ImageColumnModel = (function (_DataColumnModel) {
	_inherits(ImageColumnModel, _DataColumnModel);

	function ImageColumnModel() {
		_classCallCheck(this, ImageColumnModel);

		var _this = _possibleConstructorReturn(this, (ImageColumnModel.__proto__ || Object.getPrototypeOf(ImageColumnModel)).call(this, 'image'));

		_this.canUpload = __WEBPACK_IMPORTED_MODULE_3__utility__["yes"];

		_this.hasPreview = function (name) {
			return Object(__WEBPACK_IMPORTED_MODULE_4__services_file__["a" /* isImage */])(name);
		};
		return _this;
	}

	return ImageColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var ImageColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberColumnModel", (function() { return NumberColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberColumn", (function() { return NumberColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('number-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('number-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

var NumberColumnModel = (function (_DataColumnModel) {
	_inherits(NumberColumnModel, _DataColumnModel);

	function NumberColumnModel() {
		_classCallCheck(this, NumberColumnModel);

		var _this = _possibleConstructorReturn(this, (NumberColumnModel.__proto__ || Object.getPrototypeOf(NumberColumnModel)).call(this, 'number'));

		_this.format = '';
		return _this;
	}

	return NumberColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var NumberColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PadColumnModel", (function() { return PadColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PadColumn", (function() { return PadColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('pad-cell', (function (template) {
	return {
		model: template.for,
		resource: template.for + '.' + template.type
	};
}));

var PadColumnModel = (function (_ColumnModel) {
	_inherits(PadColumnModel, _ColumnModel);

	function PadColumnModel() {
		_classCallCheck(this, PadColumnModel);

		var _this = _possibleConstructorReturn(this, (PadColumnModel.__proto__ || Object.getPrototypeOf(PadColumnModel)).call(this, 'pad'));

		_this.key = '$pad';
		_this.class = 'markup';

		_this.title = '';
		_this.canEdit = false;
		_this.canSort = false;
		_this.canResize = false;
		_this.canHighlight = false;
		_this.canFocus = false;
		_this.source = 'generation';
		return _this;
	}

	return PadColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var PadColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordColumnModel", (function() { return PasswordColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordColumn", (function() { return PasswordColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('password-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('password-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

var PasswordColumnModel = (function (_DataColumnModel) {
	_inherits(PasswordColumnModel, _DataColumnModel);

	function PasswordColumnModel() {
		_classCallCheck(this, PasswordColumnModel);

		var _this = _possibleConstructorReturn(this, (PasswordColumnModel.__proto__ || Object.getPrototypeOf(PasswordColumnModel)).call(this, 'password'));

		_this.canSort = false;
		_this.canFilter = false;
		return _this;
	}

	return PasswordColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var PasswordColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PivotColumnModel", (function() { return PivotColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PivotColumn", (function() { return PivotColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('pivot-cell', (function (template) {
	return {
		model: 'pivot',
		resource: template.for
	};
}));

var PivotColumnModel = (function (_ColumnModel) {
	_inherits(PivotColumnModel, _ColumnModel);

	function PivotColumnModel() {
		_classCallCheck(this, PivotColumnModel);

		var _this = _possibleConstructorReturn(this, (PivotColumnModel.__proto__ || Object.getPrototypeOf(PivotColumnModel)).call(this, 'pivot'));

		_this.key = '$pivot';
		_this.title = 'Pivot';

		_this.source = 'generation';
		_this.class = 'pivot';
		_this.canEdit = false;
		_this.canSort = false;
		_this.canResize = false;
		_this.width = 60;
		_this.rowIndex = 0;
		return _this;
	}

	return PivotColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var PivotColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceColumnModel", (function() { return ReferenceColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceColumn", (function() { return ReferenceColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infrastructure__ = __webpack_require__(3);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('reference-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('reference-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

var ReferenceColumnModel = (function (_DataColumnModel) {
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
})(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var ReferenceColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowIndicatorColumnModel", (function() { return RowIndicatorColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowIndicatorColumn", (function() { return RowIndicatorColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('row-indicator-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

var RowIndicatorColumnModel = (function (_ColumnModel) {
	_inherits(RowIndicatorColumnModel, _ColumnModel);

	function RowIndicatorColumnModel() {
		_classCallCheck(this, RowIndicatorColumnModel);

		var _this = _possibleConstructorReturn(this, (RowIndicatorColumnModel.__proto__ || Object.getPrototypeOf(RowIndicatorColumnModel)).call(this, 'row-indicator'));

		_this.key = '$row.indicator';
		_this.class = 'control';

		_this.canEdit = false;
		_this.canSort = false;
		_this.canResize = false;
		_this.canMove = false;
		_this.canFocus = false;
		_this.canHighlight = false;
		_this.pin = 'left';
		return _this;
	}

	return RowIndicatorColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var RowIndicatorColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowNumberColumnModel", (function() { return RowNumberColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowNumberColumn", (function() { return RowNumberColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('row-number-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

var RowNumberColumnModel = (function (_ColumnModel) {
	_inherits(RowNumberColumnModel, _ColumnModel);

	function RowNumberColumnModel() {
		_classCallCheck(this, RowNumberColumnModel);

		var _this = _possibleConstructorReturn(this, (RowNumberColumnModel.__proto__ || Object.getPrototypeOf(RowNumberColumnModel)).call(this, 'row-number'));

		_this.pin = 'left';
		_this.key = '$row.number';
		_this.title = '#';
		_this.canEdit = false;
		_this.canResize = false;
		_this.canFocus = false;
		_this.canMove = false;
		_this.canHighlight = false;
		_this.class = 'control';
		return _this;
	}

	return RowNumberColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var RowNumberColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowOptionsColumnModel", (function() { return RowOptionsColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowOptionsColumn", (function() { return RowOptionsColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('row-options-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('row-options-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

var RowOptionsColumnModel = (function (_DataColumnModel) {
	_inherits(RowOptionsColumnModel, _DataColumnModel);

	function RowOptionsColumnModel() {
		_classCallCheck(this, RowOptionsColumnModel);

		var _this = _possibleConstructorReturn(this, (RowOptionsColumnModel.__proto__ || Object.getPrototypeOf(RowOptionsColumnModel)).call(this, 'row-options'));

		_this.key = '$row.options';
		_this.class = 'control';

		_this.canEdit = true;
		_this.canResize = false;
		_this.canMove = false;
		_this.canHighlight = false;
		_this.pin = 'right';
		return _this;
	}

	return RowOptionsColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var RowOptionsColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowExpandColumn", (function() { return RowExpandColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('row-expand-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

var RowExpandColumnModel = (function (_ColumnModel) {
	_inherits(RowExpandColumnModel, _ColumnModel);

	function RowExpandColumnModel() {
		_classCallCheck(this, RowExpandColumnModel);

		var _this = _possibleConstructorReturn(this, (RowExpandColumnModel.__proto__ || Object.getPrototypeOf(RowExpandColumnModel)).call(this, 'row-expand'));

		_this.key = '$row.expand';
		_this.title = 'Expand';
		_this.class = 'control';

		_this.canEdit = false;
		_this.canResize = false;
		return _this;
	}

	return RowExpandColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var RowExpandColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowDetailsColumn", (function() { return RowDetailsColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('row-details-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

var RowDetailsColumnModel = (function (_ColumnModel) {
	_inherits(RowDetailsColumnModel, _ColumnModel);

	function RowDetailsColumnModel() {
		_classCallCheck(this, RowDetailsColumnModel);

		var _this = _possibleConstructorReturn(this, (RowDetailsColumnModel.__proto__ || Object.getPrototypeOf(RowDetailsColumnModel)).call(this, 'row-details'));

		_this.key = '$row.details';
		_this.title = 'Row Details';
		_this.class = 'control';

		_this.canEdit = false;
		_this.canResize = false;
		_this.canHighlight = false;
		return _this;
	}

	return RowDetailsColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var RowDetailsColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectColumnModel", (function() { return SelectColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectColumn", (function() { return SelectColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility__ = __webpack_require__(4);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('select-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('select-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

var SelectColumnModel = (function (_ColumnModel) {
	_inherits(SelectColumnModel, _ColumnModel);

	function SelectColumnModel() {
		_classCallCheck(this, SelectColumnModel);

		var _this = _possibleConstructorReturn(this, (SelectColumnModel.__proto__ || Object.getPrototypeOf(SelectColumnModel)).call(this, 'select'));

		_this.key = '$select';
		_this.title = '';
		_this.class = 'control';

		_this.editorOptions.trigger = 'focus';
		_this.value = __WEBPACK_IMPORTED_MODULE_3__utility__["noop"];

		_this.canResize = false;
		return _this;
	}

	return SelectColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */]);

var SelectColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextColumnModel", (function() { return TextColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextColumn", (function() { return TextColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('text-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('text-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('text-area-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

var TextColumnModel = (function (_DataColumnModel) {
	_inherits(TextColumnModel, _DataColumnModel);

	function TextColumnModel() {
		_classCallCheck(this, TextColumnModel);

		var _this = _possibleConstructorReturn(this, (TextColumnModel.__proto__ || Object.getPrototypeOf(TextColumnModel)).call(this, 'text'));

		_this.maxLength = 140;
		return _this;
	}

	return TextColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var TextColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeColumnModel", (function() { return TimeColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeColumn", (function() { return TimeColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('time-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('time-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

var TimeColumnModel = (function (_DataColumnModel) {
	_inherits(TimeColumnModel, _DataColumnModel);

	function TimeColumnModel() {
		_classCallCheck(this, TimeColumnModel);

		var _this = _possibleConstructorReturn(this, (TimeColumnModel.__proto__ || Object.getPrototypeOf(TimeColumnModel)).call(this, 'time'));

		_this.format = 'h:mm a';
		return _this;
	}

	return TimeColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var TimeColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlColumnModel", (function() { return UrlColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlColumn", (function() { return UrlColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('url-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('url-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

var UrlColumnModel = (function (_DataColumnModel) {
	_inherits(UrlColumnModel, _DataColumnModel);

	function UrlColumnModel() {
		_classCallCheck(this, UrlColumnModel);

		var _this = _possibleConstructorReturn(this, (UrlColumnModel.__proto__ || Object.getPrototypeOf(UrlColumnModel)).call(this, 'url'));

		_this.editorOptions.trigger = 'custom';
		return _this;
	}

	return UrlColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var UrlColumn = (function (_ColumnView) {
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
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyColumnModel", (function() { return CurrencyColumnModel; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyColumn", (function() { return CurrencyColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('currency-cell', (function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
}));

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('currency-cell-edit', (function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
}));

var CurrencyColumnModel = (function (_DataColumnModel) {
	_inherits(CurrencyColumnModel, _DataColumnModel);

	function CurrencyColumnModel() {
		_classCallCheck(this, CurrencyColumnModel);

		var _this = _possibleConstructorReturn(this, (CurrencyColumnModel.__proto__ || Object.getPrototypeOf(CurrencyColumnModel)).call(this, 'text'));

		_this.maxLength = 20;
		_this.symbol = '$';
		_this.code = 'USD';
		return _this;
	}

	return CurrencyColumnModel;
})(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */]);

var CurrencyColumn = (function (_ColumnView) {
	_inherits(CurrencyColumn, _ColumnView);

	function CurrencyColumn(model) {
		_classCallCheck(this, CurrencyColumn);

		return _possibleConstructorReturn(this, (CurrencyColumn.__proto__ || Object.getPrototypeOf(CurrencyColumn)).call(this, model));
	}

	_createClass(CurrencyColumn, null, [{
		key: 'model',
		value: function model(_model) {
			return _model ? CurrencyColumn.assign(_model) : new CurrencyColumnModel();
		}
	}]);

	return CurrencyColumn;
})(__WEBPACK_IMPORTED_MODULE_0__scene_view__["b" /* ColumnView */]);



/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = flatView;
/* unused harmony export some */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(80);


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
					var rowNode = new __WEBPACK_IMPORTED_MODULE_0__node__["Node"](node.key, node.level + 1, 'row');
					rowNode.rows = [row];
					children.push(rowNode);
					result.push(rowNode);
				}
			}
		}
	}

	return result;
}

function some(nodes, test) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var node = _step.value;

			if (test(node)) {
				return true;
			}

			if (some(node.children, test)) {
				return true;
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

	return false;
}

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = build;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pivot__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pivot_form__ = __webpack_require__(196);




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
			return Object(__WEBPACK_IMPORTED_MODULE_2__pivot_form__["a" /* pivotForm */])(data);
		}

		return { heads: [], rows: [] };
	};
}

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pivot;
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plan = (function () {
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
})();

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
		return settings.selector(row).reduce((function (memo, selection) {
			var name = settings.name(selection);
			memo[name] = settings.value(selection, row, pivot(name));
			return memo;
		}), settings.factory(row));
	};

	return function (rows) {
		return plan.compile(plan.isRoot ? rows.map(aggregate) : aggregate(rows));
	};
}

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pivotForm;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



function injectData(schema, source, target) {
	return Object.keys(source).filter((function (key) {
		return !schema.hasOwnProperty(key);
	})).reduce((function (memo, key) {
		memo[key] = source[key];
		return memo;
	}), target);
}

function expandData(schema, source) {
	var baseline = Object.keys(schema).map((function (key) {
		var node = schema[key];
		return source && source.hasOwnProperty(key) ? expandData(node, source[key]) : expandData(node);
	}));

	return baseline.length ? Object(__WEBPACK_IMPORTED_MODULE_0__utility__["flatten"])(baseline, true) : [source];
}

function liftSchema(schema) {
	var baseline = [];

	function lift(schema, depth) {
		var derivatives = schema ? Object.keys(schema).map((function (key) {
			var node = schema[key];
			return {
				key: key,
				value: lift(node, depth + 1)
			};
		})) : [];

		if (derivatives.length > 0) if (!baseline[depth]) {
			baseline[depth] = derivatives;
		} else {
			var _baseline$depth;

			(_baseline$depth = baseline[depth]).push.apply(_baseline$depth, _toConsumableArray(derivatives));
		}

		return derivatives.length && derivatives.reduce((function (memo, d) {
			return memo + d.value;
		}), 0) || 1;
	}

	lift(schema, 0);
	return baseline;
}

function sortSchema(schema, comparator) {
	return Object.keys(schema).sort(comparator).reduce((function (memo, key) {
		memo[key] = sortSchema(schema[key], comparator);
		return memo;
	}), {});
}

function pivotForm(source, comparator) {
	if (source.schema && source.data) {
		var schema = sortSchema(source.schema, comparator);
		var rows = source.data.map((function (row) {
			return injectData(schema, row, expandData(schema, row));
		}));
		var heads = liftSchema(schema);
		return { heads: heads, rows: rows };
	}

	return { heads: [], rows: [] };
}

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_model__ = __webpack_require__(386);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_0__scene_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene__ = __webpack_require__(114);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_1__scene__["a"]; }));



/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var services_1 = __webpack_require__(26);
var utility_1 = __webpack_require__(4);
var services_2 = __webpack_require__(26);
var component_1 = __webpack_require__(9);
var ColumnListService = /** @class */ (function () {
    function ColumnListService(root) {
        this.root = root;
    }
    ColumnListService.prototype.copy = function (target, source) {
        Object.keys(source)
            .filter((function (key) { return !utility_1.isUndefined(source[key]) && key !== 'value'; }))
            .forEach((function (key) {
            var value = source[key];
            var accessor = services_1.compile(key);
            var targetValue = accessor(target);
            var parse = services_2.parseFactory(services_2.getType(targetValue));
            var sourceValue = parse(value);
            accessor(target, sourceValue);
        }));
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
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(392), exports);


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(393), exports);
tslib_1.__exportStar(__webpack_require__(223), exports);
tslib_1.__exportStar(__webpack_require__(125), exports);
tslib_1.__exportStar(__webpack_require__(225), exports);
tslib_1.__exportStar(__webpack_require__(224), exports);
tslib_1.__exportStar(__webpack_require__(227), exports);
tslib_1.__exportStar(__webpack_require__(226), exports);
tslib_1.__exportStar(__webpack_require__(119), exports);
tslib_1.__exportStar(__webpack_require__(232), exports);
tslib_1.__exportStar(__webpack_require__(222), exports);
tslib_1.__exportStar(__webpack_require__(201), exports);


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(394), exports);
tslib_1.__exportStar(__webpack_require__(29), exports);


/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__body_model__ = __webpack_require__(397);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__body_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__body_view__ = __webpack_require__(398);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_1__body_view__["a"]; }));



/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__row_details_service__ = __webpack_require__(115);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__row_details_view__ = __webpack_require__(403);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_1__row_details_view__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__row_details_status__ = __webpack_require__(81);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__row_details__ = __webpack_require__(116);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_3__row_details__["a"]; }));





/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__head_model__ = __webpack_require__(406);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__head_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__head_view__ = __webpack_require__(407);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_1__head_view__["a"]; }));



/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foot_model__ = __webpack_require__(408);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__foot_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foot_view__ = __webpack_require__(409);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_1__foot_view__["a"]; }));



/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_model__ = __webpack_require__(410);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__layout_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_view__ = __webpack_require__(411);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_1__layout_view__["a"]; }));



/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pivot_build__ = __webpack_require__(194);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pivot_form__ = __webpack_require__(196);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pivot__ = __webpack_require__(195);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pivot_model__ = __webpack_require__(415);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_3__pivot_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pivot_view__ = __webpack_require__(416);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_4__pivot_view__["a"]; }));






/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navigation_model__ = __webpack_require__(417);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__navigation_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_view__ = __webpack_require__(418);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_1__navigation_view__["a"]; }));



/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__highlight_model__ = __webpack_require__(420);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__highlight_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__highlight_view__ = __webpack_require__(421);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_1__highlight_view__["a"]; }));



/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return SelectionRange; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var SelectionRange = (function () {
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
					throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('range.builder', 'Invalid unit ' + selection.unit);
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
			if (!endCell) {
				return [startCell.column];
			}

			var columns = this.model.data().columns;
			var startIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
			var endIndex = Math.max(startCell.columnIndex, endCell.columnIndex);
			return columns.slice(startIndex, endIndex + 1);
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
			var columns = model.view().columns;

			var startRowIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
			var endRowIndex = Math.max(startCell.rowIndex, endCell.rowIndex);

			var startColumnIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
			var endColumnIndex = Math.max(startCell.columnIndex, endCell.columnIndex);

			var selectedRows = rows.slice(startRowIndex, endRowIndex + 1);
			var selectedColumns = columns.slice(startColumnIndex, endColumnIndex + 1);

			var items = [];
			selectedRows.forEach((function (row) {
				selectedColumns.filter((function (column) {
					return column.class === 'data';
				})).forEach((function (column) {
					items.push({
						column: column,
						row: row
					});
				}));
			}));

			return items;
		}
	}, {
		key: 'buildMix',
		value: function buildMix(startCell, endCell) {
			var mixUnit = startCell.column.type === 'row-indicator' ? 'row' : 'cell';
			var range = mixUnit === 'row' ? this.buildRows(startCell, endCell) : this.buildCells(startCell, endCell);
			return range.map((function (item) {
				return {
					item: item,
					unit: mixUnit
				};
			}));
		}
	}]);

	return SelectionRange;
})();

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return SingleSelectionState; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_state__ = __webpack_require__(124);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SingleSelectionState = (function (_SelectionState) {
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
})(__WEBPACK_IMPORTED_MODULE_0__selection_state__["a" /* SelectionState */]);

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return SelectionService; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_value__ = __webpack_require__(19);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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
		var index = columns.findIndex((function (column) {
			return column.type === 'id';
		}));
		if (index >= 0) {
			var idColumn = columns[index];
			var getId = Object(__WEBPACK_IMPORTED_MODULE_2__services_value__["getFactory"])(idColumn);
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
		columns.forEach((function (column) {
			var colKey = selectKey(column);
			var found = items.indexOf(colKey) > -1;
			if (found) {
				result.push(column);
			}
		}));

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
		rows.forEach((function (row) {
			var rowKey = selectKey(row);
			var found = items.indexOf(rowKey) > -1;
			if (found) {
				result.push(row);
			}
		}));
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
		columns.forEach((function (column) {
			rows.forEach((function (row) {
				var cell = {
					column: column,
					row: row
				};

				var index = items.findIndex((function (item) {
					return match(item, selectKey(cell));
				}));
				if (index >= 0) {
					result.push(cell);
				}
			}));
		}));
		return result;
	};
}

var SelectionService = (function () {
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
			if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isUndefined"])(unit)) {
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

						var rowKeys = items.filter((function (key) {
							return key.unit === 'row';
						})).map((function (key) {
							return key.item;
						}));
						var columnKeys = items.filter((function (key) {
							return key.unit === 'column';
						})).map((function (key) {
							return key.item;
						}));
						var cellKeys = items.filter((function (key) {
							return key.unit === 'cell';
						})).map((function (key) {
							return key.item;
						}));

						(_entries = entries).push.apply(_entries, _toConsumableArray(this.lookup(rowKeys, 'row').map((function (entry) {
							return { item: entry, unit: 'row' };
						}))));
						(_entries2 = entries).push.apply(_entries2, _toConsumableArray(this.lookup(columnKeys, 'column').map((function (entry) {
							return { item: entry, unit: 'column' };
						}))));
						(_entries3 = entries).push.apply(_entries3, _toConsumableArray(this.lookup(cellKeys, 'cell').map((function (entry) {
							return { item: entry, unit: 'cell' };
						}))));
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
					return entries.map((function (entry) {
						return {
							unit: entry.unit,
							item: selectKey(entry)
						};
					}));
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
})();

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sort_model__ = __webpack_require__(430);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__sort_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sort_view__ = __webpack_require__(431);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_1__sort_view__["a"]; }));



/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter_model__ = __webpack_require__(432);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__filter_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter_view__ = __webpack_require__(438);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_1__filter_view__["a"]; }));



/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Visitor; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Visitor = (function () {
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
					throw Object(__WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"])('expression.visitor', 'Invalid kind ' + item.kind);
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

			return args.map((function (arg) {
				switch (arg.kind) {
					case 'condition':
					case 'group':
						_this.visit(arg);
				}
			}));
		}
	}]);

	return Visitor;
})();

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_model__ = __webpack_require__(439);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__edit_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_view__ = __webpack_require__(440);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_1__edit_view__["a"]; }));



/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shortcut__ = __webpack_require__(442);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__shortcut__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shortcut_manager__ = __webpack_require__(446);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_1__shortcut_manager__["a"]; }));



/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return CellEditor; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_label__ = __webpack_require__(49);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var CellEditorCore = (function () {
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
})();

var empty = new CellEditorCore();

var CellEditor = (function (_CellEditorCore) {
	_inherits(CellEditor, _CellEditorCore);

	function CellEditor(cell) {
		_classCallCheck(this, CellEditor);

		var _this = _possibleConstructorReturn(this, (CellEditor.__proto__ || Object.getPrototypeOf(CellEditor)).call(this));

		_this.cell = cell;
		_this.fetch = _this.fetchFactory();
		_this.resetFetch = _this.fetch.run(cell.row);

		if (Object(__WEBPACK_IMPORTED_MODULE_2__utility__["isUndefined"])(cell.value)) {
			_this.value = null;
		} else {
			var parse = Object(__WEBPACK_IMPORTED_MODULE_1__services__["parseFactory"])(cell.column.type);
			var typedValue = parse(Object(__WEBPACK_IMPORTED_MODULE_2__utility__["clone"])(cell.value));
			_this.value = typedValue === null ? cell.value : typedValue;
		}

		_this.label = Object(__WEBPACK_IMPORTED_MODULE_2__utility__["isUndefined"])(cell.label) ? null : Object(__WEBPACK_IMPORTED_MODULE_2__utility__["clone"])(cell.label);
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
			return Object(__WEBPACK_IMPORTED_MODULE_3__services_label__["get"])(item, this.options);
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
})(CellEditorCore);

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pagination_model__ = __webpack_require__(449);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__pagination_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination_view__ = __webpack_require__(450);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_1__pagination_view__["a"]; }));



/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_model__ = __webpack_require__(451);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__style_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_view__ = __webpack_require__(452);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_1__style_view__["a"]; }));



/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scroll_model__ = __webpack_require__(457);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__scroll_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_view__ = __webpack_require__(458);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_1__scroll_view__["a"]; }));



/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(460), exports);


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(462), exports);
tslib_1.__exportStar(__webpack_require__(466), exports);


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(467), exports);
tslib_1.__exportStar(__webpack_require__(469), exports);


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(470), exports);
tslib_1.__exportStar(__webpack_require__(472), exports);


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(82), exports);


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(473), exports);


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(478), exports);


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var transfer = null;
var DragService = /** @class */ (function () {
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
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(481), exports);


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(485), exports);


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(490), exports);


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var ThemeService = /** @class */ (function () {
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
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(535), exports);
tslib_1.__exportStar(__webpack_require__(30), exports);


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var popup_service_1 = __webpack_require__(128);
var popup_1 = __webpack_require__(129);
var PopupPanelComponent = /** @class */ (function () {
    function PopupPanelComponent(popupService, element) {
        this.popupService = popupService;
        this.element = element;
    }
    PopupPanelComponent.prototype.ngOnInit = function () {
        this.element.nativeElement.classList.add('q-grid-popup');
    };
    PopupPanelComponent.prototype.ngOnDestroy = function () {
        this.popup.close();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", popup_1.Popup)
    ], PopupPanelComponent.prototype, "popup", void 0);
    PopupPanelComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-popup-panel',
            template: __webpack_require__(548),
            styles: [__webpack_require__(549)]
        }),
        tslib_1.__metadata("design:paramtypes", [popup_service_1.PopupService,
            core_1.ElementRef])
    ], PopupPanelComponent);
    return PopupPanelComponent;
}());
exports.PopupPanelComponent = PopupPanelComponent;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var ActionBarService = /** @class */ (function () {
    function ActionBarService() {
        this.model = null;
    }
    ActionBarService = tslib_1.__decorate([
        core_1.Injectable()
    ], ActionBarService);
    return ActionBarService;
}());
exports.ActionBarService = ActionBarService;


/***/ }),
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
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
/* 260 */,
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
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var grid_module_1 = __webpack_require__(298);
exports.GridModule = grid_module_1.GridModule;
var grid_service_1 = __webpack_require__(78);
exports.GridService = grid_service_1.GridService;
var model_1 = __webpack_require__(72);
exports.GridModel = model_1.Model;
tslib_1.__exportStar(__webpack_require__(598), exports);
tslib_1.__exportStar(__webpack_require__(599), exports);


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var main_1 = __webpack_require__(299);
var theme_service_1 = __webpack_require__(233);
var template_1 = __webpack_require__(25);
var template_cache_directive_1 = __webpack_require__(153);
var infrastructure_1 = __webpack_require__(3);
var index_1 = __webpack_require__(572);
var grid_service_1 = __webpack_require__(78);
var grid_component_1 = __webpack_require__(99);
var column_1 = __webpack_require__(117);
var plugins_1 = __webpack_require__(234);
var common_1 = __webpack_require__(127);
var GridModule = /** @class */ (function () {
    function GridModule(themeService, theme) {
        index_1.setup(infrastructure_1.Model);
        themeService.name = theme.name;
    }
    GridModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [],
            exports: [
                grid_component_1.GridComponent,
                column_1.ColumnListComponent,
                column_1.ColumnComponent,
                template_cache_directive_1.TemplateCacheDirective,
                plugins_1.PluginModule,
                main_1.MainModule,
                template_1.TemplateModule,
                common_1.FocusModule
            ],
            imports: [
                main_1.MainModule,
                template_1.TemplateModule
            ],
            providers: [
                grid_service_1.GridService,
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
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(70);
var grid_component_1 = __webpack_require__(99);
var grid_service_1 = __webpack_require__(78);
var column_1 = __webpack_require__(117);
var box_1 = __webpack_require__(199);
var core_2 = __webpack_require__(200);
var theme_module_1 = __webpack_require__(492);
var toolbar_component_1 = __webpack_require__(571);
tslib_1.__exportStar(__webpack_require__(199), exports);
tslib_1.__exportStar(__webpack_require__(117), exports);
tslib_1.__exportStar(__webpack_require__(200), exports);
tslib_1.__exportStar(__webpack_require__(118), exports);
tslib_1.__exportStar(__webpack_require__(155), exports);
var MainModule = /** @class */ (function () {
    function MainModule() {
        console.log('Main module bootstrapped');
    }
    MainModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                grid_component_1.GridComponent,
                box_1.BoxComponent,
                column_1.ColumnListComponent,
                column_1.ColumnComponent,
                toolbar_component_1.ToolbarComponent
            ],
            exports: [
                grid_component_1.GridComponent,
                column_1.ColumnListComponent,
                column_1.ColumnComponent,
                box_1.BoxComponent,
                toolbar_component_1.ToolbarComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                core_2.CoreModule,
                theme_module_1.ThemeModule
            ],
            providers: [
                grid_service_1.GridService
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;


/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Cache; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(53);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Cache = (function () {
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
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["AppError"]('cache.get', 'Entry with key was not found "' + key + '"');
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
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["AppError"]('cache.remove', 'Entry with key was not found "' + key + '"');
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
})();

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", (function() { return isEmail; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", (function() { return identity; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", (function() { return yes; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", (function() { return no; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", (function() { return toCamelCase; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", (function() { return noop; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isArray__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isString__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isString___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isString__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isBoolean__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isBoolean___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_isBoolean__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isNumber__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isNumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isNumber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isDate__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isDate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isDate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_clone__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_clone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_clone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_cloneDeepWith__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_cloneDeepWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_cloneDeepWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isUndefined__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_debounce__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_merge__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_flatten__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_flatten___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_flatten__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_orderBy__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_orderBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_orderBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_startCase__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_startCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash_startCase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_assignWith__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_assignWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_lodash_assignWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_uniq__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_lodash_uniq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_sumBy__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_sumBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_lodash_sumBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_lodash_maxBy__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_lodash_maxBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_lodash_maxBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash_minBy__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash_minBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_lodash_minBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash_zip__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_lodash_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_lodash_takeWhile__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_lodash_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_lodash_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_lodash_dropWhile__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_lodash_dropWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_lodash_dropWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_lodash_groupBy__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_lodash_groupBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_lodash_groupBy__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "o", (function() { return __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "m", (function() { return __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "i", (function() { return __WEBPACK_IMPORTED_MODULE_2_lodash_isArray___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "p", (function() { return __WEBPACK_IMPORTED_MODULE_3_lodash_isString___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "q", (function() { return __WEBPACK_IMPORTED_MODULE_9_lodash_isUndefined___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "j", (function() { return __WEBPACK_IMPORTED_MODULE_4_lodash_isBoolean___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "k", (function() { return __WEBPACK_IMPORTED_MODULE_6_lodash_isDate___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "n", (function() { return __WEBPACK_IMPORTED_MODULE_5_lodash_isNumber___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_7_lodash_clone___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "c", (function() { return __WEBPACK_IMPORTED_MODULE_8_lodash_cloneDeepWith___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "d", (function() { return __WEBPACK_IMPORTED_MODULE_10_lodash_debounce___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "s", (function() { return __WEBPACK_IMPORTED_MODULE_11_lodash_merge___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "f", (function() { return __WEBPACK_IMPORTED_MODULE_12_lodash_flatten___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "x", (function() { return __WEBPACK_IMPORTED_MODULE_14_lodash_startCase___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_15_lodash_assignWith___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "B", (function() { return __WEBPACK_IMPORTED_MODULE_16_lodash_uniq___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "w", (function() { return __WEBPACK_IMPORTED_MODULE_13_lodash_orderBy___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "r", (function() { return __WEBPACK_IMPORTED_MODULE_18_lodash_maxBy___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "t", (function() { return __WEBPACK_IMPORTED_MODULE_19_lodash_minBy___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "y", (function() { return __WEBPACK_IMPORTED_MODULE_17_lodash_sumBy___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "D", (function() { return __WEBPACK_IMPORTED_MODULE_20_lodash_zip___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "z", (function() { return __WEBPACK_IMPORTED_MODULE_21_lodash_takeWhile___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "e", (function() { return __WEBPACK_IMPORTED_MODULE_22_lodash_dropWhile___default.a; }));
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "g", (function() { return __WEBPACK_IMPORTED_MODULE_23_lodash_groupBy___default.a; }));

























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
	var nameList = names.map((function (name) {
		return '' + name;
	}));
	if (length > 0) {
		return nameList[0] + nameList.slice(1).map((function (name) {
			return name[0].toUpperCase() + name.substring(1, name.length);
		})).join('');
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
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Fetch; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Fetch = (function () {
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

				if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(select)) {
					var deferred = {
						resolve: resolve,
						reject: rejectBusy
					};

					var args = Array.from(_arguments).slice(1) || [];
					var result = select.apply(undefined, [item, deferred].concat(_toConsumableArray(args)));
					if (!Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isUndefined"])(result)) {
						if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(result.then)) {
							// when options.fetch returns promise
							result.then(resolve);
							if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(result.catch)) {
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
})();

/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ModelBinder; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log__ = __webpack_require__(71);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var ModelBinder = (function () {
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
							__WEBPACK_IMPORTED_MODULE_1__log__["Log"].info('model.bind', 'to ctrl "' + name + '[' + Object.keys(e.changes).join(', ') + ']"');

							var _iteratorNormalCompletion2 = true;
							var _didIteratorError2 = false;
							var _iteratorError2 = undefined;

							try {
								for (var _iterator2 = Object.keys(e.changes)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
									var key = _step2.value;

									var sourceKey = Object(__WEBPACK_IMPORTED_MODULE_0__utility__["toCamelCase"])(name, key);
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

						commits.push((function () {
							__WEBPACK_IMPORTED_MODULE_1__log__["Log"].info('model.bind', 'to model "' + name + '"');

							var oldState = state();
							var newState = {};
							var _iteratorNormalCompletion3 = true;
							var _didIteratorError3 = false;
							var _iteratorError3 = undefined;

							try {
								for (var _iterator3 = Object.keys(oldState)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
									var key = _step3.value;

									var sourceKey = Object(__WEBPACK_IMPORTED_MODULE_0__utility__["toCamelCase"])(name, key);
									if (source.hasOwnProperty(sourceKey)) {
										var _value = source[sourceKey];
										if (!Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isUndefined"])(_value)) {
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
						}));
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
					return commits.forEach((function (commit) {
						return commit();
					}));
				};
			}

			this.off = __WEBPACK_IMPORTED_MODULE_0__utility__["noop"];
			return __WEBPACK_IMPORTED_MODULE_0__utility__["noop"];
		}
	}]);

	return ModelBinder;
})();

/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Range; }));
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Range = function Range(start, end) {
	_classCallCheck(this, Range);

	this.start = start;
	this.end = end;
};

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var template_link_service_1 = __webpack_require__(102);
var template_cache_service_1 = __webpack_require__(103);
var infrastructure_1 = __webpack_require__(3);
var utility_1 = __webpack_require__(4);
var TemplateDirective = /** @class */ (function () {
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
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var template_link_service_1 = __webpack_require__(102);
var TemplateLinkDirective = /** @class */ (function () {
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
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var infrastructure_1 = __webpack_require__(3);
var utility_1 = __webpack_require__(4);
var ng_component_1 = __webpack_require__(75);
var RootComponent = /** @class */ (function (_super) {
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
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var layer_1 = __webpack_require__(324);
var LayerService = /** @class */ (function () {
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
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Layer = /** @class */ (function () {
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
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table__ = __webpack_require__(326);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Table", (function() { return __WEBPACK_IMPORTED_MODULE_0__table__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bag__ = __webpack_require__(106);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Bag", (function() { return __WEBPACK_IMPORTED_MODULE_1__bag__["Bag"]; }));



/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Table; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fake__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__head__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__body__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__foot__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bag__ = __webpack_require__(106);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }










var Table = (function () {
	function Table(model, markup) {
		var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		_classCallCheck(this, Table);

		this.model = model;
		this.markup = markup;

		this.context = Object(__WEBPACK_IMPORTED_MODULE_2__utility__["assignWith"])({
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
				return new __WEBPACK_IMPORTED_MODULE_3__fake__["b" /* FakeLayer */]();
			},
			bag: {
				head: new __WEBPACK_IMPORTED_MODULE_7__bag__["Bag"](),
				body: new __WEBPACK_IMPORTED_MODULE_7__bag__["Bag"](),
				foot: new __WEBPACK_IMPORTED_MODULE_7__bag__["Bag"]()
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
			var context = this.contextFactory('head');
			return new __WEBPACK_IMPORTED_MODULE_4__head__["a" /* Head */](context, this.model, this.markup);
		}
	}, {
		key: 'bodyCore',
		value: function bodyCore() {
			var context = this.contextFactory('body');
			if (this.model.scroll().mode === 'virtual') {
				return new __WEBPACK_IMPORTED_MODULE_5__body__["b" /* VirtualBody */](context, this.model, this.markup);
			}

			return new __WEBPACK_IMPORTED_MODULE_5__body__["a" /* Body */](context, this.model, this.markup);
		}
	}, {
		key: 'footCore',
		value: function footCore() {
			var context = this.contextFactory('foot');
			return new __WEBPACK_IMPORTED_MODULE_6__foot__["a" /* Foot */](context, this.model, this.markup);
		}
	}, {
		key: 'viewCore',
		value: function viewCore() {
			return new __WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */](this.context, this.model, this.markup);
		}
	}, {
		key: 'contextFactory',
		value: function contextFactory(source) {
			var ctx = this.context;
			return {
				mapper: ctx.mapper,
				layer: ctx.layer,
				bag: ctx.bag[source]
			};
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
})();

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return View; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unit__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_css__ = __webpack_require__(57);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

var View = (function (_Unit) {
	_inherits(View, _Unit);

	function View(context, model, markup) {
		_classCallCheck(this, View);

		var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this));

		_this.context = context;
		_this.model = model;
		_this.markup = markup;
		_this.layers = new Map();
		return _this;
	}

	_createClass(View, [{
		key: 'columns',
		value: function columns() {
			var column = this.model.scene().column;
			return column.line;
		}
	}, {
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
			this.getElementsCore('body').forEach((function (element) {
				return element.blur();
			}));
		}
	}, {
		key: 'isFocused',
		value: function isFocused() {
			var _this2 = this;

			return this.getElementsCore('body').some((function (element) {
				return _this2.isFocusedCore(element);
			}));
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
				this.markup.view.classList.add(__WEBPACK_IMPORTED_MODULE_1__services_css__["b" /* escapeAttr */](name));
			}
		}
	}, {
		key: 'removeClass',
		value: function removeClass(name) {
			if (this.markup.view) {
				this.markup.view.classList.remove(__WEBPACK_IMPORTED_MODULE_1__services_css__["b" /* escapeAttr */](name));
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
				this.getElementsCore('body').forEach((function (element) {
					return element.scrollTop = value;
				}));
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
			return [key + '-left', key, key + '-right'].filter((function (key) {
				return markup.hasOwnProperty(key);
			})).map((function (key) {
				return markup[key];
			}));
		}
	}]);

	return View;
})(__WEBPACK_IMPORTED_MODULE_0__unit__["a" /* Unit */]);

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return FakeElement; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_list__ = __webpack_require__(157);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var FakeElement = (function () {
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
})();

/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return FakeLayer; }));
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FakeLayer = (function () {
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
})();

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FakeTable */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FakeTable = function FakeTable() {
	_classCallCheck(this, FakeTable);

	this.rows = [];
};

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export build */
/* harmony export (immutable) */ __webpack_exports__["a"] = buildLines;
function build(style) {
	return buildLines(style).join('\n');
}

function buildLines(style) {
	return Object.keys(style).reduce((function (memo, key) {
		var entry = style[key];
		var body = Object.keys(entry).reduce((function (memo, key) {
			memo.push('\t' + key + ':' + entry[key] + ' !important;');
			return memo;
		}), []);

		memo.push(key + '{\n' + body.join('\n') + '\n}');
		return memo;
	}), []);
}

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Data; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(18);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Data = (function () {
	function Data(model) {
		_classCallCheck(this, Data);

		this.model = model;
	}

	_createClass(Data, [{
		key: 'columns',
		value: function columns() {
			return this.model.view().columns;
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
})();

/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Head; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(77);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Head = (function (_Box) {
	_inherits(Head, _Box);

	function Head(context, model, markup) {
		_classCallCheck(this, Head);

		return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).call(this, context, model, new __WEBPACK_IMPORTED_MODULE_1__selector__["b" /* SelectorMark */](model, markup, 'head')));
	}

	return Head;
})(__WEBPACK_IMPORTED_MODULE_0__box__["a" /* Box */]);

/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return CellView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure_index__ = __webpack_require__(3);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var CellView = (function () {
	function CellView(model) {
		_classCallCheck(this, CellView);

		this.model = model;

		// We need to cache it due to possible virtual mode;
		this.rowIndex = model.rowIndex;
		this.columnIndex = model.columnIndex;
		this.column = model.column;
		this.row = model.row;
	}

	_createClass(CellView, [{
		key: 'mode',
		value: function mode(value) {
			if (!this.model.mode) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure_index__["AppError"]('cell', 'Internal model doesn\'t support mode');
			}

			this.model.mode(value);
		}
	}, {
		key: 'value',
		get: function get() {
			if (!CellView.equals(this, this.model)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure_index__["AppError"]('cell', 'Internal model doesn\'t match container');
			}

			return this.model.value;
		},
		set: function set(value) {
			if (!CellView.equals(this, this.model)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure_index__["AppError"]('cell', 'Internal model doesn\'t match container');
			}

			this.model.value = value;
		}
	}, {
		key: 'label',
		get: function get() {
			if (!CellView.equals(this, this.model)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure_index__["AppError"]('cell', 'Internal model doesn\'t match container');
			}

			return this.model.label;
		},
		set: function set(label) {
			if (!CellView.equals(this, this.model)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure_index__["AppError"]('cell', 'Internal model doesn\'t match container');
			}

			this.model.label = label;
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

	return CellView;
})();

/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RowView */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RowView = function RowView(model) {
	_classCallCheck(this, RowView);

	this.model = model;
};

/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return CompositeCommandManager; }));
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CompositeCommandManager = (function () {
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
})();

/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TableCommandManager; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__command_manager__ = __webpack_require__(162);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var TableCommandManager = (function (_CommandManager) {
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
})(__WEBPACK_IMPORTED_MODULE_0__command_manager__["a" /* CommandManager */]);

/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TemplateModel */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TemplateModel = function TemplateModel() {
	_classCallCheck(this, TemplateModel);

	this.resource = {};
};

/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TemplatePath; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var resolvers = {};

var TemplatePath = (function () {
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
					if (!Object(__WEBPACK_IMPORTED_MODULE_1__utility__["isUndefined"])(value) && value !== null) {
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
			return Object.keys(resolvers).reduce((function (memo, key) {
				memo[getName(key)] = '^^?' + key;
				return memo;
			}), {});
		}
	}]);

	return TemplatePath;
})();



/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return SelectorFactory; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selector__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector_mediate__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unit_factory__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infrastructure__ = __webpack_require__(3);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var SelectorFactory = (function () {
	function SelectorFactory(bag, selectorMark) {
		_classCallCheck(this, SelectorFactory);

		this.bag = bag;
		this.selectorMark = selectorMark;
	}

	_createClass(SelectorFactory, [{
		key: 'create',
		value: function create() {
			var bag = this.bag;
			var selectorMark = this.selectorMark;
			var selectorFactory = function selectorFactory(context) {
				var entries = selectorMark.select().filter((function (entry) {
					if (context.hasOwnProperty('column')) {
						var columnIndex = context.column;
						return entry.columnRange.start <= columnIndex && columnIndex <= entry.columnRange.end;
					}

					return true;
				}));

				return entries.map((function (entry) {
					return {
						invoke: function invoke(f) {
							var unitFactory = new __WEBPACK_IMPORTED_MODULE_2__unit_factory__["a" /* UnitFactory */](entry.rowRange, entry.columnRange);
							var selector = new __WEBPACK_IMPORTED_MODULE_0__selector__["a" /* Selector */](entry.element, bag, unitFactory);

							var args = [];
							args.push(selector);
							if (context.hasOwnProperty('row')) {
								args.push(context.row - entry.rowRange.start);
							}
							if (context.hasOwnProperty('column')) {
								args.push(context.column - entry.columnRange.start);
							}

							return f.apply(undefined, args);
						}
					};
				}));
			};

			var unitFactory = new __WEBPACK_IMPORTED_MODULE_2__unit_factory__["a" /* UnitFactory */](new __WEBPACK_IMPORTED_MODULE_3__infrastructure__["Range"](0, 0), new __WEBPACK_IMPORTED_MODULE_3__infrastructure__["Range"](0, 0));
			return new __WEBPACK_IMPORTED_MODULE_1__selector_mediate__["a" /* SelectorMediator */](selectorFactory, unitFactory);
		}
	}]);

	return SelectorFactory;
})();

/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Selector; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fake__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Selector = (function () {
	function Selector(element, bag, factory) {
		_classCallCheck(this, Selector);

		this.element = element;
		this.bag = bag;
		this.factory = factory;
	}

	_createClass(Selector, [{
		key: 'columnCount',
		value: function columnCount(rowIndex) {
			var rows = this.rowsCore();
			var row = rows[rowIndex];
			return row ? row.cells.length : 0;
		}
	}, {
		key: 'columnCells',
		value: function columnCells(columnIndex) {
			var rows = this.rowsCore();
			var factory = this.factory;
			var findCell = this.findCellFactory(columnIndex);
			var result = [];
			for (var i = 0, length = rows.length; i < length; i++) {
				var row = rows[i];
				var cell = findCell(row);
				if (cell) {
					result.push(factory.cell(cell, i, columnIndex));
				}
			}

			return result;
		}
	}, {
		key: 'rowCount',
		value: function rowCount(columnIndex) {
			var rows = this.rowsCore();
			var findCell = this.findCellFactory(columnIndex);
			var count = 0;
			for (var i = 0, length = rows.length; i < length; i++) {
				var row = rows[i];
				var cell = findCell(row);
				if (cell) {
					count += cell.rowSpan;
				}
			}

			return count;
		}
	}, {
		key: 'rows',
		value: function rows(columnIndex) {
			var rows = this.rowsCore();
			var factory = this.factory;
			var result = [];
			if (Object(__WEBPACK_IMPORTED_MODULE_1__utility__["isUndefined"])(columnIndex)) {
				for (var i = 0, length = rows.length; i < length; i++) {
					var row = rows[i];
					result.push(factory.row(row, i));
				}
			} else {
				var findCell = this.findCellFactory(columnIndex);
				for (var _i = 0, _length = rows.length; _i < _length; _i++) {
					var _row = rows[_i];
					var cell = findCell(_row);
					if (cell) {
						result.push(factory.row(_row, _i));
					}
				}
			}

			return result;
		}
	}, {
		key: 'rowCells',
		value: function rowCells(rowIndex) {
			var rows = this.rowsCore();
			var row = rows[rowIndex];
			var factory = this.factory;
			var result = [];
			if (row) {
				var cells = row.cells;
				var index = 0;
				for (var i = 0, length = cells.length; i < length; i++) {
					var cell = cells[i];
					result.push(factory.cell(cell, rowIndex, index));

					index += cell.colSpan;
				}
			}

			return result;
		}
	}, {
		key: 'row',
		value: function row(rowIndex) {
			var rows = this.rowsCore();
			var row = rows[rowIndex];
			var factory = this.factory;
			if (row) {
				return factory.row(row, rowIndex);
			}

			return factory.row(new __WEBPACK_IMPORTED_MODULE_0__fake__["a" /* FakeElement */](), rowIndex);
		}
	}, {
		key: 'cell',
		value: function cell(rowIndex, columnIndex) {
			var rows = this.rowsCore();
			var row = rows[rowIndex];
			var factory = this.factory;
			if (row) {
				var findCell = this.findCellFactory(columnIndex);
				var cell = findCell(row);
				if (cell) {
					return factory.cell(cell, rowIndex, columnIndex);
				}
			}

			return factory.cell(new __WEBPACK_IMPORTED_MODULE_0__fake__["a" /* FakeElement */](), rowIndex, columnIndex);
		}
	}, {
		key: 'findCellFactory',
		value: function findCellFactory(columnIndex) {
			return function (row) {
				var cells = row.cells;
				var length = cells.length;
				var cursor = 0;
				var index = 0;
				while (cursor < length) {
					if (cursor === columnIndex) {
						return cells[index];
					}

					if (cursor > columnIndex) {
						break;
					}

					cursor += cells[index++].colSpan;
				}

				return null;
			};
		}
	}, {
		key: 'rowsCore',
		value: function rowsCore() {
			var isDataRow = this.bag.hasModel.bind(this.bag);
			var rows = this.element.rows;
			var result = [];
			for (var i = 0, length = rows.length; i < length; i++) {
				var row = rows[i];
				if (isDataRow(row)) {
					result.push(row);
				}
			}

			return result;
		}
	}]);

	return Selector;
})();

/***/ }),
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return SelectorMediator; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fake__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__container__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility__ = __webpack_require__(4);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var SelectorMediator = (function () {
	function SelectorMediator(selectorFactory, factory) {
		_classCallCheck(this, SelectorMediator);

		this.buildSelectors = selectorFactory;
		this.factory = factory;
	}

	_createClass(SelectorMediator, [{
		key: 'columnCount',
		value: function columnCount(rowIndex) {
			var selectors = this.buildSelectors({ row: rowIndex });
			if (!selectors.length) {
				return 0;
			}

			return Object(__WEBPACK_IMPORTED_MODULE_2__utility__["sumBy"])(selectors, (function (s) {
				return s.invoke((function (s, rowIndex) {
					return s.columnCount(rowIndex);
				}));
			}));
		}
	}, {
		key: 'columnCells',
		value: function columnCells(columnIndex) {
			var selectors = this.buildSelectors({ column: columnIndex });
			var result = [];
			for (var i = 0, length = selectors.length; i < length; i++) {
				var selector = selectors[i];
				var cells = selector.invoke((function (s, columnIndex) {
					return s.columnCells(columnIndex);
				}));
				result.push.apply(result, _toConsumableArray(cells));
			}

			return result;
		}
	}, {
		key: 'rowCount',
		value: function rowCount(columnIndex) {
			var selectors = this.buildSelectors({ column: columnIndex });
			if (!selectors.length) {
				return 0;
			}

			return Object(__WEBPACK_IMPORTED_MODULE_2__utility__["max"])(selectors.map((function (s) {
				return s.invoke((function (s, columnIndex) {
					return s.rowCount(columnIndex);
				}));
			})));
		}
	}, {
		key: 'rows',
		value: function rows(columnIndex) {
			var context = Object(__WEBPACK_IMPORTED_MODULE_2__utility__["isUndefined"])(columnIndex) ? {} : { column: columnIndex };
			var selectors = this.buildSelectors(context);
			var factory = this.factory;
			var areas = [];
			for (var i = 0, length = selectors.length; i < length; i++) {
				var selector = selectors[i];
				var rows = selector.invoke((function (s, columnIndex) {
					return s.rows(columnIndex);
				}));
				if (rows.length) {
					areas.push(rows);
				}
			}

			var lines = __WEBPACK_IMPORTED_MODULE_2__utility__["zip"].apply(undefined, areas);
			var result = [];
			for (var _i = 0, _length = lines.length; _i < _length; _i++) {
				var line = lines[_i];
				var elements = line.map((function (row) {
					return row.element;
				}));
				var rowElement = elements.length > 1 ? new __WEBPACK_IMPORTED_MODULE_1__container__["a" /* Container */](elements) : elements[0];
				var rowIndex = line[0].index;
				var row = factory.row(rowElement, rowIndex);
				result.push(row);
			}

			return result;
		}
	}, {
		key: 'rowCells',
		value: function rowCells(rowIndex) {
			var selectors = this.buildSelectors({ row: rowIndex });
			var result = [];
			for (var i = 0, length = selectors.length; i < length; i++) {
				var selector = selectors[i];
				var cells = selector.invoke((function (s, rowIndex) {
					return s.rowCells(rowIndex);
				}));
				result.push.apply(result, _toConsumableArray(cells));
			}

			return result;
		}
	}, {
		key: 'row',
		value: function row(rowIndex) {
			var selectors = this.buildSelectors({ row: rowIndex });
			var result = [];
			for (var i = 0, length = selectors.length; i < length; i++) {
				var selector = selectors[i];
				var row = selector.invoke((function (s, rowIndex) {
					return s.row(rowIndex);
				}));
				result.push(row.element);
			}

			return this.factory.row(new __WEBPACK_IMPORTED_MODULE_1__container__["a" /* Container */](result), rowIndex);
		}
	}, {
		key: 'cell',
		value: function cell(rowIndex, columnIndex) {
			var selectors = this.buildSelectors({ row: rowIndex, column: columnIndex });
			for (var i = 0, length = selectors.length; i < length; i++) {
				var selector = selectors[i];
				var cell = selector.invoke((function (s, rowIndex, columnIndex) {
					return s.cell(rowIndex, columnIndex);
				}));
				if (!(cell.element instanceof __WEBPACK_IMPORTED_MODULE_0__fake__["a" /* FakeElement */])) {
					return cell;
				}
			}

			return this.factory.cell(new __WEBPACK_IMPORTED_MODULE_0__fake__["a" /* FakeElement */](), rowIndex, columnIndex);
		}
	}]);

	return SelectorMediator;
})();

/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Container; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_css__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Container = (function () {
	function Container(elements) {
		_classCallCheck(this, Container);

		this.elements = elements;
	}

	_createClass(Container, [{
		key: 'getBoundingClientRect',
		value: function getBoundingClientRect() {
			var rects = this.elements.map((function (element) {
				return element.getBoundingClientRect();
			}));
			var top = Object(__WEBPACK_IMPORTED_MODULE_1__utility__["min"])(rects.map((function (r) {
				return r.top;
			})));
			var left = Object(__WEBPACK_IMPORTED_MODULE_1__utility__["min"])(rects.map((function (r) {
				return r.left;
			})));
			var bottom = Object(__WEBPACK_IMPORTED_MODULE_1__utility__["max"])(rects.map((function (r) {
				return r.bottom;
			})));
			var right = Object(__WEBPACK_IMPORTED_MODULE_1__utility__["max"])(rects.map((function (r) {
				return r.right;
			})));
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
			this.elements.forEach((function (element) {
				return element.classList.add(__WEBPACK_IMPORTED_MODULE_0__services_css__["b" /* escapeAttr */](name));
			}));
		}
	}, {
		key: 'removeClass',
		value: function removeClass(name) {
			this.elements.forEach((function (element) {
				return element.classList.remove(__WEBPACK_IMPORTED_MODULE_0__services_css__["b" /* escapeAttr */](name));
			}));
		}
	}, {
		key: 'hasClass',
		value: function hasClass(name) {
			return this.elements.some((function (element) {
				return element.classList.contains(name);
			}));
		}
	}, {
		key: 'clientWidth',
		get: function get() {
			return Object(__WEBPACK_IMPORTED_MODULE_1__utility__["max"])(this.elements.map((function (element) {
				return element.clientWidth;
			})));
		}
	}, {
		key: 'clientHeight',
		get: function get() {
			return Object(__WEBPACK_IMPORTED_MODULE_1__utility__["max"])(this.elements.map((function (element) {
				return element.clientHeight;
			})));
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
})();

/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return UnitFactory; }));
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UnitFactory = (function () {
	function UnitFactory(rowRange, columnRange) {
		_classCallCheck(this, UnitFactory);

		this.rowRange = rowRange;
		this.columnRange = columnRange;
	}

	_createClass(UnitFactory, [{
		key: "cell",
		value: function cell(element, rowIndex, columnIndex) {
			return {
				element: element,
				rowIndex: rowIndex + this.rowRange.start,
				columnIndex: columnIndex + this.columnRange.start
			};
		}
	}, {
		key: "row",
		value: function row(element, rowIndex) {
			return {
				element: element,
				index: rowIndex + this.rowRange.start
			};
		}
	}]);

	return UnitFactory;
})();

/***/ }),
/* 345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return SelectorMark; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var SelectorMark = (function () {
	function SelectorMark(model, markup, name) {
		_classCallCheck(this, SelectorMark);

		this.model = model;
		this.name = name;
		this.markup = markup;
	}

	_createClass(SelectorMark, [{
		key: 'select',
		value: function select() {
			var result = [];
			var addNext = this.addFactory(result);

			addNext('left');
			addNext(null);
			addNext('right');

			return result;
		}
	}, {
		key: 'addFactory',
		value: function addFactory(result) {
			var _this = this;

			var model = this.model;
			var rows = model.view().rows;
			var columns = model.view().columns;

			return function (pin) {
				var name = pin ? _this.name + '-' + pin : _this.name;
				var element = _this.markup[name];
				if (element) {
					var prev = result[result.length - 1];
					var columnStart = prev ? prev.columnRange.end : 0;
					var columnSize = columns.filter((function (c) {
						return c.pin === pin;
					})).length;
					var rowStart = 0;
					var rowSize = rows.length;

					result.push({
						element: element,
						columnRange: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Range"](columnStart, columnStart + columnSize),
						rowRange: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Range"](rowStart, rowStart + rowSize)
					});
				}

				return result;
			};
		}
	}]);

	return SelectorMark;
})();

/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Body; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return VirtualBody; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__virtual__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__box__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selector__ = __webpack_require__(77);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Body = (function (_Box) {
	_inherits(Body, _Box);

	function Body(context, model, markup) {
		_classCallCheck(this, Body);

		return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, context, model, new __WEBPACK_IMPORTED_MODULE_2__selector__["b" /* SelectorMark */](model, markup, 'body')));
	}

	return Body;
})(__WEBPACK_IMPORTED_MODULE_1__box__["a" /* Box */]);

var VirtualBody = (function (_VirtualBox) {
	_inherits(VirtualBody, _VirtualBox);

	function VirtualBody(context, model, markup) {
		_classCallCheck(this, VirtualBody);

		return _possibleConstructorReturn(this, (VirtualBody.__proto__ || Object.getPrototypeOf(VirtualBody)).call(this, context, model, new __WEBPACK_IMPORTED_MODULE_2__selector__["b" /* SelectorMark */](model, markup, 'body')));
	}

	return VirtualBody;
})(__WEBPACK_IMPORTED_MODULE_0__virtual__["a" /* VirtualBox */]);

/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box__ = __webpack_require__(348);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__box__["a"]; }));


/***/ }),
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return VirtualBox; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__row__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__box__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cell_box__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__row_box__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__column_box__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fake__ = __webpack_require__(56);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var VirtualBox = (function (_Box) {
	_inherits(VirtualBox, _Box);

	function VirtualBox(context, model, selectorMark) {
		_classCallCheck(this, VirtualBox);

		var _this = _possibleConstructorReturn(this, (VirtualBox.__proto__ || Object.getPrototypeOf(VirtualBox)).call(this, context, model, selectorMark));

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
		key: 'rowCore',
		value: function rowCore(index) {
			var viewIndex = this.context.mapper.rowToView(index);
			if (viewIndex >= 0 && viewIndex < _get(VirtualBox.prototype.__proto__ || Object.getPrototypeOf(VirtualBox.prototype), 'rowCount', this).call(this, 0)) {
				return _get(VirtualBox.prototype.__proto__ || Object.getPrototypeOf(VirtualBox.prototype), 'rowCore', this).call(this, viewIndex);
			}

			var rowFactory = this.createRowCore.bind(this);
			return rowFactory(viewIndex, new __WEBPACK_IMPORTED_MODULE_7__fake__["a" /* FakeElement */]());
		}
	}, {
		key: 'cellCore',
		value: function cellCore(rowIndex, columnIndex) {
			var mapper = this.context.mapper;
			var viewRowIndex = mapper.rowToView(rowIndex);
			var viewColumnIndex = mapper.columnToView(columnIndex);
			if (viewRowIndex >= 0 && viewRowIndex < _get(VirtualBox.prototype.__proto__ || Object.getPrototypeOf(VirtualBox.prototype), 'rowCount', this).call(this, viewColumnIndex)) {
				return _get(VirtualBox.prototype.__proto__ || Object.getPrototypeOf(VirtualBox.prototype), 'cellCore', this).call(this, viewRowIndex, viewColumnIndex);
			}

			var cellFactory = this.createCellCore.bind(this);
			return cellFactory(viewRowIndex, viewColumnIndex, new __WEBPACK_IMPORTED_MODULE_7__fake__["a" /* FakeElement */]());
		}
	}, {
		key: 'rowCellsCore',
		value: function rowCellsCore(index) {
			var viewIndex = this.context.mapper.rowToView(index);
			if (viewIndex >= 0 && viewIndex < _get(VirtualBox.prototype.__proto__ || Object.getPrototypeOf(VirtualBox.prototype), 'rowCount', this).call(this, 0)) {
				return _get(VirtualBox.prototype.__proto__ || Object.getPrototypeOf(VirtualBox.prototype), 'rowCellsCore', this).call(this, viewIndex);
			}

			var cellFactory = this.createCellCore.bind(this);
			return _get(VirtualBox.prototype.__proto__ || Object.getPrototypeOf(VirtualBox.prototype), 'rowCellsCore', this).call(this, 0).map((function (cell, i) {
				return cellFactory(viewIndex, i, new __WEBPACK_IMPORTED_MODULE_7__fake__["a" /* FakeElement */]());
			}));
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
})(__WEBPACK_IMPORTED_MODULE_3__box__["a" /* Box */]);

/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return VirtualCell; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_view__ = __webpack_require__(6);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var VirtualCell = (function (_Cell) {
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
		key: 'model',
		value: function model() {
			var rowIndex = this.dataRowIndex;
			var columnIndex = this.dataColumnIndex;
			if (rowIndex >= 0 && columnIndex >= 0) {
				var gridModel = this.box.model;
				var rows = gridModel.data().rows;
				var columns = gridModel.view().columns;

				if (rows.length > rowIndex && columns.length > columnIndex) {
					var model = {
						rowIndex: rowIndex,
						columnIndex: columnIndex,
						row: rows[rowIndex],
						column: columns[columnIndex]
					};

					return new __WEBPACK_IMPORTED_MODULE_1__scene_view__["a" /* CellView */](model);
				}
			}

			return null;
		}
	}, {
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
	}]);

	return VirtualCell;
})(__WEBPACK_IMPORTED_MODULE_0__cell__["a" /* Cell */]);

/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return VirtualRow; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__row__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__row__ = __webpack_require__(163);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var VirtualRow = (function (_Row) {
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
		key: 'model',
		value: function model() {
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
	}, {
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
	}]);

	return VirtualRow;
})(__WEBPACK_IMPORTED_MODULE_0__row__["a" /* Row */]);

/***/ }),
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return RowModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var RowModel = function RowModel() {
	_classCallCheck(this, RowModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();

	this.mode = 'single'; //single|multiple|all
	this.unit = 'data'; //data|details
	this.height = 0;
	this.status = new Map();
	this.shortcut = {
		toggle: 'space'
	};
};

/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export factory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__ = __webpack_require__(164);



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
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Row; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Row = (function () {
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
})();

/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return VirtualColumn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column__ = __webpack_require__(160);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var VirtualColumn = (function (_Column) {
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
})(__WEBPACK_IMPORTED_MODULE_0__column__["a" /* Column */]);

/***/ }),
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return CellBox; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_box__ = __webpack_require__(109);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var CellBox = (function (_StyleBox) {
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
})(__WEBPACK_IMPORTED_MODULE_0__style_box__["a" /* StyleBox */]);

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return RowBox; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_box__ = __webpack_require__(109);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var RowBox = (function (_StyleBox) {
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
})(__WEBPACK_IMPORTED_MODULE_0__style_box__["a" /* StyleBox */]);

/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ColumnBox; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_box__ = __webpack_require__(109);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ColumnBox = (function (_StyleBox) {
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
})(__WEBPACK_IMPORTED_MODULE_0__style_box__["a" /* StyleBox */]);

/***/ }),
/* 358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Foot; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(77);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Foot = (function (_Box) {
	_inherits(Foot, _Box);

	function Foot(context, model, markup) {
		_classCallCheck(this, Foot);

		return _possibleConstructorReturn(this, (Foot.__proto__ || Object.getPrototypeOf(Foot)).call(this, context, model, new __WEBPACK_IMPORTED_MODULE_1__selector__["b" /* SelectorMark */](model, markup, 'foot')));
	}

	return Foot;
})(__WEBPACK_IMPORTED_MODULE_0__box__["a" /* Box */]);

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(360);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(140)(undefined);
// imports


// module
exports.push([module.i, ".flex-order{order:0}.flex-order--20{order:-20}.flex-order--19{order:-19}.flex-order--18{order:-18}.flex-order--17{order:-17}.flex-order--16{order:-16}.flex-order--15{order:-15}.flex-order--14{order:-14}.flex-order--13{order:-13}.flex-order--12{order:-12}.flex-order--11{order:-11}.flex-order--10{order:-10}.flex-order--9{order:-9}.flex-order--8{order:-8}.flex-order--7{order:-7}.flex-order--6{order:-6}.flex-order--5{order:-5}.flex-order--4{order:-4}.flex-order--3{order:-3}.flex-order--2{order:-2}.flex-order--1{order:-1}.flex-order-0{order:0}.flex-order-1{order:1}.flex-order-2{order:2}.flex-order-3{order:3}.flex-order-4{order:4}.flex-order-5{order:5}.flex-order-6{order:6}.flex-order-7{order:7}.flex-order-8{order:8}.flex-order-9{order:9}.flex-order-10{order:10}.flex-order-11{order:11}.flex-order-12{order:12}.flex-order-13{order:13}.flex-order-14{order:14}.flex-order-15{order:15}.flex-order-16{order:16}.flex-order-17{order:17}.flex-order-18{order:18}.flex-order-19{order:19}.flex-order-20{order:20}.flex-offset-0,.offset-0{margin-left:0}[dir=rtl] .flex-offset-0,[dir=rtl] .offset-0{margin-left:auto;margin-right:0}.flex-offset-5,.offset-5{margin-left:5%}[dir=rtl] .flex-offset-5,[dir=rtl] .offset-5{margin-left:auto;margin-right:5%}.flex-offset-10,.offset-10{margin-left:10%}[dir=rtl] .flex-offset-10,[dir=rtl] .offset-10{margin-left:auto;margin-right:10%}.flex-offset-15,.offset-15{margin-left:15%}[dir=rtl] .flex-offset-15,[dir=rtl] .offset-15{margin-left:auto;margin-right:15%}.flex-offset-20,.offset-20{margin-left:20%}[dir=rtl] .flex-offset-20,[dir=rtl] .offset-20{margin-left:auto;margin-right:20%}.flex-offset-25,.offset-25{margin-left:25%}[dir=rtl] .flex-offset-25,[dir=rtl] .offset-25{margin-left:auto;margin-right:25%}.flex-offset-30,.offset-30{margin-left:30%}[dir=rtl] .flex-offset-30,[dir=rtl] .offset-30{margin-left:auto;margin-right:30%}.flex-offset-35,.offset-35{margin-left:35%}[dir=rtl] .flex-offset-35,[dir=rtl] .offset-35{margin-left:auto;margin-right:35%}.flex-offset-40,.offset-40{margin-left:40%}[dir=rtl] .flex-offset-40,[dir=rtl] .offset-40{margin-left:auto;margin-right:40%}.flex-offset-45,.offset-45{margin-left:45%}[dir=rtl] .flex-offset-45,[dir=rtl] .offset-45{margin-left:auto;margin-right:45%}.flex-offset-50,.offset-50{margin-left:50%}[dir=rtl] .flex-offset-50,[dir=rtl] .offset-50{margin-left:auto;margin-right:50%}.flex-offset-55,.offset-55{margin-left:55%}[dir=rtl] .flex-offset-55,[dir=rtl] .offset-55{margin-left:auto;margin-right:55%}.flex-offset-60,.offset-60{margin-left:60%}[dir=rtl] .flex-offset-60,[dir=rtl] .offset-60{margin-left:auto;margin-right:60%}.flex-offset-65,.offset-65{margin-left:65%}[dir=rtl] .flex-offset-65,[dir=rtl] .offset-65{margin-left:auto;margin-right:65%}.flex-offset-70,.offset-70{margin-left:70%}[dir=rtl] .flex-offset-70,[dir=rtl] .offset-70{margin-left:auto;margin-right:70%}.flex-offset-75,.offset-75{margin-left:75%}[dir=rtl] .flex-offset-75,[dir=rtl] .offset-75{margin-left:auto;margin-right:75%}.flex-offset-80,.offset-80{margin-left:80%}[dir=rtl] .flex-offset-80,[dir=rtl] .offset-80{margin-left:auto;margin-right:80%}.flex-offset-85,.offset-85{margin-left:85%}[dir=rtl] .flex-offset-85,[dir=rtl] .offset-85{margin-left:auto;margin-right:85%}.flex-offset-90,.offset-90{margin-left:90%}[dir=rtl] .flex-offset-90,[dir=rtl] .offset-90{margin-left:auto;margin-right:90%}.flex-offset-95,.offset-95{margin-left:95%}[dir=rtl] .flex-offset-95,[dir=rtl] .offset-95{margin-left:auto;margin-right:95%}.flex-offset-33,.offset-33{margin-left:33.33333%}.flex-offset-66,.offset-66{margin-left:66.66667%}[dir=rtl] .flex-offset-66,[dir=rtl] .offset-66{margin-left:auto;margin-right:66.66667%}.layout-align,.layout-align-start-stretch{justify-content:flex-start;align-content:stretch;align-items:stretch}.layout-align-start,.layout-align-start-center,.layout-align-start-end,.layout-align-start-start,.layout-align-start-stretch{justify-content:flex-start}.layout-align-center,.layout-align-center-center,.layout-align-center-end,.layout-align-center-start,.layout-align-center-stretch{justify-content:center}.layout-align-end,.layout-align-end-center,.layout-align-end-end,.layout-align-end-start,.layout-align-end-stretch{justify-content:flex-end}.layout-align-space-around,.layout-align-space-around-center,.layout-align-space-around-end,.layout-align-space-around-start,.layout-align-space-around-stretch{justify-content:space-around}.layout-align-space-between,.layout-align-space-between-center,.layout-align-space-between-end,.layout-align-space-between-start,.layout-align-space-between-stretch{justify-content:space-between}.layout-align-center-start,.layout-align-end-start,.layout-align-space-around-start,.layout-align-space-between-start,.layout-align-start-start{align-items:flex-start;align-content:flex-start}.layout-align-center-center,.layout-align-end-center,.layout-align-space-around-center,.layout-align-space-between-center,.layout-align-start-center{align-items:center;align-content:center;max-width:100%}.layout-align-center-center>*,.layout-align-end-center>*,.layout-align-space-around-center>*,.layout-align-space-between-center>*,.layout-align-start-center>*{max-width:100%;box-sizing:border-box}.layout-align-center-end,.layout-align-end-end,.layout-align-space-around-end,.layout-align-space-between-end,.layout-align-start-end{align-items:flex-end;align-content:flex-end}.layout-align-center-stretch,.layout-align-end-stretch,.layout-align-space-around-stretch,.layout-align-space-between-stretch,.layout-align-start-stretch{align-items:stretch;align-content:stretch}.flex{flex:1}.flex,.flex-grow{box-sizing:border-box}.flex-grow{flex:1 1 100%}.flex-initial{flex:0 1 auto;box-sizing:border-box}.flex-auto{flex:1 1 auto;box-sizing:border-box}.flex-none{flex:0 0 auto;box-sizing:border-box}.flex-noshrink{flex:1 0 auto;box-sizing:border-box}.flex-nogrow{flex:0 1 auto;box-sizing:border-box}.flex-0,.layout-row>.flex-0{flex:1 1 0%;max-width:0;max-height:100%;box-sizing:border-box}.layout-row>.flex-0{min-width:0}.layout-column>.flex-0{flex:1 1 0%;max-width:100%;max-height:0%;box-sizing:border-box;min-height:0}.flex-5,.layout-row>.flex-5{flex:1 1 5%;max-width:5%;max-height:100%;box-sizing:border-box}.layout-column>.flex-5{flex:1 1 5%;max-width:100%;max-height:5%;box-sizing:border-box}.flex-10,.layout-row>.flex-10{flex:1 1 10%;max-width:10%;max-height:100%;box-sizing:border-box}.layout-column>.flex-10{flex:1 1 10%;max-width:100%;max-height:10%;box-sizing:border-box}.flex-15,.layout-row>.flex-15{flex:1 1 15%;max-width:15%;max-height:100%;box-sizing:border-box}.layout-column>.flex-15{flex:1 1 15%;max-width:100%;max-height:15%;box-sizing:border-box}.flex-20,.layout-row>.flex-20{flex:1 1 20%;max-width:20%;max-height:100%;box-sizing:border-box}.layout-column>.flex-20{flex:1 1 20%;max-width:100%;max-height:20%;box-sizing:border-box}.flex-25,.layout-row>.flex-25{flex:1 1 25%;max-width:25%;max-height:100%;box-sizing:border-box}.layout-column>.flex-25{flex:1 1 25%;max-width:100%;max-height:25%;box-sizing:border-box}.flex-30,.layout-row>.flex-30{flex:1 1 30%;max-width:30%;max-height:100%;box-sizing:border-box}.layout-column>.flex-30{flex:1 1 30%;max-width:100%;max-height:30%;box-sizing:border-box}.flex-35,.layout-row>.flex-35{flex:1 1 35%;max-width:35%;max-height:100%;box-sizing:border-box}.layout-column>.flex-35{flex:1 1 35%;max-width:100%;max-height:35%;box-sizing:border-box}.flex-40,.layout-row>.flex-40{flex:1 1 40%;max-width:40%;max-height:100%;box-sizing:border-box}.layout-column>.flex-40{flex:1 1 40%;max-width:100%;max-height:40%;box-sizing:border-box}.flex-45,.layout-row>.flex-45{flex:1 1 45%;max-width:45%;max-height:100%;box-sizing:border-box}.layout-column>.flex-45{flex:1 1 45%;max-width:100%;max-height:45%;box-sizing:border-box}.flex-50,.layout-row>.flex-50{flex:1 1 50%;max-width:50%;max-height:100%;box-sizing:border-box}.layout-column>.flex-50{flex:1 1 50%;max-width:100%;max-height:50%;box-sizing:border-box}.flex-55,.layout-row>.flex-55{flex:1 1 55%;max-width:55%;max-height:100%;box-sizing:border-box}.layout-column>.flex-55{flex:1 1 55%;max-width:100%;max-height:55%;box-sizing:border-box}.flex-60,.layout-row>.flex-60{flex:1 1 60%;max-width:60%;max-height:100%;box-sizing:border-box}.layout-column>.flex-60{flex:1 1 60%;max-width:100%;max-height:60%;box-sizing:border-box}.flex-65,.layout-row>.flex-65{flex:1 1 65%;max-width:65%;max-height:100%;box-sizing:border-box}.layout-column>.flex-65{flex:1 1 65%;max-width:100%;max-height:65%;box-sizing:border-box}.flex-70,.layout-row>.flex-70{flex:1 1 70%;max-width:70%;max-height:100%;box-sizing:border-box}.layout-column>.flex-70{flex:1 1 70%;max-width:100%;max-height:70%;box-sizing:border-box}.flex-75,.layout-row>.flex-75{flex:1 1 75%;max-width:75%;max-height:100%;box-sizing:border-box}.layout-column>.flex-75{flex:1 1 75%;max-width:100%;max-height:75%;box-sizing:border-box}.flex-80,.layout-row>.flex-80{flex:1 1 80%;max-width:80%;max-height:100%;box-sizing:border-box}.layout-column>.flex-80{flex:1 1 80%;max-width:100%;max-height:80%;box-sizing:border-box}.flex-85,.layout-row>.flex-85{flex:1 1 85%;max-width:85%;max-height:100%;box-sizing:border-box}.layout-column>.flex-85{flex:1 1 85%;max-width:100%;max-height:85%;box-sizing:border-box}.flex-90,.layout-row>.flex-90{flex:1 1 90%;max-width:90%;max-height:100%;box-sizing:border-box}.layout-column>.flex-90{flex:1 1 90%;max-width:100%;max-height:90%;box-sizing:border-box}.flex-95,.layout-row>.flex-95{flex:1 1 95%;max-width:95%;max-height:100%;box-sizing:border-box}.layout-column>.flex-95{flex:1 1 95%;max-width:100%;max-height:95%;box-sizing:border-box}.flex-100,.layout-column>.flex-100,.layout-row>.flex-100{flex:1 1 100%;max-width:100%;max-height:100%;box-sizing:border-box}.layout-row>.flex-33{flex:1 1 33.33%;max-width:33.33%;max-height:100%;box-sizing:border-box}.layout-row>.flex-66{flex:1 1 66.66%;max-width:66.66%;max-height:100%;box-sizing:border-box}.layout-row>.flex{min-width:0}.layout-column>.flex-33{flex:1 1 33.33%;max-width:100%;max-height:33.33%;box-sizing:border-box}.layout-column>.flex-66{flex:1 1 66.66%;max-width:100%;max-height:66.66%;box-sizing:border-box}.layout-column>.flex{min-height:0}.layout,.layout-column,.layout-row{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.layout-column{flex-direction:column}.layout-row{flex-direction:row}.layout-padding-sm>*,.layout-padding>.flex-sm{padding:4px}.layout-padding,.layout-padding-gt-sm,.layout-padding-gt-sm>*,.layout-padding-md,.layout-padding-md>*,.layout-padding>*,.layout-padding>.flex,.layout-padding>.flex-gt-sm,.layout-padding>.flex-md{padding:8px}.layout-padding-gt-lg>*,.layout-padding-gt-md>*,.layout-padding-lg>*,.layout-padding>.flex-gt-lg,.layout-padding>.flex-gt-md,.layout-padding>.flex-lg{padding:16px}.layout-margin-sm>*,.layout-margin>.flex-sm{margin:4px}.layout-margin,.layout-margin-gt-sm,.layout-margin-gt-sm>*,.layout-margin-md,.layout-margin-md>*,.layout-margin>*,.layout-margin>.flex,.layout-margin>.flex-gt-sm,.layout-margin>.flex-md{margin:8px}.layout-margin-gt-lg>*,.layout-margin-gt-md>*,.layout-margin-lg>*,.layout-margin>.flex-gt-lg,.layout-margin>.flex-gt-md,.layout-margin>.flex-lg{margin:16px}.layout-wrap{flex-wrap:wrap}.layout-nowrap{flex-wrap:nowrap}.layout-fill{margin:0;width:100%;min-height:100%;height:100%}.q-grid ::-webkit-scrollbar{width:8px;height:8px}.q-grid ::-webkit-scrollbar-thumb{height:15px;background-color:#c8c8c8;-webkit-box-shadow:inset 1px 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.07)}.q-grid ::-webkit-scrollbar-button{width:0;height:0;display:none}.q-grid ::-webkit-scrollbar-corner{background-color:transparent}.q-grid ::-webkit-scrollbar-track,.q-grid ::-webkit-scrollbar-track-piece{background-color:#f8f8f8}.q-grid.q-grid-box{height:100%;min-height:100%;max-height:100%}.q-grid tbody tr.q-grid-scroll-mark{height:0}.q-grid .q-grid-table table{border-spacing:0;overflow:hidden;table-layout:fixed;display:flex;flex-flow:column;height:100%;width:100%;outline:none}.q-grid .q-grid-table table tfoot,.q-grid .q-grid-table table thead{flex:0 0 auto;width:calc(100% - 8px);overflow:hidden}.q-grid .q-grid-table table tbody{flex:1 1 auto;display:block;overflow-y:scroll;overflow-x:scroll;outline:none;overflow-anchor:none}.q-grid .q-grid-table table tbody tr{width:100%;display:table-row;table-layout:fixed}.q-grid .q-grid-table table tbody tr.q-grid-align{height:0!important}.q-grid .q-grid-table.q-grid-table-left tfoot,.q-grid .q-grid-table.q-grid-table-left thead,.q-grid .q-grid-with-right-pin .q-grid-table.q-grid-table-center tfoot,.q-grid .q-grid-with-right-pin .q-grid-table.q-grid-table-center thead{width:100%}.q-grid td,.q-grid th{vertical-align:middle;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;position:relative;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.q-grid td>*,.q-grid th>*{vertical-align:middle}.q-grid td.q-grid-pivot,.q-grid th.q-grid-pivot{text-align:center}.q-grid thead th>div{overflow:hidden;text-overflow:ellipsis;outline:none}.q-grid tbody td,.q-grid tbody th,.q-grid tfoot td,.q-grid tfoot th,.q-grid thead td,.q-grid thead th{width:150px;min-width:150px;max-width:150px}.q-grid tbody td.q-grid-pad,.q-grid tbody th.q-grid-pad,.q-grid tfoot td.q-grid-pad,.q-grid tfoot th.q-grid-pad,.q-grid thead td.q-grid-pad,.q-grid thead th.q-grid-pad{width:100%;min-width:100%;max-width:100%;padding:0 0 0 1px!important;margin:0!important}.q-grid tbody td.q-grid-group,.q-grid tbody th.q-grid-group,.q-grid tfoot td.q-grid-group,.q-grid tfoot th.q-grid-group,.q-grid thead td.q-grid-group,.q-grid thead th.q-grid-group{width:200px;min-width:200px;max-width:200px}.q-grid tbody td.q-grid-pivot,.q-grid tbody th.q-grid-pivot,.q-grid tfoot td.q-grid-pivot,.q-grid tfoot th.q-grid-pivot,.q-grid thead td.q-grid-pivot,.q-grid thead th.q-grid-pivot{width:80px;min-width:80px;max-width:80px}.q-grid tbody td.q-grid-email,.q-grid tbody th.q-grid-email,.q-grid tfoot td.q-grid-email,.q-grid tfoot th.q-grid-email,.q-grid thead td.q-grid-email,.q-grid thead th.q-grid-email{width:200px;min-width:200px;max-width:200px}.q-grid tbody td.q-grid-password,.q-grid tbody th.q-grid-password,.q-grid tfoot td.q-grid-password,.q-grid tfoot th.q-grid-password,.q-grid thead td.q-grid-password,.q-grid thead th.q-grid-password{width:100px;min-width:100px;max-width:100px}.q-grid tbody td.q-grid-bool,.q-grid tbody th.q-grid-bool,.q-grid tfoot td.q-grid-bool,.q-grid tfoot th.q-grid-bool,.q-grid thead td.q-grid-bool,.q-grid thead th.q-grid-bool{width:80px;min-width:80px;max-width:80px}.q-grid tbody td.q-grid-date,.q-grid tbody th.q-grid-date,.q-grid tfoot td.q-grid-date,.q-grid tfoot th.q-grid-date,.q-grid thead td.q-grid-date,.q-grid thead th.q-grid-date{width:110px;min-width:110px;max-width:110px}.q-grid tbody td.q-grid-currency,.q-grid tbody td.q-grid-number,.q-grid tbody th.q-grid-currency,.q-grid tbody th.q-grid-number,.q-grid tfoot td.q-grid-currency,.q-grid tfoot td.q-grid-number,.q-grid tfoot th.q-grid-currency,.q-grid tfoot th.q-grid-number,.q-grid thead td.q-grid-currency,.q-grid thead td.q-grid-number,.q-grid thead th.q-grid-currency,.q-grid thead th.q-grid-number{width:100px;min-width:100px;max-width:100px}.q-grid tbody td.q-grid-array,.q-grid tbody th.q-grid-array,.q-grid tfoot td.q-grid-array,.q-grid tfoot th.q-grid-array,.q-grid thead td.q-grid-array,.q-grid thead th.q-grid-array{width:250px;min-width:250px;max-width:250px}.q-grid tbody td.q-grid-row-indicator,.q-grid tbody th.q-grid-row-indicator,.q-grid tfoot td.q-grid-row-indicator,.q-grid tfoot th.q-grid-row-indicator,.q-grid thead td.q-grid-row-indicator,.q-grid thead th.q-grid-row-indicator{width:10px;min-width:10px;max-width:10px;text-overflow:clip}.q-grid tbody td.q-grid-row-options,.q-grid tbody th.q-grid-row-options,.q-grid tfoot td.q-grid-row-options,.q-grid tfoot th.q-grid-row-options,.q-grid thead td.q-grid-row-options,.q-grid thead th.q-grid-row-options{width:56px;min-width:56px;max-width:56px;text-overflow:clip}.q-grid tbody td.q-grid-row-expand,.q-grid tbody td.q-grid-row-number,.q-grid tbody td.q-grid-select,.q-grid tbody th.q-grid-row-expand,.q-grid tbody th.q-grid-row-number,.q-grid tbody th.q-grid-select,.q-grid tfoot td.q-grid-row-expand,.q-grid tfoot td.q-grid-row-number,.q-grid tfoot td.q-grid-select,.q-grid tfoot th.q-grid-row-expand,.q-grid tfoot th.q-grid-row-number,.q-grid tfoot th.q-grid-select,.q-grid thead td.q-grid-row-expand,.q-grid thead td.q-grid-row-number,.q-grid thead td.q-grid-select,.q-grid thead th.q-grid-row-expand,.q-grid thead th.q-grid-row-number,.q-grid thead th.q-grid-select{width:56px;min-width:56px;max-width:56px}.q-grid tbody td.q-grid-currency,.q-grid tbody td.q-grid-number,.q-grid tfoot td.q-grid-currency,.q-grid tfoot td.q-grid-number{text-align:right}.q-grid tbody td.q-grid-bool,.q-grid tbody td.q-grid-password,.q-grid tbody td.q-grid-select,.q-grid tfoot td.q-grid-bool,.q-grid tfoot td.q-grid-password,.q-grid tfoot td.q-grid-select{text-align:center}.q-grid tbody td.q-grid-dropdown select,.q-grid tfoot td.q-grid-dropdown select{width:100%}.q-grid tbody td.q-grid-row-options,.q-grid tfoot td.q-grid-row-options{cursor:pointer}.q-grid .q-grid-can-drag{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-khtml-user-drag:element;-webkit-user-drag:element}.q-grid th .q-grid-divider{top:20%;bottom:20%;right:0;height:60%;width:4px;z-index:2;background:transparent;position:absolute;border-right:1px solid rgba(0,0,0,.12);cursor:col-resize;visibility:hidden}.q-grid th.q-grid-highlighted-prev .q-grid-divider,.q-grid th:hover .q-grid-divider{visibility:visible}.q-grid .q-grid-toolbar-left,.q-grid .q-grid-toolbar-right{max-width:250px;overflow:auto}.q-grid .q-grid-view{position:relative}.q-grid .q-grid-view.q-grid-select-range tbody td,.q-grid .q-grid-view.q-grid-select-range tbody th,.q-grid .q-grid-view.q-grid-select-range tfoot td,.q-grid .q-grid-view.q-grid-select-range tfoot th,.q-grid .q-grid-view.q-grid-select-range thead td,.q-grid .q-grid-view.q-grid-select-range thead th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.q-grid .q-grid-view>.q-grid-table-left tbody,.q-grid .q-grid-with-right-pin .q-grid-table-center tbody{overflow-y:hidden}.q-grid .q-grid-view .q-grid-layer{position:absolute;width:100%;height:100%}", ""]);

// exports


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(362);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(140)(undefined);
// imports


// module
exports.push([module.i, ".q-grid.q-grid-theme-material.q-grid-box{font-family:Roboto,Helvetica Neue,sans-serif}.q-grid.q-grid-theme-material .q-grid-view tfoot tr,.q-grid.q-grid-theme-material .q-grid-view thead tr{height:56px}.q-grid.q-grid-theme-material .q-grid-view tfoot tr td,.q-grid.q-grid-theme-material .q-grid-view tfoot tr th,.q-grid.q-grid-theme-material .q-grid-view thead tr td,.q-grid.q-grid-theme-material .q-grid-view thead tr th{color:rgba(0,0,0,.54);font-size:12px;font-weight:700;padding:0 16px}.q-grid.q-grid-theme-material .q-grid-view tfoot tr td.q-grid-select,.q-grid.q-grid-theme-material .q-grid-view tfoot tr th.q-grid-select,.q-grid.q-grid-theme-material .q-grid-view thead tr td.q-grid-select,.q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-select{text-overflow:clip}.q-grid.q-grid-theme-material .q-grid-view tfoot tr td.q-grid-select md-checkbox,.q-grid.q-grid-theme-material .q-grid-view tfoot tr th.q-grid-select md-checkbox,.q-grid.q-grid-theme-material .q-grid-view thead tr td.q-grid-select md-checkbox,.q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-select md-checkbox{margin:0 0 0 2px}.q-grid.q-grid-theme-material .q-grid-view tfoot tr td.q-grid-filter-row md-input-container,.q-grid.q-grid-theme-material .q-grid-view tfoot tr th.q-grid-filter-row md-input-container,.q-grid.q-grid-theme-material .q-grid-view thead tr td.q-grid-filter-row md-input-container,.q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-filter-row md-input-container{margin:0;padding:0}.q-grid.q-grid-theme-material .q-grid-view tfoot tr td.q-grid-filter-row md-input-container .md-errors-spacer,.q-grid.q-grid-theme-material .q-grid-view tfoot tr th.q-grid-filter-row md-input-container .md-errors-spacer,.q-grid.q-grid-theme-material .q-grid-view thead tr td.q-grid-filter-row md-input-container .md-errors-spacer,.q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-filter-row md-input-container .md-errors-spacer{min-height:0!important}.q-grid.q-grid-theme-material .q-grid-view tfoot tr td.q-grid-filter-row input[placeholder],.q-grid.q-grid-theme-material .q-grid-view tfoot tr th.q-grid-filter-row input[placeholder],.q-grid.q-grid-theme-material .q-grid-view thead tr td.q-grid-filter-row input[placeholder],.q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-filter-row input[placeholder]{text-overflow:ellipsis}.q-grid.q-grid-theme-material .q-grid-view tfoot tr td.q-grid-filter-row input:-moz-placeholder,.q-grid.q-grid-theme-material .q-grid-view tfoot tr td.q-grid-filter-row input::-moz-placeholder,.q-grid.q-grid-theme-material .q-grid-view tfoot tr th.q-grid-filter-row input:-moz-placeholder,.q-grid.q-grid-theme-material .q-grid-view tfoot tr th.q-grid-filter-row input::-moz-placeholder,.q-grid.q-grid-theme-material .q-grid-view thead tr td.q-grid-filter-row input:-moz-placeholder,.q-grid.q-grid-theme-material .q-grid-view thead tr td.q-grid-filter-row input::-moz-placeholder,.q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-filter-row input:-moz-placeholder,.q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-filter-row input::-moz-placeholder{text-overflow:ellipsis}.q-grid.q-grid-theme-material .q-grid-view tfoot tr td.q-grid-filter-row input:-ms-input-placeholder,.q-grid.q-grid-theme-material .q-grid-view tfoot tr th.q-grid-filter-row input:-ms-input-placeholder,.q-grid.q-grid-theme-material .q-grid-view thead tr td.q-grid-filter-row input:-ms-input-placeholder,.q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-filter-row input:-ms-input-placeholder{text-overflow:ellipsis}.q-grid.q-grid-theme-material .q-grid-view tfoot tr td label,.q-grid.q-grid-theme-material .q-grid-view tfoot tr th label,.q-grid.q-grid-theme-material .q-grid-view thead tr td label,.q-grid.q-grid-theme-material .q-grid-view thead tr th label{display:inline}.q-grid.q-grid-theme-material .q-grid-view tfoot tr td:hover label,.q-grid.q-grid-theme-material .q-grid-view tfoot tr th:hover label,.q-grid.q-grid-theme-material .q-grid-view thead tr td:hover label,.q-grid.q-grid-theme-material .q-grid-view thead tr th:hover label{font-weight:700}.q-grid.q-grid-theme-material tbody{border-collapse:separate}.q-grid.q-grid-theme-material tbody>tr{height:48px}.q-grid.q-grid-theme-material tbody>tr.q-grid-highlighted{background-color:#eee}.q-grid.q-grid-theme-material tbody>tr:hover td.q-grid-text-area>span{overflow:hidden;position:relative;line-height:1.2em;max-height:3.6em;text-align:justify;margin-right:-1em;padding-right:1em}.q-grid.q-grid-theme-material tbody>tr:hover td.q-grid-text-area>span:before{content:\"...\";position:absolute;right:0;bottom:0}.q-grid.q-grid-theme-material tbody>tr:hover td.q-grid-text-area>span:after{content:\"\";position:absolute;right:0;width:1em;height:1em;margin-top:.2em;background-color:#eee}.q-grid.q-grid-theme-material tbody>tr.q-grid-selected{background-color:#f5f5f5}.q-grid.q-grid-theme-material tbody>tr td{color:rgba(0,0,0,.87);font-size:13px;border-top:1px solid rgba(0,0,0,.12);padding:0 16px}.q-grid.q-grid-theme-material tbody>tr td.q-grid-array ul{list-style:none;margin:0;padding:0;overflow:hidden}.q-grid.q-grid-theme-material tbody>tr td.q-grid-array ul li{display:inline-block;min-width:16px;padding:4px 8px;text-align:center;white-space:nowrap;vertical-align:middle;background-color:#e0e0e0;border-radius:16px;margin-right:4px}.q-grid.q-grid-theme-material tbody>tr td.q-grid-array ul li:last-child{margin-right:0}.q-grid.q-grid-theme-material tbody>tr td.q-grid-row-indicator md-icon{font-size:13px;width:13px;height:13px;min-width:13px;min-height:13px}.q-grid.q-grid-theme-material tbody>tr td.q-grid-select>div{width:20px;height:20px;display:inline-block}.q-grid.q-grid-theme-material tbody>tr td.q-grid-select>div div{border-radius:2px;width:20px;height:20px;box-sizing:border-box}.q-grid.q-grid-theme-material tbody>tr td.q-grid-select>div div md-icon{font-size:18px;font-weight:500;width:18px;height:18px;min-width:18px;min-height:18px;margin-top:1px}.q-grid.q-grid-theme-material tbody>tr td.q-grid-select>div div.q-grid-checked{background:rgba(255,64,129,.87)}.q-grid.q-grid-theme-material tbody>tr td.q-grid-select>div div.q-grid-checked md-icon{color:#fff}.q-grid.q-grid-theme-material tbody>tr td.q-grid-select>div div.q-grid-indeterminate,.q-grid.q-grid-theme-material tbody>tr td.q-grid-select>div div.q-grid-unchecked{border:2px solid rgba(0,0,0,.54);border-radius:2px;width:20px;height:20px;min-width:20px;min-height:20px;box-sizing:border-box}.q-grid.q-grid-theme-material tbody>tr td.q-grid-select>div div.q-grid-indeterminate md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-select>div div.q-grid-unchecked md-icon{color:rgba(0,0,0,.54)}.q-grid.q-grid-theme-material tbody>tr td.q-grid-select md-checkbox{margin:0}.q-grid.q-grid-theme-material tbody>tr td.q-grid-selected:not(.q-grid-focus),.q-grid.q-grid-theme-material tbody>tr td.q-grid-sorted{background-color:#f5f5f5}.q-grid.q-grid-theme-material tbody>tr td.q-grid-highlighted.q-grid-text-area>span{overflow:hidden;position:relative;line-height:1.2em;max-height:3.6em;text-align:justify;margin-right:-1em;padding-right:1em}.q-grid.q-grid-theme-material tbody>tr td.q-grid-highlighted.q-grid-text-area>span:before{content:\"...\";position:absolute;right:0;bottom:0}.q-grid.q-grid-theme-material tbody>tr td.q-grid-highlighted.q-grid-text-area>span:after{content:\"\";position:absolute;right:0;width:1em;height:1em;margin-top:.2em;background-color:#eee}.q-grid.q-grid-theme-material tbody>tr td.q-grid-text-area>span{display:block;white-space:normal;overflow:hidden;position:relative;line-height:1.2em;max-height:3.6em;text-align:justify;margin-right:-1em;padding-right:1em}.q-grid.q-grid-theme-material tbody>tr td.q-grid-text-area>span:before{content:\"...\";position:absolute;right:0;bottom:0}.q-grid.q-grid-theme-material tbody>tr td.q-grid-text-area>span:after{content:\"\";position:absolute;right:0;width:1em;height:1em;margin-top:.2em;background-color:#fff}.q-grid.q-grid-theme-material tbody>tr td.q-grid-email>div,.q-grid.q-grid-theme-material tbody>tr td.q-grid-file>div,.q-grid.q-grid-theme-material tbody>tr td.q-grid-reference>div,.q-grid.q-grid-theme-material tbody>tr td.q-grid-url>div{overflow:hidden;text-overflow:ellipsis;outline:none}.q-grid.q-grid-theme-material tbody>tr td.q-grid-email .q-grid-email-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-email .q-grid-file-download,.q-grid.q-grid-theme-material tbody>tr td.q-grid-email .q-grid-file-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-email .q-grid-reference-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-email .q-grid-url-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-file .q-grid-email-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-file .q-grid-file-download,.q-grid.q-grid-theme-material tbody>tr td.q-grid-file .q-grid-file-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-file .q-grid-reference-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-file .q-grid-url-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-reference .q-grid-email-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-reference .q-grid-file-download,.q-grid.q-grid-theme-material tbody>tr td.q-grid-reference .q-grid-file-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-reference .q-grid-reference-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-reference .q-grid-url-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-url .q-grid-email-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-url .q-grid-file-download,.q-grid.q-grid-theme-material tbody>tr td.q-grid-url .q-grid-file-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-url .q-grid-reference-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-url .q-grid-url-edit{position:absolute;top:calc(50% - 8px);font-size:12px;min-width:16px;width:16px;min-height:16px;height:16px;outline:none;border:none;background:transparent;padding:0;margin:0 2px}.q-grid.q-grid-theme-material tbody>tr td.q-grid-email .q-grid-email-edit md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-email .q-grid-file-download md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-email .q-grid-file-edit md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-email .q-grid-reference-edit md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-email .q-grid-url-edit md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-file .q-grid-email-edit md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-file .q-grid-file-download md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-file .q-grid-file-edit md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-file .q-grid-reference-edit md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-file .q-grid-url-edit md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-reference .q-grid-email-edit md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-reference .q-grid-file-download md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-reference .q-grid-file-edit md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-reference .q-grid-reference-edit md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-reference .q-grid-url-edit md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-url .q-grid-email-edit md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-url .q-grid-file-download md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-url .q-grid-file-edit md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-url .q-grid-reference-edit md-icon,.q-grid.q-grid-theme-material tbody>tr td.q-grid-url .q-grid-url-edit md-icon{color:rgba(0,0,0,.54);font-size:16px;height:16px;width:16px;min-height:16px;min-width:16px}.q-grid.q-grid-theme-material tbody>tr td.q-grid-email .q-grid-email-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-email .q-grid-file-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-email .q-grid-reference-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-email .q-grid-url-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-file .q-grid-email-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-file .q-grid-file-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-file .q-grid-reference-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-file .q-grid-url-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-reference .q-grid-email-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-reference .q-grid-file-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-reference .q-grid-reference-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-reference .q-grid-url-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-url .q-grid-email-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-url .q-grid-file-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-url .q-grid-reference-edit,.q-grid.q-grid-theme-material tbody>tr td.q-grid-url .q-grid-url-edit{right:0}.q-grid.q-grid-theme-material tbody>tr td.q-grid-email .q-grid-file-download,.q-grid.q-grid-theme-material tbody>tr td.q-grid-file .q-grid-file-download,.q-grid.q-grid-theme-material tbody>tr td.q-grid-reference .q-grid-file-download,.q-grid.q-grid-theme-material tbody>tr td.q-grid-url .q-grid-file-download{right:16px}.q-grid.q-grid-theme-material tbody>tr td.q-grid-file{padding:0 32px 0 16px}.q-grid.q-grid-theme-material tbody>tr td.q-grid-image{text-align:center}.q-grid.q-grid-theme-material tbody>tr td.q-grid-image img{max-height:24px;max-width:24px}.q-grid.q-grid-theme-material tbody>tr td.q-grid-row-details{background:#fff}.q-grid.q-grid-theme-material tbody>tr td.q-grid-time md-input-container{width:100%}.q-grid.q-grid-theme-material tfoot>tr{height:48px}.q-grid.q-grid-theme-material tfoot>tr td{color:#007fa3!important;background-color:rgba(0,0,0,.04)!important;border-top:1px solid rgba(0,0,0,.12)}.q-grid.q-grid-theme-material .q-grid-pager{font-family:Roboto,Helvetica Neue,sans-serif;height:24px;color:rgba(0,0,0,.54);float:right;padding:16px 0;font-size:12px}.q-grid.q-grid-theme-material .q-grid-pager>div{line-height:34px}.q-grid.q-grid-theme-material .q-grid-pager>div md-select{width:50px;max-width:50px;background:transparent;border:0;margin:0 0 0 12px;display:inline-flex;height:24px}.q-grid.q-grid-theme-material .q-grid-pager>div md-select md-select-value{min-width:50px;width:50px}.q-grid.q-grid-theme-material .q-grid-pager>div .q-grid-page{margin-left:32px;margin-right:14px}.q-grid.q-grid-theme-material .q-grid-pager>div button{background:transparent;border:none;font-size:20px;width:24px;height:24px;min-width:24px;min-height:24px;padding:0}.q-grid.q-grid-theme-material .q-grid-pager>div button.q-grid-prev-page{margin-left:18px;margin-right:0}.q-grid.q-grid-theme-material .q-grid-pager>div button.q-grid-next-page{margin-left:24px;margin-right:14px}.q-grid.q-grid-theme-material .q-grid-toolbar-right{margin:0 4px}.q-grid.q-grid-theme-material .q-grid-toolbar-top{height:64px}.q-grid.q-grid-theme-material .q-grid-sort-bar{height:100%;padding:0 10px}.q-grid.q-grid-theme-material .q-grid-sort-bar label{font-weight:700}.q-grid.q-grid-theme-material .q-grid-sort-bar ul{list-style-type:none;margin:0;display:inline-block;padding:0}.q-grid.q-grid-theme-material .q-grid-sort-bar ul li{display:inline-block}.q-grid.q-grid-theme-material .q-grid-sort-bar button{background:transparent;border:none;margin-right:12px}.q-grid.q-grid-theme-material .q-grid-sort-bar select{background:transparent;border:none;width:90px}.q-grid.q-grid-theme-material .q-grid-sort-bar md-input-container{margin:0}.q-grid.q-grid-theme-material .q-grid-group-bar{height:100%;padding:0 10px}.q-grid.q-grid-theme-material .q-grid-group-bar label{font-weight:700}.q-grid.q-grid-theme-material .q-grid-group-bar ul{list-style-type:none;margin:0;display:inline-block;padding:0}.q-grid.q-grid-theme-material .q-grid-group-bar ul li{display:inline-block}.q-grid.q-grid-theme-material .q-grid-group-bar button{background:transparent;border:none;margin-right:12px}.q-grid.q-grid-theme-material .q-grid-group-bar select{background:transparent;border:none;width:90px}.q-grid.q-grid-theme-material .q-grid-group-bar md-input-container{margin:0}.q-grid.q-grid-theme-material .q-grid-pivot-bar{height:100%;padding:0 10px}.q-grid.q-grid-theme-material .q-grid-pivot-bar label{font-weight:700}.q-grid.q-grid-theme-material .q-grid-pivot-bar ul{list-style-type:none;margin:0;display:inline-block;padding:0}.q-grid.q-grid-theme-material .q-grid-pivot-bar ul li{display:inline-block}.q-grid.q-grid-theme-material .q-grid-pivot-bar button{background:transparent;border:none;margin-right:12px}.q-grid.q-grid-theme-material .q-grid-pivot-bar select{background:transparent;border:none;width:90px}.q-grid.q-grid-theme-material .q-grid-pivot-bar md-input-container{margin:0}.q-grid.q-grid-theme-material .q-grid-selection-bar{margin-top:20px;height:100%;padding:0 10px}.q-grid.q-grid-theme-material .q-grid-selection-bar label{font-weight:700}.q-grid.q-grid-theme-material .q-grid-selection-bar ul{list-style-type:none;margin:0;display:inline-block;padding:0}.q-grid.q-grid-theme-material .q-grid-selection-bar ul li{display:inline-block}.q-grid.q-grid-theme-material .q-grid-selection-bar button{background:transparent;border:none;margin-right:12px}.q-grid.q-grid-theme-material .q-grid-selection-bar select{background:transparent;border:none;width:90px}.q-grid.q-grid-theme-material .q-grid-selection-bar md-input-container{margin:0}.q-grid.q-grid-theme-material .q-grid-selection-bar md-input-container .md-errors-spacer{height:0;min-height:0}.q-grid.q-grid-theme-material td.q-grid-group button,.q-grid.q-grid-theme-material td.q-grid-row-expand button{width:24px;height:24px;line-height:24px;min-height:24px;margin:-1px 0 0 -6px;padding:0}.q-grid.q-grid-theme-material td.q-grid-group button md-icon,.q-grid.q-grid-theme-material td.q-grid-row-expand button md-icon{opacity:.54}.q-grid.q-grid-theme-material td.q-grid-group .q-grid-group-label,.q-grid.q-grid-theme-material td.q-grid-row-expand .q-grid-group-label{margin-left:-6px;vertical-align:middle}.q-grid.q-grid-theme-material td.q-grid-group .q-grid-group-count,.q-grid.q-grid-theme-material td.q-grid-row-expand .q-grid-group-count{vertical-align:middle;color:rgba(0,0,0,.54)}.q-grid.q-grid-theme-material .q-grid-arrow-right{transform:rotate(90deg)}.q-grid.q-grid-theme-material .q-grid-view thead tr:last-child th.q-grid-pivot{border-bottom:1px solid rgba(0,0,0,.12)}.q-grid.q-grid-theme-material .q-grid-view thead th.q-grid-pivot{border-top:1px solid rgba(0,0,0,.12);border-left:1px solid rgba(0,0,0,.12);padding:0}.q-grid.q-grid-theme-material .q-grid-view thead th.q-grid-pivot:nth-last-child(2){border-right:1px solid rgba(0,0,0,.12)}.q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-drag) th:hover .q-grid-sort{visibility:visible}.q-grid.q-grid-theme-material .q-grid-sort{position:absolute;display:inline;cursor:pointer;visibility:hidden;font-size:12px;width:16px;outline:none;border:none;background:transparent;padding:0;left:0;margin-top:-1px}.q-grid.q-grid-theme-material .q-grid-sort.q-grid-active{visibility:visible}.q-grid.q-grid-theme-material .q-grid-sort.q-grid-active+label,.q-grid.q-grid-theme-material .q-grid-sort.q-grid-active md-icon{color:rgba(0,0,0,.87)}.q-grid.q-grid-theme-material .q-grid-sort md-icon{color:rgba(0,0,0,.54);font-size:16px;height:16px;width:16px;min-height:16px;min-width:16px}.q-grid.q-grid-theme-material tr>td md-checkbox .md-label,.q-grid.q-grid-theme-material tr>tf md-checkbox .md-label,.q-grid.q-grid-theme-material tr>th md-checkbox .md-label{display:none}.q-grid.q-grid-theme-material tr>td.q-grid-row-indicator,.q-grid.q-grid-theme-material tr>tf.q-grid-row-indicator,.q-grid.q-grid-theme-material tr>th.q-grid-row-indicator{padding:0!important}.q-grid.q-grid-theme-material td.q-grid-edit{overflow:visible!important}.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor{position:absolute;width:160px;height:40px;border-radius:4px;background-color:#fcfcfc;color:rgba(0,0,0,.87);padding:24px;left:4px;top:0;box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12);-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;z-index:1;box-sizing:content-box}.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor md-input-container{padding:0;margin:0}.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-text-area{height:160px;width:300px}.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-text-area textarea{height:150px!important}.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-date{width:200px!important;height:110px!important}.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-date .md-datepicker-button{margin-left:0;padding:0;width:24px;height:24px}.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-date .md-datepicker-triangle-button{margin-right:0;padding:0;width:24px;height:24px}.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor h2{margin-top:0}.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-array{min-height:120px;width:400px;height:inherit;padding-bottom:0}.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-array .q-grid-array-view{max-height:400px;overflow-y:auto}.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-email,.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-url{height:auto;width:270px;padding-bottom:0}.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-email .q-grid-email-fields,.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-email .q-grid-url-fields,.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-url .q-grid-email-fields,.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-url .q-grid-url-fields{padding-top:8px}.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file{height:auto;width:270px;padding-bottom:0}.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file h2{text-align:left}.q-grid.q-grid-theme-material td.q-grid-edit.q-grid-dropdown md-select{margin:5px 0;max-height:30px}.q-grid.q-grid-theme-material td.q-grid-edit.q-grid-autocomplete md-autocomplete{min-width:30px;background-color:transparent}.q-grid.q-grid-theme-material td.q-grid-edit.q-grid-autocomplete md-autocomplete-wrap{box-shadow:none}.q-grid.q-grid-theme-material td.q-grid-edit.q-grid-autocomplete input{border-color:#3f51b5;border-width:0 0 2px;border-radius:0;border-style:solid;line-height:26px;padding:2px 2px 1px;height:30px}.q-grid.q-grid-theme-material td.q-grid-edit md-checkbox{margin:0;width:20px;height:20px;display:inline-block}.q-grid.q-grid-theme-material .q-grid-editor.q-grid-reference{height:350px;width:500px}.q-grid.q-grid-theme-material .q-grid-file-upload-area{position:relative;border:1px dashed rgba(0,0,0,.12);text-align:center;height:120px}.q-grid.q-grid-theme-material .q-grid-file-upload-area .q-grid-file-upload-message{position:relative;top:40%}.q-grid.q-grid-theme-material .q-grid-file-upload-area .q-grid-file-upload-message span{overflow:hidden;text-overflow:ellipsis}.q-grid.q-grid-theme-material .q-grid-file-upload-area .q-grid-file-upload-message md-icon{margin:0 5px}.q-grid.q-grid-theme-material .q-grid-file-upload-area.q-grid-file-has-preview .q-grid-file-upload-message{visibility:hidden}.q-grid.q-grid-theme-material .q-grid-file-upload-area .q-grid-file-upload-filename{padding:10px;font-weight:700;color:rgba(0,0,0,.54)}.q-grid.q-grid-theme-material .q-grid-file-upload-area input{opacity:0;position:absolute;height:100%;width:100%;left:0;top:0;z-index:2}.q-grid.q-grid-theme-material .q-grid-file-upload-area .q-grid-file-preview{opacity:1;position:absolute;left:0;top:0;height:100%;width:100%;vertical-align:middle;text-align:center}.q-grid.q-grid-theme-material .q-grid-file-upload-area .q-grid-file-preview img{position:relative;max-height:100%;max-width:100%;z-index:3}.q-grid.q-grid-theme-material .q-grid-file-upload-area:hover{background-color:#f5f5f5}.q-grid.q-grid-theme-material .q-grid-file-upload-area:hover .q-grid-file-preview{opacity:0;transition:opacity .2s ease-in-out}.q-grid.q-grid-theme-material .q-grid-file-upload-area:hover .q-grid-file-preview img{z-index:1}.q-grid.q-grid-theme-material .q-grid-file-upload-area:hover .q-grid-file-upload-message{visibility:visible}.q-grid.q-grid-theme-material .q-grid-actions .md-button{margin:8px 0 8px 8px;float:right}.q-grid.q-grid-theme-material .q-grid-visibility ul{list-style-type:none}.q-grid.q-grid-theme-material .q-grid-toolbar .q-grid-column-chooser .q-grid-column-chooser-filter{margin-top:18px}.q-grid.q-grid-theme-material .q-grid-column-chooser{width:320px}.q-grid.q-grid-theme-material .q-grid-column-chooser ul{list-style-type:none;padding:0}.q-grid.q-grid-theme-material .q-grid-column-chooser md-checkbox{margin:0 0 10px}.q-grid.q-grid-theme-material .q-grid-column-chooser .q-grid-column-chooser-filter{margin:0 4px}.q-grid.q-grid-theme-material .q-grid-column-chooser .q-grid-column-chooser-filter .md-errors-spacer{display:none}.q-grid.q-grid-theme-material .q-grid-column-chooser .q-grid-column-chooser-list{margin:0;overflow-y:auto;height:340px}.q-grid.q-grid-theme-material .q-grid-column-chooser .q-grid-column-chooser-list md-input-container{margin:0}.q-grid.q-grid-theme-material .q-grid-column-chooser .q-grid-column-chooser-actions{padding:7px 0}.q-grid.q-grid-theme-material .q-grid-progress{position:relative}.q-grid.q-grid-theme-material .q-grid-progress md-progress-linear{position:absolute}.q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-drag) tbody td.q-grid-highlighted,.q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-drag) tbody tr.q-grid-highlighted{background-color:#eee}.q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-drag) tbody td.q-grid-focus{outline:2px solid rgba(63,81,181,.25);outline-offset:-2px}.q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-drag) tbody td.q-grid-edit{outline:2px solid rgba(63,81,181,.5)!important;outline-offset:-2px}.q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-active) tbody td{border-top-color:rgba(0,0,0,.06)}.q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-active) tbody td.q-grid-focus{outline-color:rgba(63,81,181,.05)}.q-grid.q-grid-theme-material .q-grid-highlight-part{background-color:#ff0;color:#000}.q-grid.q-grid-theme-material .q-grid-popup-panel{height:100%}.q-grid.q-grid-theme-material .q-grid-popup-panel md-card{margin:0}.q-grid.q-grid-theme-material .q-grid-popup-panel md-card md-card-content{overflow:hidden}.q-grid.q-grid-theme-material .q-grid-popup-panel md-card md-card-header{width:100%;padding:0;background-color:#fff}.q-grid.q-grid-theme-material .q-grid-popup-panel md-card md-card-header md-card-title{padding:0}.q-grid.q-grid-theme-material .q-grid-popup-panel md-card md-card-header md-card-title md-card-title-text{margin-left:16px}.q-grid.q-grid-theme-material .q-grid-popup-panel md-card md-card-header md-card-title md-card-title-text .md-subhead{line-height:30px;vertical-align:middle}.q-grid.q-grid-theme-material .q-grid-popup-panel md-card md-card-header md-card-title md-card-title-actions{margin-right:16px}.q-grid.q-grid-theme-material .q-grid-popup-panel md-card md-card-header .md-icon-button{padding:0;margin:0;max-height:30px;min-height:20px}.q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-drag) th:hover .q-grid-column-filter{visibility:visible}.q-grid.q-grid-theme-material .q-grid-column-filter{visibility:hidden;position:absolute;right:0;top:calc(50% - 8px)}.q-grid.q-grid-theme-material .q-grid-column-filter.q-grid-active{visibility:visible}.q-grid.q-grid-theme-material .q-grid-column-filter.q-grid-active+label,.q-grid.q-grid-theme-material .q-grid-column-filter.q-grid-active md-icon{color:rgba(0,0,0,.87)}.q-grid.q-grid-theme-material .q-grid-column-filter button{font-size:12px;width:16px;min-width:16px;min-height:16px;height:16px;outline:none;border:none;background:transparent;padding:0;left:0;margin:0 2px}.q-grid.q-grid-theme-material .q-grid-column-filter button md-icon{color:rgba(0,0,0,.54);font-size:16px;height:16px;width:16px;min-height:16px;min-width:16px}.q-grid.q-grid-theme-material .q-grid-column-filter-panel{width:320px}.q-grid.q-grid-theme-material .q-grid-column-filter-panel ul{list-style-type:none;padding:0}.q-grid.q-grid-theme-material .q-grid-column-filter-panel md-input-container{margin:0;width:100%}.q-grid.q-grid-theme-material .q-grid-column-filter-panel md-checkbox{margin:0 0 10px}.q-grid.q-grid-theme-material .q-grid-column-filter-panel .q-grid-column-filter-filter{margin:0 4px}.q-grid.q-grid-theme-material .q-grid-column-filter-panel .q-grid-column-filter-filter .md-errors-spacer{display:none}.q-grid.q-grid-theme-material .q-grid-column-filter-panel .q-grid-column-filter-list{overflow-y:auto;height:376px}.q-grid.q-grid-theme-material .q-grid-column-filter-panel .q-grid-column-filter-list ul{margin:0}.q-grid.q-grid-theme-material .q-grid-column-filter-panel .q-grid-column-filter-actions{padding:7px 0}.q-grid.q-grid-theme-material .q-grid-edit-form-panel{width:550px;height:450px}.q-grid.q-grid-theme-material .q-grid-edit-form-panel .q-grid-edit-form-panel-body{overflow-y:auto;overflow-x:hidden;padding:10px 20px 0 0}.q-grid.q-grid-theme-material .q-grid-edit-form-panel .q-grid-edit-form-reference{height:300px;margin-bottom:40px}.q-grid.q-grid-theme-material .q-grid-edit-form-panel .q-grid-edit-form-file{margin-bottom:40px}.q-grid.q-grid-theme-material .q-grid-edit-form-panel .q-grid-edit-form-array,.q-grid.q-grid-theme-material .q-grid-edit-form-panel .q-grid-edit-form-bool{margin-bottom:20px}.q-grid.q-grid-theme-material .q-grid-edit-form-panel .q-grid-edit-form-panel-actions{margin-bottom:-20px}.q-grid.q-grid-theme-material .q-grid-edit-form-panel .q-grid-edit-form-panel-actions .md-button{margin:8px 0 8px 8px;float:right}.q-grid.q-grid-theme-material .q-grid-edit-form-panel md-input-container{margin:0;width:100%}.q-grid.q-grid-theme-material .q-grid-edit-form-panel .md-datepicker-input-container{width:100%}.q-grid.q-grid-theme-material .q-grid-edit-form-panel .md-datepicker-input-container .md-input{max-width:none}.q-grid.q-grid-theme-material .q-grid-edit-form-panel h4.md-title{margin-top:0}.q-grid.q-grid-theme-material .q-grid-edit-form-popup h2{margin:0}.q-grid.q-grid-theme-material .q-grid-edit-form-popup md-icon{color:rgba(0,0,0,.54);font-size:16px;height:16px;width:16px;min-height:16px;min-width:16px}.q-grid.q-grid-theme-material .q-grid-export{padding:10px 0}.q-grid.q-grid-theme-material md-menu-item .md-button{text-align:left;display:inline-block;border-radius:0;margin:auto 0;font-size:15px;text-transform:none;font-weight:400;height:100%;padding-left:16px;padding-right:16px;width:100%}.q-grid.q-grid-theme-material .q-grid-title h3{margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor .mat-form-field{padding:0;margin:0;width:100%}.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor .mat-form-field .mat-input-infix{border-top:0}.q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-array .mat-input-underline{display:none}.q-grid.q-grid-theme-material .q-grid-actions .mat-button{margin:8px 0 8px 8px;float:right}.q-grid.q-grid-theme-material .q-grid-pager>div{height:100%;line-height:24px;margin-top:-3px}.q-grid.q-grid-theme-material .q-grid-pager>div label{vertical-align:sub}.q-grid.q-grid-theme-material .q-grid-pager>div md-select{padding:0}.q-grid.q-grid-theme-material .q-grid-pager>div md-select .mat-select-trigger{min-width:50px;width:50px}.q-grid.q-grid-theme-material .q-grid-pager>div md-select .mat-select-trigger .mat-select-value{font-size:12px}.q-grid.q-grid-theme-material .q-grid-pager>div button{display:inline-flex;vertical-align:middle}.q-grid.q-grid-theme-material .q-grid-pager>div button .mat-button-wrapper{line-height:24px}.q-grid.q-grid-theme-material .q-grid-progress md-progress-bar{position:absolute}.q-grid.q-grid-theme-material .q-grid-popup-panel md-card-header .mat-card-header-text{width:100%;margin:0}.q-grid.q-grid-theme-material .q-grid-popup-panel md-card-header h1{margin-bottom:0}.q-grid.q-grid-theme-material .q-grid-popup-panel md-card-header button{margin-top:5px;margin-right:-10px}.q-grid.q-grid-theme-material .q-grid-popup-panel md-card-actions{margin-bottom:0;margin-top:0;padding-bottom:8px}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-view thead tr{height:24px;background-color:#eee;border-spacing:0;border-collapse:collapse}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-view thead tr th{border-left:1px solid #d2d2d2}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-view thead tr th label{color:#000;font-weight:400}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-highlighted{background-color:#9fd5b7}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-sorted{background-color:#d3f0e0}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-view thead tr th .q-grid-divider{display:none}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-view thead tr th.focused-row-header{background-color:#d2d2d2;border-bottom:1px solid #227447}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-view thead tr th.focused-row-header label{color:#227447}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody{border-collapse:collapse;border-spacing:0}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr:first-child td.q-grid-focus:first-child{border-left-width:1px;border-top-width:1px}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td{color:#000;border:1px solid #ccc;line-height:21px;padding:0 4px;background-color:#fff;vertical-align:top;overflow:hidden;outline-width:0;border-collapse:collapse;border-spacing:0}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td:not(.q-grid-row-number){cursor:cell}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.q-grid-array ul{display:inline-block;vertical-align:middle}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.q-grid-array ul li{display:block;min-width:0;text-align:left;padding:0;vertical-align:middle;background-color:transparent;border-radius:0;margin-right:0}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.q-grid-array ul li:after{content:\",\";white-space:pre}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.q-grid-array ul li:last-child:after{content:\"\"}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.q-grid-focus{background-color:#fff!important;border:2px solid #227447}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.q-grid-focus.q-grid-edit input{border:none}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.q-grid-selected{background-color:#fff!important}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.q-grid-row-number{background-color:#eee}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.q-grid-sorted{background-color:#c6c6c6;border-left:2px solid #227447;border-right:2px solid #227447}.q-grid-excel .q-grid.q-grid-theme-material .q-grid-table tbody tr td.focused-row-header{background-color:#d2d2d2;border-right:2px solid #227447}.q-grid-embed{margin:16px 0}.q-grid-embed .q-grid-progress{bottom:10px}.q-grid-embed .q-grid.q-grid-theme-material .q-grid-view tr{height:32px}.q-grid-embed .q-grid.q-grid-theme-material .q-grid-view thead tr th{color:rgba(0,127,163,.77);background-color:rgba(0,0,0,.04)}.q-grid-embed .q-grid.q-grid-theme-material .q-grid-view thead tr th .q-grid-sort.q-grid-active+label{color:#007fa3}.q-grid-embed .q-grid.q-grid-theme-material .q-grid-view .q-grid-edit.q-grid-row-options button{width:24px;height:24px;line-height:24px}", ""]);

// exports


/***/ }),
/* 363 */
/***/ (function(module, exports) {

module.exports = "<q-grid-theme></q-grid-theme>\r\n<q-grid-box class=\"q-grid-box layout-column\" [ngClass]=\"{'q-grid-active': isActive}\">\r\n\t<q-grid-core-toolbar position=\"top\"\r\n\t\t\t\t\t\t\t\tclass=\"q-grid-toolbar q-grid-toolbar-top flex-auto\"\r\n\t\t\t\t\t\t\t\t*ngIf=\"visibility.toolbar.top\">\r\n\t</q-grid-core-toolbar>\r\n\t<div class=\"flex-100 layout-row\"\r\n\t\t  [ngClass]=\"{\r\n\t\t  \t'q-grid-with-left-pin': visibility.pin.left,\r\n\t\t  \t'q-grid-with-right-pin': visibility.pin.right\r\n\t\t  }\">\r\n\t\t<q-grid-core-toolbar position=\"left\"\r\n\t\t\t\t\t\t\t\t\tclass=\"q-grid-toolbar q-grid-toolbar-left flex-auto\"\r\n\t\t\t\t\t\t\t\t\t*ngIf=\"visibility.toolbar.left\">\r\n\t\t</q-grid-core-toolbar>\r\n\t\t<q-grid-core-view class=\"q-grid-view layout-row flex\"\r\n\t\t\t\t\t\t\t\tq-grid-markup=\"view\">\r\n\t\t</q-grid-core-view>\r\n\t\t<q-grid-core-toolbar position=\"right\"\r\n\t\t\t\t\t\t\t\t\tclass=\"q-grid-toolbar q-grid-toolbar-right flex-auto\"\r\n\t\t\t\t\t\t\t\t\t*ngIf=\"visibility.toolbar.right\">\r\n\t\t</q-grid-core-toolbar>\r\n\t</div>\r\n\t<q-grid-core-toolbar position=\"bottom\"\r\n\t\t\t\t\t\t\t\tclass=\"q-grid-toolbar q-grid-toolbar-bottom flex-auto\"\r\n\t\t\t\t\t\t\t\t*ngIf=\"visibility.toolbar.bottom\">\r\n\t</q-grid-core-toolbar>\r\n</q-grid-box>\r\n"

/***/ }),
/* 364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = build;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_middleware__ = __webpack_require__(166);


function build(model, valueFactory) {
	return function run(source, changes, pipe) {
		var pipes = pipe || model.data().pipe;
		var middleware = new __WEBPACK_IMPORTED_MODULE_0__services_middleware__["a" /* Middleware */](pipes);
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
/* 365 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dataPipe;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_factory__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_list__ = __webpack_require__(112);



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
	var getColumns = Object(__WEBPACK_IMPORTED_MODULE_1__column_list__["b" /* generateFactory */])(model);
	var createColumn = Object(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["columnFactory"])(model);
	var result = getColumns();
	var dataColumns = result.columns.map((function (columnBody) {
		return createColumn(columnBody.type || 'text', columnBody).model;
	}));

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
/* 366 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = generateFactory;
/* unused harmony export generate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_type__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_column_factory__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__infrastructure__ = __webpack_require__(3);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }







function merge(left, right) {
	var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	var canAssign = void 0;
	if (force) {
		canAssign = function canAssign(source, target) {
			return !Object(__WEBPACK_IMPORTED_MODULE_2__utility__["isUndefined"])(target) && target !== null ? target : source;
		};
	} else {
		canAssign = function canAssign(source, target) {
			return !Object(__WEBPACK_IMPORTED_MODULE_2__utility__["isUndefined"])(target) && target !== null && source === null ? target : source;
		};
	}

	var doMerge = Object(__WEBPACK_IMPORTED_MODULE_0__services__["merge"])({
		equals: function equals(l, r) {
			return l.key === r.key;
		},
		update: function update(l, r) {
			return Object(__WEBPACK_IMPORTED_MODULE_2__utility__["assignWith"])(l, r, canAssign);
		},
		insert: function insert(r, left) {
			return left.push(r);
		},
		remove: __WEBPACK_IMPORTED_MODULE_2__utility__["noop"]
	});

	return doMerge(left, right);
}

function hasChanges(statistics) {
	return statistics.some((function (st) {
		return st.inserted || st.update;
	}));
}

function generateFactory(model) {
	var data = model.data;
	var createColumn = Object(__WEBPACK_IMPORTED_MODULE_3__column_column_factory__["columnFactory"])(model);
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
	var context = Object(__WEBPACK_IMPORTED_MODULE_2__utility__["assignWith"])({
		deep: true,
		rows: [],
		columnFactory: function columnFactory() {
			return new __WEBPACK_IMPORTED_MODULE_1__column_type__["w" /* TextColumnModel */]();
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
	return props.reduce((function (columns, prop) {
		var value = graph[prop];
		var propPath = path ? path + '.' + prop : prop;
		var type = Object(__WEBPACK_IMPORTED_MODULE_0__services__["getType"])(value);
		switch (type) {
			case 'array':
				{
					var column = columnFactory(type).model;
					column.key = propPath;
					column.title = title(propPath, graph, column.length);
					column.path = propPath;
					column.value = Object(__WEBPACK_IMPORTED_MODULE_0__services__["compile"])(propPath);
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
					_column.value = Object(__WEBPACK_IMPORTED_MODULE_0__services__["compile"])(propPath);
					_column.source = 'generation';
					columns.push(_column);
					break;
				}
		}

		return columns;
	}), []);
}

/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Aggregation; }));
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Aggregation = (function () {
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
})();

/***/ }),
/* 368 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = parseFactory;
/* harmony export (immutable) */ __webpack_exports__["a"] = getType;
/* harmony export (immutable) */ __webpack_exports__["b"] = isPrimitive;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);


function parseFactory(type) {
	switch (type) {
		case 'text':
		case 'email':
		case 'url':
		case 'password':
			return parseText;
		case 'number':
		case 'currency':
			return parseNumber;
		case 'time':
		case 'date':
			return parseDate;
		case 'bool':
			return parseBool;
		case 'array':
			return parseArray;
		default:
			return __WEBPACK_IMPORTED_MODULE_0__utility__["identity"];
	}
}

function getType(value) {
	if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isArray"])(value)) {
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

	if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isEmail"])(value)) {
		return 'email';
	}

	if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isString"])(value)) {
		return 'text';
	}

	if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isObject"])(value)) {
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
		case 'url':
			return true;
		default:
			return false;
	}
}

function parseBool(value) {
	return Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isBoolean"])(value) ? value : value === 'true' ? true : value === 'false' ? false : null;
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

function parseArray(value) {
	if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isArray"])(value)) {
		return value;
	}

	return null;
}

/***/ }),
/* 369 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = merge;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);


function merge(settings) {
	var context = Object(__WEBPACK_IMPORTED_MODULE_0__utility__["assignWith"])({
		equals: function equals(l, r) {
			return l === r;
		},
		update: function update(l, r /*left, i*/) {
			Object(__WEBPACK_IMPORTED_MODULE_0__utility__["assignWith"])(l, r);
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
/* 370 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = jobLine;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);



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
		if (!Object(__WEBPACK_IMPORTED_MODULE_1__utility__["isFunction"])(job)) {
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
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ColumnListModel; }));
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColumnListModel = function ColumnListModel() {
	_classCallCheck(this, ColumnListModel);

	this.generation = null; // deep | shallow
	this.index = [];
	this.columns = [];
	this.reference = {};
};

/***/ }),
/* 372 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sortIndexFactory;
function sortIndexFactory(model) {
	return function (columns, scores) {
		var columnListState = model.columnList();
		scores = Object.assign({
			list: function list(column) {
				return column.class === 'data' ? 0.1 : 0.3;
			},
			index: function index() {
				return 0.2;
			},
			view: function view(column) {
				return column.class !== 'data' ? 0.1 : 0.3;
			},
			template: function template() {
				return 0.4;
			}
		}, scores);

		var listIndex = columnListState.index;
		var templateIndex = columnListState.columns.map((function (c) {
			return c.key;
		}));
		var viewIndex = columns.map((function (c) {
			return c.key;
		}));

		var sort = sortFactory(scores)(listIndex, templateIndex, viewIndex);
		var left = sort(columns.filter((function (c) {
			return c.pin === 'left';
		})));
		var center = sort(columns.filter((function (c) {
			return !c.pin;
		})));
		var right = sort(columns.filter((function (c) {
			return c.pin === 'right';
		})));

		var index = left.concat(center).concat(right);
		return {
			index: index,
			hasChanges: !equals(listIndex, index)
		};
	};
}

function sortFactory(scores) {
	return function (listIndex, templateIndex, viewIndex) {
		var compare = compareFactory(scores, listIndex, templateIndex, viewIndex);
		return function (columns) {
			var columnIndex = Array.from(columns);
			columnIndex.sort(compare);

			return columnIndex.map((function (c) {
				return c.key;
			}));
		};
	};
}

function compareFactory(scores, listIndex, templateIndex, viewIndex) {
	var listFind = findFactory(listIndex);
	var templateFind = findFactory(templateIndex);
	var viewFind = findFactory(viewIndex);

	var weightCache = {};
	var getWeight = function getWeight(column) {
		var key = column.key;
		if (weightCache.hasOwnProperty(key)) {
			return weightCache[key];
		}

		var candidates = [listFind(key) + scores.list(column), column.index + scores.index(column), viewFind(key) + scores.view(column), templateFind(key) + scores.template(column)];

		var weights = candidates.filter((function (w) {
			return w >= 0;
		}));
		var weight = weights.length ? weights[0] : -1;
		weightCache[key] = weight;

		return weight;
	};

	return function (x, y) {
		var xi = getWeight(x);
		var yi = getWeight(y);

		return yi === -1 ? -1 : xi === -1 ? 1 : xi - yi;
	};
}

function findFactory(index) {
	var map = index.reduce((function (memo, key, i) {
		memo.set(key, i);
		return memo;
	}), new Map());

	return function (key) {
		return map.has(key) ? map.get(key) : -1;
	};
}

function equals(xs, ys) {
	var length = xs.length;
	if (length !== ys.length) {
		return false;
	}

	for (var i = 0; i < length; i++) {
		if (xs[i] !== ys[i]) {
			return false;
		}
	}
	return true;
}

/***/ }),
/* 373 */
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
/* 374 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = paginationPipe;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(60);


function paginationPipe(memo, context, next) {
	var model = context.model;
	if (model.scroll().mode === 'virtual') {
		next(memo);
		return;
	}

	if (memo.hasOwnProperty('rows')) {
		var _rows = memo.nodes.length ? Object(__WEBPACK_IMPORTED_MODULE_0__node__["b" /* flatView */])(memo.nodes) : memo.rows;
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
/* 375 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = nodeBuilder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node__ = __webpack_require__(80);



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
				var node = new __WEBPACK_IMPORTED_MODULE_1__node__["Node"](key, level);
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
				node.children = build(group.rows, (function (i) {
					return rows[i];
				}));
			};

			for (var _i = 0, _length = keys.length; _i < _length; _i++) {
				_loop(_i, _length);
			}
		}

		return nodes;
	};
}

/***/ }),
/* 376 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sortPipe;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_sort_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_column_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__(26);






function sortPipe(data, context, next) {
	var model = context.model;
	var by = model.sort().by;
	var result = data;

	if (by.length) {
		var columns = model.data().columns;
		var mappings = [];
		var directions = [];

		var _loop = function _loop(i, length) {
			var sortEntry = by[i];
			var sortKey = Object(__WEBPACK_IMPORTED_MODULE_2__sort_sort_service__["c" /* key */])(sortEntry);
			var sortDir = Object(__WEBPACK_IMPORTED_MODULE_2__sort_sort_service__["a" /* direction */])(sortEntry);
			var sortColumn = Object(__WEBPACK_IMPORTED_MODULE_3__column_column_service__["find"])(columns, sortKey);
			if (!sortColumn) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('sort.pipe', 'Column "' + sortKey + '" is not found');
			}

			var getValue = context.valueFactory(sortColumn);
			var parseValue = Object(__WEBPACK_IMPORTED_MODULE_4__services__["parseFactory"])(sortColumn.type);

			mappings.push((function (row) {
				return parseValue(getValue(row));
			}));
			directions.push(sortDir);
		};

		for (var i = 0, length = by.length; i < length; i++) {
			_loop(i, length);
		}

		result = Object(__WEBPACK_IMPORTED_MODULE_1__utility__["orderBy"])(data, mappings, directions);
	}

	next(result);
}

/***/ }),
/* 377 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = key;
/* harmony export (immutable) */ __webpack_exports__["a"] = index;
/* harmony export (immutable) */ __webpack_exports__["d"] = value;
/* harmony export (immutable) */ __webpack_exports__["c"] = map;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);


function key(pair) {
	var key = Object.keys(pair)[0];
	if (!key) {
		throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('pair', 'Key is not defined in "' + pair + '"');
	}

	return key;
}

function index(pairs, pairKey) {
	return pairs.map(key).findIndex((function (k) {
		return k === pairKey;
	}));
}

function value(pair) {
	var pairKey = key(pair);
	return pair[pairKey];
}

function map(pairs) {
	return pairs.reduce((function (memo, pair) {
		var pairKey = key(pair);
		memo[pairKey] = pair[pairKey];
		return memo;
	}), {});
}

/***/ }),
/* 378 */
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
/* 379 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = groupPipe;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node__ = __webpack_require__(60);



function groupPipe(memo, context, next) {
	var model = context.model;
	var dataState = model.data();
	var groupState = model.group();

	var build = Object(__WEBPACK_IMPORTED_MODULE_1__node__["c" /* nodeBuilder */])(Object(__WEBPACK_IMPORTED_MODULE_0__column_column_service__["map"])(dataState.columns), groupState.by, context.valueFactory);

	memo.nodes = build(memo.rows);
	next(memo);
}

/***/ }),
/* 380 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pivotPipe;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pivot_pivot_build__ = __webpack_require__(194);



function pivotPipe(memo, context, next) {
	var model = context.model;
	var dataState = model.data();
	var pivotState = model.pivot();
	var build = Object(__WEBPACK_IMPORTED_MODULE_1__pivot_pivot_build__["a" /* build */])(Object(__WEBPACK_IMPORTED_MODULE_0__column_column_service__["map"])(dataState.columns), pivotState.by, context.valueFactory);

	memo.pivot = build(memo.rows);
	next(memo);
}

/***/ }),
/* 381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = columnPipe;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_factory__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_column_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_list__ = __webpack_require__(112);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }






function columnPipe(memo, context, next) {
	var model = context.model;
	var pivot = memo.pivot;
	var nodes = memo.nodes;
	var heads = pivot.heads;
	var dataColumns = [];
	var addDataColumns = dataColumnsFactory(model);
	var rowspan = Math.max(1, heads.length);

	/*
  * We need to invoke addDataColumns earlier that others because it setups data.columns model property
  *
  */
	addDataColumns(dataColumns, { rowspan: rowspan, row: 0 });

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
	addSelectColumn(columns, { rowspan: rowspan, row: 0 });

	/*
  * Add group column with nodes
  *
  */
	addGroupColumn(columns, { rowspan: rowspan, row: 0 });

	/*
  * Add row expand column
  */
	addExpandColumn(columns, { rowspan: rowspan, row: 0 });

	/*
  *Add columns defined by user
  * that are visible
  *
  */
	columns.push.apply(columns, dataColumns);

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
		addPadColumn(columns, { rowspan: rowspan, row: 0 });
		memo.columns = [columns];
	}

	memo.columns = index(filter(model, sort(model, memo.columns)));
	next(memo);
}

function selectColumnFactory(model) {
	var dataColumns = model.data().columns;
	var selection = model.selection();

	var selectColumn = dataColumns.find((function (item) {
		return item.type === 'select';
	}));
	var indicatorColumn = dataColumns.find((function (item) {
		return item.type === 'row-indicator';
	}));

	if (!indicatorColumn && selection.unit === 'mix') {
		var createColumn = Object(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["columnFactory"])(model);
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
		var _createColumn = Object(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["columnFactory"])(model);
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
	var groupColumn = dataColumns.find((function (item) {
		return item.type === 'group';
	}));
	var groupState = model.group();
	if (!groupColumn && groupState.mode != 'subhead' && (nodes.length || groupState.by.length)) {
		var createColumn = Object(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["columnFactory"])(model);
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
	var expandColumn = dataColumns.find((function (item) {
		return item.type === 'row-expand';
	}));
	if (model.row().unit === 'details' && !expandColumn) {
		var createColumn = Object(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["columnFactory"])(model);
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
	var getColumns = Object(__WEBPACK_IMPORTED_MODULE_3__column_list__["b" /* generateFactory */])(model);
	var createColumn = Object(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["columnFactory"])(model);
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

		columns.push.apply(columns, _toConsumableArray(result.columns.map((function (columnBody) {
			var dataColumn = createColumn(columnBody.type || 'text', columnBody);
			dataColumn.rowspan = context.rowspan;
			return dataColumn;
		}))));

		return result.columns;
	};
}

function padColumnFactory(model) {
	var createColumn = Object(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["columnFactory"])(model);
	return function (columns, context) {
		var padColumn = createColumn('pad');
		padColumn.rowspan = context.rowspan;
		padColumn.model.key = '$pad-' + columns.length;
		columns.push(padColumn);
		return padColumn;
	};
}

function pivotColumnsFactory(model) {
	var createColumn = Object(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["columnFactory"])(model);
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
		for (var j = 0; j < headLength; j++) {
			var headColumn = head[j];
			var pivotColumn = createColumn('pivot');
			pivotColumn.colspan = headColumn.value;
			var pivotColumnModel = pivotColumn.model;
			pivotColumnModel.title = headColumn.key;
			pivotColumnModel.key = pivotColumnModel.key + ('[0][' + j + ']');

			pivotColumnModel.rowIndex = 0;
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
				_row[_j] = _pivotColumn;
			}

			/*
    * Add special column type
    * that fills remaining place (width = 100%)
    *
    */
			addPadColumn(_row, { rowspan: 1, row: 0 });
			rows.push(_row);
		}

		return rows;
	};
}

function index(columnRows) {
	var view = __WEBPACK_IMPORTED_MODULE_1__column_column_service__["expand"](columnRows);
	var height = view.length;
	for (var i = 0; i < height; i++) {
		var row = view[i];
		var width = row.length;
		for (var j = 0; j < width; j++) {
			var column = row[j];
			if (column.index < 0) {
				column.index = j;
			}
		}
	}

	return columnRows;
}

function filter(model, columnRows) {
	var rows = [];
	var height = columnRows.length;
	var groupBy = new Set(model.group().by);
	var pivotBy = new Set(model.pivot().by);

	for (var i = 0; i < height; i++) {
		var columnRow = columnRows[i];
		var width = columnRow.length;
		var row = [];
		for (var j = 0; j < width; j++) {
			var columnView = columnRow[j];
			var column = columnView.model;
			if (column.isVisible && !groupBy.has(column.key) && !pivotBy.has(column.key)) {
				row.push(columnView);
			}
		}

		if (row.length) {
			rows.push(row);
		}
	}

	return rows;
}

function sort(model, columnRows) {
	var columnRow = columnRows[0];
	if (columnRow) {
		var columnList = model.columnList;
		var buildIndex = Object(__WEBPACK_IMPORTED_MODULE_3__column_list__["c" /* sortIndexFactory */])(model);
		var columns = columnRow.map((function (column) {
			return column.model;
		}));
		var indexResult = buildIndex(columns);
		if (indexResult.hasChanges) {
			columnList({
				index: indexResult.index
			}, {
				source: 'column.pipe',
				behavior: 'core'
			});
		}

		var _index = 0;
		var indexMap = columnList().index.reduce((function (memo, key) {
			memo[key] = _index++;
			return memo;
		}), {});

		var row = Array.from(columnRow);
		row.sort((function (x, y) {
			return indexMap[x.model.key] - indexMap[y.model.key];
		}));
		var temp = Array.from(columnRows);
		temp[0] = row;
		return temp;
	}

	return columnRows;
}

/***/ }),
/* 382 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = viewPipe;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_scene__ = __webpack_require__(114);


function viewPipe(memo, context, next) {
	var model = context.model;
	var scene = new __WEBPACK_IMPORTED_MODULE_0__scene_scene__["a" /* Scene */](model);

	var rows = scene.rows(memo);
	var columnLine = scene.columnLine(memo.columns);
	var tag = {
		source: context.source || 'view.pipe',
		behavior: 'core'
	};

	model.view({
		rows: rows,
		columns: columnLine.map((function (c) {
			return c.model;
		})),
		nodes: memo.nodes,
		pivot: memo.pivot
	}, tag);

	model.scene({
		rows: rows,
		column: {
			rows: scene.columnRows(memo.columns),
			area: scene.columnArea(memo.columns),
			line: columnLine
		}
	}, tag);

	next(memo);
}

/***/ }),
/* 383 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return defaultPipeUnit; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(59);


var defaultPipeUnit = [__WEBPACK_IMPORTED_MODULE_0__pipe__["Pipe"].data, __WEBPACK_IMPORTED_MODULE_0__pipe__["Pipe"].filter, __WEBPACK_IMPORTED_MODULE_0__pipe__["Pipe"].sort, __WEBPACK_IMPORTED_MODULE_0__pipe__["Pipe"].memo, __WEBPACK_IMPORTED_MODULE_0__pipe__["Pipe"].group, __WEBPACK_IMPORTED_MODULE_0__pipe__["Pipe"].pivot, __WEBPACK_IMPORTED_MODULE_0__pipe__["Pipe"].column, __WEBPACK_IMPORTED_MODULE_0__pipe__["Pipe"].pagination, __WEBPACK_IMPORTED_MODULE_0__pipe__["Pipe"].view];

/***/ }),
/* 384 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return viewPipeUnit; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(59);


var viewPipeUnit = [__WEBPACK_IMPORTED_MODULE_0__pipe__["Pipe"].data, __WEBPACK_IMPORTED_MODULE_0__pipe__["Pipe"].memo, __WEBPACK_IMPORTED_MODULE_0__pipe__["Pipe"].column, __WEBPACK_IMPORTED_MODULE_0__pipe__["Pipe"].view];

/***/ }),
/* 385 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return columnPipeUnit; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene__ = __webpack_require__(197);



var columnPipeUnit = [function (memo, context, next) {
	var view = context.model.view();
	next({
		rows: view.rows,
		pivot: view.pivot,
		nodes: view.nodes
	});
}, __WEBPACK_IMPORTED_MODULE_0__pipe__["Pipe"].column, function (memo, context, next) {
	var model = context.model;
	var scene = new __WEBPACK_IMPORTED_MODULE_1__scene__["a" /* Scene */](model);
	var columnLine = scene.columnLine(memo.columns);
	var tag = {
		source: context.source || 'column.pipe.unit',
		behavior: 'core'
	};

	var columns = columnLine.map((function (c) {
		return c.model;
	}));
	model.view({ columns: columns }, tag);

	var column = {
		rows: scene.columnRows(memo.columns),
		area: scene.columnArea(memo.columns),
		line: columnLine
	};

	context.model.scene({ column: column }, tag);

	next(memo);
}];

/***/ }),
/* 386 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return SceneModel; }));
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SceneModel = function SceneModel() {
	_classCallCheck(this, SceneModel);

	this.status = 'stop'; // start | stop
	this.rows = [];
	this.column = {
		rows: [],
		line: [],
		area: {
			left: [],
			null: [],
			right: []
		}
	};
};

/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return rowPipeUnit; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_scene__ = __webpack_require__(114);


var rowPipeUnit = [function (memo, context, next) {
	var tag = {
		source: context.source || 'row.pipe.unit',
		behavior: 'core'
	};

	var model = context.model;
	var scene = new __WEBPACK_IMPORTED_MODULE_0__scene_scene__["a" /* Scene */](model);

	var rows = scene.rows(memo);
	model.view({ rows: rows }, tag);
	model.scene({ rows: rows }, tag);

	next(memo);
}];

/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return rowDetailsPipeUnit; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__row_details_row_details_service__ = __webpack_require__(115);


var rowDetailsPipeUnit = [function (memo, context, next) {
	var tag = {
		source: context.source || 'row.details.pipe.unit',
		behavior: 'core'
	};

	var model = context.model;
	var mode = model.row().mode;
	var rows = Object(__WEBPACK_IMPORTED_MODULE_0__row_details_row_details_service__["a" /* flatView */])(model, mode);
	model.view({ rows: rows }, tag);
	model.scene({ rows: rows }, tag);

	next(memo);
}];

/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return groupPipeUnit; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_node_service__ = __webpack_require__(193);


var groupPipeUnit = [function (memo, context, next) {
	var tag = {
		source: context.source || 'group.pipe.unit',
		behavior: 'core'
	};

	var model = context.model;
	var nodes = model.view().nodes;
	var rows = Object(__WEBPACK_IMPORTED_MODULE_0__node_node_service__["a" /* flatView */])(nodes);
	model.view({ rows: rows }, tag);
	model.scene({ rows: rows }, tag);

	next(memo);
}];

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var model_component_1 = __webpack_require__(154);
var root_service_1 = __webpack_require__(33);
var column_list_service_1 = __webpack_require__(198);
var ColumnListComponent = /** @class */ (function (_super) {
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
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var utility_1 = __webpack_require__(4);
var column_list_service_1 = __webpack_require__(198);
var columnService = __webpack_require__(18);
var column_factory_1 = __webpack_require__(41);
var component_1 = __webpack_require__(9);
var template_host_service_1 = __webpack_require__(104);
var ColumnComponent = /** @class */ (function () {
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
                .filter((function (key) { return !utility_1.isUndefined(_this[key]) && column.hasOwnProperty(key); }))
                .reduce((function (memo, key) {
                memo[key] = column[key];
                return memo;
            }), {});
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
    ], ColumnComponent.prototype, "path", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ColumnComponent.prototype, "class", void 0);
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
    ], ColumnComponent.prototype, "aggregation", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ColumnComponent.prototype, "aggregationOptions", void 0);
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
        tslib_1.__metadata("design:type", String)
    ], ColumnComponent.prototype, "format", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ColumnComponent.prototype, "symbol", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ColumnComponent.prototype, "code", void 0);
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
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var ng_component_1 = __webpack_require__(75);
var theme_service_1 = __webpack_require__(148);
var definition_1 = __webpack_require__(27);
var infrastructure_1 = __webpack_require__(3);
var root_service_1 = __webpack_require__(33);
var BoxComponent = /** @class */ (function (_super) {
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
        this.using(model.dragChanged.watch((function (e) {
            if (e.hasChanges('isActive')) {
                if (model.drag().isActive) {
                    _this.element.classList.add(definition_1.GRID_PREFIX + "-drag");
                }
                else {
                    _this.element.classList.remove(definition_1.GRID_PREFIX + "-drag");
                }
            }
        })));
    };
    BoxComponent.prototype.initTheme = function () {
        var _this = this;
        var element = this.element;
        element.classList.add(definition_1.GRID_PREFIX);
        this.using(this.theme.changed.watch((function (e) {
            if (e) {
                element.classList.remove(definition_1.GRID_PREFIX + "-theme-" + e.oldValue);
            }
            element.classList.add(definition_1.GRID_PREFIX + "-theme-" + _this.theme.name);
        })));
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
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(70);
var view_1 = __webpack_require__(201);
var toolbar_1 = __webpack_require__(222);
var body_1 = __webpack_require__(223);
var head_1 = __webpack_require__(224);
var foot_1 = __webpack_require__(225);
var row_1 = __webpack_require__(226);
var scroll_1 = __webpack_require__(119);
var markup_1 = __webpack_require__(227);
var template_1 = __webpack_require__(25);
var template_module_1 = __webpack_require__(74);
var common_1 = __webpack_require__(127);
var table_1 = __webpack_require__(232);
var CoreModule = /** @class */ (function () {
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
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var component_1 = __webpack_require__(9);
var view_core_service_1 = __webpack_require__(29);
var grid_1 = __webpack_require__(118);
var cell_1 = __webpack_require__(125);
var ViewCoreComponent = /** @class */ (function (_super) {
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
            .forEach((function (name) {
            return _this.using(model[name + 'Changed']
                .watch((function (e) {
                var changes = Object.keys(e.changes);
                if (e.tag.behavior !== 'core' && triggers[name].find((function (key) { return changes.indexOf(key) >= 0; }))) {
                    needInvalidate = false;
                    gridService.invalidate(name, e.changes);
                }
            })));
        }));
        if (needInvalidate) {
            gridService.invalidate('grid');
        }
    };
    ViewCoreComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.view.destroy();
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
    ViewCoreComponent.prototype.ngDoCheck = function () {
        this.view.style.invalidate();
    };
    ViewCoreComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-core-view',
            template: __webpack_require__(459),
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
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var infrastructure_1 = __webpack_require__(3);
var VScrollService = /** @class */ (function () {
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
/* 396 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["viewFactory"] = viewFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__body__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__head__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foot__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__group__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pivot__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__highlight__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sort__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filter__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selection__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pagination__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__style__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__column__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__scroll__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__row_details__ = __webpack_require__(203);


















function viewFactory(model, table, commandManager, gridService, vscroll, selectors) {
	return function (target) {
		target.style = new __WEBPACK_IMPORTED_MODULE_13__style__["b" /* StyleView */](model, table);
		target.head = new __WEBPACK_IMPORTED_MODULE_1__head__["b" /* HeadView */](model, table, selectors.th);
		target.body = new __WEBPACK_IMPORTED_MODULE_0__body__["b" /* BodyView */](model, table);
		target.foot = new __WEBPACK_IMPORTED_MODULE_2__foot__["b" /* FootView */](model, table);
		target.columns = new __WEBPACK_IMPORTED_MODULE_14__column__["a" /* ColumnView */](model, gridService);
		target.layout = new __WEBPACK_IMPORTED_MODULE_3__layout__["b" /* LayoutView */](model, table, gridService);
		target.selection = new __WEBPACK_IMPORTED_MODULE_11__selection__["c" /* SelectionView */](model, table, commandManager, gridService);
		target.group = new __WEBPACK_IMPORTED_MODULE_4__group__["b" /* GroupView */](model, table, commandManager, gridService);
		target.pivot = new __WEBPACK_IMPORTED_MODULE_5__pivot__["b" /* PivotView */](model);
		target.highlight = new __WEBPACK_IMPORTED_MODULE_7__highlight__["b" /* HighlightView */](model, table);
		target.sort = new __WEBPACK_IMPORTED_MODULE_8__sort__["b" /* SortView */](model);
		target.filter = new __WEBPACK_IMPORTED_MODULE_9__filter__["b" /* FilterView */](model);
		target.edit = new __WEBPACK_IMPORTED_MODULE_10__edit__["b" /* EditView */](model, table, commandManager);
		target.nav = new __WEBPACK_IMPORTED_MODULE_6__navigation__["b" /* NavigationView */](model, table, commandManager);
		target.pagination = new __WEBPACK_IMPORTED_MODULE_12__pagination__["b" /* PaginationView */](model);
		target.scroll = new __WEBPACK_IMPORTED_MODULE_15__scroll__["b" /* ScrollView */](model, table, vscroll, gridService);
		target.rowDetails = new __WEBPACK_IMPORTED_MODULE_16__row_details__["b" /* RowDetailsView */](model, table, commandManager, gridService);

		return function () {
			target.style.dispose();
			target.head.dispose();
			target.body.dispose();
			target.foot.dispose();
			target.columns.dispose();
			target.layout.dispose();
			target.selection.dispose();
			target.group.dispose();
			target.pivot.dispose();
			target.highlight.dispose();
			target.sort.dispose();
			target.filter.dispose();
			target.edit.dispose();
			target.nav.dispose();
			target.pagination.dispose();
			target.scroll.dispose();
			target.rowDetails.dispose();
		};
	};
}

/***/ }),
/* 397 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return BodyModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var BodyModel = function BodyModel() {
	_classCallCheck(this, BodyModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();
	this.cache = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Cache"]();
};

/***/ }),
/* 398 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return BodyView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_value__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_label__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scene_render__ = __webpack_require__(401);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var BodyView = (function (_View) {
	_inherits(BodyView, _View);

	function BodyView(model, table) {
		_classCallCheck(this, BodyView);

		var _this = _possibleConstructorReturn(this, (BodyView.__proto__ || Object.getPrototypeOf(BodyView)).call(this, model));

		_this.table = table;
		_this.rows = [];
		_this.render = new __WEBPACK_IMPORTED_MODULE_4__scene_render__["a" /* Renderer */](model);

		_this.using(model.sceneChanged.watch((function (e) {
			if (e.hasChanges('rows')) {
				_this.invalidate();
			}
		})));
		return _this;
	}

	_createClass(BodyView, [{
		key: 'invalidate',
		value: function invalidate() {
			__WEBPACK_IMPORTED_MODULE_3__infrastructure__["Log"].info('view.body', 'invalidate');

			var model = this.model;
			var table = this.table;
			var sceneState = model.scene();

			this.rows = sceneState.rows;

			table.view.removeLayer('blank');
			if (!this.rows.length) {
				var layerState = model.layer();
				if (layerState.resource.data.hasOwnProperty('blank')) {
					var layer = table.view.addLayer('blank');
					layer.resource('blank', layerState.resource);
				}
			}
		}
	}, {
		key: 'columns',
		value: function columns(row, pin) {
			return this.render.columns(row, pin);
		}
	}, {
		key: 'valueFactory',
		value: function valueFactory(column) {
			var _this2 = this;

			var getValueFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			var getValue = (getValueFactory || __WEBPACK_IMPORTED_MODULE_1__services_value__["getFactory"])(column);
			return function (row) {
				return _this2.render.getValue(row, column, getValue);
			};
		}
	}, {
		key: 'labelFactory',
		value: function labelFactory(column) {
			return this.valueFactory(column, __WEBPACK_IMPORTED_MODULE_2__services_label__["getFactory"]);
		}
	}, {
		key: 'value',
		value: function value(row, column, _value) {
			if (arguments.length === 3) {
				this.render.setValue(row, column, _value);
				return;
			}

			var getValue = this.valueFactory(column);
			return getValue(row);
		}
	}, {
		key: 'label',
		value: function label(row, column, value) {
			if (arguments.length === 3) {
				Object(__WEBPACK_IMPORTED_MODULE_2__services_label__["set"])(row, column, value);
				return;
			}

			var getLabel = this.labelFactory(column);
			return getLabel(row);
		}
	}]);

	return BodyView;
})(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);



/***/ }),
/* 399 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return View; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__disposable_view__ = __webpack_require__(105);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var View = (function (_DisposableView) {
	_inherits(View, _DisposableView);

	function View(model) {
		_classCallCheck(this, View);

		var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this));

		_this.model = model;
		return _this;
	}

	return View;
})(__WEBPACK_IMPORTED_MODULE_0__disposable_view__["DisposableView"]);

/***/ }),
/* 400 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ViewModel; }));
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewModel = function ViewModel() {
	_classCallCheck(this, ViewModel);

	this.rows = [];
	this.columns = [];
	this.nodes = [];
	this.pivot = { heads: [], rows: [] };
};

/***/ }),
/* 401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render__ = __webpack_require__(402);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__render__["a"]; }));


/***/ }),
/* 402 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Renderer; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__row_details__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_row__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_row__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_row__ = __webpack_require__(405);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var Renderer = (function () {
	function Renderer(model) {
		_classCallCheck(this, Renderer);

		this.model = model;

		this.strategies = new Map();
		this.strategies.set(__WEBPACK_IMPORTED_MODULE_1__row_details__["a" /* RowDetails */], new __WEBPACK_IMPORTED_MODULE_3__details_row__["a" /* DetailsRow */](model));
		this.strategies.set(__WEBPACK_IMPORTED_MODULE_0__node__["a" /* Node */], new __WEBPACK_IMPORTED_MODULE_4__node_row__["a" /* NodeRow */](model));
		this.defaultStrategy = new __WEBPACK_IMPORTED_MODULE_2__data_row__["a" /* DataRow */](model);
	}

	_createClass(Renderer, [{
		key: 'colspan',
		value: function colspan(row, column) {
			var strategy = this.resolve(row);
			return strategy.colspan(row, column);
		}
	}, {
		key: 'rowspan',
		value: function rowspan(row, column) {
			var strategy = this.resolve(row);
			return strategy.rowspan(row, column);
		}
	}, {
		key: 'columns',
		value: function columns(row, pin) {
			var strategy = this.resolve(row);
			return strategy.columns(row, pin);
		}
	}, {
		key: 'getValue',
		value: function getValue(row, column, select) {
			var strategy = this.resolve(row);
			return strategy.getValue(row, column, select);
		}
	}, {
		key: 'setValue',
		value: function setValue(row, column, value) {
			var strategy = this.resolve(row);
			return strategy.setValue(row, column, value);
		}
	}, {
		key: 'resolve',
		value: function resolve(row) {
			var type = row.constructor;
			return this.strategies.get(type) || this.defaultStrategy;
		}
	}]);

	return Renderer;
})();

/***/ }),
/* 403 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return RowDetailsView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__row_details_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__row_details__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipe_pipe_unit__ = __webpack_require__(42);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var RowDetailsView = (function (_View) {
	_inherits(RowDetailsView, _View);

	function RowDetailsView(model, table, commandManager, service) {
		_classCallCheck(this, RowDetailsView);

		var _this = _possibleConstructorReturn(this, (RowDetailsView.__proto__ || Object.getPrototypeOf(RowDetailsView)).call(this, model));

		_this.toggleStatus = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
			execute: function execute(row) {
				if (!row) {
					var cell = model.navigation().cell;
					row = cell.row;
				}

				var status = Object(__WEBPACK_IMPORTED_MODULE_2__row_details_service__["c" /* toggleStatus */])([row], model.row().status, model.row().mode);
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

		_this.using(model.rowChanged.watch((function (e) {
			if (e.hasChanges('status')) {
				service.invalidate('row.details.view', {}, __WEBPACK_IMPORTED_MODULE_4__pipe_pipe_unit__["PipeUnit"].rowDetails);
			}
		})));

		_this.using(model.sceneChanged.watch((function (e) {
			if (e.tag.source !== 'row.details.view' && e.hasChanges('rows')) {
				model.row({
					status: Object(__WEBPACK_IMPORTED_MODULE_2__row_details_service__["b" /* invalidateStatus */])(e.state.rows, model.row().status)
				});
			}
		})));

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
})(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return DetailsRow; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_row__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var DetailsRow = (function (_DataRow) {
	_inherits(DetailsRow, _DataRow);

	function DetailsRow(model) {
		_classCallCheck(this, DetailsRow);

		return _possibleConstructorReturn(this, (DetailsRow.__proto__ || Object.getPrototypeOf(DetailsRow)).call(this, model));
	}

	_createClass(DetailsRow, [{
		key: 'colspan',
		value: function colspan(rowDetails, column) {
			return Object(__WEBPACK_IMPORTED_MODULE_1__utility__["sumBy"])(this.columnList(column.model.pin), (function (c) {
				return c.colspan;
			}));
		}
	}, {
		key: 'columns',
		value: function columns(rowDetails, pin) {
			if (rowDetails.column.model.pin === pin) {
				return [rowDetails.column];
			}

			return this.columnList(pin);
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return null;
		}
	}]);

	return DetailsRow;
})(__WEBPACK_IMPORTED_MODULE_0__data_row__["a" /* DataRow */]);

/***/ }),
/* 405 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return NodeRow; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_row__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_factory__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_value__ = __webpack_require__(19);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var NodeRow = (function (_DataRow) {
	_inherits(NodeRow, _DataRow);

	function NodeRow(model) {
		_classCallCheck(this, NodeRow);

		var _this = _possibleConstructorReturn(this, (NodeRow.__proto__ || Object.getPrototypeOf(NodeRow)).call(this, model));

		var createColumn = Object(__WEBPACK_IMPORTED_MODULE_2__column_column_factory__["columnFactory"])(model);
		_this.reference = {
			group: createColumn('group')
		};
		return _this;
	}

	_createClass(NodeRow, [{
		key: 'colspan',
		value: function colspan(node, column) {
			if (node.type === 'group') {
				var groupColumn = this.findGroupColumn(column.model.pin);
				if (groupColumn) {
					var groupState = this.model.group();
					if (groupState.mode === 'subhead') {
						var groupSpan = Object(__WEBPACK_IMPORTED_MODULE_1__utility__["takeWhile"])(this.columnList(column.model.pin), (function (c) {
							return !c.model.aggregation;
						}));
						if (column.model.type === 'group') {
							return Object(__WEBPACK_IMPORTED_MODULE_1__utility__["sumBy"])(groupSpan, (function (c) {
								return c.colspan;
							}));
						}
					}
				}
			}

			return _get(NodeRow.prototype.__proto__ || Object.getPrototypeOf(NodeRow.prototype), 'colspan', this).call(this, node, column);
		}
	}, {
		key: 'columns',
		value: function columns(node, pin) {
			if (node.type === 'group') {
				var groupColumn = this.findGroupColumn(pin);
				if (groupColumn) {
					var groupState = this.model.group();
					if (groupState.mode === 'subhead') {
						var nextColumns = Object(__WEBPACK_IMPORTED_MODULE_1__utility__["dropWhile"])(this.columnList(pin), (function (c) {
							return !c.model.aggregation;
						}));
						return [groupColumn].concat(nextColumns);
					}
				}
			}

			return _get(NodeRow.prototype.__proto__ || Object.getPrototypeOf(NodeRow.prototype), 'columns', this).call(this, node, pin);
		}
	}, {
		key: 'getValue',
		value: function getValue(node, column, select) {
			var rows = this.model.data().rows;
			switch (node.type) {
				case 'group':
					{
						var aggregation = column.aggregation;
						if (aggregation) {
							if (!__WEBPACK_IMPORTED_MODULE_3__services__["Aggregation"].hasOwnProperty(aggregation)) {
								throw new __WEBPACK_IMPORTED_MODULE_4__infrastructure__["AppError"]('node.visit', 'Aggregation ' + aggregation + ' is not registered');
							}

							var groupRows = node.rows.map((function (i) {
								return rows[i];
							}));
							return __WEBPACK_IMPORTED_MODULE_3__services__["Aggregation"][aggregation](groupRows, select, column.aggregationOptions);
						}

						return null;
					}
				case 'row':
					{
						var rowIndex = node.rows[0];
						return select(rows[rowIndex], column);
					}
				case 'value':
					{
						return select(node, column);
					}
				default:
					throw new __WEBPACK_IMPORTED_MODULE_4__infrastructure__["AppError"]('node.visit', 'Invalid node type ' + node.type);
			}
		}
	}, {
		key: 'setValue',
		value: function setValue(node, column, value) {
			if (node.type === 'row') {
				var rows = this.model.data().rows;
				var rowIndex = node.rows[0];
				return Object(__WEBPACK_IMPORTED_MODULE_5__services_value__["set"])(rows[rowIndex], column, value);
			}

			return _get(NodeRow.prototype.__proto__ || Object.getPrototypeOf(NodeRow.prototype), 'setValue', this).call(this, node, column, value);
		}
	}, {
		key: 'findGroupColumn',
		value: function findGroupColumn(pin) {
			var columnList = this.columnList();
			var groupColumn = columnList.find((function (c) {
				return c.model.type === 'group';
			}));
			if (!groupColumn) {
				groupColumn = this.reference.group;
				if (groupColumn.model.pin === pin) {
					var firstColumn = this.columnList(pin)[0];
					groupColumn.index = firstColumn ? firstColumn.index : 0;
				}
			}

			return groupColumn.model.pin !== pin ? null : groupColumn;
		}
	}]);

	return NodeRow;
})(__WEBPACK_IMPORTED_MODULE_0__data_row__["a" /* DataRow */]);

/***/ }),
/* 406 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return HeadModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var HeadModel = function HeadModel() {
	_classCallCheck(this, HeadModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();
	this.cache = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Cache"]();
};

/***/ }),
/* 407 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return HeadView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__command__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_column_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__column_type__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utility__ = __webpack_require__(4);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var HeadView = (function (_View) {
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
				var columnRows = model.scene().column.rows;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = columnRows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var columns = _step.value;

						var targetIndex = columns.findIndex((function (c) {
							return c.model.key === e.target.value;
						}));
						var sourceIndex = columns.findIndex((function (c) {
							return c.model.key === e.source.value;
						}));
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
				var by = Object(__WEBPACK_IMPORTED_MODULE_5__utility__["clone"])(filter().by);
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

		_this.using(model.sceneChanged.watch((function (e) {
			if (e.hasChanges('column')) {
				_this.invalidate();
			}
		})));

		_this.using(model.filterChanged.watch((function (e) {
			if (e.hasChanges('unit')) {
				_this.invalidate();
			}
		})));
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
		key: 'columns',
		value: function columns(row, pin) {
			return row.filter((function (c) {
				return c.model.pin === pin;
			}));
		}
	}, {
		key: 'invalidate',
		value: function invalidate() {
			__WEBPACK_IMPORTED_MODULE_1__infrastructure__["Log"].info('view.head', 'invalidate');

			var model = this.model;
			this.rows = Array.from(model.scene().column.rows);

			if (model.filter().unit === 'row') {
				var filterRow = this.table.data.columns().map((function (c) {
					return new __WEBPACK_IMPORTED_MODULE_4__column_type__["g" /* FilterRowColumn */](c);
				}));
				this.rows.push(filterRow);
			}
		}
	}]);

	return HeadView;
})(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 408 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return FootModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var FootModel = function FootModel() {
	_classCallCheck(this, FootModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* EnumerableResource */]();
	this.cache = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Cache"]();
};

/***/ }),
/* 409 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return FootView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_value__ = __webpack_require__(19);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var FootView = (function (_View) {
	_inherits(FootView, _View);

	function FootView(model, table) {
		_classCallCheck(this, FootView);

		var _this = _possibleConstructorReturn(this, (FootView.__proto__ || Object.getPrototypeOf(FootView)).call(this, model));

		_this.table = table;
		_this.rows = [];

		_this.valueFactory = __WEBPACK_IMPORTED_MODULE_3__services_value__["getFactory"];

		_this.using(model.sceneChanged.watch((function (e) {
			if (e.hasChanges('column')) {
				_this.invalidate();
			}
		})));
		return _this;
	}

	_createClass(FootView, [{
		key: 'invalidate',
		value: function invalidate() {
			__WEBPACK_IMPORTED_MODULE_2__infrastructure__["Log"].info('view.foot', 'invalidate');

			this.rows = new Array(this.count);
		}
	}, {
		key: 'columns',
		value: function columns(row, pin) {
			var model = this.model;
			return model.scene().column.area[pin] || [];
		}
	}, {
		key: 'value',
		value: function value(column) {
			if (column.aggregation) {
				var aggregation = column.aggregation;
				var aggregationOptions = column.aggregationOptions;

				if (!__WEBPACK_IMPORTED_MODULE_1__services__["Aggregation"].hasOwnProperty(aggregation)) {
					throw new __WEBPACK_IMPORTED_MODULE_2__infrastructure__["AppError"]('foot', 'Aggregation ' + aggregation + ' is not registered');
				}

				var rows = this.model.data().rows;
				var getValue = this.valueFactory(column);

				return __WEBPACK_IMPORTED_MODULE_1__services__["Aggregation"][aggregation](rows, getValue, aggregationOptions);
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
})(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 410 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return LayoutModel; }));
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LayoutModel = function LayoutModel() {
	_classCallCheck(this, LayoutModel);

	this.columns = {};
};

/***/ }),
/* 411 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return LayoutView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_css__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__infrastructure__ = __webpack_require__(3);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var LayoutView = (function (_View) {
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

			model.sceneChanged.watch((function (e) {
				if (e.hasChanges('column')) {
					_this2.invalidateColumns();
				}
			}));

			model.layoutChanged.watch((function (e) {
				if (e.hasChanges('columns')) {
					var form = _this2.getForm();
					_this2.invalidateColumns(form);
				}
			}));
		}
	}, {
		key: 'getForm',
		value: function getForm() {
			var model = this.model;
			var layout = model.layout;
			var state = Object(__WEBPACK_IMPORTED_MODULE_3__utility__["clone"])(layout().columns);
			var headRow = this.table.head.row(0);
			if (headRow) {
				var columns = this.table.data.columns();
				var length = columns.length;

				var _loop = function _loop() {
					var column = columns[length];
					if (!state.hasOwnProperty(column.key)) {
						if (column.canResize) {
							var index = columns.findIndex((function (c) {
								return c === column;
							}));
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
			__WEBPACK_IMPORTED_MODULE_4__infrastructure__["Log"].info('layout', 'invalidate columns');

			var model = this.model;
			var getWidth = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["widthFactory"](model, form);
			var columns = this.table.data.columns();
			var style = {};
			var length = columns.length;
			while (length--) {
				var _column = columns[length];
				var width = getWidth(_column);
				if (null !== width) {
					var key = __WEBPACK_IMPORTED_MODULE_1__services_css__["a" /* escape */](_column.key);
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
})(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 412 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return GroupModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(11);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var GroupModel = function GroupModel() {
	_classCallCheck(this, GroupModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();
	this.mode = 'column'; // default | subhead | rowspan
	this.by = [];
	this.shortcut = {
		toggle: 'space'
	};
	this.toggle = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]();
};

/***/ }),
/* 413 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return GroupView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_value__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_label__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__column_column_factory__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipe_pipe_unit__ = __webpack_require__(42);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var GroupView = (function (_View) {
	_inherits(GroupView, _View);

	function GroupView(model, table, commandManager, service) {
		_classCallCheck(this, GroupView);

		var _this = _possibleConstructorReturn(this, (GroupView.__proto__ || Object.getPrototypeOf(GroupView)).call(this, model));

		_this.table = table;
		_this.valueFactory = __WEBPACK_IMPORTED_MODULE_2__services_value__["getFactory"];
		_this.toggleStatus = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
			execute: function execute(node) {
				if (!node) {
					node = model.navigation().cell.row;
				}

				var toggle = model.group().toggle;
				if (toggle.execute(node) !== false) {
					node.state.expand = !node.state.expand;
					service.invalidate('group.view', {}, __WEBPACK_IMPORTED_MODULE_5__pipe_pipe_unit__["PipeUnit"].group);
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

		var createColumn = Object(__WEBPACK_IMPORTED_MODULE_4__column_column_factory__["columnFactory"])(model);
		_this.reference = {
			group: createColumn('group')
		};
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
			var groupColumn = this.column;
			return groupColumn.offset * node.level;
		}
	}, {
		key: 'value',
		value: function value(node) {
			var groupColumn = this.column;
			return Object(__WEBPACK_IMPORTED_MODULE_3__services_label__["getFactory"])(groupColumn)(node);
		}
	}, {
		key: 'column',
		get: function get() {
			return this.table.data.columns().find((function (c) {
				return c.type === 'group';
			})) || this.reference.group.model;
		}
	}]);

	return GroupView;
})(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 414 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = groupBuilder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(26);




function groupBuilder(model) {
	var viewState = model.view();
	var dataState = model.data();

	var pivot = model.view().pivot;
	var pivotRows = pivot.rows;
	var pivotRowLength = pivotRows[0].length;

	var groupBy = model.group().by;
	var groupByLength = groupBy.length;

	var columnMap = Object(__WEBPACK_IMPORTED_MODULE_0__column_column_service__["map"])(dataState.columns);
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

			result.push(aggRow.map((function (rs) {
				return aggregate(rs, getValue, column.aggregationOptions);
			})));
		};

		for (var i = 0, nodeLength = nodes.length; i < nodeLength; i++) {
			_loop(i, nodeLength);
		}

		return result;
	};
}

/***/ }),
/* 415 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return PivotModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PivotModel = function PivotModel() {
	_classCallCheck(this, PivotModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();
	this.by = [];
};

/***/ }),
/* 416 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return PivotView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_value__ = __webpack_require__(19);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var PivotView = (function (_View) {
	_inherits(PivotView, _View);

	function PivotView(model) {
		_classCallCheck(this, PivotView);

		var _this = _possibleConstructorReturn(this, (PivotView.__proto__ || Object.getPrototypeOf(PivotView)).call(this, model));

		_this.rows = [];
		_this.valueFactory = __WEBPACK_IMPORTED_MODULE_3__services_value__["getFactory"];

		_this.using(model.sceneChanged.watch((function (e) {
			if (e.hasChanges('column') || e.hasChanges('rows')) {
				_this.invalidate();
			}
		})));
		return _this;
	}

	_createClass(PivotView, [{
		key: 'invalidate',
		value: function invalidate() {
			__WEBPACK_IMPORTED_MODULE_2__infrastructure__["Log"].info('view.pivot', 'invalidate');

			var model = this.model;
			var pivot = model.view().pivot;
			var pivotRows = pivot.rows;
			if (pivotRows.length && model.group().by.length) {
				var build = Object(__WEBPACK_IMPORTED_MODULE_1__group__["c" /* groupBuilder */])(model);
				this.rows = build(this.valueFactory);
			} else {
				this.rows = pivotRows;
			}
		}
	}, {
		key: 'value',
		value: function value(rowIndex, columnIndex) {
			if (rowIndex >= 0 && rowIndex < this.rows.length) {
				return this.rows[rowIndex][columnIndex];
			}

			return null;
		}
	}]);

	return PivotView;
})(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 417 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return NavigationModel; }));
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavigationModel = (function () {
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
})();

/***/ }),
/* 418 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return NavigationView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__definition__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scene_view__ = __webpack_require__(6);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var NavigationView = (function (_View) {
	_inherits(NavigationView, _View);

	function NavigationView(model, table, commandManager) {
		_classCallCheck(this, NavigationView);

		var _this = _possibleConstructorReturn(this, (NavigationView.__proto__ || Object.getPrototypeOf(NavigationView)).call(this, model));

		_this.table = table;

		var shortcut = model.action().shortcut;
		var navigation = new __WEBPACK_IMPORTED_MODULE_2__navigation__["a" /* Navigation */](model, table);
		var focusBlurs = [];

		_this.using(shortcut.register(commandManager, navigation.commands));

		_this.focus = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
			execute: function execute(cell) {
				return model.navigation({ cell: new __WEBPACK_IMPORTED_MODULE_4__scene_view__["a" /* CellView */](cell) });
			},
			canExecute: function canExecute(cell) {
				return cell && cell.column.canFocus && !__WEBPACK_IMPORTED_MODULE_4__scene_view__["a" /* CellView */].equals(cell, model.navigation().cell);
			}
		});

		_this.scrollTo = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
			execute: function execute(row, column) {
				return _this.scroll(table.view, table.body.cell(row, column));
			},
			canExecute: function canExecute(row, column) {
				return table.body.cell(row, column).model() !== null;
			}
		});

		_this.using(model.navigationChanged.watch((function (e) {
			if (e.hasChanges('cell')) {
				// We need this one to toggle focus from details to main grid
				// or when user change navigation cell through the model
				if (!_this.table.view.isFocused()) {
					_this.table.view.focus();
				}

				var navState = e.state;
				var newRow = navState.rowIndex;
				var newColumn = navState.columnIndex;

				focusBlurs = _this.invalidateFocus(focusBlurs);
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
		})));

		_this.using(model.focusChanged.watch((function (e) {
			if (e.tag.source !== 'navigation.view') {
				model.navigation({
					cell: table.body.cell(e.state.rowIndex, e.state.columnIndex).model()
				});
			}
		})));

		_this.using(model.sceneChanged.watch((function (e) {
			if (e.hasChanges('status')) {
				var status = e.state.status;
				switch (status) {
					case 'stop':
						focusBlurs = _this.invalidateFocus(focusBlurs);
						break;
				}
			}
		})));
		return _this;
	}

	_createClass(NavigationView, [{
		key: 'invalidateFocus',
		value: function invalidateFocus(dispose) {
			dispose.forEach((function (f) {
				return f();
			}));
			dispose = [];

			var navState = this.model.navigation();
			var row = navState.rowIndex;
			var column = navState.columnIndex;
			var cell = this.table.body.cell(row, column);
			if (cell.model()) {
				cell.addClass(__WEBPACK_IMPORTED_MODULE_3__definition__["GRID_PREFIX"] + '-focus');
				dispose.push((function () {
					return cell.removeClass(__WEBPACK_IMPORTED_MODULE_3__definition__["GRID_PREFIX"] + '-focus');
				}));
			}

			return dispose;
		}
	}, {
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
})(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 419 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Navigation; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__command__ = __webpack_require__(11);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Navigation = (function () {
	function Navigation(model, table) {
		_classCallCheck(this, Navigation);

		this.model = model;
		this.table = table;
	}

	_createClass(Navigation, [{
		key: 'positon',
		value: function positon(y, direction) {
			var body = this.table.body;
			var lastRow = this.lastRow;
			var index = 0;
			var offset = 0;

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
		key: 'columns',
		value: function columns(rowIndex) {
			var columns = this.table.body.columns(rowIndex);
			var index = [];
			for (var i = 0, length = columns.length; i < length; i++) {
				var column = columns[i];
				if (column.model().canFocus) {
					index.push(column.index);
				}
			}
			return index;
		}
	}, {
		key: 'cell',
		value: function cell(row, column) {
			var cell = this.table.body.cell(row, column);
			return cell.model();
		}
	}, {
		key: 'currentColumn',
		get: function get() {
			var columns = this.columns(this.currentRow);
			var columnIndex = this.model.navigation().columnIndex;
			var index = columns.indexOf(columnIndex);
			return columns.length ? columns[Math.max(index, 0)] : -1;
		}
	}, {
		key: 'nextColumn',
		get: function get() {
			var columns = this.columns(this.currentRow);
			var index = columns.indexOf(this.currentColumn);
			return index >= 0 && index < columns.length - 1 ? columns[index + 1] : -1;
		}
	}, {
		key: 'prevColumn',
		get: function get() {
			var columns = this.columns(this.currentRow);
			var index = columns.indexOf(this.currentColumn);
			return index > 0 && index < columns.length ? columns[index - 1] : -1;
		}
	}, {
		key: 'lastColumn',
		get: function get() {
			var columns = this.columns(this.currentRow);
			var index = columns.length - 1;
			return index >= 0 ? columns[index] : -1;
		}
	}, {
		key: 'firstColumn',
		get: function get() {
			var columns = this.columns(this.currentRow);
			return columns.length ? columns[0] : -1;
		}
	}, {
		key: 'currentRow',
		get: function get() {
			var index = this.model.navigation().rowIndex;
			if (index < 0) {
				return this.model.scene().rows.length ? 0 : -1;
			}

			return index;
		}
	}, {
		key: 'nextRow',
		get: function get() {
			var row = this.currentRow + 1;
			return row <= this.lastRow ? row : -1;
		}
	}, {
		key: 'prevRow',
		get: function get() {
			var row = this.currentRow - 1;
			return row >= 0 ? row : -1;
		}
	}, {
		key: 'firstRow',
		get: function get() {
			return Math.min(0, this.lastRow);
		}
	}, {
		key: 'lastRow',
		get: function get() {
			return this.table.body.rowCount(this.currentColumn) - 1;
		}
	}, {
		key: 'commands',
		get: function get() {
			var _this = this;

			var model = this.model;
			var table = this.table;
			var shortcut = model.navigation().shortcut;
			var canNavigate = function canNavigate() {
				if (model.edit().state === 'view') {
					return true;
				}

				var column = table.body.column(_this.currentColumn).model();
				return column && column.editorOptions.trigger === 'focus';
			};

			var commands = {
				goDown: new __WEBPACK_IMPORTED_MODULE_0__command__["Command"]({
					shortcut: shortcut.down,
					canExecute: function canExecute() {
						return canNavigate() && _this.nextRow >= 0;
					},
					execute: function execute() {
						return _this.goTo(_this.nextRow, _this.currentColumn);
					}
				}),
				goUp: new __WEBPACK_IMPORTED_MODULE_0__command__["Command"]({
					shortcut: shortcut.up,
					canExecute: function canExecute() {
						return canNavigate() && _this.prevRow >= 0;
					},
					execute: function execute() {
						return _this.goTo(_this.prevRow, _this.currentColumn);
					}
				}),
				goRight: new __WEBPACK_IMPORTED_MODULE_0__command__["Command"]({
					shortcut: shortcut.right,
					canExecute: function canExecute() {
						return canNavigate() && _this.nextColumn >= 0;
					},
					execute: function execute() {
						return _this.goTo(_this.currentRow, _this.nextColumn);
					}
				}),
				goLeft: new __WEBPACK_IMPORTED_MODULE_0__command__["Command"]({
					shortcut: shortcut.left,
					canExecute: function canExecute() {
						return canNavigate() && _this.prevColumn >= 0;
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
						return canNavigate() && _this.prevRow >= 0;
					},
					execute: function execute() {
						return _this.goTo(_this.firstRow, _this.currentColumn);
					}
				}),
				end: new __WEBPACK_IMPORTED_MODULE_0__command__["Command"]({
					shortcut: shortcut.end,
					canExecute: function canExecute() {
						return canNavigate() && _this.nextRow >= 0;
					},
					execute: function execute() {
						return _this.goTo(_this.lastRow, _this.currentColumn);
					}
				}),
				pageUp: new __WEBPACK_IMPORTED_MODULE_0__command__["Command"]({
					shortcut: shortcut.pageUp,
					canExecute: function canExecute() {
						return canNavigate() && _this.prevRow >= 0;
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
						return canNavigate() && _this.nextRow >= 0;
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
})();

/***/ }),
/* 420 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return HighlightModel; }));
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HighlightModel = function HighlightModel() {
	_classCallCheck(this, HighlightModel);

	this.columns = [];
	this.rows = [];
};

/***/ }),
/* 421 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return HighlightView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sort_sort_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cell__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selection__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__definition__ = __webpack_require__(27);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var HighlightView = (function (_View) {
	_inherits(HighlightView, _View);

	function HighlightView(model, table) {
		_classCallCheck(this, HighlightView);

		var _this = _possibleConstructorReturn(this, (HighlightView.__proto__ || Object.getPrototypeOf(HighlightView)).call(this, model));

		_this.table = table;

		_this.cellSelector = new __WEBPACK_IMPORTED_MODULE_4__cell__["a" /* CellSelector */](model, table);
		_this.selectionService = new __WEBPACK_IMPORTED_MODULE_5__selection__["b" /* SelectionService */](model);

		var sortBlurs = [];
		var columnHoverBlurs = [];
		var rowHoverBlurs = [];
		var selectionBlurs = [];

		_this.column = new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
			canExecute: function canExecute() {
				return !model.drag().isActive;
			},
			execute: function execute(column, state) {
				if (!_this.isRendering) {
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
				if (!_this.isRendering) {
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

		_this.using(model.selectionChanged.watch((function (e) {
			if (e.hasChanges('items')) {
				selectionBlurs = _this.invalidateSelection(selectionBlurs);
			}
		})));

		_this.using(model.sceneChanged.watch((function (e) {
			if (e.hasChanges('status')) {
				var status = e.state.status;
				switch (status) {
					case 'stop':
						columnHoverBlurs = _this.invalidateColumnHover(columnHoverBlurs);
						rowHoverBlurs = _this.invalidateRowHover(rowHoverBlurs);
						sortBlurs = _this.invalidateSortBy(sortBlurs);
						selectionBlurs = _this.invalidateSelection(selectionBlurs);
						break;
				}
			}
		})));

		_this.using(model.sortChanged.watch((function (e) {
			if (!_this.isRendering && e.hasChanges('by')) {
				sortBlurs = _this.invalidateSortBy(sortBlurs);
			}
		})));

		_this.using(model.highlightChanged.watch((function (e) {
			if (!_this.isRendering && e.tag.source !== 'highlight') {
				if (e.hasChanges('columns')) {
					columnHoverBlurs = _this.invalidateColumnHover(columnHoverBlurs);
				}

				if (e.hasChanges('rows')) {
					rowHoverBlurs = _this.invalidateRowHover(rowHoverBlurs);
				}
			}
		})));

		_this.using(model.scrollChanged.watch((function () {
			var highlight = model.highlight;
			if (highlight().rows.length) {
				highlight({
					rows: []
				}, {
					source: 'highlight.view'
				});
			}
		})));
		return _this;
	}

	_createClass(HighlightView, [{
		key: 'invalidateColumnHover',
		value: function invalidateColumnHover(dispose) {
			dispose.forEach((function (f) {
				return f();
			}));
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
			dispose.forEach((function (f) {
				return f();
			}));
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
			dispose.forEach((function (f) {
				return f();
			}));
			dispose = [];

			var sortBy = this.model.sort().by;
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = sortBy[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var entry = _step3.value;

					var key = __WEBPACK_IMPORTED_MODULE_3__sort_sort_service__["c" /* key */](entry);
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

			dispose.forEach((function (f) {
				return f();
			}));

			var selectionItems = this.model.selection().items;
			var entries = this.selectionService.lookup(selectionItems);
			var cells = this.cellSelector.map(entries);
			dispose = cells.map((function (cell) {
				return _this2.highlightCell(cell, 'selected');
			}));
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
	}, {
		key: 'isRendering',
		get: function get() {
			return this.model.scene().status === 'start';
		}
	}]);

	return HighlightView;
})(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 422 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell_selector__ = __webpack_require__(423);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__cell_selector__["a"]; }));


/***/ }),
/* 423 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return CellSelector; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var CellSelector = (function () {
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

					var index = columns.findIndex((function (c) {
						return c === item;
					}));
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
					var columnIndex = columns.findIndex((function (c) {
						return c === item.column;
					}));
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
			var rows = entries.filter((function (item) {
				return item.unit === 'row';
			})).map((function (item) {
				return item.item;
			}));
			var cells = entries.filter((function (item) {
				return item.unit === 'cell';
			})).map((function (item) {
				return item.item;
			}));

			return [].concat(_toConsumableArray(this.mapFromRows(rows)), _toConsumableArray(this.mapFromCells(cells)));
		}
	}]);

	return CellSelector;
})();

/***/ }),
/* 424 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return SelectionModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__command__ = __webpack_require__(11);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var SelectionModel = function SelectionModel() {
	_classCallCheck(this, SelectionModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();
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
/* 425 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return SelectionView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__command__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selection_range__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selection_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__definition__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selection_command_manager__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipe_pipe_unit__ = __webpack_require__(42);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var SelectionView = (function (_View) {
	_inherits(SelectionView, _View);

	function SelectionView(model, table, commandManager, gridService) {
		_classCallCheck(this, SelectionView);

		var _this = _possibleConstructorReturn(this, (SelectionView.__proto__ || Object.getPrototypeOf(SelectionView)).call(this, model));

		_this.table = table;

		_this.selectionService = new __WEBPACK_IMPORTED_MODULE_5__selection_service__["a" /* SelectionService */](model);
		_this.selectionState = Object(__WEBPACK_IMPORTED_MODULE_3__state__["a" /* selectionStateFactory */])(model, _this.selectionService);
		_this.selectionRange = new __WEBPACK_IMPORTED_MODULE_4__selection_range__["a" /* SelectionRange */](model);

		var selectionCommandManager = new __WEBPACK_IMPORTED_MODULE_8__selection_command_manager__["a" /* SelectionCommandManager */](model, commandManager);
		var shortcut = model.action().shortcut;
		var commands = _this.commands;

		_this.using(shortcut.register(selectionCommandManager, commands));

		_this.toggleRow = commands.get('toggleRow');
		_this.toggleColumn = commands.get('toggleColumn');
		_this.toggleCell = commands.get('toggleCell');
		_this.reset = commands.get('reset');

		_this.using(model.navigationChanged.watch((function (e) {
			if (e.tag.source === 'selection.view') {
				return;
			}

			if (e.hasChanges('cell')) {
				if (_this.toggleCell.canExecute(e.state.cell)) {
					_this.toggleCell.execute(e.state.cell);
				}
			}
		})));

		_this.using(model.selectionChanged.watch((function (e) {
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
				gridService.invalidate('selection', e.changes, __WEBPACK_IMPORTED_MODULE_9__pipe_pipe_unit__["PipeUnit"].column);

				if (!e.hasChanges('items')) {
					_this.selectionState.clear();
					model.selection({
						items: []
					}, {
						source: 'selection.view'
					});

					_this.selectionState = Object(__WEBPACK_IMPORTED_MODULE_3__state__["a" /* selectionStateFactory */])(model, _this.selectionService);
				}
			}

			if (e.hasChanges('items') && e.tag.source !== 'selection.view') {
				// Don't use commit it came outside already

				var oldEntries = _this.selectionService.lookup(e.changes.items.oldValue);
				_this.select(oldEntries, false);

				var newEntries = _this.selectionService.lookup(e.state.items);
				_this.select(newEntries, true);
			}
		})));
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
				if (!arguments.length || Object(__WEBPACK_IMPORTED_MODULE_7__utility__["isUndefined"])(items)) {
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
			var cell = this.table.body.cell(rowIndex, columnIndex);
			this.model.navigation({ cell: cell.model() }, { source: 'selection.view' });
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
})(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 426 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multiple_selection_state__ = __webpack_require__(123);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selection_state_factory__ = __webpack_require__(427);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_1__selection_state_factory__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_state__ = __webpack_require__(124);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_selection_state__ = __webpack_require__(211);
/* unused harmony namespace reexport */





/***/ }),
/* 427 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = selectionStateFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__single_selection_state__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multiple_selection_state__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range_selection_state__ = __webpack_require__(428);





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
/* 428 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return RangeSelectionState; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multiple_selection_state__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(4);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var RangeSelectionState = (function (_MultipleSelectionSta) {
	_inherits(RangeSelectionState, _MultipleSelectionSta);

	function RangeSelectionState(model, service) {
		_classCallCheck(this, RangeSelectionState);

		return _possibleConstructorReturn(this, (RangeSelectionState.__proto__ || Object.getPrototypeOf(RangeSelectionState)).call(this, model, service));
	}

	_createClass(RangeSelectionState, [{
		key: 'select',
		value: function select(item) {
			var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			if (Object(__WEBPACK_IMPORTED_MODULE_1__utility__["isArray"])(item)) {
				this.clear();
			}

			_get(RangeSelectionState.prototype.__proto__ || Object.getPrototypeOf(RangeSelectionState.prototype), 'select', this).call(this, item, state);
		}
	}]);

	return RangeSelectionState;
})(__WEBPACK_IMPORTED_MODULE_0__multiple_selection_state__["a" /* MultipleSelectionState */]);

/***/ }),
/* 429 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return SelectionCommandManager; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__command__ = __webpack_require__(11);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SelectionCommandManager = (function (_CompositeCommandMana) {
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
			if (this.model.edit().state === 'edit') {
				var cell = this.model.navigation().cell;
				if (cell && cell.column.type !== 'select') {
					return [];
				}
			}

			return _get(SelectionCommandManager.prototype.__proto__ || Object.getPrototypeOf(SelectionCommandManager.prototype), 'filter', this).call(this, commands);
		}
	}]);

	return SelectionCommandManager;
})(__WEBPACK_IMPORTED_MODULE_0__command__["CompositeCommandManager"]);

/***/ }),
/* 430 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return SortModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var SortModel = function SortModel() {
	_classCallCheck(this, SortModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();
	this.by = [];
	this.mode = 'multiple';
	this.trigger = ['reorder'];
};

/***/ }),
/* 431 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return SortView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__command__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_column_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sort_sort_service__ = __webpack_require__(113);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var SortView = (function (_View) {
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
				var index = __WEBPACK_IMPORTED_MODULE_4__sort_sort_service__["b" /* index */](by, key);
				if (index >= 0) {
					var dir = __WEBPACK_IMPORTED_MODULE_4__sort_sort_service__["a" /* direction */](by[index]);
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
								by[index] = entry;
								_this.hover = false;
								break;
							}
						default:
							throw Object(__WEBPACK_IMPORTED_MODULE_1__infrastructure__["AppError"])('head.core', 'Invalid sort direction ' + dir);
					}
				} else {
					if (sortState.mode === 'single') {
						by.length = 0;
					}

					var _entry2 = _defineProperty({}, key, 'asc');
					by.push(_entry2);

					var order = __WEBPACK_IMPORTED_MODULE_4__sort_sort_service__["e" /* orderFactory */](model);
					order(by);
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

			this.using(model.columnListChanged.watch((function (e) {
				if (e.hasChanges('index')) {
					var sortState = sort();
					var order = __WEBPACK_IMPORTED_MODULE_4__sort_sort_service__["e" /* orderFactory */](model);
					var sortBy = order(Array.from(sortState.by));
					if (!_this2.equals(sortBy, sortState.by)) {
						sort({ by: sortBy }, { source: 'sort.view' });
					}
				}
			})));

			this.using(model.dataChanged.watch((function (e) {
				if (e.hasChanges('columns')) {
					var sortState = sort();
					var columnMap = __WEBPACK_IMPORTED_MODULE_3__column_column_service__["map"](e.state.columns);
					var sortBy = sortState.by.filter((function (entry) {
						return columnMap.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_4__sort_sort_service__["c" /* key */](entry));
					}));
					if (!_this2.equals(sortBy, sortState.by)) {
						sort({ by: sortBy }, { source: 'sort.view' });
					}
				}
			})));
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
			return __WEBPACK_IMPORTED_MODULE_4__sort_sort_service__["b" /* index */](by, key);
		}
	}]);

	return SortView;
})(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 432 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return FilterModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__match__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var FilterModel = function FilterModel() {
	_classCallCheck(this, FilterModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();
	this.by = {};
	this.match = __WEBPACK_IMPORTED_MODULE_1__match__["a" /* match */];
	this.fetch = __WEBPACK_IMPORTED_MODULE_2__utility__["noop"];
	this.unit = 'default'; // default|row
};

/***/ }),
/* 433 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = match;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expression__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_column_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility__ = __webpack_require__(4);




function match(context) {
	var model = context.model;
	var expression = Object(__WEBPACK_IMPORTED_MODULE_0__expression__["b" /* build */])(model.filter().by);
	if (expression !== null) {
		var valueFactory = context.valueFactory;
		var columnMap = __WEBPACK_IMPORTED_MODULE_1__column_column_service__["map"](model.data().columns);
		var visitor = new __WEBPACK_IMPORTED_MODULE_0__expression__["a" /* PredicateVisitor */](function (key) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expression_build__ = __webpack_require__(435);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_0__expression_build__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expression_visitor__ = __webpack_require__(215);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__predicate_visitor__ = __webpack_require__(436);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_2__predicate_visitor__["a"]; }));




/***/ }),
/* 435 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = build;
var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

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

	expressions.forEach((function (expr) {
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
	}));

	return root.left ? root : null;
}

/***/ }),
/* 436 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return PredicateVisitor; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cast_factory__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expression_visitor__ = __webpack_require__(215);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PredicateVisitor = (function (_Visitor) {
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
						throw Object(__WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"])('predicate.visitor', 'Invalid operation ' + group.op);
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
			    castAs = Object(__WEBPACK_IMPORTED_MODULE_1__cast_factory__["a" /* castFactory */])(r);

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

						return Object(__WEBPACK_IMPORTED_MODULE_1__cast_factory__["a" /* castFactory */])(r[0])(v) <= v && v <= Object(__WEBPACK_IMPORTED_MODULE_1__cast_factory__["a" /* castFactory */])(r[1])(v);
					};
				case 'in':
					return function (l) {
						var value = getValue(l);
						var v = !value && value !== 0 ? 'null' : value;

						var map = r.reduce((function (memo, item) {
							memo[Object(__WEBPACK_IMPORTED_MODULE_1__cast_factory__["a" /* castFactory */])(item)(v)] = true;
							return memo;
						}), {});

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
})(__WEBPACK_IMPORTED_MODULE_2__expression_visitor__["a" /* Visitor */]);

/***/ }),
/* 437 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getType */
/* harmony export (immutable) */ __webpack_exports__["a"] = castFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);


function getType(type) {
	return {}.toString.call(type).slice('[object]'.length, -1); // returns type of built-in objects
}

function castFactory(r) {
	var rt = getType(r);
	var asString = '' + r;
	var asNumber = +r;
	var asBool = !!r;
	var asDate = new Date(r);

	return function (l) {
		var lt = getType(l);
		if (rt === lt) {
			return r;
		}

		switch (lt) {
			case 'Number':
				return asNumber;
			case 'String':
				return asString;
			case 'Date':
				return asDate;
			case 'Boolean':
				return asBool;
			default:
				throw Object(__WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"])('cast.factory', 'Unsupported format ' + lt);
		}
	};
}

/***/ }),
/* 438 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return FilterView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(10);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var FilterView = (function (_View) {
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
})(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 439 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return EditModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(11);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var EditModel = function EditModel() {
	_classCallCheck(this, EditModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();
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
/* 440 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return EditView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_cell_view__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_row_view__ = __webpack_require__(447);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var EditView = (function (_View) {
	_inherits(EditView, _View);

	function EditView(model, table, commandManager) {
		_classCallCheck(this, EditView);

		var _this = _possibleConstructorReturn(this, (EditView.__proto__ || Object.getPrototypeOf(EditView)).call(this, model));

		_this.cell = new __WEBPACK_IMPORTED_MODULE_1__edit_cell_view__["a" /* EditCellView */](model, table, commandManager);
		_this.row = new __WEBPACK_IMPORTED_MODULE_2__edit_row_view__["a" /* EditRowView */](model, table, commandManager);
		return _this;
	}

	_createClass(EditView, [{
		key: 'dispose',
		value: function dispose() {
			_get(EditView.prototype.__proto__ || Object.getPrototypeOf(EditView.prototype), 'dispose', this).call(this);

			this.cell.dispose();
			this.row.dispose();
		}
	}]);

	return EditView;
})(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 441 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return EditCellView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shortcut__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_cell_editor__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_value__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_label__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__view__ = __webpack_require__(10);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var EditCellView = (function (_View) {
	_inherits(EditCellView, _View);

	function EditCellView(model, table, commandManager) {
		_classCallCheck(this, EditCellView);

		var _this = _possibleConstructorReturn(this, (EditCellView.__proto__ || Object.getPrototypeOf(EditCellView)).call(this));

		_this.model = model;
		_this.table = table;

		_this.editor = __WEBPACK_IMPORTED_MODULE_3__edit_cell_editor__["a" /* CellEditor */].empty;
		_this.commandManager = commandManager;

		_this.shortcut = model.action().shortcut;
		var commands = _this.commands;
		_this.shortcutOff = _this.shortcut.register(commandManager, commands);

		_this.enter = commands.get('enter');
		_this.commit = commands.get('commit');
		_this.cancel = commands.get('cancel');
		_this.reset = commands.get('reset');

		_this.using(model.navigationChanged.watch((function (e) {
			if (e.hasChanges('cell')) {
				var oldCell = e.changes.cell.oldValue;
				if (oldCell && oldCell.column.editorOptions.trigger === 'focus') {
					if (_this.commit.canExecute(oldCell)) {
						_this.commit.execute(oldCell);
					}
				}

				var newCell = e.changes.cell.newValue;
				if (newCell && newCell.column.editorOptions.trigger === 'focus') {
					if (_this.enter.canExecute(newCell)) {
						_this.enter.execute(newCell);
					}
				}
			}
		})));
		return _this;
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
			var _this2 = this;

			var model = this.model;
			var edit = model.edit;
			return function () {
				var shortcuts = edit()[type + 'Shortcuts'];
				var cell = _this2.editor.cell;
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
		key: 'dispose',
		value: function dispose() {
			_get(EditCellView.prototype.__proto__ || Object.getPrototypeOf(EditCellView.prototype), 'dispose', this).call(this);

			this.editor.reset();
			this.shortcutOff();
		}
	}, {
		key: 'commands',
		get: function get() {
			var _this3 = this;

			var model = this.model;
			var table = this.table;
			var commands = {
				enter: new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
					shortcut: this.shortcutFactory('enter'),
					canExecute: function canExecute(cell) {
						// TODO: source should be set up from outside
						var source = cell ? 'mouse' : 'keyboard';
						if (source === 'keyboard' && __WEBPACK_IMPORTED_MODULE_2__shortcut__["a" /* Shortcut */].isControl(_this3.shortcut.keyCode)) {
							return false;
						}

						cell = cell || model.navigation().cell;
						return cell && cell.column.canEdit && (cell.column.class === 'control' || model.edit().mode === 'cell') && model.edit().state === 'view' && model.edit().enter.canExecute(_this3.contextFactory(cell));
					},
					execute: function execute(cell, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('cell.edit', 'edit mode');
						if (e) {
							e.stopImmediatePropagation();
						}

						// TODO: source should be set up from outside
						var source = cell ? 'mouse' : 'keyboard';
						cell = cell || model.navigation().cell;
						if (cell && model.edit().enter.execute(_this3.contextFactory(cell, cell.value, cell.label)) !== false) {
							_this3.editor = new __WEBPACK_IMPORTED_MODULE_3__edit_cell_editor__["a" /* CellEditor */](cell);
							if (source === 'keyboard' && __WEBPACK_IMPORTED_MODULE_2__shortcut__["a" /* Shortcut */].isPrintable(_this3.shortcut.keyCode)) {
								var parse = Object(__WEBPACK_IMPORTED_MODULE_6__services__["parseFactory"])(cell.column.type);
								var value = __WEBPACK_IMPORTED_MODULE_2__shortcut__["a" /* Shortcut */].stringify(_this3.shortcut.keyCode);
								var typedValue = parse(value);
								if (typedValue !== null) {
									_this3.value = typedValue;
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
						cell = cell || _this3.editor.cell;
						return cell && cell === _this3.editor.cell && cell.column.canEdit && (cell.column.class === 'control' || model.edit().mode === 'cell') && model.edit().state === 'edit' && model.edit().commit.canExecute(_this3.contextFactory(cell));
					},
					execute: function execute(cell, e, timeout) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('cell.edit', 'commit');
						if (e) {
							e.stopImmediatePropagation();
						}

						cell = cell || _this3.editor.cell;
						if (cell && model.edit().commit.execute(_this3.contextFactory(cell, _this3.value, _this3.label, _this3.tag)) !== false) {
							_this3.editor.commit();
							_this3.editor = __WEBPACK_IMPORTED_MODULE_3__edit_cell_editor__["a" /* CellEditor */].empty;
							model.edit({ state: 'view' });

							var toggleMode = function toggleMode() {
								cell.mode('view');
								table.view.focus();
							};

							if (timeout) {
								setTimeout(toggleMode, timeout);
							} else {
								toggleMode();
							}
							return true;
						}

						return false;
					}
				}),
				cancel: new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
					shortcut: this.shortcutFactory('cancel'),
					canExecute: function canExecute(cell) {
						cell = cell || _this3.editor.cell;
						return cell && cell.column.canEdit && (cell.column.class === 'control' || model.edit().mode === 'cell') && model.edit().state === 'edit' && model.edit().cancel.canExecute(_this3.contextFactory(cell, _this3.value, _this3.label));
					},
					execute: function execute(cell, e, timeout) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('cell.edit', 'cancel');
						if (e) {
							e.stopImmediatePropagation();
						}

						cell = cell || _this3.editor.cell;
						if (cell && model.edit().cancel.execute(_this3.contextFactory(cell, cell.value, cell.label)) !== false) {
							_this3.editor.reset();
							_this3.editor = __WEBPACK_IMPORTED_MODULE_3__edit_cell_editor__["a" /* CellEditor */].empty;

							model.edit({ state: 'view' });
							var toggleMode = function toggleMode() {
								cell.mode('view');
								table.view.focus();
							};

							if (timeout) {
								setTimeout(toggleMode, timeout);
							} else {
								toggleMode();
							}

							return true;
						}

						return false;
					}
				}),
				reset: new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
					canExecute: function canExecute(cell) {
						cell = cell || _this3.editor.cell;
						return cell && cell.column.canEdit && (cell.column.class === 'control' || model.edit().mode === 'cell') && model.edit().state === 'edit' && model.edit().reset.canExecute(_this3.contextFactory(cell, _this3.value, _this3.label));
					},
					execute: function execute(cell, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('cell.edit', 'reset');
						if (e) {
							e.stopImmediatePropagation();
						}

						cell = cell || _this3.editor.cell;
						if (cell && model.edit().reset.execute(_this3.contextFactory(cell, _this3.value, _this3.label)) !== false) {
							_this3.editor.reset();
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
})(__WEBPACK_IMPORTED_MODULE_7__view__["a" /* View */]);

/***/ }),
/* 442 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Shortcut; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__io__ = __webpack_require__(443);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Shortcut = (function () {
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
			return parts.some((function (part) {
				return part === 'ctrl' || part === 'alt';
			})) || parts.every((function (part) {
				return __WEBPACK_IMPORTED_MODULE_0__io__["a" /* Keyboard */].isControl(part);
			}));
		}
	}, {
		key: 'isPrintable',
		value: function isPrintable(keyCode) {
			if (!keyCode) {
				return false;
			}

			var code = keyCode.code;
			var parts = code.split('+');
			return parts.some((function (part) {
				return __WEBPACK_IMPORTED_MODULE_0__io__["a" /* Keyboard */].isPrintable(part);
			}));
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
})();

/***/ }),
/* 443 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__char_reader__ = __webpack_require__(444);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keyboard__ = __webpack_require__(445);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_1__keyboard__["a"]; }));



/***/ }),
/* 444 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CharReader */
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CharReader = (function () {
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
})();

/***/ }),
/* 445 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Keyboard; }));
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var controlSet = new Set(['shift', 'ctrl', 'alt', 'pause', 'break', 'capslock', 'escape', 'insert', 'left', 'right', 'end', 'home', 'pageup', 'pagedown', 'up', 'down', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', 'numlock', 'scrolllock']);

var nonPrintableSet = new Set(['enter']);

var codeMap = new Map().set(8, 'backspace').set(9, 'tab').set(13, 'enter').set(16, 'shift').set(17, 'ctrl').set(20, 'capslock').set(27, 'escape').set(32, 'space').set(33, 'pageup').set(34, 'pagedown').set(35, 'end').set(36, 'home').set(37, 'left').set(38, 'up').set(39, 'right').set(40, 'down').set(45, 'insert').set(46, 'delete').set(112, 'f1').set(113, 'f2').set(114, 'f3').set(115, 'f4').set(116, 'f5').set(117, 'f6').set(118, 'f7').set(119, 'f8').set(120, 'f9').set(121, 'f10').set(122, 'f11').set(123, 'f12').set(144, 'numlock').set(145, 'scrolllock');

var codeSet = new Set(codeMap.values());

var printableMap = new Map().set('space', ' ');

var Keyboard = (function () {
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
})();

/***/ }),
/* 446 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ShortcutManager; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(11);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var ShortcutManager = (function () {
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
						if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["isFunction"])(cmd.shortcut)) {
							context.commands.push(cmd);
							disposes.push((function () {
								var index = context.commands.indexOf(cmd);
								if (index >= 0) {
									context.commands.splice(index, 1);
								}
							}));
						} else {
							cmd.shortcut.toLowerCase().split('|').forEach((function (shortcut) {
								var temp = [];
								if (context.shortcuts.has(shortcut)) {
									temp = context.shortcuts.get(shortcut);
								}
								temp.push(cmd);
								context.shortcuts.set(shortcut, temp);
								disposes.push((function () {
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
								}));
							}));
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
				disposes.forEach((function (dispose) {
					return dispose();
				}));
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
			var entries = Array.from(this.managerMap.entries()).map((function (entry) {
				var manager = entry[0];
				var commands = entry[1];
				return {
					commands: manager.filter(find(commands)),
					manager: entry[0]
				};
			})).filter((function (entry) {
				return entry.commands.length > 0;
			}));

			var allCommands = Object(__WEBPACK_IMPORTED_MODULE_0__utility__["flatten"])(entries.map((function (x) {
				return x.commands;
			})));
			var wildCardPredicate = allCommands.filter(notWildcard).length > 0 ? notWildcard : __WEBPACK_IMPORTED_MODULE_0__utility__["yes"];
			return entries.reduce((function (memo, entry) {
				var commands = entry.commands;
				var manager = entry.manager;
				var invokableCommands = commands.filter(wildCardPredicate);
				if (invokableCommands.length) {
					memo |= manager.invoke(invokableCommands);
				}

				return memo;
			}), false);
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

				result = result.concat(context.commands.map((function (cmd) {
					return new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({ execute: cmd.execute, canExecute: cmd.canExecute, shortcut: cmd.shortcut() });
				})).filter((function (cmd) {
					return _this2.test(cmd.shortcut, code);
				})));

				return result;
			};
		}
	}, {
		key: 'test',
		value: function test(shortcut, code) {
			code = code.toLowerCase();
			return ('' + shortcut).toLowerCase().split('|').some((function (shct) {
				return shct === '*' || code === shct;
			}));
		}
	}]);

	return ShortcutManager;
})();

/***/ }),
/* 447 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return EditRowView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_row_editor__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view__ = __webpack_require__(10);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var EditRowView = (function (_View) {
	_inherits(EditRowView, _View);

	function EditRowView(model, table, commandManager) {
		_classCallCheck(this, EditRowView);

		var _this = _possibleConstructorReturn(this, (EditRowView.__proto__ || Object.getPrototypeOf(EditRowView)).call(this));

		_this.model = model;
		_this.table = table;
		_this.editor = __WEBPACK_IMPORTED_MODULE_2__edit_row_editor__["a" /* RowEditor */].empty;

		var shortcut = model.action().shortcut;
		var commands = _this.commands;
		_this.shortcutOff = shortcut.register(commandManager, commands);

		_this.enter = commands.get('enter');
		_this.commit = commands.get('commit');
		_this.cancel = commands.get('cancel');
		_this.reset = commands.get('reset');
		return _this;
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
		key: 'dispose',
		value: function dispose() {
			_get(EditRowView.prototype.__proto__ || Object.getPrototypeOf(EditRowView.prototype), 'dispose', this).call(this);

			this.shortcutOff();
		}
	}, {
		key: 'commands',
		get: function get() {
			var _this2 = this;

			var model = this.model;
			var commands = {
				enter: new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
					shortcut: this.shortcutFactory('enter'),
					canExecute: function canExecute(row) {
						row = row || model.navigation().row;
						return row && model.edit().mode === 'row' && model.edit().state === 'view' && model.edit().enter.canExecute(_this2.contextFactory(row));
					},
					execute: function execute(row, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('row.edit', 'edit mode');
						if (e) {
							e.stopImmediatePropagation();
						}

						var columns = _this2.model.data().columns;
						_this2.editor = new __WEBPACK_IMPORTED_MODULE_2__edit_row_editor__["a" /* RowEditor */](row, columns);
						model.edit({ state: 'edit' });
					}
				}),
				commit: new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
					shortcut: this.shortcutFactory('commit'),
					// TODO: add validation support
					canExecute: function canExecute(row) {
						row = row || model.navigation().row;
						return row && model.edit().mode === 'row' && model.edit().state === 'edit' && model.edit().commit.canExecute(_this2.contextFactory(row));
					},
					execute: function execute(cell, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('row.edit', 'commit');
						if (e) {
							e.stopImmediatePropagation();
						}

						_this2.editor.commit();
						_this2.editor = __WEBPACK_IMPORTED_MODULE_2__edit_row_editor__["a" /* RowEditor */].empty;
						model.edit({ state: 'view' });
					}
				}),
				cancel: new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
					shortcut: this.shortcutFactory('cancel'),
					canExecute: function canExecute(row) {
						row = row || model.navigation().row;
						return row && model.edit().mode === 'row' && model.edit().state === 'edit' && model.edit().cancel.canExecute(_this2.contextFactory(row));
					},
					execute: function execute(row, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('cell.edit', 'cancel');
						if (e) {
							e.stopImmediatePropagation();
						}

						_this2.editor.reset();
						_this2.editor = __WEBPACK_IMPORTED_MODULE_2__edit_row_editor__["a" /* RowEditor */].empty;
						model.edit({ state: 'view' });
					}
				}),
				reset: new __WEBPACK_IMPORTED_MODULE_1__command__["Command"]({
					canExecute: function canExecute(row) {
						row = row || model.navigation().row;
						return row && model.edit().mode === 'row' && model.edit().state === 'edit' && model.edit().reset.canExecute(_this2.contextFactory(row));
					},
					execute: function execute(row, e) {
						__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('row.edit', 'reset');
						if (e) {
							e.stopImmediatePropagation();
						}

						if (row && model.edit().reset.execute(_this2.contextFactory(row)) !== false) {
							_this2.editor.reset();
							return false;
						}
					}
				})
			};
			return new Map(Object.entries(commands));
		}
	}]);

	return EditRowView;
})(__WEBPACK_IMPORTED_MODULE_3__view__["a" /* View */]);

/***/ }),
/* 448 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return RowEditor; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_cell_editor__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_value__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_label__ = __webpack_require__(49);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var RowEditorCore = (function () {
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
})();

var CellView = (function () {
	function CellView(row, column) {
		_classCallCheck(this, CellView);

		this.row = row;
		this.column = column;
	}

	_createClass(CellView, [{
		key: 'value',
		get: function get() {
			return Object(__WEBPACK_IMPORTED_MODULE_2__services_value__["get"])(this.row, this.column);
		},
		set: function set(value) {
			return Object(__WEBPACK_IMPORTED_MODULE_2__services_value__["set"])(this.row, this.column, value);
		}
	}, {
		key: 'label',
		get: function get() {
			return Object(__WEBPACK_IMPORTED_MODULE_3__services_label__["get"])(this.row, this.column);
		},
		set: function set(value) {
			return Object(__WEBPACK_IMPORTED_MODULE_3__services_label__["set"])(this.row, this.column, value);
		}
	}]);

	return CellView;
})();

var empty = new RowEditorCore();
var RowEditor = (function (_RowEditorCore) {
	_inherits(RowEditor, _RowEditorCore);

	function RowEditor(row, columns) {
		_classCallCheck(this, RowEditor);

		var _this = _possibleConstructorReturn(this, (RowEditor.__proto__ || Object.getPrototypeOf(RowEditor)).call(this));

		_this.value = Object(__WEBPACK_IMPORTED_MODULE_0__utility__["cloneDeep"])(row);
		_this.row = row;

		_this.editors = columns.filter((function (column) {
			return column.canEdit;
		})).map((function (column) {
			return new __WEBPACK_IMPORTED_MODULE_1__edit_cell_editor__["a" /* CellEditor */](new CellView(_this.value, column));
		}));
		return _this;
	}

	_createClass(RowEditor, [{
		key: 'commit',
		value: function commit() {
			this.editors.forEach((function (editor) {
				return editor.commit();
			}));
			Object.assign(this.row, this.value);
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.editors.forEach((function (editor) {
				return editor.reset();
			}));
			this.value = Object(__WEBPACK_IMPORTED_MODULE_0__utility__["cloneDeep"])(this.row);
		}
	}], [{
		key: 'empty',
		get: function get() {
			return empty;
		}
	}]);

	return RowEditor;
})(RowEditorCore);

/***/ }),
/* 449 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return PaginationModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PaginationModel = function PaginationModel() {
	_classCallCheck(this, PaginationModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();
	this.current = 0;
	this.size = 50;
	this.sizeList = [5, 10, 20, 30, 40, 50];
	this.count = 0;
};

/***/ }),
/* 450 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return PaginationView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(10);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var PaginationView = (function (_View) {
	_inherits(PaginationView, _View);

	function PaginationView(model) {
		_classCallCheck(this, PaginationView);

		var _this = _possibleConstructorReturn(this, (PaginationView.__proto__ || Object.getPrototypeOf(PaginationView)).call(this, model));

		_this.using(model.dataChanged.watch((function (e) {
			if (e.hasChanges('rows') && e.tag.behavior !== 'core') {
				model.pagination({
					current: 0
				});
			}
		})));

		_this.using(model.filterChanged.watch((function (e) {
			if (e.hasChanges('by')) {
				model.pagination({
					current: 0
				});
			}
		})));

		_this.using(model.pivotChanged.watch((function (e) {
			if (e.hasChanges('by')) {
				model.pagination({
					current: 0
				});
			}
		})));

		_this.using(model.groupChanged.watch((function (e) {
			if (e.hasChanges('by')) {
				model.pagination({
					current: 0
				});
			}
		})));
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
})(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 451 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return StyleModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var StyleModel = function StyleModel() {
	_classCallCheck(this, StyleModel);

	this.row = __WEBPACK_IMPORTED_MODULE_0__utility__["noop"];
	this.cell = __WEBPACK_IMPORTED_MODULE_0__utility__["noop"];
};

/***/ }),
/* 452 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return StyleView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_monitor__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_value__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_virtual__ = __webpack_require__(454);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var StyleView = (function (_View) {
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

		_this.using(model.sceneChanged.watch((function (e) {
			if (e.hasChanges('status') && e.state.status === 'stop') {
				_this.invalidate();
			}
		})));

		_this.using(model.styleChanged.watch((function (e) {
			if (e.hasChanges('row')) {
				_this.active.row = e.state.row !== __WEBPACK_IMPORTED_MODULE_4__utility__["noop"];
			}

			if (e.hasChanges('cell')) {
				_this.active.cell = e.state.cell !== __WEBPACK_IMPORTED_MODULE_4__utility__["noop"];
			}

			_this.invalidate();
		})));
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
			var rowMonitor = this.monitor.row;
			var cellMonitor = this.monitor.cell;
			// TODO: improve performance
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
				styleRow = new __WEBPACK_IMPORTED_MODULE_5__style_virtual__["b" /* VirtualRowStyle */](table).applyFactory();
				styleCell = new __WEBPACK_IMPORTED_MODULE_5__style_virtual__["a" /* VirtualCellStyle */](table).applyFactory();
			}

			var columns = table.data.columns();
			var columnMap = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["map"](columns);
			var bodyRows = table.body.rows();
			var domCell = cellMonitor.enter();
			var domRow = rowMonitor.enter();

			try {
				for (var i = 0, rowsLength = bodyRows.length; i < rowsLength; i++) {
					var bodyRow = bodyRows[i];
					var rowIndex = bodyRow.index;
					var dataRow = bodyRow.model();
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
})(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 453 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Monitor; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_css__ = __webpack_require__(57);
var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Entry = (function () {
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
			key = __WEBPACK_IMPORTED_MODULE_0__services_css__["a" /* escape */](key);
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
})();

var Monitor = (function () {
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
})();

/***/ }),
/* 454 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return VirtualRowStyle; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return VirtualCellStyle; }));
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VirtualRowStyle = (function () {
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
})();

var VirtualCellStyle = (function () {
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
})();

/***/ }),
/* 455 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_view__ = __webpack_require__(456);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__column_view__["a"]; }));


/***/ }),
/* 456 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ColumnView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_pipe_unit__ = __webpack_require__(42);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ColumnView = (function (_View) {
	_inherits(ColumnView, _View);

	function ColumnView(model, service) {
		_classCallCheck(this, ColumnView);

		var _this = _possibleConstructorReturn(this, (ColumnView.__proto__ || Object.getPrototypeOf(ColumnView)).call(this, model));

		_this.using(model.dataChanged.watch((function (e) {
			if (e.tag.behavior === 'core' || e.tag.source === 'column.view') {
				return;
			}

			if (e.hasChanges('columns') || e.hasChanges('rows')) {
				service.invalidate('column.view', e.changes, __WEBPACK_IMPORTED_MODULE_1__pipe_pipe_unit__["PipeUnit"].column);
			}
		})));

		_this.using(model.columnListChanged.watch((function (e) {
			if (e.hasChanges('index') && e.tag.behavior !== 'core') {
				service.invalidate('column.list', e.tag, __WEBPACK_IMPORTED_MODULE_1__pipe_pipe_unit__["PipeUnit"].column);
			}
		})));

		_this.using(model.filterChanged.watch((function (e) {
			if (e.tag.behavior === 'core' || e.tag.source === 'column.view') {
				return;
			}
			if (e.hasChanges('unit')) {
				service.invalidate('column.view', e.changes, __WEBPACK_IMPORTED_MODULE_1__pipe_pipe_unit__["PipeUnit"].column);
			}
		})));
		return _this;
	}

	return ColumnView;
})(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 457 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ScrollModel; }));
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollModel = function ScrollModel() {
	_classCallCheck(this, ScrollModel);

	this.mode = 'default';

	this.top = 0;
	this.left = 0;
	this.cursor = 0;
};

/***/ }),
/* 458 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ScrollView; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ScrollView = (function (_View) {
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

		_this.y.container.drawEvent.on((function (e) {
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
		}));

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

						gridService.invalidate('scroll.view').then((function () {
							var total = model.data().rows.length;
							model.pagination({
								count: total
							}, {
								source: 'scroll.view',
								behavior: 'core'
							});

							d.resolve(total);
						}));
					};

					break;
				}
			default:
				_this.using(model.paginationChanged.watch((function () {
					_this.y.container.reset();
				})));
		}

		_this.using(model.scrollChanged.watch((function (e) {
			if (e.hasChanges('left') || e.hasChanges('top')) {
				_this.invalidate();
			}
		})));
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
})(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]);

/***/ }),
/* 459 */
/***/ (function(module, exports) {

module.exports = "<q-grid-core-table *ngIf=\"visibility.pin.left\"\r\n\t\t\t\t\tpin=\"left\"\r\n\t\t\t\t\tclass=\"q-grid-table q-grid-table-left layout-column\">\r\n</q-grid-core-table>\r\n<q-grid-core-table class=\"q-grid-table q-grid-table-center layout-column flex\">\r\n</q-grid-core-table>\r\n<q-grid-core-table *ngIf=\"visibility.pin.right\"\r\n\t\t\t\t\tpin=\"right\"\r\n\t\t\t\t\tclass=\"q-grid-table q-grid-table-right layout-column\">\r\n</q-grid-core-table>\r\n"

/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var ToolbarCoreComponent = /** @class */ (function () {
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
            template: __webpack_require__(461)
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ToolbarCoreComponent);
    return ToolbarCoreComponent;
}());
exports.ToolbarCoreComponent = ToolbarCoreComponent;


/***/ }),
/* 461 */
/***/ (function(module, exports) {

module.exports = "<ng-container key=\"{{position}}-toolbar.tpl.html\"></ng-container>\r\n"

/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var event_listener_1 = __webpack_require__(48);
var event_manager_1 = __webpack_require__(73);
var component_1 = __webpack_require__(9);
var path_1 = __webpack_require__(463);
var view_core_service_1 = __webpack_require__(29);
var table_core_service_1 = __webpack_require__(34);
var BodyCoreComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BodyCoreComponent, _super);
    function BodyCoreComponent(element, $view, $table, root) {
        var _this = _super.call(this) || this;
        _this.$view = $view;
        _this.$table = $table;
        _this.root = root;
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
        var pathFinder = new path_1.PathService(this.root.bag.body);
        var cell = pathFinder.cell(e.path);
        if (cell) {
            this.select(cell);
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
        var pathFinder = new path_1.PathService(this.root.bag.body);
        var cell = pathFinder.cell(e.path);
        var editMode = this.model.edit().mode;
        if (selectionState.mode === 'range') {
            if (!editMode) {
                this.rangeStartCell = cell;
                if (this.rangeStartCell) {
                    this.$view.selection.selectRange(this.rangeStartCell, null, 'body');
                }
            }
        }
    };
    BodyCoreComponent.prototype.onMouseMove = function (e) {
        var pathFinder = new path_1.PathService(this.root.bag.body);
        var row = pathFinder.row(e.path);
        if (row) {
            var index_1 = row.index;
            var highlightRow_1 = this.$view.highlight.row;
            if (highlightRow_1.canExecute(index_1)) {
                this.model
                    .highlight()
                    .rows
                    .filter((function (i) { return i !== index_1; }))
                    .forEach((function (i) { return highlightRow_1.execute(i, false); }));
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
            .forEach((function (i) { return highlightRow.execute(i, false); }));
    };
    BodyCoreComponent.prototype.onMouseUp = function () {
        if (this.selection.mode === 'range') {
            this.rangeStartCell = null;
        }
    };
    BodyCoreComponent.prototype.select = function (cell) {
        var selectionState = this.selection;
        if (cell.column.type !== 'select' &&
            (selectionState.area !== 'body' || selectionState.mode === 'range')) {
            return;
        }
        var editMode = this.model.edit().mode;
        switch (selectionState.unit) {
            case 'row': {
                if (cell.column.type === 'select' && cell.column.editorOptions.trigger === 'focus') {
                    var focusState = this.model.focus();
                    if (focusState.rowIndex !== cell.rowIndex || focusState.columnIndex !== cell.columnIndex) {
                        this.$view.selection.toggleRow.execute(cell.row, 'body');
                    }
                }
                else if (!editMode && cell.column.canEdit) {
                    this.$view.selection.toggleRow.execute(cell.row, 'body');
                }
                break;
            }
            case 'column': {
                if (!editMode) {
                    this.$view.selection.toggleColumn.execute(cell.column, 'body');
                }
                break;
            }
            case 'mix': {
                if (cell.column.type === 'row-indicator') {
                    this.$view.selection.toggleCell.execute(cell, 'body');
                }
            }
            default:
                break;
        }
    };
    BodyCoreComponent.prototype.navigate = function (cell) {
        var focus = this.$view.nav.focus;
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
    BodyCoreComponent.prototype.columnId = function (index, item) {
        return item.model.key;
    };
    BodyCoreComponent.prototype.rowId = function (index) {
        return index;
    };
    BodyCoreComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'tbody[q-grid-core-body]',
            template: __webpack_require__(465)
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef,
            view_core_service_1.ViewCoreService,
            table_core_service_1.TableCoreService,
            component_1.RootService])
    ], BodyCoreComponent);
    return BodyCoreComponent;
}(component_1.NgComponent));
exports.BodyCoreComponent = BodyCoreComponent;


/***/ }),
/* 463 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__path_service__ = __webpack_require__(464);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PathService", (function() { return __WEBPACK_IMPORTED_MODULE_0__path_service__["a"]; }));


/***/ }),
/* 464 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return PathService; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PathService = (function () {
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
						var model = this.bag.findModel(node);
						if (!model) {
							new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('path.find', 'Can\'t find model for ' + node.nodeName);
						}

						return model;
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
						var model = this.bag.findModel(node);
						if (!model) {
							new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('path.find', 'Can\'t find model for ' + node.nodeName);
						}

						return model;
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
})();

/***/ }),
/* 465 */
/***/ (function(module, exports) {

module.exports = "<tr *ngFor=\"let $row of $view.body.rows; trackBy: rowId; let $rowIndex = index\"\r\n\t [q-grid-core-tr]=\"$row\"\r\n\t [q-grid-core-row-index]=\"$rowIndex\"\r\n\t q-grid-core-source=\"body\">\r\n\t<td *ngFor=\"let $column of $view.body.render.columns($row, $table.pin); trackBy: columnId\">\r\n\t\t<ng-container [q-grid-core-td]=\"$column\">\r\n\t\t</ng-container>\r\n\t</td>\r\n</tr>\r\n"

/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var definition_1 = __webpack_require__(27);
var view_core_service_1 = __webpack_require__(29);
var table_core_service_1 = __webpack_require__(34);
var component_1 = __webpack_require__(9);
var cell_1 = __webpack_require__(125);
var infrastructure_1 = __webpack_require__(3);
var column_view_1 = __webpack_require__(58);
var tr_core_directive_1 = __webpack_require__(82);
var TdCoreDirective = /** @class */ (function () {
    function TdCoreDirective($view, root, viewContainerRef, cellService, table, tr, element) {
        this.$view = $view;
        this.root = root;
        this.viewContainerRef = viewContainerRef;
        this.cellService = cellService;
        this.table = table;
        this.tr = tr;
        this.element = null;
        this.$implicit = this;
        this.element = element.nativeElement.parentNode;
    }
    TdCoreDirective.prototype.ngOnInit = function () {
        var column = this.column;
        var element = this.element;
        this.root.bag.body.addCell(this);
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
                throw new infrastructure_1.AppError('td.core', "Invalid mode " + value);
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
            return this.columnView.model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdCoreDirective.prototype, "columnIndex", {
        get: function () {
            return this.columnView.index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdCoreDirective.prototype, "row", {
        get: function () {
            return this.tr.model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdCoreDirective.prototype, "rowIndex", {
        get: function () {
            return this.tr.index;
        },
        enumerable: true,
        configurable: true
    });
    TdCoreDirective.prototype.ngOnDestroy = function () {
        this.root.bag.body.deleteCell(this);
    };
    tslib_1.__decorate([
        core_1.Input('q-grid-core-td'),
        tslib_1.__metadata("design:type", column_view_1.ColumnView)
    ], TdCoreDirective.prototype, "columnView", void 0);
    TdCoreDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-core-td]',
        }),
        tslib_1.__metadata("design:paramtypes", [view_core_service_1.ViewCoreService,
            component_1.RootService,
            core_1.ViewContainerRef,
            cell_1.CellService,
            table_core_service_1.TableCoreService,
            tr_core_directive_1.TrCoreDirective,
            core_1.ElementRef])
    ], TdCoreDirective);
    return TdCoreDirective;
}());
exports.TdCoreDirective = TdCoreDirective;


/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var view_core_service_1 = __webpack_require__(29);
var table_core_service_1 = __webpack_require__(34);
var HeadCoreComponent = /** @class */ (function () {
    function HeadCoreComponent($view, $table) {
        this.$view = $view;
        this.$table = $table;
    }
    HeadCoreComponent.prototype.columnId = function (index, item) {
        return item.model.key;
    };
    HeadCoreComponent.prototype.rowId = function (index) {
        return index;
    };
    HeadCoreComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'thead[q-grid-core-head]',
            template: __webpack_require__(468)
        }),
        tslib_1.__metadata("design:paramtypes", [view_core_service_1.ViewCoreService,
            table_core_service_1.TableCoreService])
    ], HeadCoreComponent);
    return HeadCoreComponent;
}());
exports.HeadCoreComponent = HeadCoreComponent;


/***/ }),
/* 468 */
/***/ (function(module, exports) {

module.exports = "<tr *ngFor=\"let $row of $view.head.rows; trackBy: rowId; let $rowIndex = index\"\r\n\t [q-grid-core-tr]=\"$row\"\r\n\t [q-grid-core-row-index]=\"$rowIndex\"\t \r\n\t q-grid-core-source=\"head\">\r\n\t<th *ngFor=\"let $column of $view.head.columns($row, $table.pin); trackBy: columnId; let $columnIndex = index\"\r\n\t\t (mouseenter)=\"$view.highlight.column.execute($column.model, true)\"\r\n\t\t (mouseleave)=\"$view.highlight.column.execute($column.model, false)\"\r\n\t\t [attr.rowspan]=\"$column.rowspan\"\r\n\t\t [attr.colspan]=\"$column.colspan\"\r\n\t\t [q-grid-drag]=\"$view.head.transfer($column.model)\"\r\n\t\t [q-grid-drop]=\"$view.head.transfer($column.model)\"\r\n\t\t (q-grid-on-drop)=\"$view.head.drop.execute($event)\"\r\n\t\t [q-grid-can-drop]=\"$view.head.drop.canExecute\"\r\n\t\t [q-grid-can-drag]=\"$view.head.drag.canExecute\"\r\n\t\t [q-grid-resize]=\"$column.model.key\"\r\n\t\t q-grid-resize-path=\"columns\"\r\n\t\t [q-grid-can-resize]=\"$view.head.resize.canExecute\">\r\n\t\t<ng-container [q-grid-core-th]=\"$column\">\r\n\t\t</ng-container>\r\n\t</th>\r\n</tr>\r\n"

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var definition_1 = __webpack_require__(27);
var component_1 = __webpack_require__(9);
var column_view_1 = __webpack_require__(58);
var table_core_service_1 = __webpack_require__(34);
var cell_service_1 = __webpack_require__(126);
var view_core_service_1 = __webpack_require__(29);
var tr_core_directive_1 = __webpack_require__(82);
var ThCoreDirective = /** @class */ (function () {
    function ThCoreDirective($view, root, viewContainerRef, cellService, table, tr, element) {
        this.$view = $view;
        this.root = root;
        this.viewContainerRef = viewContainerRef;
        this.cellService = cellService;
        this.table = table;
        this.tr = tr;
        this.element = null;
        this.$implicit = this;
        this.element = element.nativeElement.parentNode;
    }
    ThCoreDirective.prototype.ngOnInit = function () {
        var column = this.column;
        var element = this.element;
        this.root.bag.head.addCell(this);
        element.classList.add(definition_1.GRID_PREFIX + "-" + column.key);
        element.classList.add(definition_1.GRID_PREFIX + "-" + column.type);
        if (column.editor) {
            element.classList.add(definition_1.GRID_PREFIX + "-" + column.editor);
        }
        var link = this.cellService.build('head', this.column, 'view');
        link(this.viewContainerRef, this);
    };
    Object.defineProperty(ThCoreDirective.prototype, "column", {
        get: function () {
            return this.columnView.model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThCoreDirective.prototype, "columnIndex", {
        get: function () {
            return this.columnView.index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThCoreDirective.prototype, "row", {
        get: function () {
            return this.tr.model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThCoreDirective.prototype, "rowIndex", {
        get: function () {
            return this.tr.index;
        },
        enumerable: true,
        configurable: true
    });
    ThCoreDirective.prototype.ngOnDestroy = function () {
        this.root.bag.head.deleteCell(this);
    };
    tslib_1.__decorate([
        core_1.Input('q-grid-core-th'),
        tslib_1.__metadata("design:type", column_view_1.ColumnView)
    ], ThCoreDirective.prototype, "columnView", void 0);
    ThCoreDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-core-th]'
        }),
        tslib_1.__metadata("design:paramtypes", [view_core_service_1.ViewCoreService,
            component_1.RootService,
            core_1.ViewContainerRef,
            cell_service_1.CellService,
            table_core_service_1.TableCoreService,
            tr_core_directive_1.TrCoreDirective,
            core_1.ElementRef])
    ], ThCoreDirective);
    return ThCoreDirective;
}());
exports.ThCoreDirective = ThCoreDirective;


/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var view_core_service_1 = __webpack_require__(29);
var table_core_service_1 = __webpack_require__(34);
var FootCoreComponent = /** @class */ (function () {
    function FootCoreComponent($view, $table) {
        this.$view = $view;
        this.$table = $table;
    }
    FootCoreComponent.prototype.columnId = function (index, item) {
        return item.model.key;
    };
    FootCoreComponent.prototype.rowId = function (index) {
        return index;
    };
    FootCoreComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'tfoot[q-grid-core-foot]',
            template: __webpack_require__(471)
        }),
        tslib_1.__metadata("design:paramtypes", [view_core_service_1.ViewCoreService, table_core_service_1.TableCoreService])
    ], FootCoreComponent);
    return FootCoreComponent;
}());
exports.FootCoreComponent = FootCoreComponent;


/***/ }),
/* 471 */
/***/ (function(module, exports) {

module.exports = "<tr *ngFor=\"let $row of $view.foot.rows; trackBy: rowId; let $rowIndex = index\"\r\n\t [q-grid-core-tr]=\"$row\"\r\n\t [q-grid-core-row-index]=\"$rowIndex\"\r\n\t q-grid-core-source=\"foot\">\r\n\t<td *ngFor=\"let $column of $view.foot.columns($row, $table.pin); trackBy: columnId; let $columnIndex = index\"\r\n\t\t [attr.rowspan]=\"$column.rowspan\"\r\n\t\t [attr.colspan]=\"$column.colspan\">\r\n\t\t<ng-container [q-grid-core-tf]=\"$column\">\r\n\t\t</ng-container>\r\n\t</td>\r\n</tr>\r\n"

/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var definition_1 = __webpack_require__(27);
var view_core_service_1 = __webpack_require__(29);
var component_1 = __webpack_require__(9);
var cell_service_1 = __webpack_require__(126);
var table_core_service_1 = __webpack_require__(34);
var column_view_1 = __webpack_require__(58);
var tr_core_directive_1 = __webpack_require__(82);
var TfCoreDirective = /** @class */ (function () {
    function TfCoreDirective($view, root, cellService, viewContainerRef, table, tr, element) {
        this.$view = $view;
        this.root = root;
        this.cellService = cellService;
        this.viewContainerRef = viewContainerRef;
        this.table = table;
        this.tr = tr;
        this.element = null;
        this.$implicit = this;
        this.element = element.nativeElement.parentNode;
    }
    TfCoreDirective.prototype.ngOnInit = function () {
        var column = this.column;
        var element = this.element;
        this.root.bag.foot.addCell(this);
        element.classList.add(definition_1.GRID_PREFIX + "-" + column.key);
        element.classList.add(definition_1.GRID_PREFIX + "-" + column.type);
        if (column.editor) {
            element.classList.add(definition_1.GRID_PREFIX + "-" + column.editor);
        }
        var link = this.cellService.build('foot', this.column);
        link(this.viewContainerRef, this);
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
            return this.columnView.model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TfCoreDirective.prototype, "columnIndex", {
        get: function () {
            return this.columnView.index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TfCoreDirective.prototype, "row", {
        get: function () {
            return this.tr.model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TfCoreDirective.prototype, "rowIndex", {
        get: function () {
            return this.tr.index;
        },
        enumerable: true,
        configurable: true
    });
    TfCoreDirective.prototype.ngOnDestroy = function () {
        this.root.bag.foot.deleteCell(this);
    };
    tslib_1.__decorate([
        core_1.Input('q-grid-core-tf'),
        tslib_1.__metadata("design:type", column_view_1.ColumnView)
    ], TfCoreDirective.prototype, "columnView", void 0);
    TfCoreDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-core-tf]'
        }),
        tslib_1.__metadata("design:paramtypes", [view_core_service_1.ViewCoreService,
            component_1.RootService,
            cell_service_1.CellService,
            core_1.ViewContainerRef,
            table_core_service_1.TableCoreService,
            tr_core_directive_1.TrCoreDirective,
            core_1.ElementRef])
    ], TfCoreDirective);
    return TfCoreDirective;
}());
exports.TfCoreDirective = TfCoreDirective;


/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var root_service_1 = __webpack_require__(33);
var table_core_service_1 = __webpack_require__(34);
var MarkupDirective = /** @class */ (function () {
    function MarkupDirective(root, element, table) {
        this.root = root;
        this.element = element;
        this.table = table;
        this.name = '';
    }
    MarkupDirective.prototype.ngOnInit = function () {
        this.root.markup[this.getName()] = this.element.nativeElement;
    };
    MarkupDirective.prototype.ngOnDestroy = function () {
        delete this.root.markup[this.getName()];
    };
    MarkupDirective.prototype.getName = function () {
        if (this.table && this.table.pin) {
            return this.name + "-" + this.table.pin;
        }
        return this.name;
    };
    tslib_1.__decorate([
        core_1.Input('q-grid-markup'),
        tslib_1.__metadata("design:type", Object)
    ], MarkupDirective.prototype, "name", void 0);
    MarkupDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-markup]'
        }),
        tslib_1.__metadata("design:paramtypes", [root_service_1.RootService,
            core_1.ElementRef,
            table_core_service_1.TableCoreService])
    ], MarkupDirective);
    return MarkupDirective;
}());
exports.MarkupDirective = MarkupDirective;


/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var raise_1 = __webpack_require__(475);
var dnd_1 = __webpack_require__(228);
var focus_1 = __webpack_require__(230);
var resize_1 = __webpack_require__(231);
var layout_1 = __webpack_require__(487);
var CommonModule = /** @class */ (function () {
    function CommonModule() {
    }
    CommonModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [],
            exports: [
                dnd_1.DndModule,
                focus_1.FocusModule,
                resize_1.ResizeModule,
                layout_1.LayoutModule,
                raise_1.RaiseModule
            ],
            imports: [],
            providers: []
        })
    ], CommonModule);
    return CommonModule;
}());
exports.CommonModule = CommonModule;


/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(476), exports);


/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var raise_directive_1 = __webpack_require__(477);
var RaiseModule = /** @class */ (function () {
    function RaiseModule() {
    }
    RaiseModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                raise_directive_1.RaiseDirective
            ],
            exports: [
                raise_directive_1.RaiseDirective
            ],
            imports: [],
            providers: []
        })
    ], RaiseModule);
    return RaiseModule;
}());
exports.RaiseModule = RaiseModule;


/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var RaiseDirective = /** @class */ (function () {
    function RaiseDirective(element) {
        this.element = element;
        this.type = 'click';
    }
    RaiseDirective.prototype.ngAfterViewInit = function () {
        var event = new Event(this.type);
        this.element.nativeElement.dispatchEvent(event);
    };
    tslib_1.__decorate([
        core_1.Input('q-grid-raise'),
        tslib_1.__metadata("design:type", Object)
    ], RaiseDirective.prototype, "type", void 0);
    RaiseDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-raise]'
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
    ], RaiseDirective);
    return RaiseDirective;
}());
exports.RaiseDirective = RaiseDirective;


/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var drag_directive_1 = __webpack_require__(479);
var drop_directive_1 = __webpack_require__(480);
var DndModule = /** @class */ (function () {
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
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var infrastructure_1 = __webpack_require__(3);
var event_listener_1 = __webpack_require__(48);
var drag_service_1 = __webpack_require__(229);
var definition_1 = __webpack_require__(27);
var component_1 = __webpack_require__(9);
var DragDirective = /** @class */ (function () {
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
        return { source: source, target: null };
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
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var infrastructure_1 = __webpack_require__(3);
var event_listener_1 = __webpack_require__(48);
var drag_service_1 = __webpack_require__(229);
var definition_1 = __webpack_require__(27);
var DropDirective = /** @class */ (function () {
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
        return { source: source, target: target };
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
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var focus_directive_1 = __webpack_require__(482);
var autofocus_directive_1 = __webpack_require__(483);
var blur_directive_1 = __webpack_require__(484);
var FocusModule = /** @class */ (function () {
    function FocusModule() {
    }
    FocusModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                focus_directive_1.FocusDirective,
                autofocus_directive_1.AutoFocusDirective,
                blur_directive_1.BlurDirective
            ],
            exports: [
                focus_directive_1.FocusDirective,
                autofocus_directive_1.AutoFocusDirective,
                blur_directive_1.BlurDirective
            ],
            imports: [],
            providers: []
        })
    ], FocusModule);
    return FocusModule;
}());
exports.FocusModule = FocusModule;


/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var infrastructure_1 = __webpack_require__(3);
var FocusDirective = /** @class */ (function () {
    function FocusDirective(elementRef) {
        this.elementRef = elementRef;
    }
    FocusDirective.prototype.ngAfterViewInit = function () {
        var element = this.selector
            ? this.elementRef.nativeElement.querySelector(this.selector)
            : this.elementRef.nativeElement;
        if (!element) {
            throw new infrastructure_1.AppError('focus.directive', "Element " + this.selector + " is not found");
        }
        // we need a small timeout to wait, for example, position directive
        // in other case it will scroll to element before layout
        setTimeout((function () { return element.focus(); }), 10);
    };
    tslib_1.__decorate([
        core_1.Input('q-grid-focus'),
        tslib_1.__metadata("design:type", Object)
    ], FocusDirective.prototype, "selector", void 0);
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
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var component_1 = __webpack_require__(9);
var AutoFocusDirective = /** @class */ (function () {
    function AutoFocusDirective(root, element) {
        this.root = root;
        this.element = element;
        this.delay = 100;
        this.isHandled = false;
    }
    AutoFocusDirective.prototype.ngDoCheck = function () {
        if (this.isHandled) {
            return;
        }
        if (this.table.body.rowCount(0)) {
            var key = Object.keys(this.markup).find((function (p) {
                return p.startsWith('body');
            }));
            var element = this.markup[key];
            if (element) {
                this.element.nativeElement.focus();
            }
            var focusIndex = this.table.data
                .columns()
                .findIndex((function (c) { return c.canFocus; }));
            this.model.focus({
                rowIndex: 0,
                columnIndex: focusIndex
            });
            this.isHandled = true;
        }
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
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var utility_1 = __webpack_require__(4);
var BlurDirective = /** @class */ (function () {
    function BlurDirective(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.onBlur = utility_1.noop;
        this.selector = 'input';
    }
    BlurDirective.prototype.ngOnInit = function () {
        var element = this.renderer.selectRootElement(this.selector);
        this.renderer.listen(element, 'blur', this.onBlur);
    };
    tslib_1.__decorate([
        core_1.Input('q-grid-on-blur'),
        tslib_1.__metadata("design:type", Object)
    ], BlurDirective.prototype, "onBlur", void 0);
    tslib_1.__decorate([
        core_1.Input('q-grid-on-blur-selector'),
        tslib_1.__metadata("design:type", Object)
    ], BlurDirective.prototype, "selector", void 0);
    BlurDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-on-blur]'
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.Renderer2, core_1.ElementRef])
    ], BlurDirective);
    return BlurDirective;
}());
exports.BlurDirective = BlurDirective;


/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var resize_directive_1 = __webpack_require__(486);
var ResizeModule = /** @class */ (function () {
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
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var Infrastructure = __webpack_require__(3);
var definition_1 = __webpack_require__(27);
var component_1 = __webpack_require__(9);
var utility_1 = __webpack_require__(4);
var platform_browser_1 = __webpack_require__(70);
var ResizeDirective = /** @class */ (function (_super) {
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
        return { source: source, target: null };
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
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(488), exports);


/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var position_directive_1 = __webpack_require__(489);
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                position_directive_1.PositionDirective
            ],
            exports: [
                position_directive_1.PositionDirective
            ],
            imports: [],
            providers: []
        })
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;


/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var utility_1 = __webpack_require__(4);
var component_1 = __webpack_require__(9);
var PositionDirective = /** @class */ (function () {
    function PositionDirective(element, root) {
        this.root = root;
        this.target = '';
        this.element = element.nativeElement;
        this.opacity = this.element.style.opacity;
        this.element.style.opacity = '0';
    }
    PositionDirective.prototype.ngAfterViewInit = function () {
        var targetName = this.target.toLowerCase();
        var node = this.element.parentNode;
        while (node) {
            if (node.nodeName.toLowerCase() === targetName) {
                this.layout(node, this.element);
                break;
            }
            node = node.parentNode;
        }
        this.element.style.opacity = this.opacity;
    };
    PositionDirective.prototype.layout = function (target, source) {
        var tr = target.getBoundingClientRect();
        var sr = source.getBoundingClientRect();
        var vr = this.root.table.view.rect();
        var intersections = [];
        intersections.push(this.intersection(vr, {
            index: 0,
            top: tr.top,
            right: tr.left + sr.width,
            bottom: tr.top + sr.height,
            left: tr.left
        }));
        intersections.push(this.intersection(vr, {
            index: 1,
            top: tr.top,
            right: tr.right,
            bottom: tr.top + sr.height,
            left: tr.right - sr.width
        }));
        intersections.push(this.intersection(vr, {
            index: 2,
            top: tr.bottom - sr.height,
            right: tr.left + sr.width,
            bottom: tr.bottom,
            left: tr.left
        }));
        intersections.push(this.intersection(vr, {
            index: 3,
            top: tr.bottom - sr.height,
            right: tr.right,
            bottom: tr.bottom,
            left: tr.right - sr.width
        }));
        var intersection = utility_1.max(intersections, (function (i) { return i.area; }));
        var rect = intersection.b;
        source.style.left = (rect.left - tr.left) + 'px';
        source.style.top = (rect.top - tr.top) + 'px';
    };
    PositionDirective.prototype.intersection = function (a, b) {
        var xo = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
        var yo = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
        var area = xo * yo;
        return { area: area, a: a, b: b };
    };
    tslib_1.__decorate([
        core_1.Input('q-grid-position'),
        tslib_1.__metadata("design:type", Object)
    ], PositionDirective.prototype, "target", void 0);
    PositionDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-position]'
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef, component_1.RootService])
    ], PositionDirective);
    return PositionDirective;
}());
exports.PositionDirective = PositionDirective;


/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var component_1 = __webpack_require__(9);
var table_core_service_1 = __webpack_require__(34);
var TableCoreComponent = /** @class */ (function () {
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
            template: __webpack_require__(491),
            providers: [
                table_core_service_1.TableCoreService
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [component_1.RootService, table_core_service_1.TableCoreService])
    ], TableCoreComponent);
    return TableCoreComponent;
}());
exports.TableCoreComponent = TableCoreComponent;


/***/ }),
/* 491 */
/***/ (function(module, exports) {

module.exports = "<table q-grid-markup=\"table\">\r\n\t<thead *ngIf=\"visibility.head\"\r\n\t\t\t q-grid-core-head\r\n\t\t\t q-grid-markup=\"head\"\r\n\t\t\t q-grid-animate=\"false\"\r\n\t\t\t q-grid-core-head>\r\n\t</thead>\r\n\t<tbody *ngIf=\"visibility.body\"\r\n\t\t\t q-grid-markup=\"body\"\r\n\t\t\t q-grid-animate=\"false\"\r\n\t\t\t vscroll\r\n\t\t\t vscroll-port-y=\"$view.scroll.y\"\r\n\t\t\t q-grid-core-body\r\n\t\t\t tabindex=\"0\">\r\n\t</tbody>\r\n\t<tfoot *ngIf=\"visibility.foot\"\r\n\t\t\t q-grid-markup=\"foot\"\r\n\t\t\t q-grid-animate=\"false\"\r\n\t\t\t q-grid-core-foot>\r\n\t</tfoot>\r\n</table>\r\n"

/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(70);
var forms_1 = __webpack_require__(493);
var theme_service_1 = __webpack_require__(233);
var theme_component_1 = __webpack_require__(494);
var plugins_1 = __webpack_require__(234);
var template_1 = __webpack_require__(25);
var common_1 = __webpack_require__(127);
var material_1 = __webpack_require__(570);
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                theme_component_1.ThemeComponent
            ],
            exports: [
                theme_component_1.ThemeComponent,
                plugins_1.PluginModule
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
                material_1.MdChipsModule,
                material_1.MdDialogModule,
                material_1.MdMenuModule,
                material_1.MdCardModule
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
/* 493 */,
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var templates_1 = __webpack_require__(495);
// Do not delete this code
// its required for template recompilation on changes
var debug = false;
if (debug) {
    console.log(templates_1.template);
}
var ThemeComponent = /** @class */ (function () {
    function ThemeComponent() {
    }
    ThemeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-theme',
            template: __webpack_require__(534)
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ThemeComponent);
    return ThemeComponent;
}());
exports.ThemeComponent = ThemeComponent;


/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var templates = [
    __webpack_require__(496),
    __webpack_require__(497),
    __webpack_require__(498),
    __webpack_require__(499),
    __webpack_require__(500),
    __webpack_require__(501),
    __webpack_require__(502),
    __webpack_require__(503),
    __webpack_require__(504),
    __webpack_require__(505),
    __webpack_require__(506),
    __webpack_require__(507),
    __webpack_require__(508),
    __webpack_require__(509),
    __webpack_require__(510),
    __webpack_require__(511),
    __webpack_require__(512),
    __webpack_require__(513),
    __webpack_require__(514),
    __webpack_require__(515),
    __webpack_require__(516),
    __webpack_require__(517),
    __webpack_require__(518),
    __webpack_require__(519),
    __webpack_require__(520),
    __webpack_require__(521),
    __webpack_require__(522),
    __webpack_require__(523),
    __webpack_require__(524),
    __webpack_require__(525),
    __webpack_require__(526),
    __webpack_require__(527),
    __webpack_require__(528),
    __webpack_require__(529),
    __webpack_require__(530),
    __webpack_require__(531),
    __webpack_require__(532),
    __webpack_require__(533)
];
exports.template = templates.join('\n\n');


/***/ }),
/* 496 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"head-cell-text.tpl.html\" let-$cell let-$view=\"$view\">\r\n\t<div (click)=\"$view.sort.toggle.execute($cell.column)\"\r\n\t\t  (mouseover)=\"$view.sort.hover = true\"\r\n\t\t  (mouseleave)=\"$view.sort.hover = false\">\r\n\t\t<div class=\"q-grid-sort\"\r\n\t\t\t  [ngClass]=\"{'q-grid-active': $view.sort.order($cell.column) >= 0}\"\r\n\t\t\t  *ngIf=\"$cell.column.canSort\"\r\n\t\t\t  [ngSwitch]=\"$view.sort.direction($cell.column)\">\r\n\t\t\t<md-icon class=\"q-grid-asc\" *ngSwitchCase=\"'asc'\">arrow_downward</md-icon>\r\n\t\t\t<md-icon class=\"q-grid-desc\" *ngSwitchCase=\"'desc'\">arrow_upward</md-icon>\r\n\t\t\t<ng-container *ngSwitchDefault>\r\n\t\t\t\t<md-icon *ngIf=\"$view.sort.hover\">arrow_downward</md-icon>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t\t<label [mdTooltip]=\"$cell.column.title\">\r\n\t\t\t{{$cell.column.title}}\r\n\t\t</label>\r\n\t</div>\r\n\t<!--<q-grid:column-filter ng-if=\"$cell.column.canFilter\"-->\r\n\t<!--class=\"q-grid-column-filter\"-->\r\n\t<!--key=\"$cell.column.key\"-->\r\n\t<!--title=\"{{$cell.column.title}}\"-->\r\n\t<!--ng-class=\"{'q-grid-active': $view.filter.has($cell.column)}\">-->\r\n\t<!--</q-grid:column-filter>-->\r\n</ng-template>\r\n"

/***/ }),
/* 497 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"head-cell-select.tpl.html\" let-$view=\"$view\">\r\n\t<div ngSwitch=\"$view.selection.mode\">\r\n\t\t<div *ngSwitchCase=\"'single'\" ngSwitch=\"!!$view.selection.items.length\">\r\n\t\t\t<md-icon *ngSwitchCase=\"true\">check</md-icon>\r\n\t\t\t<md-icon *ngSwitchDefault>remove</md-icon>\r\n\t\t</div>\r\n\t\t<div *ngSwitchDefault>\r\n\t\t\t<md-checkbox [indeterminate]=\"$view.selection.isIndeterminate()\"\r\n\t\t\t\t\t\t [checked]=\"$view.selection.state()\"\r\n\t\t\t\t\t\t [disabled]=\"!$view.selection.toggleRow.canExecute()\"\r\n\t\t\t\t\t\t (change)=\"$view.selection.toggleRow.execute()\"\r\n\t\t\t\t\t\t tabindex=\"-1\"\r\n\t\t\t\t\t\t aria-label=\"Selection\">\r\n\t\t\t</md-checkbox>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 498 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-text.tpl.html' let-$cell>\r\n\t<span>{{$cell.label}}</span>\r\n</ng-template>\r\n"

/***/ }),
/* 499 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-array.tpl.html' let-$cell>\r\n\t<ul>\r\n\t\t<li *ngFor=\"let item of $cell.value\">{{item}}</li>\r\n\t</ul>\r\n</ng-template>"

/***/ }),
/* 500 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-bool.tpl.html' let-$cell>\r\n\t<md-icon *ngIf=\"$cell.value\">check</md-icon>\r\n</ng-template>\r\n"

/***/ }),
/* 501 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-email.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<a [href]=\"'mailto:$cell.value'\" (bind)=\"$cell.label || $cell.value\">\r\n\t\t{{$cell.value}}</a>\r\n\t<button class=\"q-grid-email-edit\"\r\n\t        color=\"primary\"\r\n\t\t\tmdTooltip='Edit Email'\r\n\t\t\t[mdTooltipPosition]=\"'before'\"\r\n\t\t\taria-label=\"'email'\"\r\n\t\t\t(disabled)=\"!$view.edit.cell.enter.canExecute($cell)\"\r\n\t\t\t(click)=\"$view.edit.cell.enter.execute($cell)\">\r\n\t\t<md-icon>edit</md-icon>\r\n\t</button>\r\n</ng-template>\r\n"

/***/ }),
/* 502 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-image.tpl.html' let-$cell>\r\n\t<img *ngIf=\"$cell.value\" [src]=\"$cell.value\"/>\r\n\t<md-icon *ngIf=\"!$cell.value\">account_circle</md-icon>\r\n</ng-template>\r\n"

/***/ }),
/* 503 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-select.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div [ngSwitch]=\"$view.selection.state($cell.row)\">\r\n\t\t<div class=\"q-grid-checked\" *ngSwitchCase=\"true\">\r\n\t\t\t<md-icon>check</md-icon>\r\n\t\t</div>\r\n\t\t<div class=\"q-grid-unchecked\" *ngSwitchCase=\"false\">\r\n\t\t</div>\r\n\t\t<div class=\"q-grid-indeterminate\" *ngIf=\"$view.selection.isIndeterminate($row)\">\r\n\t\t\t<md-icon>remove</md-icon>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 504 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-group.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div [ngStyle]=\"{'padding-left': $view.group.offset($cell.row) + 'px'}\">\r\n\t\t<button (mouseup)=\"$view.group.toggleStatus.execute($cell.row)\"\r\n\t\t\t\t  *ngIf=\"$view.group.toggleStatus.canExecute($cell.row)\"\r\n\t\t\t\t  [ngSwitch]=\"$view.group.status($cell.row)\"\r\n\t\t\t\t  tabindex=\"-1\"\r\n\t\t\t\t  md-icon-button>\r\n\t\t\t<md-icon *ngSwitchCase=\"'expand'\">arrow_drop_down</md-icon>\r\n\t\t\t<md-icon class=\"q-grid-arrow-right\" *ngSwitchCase=\"'collapse'\">arrow_drop_up</md-icon>\r\n\t\t</button>\r\n\t\t<span>{{$view.group.value($cell.row)}}</span>\r\n\t\t<span *ngIf=\"$view.group.toggleStatus.canExecute($cell.row)\">({{$view.group.count($cell.row)}})</span>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 505 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-currency.tpl.html' let-$cell>\r\n\t<span>{{$cell.value | currency:$cell.column.code:3}}</span>\r\n</ng-template>\r\n"

/***/ }),
/* 506 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-date.tpl.html' let-$cell>\r\n\t<span>{{$cell.label | date: $cell.column.format || 'yyyy/MM/dd'}}</span>\r\n</ng-template>\r\n"

/***/ }),
/* 507 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"body-cell-row-indicator.tpl.html\">\r\n</ng-template>\r\n"

/***/ }),
/* 508 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-row-options.tpl.html'>\r\n    <md-icon>more_vert</md-icon>\r\n</ng-template>"

/***/ }),
/* 509 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-date.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-date\" q-grid-position=\"td\">\r\n\t\t<h2 class=\"md-title\">Edit {{$cell.column.title}}</h2>\r\n\t\t<md-form-field>\r\n\t\t\t<input q-grid-focus\r\n\t\t\t \t\tmdInput [mdDatepicker]=\"picker\"\r\n\t\t\t  \t\t[(ngModel)]=\"$view.edit.cell.value\" \r\n\t\t\t  \t\tplaceholder=\"Choose a {{$cell.column.title}}\"\r\n\t\t\t/>\r\n\t\t\t<md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\r\n\t\t\t<md-datepicker #picker></md-datepicker>\r\n\t\t</md-form-field>\r\n\t\t<div class=\"q-grid-actions\">\r\n\t\t\t<button md-button color=\"primary\" (click)=\"$view.edit.cell.commit.execute($cell, $event)\">Save</button>\r\n\t\t\t<button md-button (click)=\"$view.edit.cell.cancel.execute($cell, $event)\">Cancel</button>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template>"

/***/ }),
/* 510 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-array.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-array\" q-grid-position=\"td\">\r\n\t\t<h2 class=\"md-title\">Edit {{$cell.column.title}}</h2>\r\n\t\t<div class=\"q-grid-array-view\">\r\n\t\t\t<md-form-field class=\"demo-chip-list\">\r\n\t\t\t\t<md-chip-list mdPrefix #chipList>\r\n\t\t\t\t\t<md-chip *ngFor=\"let value of $view.edit.cell.value;let $index = index\" \r\n\t\t\t\t\t\t\tselectable=\"true\" \r\n\t\t\t\t\t\t\tremovable=\"true\" \r\n\t\t\t\t\t\t\t(remove)=\"$view.edit.cell.value.splice($index, 1)\">\r\n\t\t\t\t\t\t{{value}}\r\n\t\t\t\t\t\t<md-icon mdChipRemove>cancel</md-icon>\r\n\t\t\t\t\t</md-chip>\r\n\t\t\t\t</md-chip-list>\r\n\t\t\t\t<input mdInput\r\n\t\t\t\t\t   q-grid-focus\r\n\t\t\t\t\t   [mdChipInputFor]=\"chipList\" \t\t\t\t\t\r\n\t\t\t\t\t   placeholder=\"New {{$cell.column.title}}...\" \r\n\t\t\t\t\t   mdChipInputSeparatorKeyCodes=\"[13]\"\r\n\t\t\t\t\t   mdChipInputAddOnBlur=\"true\" \r\n\t\t\t\t\t   (mdChipInputTokenEnd)=\"$event.value.trim() && (($view.edit.cell.value.push($event.value.trim()) || true) && $event.input.value = '')\" />\r\n\t\t\t</md-form-field>\r\n\t\t</div>\r\n\t\t<div class=\"q-grid-actions\">\r\n\t\t\t<button md-button color=\"primary\" (click)=\"$view.edit.cell.commit.execute($cell, $event)\">Save</button>\r\n\t\t\t<button md-button (click)=\"$view.edit.cell.cancel.execute($cell, $event)\">Cancel</button>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template>"

/***/ }),
/* 511 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-text.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-text\" q-grid-position=\"td\">\r\n\t\t<md-form-field>\r\n\t\t\t<input mdInput\r\n\t\t\t\t\t #input\r\n\t\t\t\t\t q-grid-focus\r\n\t\t\t\t\t maxlength=\"{{$cell.column.maxLength}}\"\r\n\t\t\t\t\t [(ngModel)]=\"$view.edit.cell.value\"\r\n\t\t\t\t\t (blur)=\"$view.edit.cell.commit.execute($cell)\">\r\n\t\t\t<md-hint align=\"end\">{{input.value.length}} / {{$cell.column.maxLength}}</md-hint>\r\n\t\t</md-form-field>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 512 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-dropdown.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-dropdown\">\r\n\t\t<md-select q-grid-focus [(ngModel)]=\"$view.edit.cell.value\" placeholder=\"Select a value\"\r\n\t\t\t\t\t  (onOpen)=\"$view.edit.cell.fetch.busy\"\r\n\t\t\t\t\t  (onClose)=\"$view.edit.cell.cancel.execute($cell)\">\r\n\t\t\t<md-option *ngFor=\"let option of $view.edit.cell.fetch.result\" [value]=\"option\">\r\n\t\t\t\t{{ option }}\r\n\t\t\t</md-option>\r\n\t\t</md-select>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 513 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-email.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-email\" q-grid-position=\"td\">\r\n\t\t<h2>Edit {{$cell.column.title}}</h2>\r\n\t\t<div layout=\"column\" class=\"q-grid-email-fields\" flex>\r\n\t\t\t<md-form-field *ngIf=\"$cell.column.label !== null\">\r\n\t\t\t\t<input mdInput\r\n\t\t\t\t\t\t type=\"text\"\r\n\t\t\t\t\t\t [(ngModel)]=\"$view.edit.cell.label\"\r\n\t\t\t\t\t\t (blur)=\"$view.edit.cell.commit.execute($cell)\"\r\n\t\t\t\t\t\t placeholder=\"Label\">\r\n\t\t\t</md-form-field>\r\n\t\t\t<md-form-field>\r\n\t\t\t\t<input q-grid-focus\r\n\t\t\t\t\t\t mdInput\r\n\t\t\t\t\t\t type=\"email\"\r\n\t\t\t\t\t\t [(ngModel)]=\"$view.edit.cell.value\"\r\n\t\t\t\t\t\t (blur)=\"$view.edit.cell.commit.execute($cell)\"\r\n\t\t\t\t\t\t placeholder=\"Email\">\r\n\t\t\t</md-form-field>\r\n\t\t</div>\r\n\t\t<div class=\"q-grid-actions\">\r\n\t\t\t<button md-button color=\"primary\" (click)=\"$view.edit.cell.commit.execute($cell, $event)\">Save</button>\r\n\t\t\t<button md-button (click)=\"$view.edit.cell.cancel.execute($cell, $event)\">Cancel</button>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 514 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-number.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-number\" q-grid-position=\"td\">\r\n\t\t<md-form-field>\r\n\t\t\t<input mdInput\r\n\t\t\t\t\t type=\"number\"\r\n\t\t\t\t\t #input\r\n\t\t\t\t\t q-grid-focus\r\n\t\t\t\t\t [(ngModel)]=\"$view.edit.cell.value\"\r\n\t\t\t\t\t (blur)=\"$view.edit.cell.commit.execute($cell)\">\r\n\t\t</md-form-field>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 515 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-currency.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-currency\" q-grid-position=\"td\">\r\n\t\t<md-form-field>\r\n\t\t\t<input mdInput\r\n\t\t\t\t\t type=\"number\"\r\n\t\t\t\t\t #input\r\n\t\t\t\t\t q-grid-focus\r\n\t\t\t\t\t [(ngModel)]=\"$view.edit.cell.value\"\r\n\t\t\t\t\t (blur)=\"$view.edit.cell.commit.execute($cell)\">\r\n\t\t</md-form-field>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 516 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-bool.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-bool\">\r\n\t\t<md-checkbox\r\n\t\t\tq-grid-focus=\"input\"\r\n\t\t\t[(ngModel)]=\"$view.edit.cell.value\">\r\n\t\t</md-checkbox>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 517 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-password.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-password\" q-grid-position=\"td\">\r\n\t\t<md-form-field>\r\n\t\t\t<input mdInput\r\n\t\t\t\t\t [type]=\"'password'\"\r\n\t\t\t\t\t q-grid-focus\r\n\t\t\t\t\t (blur)=\"$view.edit.cell.commit.execute($cell)\"\r\n\t\t\t\t\t [(ngModel)]=\"$view.edit.cell.value\">\r\n\t\t</md-form-field>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 518 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-textarea.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor\" q-grid-position=\"td\">\r\n\t\t<md-form-field>\r\n\t\t\t<textarea mdInput\r\n\t\t\t\t\tmdTextareaAutosize\r\n\t\t\t\t\trows=\"10\"\r\n\t\t\t\t\tq-grid-focus\r\n\t\t\t\t\t(blur)=\"$view.edit.cell.commit.execute($cell)\"\r\n\t\t\t\t\t[(ngModel)]=\"$view.edit.cell.value\">\r\n\t\t\t</textarea>\r\n\t\t</md-form-field>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 519 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-select.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<md-checkbox q-grid-focus=\"input\"\r\n\t\t\t\t [indeterminate]=\"$view.selection.isIndeterminate($cell.row)\"\r\n\t\t\t\t [checked]=\"$view.selection.state($cell.row)\"\r\n\t\t\t\t [disabled]=\"!$view.selection.toggleRow.canExecute($cell.row)\"\r\n\t\t\t\t (change)=\"$view.selection.toggleRow.execute($cell.row)\"\r\n\t\t\t\t aria-label=\"Selection\">\r\n\t</md-checkbox>\r\n</ng-template>\r\n"

/***/ }),
/* 520 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='edit-cell-row-options.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<button aria-label=\"Open row menu\"\r\n\t\t\t\tmd-icon-button \r\n\t\t\t\t[mdMenuTriggerFor]=\"menu\"\r\n\t\t\t\t(onMenuClose)=\"$view.edit.cell.cancel.execute($cell, $event, 10)\"\r\n\t\t\t\tq-grid-raise=\"click\">\r\n\t\t<md-icon>more_vert</md-icon>\r\n\t</button>\r\n\t<md-menu #menu=\"mdMenu\">\r\n\t\t<button md-menu-item \r\n\t\t\t\t*ngFor=\"let $action of $cell.column.editorOptions.actions\"\r\n\t\t\t\t(click)=\"$action.command.execute($cell)\" \r\n\t\t\t\t[disabled]=\"!$action.command.canExecute($cell)\">\r\n\t\t\t\t<md-icon>{{$action.icon}}</md-icon>\r\n\t\t\t\t<span>{{$action.title}}</span>\r\n\t\t</button>\r\n\t</md-menu>\r\n</ng-template>"

/***/ }),
/* 521 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='foot-cell-text.tpl.html' let-$cell>\r\n\t<span>{{$cell.value}}</span>\r\n</ng-template>\r\n"

/***/ }),
/* 522 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='foot-cell-currency.tpl.html' let-$cell>\r\n\t<span>{{$cell.value | currency:$cell.column.code:3}}</span>\r\n</ng-template>\r\n"

/***/ }),
/* 523 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"top-toolbar.tpl.html\">\r\n\t<div class=\"layout-row\">\r\n\t\t<div class=\"flex-100\" style=\"padding: 16px 0;\">\r\n\t\t\t<q-grid-title></q-grid-title>\r\n\t\t</div>\r\n\t\t<div class=\"flex-auto layout-row\" style=\"padding: 12px 0;\">\r\n\t\t\t<div class=\"flex-100\">\r\n\t\t\t\t<q-grid-action-bar-core></q-grid-action-bar-core>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex-auto\">\r\n\t\t\t\t<q-grid-popup id=\"q-grid-column-chooser-popup\">\r\n\t\t\t\t\t<ng-template for=\"trigger\" let-$popup>\r\n\t\t\t\t\t\t<button md-icon-button (click)=\"$popup.open({width: 352, height: 652})\" tabindex=\"-1\" [disabled]=\"$popup.isOpened()\">\r\n\t\t\t\t\t\t\t<md-icon>more_vert</md-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template for=\"body\">\r\n\t\t\t\t\t\t<!--TODO: insert here column chooser component-->\r\n\t\t\t\t\t\t<!-- <q-grid-column-chooser></q-grid-column-chooser> -->\r\n\t\t\t\t\t\t<p>Select All</p>\r\n\t\t\t\t\t\t<p>Item 1</p>\r\n\t\t\t\t\t\t<p>Item 2</p>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template for=\"foot\" let-$popup>\r\n\t\t\t\t\t\t<button md-button (click)=\"$popup.close()\">Cancel</button>\r\n\t\t\t\t\t\t<button md-button (click)=\"$popup.close()\">Reset</button>\r\n\t\t\t\t\t\t<button md-button (click)=\"$popup.close()\">Apply</button>\r\n\t\t\t\t\t\t<!--TODO: implement beloow component-->\r\n\t\t\t\t\t\t<!-- <q-grid-column-chooser-actions [popup]=\"$popup\">\r\n\t\t\t\t\t\t\t<ng-template for=\"actions\" let-$columnChooser>\r\n\t\t\t\t\t\t\t\t<button md-button (click)=\"$columnChooser.cancel()\">Cancel</button>\r\n\t\t\t\t\t\t\t\t<button md-button (click)=\"$columnChooser.reset()\">Reset</button>\r\n\t\t\t\t\t\t\t\t<button md-button (click)=\"$columnChooser.submit()\">Apply</button>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</q-grid-column-chooser-actions> -->\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template for=\"head\">\r\n\t\t\t\t\t\tColumn Filter\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</q-grid-popup>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<q-grid-progress></q-grid-progress>\r\n</ng-template>"

/***/ }),
/* 524 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"bottom-toolbar.tpl.html\">\r\n\t<q-grid-pager></q-grid-pager>\r\n</ng-template>\r\n"

/***/ }),
/* 525 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"left-toolbar.tpl.html\">\r\n</ng-template>\r\n"

/***/ }),
/* 526 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"right-toolbar.tpl.html\">\r\n</ng-template>\r\n"

/***/ }),
/* 527 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"plugin-title.tpl.html\" let-$title>\r\n\t<div class=\"q-grid-title\">\r\n\t\t<h3 class=\"mat-card-title\">\r\n\t\t\t{{$title.value}}\r\n\t\t</h3>\r\n\t</div>\r\n</ng-template>"

/***/ }),
/* 528 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"plugin-pager.tpl.html\" let-$pager>\r\n\t<div class=\"q-grid-pager\" [ngSwitch]=\"$pager.scroll.mode\">\r\n\t\t<div *ngSwitchCase=\"'virtual'\">\r\n\t\t\t<label class=\"q-grid-page\" [ngSwitch]=\"$pager.mode\">\r\n\t\t\t\t<span *ngSwitchCase=\"'row'\">{{$pager.from}}-{{$pager.to}} of {{$pager.total}}</span>\r\n\t\t\t\t<span *ngSwitchDefault>{{$pager.current + 1}} of {{$pager.totalPages}}</span>\r\n\t\t\t</label>\r\n\t\t</div>\r\n\t\t<div *ngSwitchDefault>\r\n\t\t\t<label class=\"q-grid-page-size\">Rows per page:</label>\r\n\t\t\t<md-select tabindex=\"-1\"\r\n\t\t\t\t\t\t  aria-label=\"Page Size List\"\r\n\t\t\t\t\t\t  class=\"q-grid-page-size\"\r\n\t\t\t\t\t\t  [(ngModel)]=\"$pager.size\">\r\n\t\t\t\t<md-option *ngFor=\"let size of $pager.sizeList\" [value]=\"size\">{{size}}</md-option>\r\n\t\t\t</md-select>\r\n\t\t\t<label class=\"q-grid-page\" ng-switch=\"::$pager.mode\">\r\n\t\t\t\t<span *ngSwitchCase=\"row\">{{$pager.from}}-{{$pager.to}} of {{$pager.total}}</span>\r\n\t\t\t\t<span *ngSwitchDefault>{{$pager.current + 1}} of {{$pager.totalPages}}</span>\r\n\t\t\t</label>\r\n\t\t\t<button tabindex=\"-1\"\r\n\t\t\t\t\t  md-button\r\n\t\t\t\t\t  class=\"md-icon-button q-grid-prev-page\"\r\n\t\t\t\t\t  [disabled]=\"!$pager.prev.canExecute()\"\r\n\t\t\t\t\t  (click)=\"$pager.prev.execute();\">\r\n\t\t\t\t<md-icon>keyboard_arrow_left</md-icon>\r\n\t\t\t</button>\r\n\t\t\t<button tabindex=\"-1\"\r\n\t\t\t\t\t  md-button\r\n\t\t\t\t\t  class=\"md-icon-button q-grid-next-page\"\r\n\t\t\t\t\t  [disabled]=\"!$pager.next.canExecute()\"\r\n\t\t\t\t\t  (click)=\"$pager.next.execute();\">\r\n\t\t\t\t<md-icon>keyboard_arrow_right</md-icon>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 529 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"plugin-progress.tpl.html\" let-$progress>\r\n\t<div class=\"q-grid-progress\" *ngIf=\"$progress.isBusy\">\r\n\t\t<md-progress-bar mode=\"indeterminate\"></md-progress-bar>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 530 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"plugin-export.tpl.html\" let-$export>\r\n\t<div class=\"q-grid-export\">\r\n\t\t<button md-button *ngIf=\"$export[$export.type] && $export[$export.type].canExecute()\"\r\n\t\t\t\t  (click)=\"$export[$export.type].execute()\">\r\n\t\t\t<md-icon>file_download</md-icon>\r\n\t\t\tExport to {{$export.type}}\r\n\t\t</button>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),
/* 531 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"plugin-action-bar-core.tpl.html\" let-$actionBar>\r\n    <div layout=\"row\">\r\n        <div flex=\"100\" \r\n             layout=\"row\" \r\n             layout-align=\"start center\" \r\n             layout-align-xs=\"start start\" \r\n             layout-align-sm=\"start start\" \r\n             layout-xs=\"column\"\r\n             layout-sm=\"column\">\r\n        </div>\r\n        <div class=\"q-grid-actions\" flex=\"none\" layout=\"row\" layout-align=\"end center\">\r\n            <q-grid-action-core *ngFor=\"let action of $actionBar.actions\" [action]=\"action\"></q-grid-action-core>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),
/* 532 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"plugin-action-core.tpl.html\" let-$action>\r\n    <div class=\"q-grid-action\">\r\n        <button md-icon-button \r\n                (click)=\"$action.execute()\" \r\n                [disabled]=\"!$action.canExecute()\"\r\n                [mdTooltip]=\"$action.title\" \r\n                tabindex=\"-1\">\r\n            <md-icon>{{$action.icon}}</md-icon>\r\n        </button>\r\n    </div>\r\n</ng-template>"

/***/ }),
/* 533 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"plugin-popup-panel.tpl.html\" let-$popup>\r\n\t<div class=\"q-grid-popup-panel\">\r\n\t\t<md-card class=\"layout-column\">\r\n\t\t\t<md-card-header [q-grid-popup-head]=\"$popup\" class=\"flex-auto mat-card-header\">\r\n\t\t\t\t<md-card-title class=\"flex-100 layout-row\">\r\n\t\t\t\t\t<h1 md-dialog-title class=\"flex-100\">\r\n\t\t\t\t\t\t<ng-container key=\"head-popup-{{$popup.id}}.tpl.html\" [context]=\"{$implicit: $popup}\">\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</h1>\r\n\t\t\t\t</md-card-title>\r\n\t\t\t\t<div class=\"q-grid-title-actions flex-auto\" layout=\"row\" layout-align=\"end center\">\r\n\t\t\t\t\t<button md-icon-button *ngIf=\"$popup.settings.collapsible && !$popup.state.expanded\" aria-label=\"Expand\" md-tooltip=\"Expand\">\r\n\t\t\t\t\t\t<md-icon aria-hidden=\"true\">&#xE5D0;</md-icon>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button md-icon-button *ngIf=\"$popup.settings.collapsible && $popup.state.expanded\" aria-label=\"Collapse\" md-tooltip=\"Collapse\">\r\n\t\t\t\t\t\t<md-icon aria-hidden=\"true\">&#xE5D1;</md-icon>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button md-icon-button class=\"md-action-close\" aria-label=\"Close\" (click)=\"$popup.close()\" md-tooltip=\"Close\">\r\n\t\t\t\t\t\t<md-icon aria-hidden=\"true\">&#xE5CD;</md-icon>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</md-card-header>\r\n\t\t\t<md-card-content class=\"flex-100\">\r\n\t\t\t\t<ng-container key=\"body-popup-{{$popup.id}}.tpl.html\" [context]=\"{$implicit: $popup}\">\r\n\t\t\t\t</ng-container>\r\n\t\t\t</md-card-content>\r\n\t\t\t<md-card-actions class=\"flex-auto\">\r\n\t\t\t\t<ng-container key=\"foot-popup-{{$popup.id}}.tpl.html\" [context]=\"{$implicit: $popup}\">\r\n\t\t\t\t</ng-container>\r\n\t\t\t</md-card-actions>\r\n\t\t\t<div class=\"q-grid-popup-resizer\" *ngIf=\"$popup.settings.resizable\"></div>\r\n\t\t</md-card>\r\n\t</div>\r\n</ng-template>"

/***/ }),
/* 534 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-array.tpl.html' let-$cell>\r\n\t<ul>\r\n\t\t<li *ngFor=\"let item of $cell.value\">{{item}}</li>\r\n\t</ul>\r\n</ng-template><ng-template key='body-cell-bool.tpl.html' let-$cell>\r\n\t<md-icon *ngIf=\"$cell.value\">check</md-icon>\r\n</ng-template>\r\n<ng-template key='body-cell-currency.tpl.html' let-$cell>\r\n\t<span>{{$cell.value | currency:$cell.column.code:3}}</span>\r\n</ng-template>\r\n<ng-template key='body-cell-date.tpl.html' let-$cell>\r\n\t<span>{{$cell.label | date: $cell.column.format || 'yyyy/MM/dd'}}</span>\r\n</ng-template>\r\n<ng-template key='body-cell-email.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<a [href]=\"'mailto:$cell.value'\" (bind)=\"$cell.label || $cell.value\">\r\n\t\t{{$cell.value}}</a>\r\n\t<button class=\"q-grid-email-edit\"\r\n\t        color=\"primary\"\r\n\t\t\tmdTooltip='Edit Email'\r\n\t\t\t[mdTooltipPosition]=\"'before'\"\r\n\t\t\taria-label=\"'email'\"\r\n\t\t\t(disabled)=\"!$view.edit.cell.enter.canExecute($cell)\"\r\n\t\t\t(click)=\"$view.edit.cell.enter.execute($cell)\">\r\n\t\t<md-icon>edit</md-icon>\r\n\t</button>\r\n</ng-template>\r\n<ng-template key='body-cell-group.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div [ngStyle]=\"{'padding-left': $view.group.offset($cell.row) + 'px'}\">\r\n\t\t<button (mouseup)=\"$view.group.toggleStatus.execute($cell.row)\"\r\n\t\t\t\t  *ngIf=\"$view.group.toggleStatus.canExecute($cell.row)\"\r\n\t\t\t\t  [ngSwitch]=\"$view.group.status($cell.row)\"\r\n\t\t\t\t  tabindex=\"-1\"\r\n\t\t\t\t  md-icon-button>\r\n\t\t\t<md-icon *ngSwitchCase=\"'expand'\">arrow_drop_down</md-icon>\r\n\t\t\t<md-icon class=\"q-grid-arrow-right\" *ngSwitchCase=\"'collapse'\">arrow_drop_up</md-icon>\r\n\t\t</button>\r\n\t\t<span>{{$view.group.value($cell.row)}}</span>\r\n\t\t<span *ngIf=\"$view.group.toggleStatus.canExecute($cell.row)\">({{$view.group.count($cell.row)}})</span>\r\n\t</div>\r\n</ng-template>\r\n<ng-template key='body-cell-image.tpl.html' let-$cell>\r\n\t<img *ngIf=\"$cell.value\" [src]=\"$cell.value\"/>\r\n\t<md-icon *ngIf=\"!$cell.value\">account_circle</md-icon>\r\n</ng-template>\r\n<ng-template key=\"body-cell-row-indicator.tpl.html\">\r\n</ng-template>\r\n<ng-template key='body-cell-row-options.tpl.html'>\r\n    <md-icon>more_vert</md-icon>\r\n</ng-template><ng-template key='body-cell-select.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div [ngSwitch]=\"$view.selection.state($cell.row)\">\r\n\t\t<div class=\"q-grid-checked\" *ngSwitchCase=\"true\">\r\n\t\t\t<md-icon>check</md-icon>\r\n\t\t</div>\r\n\t\t<div class=\"q-grid-unchecked\" *ngSwitchCase=\"false\">\r\n\t\t</div>\r\n\t\t<div class=\"q-grid-indeterminate\" *ngIf=\"$view.selection.isIndeterminate($row)\">\r\n\t\t\t<md-icon>remove</md-icon>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template>\r\n<ng-template key='body-cell-text.tpl.html' let-$cell>\r\n\t<span>{{$cell.label}}</span>\r\n</ng-template>\r\n<ng-template key='edit-cell-array.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-array\" q-grid-position=\"td\">\r\n\t\t<h2 class=\"md-title\">Edit {{$cell.column.title}}</h2>\r\n\t\t<div class=\"q-grid-array-view\">\r\n\t\t\t<md-form-field class=\"demo-chip-list\">\r\n\t\t\t\t<md-chip-list mdPrefix #chipList>\r\n\t\t\t\t\t<md-chip *ngFor=\"let value of $view.edit.cell.value;let $index = index\" \r\n\t\t\t\t\t\t\tselectable=\"true\" \r\n\t\t\t\t\t\t\tremovable=\"true\" \r\n\t\t\t\t\t\t\t(remove)=\"$view.edit.cell.value.splice($index, 1)\">\r\n\t\t\t\t\t\t{{value}}\r\n\t\t\t\t\t\t<md-icon mdChipRemove>cancel</md-icon>\r\n\t\t\t\t\t</md-chip>\r\n\t\t\t\t</md-chip-list>\r\n\t\t\t\t<input mdInput\r\n\t\t\t\t\t   q-grid-focus\r\n\t\t\t\t\t   [mdChipInputFor]=\"chipList\" \t\t\t\t\t\r\n\t\t\t\t\t   placeholder=\"New {{$cell.column.title}}...\" \r\n\t\t\t\t\t   mdChipInputSeparatorKeyCodes=\"[13]\"\r\n\t\t\t\t\t   mdChipInputAddOnBlur=\"true\" \r\n\t\t\t\t\t   (mdChipInputTokenEnd)=\"$event.value.trim() && (($view.edit.cell.value.push($event.value.trim()) || true) && $event.input.value = '')\" />\r\n\t\t\t</md-form-field>\r\n\t\t</div>\r\n\t\t<div class=\"q-grid-actions\">\r\n\t\t\t<button md-button color=\"primary\" (click)=\"$view.edit.cell.commit.execute($cell, $event)\">Save</button>\r\n\t\t\t<button md-button (click)=\"$view.edit.cell.cancel.execute($cell, $event)\">Cancel</button>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template><ng-template key='edit-cell-bool.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-bool\">\r\n\t\t<md-checkbox\r\n\t\t\tq-grid-focus=\"input\"\r\n\t\t\t[(ngModel)]=\"$view.edit.cell.value\">\r\n\t\t</md-checkbox>\r\n\t</div>\r\n</ng-template>\r\n<ng-template key='edit-cell-currency.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-currency\" q-grid-position=\"td\">\r\n\t\t<md-form-field>\r\n\t\t\t<input mdInput\r\n\t\t\t\t\t type=\"number\"\r\n\t\t\t\t\t #input\r\n\t\t\t\t\t q-grid-focus\r\n\t\t\t\t\t [(ngModel)]=\"$view.edit.cell.value\"\r\n\t\t\t\t\t (blur)=\"$view.edit.cell.commit.execute($cell)\">\r\n\t\t</md-form-field>\r\n\t</div>\r\n</ng-template>\r\n<ng-template key='edit-cell-date.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-date\" q-grid-position=\"td\">\r\n\t\t<h2 class=\"md-title\">Edit {{$cell.column.title}}</h2>\r\n\t\t<md-form-field>\r\n\t\t\t<input q-grid-focus\r\n\t\t\t \t\tmdInput [mdDatepicker]=\"picker\"\r\n\t\t\t  \t\t[(ngModel)]=\"$view.edit.cell.value\" \r\n\t\t\t  \t\tplaceholder=\"Choose a {{$cell.column.title}}\"\r\n\t\t\t/>\r\n\t\t\t<md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\r\n\t\t\t<md-datepicker #picker></md-datepicker>\r\n\t\t</md-form-field>\r\n\t\t<div class=\"q-grid-actions\">\r\n\t\t\t<button md-button color=\"primary\" (click)=\"$view.edit.cell.commit.execute($cell, $event)\">Save</button>\r\n\t\t\t<button md-button (click)=\"$view.edit.cell.cancel.execute($cell, $event)\">Cancel</button>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template><ng-template key='edit-cell-dropdown.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-dropdown\">\r\n\t\t<md-select q-grid-focus [(ngModel)]=\"$view.edit.cell.value\" placeholder=\"Select a value\"\r\n\t\t\t\t\t  (onOpen)=\"$view.edit.cell.fetch.busy\"\r\n\t\t\t\t\t  (onClose)=\"$view.edit.cell.cancel.execute($cell)\">\r\n\t\t\t<md-option *ngFor=\"let option of $view.edit.cell.fetch.result\" [value]=\"option\">\r\n\t\t\t\t{{ option }}\r\n\t\t\t</md-option>\r\n\t\t</md-select>\r\n\t</div>\r\n</ng-template>\r\n<ng-template key='edit-cell-email.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-email\" q-grid-position=\"td\">\r\n\t\t<h2>Edit {{$cell.column.title}}</h2>\r\n\t\t<div layout=\"column\" class=\"q-grid-email-fields\" flex>\r\n\t\t\t<md-form-field *ngIf=\"$cell.column.label !== null\">\r\n\t\t\t\t<input mdInput\r\n\t\t\t\t\t\t type=\"text\"\r\n\t\t\t\t\t\t [(ngModel)]=\"$view.edit.cell.label\"\r\n\t\t\t\t\t\t (blur)=\"$view.edit.cell.commit.execute($cell)\"\r\n\t\t\t\t\t\t placeholder=\"Label\">\r\n\t\t\t</md-form-field>\r\n\t\t\t<md-form-field>\r\n\t\t\t\t<input q-grid-focus\r\n\t\t\t\t\t\t mdInput\r\n\t\t\t\t\t\t type=\"email\"\r\n\t\t\t\t\t\t [(ngModel)]=\"$view.edit.cell.value\"\r\n\t\t\t\t\t\t (blur)=\"$view.edit.cell.commit.execute($cell)\"\r\n\t\t\t\t\t\t placeholder=\"Email\">\r\n\t\t\t</md-form-field>\r\n\t\t</div>\r\n\t\t<div class=\"q-grid-actions\">\r\n\t\t\t<button md-button color=\"primary\" (click)=\"$view.edit.cell.commit.execute($cell, $event)\">Save</button>\r\n\t\t\t<button md-button (click)=\"$view.edit.cell.cancel.execute($cell, $event)\">Cancel</button>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template>\r\n<ng-template key='edit-cell-number.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-number\" q-grid-position=\"td\">\r\n\t\t<md-form-field>\r\n\t\t\t<input mdInput\r\n\t\t\t\t\t type=\"number\"\r\n\t\t\t\t\t #input\r\n\t\t\t\t\t q-grid-focus\r\n\t\t\t\t\t [(ngModel)]=\"$view.edit.cell.value\"\r\n\t\t\t\t\t (blur)=\"$view.edit.cell.commit.execute($cell)\">\r\n\t\t</md-form-field>\r\n\t</div>\r\n</ng-template>\r\n<ng-template key='edit-cell-password.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-password\" q-grid-position=\"td\">\r\n\t\t<md-form-field>\r\n\t\t\t<input mdInput\r\n\t\t\t\t\t [type]=\"'password'\"\r\n\t\t\t\t\t q-grid-focus\r\n\t\t\t\t\t (blur)=\"$view.edit.cell.commit.execute($cell)\"\r\n\t\t\t\t\t [(ngModel)]=\"$view.edit.cell.value\">\r\n\t\t</md-form-field>\r\n\t</div>\r\n</ng-template>\r\n<ng-template key='edit-cell-row-options.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<button aria-label=\"Open row menu\"\r\n\t\t\t\tmd-icon-button \r\n\t\t\t\t[mdMenuTriggerFor]=\"menu\"\r\n\t\t\t\t(onMenuClose)=\"$view.edit.cell.cancel.execute($cell, $event, 10)\"\r\n\t\t\t\tq-grid-raise=\"click\">\r\n\t\t<md-icon>more_vert</md-icon>\r\n\t</button>\r\n\t<md-menu #menu=\"mdMenu\">\r\n\t\t<button md-menu-item \r\n\t\t\t\t*ngFor=\"let $action of $cell.column.editorOptions.actions\"\r\n\t\t\t\t(click)=\"$action.command.execute($cell)\" \r\n\t\t\t\t[disabled]=\"!$action.command.canExecute($cell)\">\r\n\t\t\t\t<md-icon>{{$action.icon}}</md-icon>\r\n\t\t\t\t<span>{{$action.title}}</span>\r\n\t\t</button>\r\n\t</md-menu>\r\n</ng-template><ng-template key='edit-cell-select.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<md-checkbox q-grid-focus=\"input\"\r\n\t\t\t\t [indeterminate]=\"$view.selection.isIndeterminate($cell.row)\"\r\n\t\t\t\t [checked]=\"$view.selection.state($cell.row)\"\r\n\t\t\t\t [disabled]=\"!$view.selection.toggleRow.canExecute($cell.row)\"\r\n\t\t\t\t (change)=\"$view.selection.toggleRow.execute($cell.row)\"\r\n\t\t\t\t aria-label=\"Selection\">\r\n\t</md-checkbox>\r\n</ng-template>\r\n<ng-template key='edit-cell-text.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor q-grid-text\" q-grid-position=\"td\">\r\n\t\t<md-form-field>\r\n\t\t\t<input mdInput\r\n\t\t\t\t\t #input\r\n\t\t\t\t\t q-grid-focus\r\n\t\t\t\t\t maxlength=\"{{$cell.column.maxLength}}\"\r\n\t\t\t\t\t [(ngModel)]=\"$view.edit.cell.value\"\r\n\t\t\t\t\t (blur)=\"$view.edit.cell.commit.execute($cell)\">\r\n\t\t\t<md-hint align=\"end\">{{input.value.length}} / {{$cell.column.maxLength}}</md-hint>\r\n\t\t</md-form-field>\r\n\t</div>\r\n</ng-template>\r\n<ng-template key='edit-cell-textarea.tpl.html' let-$cell let-$view=\"$view\">\r\n\t<div class=\"q-grid-editor\" q-grid-position=\"td\">\r\n\t\t<md-form-field>\r\n\t\t\t<textarea mdInput\r\n\t\t\t\t\tmdTextareaAutosize\r\n\t\t\t\t\trows=\"10\"\r\n\t\t\t\t\tq-grid-focus\r\n\t\t\t\t\t(blur)=\"$view.edit.cell.commit.execute($cell)\"\r\n\t\t\t\t\t[(ngModel)]=\"$view.edit.cell.value\">\r\n\t\t\t</textarea>\r\n\t\t</md-form-field>\r\n\t</div>\r\n</ng-template>\r\n<ng-template key='foot-cell-currency.tpl.html' let-$cell>\r\n\t<span>{{$cell.value | currency:$cell.column.code:3}}</span>\r\n</ng-template>\r\n<ng-template key='foot-cell-text.tpl.html' let-$cell>\r\n\t<span>{{$cell.value}}</span>\r\n</ng-template>\r\n<ng-template key=\"head-cell-select.tpl.html\" let-$view=\"$view\">\r\n\t<div ngSwitch=\"$view.selection.mode\">\r\n\t\t<div *ngSwitchCase=\"'single'\" ngSwitch=\"!!$view.selection.items.length\">\r\n\t\t\t<md-icon *ngSwitchCase=\"true\">check</md-icon>\r\n\t\t\t<md-icon *ngSwitchDefault>remove</md-icon>\r\n\t\t</div>\r\n\t\t<div *ngSwitchDefault>\r\n\t\t\t<md-checkbox [indeterminate]=\"$view.selection.isIndeterminate()\"\r\n\t\t\t\t\t\t [checked]=\"$view.selection.state()\"\r\n\t\t\t\t\t\t [disabled]=\"!$view.selection.toggleRow.canExecute()\"\r\n\t\t\t\t\t\t (change)=\"$view.selection.toggleRow.execute()\"\r\n\t\t\t\t\t\t tabindex=\"-1\"\r\n\t\t\t\t\t\t aria-label=\"Selection\">\r\n\t\t\t</md-checkbox>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template>\r\n<ng-template key=\"head-cell-text.tpl.html\" let-$cell let-$view=\"$view\">\r\n\t<div (click)=\"$view.sort.toggle.execute($cell.column)\"\r\n\t\t  (mouseover)=\"$view.sort.hover = true\"\r\n\t\t  (mouseleave)=\"$view.sort.hover = false\">\r\n\t\t<div class=\"q-grid-sort\"\r\n\t\t\t  [ngClass]=\"{'q-grid-active': $view.sort.order($cell.column) >= 0}\"\r\n\t\t\t  *ngIf=\"$cell.column.canSort\"\r\n\t\t\t  [ngSwitch]=\"$view.sort.direction($cell.column)\">\r\n\t\t\t<md-icon class=\"q-grid-asc\" *ngSwitchCase=\"'asc'\">arrow_downward</md-icon>\r\n\t\t\t<md-icon class=\"q-grid-desc\" *ngSwitchCase=\"'desc'\">arrow_upward</md-icon>\r\n\t\t\t<ng-container *ngSwitchDefault>\r\n\t\t\t\t<md-icon *ngIf=\"$view.sort.hover\">arrow_downward</md-icon>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t\t<label [mdTooltip]=\"$cell.column.title\">\r\n\t\t\t{{$cell.column.title}}\r\n\t\t</label>\r\n\t</div>\r\n\t<!--<q-grid:column-filter ng-if=\"$cell.column.canFilter\"-->\r\n\t<!--class=\"q-grid-column-filter\"-->\r\n\t<!--key=\"$cell.column.key\"-->\r\n\t<!--title=\"{{$cell.column.title}}\"-->\r\n\t<!--ng-class=\"{'q-grid-active': $view.filter.has($cell.column)}\">-->\r\n\t<!--</q-grid:column-filter>-->\r\n</ng-template>\r\n<ng-template key=\"plugin-action-bar-core.tpl.html\" let-$actionBar>\r\n    <div layout=\"row\">\r\n        <div flex=\"100\" \r\n             layout=\"row\" \r\n             layout-align=\"start center\" \r\n             layout-align-xs=\"start start\" \r\n             layout-align-sm=\"start start\" \r\n             layout-xs=\"column\"\r\n             layout-sm=\"column\">\r\n        </div>\r\n        <div class=\"q-grid-actions\" flex=\"none\" layout=\"row\" layout-align=\"end center\">\r\n            <q-grid-action-core *ngFor=\"let action of $actionBar.actions\" [action]=\"action\"></q-grid-action-core>\r\n        </div>\r\n    </div>\r\n</ng-template><ng-template key=\"plugin-action-core.tpl.html\" let-$action>\r\n    <div class=\"q-grid-action\">\r\n        <button md-icon-button \r\n                (click)=\"$action.execute()\" \r\n                [disabled]=\"!$action.canExecute()\"\r\n                [mdTooltip]=\"$action.title\" \r\n                tabindex=\"-1\">\r\n            <md-icon>{{$action.icon}}</md-icon>\r\n        </button>\r\n    </div>\r\n</ng-template><ng-template key=\"plugin-export.tpl.html\" let-$export>\r\n\t<div class=\"q-grid-export\">\r\n\t\t<button md-button *ngIf=\"$export[$export.type] && $export[$export.type].canExecute()\"\r\n\t\t\t\t  (click)=\"$export[$export.type].execute()\">\r\n\t\t\t<md-icon>file_download</md-icon>\r\n\t\t\tExport to {{$export.type}}\r\n\t\t</button>\r\n\t</div>\r\n</ng-template>\r\n<ng-template key=\"plugin-pager.tpl.html\" let-$pager>\r\n\t<div class=\"q-grid-pager\" [ngSwitch]=\"$pager.scroll.mode\">\r\n\t\t<div *ngSwitchCase=\"'virtual'\">\r\n\t\t\t<label class=\"q-grid-page\" [ngSwitch]=\"$pager.mode\">\r\n\t\t\t\t<span *ngSwitchCase=\"'row'\">{{$pager.from}}-{{$pager.to}} of {{$pager.total}}</span>\r\n\t\t\t\t<span *ngSwitchDefault>{{$pager.current + 1}} of {{$pager.totalPages}}</span>\r\n\t\t\t</label>\r\n\t\t</div>\r\n\t\t<div *ngSwitchDefault>\r\n\t\t\t<label class=\"q-grid-page-size\">Rows per page:</label>\r\n\t\t\t<md-select tabindex=\"-1\"\r\n\t\t\t\t\t\t  aria-label=\"Page Size List\"\r\n\t\t\t\t\t\t  class=\"q-grid-page-size\"\r\n\t\t\t\t\t\t  [(ngModel)]=\"$pager.size\">\r\n\t\t\t\t<md-option *ngFor=\"let size of $pager.sizeList\" [value]=\"size\">{{size}}</md-option>\r\n\t\t\t</md-select>\r\n\t\t\t<label class=\"q-grid-page\" ng-switch=\"::$pager.mode\">\r\n\t\t\t\t<span *ngSwitchCase=\"row\">{{$pager.from}}-{{$pager.to}} of {{$pager.total}}</span>\r\n\t\t\t\t<span *ngSwitchDefault>{{$pager.current + 1}} of {{$pager.totalPages}}</span>\r\n\t\t\t</label>\r\n\t\t\t<button tabindex=\"-1\"\r\n\t\t\t\t\t  md-button\r\n\t\t\t\t\t  class=\"md-icon-button q-grid-prev-page\"\r\n\t\t\t\t\t  [disabled]=\"!$pager.prev.canExecute()\"\r\n\t\t\t\t\t  (click)=\"$pager.prev.execute();\">\r\n\t\t\t\t<md-icon>keyboard_arrow_left</md-icon>\r\n\t\t\t</button>\r\n\t\t\t<button tabindex=\"-1\"\r\n\t\t\t\t\t  md-button\r\n\t\t\t\t\t  class=\"md-icon-button q-grid-next-page\"\r\n\t\t\t\t\t  [disabled]=\"!$pager.next.canExecute()\"\r\n\t\t\t\t\t  (click)=\"$pager.next.execute();\">\r\n\t\t\t\t<md-icon>keyboard_arrow_right</md-icon>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template>\r\n<ng-template key=\"plugin-popup-panel.tpl.html\" let-$popup>\r\n\t<div class=\"q-grid-popup-panel\">\r\n\t\t<md-card class=\"layout-column\">\r\n\t\t\t<md-card-header [q-grid-popup-head]=\"$popup\" class=\"flex-auto mat-card-header\">\r\n\t\t\t\t<md-card-title class=\"flex-100 layout-row\">\r\n\t\t\t\t\t<h1 md-dialog-title class=\"flex-100\">\r\n\t\t\t\t\t\t<ng-container key=\"head-popup-{{$popup.id}}.tpl.html\" [context]=\"{$implicit: $popup}\">\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</h1>\r\n\t\t\t\t</md-card-title>\r\n\t\t\t\t<div class=\"q-grid-title-actions flex-auto\" layout=\"row\" layout-align=\"end center\">\r\n\t\t\t\t\t<button md-icon-button *ngIf=\"$popup.settings.collapsible && !$popup.state.expanded\" aria-label=\"Expand\" md-tooltip=\"Expand\">\r\n\t\t\t\t\t\t<md-icon aria-hidden=\"true\">&#xE5D0;</md-icon>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button md-icon-button *ngIf=\"$popup.settings.collapsible && $popup.state.expanded\" aria-label=\"Collapse\" md-tooltip=\"Collapse\">\r\n\t\t\t\t\t\t<md-icon aria-hidden=\"true\">&#xE5D1;</md-icon>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button md-icon-button class=\"md-action-close\" aria-label=\"Close\" (click)=\"$popup.close()\" md-tooltip=\"Close\">\r\n\t\t\t\t\t\t<md-icon aria-hidden=\"true\">&#xE5CD;</md-icon>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</md-card-header>\r\n\t\t\t<md-card-content class=\"flex-100\">\r\n\t\t\t\t<ng-container key=\"body-popup-{{$popup.id}}.tpl.html\" [context]=\"{$implicit: $popup}\">\r\n\t\t\t\t</ng-container>\r\n\t\t\t</md-card-content>\r\n\t\t\t<md-card-actions class=\"flex-auto\">\r\n\t\t\t\t<ng-container key=\"foot-popup-{{$popup.id}}.tpl.html\" [context]=\"{$implicit: $popup}\">\r\n\t\t\t\t</ng-container>\r\n\t\t\t</md-card-actions>\r\n\t\t\t<div class=\"q-grid-popup-resizer\" *ngIf=\"$popup.settings.resizable\"></div>\r\n\t\t</md-card>\r\n\t</div>\r\n</ng-template><ng-template key=\"plugin-progress.tpl.html\" let-$progress>\r\n\t<div class=\"q-grid-progress\" *ngIf=\"$progress.isBusy\">\r\n\t\t<md-progress-bar mode=\"indeterminate\"></md-progress-bar>\r\n\t</div>\r\n</ng-template>\r\n<ng-template key=\"plugin-title.tpl.html\" let-$title>\r\n\t<div class=\"q-grid-title\">\r\n\t\t<h3 class=\"mat-card-title\">\r\n\t\t\t{{$title.value}}\r\n\t\t</h3>\r\n\t</div>\r\n</ng-template><ng-template key=\"bottom-toolbar.tpl.html\">\r\n\t<q-grid-pager></q-grid-pager>\r\n</ng-template>\r\n<ng-template key=\"left-toolbar.tpl.html\">\r\n</ng-template>\r\n<ng-template key=\"right-toolbar.tpl.html\">\r\n</ng-template>\r\n<ng-template key=\"top-toolbar.tpl.html\">\r\n\t<div class=\"layout-row\">\r\n\t\t<div class=\"flex-100\" style=\"padding: 16px 0;\">\r\n\t\t\t<q-grid-title></q-grid-title>\r\n\t\t</div>\r\n\t\t<div class=\"flex-auto layout-row\" style=\"padding: 12px 0;\">\r\n\t\t\t<div class=\"flex-100\">\r\n\t\t\t\t<q-grid-action-bar-core></q-grid-action-bar-core>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex-auto\">\r\n\t\t\t\t<q-grid-popup id=\"q-grid-column-chooser-popup\">\r\n\t\t\t\t\t<ng-template for=\"trigger\" let-$popup>\r\n\t\t\t\t\t\t<button md-icon-button (click)=\"$popup.open({width: 352, height: 652})\" tabindex=\"-1\" [disabled]=\"$popup.isOpened()\">\r\n\t\t\t\t\t\t\t<md-icon>more_vert</md-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template for=\"body\">\r\n\t\t\t\t\t\t<!--TODO: insert here column chooser component-->\r\n\t\t\t\t\t\t<!-- <q-grid-column-chooser></q-grid-column-chooser> -->\r\n\t\t\t\t\t\t<p>Select All</p>\r\n\t\t\t\t\t\t<p>Item 1</p>\r\n\t\t\t\t\t\t<p>Item 2</p>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template for=\"foot\" let-$popup>\r\n\t\t\t\t\t\t<button md-button (click)=\"$popup.close()\">Cancel</button>\r\n\t\t\t\t\t\t<button md-button (click)=\"$popup.close()\">Reset</button>\r\n\t\t\t\t\t\t<button md-button (click)=\"$popup.close()\">Apply</button>\r\n\t\t\t\t\t\t<!--TODO: implement beloow component-->\r\n\t\t\t\t\t\t<!-- <q-grid-column-chooser-actions [popup]=\"$popup\">\r\n\t\t\t\t\t\t\t<ng-template for=\"actions\" let-$columnChooser>\r\n\t\t\t\t\t\t\t\t<button md-button (click)=\"$columnChooser.cancel()\">Cancel</button>\r\n\t\t\t\t\t\t\t\t<button md-button (click)=\"$columnChooser.reset()\">Reset</button>\r\n\t\t\t\t\t\t\t\t<button md-button (click)=\"$columnChooser.submit()\">Apply</button>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</q-grid-column-chooser-actions> -->\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template for=\"head\">\r\n\t\t\t\t\t\tColumn Filter\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</q-grid-popup>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<q-grid-progress></q-grid-progress>\r\n</ng-template>"

/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var pagination_1 = __webpack_require__(536);
var progress_1 = __webpack_require__(540);
var popup_1 = __webpack_require__(544);
var data_manipulation_1 = __webpack_require__(553);
var action_bar_1 = __webpack_require__(558);
var title_1 = __webpack_require__(566);
var PluginModule = /** @class */ (function () {
    function PluginModule() {
    }
    PluginModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [],
            exports: [
                action_bar_1.ActionBarModule,
                data_manipulation_1.DataManipulationModule,
                pagination_1.PagerModule,
                popup_1.PopupModule,
                progress_1.ProgressModule,
                title_1.TitleModule
            ],
            imports: [],
            providers: []
        })
    ], PluginModule);
    return PluginModule;
}());
exports.PluginModule = PluginModule;


/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(537), exports);


/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var pager_component_1 = __webpack_require__(538);
var template_module_1 = __webpack_require__(74);
var PagerModule = /** @class */ (function () {
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
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var command_1 = __webpack_require__(11);
var plugin_component_1 = __webpack_require__(30);
var root_service_1 = __webpack_require__(33);
var PagerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PagerComponent, _super);
    function PagerComponent(root) {
        var _this = _super.call(this, root) || this;
        _this.next = new command_1.Command({
            execute: function () { return (_this.current = _this.current + 1); },
            canExecute: function () { return (_this.current + 1) * _this.size < _this.total; }
        });
        _this.prev = new command_1.Command({
            execute: function () { return (_this.current = _this.current - 1); },
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
            template: __webpack_require__(539)
        }),
        tslib_1.__param(0, core_1.Optional()),
        tslib_1.__metadata("design:paramtypes", [root_service_1.RootService])
    ], PagerComponent);
    return PagerComponent;
}(plugin_component_1.PluginComponent));
exports.PagerComponent = PagerComponent;


/***/ }),
/* 539 */
/***/ (function(module, exports) {

module.exports = "<ng-container key=\"plugin-pager.tpl.html\" [context]=\"context\"></ng-container>\r\n"

/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(541), exports);


/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var progress_component_1 = __webpack_require__(542);
var template_1 = __webpack_require__(25);
var ProgressModule = /** @class */ (function () {
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
/* 542 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var plugin_component_1 = __webpack_require__(30);
var component_1 = __webpack_require__(9);
var ProgressComponent = /** @class */ (function (_super) {
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
            template: __webpack_require__(543)
        }),
        tslib_1.__param(0, core_1.Optional()),
        tslib_1.__metadata("design:paramtypes", [component_1.RootService])
    ], ProgressComponent);
    return ProgressComponent;
}(plugin_component_1.PluginComponent));
exports.ProgressComponent = ProgressComponent;


/***/ }),
/* 543 */
/***/ (function(module, exports) {

module.exports = "<ng-container key=\"plugin-progress.tpl.html\" [context]=\"context\"></ng-container>\r\n"

/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(545), exports);


/***/ }),
/* 545 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var template_1 = __webpack_require__(25);
var popup_component_1 = __webpack_require__(546);
var popup_panel_component_1 = __webpack_require__(235);
var popup_service_1 = __webpack_require__(128);
var popup_head_directive_1 = __webpack_require__(552);
var PopupModule = /** @class */ (function () {
    function PopupModule() {
    }
    PopupModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [template_1.TemplateModule],
            exports: [
                popup_component_1.PopupComponent,
                popup_head_directive_1.PopupHeadDirective
            ],
            declarations: [
                popup_component_1.PopupComponent,
                popup_panel_component_1.PopupPanelComponent,
                popup_head_directive_1.PopupHeadDirective
            ],
            providers: [
                popup_service_1.PopupService
            ],
            entryComponents: [
                popup_panel_component_1.PopupPanelComponent
            ]
        })
    ], PopupModule);
    return PopupModule;
}());
exports.PopupModule = PopupModule;


/***/ }),
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var component_1 = __webpack_require__(9);
var template_1 = __webpack_require__(25);
var popup_service_1 = __webpack_require__(128);
var plugin_component_1 = __webpack_require__(30);
var popup_settings_1 = __webpack_require__(547);
var popup_1 = __webpack_require__(129);
var popup_panel_component_1 = __webpack_require__(235);
var PopupComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PopupComponent, _super);
    function PopupComponent(root, popupService, templateHost, resolver, viewContainerRef, popup) {
        var _this = _super.call(this, root) || this;
        _this.popupService = popupService;
        _this.templateHost = templateHost;
        _this.resolver = resolver;
        _this.viewContainerRef = viewContainerRef;
        _this.popup = popup;
        _this.$implicit = _this;
        _this.factory = resolver.resolveComponentFactory(popup_panel_component_1.PopupPanelComponent);
        return _this;
    }
    PopupComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.popup.id = this.id;
        this.popup.model = this.model;
        this.templateHost.key = "popup-" + this.id + ".tpl.html";
    };
    PopupComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this.popupService.isOpened(this.id)) {
            this.popupService.close(this.id);
        }
    };
    PopupComponent.prototype.open = function (settings) {
        settings = Object.assign(new popup_settings_1.PopupSettings(), settings);
        var component = this.viewContainerRef.createComponent(this.factory)
            .instance;
        component.popup = this.popup;
        this.popup.element = component.element.nativeElement;
        this.popup.settings = settings;
        this.popupService.open(this.popup);
    };
    PopupComponent.prototype.close = function () {
        this.popupService.close(this.id);
    };
    PopupComponent.prototype.isOpened = function () {
        return this.popupService.isOpened(this.id);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], PopupComponent.prototype, "id", void 0);
    PopupComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-popup',
            template: __webpack_require__(551),
            providers: [template_1.TemplateHostService, popup_1.Popup]
        }),
        tslib_1.__param(0, core_1.Optional()),
        tslib_1.__metadata("design:paramtypes", [component_1.RootService,
            popup_service_1.PopupService,
            template_1.TemplateHostService,
            core_1.ComponentFactoryResolver,
            core_1.ViewContainerRef,
            popup_1.Popup])
    ], PopupComponent);
    return PopupComponent;
}(plugin_component_1.PluginComponent));
exports.PopupComponent = PopupComponent;


/***/ }),
/* 547 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PopupSettings = /** @class */ (function () {
    function PopupSettings() {
        this.height = 400;
        this.width = 300;
        this.offsetTop = 10;
        this.offsetLeft = 10;
        this.resizable = false;
        this.collapsible = false;
        this.class = '';
    }
    return PopupSettings;
}());
exports.PopupSettings = PopupSettings;


/***/ }),
/* 548 */
/***/ (function(module, exports) {

module.exports = "<ng-container key=\"plugin-popup-panel.tpl.html\" [context]=\"{$implicit: popup}\"></ng-container>"

/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(550);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(140)(undefined);
// imports


// module
exports.push([module.i, ":host{position:absolute;background-color:#fff;z-index:79;margin:0;outline:none}:host.resizable{resize:both;overflow:hidden}:host.resizable::-webkit-resizer{background-color:transparent}:host.resizable .resizer{position:absolute;bottom:0;right:0;width:0;height:0;border-style:solid;border-width:0 0 20px 20px;border-color:transparent transparent #e8e8e8;border-radius:0 2px 0 0;cursor:se-resize}:host.active{z-index:80!important}:host.active.resizable .resizer{border-color:transparent transparent #add8e6}:host.expanded{width:100%!important;height:calc(100% - 96px)!important;top:96px!important;left:0!important;border-radius:0;resize:none}:host.expanded .resizer,:host.expanded::-webkit-resizer{display:none}", ""]);

// exports


/***/ }),
/* 551 */
/***/ (function(module, exports) {

module.exports = "<ng-container key=\"trigger-popup-{{id}}.tpl.html\" [context]=\"context\"></ng-container>"

/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var event_listener_1 = __webpack_require__(48);
var event_manager_1 = __webpack_require__(73);
var component_1 = __webpack_require__(9);
var popup_1 = __webpack_require__(129);
var PopupHeadDirective = /** @class */ (function (_super) {
    tslib_1.__extends(PopupHeadDirective, _super);
    function PopupHeadDirective(element) {
        var _this = _super.call(this) || this;
        _this.position = {
            x: 0,
            y: 0
        };
        _this.element = element.nativeElement;
        _this.element.setAttribute('draggable', 'true');
        _this.eventListener = new event_listener_1.EventListener(_this.element, new event_manager_1.EventManager(_this));
        return _this;
    }
    PopupHeadDirective.prototype.ngOnInit = function () {
        var _this = this;
        var popup = this.popup;
        var popupElement = popup.element;
        this.using(this.eventListener.on('dragstart', (function (e) {
            _this.position.x = e.offsetX;
            _this.position.y = e.offsetY;
            popupElement.classList.add('drag');
            e.dataTransfer.setDragImage(document.createElement('div'), 0, 0); // eslint-disable-line no-undef			
        })));
        this.using(this.eventListener.on('drag', (function (event) {
            var cx = event.clientX;
            var cy = event.clientY;
            var x = _this.position.x;
            var y = _this.position.y;
            if (cx || cy) {
                var l = cx - x;
                var t = cy - y;
                var w = _this.element.clientWidth;
                var h = _this.element.clientHeight;
                var el = 0;
                var er = window.innerWidth - w;
                var et = 0;
                var eb = window.innerHeight - h;
                l = l <= el ? el : l >= er ? er : l;
                t = t <= et ? et : t >= eb ? eb : t;
                popupElement.style.left = l + 'px';
                popupElement.style.top = t + 'px';
            }
        })));
        this.using(this.eventListener.on('dragend', (function () {
            _this.element.classList.remove('drag');
        })));
        // this.element.body.bind('dragover', e => e.preventDefault());
    };
    PopupHeadDirective.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.eventListener.off();
    };
    tslib_1.__decorate([
        core_1.Input('q-grid-popup-head'),
        tslib_1.__metadata("design:type", popup_1.Popup)
    ], PopupHeadDirective.prototype, "popup", void 0);
    PopupHeadDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[q-grid-popup-head]'
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
    ], PopupHeadDirective);
    return PopupHeadDirective;
}(component_1.NgComponent));
exports.PopupHeadDirective = PopupHeadDirective;


/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(554), exports);


/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var model_1 = __webpack_require__(72);
var data_manipulation_component_1 = __webpack_require__(555);
var data_manipulation_model_1 = __webpack_require__(557);
model_1.Model.register('dataManipulation', data_manipulation_model_1.DataManipulationModel);
var DataManipulationModule = /** @class */ (function () {
    function DataManipulationModule() {
    }
    DataManipulationModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [data_manipulation_component_1.DataManipulationComponent],
            exports: [data_manipulation_component_1.DataManipulationComponent],
            imports: [],
            providers: []
        })
    ], DataManipulationModule);
    return DataManipulationModule;
}());
exports.DataManipulationModule = DataManipulationModule;


/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var index_1 = __webpack_require__(9);
var plugin_component_1 = __webpack_require__(30);
var command_1 = __webpack_require__(11);
var action_1 = __webpack_require__(130);
var infrastructure_1 = __webpack_require__(3);
var utility_1 = __webpack_require__(4);
var DataManipulationComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DataManipulationComponent, _super);
    function DataManipulationComponent(root) {
        var _this = _super.call(this, root) || this;
        _this.commitCommand = new command_1.Command({
            execute: function (e) {
                if (e.column.class !== 'data') {
                    return;
                }
                var rowId = _this.rowId(e.row);
                var edited = _this.changes.edited;
                var entries = edited.get(rowId);
                if (!entries) {
                    entries = [];
                    edited.set(rowId, entries);
                }
                var entryIndex = entries.findIndex((function (item) { return item.column === item.column.key; }));
                var entry = entries[entryIndex];
                if (!entry) {
                    entry = {
                        column: e.column.key,
                        oldValue: e.oldValue,
                        oldLabel: e.oldLabel
                    };
                    entryIndex = entries.length;
                    entries.push(entry);
                }
                entry.newValue = e.newValue;
                entry.newLabel = e.newLabel;
                // TODO: understand if we need to track label changes?
                if (!_this.hasChanges(entry.newValue, entry.oldValue)) {
                    entries.splice(entryIndex, 1);
                    if (!entries.length) {
                        edited.delete(rowId);
                    }
                }
            }
        });
        _this.actions = [
            new action_1.Action(new command_1.Command({
                execute: function () {
                    var newRow = _this.rowFactory(_this.model.data().rows[0]);
                    if (utility_1.isUndefined(newRow)) {
                        throw new infrastructure_1.AppError('data.manipulation', 'Setup rowFactory property to add new rows');
                    }
                    var rowId = _this.rowId(newRow);
                    var data = _this.model.data;
                    _this.changes.added.add(rowId);
                    data({
                        rows: [newRow].concat(data().rows)
                    });
                },
                shortcut: 'F7'
            }), 'Add New Row', 'add')
        ];
        _this.rowActions = [
            new action_1.Action(new command_1.Command({
                canExecute: function (e) {
                    var rowId = _this.rowId(e.row);
                    return !_this.changes.deleted.has(rowId);
                },
                execute: function (e) {
                    var rowId = _this.rowId(e.row);
                    var changes = _this.changes;
                    if (changes.added.has(rowId)) {
                        changes.added.delete(rowId);
                        var data = _this.model.data;
                        var rows = data().rows.filter((function (row) { return _this.rowId(row) !== rowId; }));
                        data({ rows: rows });
                    }
                    else {
                        changes.deleted.add(rowId);
                    }
                }
            }), 'Delete Row', 'delete'),
            new action_1.Action(new command_1.Command({
                execute: function (e) {
                    var rowId = _this.rowId(e.row);
                    _this.changes.deleted.delete(rowId);
                },
                canExecute: function (e) {
                    var rowId = _this.rowId(e.row);
                    return _this.changes.deleted.has(rowId);
                }
            }), 'Restore', 'restore')
            // new Action(
            // 	new Command({i
            // 		execute: () => {
            // 			// TODO make edit form service
            // 		}
            // 	}),
            // 	'Edit Form',
            // 	'edit'
            // )
        ];
        return _this;
    }
    DataManipulationComponent.prototype.ngOnInit = function () {
        var _this = this;
        var model = this.model;
        this.rowId = model.dataManipulation().rowId;
        this.rowFactory = model.dataManipulation().rowFactory;
        model
            .edit({
            mode: 'cell',
            commit: this.commitCommand
        })
            .style({
            row: this.styleRow.bind(this),
            cell: this.styleCell.bind(this)
        })
            .action({
            items: this.actions
        });
        model.dataChanged.watch((function (e, off) {
            if (e.hasChanges('columns')) {
                var rowOptionsColumn = model
                    .data()
                    .columns.find((function (column) { return column.type === 'row-options'; }));
                if (rowOptionsColumn) {
                    (_a = rowOptionsColumn.editorOptions.actions).push.apply(_a, _this.rowActions);
                    off();
                }
            }
            var _a;
        }));
    };
    DataManipulationComponent.prototype.hasChanges = function (newValue, oldValue) {
        // TODO: understand if we need to parse values (e.g. '12' vs 12)
        return newValue !== oldValue;
    };
    DataManipulationComponent.prototype.styleRow = function (row, context) {
        var rowId = this.rowId(row);
        if (this.changes.deleted.has(rowId)) {
            context.class('deleted', { opacity: 0.3 });
        }
    };
    DataManipulationComponent.prototype.styleCell = function (row, column, context) {
        var rowId = this.rowId(row);
        var changes = this.changes;
        if (column.type === 'row-indicator') {
            if (changes.deleted.has(rowId)) {
                context.class('delete-indicator', { background: '#EF5350' });
            }
            else if (changes.added.has(rowId)) {
                context.class('add-indicator', { background: '#C8E6C9' });
            }
            else if (changes.edited.has(rowId)) {
                context.class('edit-indicator', { background: '#E3F2FD' });
            }
            return;
        }
        if (changes.edited.has(rowId)) {
            var entries = changes.edited.get(rowId);
            if (entries.findIndex((function (entry) { return entry.column === column.key; })) >= 0) {
                context.class('edited', { background: '#E3F2FD' });
            }
        }
    };
    Object.defineProperty(DataManipulationComponent.prototype, "changes", {
        get: function () {
            var model = this.model;
            return model.dataManipulation();
        },
        enumerable: true,
        configurable: true
    });
    DataManipulationComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-data-manipulation',
            template: ''
        }),
        tslib_1.__param(0, core_1.Optional()),
        tslib_1.__metadata("design:paramtypes", [index_1.RootService])
    ], DataManipulationComponent);
    return DataManipulationComponent;
}(plugin_component_1.PluginComponent));
exports.DataManipulationComponent = DataManipulationComponent;


/***/ }),
/* 556 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ActionModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shortcut__ = __webpack_require__(217);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var ActionModel = function ActionModel() {
	_classCallCheck(this, ActionModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();
	this.items = [];
	this.shortcut = new __WEBPACK_IMPORTED_MODULE_1__shortcut__["a" /* Shortcut */](new __WEBPACK_IMPORTED_MODULE_1__shortcut__["b" /* ShortcutManager */]());
};

/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = __webpack_require__(4);
var DataManipulationModel = /** @class */ (function () {
    function DataManipulationModel() {
        this.deleted = new Set();
        this.added = new Set();
        this.edited = new Map();
        this.rowFactory = function (etalonRow) {
            if (etalonRow) {
                return utility_1.cloneDeep(etalonRow, (function (value) {
                    if (utility_1.isArray(value)) {
                        return [];
                    }
                    if (!utility_1.isObject(value) ||
                        utility_1.isNumber(value) ||
                        utility_1.isDate(value) ||
                        utility_1.isBoolean(value) ||
                        utility_1.isFunction(value)) {
                        return null;
                    }
                }));
            }
        };
        this.rowId = utility_1.identity;
    }
    return DataManipulationModel;
}());
exports.DataManipulationModel = DataManipulationModel;


/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(559), exports);


/***/ }),
/* 559 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var index_1 = __webpack_require__(25);
var core_1 = __webpack_require__(2);
var action_bar_core_component_1 = __webpack_require__(560);
var action_bar_component_1 = __webpack_require__(562);
var action_core_component_1 = __webpack_require__(563);
var action_component_1 = __webpack_require__(565);
var ActionBarModule = /** @class */ (function () {
    function ActionBarModule() {
    }
    ActionBarModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                action_bar_component_1.ActionBarComponent,
                action_bar_core_component_1.ActionBarCoreComponent,
                action_component_1.ActionComponent,
                action_core_component_1.ActionCoreComponent
            ],
            exports: [
                action_bar_component_1.ActionBarComponent,
                action_bar_core_component_1.ActionBarCoreComponent,
                action_component_1.ActionComponent,
                action_core_component_1.ActionCoreComponent
            ],
            imports: [index_1.TemplateModule],
            providers: []
        })
    ], ActionBarModule);
    return ActionBarModule;
}());
exports.ActionBarModule = ActionBarModule;


/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var root_service_1 = __webpack_require__(33);
var plugin_component_1 = __webpack_require__(30);
var ActionBarCoreComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ActionBarCoreComponent, _super);
    function ActionBarCoreComponent(root) {
        var _this = _super.call(this, root) || this;
        _this.shortcutOff = null;
        return _this;
    }
    ActionBarCoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        var shortcut = this.model.action().shortcut;
        this.using(this.model.actionChanged.watch((function (e) {
            if (e.hasChanges('items')) {
                if (_this.shortcutOff) {
                    _this.shortcutOff();
                    _this.shortcutOff = null;
                }
                _this.shortcutOff = shortcut.register(_this.root.commandManager, e.state.items.map((function (act) { return act.command; })));
            }
        })));
    };
    Object.defineProperty(ActionBarCoreComponent.prototype, "actions", {
        get: function () {
            return this.model.action().items;
        },
        enumerable: true,
        configurable: true
    });
    ActionBarCoreComponent.prototype.ngOnDestroy = function () {
        if (this.shortcutOff) {
            this.shortcutOff();
            this.shortcutOff = null;
        }
    };
    ActionBarCoreComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-action-bar-core',
            template: __webpack_require__(561)
        }),
        tslib_1.__param(0, core_1.Optional()),
        tslib_1.__metadata("design:paramtypes", [root_service_1.RootService])
    ], ActionBarCoreComponent);
    return ActionBarCoreComponent;
}(plugin_component_1.PluginComponent));
exports.ActionBarCoreComponent = ActionBarCoreComponent;


/***/ }),
/* 561 */
/***/ (function(module, exports) {

module.exports = "<ng-container key=\"plugin-action-bar-core.tpl.html\" [context]=\"context\"></ng-container>\r\n"

/***/ }),
/* 562 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var index_1 = __webpack_require__(9);
var plugin_component_1 = __webpack_require__(30);
var core_1 = __webpack_require__(2);
var action_bar_service_1 = __webpack_require__(236);
var ActionBarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ActionBarComponent, _super);
    function ActionBarComponent(root, actionService) {
        var _this = _super.call(this, root) || this;
        actionService.model = _this.model;
        return _this;
    }
    ActionBarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-action-bar',
            template: '',
            providers: [action_bar_service_1.ActionBarService]
        }),
        tslib_1.__param(0, core_1.Optional()),
        tslib_1.__metadata("design:paramtypes", [index_1.RootService,
            action_bar_service_1.ActionBarService])
    ], ActionBarComponent);
    return ActionBarComponent;
}(plugin_component_1.PluginComponent));
exports.ActionBarComponent = ActionBarComponent;


/***/ }),
/* 563 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var error_1 = __webpack_require__(53);
var action_1 = __webpack_require__(79);
var root_service_1 = __webpack_require__(33);
var plugin_component_1 = __webpack_require__(30);
var ActionCoreComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ActionCoreComponent, _super);
    function ActionCoreComponent(root) {
        var _this = _super.call(this, root) || this;
        _this.action = null;
        return _this;
    }
    ActionCoreComponent.prototype.execute = function () {
        var action = this.action;
        if (!action) {
            throw new error_1.AppError('action-core.component', 'Action shoud be setup');
        }
        return action.command.execute();
    };
    ActionCoreComponent.prototype.canExecute = function () {
        var action = this.action;
        if (!action) {
            throw new error_1.AppError('action-core.component', 'Action shoud be setup');
        }
        return action.command.canExecute();
    };
    Object.defineProperty(ActionCoreComponent.prototype, "shortcut", {
        get: function () {
            var action = this.action;
            if (!action) {
                throw new error_1.AppError('action-core.component', 'Action shoud be setup');
            }
            return action.command.shortcut;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionCoreComponent.prototype, "title", {
        get: function () {
            var action = this.action;
            if (!action) {
                throw new error_1.AppError('action-core.component', 'Action shoud be setup');
            }
            var shortcut = this.shortcut;
            return action.title + (shortcut ? " (" + shortcut + ")" : '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionCoreComponent.prototype, "icon", {
        get: function () {
            var action = this.action;
            if (!action) {
                throw new error_1.AppError('action-core.component', 'Action shoud be setup');
            }
            return action.icon;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", action_1.Action)
    ], ActionCoreComponent.prototype, "action", void 0);
    ActionCoreComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-action-core',
            template: __webpack_require__(564)
        }),
        tslib_1.__param(0, core_1.Optional()),
        tslib_1.__metadata("design:paramtypes", [root_service_1.RootService])
    ], ActionCoreComponent);
    return ActionCoreComponent;
}(plugin_component_1.PluginComponent));
exports.ActionCoreComponent = ActionCoreComponent;


/***/ }),
/* 564 */
/***/ (function(module, exports) {

module.exports = "<ng-container key=\"plugin-action-core.tpl.html\" [context]=\"context\"></ng-container>\r\n"

/***/ }),
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var action_bar_service_1 = __webpack_require__(236);
var action_1 = __webpack_require__(130);
var ActionComponent = /** @class */ (function () {
    function ActionComponent(actionService) {
        this.actionService = actionService;
        this.id = null;
        this.title = null;
        this.icon = null;
        this.command = null;
    }
    ActionComponent.prototype.execute = function () {
        return this.command && this.command.execute();
    };
    ActionComponent.prototype.canExecute = function () {
        return this.command && this.command.canExecute();
    };
    ActionComponent.prototype.onInit = function () {
        var model = this.model;
        var action = new action_1.Action(this.command, this.title, this.icon);
        action.id = this.id;
        var actions = Array.from(model.action().items);
        actions.push(action);
        model.action({
            items: actions
        });
    };
    Object.defineProperty(ActionComponent.prototype, "model", {
        get: function () {
            return this.actionService.model;
        },
        enumerable: true,
        configurable: true
    });
    ActionComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-action',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [action_bar_service_1.ActionBarService])
    ], ActionComponent);
    return ActionComponent;
}());
exports.ActionComponent = ActionComponent;


/***/ }),
/* 566 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(567), exports);


/***/ }),
/* 567 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var title_component_1 = __webpack_require__(568);
var template_module_1 = __webpack_require__(74);
var TitleModule = /** @class */ (function () {
    function TitleModule() {
    }
    TitleModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [title_component_1.TitleComponent],
            exports: [title_component_1.TitleComponent],
            imports: [template_module_1.TemplateModule],
            providers: []
        })
    ], TitleModule);
    return TitleModule;
}());
exports.TitleModule = TitleModule;


/***/ }),
/* 568 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var plugin_component_1 = __webpack_require__(30);
var root_service_1 = __webpack_require__(33);
var TitleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TitleComponent, _super);
    function TitleComponent(root) {
        return _super.call(this, root) || this;
    }
    Object.defineProperty(TitleComponent.prototype, "value", {
        get: function () {
            return this.model.grid().title;
        },
        enumerable: true,
        configurable: true
    });
    TitleComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-title',
            template: __webpack_require__(569)
        }),
        tslib_1.__param(0, core_1.Optional()),
        tslib_1.__metadata("design:paramtypes", [root_service_1.RootService])
    ], TitleComponent);
    return TitleComponent;
}(plugin_component_1.PluginComponent));
exports.TitleComponent = TitleComponent;


/***/ }),
/* 569 */
/***/ (function(module, exports) {

module.exports = "<ng-container key=\"plugin-title.tpl.html\" [context]=\"context\"></ng-container>\r\n"

/***/ }),
/* 570 */,
/* 571 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(2);
var template_1 = __webpack_require__(25);
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(templateHost) {
        this.templateHost = templateHost;
        templateHost.key = 'toolbar.tpl.html';
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'q-grid-toolbar',
            template: '<ng-content></ng-content>',
            providers: [template_1.TemplateHostService]
        }),
        tslib_1.__metadata("design:paramtypes", [template_1.TemplateHostService])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;


/***/ }),
/* 572 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["setup"] = setup;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__head__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__body__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__focus__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__column_list__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__row__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selection__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__foot__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sort__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__group__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pivot__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__plugin__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__edit__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__toolbar__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__layer__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pagination__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__progress__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__highlight__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__visibility__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__filter__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__drag__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__style__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__scroll__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__export__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__import__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__action__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__fetch__ = __webpack_require__(596);

































function setup(model) {
	model.register('grid', __WEBPACK_IMPORTED_MODULE_0__grid__["a" /* GridModel */]).register('scene', __WEBPACK_IMPORTED_MODULE_1__scene__["b" /* SceneModel */]).register('view', __WEBPACK_IMPORTED_MODULE_2__view__["b" /* ViewModel */]).register('data', __WEBPACK_IMPORTED_MODULE_3__data__["a" /* DataModel */]).register('selection', __WEBPACK_IMPORTED_MODULE_11__selection__["a" /* SelectionModel */]).register('head', __WEBPACK_IMPORTED_MODULE_4__head__["a" /* HeadModel */]).register('body', __WEBPACK_IMPORTED_MODULE_5__body__["a" /* BodyModel */]).register('navigation', __WEBPACK_IMPORTED_MODULE_7__navigation__["a" /* NavigationModel */]).register('focus', __WEBPACK_IMPORTED_MODULE_8__focus__["a" /* FocusModel */]).register('foot', __WEBPACK_IMPORTED_MODULE_12__foot__["a" /* FootModel */]).register('layout', __WEBPACK_IMPORTED_MODULE_6__layout__["a" /* LayoutModel */]).register('row', __WEBPACK_IMPORTED_MODULE_10__row__["b" /* RowModel */]).register('columnList', __WEBPACK_IMPORTED_MODULE_9__column_list__["a" /* ColumnListModel */]).register('sort', __WEBPACK_IMPORTED_MODULE_13__sort__["a" /* SortModel */]).register('group', __WEBPACK_IMPORTED_MODULE_14__group__["a" /* GroupModel */]).register('pivot', __WEBPACK_IMPORTED_MODULE_15__pivot__["a" /* PivotModel */]).register('edit', __WEBPACK_IMPORTED_MODULE_17__edit__["a" /* EditModel */]).register('plugin', __WEBPACK_IMPORTED_MODULE_16__plugin__["a" /* PluginModel */]).register('toolbar', __WEBPACK_IMPORTED_MODULE_18__toolbar__["a" /* ToolbarModel */]).register('layer', __WEBPACK_IMPORTED_MODULE_19__layer__["a" /* LayerModel */]).register('pagination', __WEBPACK_IMPORTED_MODULE_20__pagination__["a" /* PaginationModel */]).register('progress', __WEBPACK_IMPORTED_MODULE_21__progress__["a" /* ProgressModel */]).register('highlight', __WEBPACK_IMPORTED_MODULE_22__highlight__["a" /* HighlightModel */]).register('visibility', __WEBPACK_IMPORTED_MODULE_23__visibility__["a" /* VisibilityModel */]).register('filter', __WEBPACK_IMPORTED_MODULE_24__filter__["a" /* FilterModel */]).register('drag', __WEBPACK_IMPORTED_MODULE_25__drag__["a" /* DragModel */]).register('style', __WEBPACK_IMPORTED_MODULE_26__style__["a" /* StyleModel */]).register('scroll', __WEBPACK_IMPORTED_MODULE_27__scroll__["a" /* ScrollModel */]).register('export', __WEBPACK_IMPORTED_MODULE_28__export__["a" /* ExportModel */]).register('import', __WEBPACK_IMPORTED_MODULE_29__import__["a" /* ImportModel */]).register('action', __WEBPACK_IMPORTED_MODULE_30__action__["ActionModel"]).register('fetch', __WEBPACK_IMPORTED_MODULE_31__fetch__["a" /* FetchModel */]);
}

/***/ }),
/* 573 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_model__ = __webpack_require__(574);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__grid_model__["a"]; }));


/***/ }),
/* 574 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return GridModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(26);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var GridModel = function GridModel() {
	_classCallCheck(this, GridModel);

	this.id = 'q-grid-' + Object(__WEBPACK_IMPORTED_MODULE_0__services__["guid"])();
	this.status = 'unbound'; //unbound | bound
	this.title = '';
};

/***/ }),
/* 575 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_model__ = __webpack_require__(576);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__data_model__["a"]; }));


/***/ }),
/* 576 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return DataModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe_pipe_unit__ = __webpack_require__(42);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var DataModel = function DataModel() {
	_classCallCheck(this, DataModel);

	this.rows = [];
	this.columns = [];
	this.pipe = __WEBPACK_IMPORTED_MODULE_0__pipe_pipe_unit__["PipeUnit"].default;
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
/* 577 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__focus_model__ = __webpack_require__(578);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__focus_model__["a"]; }));


/***/ }),
/* 578 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return FocusModel; }));
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FocusModel = function FocusModel() {
	_classCallCheck(this, FocusModel);

	this.rowIndex = -1;
	this.columnIndex = -1;
};

/***/ }),
/* 579 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_model__ = __webpack_require__(580);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__plugin_model__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugin_service__ = __webpack_require__(581);
/* unused harmony namespace reexport */



/***/ }),
/* 580 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return PluginModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PluginModel = function PluginModel() {
	_classCallCheck(this, PluginModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();
	this.imports = {};
};

/***/ }),
/* 581 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PluginService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PluginService = (function () {
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
							throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('plugin.service', 'To use export plugin for xlsx format please add http://github.com/SheetJS/js-xlsx library to your project');
						}
					case 'fileSaver':
						{
							throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('plugin.service', 'To use export plugin for file saving please add https://github.com/eligrey/FileSaver.js library to your project');
						}
					case 'pdf':
						{
							throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('plugin.service', 'To use export plugin for pdf format please add https://github.com/MrRio/jsPDF and https://github.com/simonbengtsson/jsPDF-AutoTable libraries to your project');
						}
					default:
						{
							throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('import library', 'Can\'t find ' + name + ' library in imports');
						}
				}
			}
			return lib;
		}
	}]);

	return PluginService;
})();

/***/ }),
/* 582 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar_model__ = __webpack_require__(583);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__toolbar_model__["a"]; }));


/***/ }),
/* 583 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ToolbarModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ToolbarModel = function ToolbarModel() {
	_classCallCheck(this, ToolbarModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();
};

/***/ }),
/* 584 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layer_model__ = __webpack_require__(585);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__layer_model__["a"]; }));


/***/ }),
/* 585 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return LayerModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var LayerModel = function LayerModel() {
	_classCallCheck(this, LayerModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();
};

/***/ }),
/* 586 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__progress_model__ = __webpack_require__(587);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__progress_model__["a"]; }));


/***/ }),
/* 587 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ProgressModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ProgressModel = function ProgressModel() {
	_classCallCheck(this, ProgressModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();
	this.isBusy = false;
	this.queue = [];
};

/***/ }),
/* 588 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visibility_model__ = __webpack_require__(589);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__visibility_model__["a"]; }));


/***/ }),
/* 589 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return VisibilityModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var VisibilityModel = function VisibilityModel() {
	_classCallCheck(this, VisibilityModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();
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
/* 590 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drag_model__ = __webpack_require__(591);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__drag_model__["a"]; }));


/***/ }),
/* 591 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return DragModel; }));
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DragModel = function DragModel() {
	_classCallCheck(this, DragModel);

	this.isActive = false;
};

/***/ }),
/* 592 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__export_model__ = __webpack_require__(593);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__export_model__["a"]; }));


/***/ }),
/* 593 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ExportModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ExportModel = function ExportModel() {
	_classCallCheck(this, ExportModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();
};

/***/ }),
/* 594 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__import_model__ = __webpack_require__(595);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__import_model__["a"]; }));


/***/ }),
/* 595 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ImportModel; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ImportModel = function ImportModel() {
	_classCallCheck(this, ImportModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();
};

/***/ }),
/* 596 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fetch_model__ = __webpack_require__(597);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__fetch_model__["a"]; }));


/***/ }),
/* 597 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return FetchModel; }));
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FetchModel = function FetchModel() {
	_classCallCheck(this, FetchModel);

	this.skip = 0;
};

/***/ }),
/* 598 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var array_column_1 = __webpack_require__(168);
exports.ArrayColumn = array_column_1.ArrayColumnModel;
var bool_column_1 = __webpack_require__(169);
exports.BoolColumn = bool_column_1.BoolColumnModel;
var currency_column_1 = __webpack_require__(192);
exports.CurrencyColumn = currency_column_1.CurrencyColumnModel;
var date_column_1 = __webpack_require__(170);
exports.DateColumn = date_column_1.DateColumnModel;
var email_column_1 = __webpack_require__(171);
exports.EmailColumn = email_column_1.EmailColumnModel;
var file_column_1 = __webpack_require__(172);
exports.FileColumn = file_column_1.FileColumnModel;
var filter_row_column_1 = __webpack_require__(174);
exports.FilterRowColumn = filter_row_column_1.FilterRowColumnModel;
var group_column_1 = __webpack_require__(175);
exports.GroupColumn = group_column_1.GroupColumnModel;
var id_column_1 = __webpack_require__(176);
exports.IdColumn = id_column_1.IdColumnModel;
var image_column_1 = __webpack_require__(177);
exports.ImageColumn = image_column_1.ImageColumnModel;
var number_column_1 = __webpack_require__(178);
exports.NumberColumn = number_column_1.NumberColumnModel;
var pad_column_1 = __webpack_require__(179);
exports.PadColumn = pad_column_1.PadColumnModel;
var password_column_1 = __webpack_require__(180);
exports.PasswordColumn = password_column_1.PasswordColumnModel;
var pivot_column_1 = __webpack_require__(181);
exports.PivotColumn = pivot_column_1.PivotColumnModel;
var reference_column_1 = __webpack_require__(182);
exports.ReferenceColumn = reference_column_1.ReferenceColumnModel;
var row_details_column_1 = __webpack_require__(187);
exports.RowDetailsColumn = row_details_column_1.RowDetailsColumnModel;
var row_expand_column_1 = __webpack_require__(186);
exports.RowExpandColumn = row_expand_column_1.RowExpandColumnModel;
var row_indicator_column_1 = __webpack_require__(183);
exports.RowIndicatorColumn = row_indicator_column_1.RowIndicatorColumnModel;
var row_number_column_1 = __webpack_require__(184);
exports.RowNumberColumn = row_number_column_1.RowNumberColumnModel;
var row_options_column_1 = __webpack_require__(185);
exports.RowOptionsColumn = row_options_column_1.RowOptionsColumnModel;
var select_column_1 = __webpack_require__(188);
exports.SelectColumn = select_column_1.SelectColumnModel;
var text_column_1 = __webpack_require__(189);
exports.TextColumn = text_column_1.TextColumnModel;
var time_column_1 = __webpack_require__(190);
exports.TimeColumn = time_column_1.TimeColumnModel;
var url_column_1 = __webpack_require__(191);
exports.UrlColumn = url_column_1.UrlColumnModel;


/***/ }),
/* 599 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = __webpack_require__(79);
exports.Action = action_1.Action;
var command_1 = __webpack_require__(107);
exports.Command = command_1.Command;
var pipe_1 = __webpack_require__(59);
exports.Pipe = pipe_1.Pipe;
var pipe_unit_1 = __webpack_require__(42);
exports.PipeUnit = pipe_unit_1.PipeUnit;
var node_1 = __webpack_require__(80);
exports.Node = node_1.Node;
var row_details_status_1 = __webpack_require__(81);
exports.RowDetailsStatus = row_details_status_1.RowDetailsStatus;


/***/ })
],[297]);
}));