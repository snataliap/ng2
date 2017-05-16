var ac_main =
webpackJsonpac__name_([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(11))(37)

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__action__ = __webpack_require__(287);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return __WEBPACK_IMPORTED_MODULE_0__action__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cache__ = __webpack_require__(288);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return __WEBPACK_IMPORTED_MODULE_1__cache__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__command__ = __webpack_require__(289);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return __WEBPACK_IMPORTED_MODULE_2__command__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error__ = __webpack_require__(45);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return __WEBPACK_IMPORTED_MODULE_3__error__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event__ = __webpack_require__(112);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return __WEBPACK_IMPORTED_MODULE_4__event__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_listener__ = __webpack_require__(113);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EventListener", function() { return __WEBPACK_IMPORTED_MODULE_5__event_listener__["EventListener"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fetch__ = __webpack_require__(290);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Fetch", function() { return __WEBPACK_IMPORTED_MODULE_6__fetch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guard__ = __webpack_require__(114);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Guard", function() { return __WEBPACK_IMPORTED_MODULE_7__guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__log__ = __webpack_require__(66);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return __WEBPACK_IMPORTED_MODULE_8__log__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_bind__ = __webpack_require__(291);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ModelBinder", function() { return __WEBPACK_IMPORTED_MODULE_9__model_bind__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model__ = __webpack_require__(292);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return __WEBPACK_IMPORTED_MODULE_10__model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shortcut__ = __webpack_require__(293);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Shortcut", function() { return __WEBPACK_IMPORTED_MODULE_11__shortcut__["a"]; });














/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isArray__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isBoolean__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isBoolean___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isBoolean__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_clone__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_clone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_clone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_cloneDeep__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_cloneDeep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_cloneDeep__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_debounce__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_merge__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_flatten__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_flatten___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_flatten__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_orderBy__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_orderBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_orderBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_startCase__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_startCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_startCase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_assignWith__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_assignWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_assignWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_uniq__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_uniq__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return __WEBPACK_IMPORTED_MODULE_2_lodash_isArray___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return __WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return __WEBPACK_IMPORTED_MODULE_3_lodash_isBoolean___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return __WEBPACK_IMPORTED_MODULE_4_lodash_clone___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "cloneDeep", function() { return __WEBPACK_IMPORTED_MODULE_5_lodash_cloneDeep___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return __WEBPACK_IMPORTED_MODULE_7_lodash_debounce___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_8_lodash_merge___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return __WEBPACK_IMPORTED_MODULE_9_lodash_flatten___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "startCase", function() { return __WEBPACK_IMPORTED_MODULE_11_lodash_startCase___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "assignWith", function() { return __WEBPACK_IMPORTED_MODULE_12_lodash_assignWith___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return __WEBPACK_IMPORTED_MODULE_13_lodash_uniq___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "orderBy", function() { return __WEBPACK_IMPORTED_MODULE_10_lodash_orderBy___default.a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return isEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yes", function() { return yes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "no", function() { return no; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCamelCase", function() { return toCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });















const noop = () => {};
const yes = () => true;
const no = () => false;
const identity = arg => arg;

const toCamelCase = (...names) => {
	const length = names.length;
	if (length > 0) {
		return names[0] +
			names.slice(1)
				.map(name =>
				name[0].toUpperCase() +
				name.substring(1, name.length));
	}

	return '';
};

const isEmail = value => {
	if (value) {
		const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		return re.test(value);
	}

	return false;
};



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility__ = __webpack_require__(4);





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('custom-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('custom-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class ColumnView extends __WEBPACK_IMPORTED_MODULE_1__view__["a" /* View */] {
	constructor(model) {
		super(model);

		this.colspan = 0;
		this.rowspan = 0;
	}

	static model(model) {
		if (model) {
			ColumnView.assign(model);
		}
		else {
			model = new __WEBPACK_IMPORTED_MODULE_0__column_model__["a" /* ColumnModel */]();
		}

		model.origin = 'custom';
		return model;
	}

	static assign(body) {
		const etalon = this.model();
		for (let key of Object.keys(etalon)) {
			if (!body.hasOwnProperty(key)) {
				body[key] = etalon[key];
			} else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services_utility__["isObject"])(body[key]) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services_utility__["isFunction"])(body[key])) {
				body[key] = Object.assign({}, etalon[key], body[key]);
			}
		}
		return body;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ColumnView;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_model__ = __webpack_require__(345);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_path__ = __webpack_require__(346);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__template_path__["a"]; });



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(349);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__view__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_model__ = __webpack_require__(350);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__view_model__["a"]; });



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["map"] = map;
/* harmony export (immutable) */ __webpack_exports__["getValue"] = getValue;
/* harmony export (immutable) */ __webpack_exports__["find"] = find;
/* harmony export (immutable) */ __webpack_exports__["findIndex"] = findIndex;
/* harmony export (immutable) */ __webpack_exports__["findView"] = findView;
/* harmony export (immutable) */ __webpack_exports__["dataView"] = dataView;
/* harmony export (immutable) */ __webpack_exports__["lineView"] = lineView;
/* harmony export (immutable) */ __webpack_exports__["widthFactory"] = widthFactory;


function map(columns) {
	return columns.reduce((memo, column) => {
		memo[column.key] = column;
		return memo;
	}, {});
}

function getValue(column) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["isFunction"])(column.value)
		? row => column.value(row)
		: row => row[column.key];
}

function find(columns, key) {
	const index = findIndex(columns, key);
	return index < 0 ? null : columns[index];
}

function findIndex(columns, key) {
	let length = columns.length;
	while (length--) {
		const column = columns[length];
		if (column.key == key) {
			return length;
		}
	}

	return -1;
}

function findView(columns, key) {
	let length = columns.length;

	while (length--) {
		const column = columns[length];
		if (column.model.key == key) {
			return column;
		}
	}

	return null;
}

function dataView(columns, model) {
	const groupBy = new Set(model.group().by);
	const pivotBy = new Set(model.pivot().by);
	return columns.filter(c => !groupBy.has(c.model.key) && !pivotBy.has(c.model.key) && c.model.isVisible !== false);
}

function lineView(columnRows) {
	const height = columnRows.length;
	if (height === 1) {
		return columnRows[0];
	}

	if (height > 1) {
		const viewColumns = columnRows[0].filter(c => c.model.type !== 'pivot' && c.model.type !== 'pad');
		const pivotColumns = columnRows[columnRows.length - 1].filter(c => c.model.type === 'pivot' || c.model.type === 'pad');
		return viewColumns.concat(pivotColumns);
	}

	return [];
}

function widthFactory(model, form) {
	const layout = model.layout;
	form = form || layout().columns;

	function materialize(column) {
		const width = column.width;
		if (('' + width).indexOf('%') >= 0) {
			return width;
		}

		return Math.max(parseInt(width), parseInt(column.minWidth || 20)) + 'px';
	}

	return column => {
		if (form.hasOwnProperty(column.key)) {
			column = form[column.key];
		}

		return column.width || column.width === 0 ? materialize(column) : null;
	};
}

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(70);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__resource__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__ = __webpack_require__(125);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resource_factory__ = __webpack_require__(322);
/* unused harmony namespace reexport */




/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model__ = __webpack_require__(22);


class DataColumnModel extends __WEBPACK_IMPORTED_MODULE_0__column_model__["a" /* ColumnModel */] {
	constructor() {
		super(...arguments);

		this.isDefault = true;
		this.aggregation = null;
		this.aggregationOptions = {
			distinct: false,
			separator: '; '
		};
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DataColumnModel;


/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aggregation__ = __webpack_require__(331);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Aggregation", function() { return __WEBPACK_IMPORTED_MODULE_0__aggregation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__convert__ = __webpack_require__(332);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "parseFactory", function() { return __WEBPACK_IMPORTED_MODULE_1__convert__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return __WEBPACK_IMPORTED_MODULE_1__convert__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return __WEBPACK_IMPORTED_MODULE_1__convert__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid__ = __webpack_require__(333);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GridService", function() { return __WEBPACK_IMPORTED_MODULE_2__grid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guid__ = __webpack_require__(334);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return __WEBPACK_IMPORTED_MODULE_3__guid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__merge__ = __webpack_require__(336);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_4__merge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__middleware__ = __webpack_require__(337);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Middleware", function() { return __WEBPACK_IMPORTED_MODULE_5__middleware__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__path__ = __webpack_require__(133);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return __WEBPACK_IMPORTED_MODULE_6__path__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style__ = __webpack_require__(134);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Monitor", function() { return __WEBPACK_IMPORTED_MODULE_7__style__["a"]; });









/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const GRID_PREFIX = 'q-grid';
/* harmony export (immutable) */ __webpack_exports__["GRID_PREFIX"] = GRID_PREFIX;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["get"] = get;
/* harmony export (immutable) */ __webpack_exports__["getFactory"] = getFactory;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;




function get(row, column) {
	return column.$value
		? column.$value({$row: row})
		: column.value
			? column.value(row)
			: column.path
				? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services__["compile"])(column.path)(row)
				: row[column.key];
}

function getFactory(column) {
	const get = column.$value
		? row => column.$value({$row: row})
		: column.value
			? row => column.value(row)
			: column.path
				? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services__["compile"])(column.path)
				: row => row[column.key];

	return row => get(row);
}

function set(row, column, value) {
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["isFunction"])(column.$value)) {
		return column.$value({$row: row, $value: value});
	}

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["isFunction"])(column.value)) {
		return column.value(row, value);
	}

	if (column.path) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services__["compile"])(column.path)(row, value);
	}

	if (row.hasOwnProperty(column.key)) {
		return row[column.key] = value;
	}

	throw new __WEBPACK_IMPORTED_MODULE_2__infrastructure__["AppError"](
		'value',
		`Row can't be edit on "${column.key}" column`);
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var ViewCoreService = (function () {
    function ViewCoreService() {
        this.markup = {};
        this.table = null;
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
        this.pin = null;
        this.markup.document = document;
    }
    return ViewCoreService;
}());
ViewCoreService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], ViewCoreService);
exports.ViewCoreService = ViewCoreService;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ColumnModel {
	constructor(type = 'text') {
		this.type = type;
		this.key = null;
		this.title = null;
		this.value = null;
		this.pin = null;
		this.origin = 'specific';
		this.source = 'user';
		this.editor = null;
		this.editorOptions = {
			trigger: 'click'
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

	toString() {
		return `${this.type}: ${this.title}`;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ColumnModel;


/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(48));
__export(__webpack_require__(155));
__export(__webpack_require__(49));
__export(__webpack_require__(386));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(158));
__export(__webpack_require__(84));
__export(__webpack_require__(82));
__export(__webpack_require__(83));


/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(11))(180)

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(11))(58)

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ElementCore = (function () {
    function ElementCore() {
    }
    Object.defineProperty(ElementCore.prototype, "model", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    ElementCore.prototype.rect = function () {
        return {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: 0,
            height: 0
        };
    };
    ElementCore.prototype.addClass = function () {
    };
    ElementCore.prototype.removeClass = function () {
    };
    Object.defineProperty(ElementCore.prototype, "width", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementCore.prototype, "height", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    return ElementCore;
}());
exports.ElementCore = ElementCore;
var empty = new ElementCore();
var Element = (function () {
    function Element(element) {
        this.element = element;
    }
    Object.defineProperty(Element, "empty", {
        get: function () {
            return empty;
        },
        enumerable: true,
        configurable: true
    });
    Element.prototype.rect = function () {
        return this.element.getBoundingClientRect();
    };
    Element.prototype.addClass = function (name) {
        this.element.classList.add(name);
    };
    Element.prototype.removeClass = function (name) {
        this.element.classList.remove(name);
    };
    Object.defineProperty(Element.prototype, "width", {
        get: function () {
            return this.element.clientWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "height", {
        get: function () {
            return this.element.clientHeight;
        },
        enumerable: true,
        configurable: true
    });
    return Element;
}());
exports.Element = Element;


/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(67);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__node__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_builder__ = __webpack_require__(301);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__node_builder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_service__ = __webpack_require__(302);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__node_service__["a"]; });




/***/ }),
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(11))(177)

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(4);


class AppError extends Error {
	constructor(name, message) {
		super(message);
		this.name = this.constructor.name;
		this.message = `qgrid.${name}: ${message}`;
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["isFunction"])(Error.captureStackTrace)) {
			Error.captureStackTrace(this, this.constructor);
		} else {
			this.stack = (new Error(message)).stack;
		}
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AppError;


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter_pipe__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination_pipe__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_pipe__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_pipe__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memo_pipe__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__group_pipe__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pivot_pipe__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__column_pipe__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_pipe__ = __webpack_require__(314);










class Pipe {
	static get data() {
		return __WEBPACK_IMPORTED_MODULE_3__data_pipe__["a" /* dataPipe */];
	}

	static get filter() {
		return __WEBPACK_IMPORTED_MODULE_0__filter_pipe__["a" /* filterPipe */];
	}

	static get pagination() {
		return __WEBPACK_IMPORTED_MODULE_1__pagination_pipe__["a" /* paginationPipe */];
	}

	static get sort() {
		return __WEBPACK_IMPORTED_MODULE_2__sort_pipe__["a" /* sortPipe */];
	}

	static get memo() {
		return __WEBPACK_IMPORTED_MODULE_4__memo_pipe__["a" /* memoPipe */];
	}

	static get group() {
		return __WEBPACK_IMPORTED_MODULE_5__group_pipe__["a" /* groupPipe */];
	}

	static get pivot() {
		return __WEBPACK_IMPORTED_MODULE_6__pivot_pipe__["a" /* pivotPipe */];
	}

	static get column() {
		return __WEBPACK_IMPORTED_MODULE_7__column_pipe__["a" /* columnPipe */];
	}

	static get view() {
		return __WEBPACK_IMPORTED_MODULE_8__view_pipe__["a" /* viewPipe */];
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Pipe;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_path__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_value__ = __webpack_require__(20);
/* harmony export (immutable) */ __webpack_exports__["get"] = get;
/* harmony export (immutable) */ __webpack_exports__["getFactory"] = getFactory;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;




function get(row, column) {
	return column.$label
		? column.$label({$row: row})
		: column.label
			? column.label(row)
			: column.labelPath
				? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_path__["a" /* compile */])(column.labelPath)(row)
				: column.title
					? column.title
					: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_value__["get"])(row, column);
}

function getFactory(column) {
	const get = column.$label
		? row => column.$label({$row: row})
		: column.label
			? row => column.label(row)
			: column.labelPath
				? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_path__["a" /* compile */])(column.labelPath)
				: column.title
					? () => column.title
					: row => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_value__["get"])(row, column);

	return row => get(row);
}

function set(row, column, label) {
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["isFunction"])(column.$label)) {
		return column.$label({$row: row, $label: label});
	}

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["isFunction"])(column.label)) {
		return column.label(row, label);
	}

	if (column.labelPath) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_path__["a" /* compile */])(column.labelPath)(row, label);
	}
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NgComponent = (function () {
    function NgComponent() {
    }
    NgComponent.prototype.ngOnInit = function () {
    };
    NgComponent.prototype.ngOnDestroy = function () {
    };
    return NgComponent;
}());
exports.NgComponent = NgComponent;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var infrastructure_1 = __webpack_require__(3);
var core_1 = __webpack_require__(1);
var RootService = (function () {
    function RootService() {
        this.gridModel = null;
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
    return RootService;
}());
RootService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], RootService);
exports.RootService = RootService;


/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group_model__ = __webpack_require__(277);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GroupModel", function() { return __WEBPACK_IMPORTED_MODULE_0__group_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group_view__ = __webpack_require__(278);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GroupView", function() { return __WEBPACK_IMPORTED_MODULE_1__group_view__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_build__ = __webpack_require__(276);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "groupBuilder", function() { return __WEBPACK_IMPORTED_MODULE_2__group_build__["a"]; });




/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*eslint-disable  no-console*/

class Log {
	constructor() {
	}

	static info(source, message) {
		console.info(`qgrid.${source}: ${message}`);
	}

	static warn(source, message) {
		console.warn(`qgrid.${source}: ${message}`);
	}

	static error(source, message) {
		console.error(`qgrid.${source}: ${message}`);
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Log;


/*eslint-enable*/

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Node {
	constructor(key, level = 0, type = 'group') {
		this.key = key;
		this.level = level;
		this.rows = [];
		this.children = [];
		this.type = type;
		this.state = {
			expand: false
		};
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Node;


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_pipe_unit__ = __webpack_require__(119);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "columnPipeUnit", function() { return __WEBPACK_IMPORTED_MODULE_0__column_pipe_unit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_pipe_unit__ = __webpack_require__(120);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "defaultPipeUnit", function() { return __WEBPACK_IMPORTED_MODULE_1__default_pipe_unit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipe_unit__ = __webpack_require__(121);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PipeUnit", function() { return __WEBPACK_IMPORTED_MODULE_2__pipe_unit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_pipe_unit__ = __webpack_require__(122);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "viewPipeUnit", function() { return __WEBPACK_IMPORTED_MODULE_3__view_pipe_unit__["a"]; });





/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pivot_build__ = __webpack_require__(315);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "build", function() { return __WEBPACK_IMPORTED_MODULE_0__pivot_build__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pivot_form__ = __webpack_require__(123);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pivotForm", function() { return __WEBPACK_IMPORTED_MODULE_1__pivot_form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pivot__ = __webpack_require__(124);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pivot", function() { return __WEBPACK_IMPORTED_MODULE_2__pivot__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pivot_model__ = __webpack_require__(316);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PivotModel", function() { return __WEBPACK_IMPORTED_MODULE_3__pivot_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pivot_view__ = __webpack_require__(317);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PivotView", function() { return __WEBPACK_IMPORTED_MODULE_4__pivot_view__["a"]; });






/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Resource {
	constructor(data = {}, scope = {}) {
		this.data = data;
		this.scope = scope;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Resource;


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node__ = __webpack_require__(41);




const keySelector = (unit, selector) => {
	switch (unit) {
		case 'row':
			return selector.row;
		case 'column':
			return selector.column;
		case 'cell':
			return entry => ({
				row: selector.row(entry.row),
				column: selector.column(entry.column)
			});
		default:
			throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('selection.state', `Invalid unit ${unit}`);
	}
};

const stringifyCellKey = (key) => {
	return `${key.column}[${key.row}]`;
};

class SelectionState {
	constructor(model) {
		this.model = model;
	}

	select(item, state = true) {
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["isArray"])(item)) {
			item.forEach(item => this.select(item, state));
			return;
		}

		if (item instanceof __WEBPACK_IMPORTED_MODULE_2__node__["c" /* Node */]) {
			const rows = this.model.data().rows;
			item.rows.forEach(index => this.select(rows[index], state));
			return;
		}

		this.selectCore(item, state);
	}

	toggle(item, state) {
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["isUndefined"])(state)) {
			state = this.state(item);
			return this.select(item, state === null || !state);
		}

		return this.select(item, state);
	}

	state(item) {
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["isArray"])(item)) {
			const all = item.every(item => this.state(item));
			return all ? true : item.some(item => this.state(item)) ? null : false;
		}

		if (item instanceof __WEBPACK_IMPORTED_MODULE_2__node__["c" /* Node */]) {
			const rows = this.model.data().rows;
			const all = item.rows.every(index => this.state(rows[index]));
			return all ? true : item.rows.some(index => this.state(rows[index])) ? null : false;
		}

		return this.stateCore(item);
	}

	clear() {
		return this.clearCore();
	}

	view(entries) {
		const selectionState = this.model.selection();
		switch (selectionState.unit) {
			case 'row':
			case 'column':
			case 'cell':
				return entries.map(keySelector(selectionState.unit, selectionState.key));
			case 'mix':
				return entries.map(entry => ({
					unit: entry.unit,
					item: keySelector(entry.unit, selectionState.key)(entry.item)
				}));
			default:
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('selection.state', `Invalid unit ${selectionState.unit}`);
		}
	}

	entries() {
		return [];
	}

	key(item) {
		const selection = this.model.selection();
		const unit = selection.unit;
		const getCellKey = (item, unit) => {
			if (item.column && item.row) {
				const key = keySelector(unit, selection.key)(item);
				return stringifyCellKey(key);
			}

			return item;
		};

		if (unit === 'cell') {
			return getCellKey(item, unit);
		}

		if (unit === 'row' || unit === 'column') {
			return keySelector(unit, selection.key)(item);
		}

		if (unit === 'mix' && item.item) {
			if (item.unit === 'cell') {
				return getCellKey(item.item, item.unit);
			}

			if (item.unit === 'row' || item.unit === 'column') {
				return keySelector(item.unit, selection.key)(item.item);
			}

			return item.item;
		}

		return item;
	}

	lookup(items, unit) {
		const entries = [];

		if (items.length === 0) {
			return entries;
		}

		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["isUndefined"])(unit)) {
			unit = this.model.selection().unit;
		}
		const data = this.model.data();

		switch (unit) {
			case 'row': {
				const rows = data.rows;
				rows.forEach(row => {
					const rowKey = this.key(row);
					const found = items.indexOf(rowKey) > -1;
					if (found) {
						entries.push(row);
					}
				});
				break;
			}
			case 'column': {
				const columns = data.columns;
				columns.forEach(column => {
					const colKey = this.key(column);
					const found = items.indexOf(colKey) > -1;
					if (found) {
						entries.push(column);
					}
				});
				break;
			}
			case 'cell': {
				const cells = [];
				data.columns.forEach(column => {
					data.rows.forEach(row => {
						cells.push({
							column: column,
							row: row
						});
					});
				});
				cells.forEach(cell => {
					const cellKey = this.key(cell);
					const found = items.findIndex(item => stringifyCellKey(item) === cellKey) > -1;
					if (found) {
						entries.push(cell);
					}
				});
				break;
			}
			case 'mix': {
				const rowKeys = items
					.filter(key => key.unit === 'row')
					.map(key => key.item);
				const colKeys = items
					.filter(key => key.unit === 'column')
					.map(key => key.item);
				const cellKeys = items
					.filter(key => key.unit === 'cell')
					.map(key => key.item);

				this.lookup(rowKeys, 'row')
					.concat(this.lookup(colKeys, 'column'))
					.concat(this.lookup(cellKeys, 'cell'));
				break;
			}
			default:
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('selection.state', `Invalid unit ${unit}`);
		}

		return entries;
	}

	selectCore() {
	}

	clearCore() {
	}

	stateCore() {
		return false;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SelectionState;


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_pair__ = __webpack_require__(338);


const key = __WEBPACK_IMPORTED_MODULE_0__services_pair__["a" /* key */];
/* harmony export (immutable) */ __webpack_exports__["a"] = key;

const index = __WEBPACK_IMPORTED_MODULE_0__services_pair__["b" /* index */];
/* harmony export (immutable) */ __webpack_exports__["c"] = index;

const direction = __WEBPACK_IMPORTED_MODULE_0__services_pair__["c" /* value */];
/* harmony export (immutable) */ __webpack_exports__["b"] = direction;

const map = __WEBPACK_IMPORTED_MODULE_0__services_pair__["d" /* map */];
/* harmony export (immutable) */ __webpack_exports__["d"] = map;


/***/ }),
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
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
    return DragService;
}());
DragService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], DragService);
exports.DragService = DragService;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var infrastructure_1 = __webpack_require__(3);
var element_1 = __webpack_require__(36);
var CellCore = (function (_super) {
    tslib_1.__extends(CellCore, _super);
    function CellCore() {
        return _super.call(this) || this;
    }
    return CellCore;
}(element_1.ElementCore));
exports.CellCore = CellCore;
var empty = new CellCore();
var Cell = (function (_super) {
    tslib_1.__extends(Cell, _super);
    function Cell(element) {
        return _super.call(this, element) || this;
    }
    Object.defineProperty(Cell, "empty", {
        get: function () {
            return empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "model", {
        get: function () {
            // const ctrl = angular.element(this.element).controller(TD_CORE_NAME);
            // if (!ctrl) {
            throw new infrastructure_1.AppError('cell', 'Controller for cell is not found');
            // }
            //
            // return ctrl;
        },
        enumerable: true,
        configurable: true
    });
    return Cell;
}(element_1.Element));
exports.Cell = Cell;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(417));
__export(__webpack_require__(418));


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var infrastructure_1 = __webpack_require__(3);
var utility_1 = __webpack_require__(4);
var core_1 = __webpack_require__(1);
var component_1 = __webpack_require__(24);
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
    return PluginComponent;
}(component_1.NgComponent));
tslib_1.__decorate([
    core_1.Input('model'),
    tslib_1.__metadata("design:type", Object)
], PluginComponent.prototype, "gridModel", void 0);
PluginComponent = tslib_1.__decorate([
    tslib_1.__param(0, core_1.Optional()),
    tslib_1.__metadata("design:paramtypes", [component_1.RootService])
], PluginComponent);
exports.PluginComponent = PluginComponent;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
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
    return TemplateCacheService;
}());
TemplateCacheService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], TemplateCacheService);
exports.TemplateCacheService = TemplateCacheService;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
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
    return TemplateLinkService;
}());
TemplateLinkService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], TemplateLinkService);
exports.TemplateLinkService = TemplateLinkService;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var template_directive_1 = __webpack_require__(431);
var template_link_directive_1 = __webpack_require__(430);
var template_cache_directive_1 = __webpack_require__(429);
var TemplateModule = (function () {
    function TemplateModule() {
    }
    return TemplateModule;
}());
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
exports.TemplateModule = TemplateModule;


/***/ }),
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
/* 99 */,
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Angular 2
var platform_browser_1 = __webpack_require__(32);
var core_1 = __webpack_require__(1);
// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) { return value; };
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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(11))(221)

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__body_model__ = __webpack_require__(228);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BodyModel", function() { return __WEBPACK_IMPORTED_MODULE_0__body_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__body_view__ = __webpack_require__(229);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BodyView", function() { return __WEBPACK_IMPORTED_MODULE_1__body_view__["a"]; });



/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_list_generate__ = __webpack_require__(230);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__column_list_generate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_list_model__ = __webpack_require__(231);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__column_list_model__["a"]; });



/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_type_column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_type__ = __webpack_require__(240);
/* harmony export (immutable) */ __webpack_exports__["a"] = columnFactory;





function merge(target, source) {
	if (target && source) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["assignWith"])(target, source, (s, t) => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["isUndefined"])(s) ? t : s);
	}

	return target || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["clone"])(source);
}

function columnFactory(model) {
	const columnList = model.columnList;
	const columnMap = {
		'text': __WEBPACK_IMPORTED_MODULE_3__column_type__["a" /* TextColumn */],
		'number': __WEBPACK_IMPORTED_MODULE_3__column_type__["b" /* NumberColumn */],
		'bool': __WEBPACK_IMPORTED_MODULE_3__column_type__["c" /* BoolColumn */],
		'date': __WEBPACK_IMPORTED_MODULE_3__column_type__["d" /* DateColumn */],
		'array': __WEBPACK_IMPORTED_MODULE_3__column_type__["e" /* ArrayColumn */],
		'email': __WEBPACK_IMPORTED_MODULE_3__column_type__["f" /* EmailColumn */],
		'password': __WEBPACK_IMPORTED_MODULE_3__column_type__["g" /* PasswordColumn */],
		'select': __WEBPACK_IMPORTED_MODULE_3__column_type__["h" /* SelectColumn */],
		'group': __WEBPACK_IMPORTED_MODULE_3__column_type__["i" /* GroupColumn */],
		'pivot': __WEBPACK_IMPORTED_MODULE_3__column_type__["j" /* PivotColumn */],
		'row-number': __WEBPACK_IMPORTED_MODULE_3__column_type__["k" /* RowNumberColumn */],
		'row-indicator': __WEBPACK_IMPORTED_MODULE_3__column_type__["l" /* RowIndicatorColumn */],
		'pad': __WEBPACK_IMPORTED_MODULE_3__column_type__["m" /* PadColumn */],
		'time': __WEBPACK_IMPORTED_MODULE_3__column_type__["n" /* TimeColumn */],
		'url': __WEBPACK_IMPORTED_MODULE_3__column_type__["o" /* UrlColumn */],
		'file': __WEBPACK_IMPORTED_MODULE_3__column_type__["p" /* FileColumn */],
		'image': __WEBPACK_IMPORTED_MODULE_3__column_type__["q" /* ImageColumn */],
		'reference': __WEBPACK_IMPORTED_MODULE_3__column_type__["r" /* ReferenceColumn */],
		'id': __WEBPACK_IMPORTED_MODULE_3__column_type__["s" /* IdColumn */],
		'custom': __WEBPACK_IMPORTED_MODULE_2__column_type_column_model_view__["a" /* ColumnView */]
	};

	const create = (entityType, columnType, body) => {
		const Type = columnMap[entityType];
		const settings = columnList().reference[columnType];
		body = merge(body, settings);

		const model = Type.model(body);
		return new Type(model);
	};

	return (type, body = null) => {
		__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Guard"].notNullOrEmpty(type, 'type');

		if (columnMap.hasOwnProperty(type)) {
			return create(type, type, body);
		}

		return create('custom', type, body);
	};
}

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility__ = __webpack_require__(4);




class CellEditorCore {
	constructor() {
		this.value = null;
		this.fetch = __WEBPACK_IMPORTED_MODULE_2__services_utility__["noop"];
		this.resetFetch = __WEBPACK_IMPORTED_MODULE_2__services_utility__["noop"];
	}

	commit() {
	}

	reset() {
	}

	get options() {
		return {};
	}
}

const empty = new CellEditorCore();

class CellEditor extends CellEditorCore {
	constructor(cell) {
		super();

		this.cell = cell;
		this.fetch = this.fetchFactory();
		this.resetFetch = this.fetch.run(cell.row);

		const parse = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services__["parseFactory"])(cell.column.type);
		this.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_utility__["isUndefined"])(cell.value) ? null : parse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_utility__["clone"])(cell.value));
		this.label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_utility__["isUndefined"])(cell.label) ? null : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_utility__["clone"])(cell.label);
	}

	commit() {
		this.cell.value = this.value;
		this.cell.label = this.label;
		this.resetFetch();
		this.resetFetch = __WEBPACK_IMPORTED_MODULE_2__services_utility__["noop"];
	}

	reset() {
		this.value = this.cell.value;
		this.resetFetch();
		this.resetFetch = __WEBPACK_IMPORTED_MODULE_2__services_utility__["noop"];
	}

	get title() {
		return this.cell.column.title;
	}

	get options() {
		return this.cell.column.editorOptions;
	}

	fetchFactory() {
		const options = this.options;
		if (options && options.fetch) {
			return new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Fetch"](options.fetch);
		}
		return new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Fetch"](() => this.cell.value);
	}

	static get empty() {
		return empty;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CellEditor;


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_model__ = __webpack_require__(259);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EditModel", function() { return __WEBPACK_IMPORTED_MODULE_0__edit_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_view__ = __webpack_require__(262);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EditView", function() { return __WEBPACK_IMPORTED_MODULE_1__edit_view__["a"]; });



/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);


class Visitor {
	constructor() {
	}

	visit(item, depth) {
		switch (item.kind) {
			case 'group':
				return this.visitGroup(item, (depth || 0) + 1);
			case 'condition':
				return this.visitCondition(item, depth || 0);
			case 'function':
				return this.visitFunction(item, depth || 0);
			default:
				throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"])(
					'expression.visitor',
					`Invalid kind ${item.kind}`
				);
		}
	}

	visitGroup(group, depth) {
		if (group.right) {
			this.visit(group.left, depth);
			this.visit(group.right, depth);
		}

		return this.visit(group.left, depth);
	}

	visitCondition(condition, depth) {
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
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"](
					'expression.visitor',
					`Invalid operation ${condition.op}`
				);
		}
	}

	visitUnary(condition) {
		this.visitLeft(condition.left);
	}

	visitBinary(condition/*, depth*/) {
		this.visitLeft(condition.left);
		this.visitRight(condition.right);
	}

	visitLeft(left) {
		if (left.kind) {
			switch (left.kind) {
				case 'function':
					this.visitArguments(left.arguments);
			}
		}
	}

	visitBetween(/*condition, depth*/) {
	}

	visitIn(/*condition, depth*/) {
	}

	visitFunction(/*fn*/) {
	}

	visitArguments(args) {
		return args.map(arg => {
			switch (arg.kind) {
				case 'condition':
				case 'group':
					this.visit(arg);
			}
		});
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Visitor;


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter_model__ = __webpack_require__(267);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FilterModel", function() { return __WEBPACK_IMPORTED_MODULE_0__filter_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter_view__ = __webpack_require__(268);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FilterView", function() { return __WEBPACK_IMPORTED_MODULE_1__filter_view__["a"]; });



/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foot_model__ = __webpack_require__(272);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FootModel", function() { return __WEBPACK_IMPORTED_MODULE_0__foot_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foot_view__ = __webpack_require__(273);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FootView", function() { return __WEBPACK_IMPORTED_MODULE_1__foot_view__["a"]; });



/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__head_model__ = __webpack_require__(279);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HeadModel", function() { return __WEBPACK_IMPORTED_MODULE_0__head_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__head_view__ = __webpack_require__(280);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HeadView", function() { return __WEBPACK_IMPORTED_MODULE_1__head_view__["a"]; });



/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__highlight_model__ = __webpack_require__(284);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HighlightModel", function() { return __WEBPACK_IMPORTED_MODULE_0__highlight_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__highlight_view__ = __webpack_require__(285);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HighlightView", function() { return __WEBPACK_IMPORTED_MODULE_1__highlight_view__["a"]; });




/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Event {
	constructor(e = () => null) {
		this.handlers = [];
		this.isDirty = false;
		this.e = e;
	}

	on(f) {
		const handlers = this.handlers;
		handlers.push(f);
		return () => {
			const index = handlers.indexOf(f);
			if (index >= 0) {
				handlers.splice(index, 1);
			}
		};
	}

	watch(f) {
		if(this.isDirty) {
			f(this.e());
		}

		return this.on(f);
	}

	emit(e) {
		this.isDirty = true;
		const temp = Array.from(this.handlers);
		for (let i = 0, length = temp.length; i < length; i++) {
			temp[i](e);
		}
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Event;


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class EventListener {
	constructor(context, element) {
		this.element = element;
		this.context = context;
		this.handlers = {};
	}

	on(name, f) {
		const context = this.context;
		const handler = f.bind(context);
		const handlerSet = this.handlers[name] || (this.handlers[name] = []);
		handlerSet.push(handler);
		this.element.addEventListener(name, handler, false);
		return () => {
			this.element.removeEventListener(name, handler);
			const index = handlerSet.indexOf(handler);
			if (index >= 0) {
				handlerSet.splice(index, 1);
			}
		};
	}

	off() {
		const handlers = this.handlers;
		const element = this.element;
		for (let key of Object.keys(handlers)) {
			for (let handler of Array.from(handlers[key])) {
				element.removeEventListener(key, handler);
			}
		}
	}
}
/* harmony export (immutable) */ __webpack_exports__["EventListener"] = EventListener;


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(4);



class Guard {
	/**
	 * If value is undefined exception will be thrown
	 * @param {any} value - Value to check
	 * @param {string} name - Argument name
	 */
	static notUndefined(value, name) {
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["isUndefined"])(value)) {
			throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('guard.notUndefined', name);
		}
	}


	/**
	 * If value is null or undefined exception will be thrown
	 * @param {any} value - Value to check
	 * @param {string} name - Argument name
	 */
	static notNull(value, name) {
		if (value === null || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["isUndefined"])(value)) {
			throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('guard.notNull', name);
		}
	}

	/**
	 * If value is null or undefined or empty exception will be thrown
	 * @param {any} value - Value to check
	 * @param {string} name - Argument name
	 */
	static notNullOrEmpty(value, name) {
		if (value === null || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["isUndefined"])(value) || value === '') {
			throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('guard.notNullOrEmpty', name);
		}
	}

	/**
	 * If value is not a function exception will be thrown
	 * @param {any} value - Value to check
	 * @param {string} name - Argument name
	 */
	static invokable(value, name) {
		if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["isFunction"])(value)) {
			throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('guard.invokable', name);
		}
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Guard;


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_model__ = __webpack_require__(296);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LayoutModel", function() { return __WEBPACK_IMPORTED_MODULE_0__layout_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_view__ = __webpack_require__(297);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LayoutView", function() { return __WEBPACK_IMPORTED_MODULE_1__layout_view__["a"]; });



/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navigation_model__ = __webpack_require__(299);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NavigationModel", function() { return __WEBPACK_IMPORTED_MODULE_0__navigation_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_view__ = __webpack_require__(300);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NavigationView", function() { return __WEBPACK_IMPORTED_MODULE_1__navigation_view__["a"]; });



/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pagination_model__ = __webpack_require__(303);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PaginationModel", function() { return __WEBPACK_IMPORTED_MODULE_0__pagination_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination_view__ = __webpack_require__(304);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PaginationView", function() { return __WEBPACK_IMPORTED_MODULE_1__pagination_view__["a"]; });



/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(46);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Pipe", function() { return __WEBPACK_IMPORTED_MODULE_0__pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_build__ = __webpack_require__(311);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "build", function() { return __WEBPACK_IMPORTED_MODULE_1__pipe_build__["a"]; });



/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(46);


const columnPipeUnit = [
	(memo, context, next) => {
		const view = context.model.view();
		next({
			rows: view.rows,
			pivot: view.pivot,
			nodes: view.nodes
		});
	},
	__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].column,
	(memo, context, next) => {
		context.model.view({
			columns: memo.columns
		});

		next(memo);
	}
];
/* harmony export (immutable) */ __webpack_exports__["a"] = columnPipeUnit;


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(46);


const defaultPipeUnit = [
	__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].data,
	__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].filter,
	__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].sort,
	__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].pagination,
	__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].memo,
	__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].group,
	__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].pivot,
	__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].column,
	__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].view
];
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultPipeUnit;


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__default_pipe_unit__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_pipe_unit__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_pipe_unit__ = __webpack_require__(119);




class PipeUnit {
	static get default() {
		return __WEBPACK_IMPORTED_MODULE_0__default_pipe_unit__["a" /* defaultPipeUnit */];
	}

	static get view() {
		return __WEBPACK_IMPORTED_MODULE_1__view_pipe_unit__["a" /* viewPipeUnit */];
	}

	static get column() {
		return __WEBPACK_IMPORTED_MODULE_2__column_pipe_unit__["a" /* columnPipeUnit */];
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PipeUnit;


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(46);


const viewPipeUnit = [
	__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].data,
	__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].memo,
	__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].column,
	__WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* Pipe */].view
];
/* harmony export (immutable) */ __webpack_exports__["a"] = viewPipeUnit;


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = pivotForm;


function injectData(schema, source, target) {
	return Object
		.keys(source)
		.filter(key => !schema.hasOwnProperty(key))
		.reduce((memo, key) => {
			memo[key] = source[key];
			return memo;
		}, target);
}

function expandData(schema, source) {
	const baseline =
		Object.keys(schema)
			.map(key => {
				const node = schema[key];
				return source && source.hasOwnProperty(key)
					? expandData(node, source[key])
					: expandData(node);
			});

	return baseline.length
		? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["flatten"])(baseline, true)
		: [source];
}

function liftSchema(schema) {
	const baseline = [];

	function lift(schema, depth) {
		const derivatives =
			schema
				? Object.keys(schema)
					.map(key => {
						const node = schema[key];
						return {
							key: key,
							value: lift(node, depth + 1)
						};
					})
				: [];

		if (derivatives.length > 0)
			if (!baseline[depth]) {
				baseline[depth] = derivatives;
			}
			else {
				baseline[depth].push(...derivatives);
			}

		return (derivatives.length && derivatives.reduce((memo, d) => memo + d.value, 0)) || 1;
	}

	lift(schema, 0);
	return baseline;
}

function sortSchema(schema, comparator) {
	return Object
		.keys(schema)
		.sort(comparator)
		.reduce((memo, key) => {
			memo[key] = sortSchema(schema[key], comparator);
			return memo;
		}, {});
}

function pivotForm(source, comparator) {
	if (source.schema && source.data) {
		const schema = sortSchema(source.schema, comparator);
		const rows = source.data.map(row => injectData(schema, row, expandData(schema, row)));
		const heads = liftSchema(schema);
		return {heads, rows};
	}

	return {heads: [], rows: []};
}

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pivot;
class Plan {
	constructor(schema) {
		this.isRoot = !arguments.length;
		this.current = this.schema = schema || {};
	}

	branch() {
		return new Plan(this.current);
	}

	cursor(name) {
		const schema = this.schema;
		this.current =
			schema.hasOwnProperty(name)
				? schema[name]
				: schema[name] = {};
	}

	compile(data) {
		if (this.isRoot) {
			return {
				schema: this.schema,
				data: data
			};
		}
		else {
			return data;
		}
	}
}

function factory(plan) {
	return name => {
		plan.cursor(name);
		return settings => {
			return pivot(settings, plan.branch());
		};
	};
}

function pivot(settings, plan) {
	plan = plan || new Plan();

	const pivot = factory(plan);
	const aggregate = row => {
		return settings
			.selector(row)
			.reduce((memo, selection) => {
				const name = settings.name(selection);
				memo[name] = settings.value(selection, row, pivot(name));
				return memo;
			}, settings.factory(row));
	};

	return rows =>
		plan.compile(
			plan.isRoot
				? rows.map(aggregate)
				: aggregate(rows));
}

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(70);


class EnumerableResource extends __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]{
	constructor(data = {}, scope = {}, count = 0) {
		super(data, scope);

		this.count = count;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EnumerableResource;



/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scroll_model__ = __webpack_require__(325);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ScrollModel", function() { return __WEBPACK_IMPORTED_MODULE_0__scroll_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_view__ = __webpack_require__(326);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return __WEBPACK_IMPORTED_MODULE_1__scroll_view__["a"]; });



/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__range_build__ = __webpack_require__(128);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "rangeBuilder", function() { return __WEBPACK_IMPORTED_MODULE_0__range_build__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selection_model__ = __webpack_require__(327);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return __WEBPACK_IMPORTED_MODULE_1__selection_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_view__ = __webpack_require__(328);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SelectionView", function() { return __WEBPACK_IMPORTED_MODULE_2__selection_view__["a"]; });




/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = rangeBuilder;



function rangeBuilder(model) {
	function rangeRows(startCell, endCell) {
		const rows = model.view().rows;
		if (!endCell) {
			return [rows[startCell.rowIndex]];
		}

		const startIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
		const endIndex = Math.max(startCell.rowIndex, endCell.rowIndex);
		return rows.slice(startIndex, endIndex + 1);
	}

	function rangeColumns(startCell, endCell) {
		const columns = __WEBPACK_IMPORTED_MODULE_0__column_column_service__["lineView"](model.view().columns);
		if (!endCell) {
			return [columns.find(c => c.model === startCell.column).model];
		}

		const startIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
		const endIndex = Math.max(startCell.columnIndex, endCell.columnIndex);
		return columns.slice(startIndex, endIndex + 1).map(column => column.model);
	}

	function rangeCells(startCell, endCell) {
		if (!endCell) {
			return [{
				column: startCell.column,
				row: startCell.row
			}];
		}

		const rows = model.view().rows;
		const columns = __WEBPACK_IMPORTED_MODULE_0__column_column_service__["lineView"](model.view().columns);

		const startRowIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
		const endRowIndex = Math.max(startCell.rowIndex, endCell.rowIndex);

		const startColumnIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
		const endColumnIndex = Math.max(startCell.columnIndex, endCell.columnIndex);

		const rowsSelected = rows.slice(startRowIndex, endRowIndex + 1);
		const columnsSelected = columns.slice(startColumnIndex, endColumnIndex + 1);

		const items = [];
		rowsSelected.forEach(row => {
			columnsSelected
				.filter(column => column.model.type !== 'row-indicator')
				.forEach(column => {
					items.push({
						column: column.model,
						row: row
					});
				});
		});

		return items;
	}

	function rangeMix(startCell, endCell) {
		const mixUnit = startCell.column.type === 'row-indicator' ? 'row' : 'cell';
		const range = (mixUnit === 'row' ? rangeRows(startCell, endCell) : rangeCells(startCell, endCell));
		return range
			.map(item => ({
				item: item,
				unit: mixUnit
			}));
	}

	const rangeMap = {
		'row': rangeRows,
		'column': rangeColumns,
		'cell': rangeCells,
		'mix': rangeMix,
	};

	return (...args) => {
		const selection = model.selection();
		const getRange = rangeMap[selection.unit];
		if (!getRange) {
			throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["AppError"]('range.builder', `Invalid unit ${selection.unit}`);
		}

		return getRange(...args);
	};
}

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_state__ = __webpack_require__(71);


class MultipleSelectionState extends __WEBPACK_IMPORTED_MODULE_0__selection_state__["a" /* SelectionState */] {
	constructor(model) {
		super(model);

		this.items = new Map();
	}

	entries() {
		return Array.from(this.items.values());
	}

	selectCore(item, state) {
		if (state) {
			this.items.set(this.key(item), item);
		}
		else {
			this.items.delete(this.key(item));
		}
	}

	stateCore(item) {
		return this.items.has(this.key(item));
	}

	clearCore() {
		this.items = new Map();
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = MultipleSelectionState;


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_state__ = __webpack_require__(71);


class SingleSelectionState extends __WEBPACK_IMPORTED_MODULE_0__selection_state__["a" /* SelectionState */] {
	constructor(model) {
		super(model);

		this.item = null;
	}

	entries() {
		return this.item ? [this.item] : [];
	}

	selectCore(item, state) {
		if (state) {
			this.item = item;
		}
		else {
			this.item = null;
		}
	}

	stateCore(item) {
		return this.item && this.key(item) === this.key(this.item);
	}

	clearCore() {
		this.item = null;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SingleSelectionState;


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__markup__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_css_escape__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_css_escape___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_css_escape__);
/* harmony export (immutable) */ __webpack_exports__["b"] = sheet;



const escape = __WEBPACK_IMPORTED_MODULE_1_css_escape___default.a;
/* harmony export (immutable) */ __webpack_exports__["a"] = escape;


function sheet(id) {
	let sheet = document.getElementById(id);
	const getSheet = () => {
		if (!sheet) {
			sheet = document.createElement('style');
			sheet.type = 'text/css';
			sheet.id = id;
			document.getElementsByTagName('head')[0].appendChild(sheet);
		}

		return sheet;
	};

	return {
		set: css => {
			const sheet = getSheet();
			sheet.innerHTML = __WEBPACK_IMPORTED_MODULE_0__markup__["a" /* build */](css);
		},
		remove: () => {
			if (sheet) {
				sheet.parentNode.removeChild(sheet);
			}
		}
	};
}

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isImage;
function isImage(name) {
	return !!name && name.toLowerCase().search(/png|jpg|jpeg|svg/) > -1;
}


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compile;
function compile(path) {
	const parts = path.split('.');
	const last = parts.length - 1;
	const accessor =
		parts.filter((part, index) => index !== last)
			.reduce((accessor, part) =>
					accessor
						? entry => accessor(entry)[part]
						: entry => entry[part],
				null);

	const key = parts[last];
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
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_css__ = __webpack_require__(131);


class Element {
	constructor(element, sheets) {
		this.element = element;
		this.oldList = {};
		this.newList = {};
		this.sheets = sheets;
	}

	class(key, style) {
		key = __WEBPACK_IMPORTED_MODULE_0__services_css__["a" /* escape */](key);
		this.newList[key] = true;
		if (style) {
			const sheets = this.sheets;
			if (!sheets.has(key)) {
				sheets.set(key, style);
			}
		}
	}
}

class Monitor {
	constructor(model) {
		this.model = model;
		this.map = new Map();
		this.entries = [];
		this.newSheets = new Map();
		this.oldSheets = new Map();
	}

	add(element) {
		this.map.set(element, null);
	}

	remove(element) {
		this.map.delete(element);
	}

	enter() {
		const newSheets = this.newSheets;
		return element => {
			let entry = this.map.get(element);
			if (entry) {
				entry.oldList = entry.newList;
				entry.newList = {};
			}
			else {
				entry = new Element(element);
				this.map.set(element, entry);
			}

			entry.sheets = newSheets;
			this.entries.push(entry);
			return entry.class.bind(entry);
		};
	}

	exit() {
		const entries = this.entries;
		let length = entries.length;
		while (length-- > 0) {
			const entry = entries[length];
			const classList = entry.element.classList;
			const newList = entry.newList;
			const oldList = entry.oldList;
			for (let cls of Object.keys(oldList)) {
				if (!newList.hasOwnProperty(cls)) {
					classList.remove(cls);
				}
			}

			for (let cls of Object.keys(newList)) {
				if (!classList.contains(cls)) {
					classList.add(cls);
				}
			}
		}

		const newSheets = this.newSheets;
		const oldSheets = this.oldSheets;
		const id = this.model.grid().id;
		for (let cls of oldSheets.keys()) {
			if (!newSheets.has(cls)) {
				const sheet = __WEBPACK_IMPORTED_MODULE_0__services_css__["b" /* sheet */](`${id}-${cls}`);
				sheet.remove();
			}
		}

		for (let [cls, style] of newSheets.entries()) {
			if (!oldSheets.has(cls)) {
				const sheet = __WEBPACK_IMPORTED_MODULE_0__services_css__["b" /* sheet */](`${id}-${cls}`);
				sheet.set({[`.${cls}`]: style});
			}
		}

		this.entries = [];
		this.oldSheets = newSheets;
		this.newSheets = new Map();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Monitor;


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sort_model__ = __webpack_require__(339);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SortModel", function() { return __WEBPACK_IMPORTED_MODULE_0__sort_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sort_view__ = __webpack_require__(340);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SortView", function() { return __WEBPACK_IMPORTED_MODULE_1__sort_view__["a"]; });



/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_model__ = __webpack_require__(341);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "StyleModel", function() { return __WEBPACK_IMPORTED_MODULE_0__style_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_view__ = __webpack_require__(342);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "StyleView", function() { return __WEBPACK_IMPORTED_MODULE_1__style_view__["a"]; });



/***/ }),
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
/* 148 */,
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
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
    return AppState;
}());
AppState = tslib_1.__decorate([
    core_1.Injectable()
], AppState);
exports.AppState = AppState;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(374));


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(375));


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(197);
var Observable_1 = __webpack_require__(193);
__webpack_require__(606);
__webpack_require__(30);
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
    return DataService;
}());
DataService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var infrastructure_1 = __webpack_require__(3);
var drag_service_1 = __webpack_require__(78);
var definition_1 = __webpack_require__(19);
var component_1 = __webpack_require__(24);
var DragDirective = (function () {
    function DragDirective(root, elementRef) {
        this.root = root;
        this.element = elementRef.nativeElement;
        this.listener = new infrastructure_1.EventListener(this, this.element);
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
        var source = this.transfer();
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
        var source = this.transfer();
        return {
            $event: {
                source: source,
                target: null
            }
        };
    };
    return DragDirective;
}());
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
exports.DragDirective = DragDirective;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var infrastructure_1 = __webpack_require__(3);
var drag_service_1 = __webpack_require__(78);
var definition_1 = __webpack_require__(19);
var component_1 = __webpack_require__(24);
var DropDirective = (function () {
    function DropDirective(root, elementRef) {
        this.root = root;
        this.onDrop = new core_1.EventEmitter();
        this.element = elementRef.nativeElement;
        this.listener = new infrastructure_1.EventListener(this, this.element);
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
        var target = this.transfer();
        var source = arguments.length
            ? drag_service_1.DragService.decode(e.getData(drag_service_1.DragService.mimeType))
            : drag_service_1.DragService.transfer;
        return {
            $event: {
                source: source,
                target: target
            }
        };
    };
    return DropDirective;
}());
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
    tslib_1.__param(0, core_1.Optional()),
    tslib_1.__metadata("design:paramtypes", [component_1.RootService, core_1.ElementRef])
], DropDirective);
exports.DropDirective = DropDirective;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
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
        this.commit = this.setup();
        this.commit();
    };
    ModelComponent.prototype.ngOnChanges = function (changes) {
        this.commit();
    };
    ModelComponent.prototype.ngOnDestroy = function () {
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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(396));


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(412));


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
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
    return ThemeService;
}());
ThemeService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], ThemeService);
exports.ThemeService = ThemeService;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var ThemeService = (function () {
    function ThemeService() {
        this.name = 'material';
    }
    return ThemeService;
}());
ThemeService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], ThemeService);
exports.ThemeService = ThemeService;


/***/ }),
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(11))(0)

/***/ }),
/* 194 */,
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(11))(123)

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(11))(135)

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(11))(136)

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(11))(218)

/***/ }),
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(11))(63)

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(94)

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// App
__export(__webpack_require__(371));


/***/ }),
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
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(11))(219)

/***/ }),
/* 226 */,
/* 227 */,
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);



class BodyModel {
	constructor() {
		this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
		this.cache = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Cache"]();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BodyModel;


/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_column_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_value__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_label__ = __webpack_require__(47);








class BodyView extends __WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */] {
	constructor(model, table) {
		super(model);

		this.table = table;
		this.rows = [];
		this.columns = [];

		model.viewChanged.watch(() => this.invalidate(model));
	}

	invalidate(model) {
		__WEBPACK_IMPORTED_MODULE_3__infrastructure__["Log"].info('view.body', 'invalidate');

		this.invalidateRows(model);
		this.invalidateColumns(model);
	}

	invalidateRows(model) {
		this.table.body.removeLayer('blank');
		this.rows = model.view().rows;
		if (!this.rows.length) {
			const laterState = model.layer();
			if (laterState.resource.data.hasOwnProperty('blank')) {
				const layer = this.table.body.addLayer('blank');
				layer.resource('blank', laterState.resource);
			}
		}
	}

	invalidateColumns(model) {
		const columns = model.view().columns;
		this.columns = __WEBPACK_IMPORTED_MODULE_1__column_column_service__["lineView"](columns).filter(c => c.model.pin === this.table.pin);
	}

	valueFactory(column) {
		const model = this.model;
		const getValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__services_value__["getFactory"])(column);

		return row => {
			if (row instanceof __WEBPACK_IMPORTED_MODULE_4__node__["c" /* Node */]) {
				const node = row;
				const rows = model.data().rows;
				switch (node.type) {
					case 'group': {
						const aggregation = column.aggregation;
						if (aggregation) {
							if (!__WEBPACK_IMPORTED_MODULE_2__services__["Aggregation"].hasOwnProperty(aggregation)) {
								throw new __WEBPACK_IMPORTED_MODULE_3__infrastructure__["AppError"](
									'view.body',
									`Aggregation ${aggregation} is not registered`);
							}

							const groupRows = node.rows.map(i => rows[i]);
							return __WEBPACK_IMPORTED_MODULE_2__services__["Aggregation"][aggregation](groupRows, getValue, column.aggregationOptions);
						}

						return null;
					}
					case 'row': {
						const rowIndex = node.rows[0];
						return getValue(rows[rowIndex], column);
					}
					default:
						throw new __WEBPACK_IMPORTED_MODULE_3__infrastructure__["AppError"](
							'view.body',
							`Invalid node type ${node.type}`
						);
				}
			}

			return getValue(row);
		};
	}

	labelFactory(column) {
		const getLabel = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__services_label__["getFactory"])(column);
		return row => getLabel(row);
	}

	value(row, column, value) {
		if (arguments.length == 3) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__services_value__["set"])(row, column, value);
			return;
		}

		const getValue = this.valueFactory(column);
		return getValue(row);
	}

	label(row, column, value) {
		if (arguments.length === 3) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__services_label__["set"])(row, column, value);
			return;
		}

		const getLabel = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__services_label__["getFactory"])(column);
		return getLabel(row);
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BodyView;


/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(17);
/* harmony export (immutable) */ __webpack_exports__["a"] = generate;



function generate(rows, columnFactory, deep = true) {
	if (!rows || rows.length === 0) {
		return [];
	}

	return build(rows[0], null, columnFactory, deep);
}

function build(graph, path, columnFactory, deep) {
	const props = Object.getOwnPropertyNames(graph);
	return props.reduce((columns, prop) => {
		const value = graph[prop];
		const propPath = path ? `${path}.${prop}` : prop;
		const type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services__["getType"])(value);
		switch (type) {
			case 'array': {
				const column = columnFactory(type).model;
				column.key = propPath;
				column.title = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["startCase"])(propPath);
				column.path = propPath;
				column.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services__["compile"])(propPath);
				column.source = 'generation';
				columns.push(column);
				break;
			}
			case 'collection': {
				break;
			}
			case 'object': {
				if (deep) {
					columns.push(...build(value, propPath, columnFactory, true));
				}
				break;
			}
			default: {
				const column = columnFactory(type).model;
				column.key = propPath;
				column.title = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["startCase"])(propPath);
				column.path = propPath;
				column.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services__["compile"])(propPath);
				column.source = 'generation';
				columns.push(column);
				break;
			}
		}

		return columns;
	}, []);
}

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ColumnListModel {
	constructor() {
		this.generation = null; // deep | shallow
		this.index = [];
		this.columns = [];
		this.reference = {};
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ColumnListModel;


/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);




__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('array-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('array-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class ArrayColumnModel extends __WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */] {
	constructor() {
		super('array');
	}
}
/* unused harmony export ArrayColumnModel */


class ArrayColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? ArrayColumn.assign(model) : new ArrayColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ArrayColumn;


/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);




__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('bool-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('bool-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class BoolColumnModel extends __WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */] {
	constructor() {
		super('bool');
	}
}
/* unused harmony export BoolColumnModel */


class BoolColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? BoolColumn.assign(model) : new BoolColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BoolColumn;


/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);




__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('date-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('date-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class DateColumnModel extends __WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */] {
	constructor() {
		super('date');

		this.format = 'yyyy/MM/dd';
	}
}
/* unused harmony export DateColumnModel */


class DateColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? DateColumn.assign(model) : new DateColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DateColumn;


/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);




__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('email-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('email-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class EmailColumnModel extends __WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */] {
	constructor() {
		super('email');

		this.editorOptions.trigger = 'custom';
	}
}
/* unused harmony export EmailColumnModel */


class EmailColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? EmailColumn.assign(model) : new EmailColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EmailColumn;


/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_file__ = __webpack_require__(132);






__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('file-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('file-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class FileColumnModel extends __WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */] {
	constructor() {
		super('file');

		this.canUpload = __WEBPACK_IMPORTED_MODULE_3__services_utility__["yes"];
		this.editorOptions.trigger = 'custom';

		this.hasPreview = name => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__services_file__["a" /* isImage */])(name);
	}
}
/* unused harmony export FileColumnModel */


class FileColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? FileColumn.assign(model) : new FileColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FileColumn;


/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);




__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('group-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.type
	};
});

class GroupColumnModel extends __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */] {
	constructor() {
		super('group');

		this.key = '$group';
		this.title = 'Group';
		this.offset = 20;
		this.canEdit = false;
		this.canSort = false;
	}
}
/* unused harmony export GroupColumnModel */


class GroupColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? GroupColumn.assign(model) : new GroupColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GroupColumn;


/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);




__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('id-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('id-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class IdColumnModel extends __WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */] {
	constructor() {
		super('id');
	}
}
/* unused harmony export IdColumnModel */


class IdColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? IdColumn.assign(model) : new IdColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IdColumn;


/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_file__ = __webpack_require__(132);






__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('image-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('image-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class ImageColumnModel extends __WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */] {
	constructor() {
		super('image');

		this.canUpload = __WEBPACK_IMPORTED_MODULE_3__services_utility__["yes"];

		this.hasPreview =
			name => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__services_file__["a" /* isImage */])(name);
	}
}
/* unused harmony export ImageColumnModel */


class ImageColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? ImageColumn.assign(model) : new ImageColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImageColumn;


/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_column__ = __webpack_require__(232);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__array_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bool_column__ = __webpack_require__(233);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__bool_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_column__ = __webpack_require__(234);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__date_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_column__ = __webpack_require__(235);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__email_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__file_column__ = __webpack_require__(236);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_4__file_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__group_column__ = __webpack_require__(237);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__group_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__id_column__ = __webpack_require__(238);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_6__id_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__image_column__ = __webpack_require__(239);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_7__image_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__number_column__ = __webpack_require__(241);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__number_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pad_column__ = __webpack_require__(242);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_9__pad_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__password_column__ = __webpack_require__(243);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_10__password_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pivot_column__ = __webpack_require__(244);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_11__pivot_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reference_column__ = __webpack_require__(245);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_12__reference_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__row_indicator_column__ = __webpack_require__(246);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_13__row_indicator_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__row_number_column__ = __webpack_require__(247);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_14__row_number_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__select_column__ = __webpack_require__(248);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_15__select_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__text_column__ = __webpack_require__(249);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_16__text_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__time_column__ = __webpack_require__(250);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_17__time_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__url_column__ = __webpack_require__(251);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_18__url_column__["a"]; });




















/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);




__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('number-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('number-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class NumberColumnModel extends __WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */] {
	constructor() {
		super('number');

		this.format = '';
	}
}
/* unused harmony export NumberColumnModel */


class NumberColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? NumberColumn.assign(model) : new NumberColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NumberColumn;


/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);




__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('pad-cell', (template) => {
	return {
		model: template.for,
		resource: `${template.for}.${template.type}`
	};
});

class PadColumnModel extends __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */] {
	constructor() {
		super('pad');

		this.key = '$pad';
		this.title = '';
		this.canEdit = false;
		this.canSort = false;
		this.canResize = false;
		this.canHighlight = false;
		this.canFocus = false;
		this.source = 'generation';
	}
}
/* unused harmony export PadColumnModel */


class PadColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? PadColumn.assign(model) : new PadColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PadColumn;


/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);




__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('password-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('password-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class PasswordColumnModel extends __WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */] {
	constructor() {
		super('password');

		this.canSort = false;
		this.canFilter = false;
	}
}
/* unused harmony export PasswordColumnModel */


class PasswordColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? PasswordColumn.assign(model) : new PasswordColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PasswordColumn;


/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);




__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('pivot-cell', (template) => {
	return {
		model: 'pivot',
		resource: template.for
	};
});

class PivotColumnModel extends __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */] {
	constructor() {
		super('pivot');

		this.key = '$pivot';
		this.title = 'Pivot';
		this.source = 'generation';
		this.canEdit = false;
		this.canSort = false;
		this.canResize = false;
		this.canHighlight = false;
		this.width = 60;
		this.rowIndex = 0;
	}
}
/* unused harmony export PivotColumnModel */


class PivotColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? PivotColumn.assign(model) : new PivotColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PivotColumn;


/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infrastructure__ = __webpack_require__(3);





__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('reference-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('reference-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class ReferenceColumnModel extends __WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */] {
	constructor() {
		super('reference');

		this.editorOptions.trigger = 'custom';
		this.editorOptions.modelFactory = () => new __WEBPACK_IMPORTED_MODULE_3__infrastructure__["Model"]();
	}
}
/* unused harmony export ReferenceColumnModel */


class ReferenceColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? ReferenceColumn.assign(model) : new ReferenceColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ReferenceColumn;


/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);




__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('row-indicator-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

class RowIndicatorColumnModel extends __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */] {
	constructor() {
		super('row-indicator');

		this.key = '$row.indicator';
		this.title = 'Row Indicator';
		this.canEdit = false;
		this.canSort = false;
		this.canResize = false;
		this.canMove = false;
		this.canFocus = false;
		this.canHighlight = false;
		this.pin = 'left';
	}
}
/* unused harmony export RowIndicatorColumnModel */


class RowIndicatorColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? RowIndicatorColumn.assign(model) : new RowIndicatorColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RowIndicatorColumn;


/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);




__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('row-number-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

class RowNumberColumnModel extends __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */] {
	constructor() {
		super('row-number');

		this.key = '$row.number';
		this.title = '#';
		this.canEdit = false;
		this.canResize = false;
		this.canMove = false;
		this.canHighlight = false;
	}
}
/* unused harmony export RowNumberColumnModel */


class RowNumberColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? RowNumberColumn.assign(model) : new RowNumberColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RowNumberColumn;


/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);




__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('select-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

class SelectColumnModel extends __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* ColumnModel */] {
	constructor() {
		super('select');

		this.key = '$select';
		this.title = 'Select';
		this.canEdit = false;
		this.canResize = false;
	}
}
/* unused harmony export SelectColumnModel */


class SelectColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? SelectColumn.assign(model) : new SelectColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SelectColumn;


/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);




__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('text-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('text-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('text-area-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class TextColumnModel extends __WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */] {
	constructor() {
		super('text');

		this.maxLength = 140;
	}
}
/* unused harmony export TextColumnModel */


class TextColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? TextColumn.assign(model) : new TextColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TextColumn;


/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);




__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('time-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('time-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class TimeColumnModel extends __WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */] {
	constructor() {
		super('time');

		this.format = 'h:mm a';
	}
}
/* unused harmony export TimeColumnModel */


class TimeColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? TimeColumn.assign(model) : new TimeColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TimeColumn;


/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model_view__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(6);




__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('url-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePath */].register('url-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class UrlColumnModel extends __WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* DataColumnModel */] {
	constructor() {
		super('url');

		this.editorOptions.trigger = 'button';
	}
}
/* unused harmony export UrlColumnModel */


class UrlColumn extends __WEBPACK_IMPORTED_MODULE_0__column_model_view__["a" /* ColumnView */] {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? UrlColumn.assign(model) : new UrlColumnModel();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UrlColumn;


/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_factory__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__column_column_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__column_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipe_units__ = __webpack_require__(68);









class ColumnView extends __WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */] {
	constructor(model, service) {
		super(model);

		const factory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__column_factory__["a" /* columnFactory */])(model);

		// this should be first place(with column.pipe) where columns are processed
		model.dataChanged.watch(e => {
			if (e.tag.source === 'column.list') {
				return;
			}

			let needInvalidate = false;
			if (e.hasChanges('columns')) {
				e.state.columns.forEach(c => factory(c.type || 'text', c));
			}

			const generation = model.columnList().generation;
			if (generation) {
				if (e.hasChanges('rows')) {
					this.updateOn(generation);
					needInvalidate = true;
				}
			}
			else {
				if (e.hasChanges('columns')) {
					this.update();
					needInvalidate = true;
				}
			}

			if (needInvalidate) {
				service.invalidate('column.view', e.changes, __WEBPACK_IMPORTED_MODULE_7__pipe_units__["PipeUnit"].column);
			}
		});

		model.columnListChanged.watch(e => {
			if (e.hasChanges('columns')) {
				this.update();
				service.invalidate('column.view', e.changes, __WEBPACK_IMPORTED_MODULE_7__pipe_units__["PipeUnit"].column);
			}
		});
	}

	updateOn(generation) {
		const model = this.model;
		const data = model.data;

		const columns = [];
		const createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__column_factory__["a" /* columnFactory */])(model);
		const rows = data().rows;
		switch (generation) {
			case 'deep':
				columns.push(...__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__column_list__["b" /* generate */])(rows, createColumn, true));
				break;
			case 'shallow':
				columns.push(...__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__column_list__["b" /* generate */])(rows, createColumn, false));
				break;
			default:
				throw new __WEBPACK_IMPORTED_MODULE_2__infrastructure__["AppError"](
					'column.list',
					`Invalid generation mode "${generation}"`
				);
		}

		this.update(columns);
	}

	update(generatedColumns) {
		const model = this.model;
		const data = model.data;
		let columns = Array.from(data().columns);
		const statistics = [];
		const templateColumns = model.columnList().columns;

		if (arguments.length) {
			const generatedColumnMap = __WEBPACK_IMPORTED_MODULE_4__column_column_service__["map"](generatedColumns);
			const templateColumnMap = __WEBPACK_IMPORTED_MODULE_4__column_column_service__["map"](templateColumns);
			const dataColumns = columns.filter(c => !generatedColumnMap.hasOwnProperty(c.key) && !templateColumnMap.hasOwnProperty(c.key));
			columns = generatedColumns;
			statistics.push(this.merge(columns, dataColumns));
		}

		statistics.push(this.merge(columns, templateColumns));
		if (this.hasChanges(statistics)) {
			const tag = {
				source: 'column.list',
				behavior: 'core'
			};

			data({columns: columns}, tag);
		}
	}

	merge(left, right) {
		const doMerge = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services__["merge"])({
			equals: (l, r) => l.key === r.key,
			update: (l, r) => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__services_utility__["assignWith"])(l, r, (source, target) => !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__services_utility__["isUndefined"])(target) && target !== null ? target : source),
			insert: (r, left) => left.push(r),
			remove: __WEBPACK_IMPORTED_MODULE_5__services_utility__["noop"]
		});

		return doMerge(left, right);
	}

	hasChanges(statistics) {
		return statistics.some(st => st.inserted || st.update || st.removed);
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ColumnView;


/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_view__ = __webpack_require__(252);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ColumnView", function() { return __WEBPACK_IMPORTED_MODULE_0__column_view__["a"]; });


/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe_units_pipe_unit__ = __webpack_require__(121);


class DataModel {
	constructor() {
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
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DataModel;


/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_model__ = __webpack_require__(254);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__data_model__["a"]; });


/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class DragModel {
	constructor() {
		this.isActive = false;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DragModel;


/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drag_model__ = __webpack_require__(256);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__drag_model__["a"]; });


/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_cell_editor__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_value__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_label__ = __webpack_require__(47);





class EditCellView {
	constructor(model, table, commandManager) {
		this.model = model;
		this.table = table;

		this.editor = __WEBPACK_IMPORTED_MODULE_1__edit_cell_editor__["a" /* CellEditor */].empty;

		const shortcut = new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Shortcut"](table, commandManager);
		const commands = this.commands;
		this.shortcutOff = shortcut.register('editCellNavigation', commands);

		this.enter = commands.get('enter');
		this.commit = commands.get('commit');
		this.cancel = commands.get('cancel');
		this.reset = commands.get('reset');
	}

	get commands() {
		const model = this.model;
		const table = this.table;
		const commands = {
			enter: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Command"]({
				shortcut: 'F2|Enter',
				canExecute: cell => {
					cell = cell || model.navigation().cell;
					return cell
						&& cell.column.canEdit
						&& model.edit().mode === 'cell'
						&& model.edit().state === 'view'
						&& model.edit().enter.canExecute(this.contextFactory(cell));
				},
				execute: (cell, e) => {
					__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('cell.edit', 'edit mode');
					if (e) {
						e.stopImmediatePropagation();
					}

					if (cell) {
						if (model.navigation().cell !== cell) {
							model.navigation({cell: cell});
						}
					}
					else {
						cell = model.navigation().cell;
					}

					if (cell && model.edit().enter.execute(this.contextFactory(cell, cell.value, cell.label)) !== false) {
						this.editor = new __WEBPACK_IMPORTED_MODULE_1__edit_cell_editor__["a" /* CellEditor */](cell);
						model.edit({state: 'edit'});
						cell.mode('edit');
						return true;
					}

					return false;
				}
			}),
			commit: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Command"]({
				shortcut: this.commitShortcut.bind(this),
				// TODO: add validation support
				canExecute: cell => {
					cell = cell || model.navigation().cell;
					return cell
						&& cell.column.canEdit
						&& model.edit().mode === 'cell'
						&& model.edit().state === 'edit'
						&& model.edit().commit.canExecute(this.contextFactory(cell));
				},
				execute: (cell, e) => {
					__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('cell.edit', 'commit');
					if (e) {
						e.stopImmediatePropagation();
					}

					cell = cell || model.navigation().cell;
					if (cell && model.edit().commit.execute(this.contextFactory(cell, this.value, this.label)) !== false) {
						this.editor.commit();
						this.editor = __WEBPACK_IMPORTED_MODULE_1__edit_cell_editor__["a" /* CellEditor */].empty;

						model.edit({state: 'view'});
						cell.mode('view');
						table.focus();
						return true;
					}

					return false;
				}
			}),
			cancel: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Command"]({
				shortcut: 'Escape',
				canExecute: cell => {
					cell = cell || model.navigation().cell;
					return cell
						&& cell.column.canEdit
						&& model.edit().mode === 'cell'
						&& model.edit().state === 'edit'
						&& model.edit().cancel.canExecute(this.contextFactory(cell, this.value, this.label));
				},
				execute: (cell, e) => {
					__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('cell.edit', 'cancel');
					if (e) {
						e.stopImmediatePropagation();
					}

					cell = cell || model.navigation().cell;
					if (cell && model.edit().cancel.execute(this.contextFactory(cell, this.value, this.label)) !== false) {
						this.editor.reset();
						this.editor = __WEBPACK_IMPORTED_MODULE_1__edit_cell_editor__["a" /* CellEditor */].empty;

						model.edit({state: 'view'});
						cell.mode('view');
						table.focus();
						return true;
					}

					return false;
				}
			}),
			reset: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Command"]({
				canExecute: cell => {
					cell = cell || model.navigation().cell;
					return cell
						&& cell.column.canEdit
						&& model.edit().mode === 'cell'
						&& model.edit().state === 'edit'
						&& model.edit().reset.canExecute(this.contextFactory(cell, this.value, this.label));
				},
				execute: (cell, e) => {
					__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('cell.edit', 'reset');
					if (e) {
						e.stopImmediatePropagation();
					}

					cell = cell || model.navigation().cell;
					if (cell && model.edit().reset.execute(this.contextFactory(cell, this.value, this.label)) !== false) {
						this.editor.reset();
						return true;
					}

					return false;
				}
			})
		};
		return new Map(
			Object.entries(commands)
		);
	}

	contextFactory(cell, value, label) {
		return {
			column: cell.column,
			row: cell.row,
			columnIndex: cell.columnIndex,
			rowIndex: cell.rowIndex,
			oldValue: cell.value,
			newValue: arguments.length === 2 ? value : cell.value,
			oldLabel: cell.label,
			newLabel: arguments.length === 3 ? label : cell.label,
			unit: 'cell',
			valueFactory: __WEBPACK_IMPORTED_MODULE_2__services_value__["getFactory"],
			labelFactory: __WEBPACK_IMPORTED_MODULE_3__services_label__["getFactory"]
		};
	}

	get fetch() {
		return this.editor.fetch;
	}

	get value() {
		return this.editor.value;
	}

	set value(value) {
		this.editor.value = value;
	}

	get label() {
		return this.editor.label;
	}

	set label(label) {
		this.editor.label = label;
	}

	commitShortcut() {
		const model = this.model;
		const commitShortcuts = model.edit().commitShortcuts;
		const cell = model.navigation().cell;
		if (cell && commitShortcuts.hasOwnProperty(cell.column.type)) {
			return commitShortcuts[cell.column.type];
		}

		return commitShortcuts['$default'];
	}

	get options() {
		return this.editor.options;
	}

	destroy() {
		this.editor.reset();
		this.shortcutOff();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EditCellView;


/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);



class EditModel {
	constructor() {
		this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
		this.mode = null; // cell | row
		this.state = 'view'; // view | edit
		this.enter = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]();
		this.commit = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]();
		this.cancel = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]();
		this.reset = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]();
		this.commitShortcuts = {
			'$default': 'tab|shift+tab|enter',
			'text': 'enter',
			'password': 'ctrl+s',
			'number': 'ctrl+s',
			'date': 'ctrl+s',
			'array': 'ctrl+s'
		};
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EditModel;


/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_cell_editor__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_value__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_label__ = __webpack_require__(47);






class RowEditorCore {
	constructor() {
		this.editors = [];
	}

	commit() {
	}

	reset() {
	}
}


class CellView {
	constructor(row, column) {
		this.row = row;
		this.column = column;
	}


	get value() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_value__["get"])(this.row, this.column);
	}

	set value(value) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_value__["set"])(this.row, this.column, value);
	}

	get label() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services_label__["get"])(this.row, this.column);
	}

	set label(value) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services_label__["set"])(this.row, this.column, value);
	}
}

const empty = new RowEditorCore();
class RowEditor extends RowEditorCore {
	constructor(row, columns) {
		super();

		this.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["cloneDeep"])(row);
		this.row = row;

		this.editors =
			columns
				.filter(column => column.canEdit)
				.map(column => new __WEBPACK_IMPORTED_MODULE_1__edit_cell_editor__["a" /* CellEditor */](new CellView(this.value, column)));
	}

	commit() {
		this.editors.forEach(editor => editor.commit());
		Object.assign(this.row, this.value);
	}

	reset() {
		this.editors.forEach(editor => editor.reset());
		this.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["cloneDeep"])(this.row);
	}

	static get empty() {
		return empty;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RowEditor;


/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_row_editor__ = __webpack_require__(260);



class EditRowView {
	constructor(model, table, commandManager) {
		this.model = model;
		this.table = table;
		this.editor = __WEBPACK_IMPORTED_MODULE_1__edit_row_editor__["a" /* RowEditor */].empty;

		const shortcut = new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Shortcut"](table, commandManager);
		const commands = this.commands;
		this.shortcutOff = shortcut.register('editRowNavigation', commands);

		this.enter = commands.get('enter');
		this.commit = commands.get('commit');
		this.cancel = commands.get('cancel');
		this.reset = commands.get('reset');
	}

	get commands() {
		const model = this.model;
		const commands = {
			enter: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Command"]({
				shortcut: 'F2|Enter',
				canExecute: row => {
					row = row || model.navigation().row;
					return row
						&& model.edit().mode === 'row'
						&& model.edit().state === 'view'
						&& model.edit().enter.canExecute(this.contextFactory(row));
				},
				execute: (row, e) => {
					__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('row.edit', 'edit mode');
					if (e) {
						e.stopImmediatePropagation();
					}

					const columns = this.model.data().columns;
					this.editor = new __WEBPACK_IMPORTED_MODULE_1__edit_row_editor__["a" /* RowEditor */](row, columns);
					model.edit({state: 'edit'});
				}
			}),
			commit: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Command"]({
				shortcut: this.commitShortcut.bind(this),
				// TODO: add validation support
				canExecute: row => {
					row = row || model.navigation().row;
					return row
						&& model.edit().mode === 'row'
						&& model.edit().state === 'edit'
						&& model.edit().commit.canExecute(this.contextFactory(row));
				},
				execute: (cell, e) => {
					__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('row.edit', 'commit');
					if (e) {
						e.stopImmediatePropagation();
					}

					this.editor.commit();
					this.editor = __WEBPACK_IMPORTED_MODULE_1__edit_row_editor__["a" /* RowEditor */].empty;
					model.edit({state: 'view'});
				}
			}),
			cancel: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Command"]({
				shortcut: 'Escape',
				canExecute: row => {
					row = row || model.navigation().row;
					return row
						&& model.edit().mode === 'row'
						&& model.edit().state === 'edit'
						&& model.edit().cancel.canExecute(this.contextFactory(row));
				},
				execute: (row, e) => {
					__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('cell.edit', 'cancel');
					if (e) {
						e.stopImmediatePropagation();
					}

					this.editor.reset();
					this.editor = __WEBPACK_IMPORTED_MODULE_1__edit_row_editor__["a" /* RowEditor */].empty;
					model.edit({state: 'view'});
				}
			}),
			reset: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Command"]({
				canExecute: row => {
					row = row || model.navigation().row;
					return row
						&& model.edit().mode === 'row'
						&& model.edit().state === 'edit'
						&& model.edit().reset.canExecute(this.contextFactory(row));
				},
				execute: (row, e) => {
					__WEBPACK_IMPORTED_MODULE_0__infrastructure__["Log"].info('row.edit', 'reset');
					if (e) {
						e.stopImmediatePropagation();
					}

					if (row && model.edit().reset.execute(this.contextFactory(row)) !== false) {
						this.editor.reset();
						return false;
					}
				}
			})
		};
		return new Map(
			Object.entries(commands)
		);
	}

	contextFactory(row) {
		return {
			row: row,
			current: this.editor.current,
			unit: 'row'
		};
	}

	commitShortcut() {
		const model = this.model;
		const commitShortcuts = model.edit().commitShortcuts;
		const cell = model.navigation().cell;
		if (cell && commitShortcuts.hasOwnProperty(cell.column.type)) {
			return commitShortcuts[cell.column.type];
		}

		return commitShortcuts['$default'];
	}

	destroy() {
		this.shortcutOff();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EditRowView;



/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_cell_view__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_row_view__ = __webpack_require__(261);




class EditView extends __WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */] {
	constructor(model, table, commandManager) {
		super(model);

		this.cell = new __WEBPACK_IMPORTED_MODULE_1__edit_cell_view__["a" /* EditCellView */](model, table, commandManager);
		this.row = new __WEBPACK_IMPORTED_MODULE_2__edit_row_view__["a" /* EditRowView */](model, table, commandManager);
	}

	onDestroy() {
		this.cell.destroy();
		this.row.destroy();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EditView;


/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = castFactory;


function castFactory(r) {
	const rt = typeof r,
		asString = '' + r,
		asNumber = +r,
		asDate = new Date(r);

	return l => {
		const lt = typeof l;
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
				throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"])(
					'cast.factory',
					`Unsupported format ${lt}`
				);
		}
	};
}

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = build;
function build(filterBy, op = 'and') {
	const expressions = [];
	for (let [key, filter] of Object.entries(filterBy)) {
		if (filter.expression) {
			expressions.push(filter.expression);
		}

		if (filter.items && filter.items.length) {
			expressions.push(toExpression(key, filter.items));
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
	const root = {
		kind: 'group',
		op: op,
		left: null,
		right: null
	};

	let current = root;

	expressions.forEach(expr => {
		if (!current.left) {
			current.left = expr;
		}
		else {
			const next = {
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
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expression_build__ = __webpack_require__(264);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__expression_build__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expression_visitor__ = __webpack_require__(107);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__predicate_visitor__ = __webpack_require__(266);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__predicate_visitor__["a"]; });




/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cast_factory__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expression_visitor__ = __webpack_require__(107);




class PredicateVisitor extends __WEBPACK_IMPORTED_MODULE_2__expression_visitor__["a" /* Visitor */] {
	constructor(valueFactory) {
		super();

		this.valueFactory = valueFactory;
	}

	visitGroup(group) {
		if (group.right) {
			const lp = this.visit(group.left),
				rp = this.visit(group.right);

			switch (group.op) {
				case 'and':
					return value => {
						return lp(value) && rp(value);
					};
				case 'or':
					return value => {
						return lp(value) || rp(value);
					};
				default:
					throw  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"])(
						'predicate.visitor',
						`Invalid operation ${group.op}`
					);
			}
		}
		else {
			return this.visit(group.left);
		}
	}

	visitCondition(condition) {
		const r = condition.right,
			name = condition.left,
			getValue = this.valueFactory(name),
			castAs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cast_factory__["a" /* castFactory */])(r);

		switch (condition.op) {
			case 'isNotNull':
				return l => {
					const v = getValue(l);
					return v || v === 0;
				};
			case 'isNull':
				return l => {
					const v = getValue(l);
					return !v && v !== 0;
				};
			case 'equals':
				return l => {
					const v = getValue(l),
						r = castAs(v);
					return v === r;
				};
			case 'notEquals':
				return l => {
					const v = getValue(l),
						r = castAs(v);
					return v !== r;
				};
			case 'greaterThanOrEquals':
				return l => {
					const v = getValue(l),
						r = castAs(v);
					return v >= r;
				};
			case 'greaterThan':
				return l => {
					const v = getValue(l),
						r = castAs(v);
					return v > r;
				};
			case 'lessThanOrEquals':
				return l => {
					const v = getValue(l),
						r = castAs(v);
					return v <= r;
				};
			case 'lessThan':
				return l => {
					const v = getValue(l),
						r = castAs(v);
					return v < r;
				};
			case 'between':
				return l => {
					const v = getValue(l);

					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cast_factory__["a" /* castFactory */])(r[0])(v) <= v && v <= __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cast_factory__["a" /* castFactory */])(r[1])(v);
				};
			case 'in':
				return l => {
					const value = getValue(l);
					const v = !value && value !== 0 ? 'null' : value;

					const map = r.reduce((memo, item) => {
						memo[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cast_factory__["a" /* castFactory */])(item)(v)] = true;
						return memo;
					}, {});

					return map.hasOwnProperty(v);
				};
			case 'like':
				return l => {
					const v = getValue(l),
						r = castAs(v);
					return v && ('' + v).toLowerCase().contains(('' + r).toLowerCase());
				};
			case 'notLike':
				return l => {
					const v = getValue(l),
						r = castAs(v);
					return v && !('' + v).toLowerCase().contains(('' + r).toLowerCase());
				};
			case 'startsWith':
				return l => {
					const v = getValue(l),
						r = castAs(v),
						substr = v.substr(0, r.length);
					return r === substr;
				};
			case 'endsWith':
				return l => {
					const v = getValue(l),
						r = castAs(v),
						substr = v.slice(-r.length);
					return r === substr;
				};
			default:
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"](
					'predicate.visitor',
					`Invalid operation ${condition.op}`
				);
		}
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PredicateVisitor;


/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__match__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility__ = __webpack_require__(4);




class FilterModel {
	constructor() {
		this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
		this.by = {};
		this.match = __WEBPACK_IMPORTED_MODULE_1__match__["a" /* match */];
		this.fetch = __WEBPACK_IMPORTED_MODULE_2__services_utility__["noop"];
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FilterModel;


/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(7);


class FilterView extends __WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */] {
	constructor(model) {
		super(model);
	}

	has(column) {
		const key = column.key;
		const filterBy = this.model.filter().by;
		return filterBy.hasOwnProperty(key);
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FilterView;


/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expression__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_column_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = match;




function match(context) {
	const model = context.model;
	const expression = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__expression__["a" /* build */])(model.filter().by);
	if (expression !== null) {
		const valueFactory = context.valueFactory;
		const columnMap = __WEBPACK_IMPORTED_MODULE_1__column_column_service__["map"](model.data().columns);
		const visitor = new __WEBPACK_IMPORTED_MODULE_0__expression__["b" /* PredicateVisitor */](key => valueFactory(columnMap[key]));
		return visitor.visit(expression);
	}

	return __WEBPACK_IMPORTED_MODULE_2__services_utility__["yes"];
}

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class FocusModel {
	constructor() {
		this.rowIndex = -1;
		this.columnIndex = -1;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FocusModel;


/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__focus_model__ = __webpack_require__(270);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__focus_model__["a"]; });


/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);



class FootModel {
	constructor() {
		this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* EnumerableResource */]();
		this.cache = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Cache"]();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FootModel;


/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_column_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_value__ = __webpack_require__(20);






class FootView extends __WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */] {
	constructor(model, table) {
		super(model);

		this.table = table;
		this.rows = [];
		this.columns = [];

		this.valueFactory = __WEBPACK_IMPORTED_MODULE_4__services_value__["getFactory"];

		model.viewChanged.watch(() => this.invalidate(model));
	}

	invalidate(model) {
		__WEBPACK_IMPORTED_MODULE_3__infrastructure__["Log"].info('view.foot', 'invalidate');

		const columns = model.view().columns;
		this.columns = __WEBPACK_IMPORTED_MODULE_1__column_column_service__["lineView"](columns).filter(c => c.model.pin === this.table.pin);
		this.rows = new Array(this.count);
	}

	get count() {
		const model = this.model;
		const columns = model.data().columns;
		const resourceCount = model.foot().resource.count;

		for (let i = 0, length = columns.length; i < length; i++) {
			if (columns[i].aggregation) {
				return Math.max(resourceCount, 1);
			}
		}

		return resourceCount;
	}

	value(column) {
		if (column.aggregation) {
			const aggregation = column.aggregation;
			const	aggregationOptions = column.aggregationOptions;
			
			if (!__WEBPACK_IMPORTED_MODULE_2__services__["Aggregation"].hasOwnProperty(aggregation)) {
				throw new __WEBPACK_IMPORTED_MODULE_3__infrastructure__["AppError"](
					'foot',
					`Aggregation ${aggregation} is not registered`);
			}

			const rows = this.model.data().rows;
			const getValue = this.valueFactory(column);

			return __WEBPACK_IMPORTED_MODULE_2__services__["Aggregation"][aggregation](rows, getValue, aggregationOptions);
		}
		return null;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FootView;


/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(17);


class GridModel {
	constructor() {
		this.id = `q-grid-${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services__["guid"])()}`;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GridModel;


/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_model__ = __webpack_require__(274);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__grid_model__["a"]; });


/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(17);
/* harmony export (immutable) */ __webpack_exports__["a"] = groupBuilder;




function groupBuilder(model) {
	const viewState = model.view();
	const dataState = model.data();

	const pivot = model.view().pivot;
	const pivotRows = pivot.rows;
	const pivotRowLength = pivotRows[0].length;

	const groupBy = model.group().by;
	const groupByLength = groupBy.length;

	const columnMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_service__["map"])(dataState.columns);
	const rows = dataState.rows;
	const nodes = viewState.rows;

	return (valueFactory) => {
		const result = [];
		for (let i = 0, nodeLength = nodes.length; i < nodeLength; i++) {
			const node = nodes[i];
			const key = groupBy[Math.min(node.level, groupByLength - 1)];
			const column = columnMap[key];
			if (!column) {
				throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["AppError"](
					'view.pivot',
					`Invalid key "${key}"`);
			}

			const aggregation = column.aggregation || 'count';
			if (!__WEBPACK_IMPORTED_MODULE_2__services__["Aggregation"].hasOwnProperty(aggregation)) {
				throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["AppError"](
					'view.pivot',
					`Aggregation ${aggregation} is not registered`);
			}

			const getValue = valueFactory(column);
			const aggregate = __WEBPACK_IMPORTED_MODULE_2__services__["Aggregation"][aggregation];

			const aggRow = new Array(pivotRowLength);
			for (let j = 0, rowLength = node.rows.length; j < rowLength; j++) {
				const rowIndex = node.rows[j];
				const pivotRow = pivotRows[rowIndex];
				const row = rows[rowIndex];
				for (let k = 0; k < pivotRowLength; k++) {
					if (pivotRow[k]) {
						let value = aggRow[k];
						if (!value) {
							value = [];
							aggRow[k] = value;
						}
						value.push(row);
					}
				}
			}

			result.push(aggRow.map(rs => aggregate(rs, getValue, column.aggregationOptions)));
		}

		return result;
	};
}

/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(10);


class GroupModel {
	constructor() {
		this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
		this.by = [];
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GroupModel;



/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_value__ = __webpack_require__(20);





class GroupView extends __WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */] {
	constructor(model) {
		super(model);

		this.valueFactory = __WEBPACK_IMPORTED_MODULE_3__services_value__["getFactory"];
		this.toggleStatus = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
			execute: node => {
				node.state.expand = !node.state.expand;
				const view = model.view;
				const nodes = view().nodes;
				view({rows: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node__["a" /* flatView */])(nodes)});
			},
			canExecute: node => node.type === 'group'
		});
	}


	count(node) {
		return node.children.length || node.rows.length;
	}

	status(node) {
		return node.state.expand ? 'expand' : 'collapse';
	}

	offset(node) {
		const groupColumn = (this.model.view().columns[0] || []).find(c => c.model.type === 'group');
		if(groupColumn){
			return groupColumn.model.offset * node.level;
		}

		return 0;
	}

	value(node) {
		return node.key;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GroupView;


/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);



class HeadModel {
	constructor() {
		this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
		this.cache = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Cache"]();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HeadModel;


/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_service__ = __webpack_require__(8);




class HeadView extends __WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */] {
	constructor(model, table, tagName) {
		super(model);

		this.table = table;
		this.tagName = tagName;
		this.rows = [];

		this.drop = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
			canExecute: e => {
				if (e.source && e.source.key === tagName) {
					const key = e.target.value;
					const map = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["map"](model.data().columns);
					return map.hasOwnProperty(key) && map[key].canMove;
				}

				return false;
			},
			execute: e => {
				const view = model.view;
				const columnRows = view().columns;
				for (let columns of columnRows) {
					const targetIndex = columns.findIndex(c => c.model.key === e.target.value);
					const sourceIndex = columns.findIndex(c => c.model.key === e.source.value);
					if (targetIndex >= 0 && sourceIndex >= 0) {
						const sourceColumn = columns[sourceIndex].model;
						const targetColumn = columns[targetIndex].model;
						const indexMap = Array.from(model.columnList().index);
						const sourceColumnIndex = indexMap.indexOf(sourceColumn.key);
						const targetColumnIndex = indexMap.indexOf(targetColumn.key);
						indexMap.splice(sourceColumnIndex, 1);
						indexMap.splice(targetColumnIndex, 0, sourceColumn.key);
						model.columnList({index: indexMap});
					}
				}
			}
		});

		this.drag = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
			canExecute: e => {
				if (e.source.key === tagName) {
					const map = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["map"](model.data().columns);
					return map.hasOwnProperty(e.source.value) && map[e.source.value].canMove !== false;
				}

				return false;
			}
		});

		this.resize = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
			canExecute: e => {
				if (e.source.key === tagName) {
					const map = table.data.columnMap();
					return map.hasOwnProperty(e.source.value) && map[e.source.value].canResize !== false;
				}

				return false;
			}
		});

		model.viewChanged.watch(() => this.invalidate(model));
	}

	transfer(column) {
		return {
			key: this.tagName,
			value: column.key
		};
	}

	invalidate(model) {
		__WEBPACK_IMPORTED_MODULE_1__infrastructure__["Log"].info('view.head', 'invalidate');

		this.rows = model.view()
			.columns
			.map(row =>
				row.filter(c => c.model.pin === this.table.pin));
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HeadView;


/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__definition__ = __webpack_require__(19);


class HighlightBehavior {
	constructor(model, cellSelector) {
		this.model = model;
		this.cellSelector = cellSelector;

		this.cells = new Set();
	}

	state(cell, state) {
		if (state) {
			cell.addClass(`${__WEBPACK_IMPORTED_MODULE_0__definition__["GRID_PREFIX"]}-selected`);
		}
		else {
			cell.removeClass(`${__WEBPACK_IMPORTED_MODULE_0__definition__["GRID_PREFIX"]}-selected`);
		}
	}

	update(items) {
		this.clear();

		this.cells = new Set(this.cellSelector(items));
		this.cells.forEach(cell => this.state(cell, true));
	}

	clear() {
		this.cells.forEach(cell => this.state(cell, false));
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HighlightBehavior;


/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__highlight_behavior__ = __webpack_require__(281);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__highlight_behavior__["a"]; });


/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = cellSelector;



function cellSelector(model, table) {
	function getRows(items) {
		const result = [];
		const rows = model.view().rows;

		for (let item of items) {
			const index = rows.indexOf(item);
			for (let cell of table.body.row(index).cells()) {
				result.push(cell);
			}
		}

		return result;
	}

	function getColumns(items) {
		const result = [];
		const columns = __WEBPACK_IMPORTED_MODULE_0__column_column_service__["lineView"](model.view().columns);

		for (let item of items) {
			const index = columns.findIndex((c) => c.model === item);
			for (let row of table.body.rows()) {
				result.push(row.cell(index));
			}
		}

		return result;
	}

	function getCells(items) {
		const result = [];
		const rows = model.view().rows;
		const columns = __WEBPACK_IMPORTED_MODULE_0__column_column_service__["lineView"](model.view().columns);

		for (let item of items) {
			const rowIndex = rows.indexOf(item.row);
			const columnIndex = columns.findIndex((c) => c.model === item.column);

			const row = table.body.row(rowIndex);
			result.push(row.cell(columnIndex));
		}

		return result;
	}

	function getMix(items) {
		const itemsArray = Array.from(items);

		const rows = itemsArray.filter(item => item.unit === 'row').map(item => item.item);
		const cells = itemsArray.filter(item => item.unit === 'row').map(item => item.item);

		return [
			...getRows(rows),
			...getCells(cells)
		];
	}

	const selectorMap = {
		'row': getRows,
		'column': getColumns,
		'cell': getCells,
		'mix': getMix,
	};

	return (...args) => {
		const selection = model.selection();
		const cellSelector = selectorMap[selection.unit];
		if (!cellSelector) {
			throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["AppError"]('cell.selector', `Invalid unit ${selection.unit}`);
		}

		return cellSelector(...args);
	};
}

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class HighlightModel {
	constructor() {
		this.columns = [];
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HighlightModel;


/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sort_sort_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__behaviors__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cell_selector__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__definition__ = __webpack_require__(19);









class HighlightView extends __WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */] {
	constructor(model, table, timeout) {
		super(model);

		this.timeout = timeout;
		this.behavior = new __WEBPACK_IMPORTED_MODULE_4__behaviors__["a" /* HighlightBehavior */](model, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__cell_selector__["a" /* cellSelector */])(model, table));
		this.table = table;

		// TODO: get rid of this variable, maybe using table class?
		let waitForLayout = false;

		let sortBlurs = [];
		let hoverBlurs = [];

		this.column = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
			canExecute: () => !model.drag().isActive,
			execute: (column, state) => {
				if (!waitForLayout) {
					const columns = Array.from(model.highlight().columns);
					const index = columns.indexOf(column.key);
					let hasChanges = false;
					if (state) {
						if (index < 0) {
							columns.push(column.key);
							hasChanges = true;
						}
					}
					else {
						if (index >= 0) {
							columns.splice(index, 1);
							hasChanges = true;
						}
					}

					if (hasChanges) {
						model.highlight({
							columns: columns
						},{
							source: 'highlight.view',
						});
					}
				}
			}
		});

		model.selectionChanged.watch(e => {
			this.timeout(() => this.behavior.update(e.state.entries), 0);
		});

		model.viewChanged.watch(() => {
			waitForLayout = true;
			this.timeout(() => {
				hoverBlurs = this.invalidateHover(hoverBlurs);
				sortBlurs = this.invalidateSortBy(sortBlurs);
				waitForLayout = false;
				this.behavior.update(this.model.selection().entries);
			}, 100);
		});

		model.sortChanged.watch(e => {
			if (!waitForLayout && e.hasChanges('by')) {
				sortBlurs = this.invalidateSortBy(sortBlurs);
			}
		});

		model.highlightChanged.watch(e => {
			if (!waitForLayout && e.tag.source !== 'highlight') {
				hoverBlurs = this.invalidateHover(hoverBlurs);
			}
		});
	}

	invalidateHover(dispose) {
		dispose.forEach(f => f());
		dispose = [];
		const highlightColumns = this.model.highlight().columns;
		for (let columnKey of highlightColumns) {
			dispose.push(this.highlight(columnKey, 'highlighted'));
		}

		return dispose;
	}

	invalidateSortBy(dispose) {
		dispose.forEach(f => f());
		dispose = [];

		const sortBy = this.model.sort().by;
		for (let entry of sortBy) {
			const key = __WEBPACK_IMPORTED_MODULE_3__sort_sort_service__["a" /* key */](entry);
			dispose.push(this.highlight(key, 'sorted'));
		}

		return dispose;
	}

	columnIndex(key) {
		const columns = this.table.data.columns();
		const index = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["findIndex"](columns, key);
		if (index >= 0) {
			// TODO: add pivot col support
			const column = columns[index];
			if (!column.canHighlight) {
				return -1;
			}
		}

		return index;
	}

	highlight(key, cls) {
		const table = this.table;
		const index = this.columnIndex(key);
		if (index < 0) {
			return __WEBPACK_IMPORTED_MODULE_6__services_utility__["noop"];
		}

		const head = table.head;
		const headCells = head.column(index).cells();
		headCells.forEach((cell) => cell.addClass(`${__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"]}-${cls}`));
		const cellsPrev = head.column(index - 1).cells();
		cellsPrev.forEach((cell) => cell.addClass(`${__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"]}-${cls}-prev`));
		const cellsNext = head.column(index + 1).cells();
		cellsNext.forEach((cell) => cell.addClass(`${__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"]}-${cls}-next`));
		const bodyCells = table.body.column(index).cells();
		bodyCells.forEach((cell) => cell.addClass(`${__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"]}-${cls}`));
		const footCells = table.foot.column(index).cells();
		footCells.forEach((cell) => cell.addClass(`${__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"]}-${cls}`));

		return this.blur(key, cls);
	}

	blur(key, cls) {
		const table = this.table;
		const index = this.columnIndex(key);
		if (index < 0) {
			return __WEBPACK_IMPORTED_MODULE_6__services_utility__["noop"];
		}

		return () => {
			const head = table.head;
			const headCells = head.column(index).cells();
			headCells.forEach((cell) => cell.removeClass(`${__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"]}-${cls}`));
			const cellsPrev = head.column(index - 1).cells();
			cellsPrev.forEach((cell) => cell.removeClass(`${__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"]}-${cls}-prev`));
			const cellsNext = head.column(index + 1).cells();
			cellsNext.forEach((cell) => cell.removeClass(`${__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"]}-${cls}-next`));
			const bodyCells = table.body.column(index).cells();
			bodyCells.forEach((cell) => cell.removeClass(`${__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"]}-${cls}`));
			const footCells = table.foot.column(index).cells();
			footCells.forEach((cell) => cell.removeClass(`${__WEBPACK_IMPORTED_MODULE_7__definition__["GRID_PREFIX"]}-${cls}`));
		};
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HighlightView;


/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__head__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__body__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__focus__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__column_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__row__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__selection__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__foot__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sort__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__group__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pivot__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__plugin__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__edit__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__toolbar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__layer__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pagination__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__progress__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__highlight__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__visibility__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__filter__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__drag__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__style__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__scroll__ = __webpack_require__(126);
/* harmony export (immutable) */ __webpack_exports__["setup"] = setup;




























function setup(model) {
	model.register('grid', __WEBPACK_IMPORTED_MODULE_0__grid__["a" /* GridModel */])
		.register('view', __WEBPACK_IMPORTED_MODULE_1__view__["b" /* ViewModel */])
		.register('data', __WEBPACK_IMPORTED_MODULE_2__data__["a" /* DataModel */])
		.register('selection', __WEBPACK_IMPORTED_MODULE_10__selection__["SelectionModel"])
		.register('head', __WEBPACK_IMPORTED_MODULE_3__head__["HeadModel"])
		.register('body', __WEBPACK_IMPORTED_MODULE_4__body__["BodyModel"])
		.register('navigation', __WEBPACK_IMPORTED_MODULE_6__navigation__["NavigationModel"])
		.register('focus', __WEBPACK_IMPORTED_MODULE_7__focus__["a" /* FocusModel */])
		.register('foot', __WEBPACK_IMPORTED_MODULE_11__foot__["FootModel"])
		.register('layout', __WEBPACK_IMPORTED_MODULE_5__layout__["LayoutModel"])
		.register('row', __WEBPACK_IMPORTED_MODULE_9__row__["a" /* RowModel */])
		.register('columnList', __WEBPACK_IMPORTED_MODULE_8__column_list__["a" /* ColumnListModel */])
		.register('sort', __WEBPACK_IMPORTED_MODULE_12__sort__["SortModel"])
		.register('group', __WEBPACK_IMPORTED_MODULE_13__group__["GroupModel"])
		.register('pivot', __WEBPACK_IMPORTED_MODULE_14__pivot__["PivotModel"])
		.register('edit', __WEBPACK_IMPORTED_MODULE_16__edit__["EditModel"])
		.register('plugin', __WEBPACK_IMPORTED_MODULE_15__plugin__["a" /* PluginModel */])
		.register('toolbar', __WEBPACK_IMPORTED_MODULE_17__toolbar__["a" /* ToolbarModel */])
		.register('layer', __WEBPACK_IMPORTED_MODULE_18__layer__["a" /* LayerModel */])
		.register('pagination', __WEBPACK_IMPORTED_MODULE_19__pagination__["PaginationModel"])
		.register('progress', __WEBPACK_IMPORTED_MODULE_20__progress__["a" /* ProgressModel */])
		.register('highlight', __WEBPACK_IMPORTED_MODULE_21__highlight__["HighlightModel"])
		.register('visibility', __WEBPACK_IMPORTED_MODULE_22__visibility__["a" /* VisibilityModel */])
		.register('filter', __WEBPACK_IMPORTED_MODULE_23__filter__["FilterModel"])
		.register('drag', __WEBPACK_IMPORTED_MODULE_24__drag__["a" /* DragModel */])
		.register('style', __WEBPACK_IMPORTED_MODULE_25__style__["StyleModel"])
		.register('scroll', __WEBPACK_IMPORTED_MODULE_26__scroll__["ScrollModel"]);
}

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Action {
	constructor(command, title, icon) {
		this.command = command;
		this.title = title;
		this.icon = icon;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Action;


/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(45);


class Cache {
	constructor() {
		this.items = {};
	}

	set(key, value) {
		this.items[key] = value;
	}

	get(key) {
		const entry = this.find(key);
		if (!entry) {
			throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */](
				'cache.get',
				`Entry with key was not found "${key}"`);
		}

		return entry;
	}

	has(key) {
		const items = this.items;
		return items.hasOwnProperty(key);
	}

	find(key) {
		const items = this.items;
		if (items.hasOwnProperty(key)) {
			return items[key];
		}

		return null;
	}

	remove(key) {
		if (!this.items.hasOwnProperty(key)) {
			throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */](
				'cache.remove',
				`Entry with key was not found "${key}"`);
		}

		delete this.items[key];
	}

	clear() {
		this.items = {};
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Cache;


/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(4);


class Command {

	constructor(context = {}) {
		this.execute = context.execute || __WEBPACK_IMPORTED_MODULE_0__services_utility__["yes"];
		this.canExecute = context.canExecute || __WEBPACK_IMPORTED_MODULE_0__services_utility__["yes"];
		this.shortcut = context.shortcut;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Command;


/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(4);


class Fetch {
	constructor(select) {
		this.select = select;
		this.busy = null;
		this.result = null;
	}

	run(item) {
		const select = this.select;

		this.result = null;
		let alive = true;
		this.busy = new Promise((resolveBusy, rejectBusy) => {
			const resolve = data => {
				if (alive) {
					this.result = data;
					resolveBusy(data);
				}
			};

			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["isFunction"])(select)) {
				const deferred = {
					resolve: resolve,
					reject: rejectBusy
				};

				const args = Array.from(arguments).slice(1) || [];
				const result = select(item, deferred, ...args);
				if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["isUndefined"])(result)) {
					if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["isFunction"])(result.then)) {
						// when options.fetch returns promise
						result.then(resolve);
						if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["isFunction"])(result.catch)) {
							result.catch(rejectBusy);
						}
					} else {
						// when options.fetch return result
						resolve(result);
					}
				}
				// when user should invoke d.resolve or d.reject
			}
			else {
				// when options.fetch is result itself
				resolve(select);
			}
		});

		return () => {
			this.busy = null;
			alive = false;
		};
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Fetch;


/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log__ = __webpack_require__(66);



class ModelBinder {
	constructor(source) {
		this.source = source;
		this.off = __WEBPACK_IMPORTED_MODULE_0__services_utility__["noop"];
	}

	bind(model, names, run = true) {
		this.off();
		const source = this.source;

		if (model) {
			const commits = [];
			for (let name of names) {
				const doBind = e => {
					__WEBPACK_IMPORTED_MODULE_1__log__["a" /* Log */].info('model.bind', `to ctrl "${name}[${Object.keys(e.changes).join(', ')}]"`);

					for (let key of Object.keys(e.changes)) {
						const sourceKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["toCamelCase"])(name, key);
						if (source.hasOwnProperty(sourceKey)) {
							source[sourceKey] = e.changes[key].newValue;
						}
					}
				};

				const state = model[name];
				if (run) {
					const value = state();
					doBind({
						changes: {
							newValue: value,
							oldValue: value
						}
					});
				}

				this.off = model[name + 'Changed'].on(doBind);

				commits.push(() => {
					__WEBPACK_IMPORTED_MODULE_1__log__["a" /* Log */].info('model.bind', `to model "${name}"`);

					const oldState = state();
					const newState = {};
					for (let key of Object.keys(oldState)) {
						const sourceKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["toCamelCase"])(name, key);
						if (source.hasOwnProperty(sourceKey)) {
							let value = source[sourceKey];
							if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["isUndefined"])(value)) {
								newState[key] = value;
							}
						}
					}

					state(newState);
				});
			}

			return () => commits.forEach(commit => commit());
		}

		this.off = __WEBPACK_IMPORTED_MODULE_0__services_utility__["noop"];
		return __WEBPACK_IMPORTED_MODULE_0__services_utility__["noop"];
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ModelBinder;


/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guard__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utility__ = __webpack_require__(4);






const models = {};
let close = false;

class Model {
	constructor() {
		close = true;
		for (let name of Object.keys(models)) {
			const model = new models[name]();
			const changeSet = new Set();
			const watchArg = () => ({
				state: model,
				hasChanges: changeSet.has.bind(changeSet),
				changes: Array.from(changeSet.values())
					.reduce((memo, key) => {
						const value = model[key];
						memo[key] = {newValue: value, oldValue: value};
						return memo;
					}, {}),
				tag: {},
				source: 'watch',
			});

			const event = new __WEBPACK_IMPORTED_MODULE_0__event__["a" /* Event */](watchArg);
			this[name + 'Changed'] = event;
			this[name] = function (state, tag) {
				const length = arguments.length;
				if (length) {
					if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__services_utility__["isObject"])(state)) {
						throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */](
							`model.${name}`,
							`"${state}" is not a valid type, should be an object`);
					}

					let hasChanges = false;
					const changes = {};
					const keys = Object.keys(state);
					for (let i = 0, keyLength = keys.length; i < keyLength; i++) {
						const key = keys[i];
						if (!model.hasOwnProperty(key)) {
							throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */](
								`model.${name}`,
								`"${key}" is not a valid key, only [${Object.keys(model).join(', ')}] keys are supported`
							);
						}

						const newValue = state[key];
						const oldValue = model[key];
						if (newValue !== oldValue) {
							__WEBPACK_IMPORTED_MODULE_3__log__["a" /* Log */].info('model', `value changed - "${name}.${key}"`);
							__WEBPACK_IMPORTED_MODULE_2__guard__["a" /* Guard */].notUndefined(newValue, `model.${name}.${key}`);

							model[key] = newValue;
							hasChanges = true;
							changes[key] = {
								newValue: newValue,
								oldValue: oldValue
							};

							changeSet.add(key);
						}
						else{
							__WEBPACK_IMPORTED_MODULE_3__log__["a" /* Log */].warn('model', `value was not changed - "${name}.${key}"`);
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
		}
	}

	static register(name, model) {
		if (models.hasOwnProperty(name)) {
			throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */](
				'model',
				`"${name}" is already registered`);
		}

		if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__services_utility__["isFunction"])(model)) {
			throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */](
				`model.${name}`,
				`"${model}" is not a valid type, should be an constructor function`);
		}

		if (close) {
			throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */](
				`model.${name}`,
				'can\'t register, registration was closed');
		}

		models[name] = model;
		return Model;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Model;


/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(4);


class Shortcut {
	constructor(table, manager) {
		this.manager = manager;
		this.commands = [];
		this.shortcuts = new Map();
		this.codeMap = new Map()
			.set(9, 'tab')
			.set(13, 'enter')
			.set(27, 'escape')
			.set(32, 'space')
			.set(33, 'pageUp')
			.set(34, 'pageDown')
			.set(35, 'end')
			.set(36, 'home')
			.set(37, 'left')
			.set(38, 'up')
			.set(39, 'right')
			.set(40, 'down')
			.set(113, 'f2');

		this.canExecute = table.isFocused.bind(table);
		this.off = table.keyDown(this.onKeyDown.bind(this));
	}

	translate(e) {
		const codes = [];
		if (e.ctrlKey) {
			codes.push('ctrl');
		}

		if (e.shiftKey) {
			codes.push('shift');
		}

		const char = (this.codeMap.get(e.keyCode) || String.fromCharCode(e.keyCode)).toLowerCase();
		codes.push(char);
		return codes.join('+');
	}

	onKeyDown(e) {
		if (this.canExecute()) {
			const code = this.translate(e);
			const commands = this.find(code);
			if (commands.length) {
				e.preventDefault();
				this.manager.execute(commands);
			}
		}
	}

	register(id, commands) {
		for (let cmd of commands.values()) {
			if (cmd.shortcut) {
				if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["isFunction"])(cmd.shortcut)) {
					this.commands.push(cmd);
				}
				else {
					cmd.shortcut
						.toLowerCase()
						.split('|')
						.forEach(shortcut => {
							let temp = [];
							if (this.shortcuts.has(shortcut)) {
								temp = this.shortcuts.get(shortcut);
							}
							temp.push(cmd);
							this.shortcuts.set(shortcut, temp);
						});
				}
			}
		}

		return () => this.shortcuts.delete(id);
	}

	find(code) {
		let result = [];
		if (this.shortcuts.has(code)) {
			result = result.concat(this.shortcuts.get(code));
		}

		result = result.concat(this.commands.filter(cmd => this.test(cmd.shortcut(), code)));
		return result;
	}

	test(shortcut, code) {
		return ('' + shortcut)
			.toLowerCase()
			.split('|')
			.some(shct => code === shct);
	}

	onDestroy() {
		this.off();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Shortcut;


/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layer_model__ = __webpack_require__(295);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__layer_model__["a"]; });


/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(10);


class LayerModel {
	constructor() {
		this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LayerModel;


/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class LayoutModel {
	constructor() {
		this.columns = {};
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LayoutModel;


/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_css__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipe_units__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__infrastructure__ = __webpack_require__(3);







class LayoutView extends __WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */] {
	constructor(model, table, service) {
		super(model);
		this.model = model;
		this.table = table;
		this.service = service;

		this.onInit();
	}

	onInit() {
		const model = this.model;

		model.viewChanged.watch(e => {
			if (e.hasChanges('columns')) {
				this.invalidateColumns();
			}
		});

		model.layoutChanged.watch(e => {
			if (e.hasChanges('columns')) {
				this.invalidateColumns(this.form);
			}
		});

		model.dataChanged.watch(e => {
			if (e.hasChanges('columns')) {
				const columns = model.data().columns;
				const columnMap = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["map"](columns);
				const index =
					model.columnList()
						.index
						.filter(key => columnMap.hasOwnProperty(key));

				const indexSet = new Set(index);
				const appendIndex = columns.filter(c => !indexSet.has(c.key));
				const orderIndex = Array.from(appendIndex);
				orderIndex.sort((x, y) => {
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

				index.push(...orderIndex.map(c => c.key));
				model.columnList({index: index}, {behavior: 'core'});
			}
		});

		model.columnListChanged.watch(e => {
			if (e.hasChanges('index') && e.tag.behavior !== 'core') {
				this.service.invalidate('column.list', e.tag, __WEBPACK_IMPORTED_MODULE_4__pipe_units__["PipeUnit"].column);
			}
		});
	}

	get form() {
		const model = this.model;
		const layout = model.layout;
		const state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services_utility__["clone"])(layout().columns);
		const headRow = this.table.head.row(0);
		if (headRow) {
			const columns = this.table.data.columns();
			let length = columns.length;
			while (length--) {
				const column = columns[length];
				if (!state.hasOwnProperty(column.key)) {
					if (column.canResize) {
						state[column.key] = {width: headRow.cell(column.index).width};
					}
				}
			}

		}

		return state;
	}

	invalidateColumns(form) {
		__WEBPACK_IMPORTED_MODULE_5__infrastructure__["Log"].info('layout', 'invalidate columns');

		const model = this.model;
		const getWidth = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["widthFactory"](model, form);
		const columns = this.table.data.columns();
		const style = {};
		let length = columns.length;
		while (length--) {
			const column = columns[length];
			const width = getWidth(column);
			if (null !== width) {
				const key = __WEBPACK_IMPORTED_MODULE_1__services_css__["a" /* escape */](column.key);
				style[`td.q-grid-${key}, th.q-grid-${key}`] = {
					'width': width,
					'min-width': width,
					'max-width': width
				};
			}
		}

		const sheet = __WEBPACK_IMPORTED_MODULE_1__services_css__["b" /* sheet */](this.styleId);
		sheet.set(style);
	}

	destroy() {
		const sheet = __WEBPACK_IMPORTED_MODULE_1__services_css__["b" /* sheet */](this.styleId);
		sheet.remove();
	}

	get styleId() {
		return `${this.model.grid().id}-${this.table.pin || 'center'}-layout`;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LayoutView;


/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);


class Navigation {
	constructor(model, table) {
		this.model = model;
		this.table = table;
	}

	positon(y, direction) {
		const body = this.table.body;
		let index = 0;
		let offset = 0;
		const count = body.rowCount();

		// TODO: improve performance
		while (index < count && offset <= y) {
			offset += body.row(index).height;
			index++;
		}

		if (direction === 'down' && body.row(index)) {
			offset -= body.row(index).height;
			index--;
		}
		return {
			row: Math.max(this.firstRow, Math.min(this.lastRow, index)),
			offset: offset
		};
	}

	goTo(row, column, source = 'navigation') {
		const cell = this.cell(row, column);
		this.model.navigation({cell: cell}, {source: source});
	}

	get columns() {
		const columns = this.table.data.columns();
		const indicies = [];
		for (let i = 0, length = columns.length; i < length; i++) {
			const column = columns[i];
			if (column.canFocus) {
				indicies.push(i);
			}
		}
		return indicies;
	}

	get rows() {
		return this.table.data.rows().map((r, i) => i);
	}

	get currentColumn() {
		const columns = this.columns;
		if (!columns.length) {
			return -1;
		}

		const column = this.model.navigation().columnIndex;
		const index = columns.indexOf(column);
		return columns[Math.max(0, index)];
	}

	get nextColumn() {
		const columns = this.columns;
		if (!columns.length) {
			return -1;
		}

		const column = this.model.navigation().columnIndex;
		const index = columns.indexOf(column);
		return index < columns.length - 1 ? columns[index + 1] : -1;
	}

	get prevColumn() {
		const columns = this.columns;
		if (!columns.length) {
			return -1;
		}

		const column = this.model.navigation().columnIndex;
		const index = columns.indexOf(column);
		return index > 0 ? columns[index - 1] : -1;
	}

	get lastColumn() {
		const columns = this.columns;
		if (!columns.length) {
			return -1;
		}

		return columns[columns.length - 1];
	}

	get firstColumn() {
		const columns = this.columns;
		if (!columns.length) {
			return -1;
		}

		return columns[0];
	}

	get currentRow() {
		const rows = this.rows;
		if (!rows.length) {
			return -1;
		}

		const row = this.model.navigation().rowIndex;
		return rows[Math.max(0, row)];
	}

	get nextRow() {
		const rows = this.rows;
		if (!rows.length) {
			return -1;
		}

		const row = this.model.navigation().rowIndex;
		return row < rows.length - 1 ? rows[row + 1] : -1;
	}

	get prevRow() {
		const rows = this.rows;
		if (!rows.length) {
			return -1;
		}

		const row = this.model.navigation().rowIndex;
		return row > 0 ? rows[row - 1] : -1;
	}

	get firstRow() {
		const rows = this.rows;
		if (!rows.length) {
			return -1;
		}

		return rows[0];
	}

	get lastRow() {
		const rows = this.rows;
		if (!rows.length) {
			return -1;
		}

		return rows[rows.length - 1];
	}

	cell(row, column) {
		return this.table.body.cell(row, column).model;
	}

	get commands() {
		const model = this.model;
		const table = this.table;
		const canExecute = () => model.edit().state === 'view';

		const commands = {
			goDown: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Command"]({
				shortcut: 'down',
				canExecute: () => canExecute() && this.nextRow >= 0,
				execute: () => this.goTo(this.nextRow, this.currentColumn)
			}),
			goUp: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Command"]({
				shortcut: 'up',
				canExecute: () => canExecute() && this.prevRow >= 0,
				execute: () => this.goTo(this.prevRow, this.currentColumn)
			}),
			goRight: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Command"]({
				shortcut: 'right',
				canExecute: () => canExecute() && this.nextColumn >= 0,
				execute: () => this.goTo(this.currentRow, this.nextColumn)
			}),
			tab: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Command"]({
				shortcut: 'tab',
				execute: () => {
					const hasNextColumn = this.nextColumn >= 0;
					const hasNextRow = this.nextRow >= 0;
					if (!hasNextColumn && !hasNextRow) {
						table.blur();
						return;
					}

					if (!hasNextColumn) {
						this.goTo(this.nextRow, this.firstColumn);
						return;
					}

					this.goTo(this.currentRow, this.nextColumn);
				}
			}),
			shiftTab: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Command"]({
				shortcut: 'Shift+tab',
				execute: () => {
					const hasPrevColumn = this.prevColumn >= 0;
					const hasPrevRow = this.prevRow >= 0;
					if (!hasPrevColumn && !hasPrevRow) {
						table.blur();
						return;
					}

					if (!hasPrevColumn) {
						this.goTo(this.prevRow, this.lastColumn);
						return;
					}

					this.goTo(this.currentRow, this.prevColumn);
				}
			}),
			goLeft: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Command"]({
				shortcut: 'left',
				canExecute: () => canExecute() && this.prevColumn >= 0,
				execute: () => this.goTo(this.currentRow, this.prevColumn)
			}),
			home: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Command"]({
				shortcut: 'home',
				canExecute: () => canExecute() && this.prevRow >= 0,
				execute: () => this.goTo(this.firstRow, this.currentColumn)
			}),
			end: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Command"]({
				shortcut: 'end',
				canExecute: () => canExecute() && this.nextRow >= 0,
				execute: () => this.goTo(this.lastRow, this.currentColumn)
			}),
			pageUp: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Command"]({
				shortcut: 'pageUp',
				canExecute: () => canExecute() && this.prevRow >= 0,
				execute: () => {
					const body = table.body;
					const position = this.positon(body.scrollTop() - body.rect().height, 'up');
					body.scrollTop(position.offset);
					this.goTo(position.row, this.currentColumn, 'navigation.scroll');
				}
			}),
			pageDown: new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["Command"]({
				shortcut: 'pageDown',
				canExecute: () => canExecute() && this.nextRow >= 0,
				execute: () => {
					const body = table.body;
					let position = this.positon(body.scrollTop() + body.rect().height, 'down');
					body.scrollTop(position.offset);
					this.goTo(position.row, this.currentColumn, 'navigation.scroll');
				}
			})
		};

		return new Map(Object.entries(commands));
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Navigation;


/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class NavigationModel {
	constructor() {
		this.cell = null;
	}

	get rowIndex() {
		return this.cell ? this.cell.rowIndex : -1;
	}

	get columnIndex() {
		return this.cell ? this.cell.columnIndex : -1;
	}

	get row() {
		return this.cell ? this.cell.row : null;
	}

	get column() {
		return this.column ? this.cell.column : null;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NavigationModel;


/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__definition__ = __webpack_require__(19);





class NavigationView extends __WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */] {
	constructor(model, table, commandManager) {
		super(model);

		this.table = table;
		const shortcut = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Shortcut"](table, commandManager);
		const navigation = new __WEBPACK_IMPORTED_MODULE_2__navigation__["a" /* Navigation */](model, table);

		this.shortcutOff = shortcut.register('navigation', navigation.commands);

		this.blur = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
			execute: (row, column) => table.body.cell(row, column).removeClass(`${__WEBPACK_IMPORTED_MODULE_3__definition__["GRID_PREFIX"]}-focus`),
			canExecute: (row, column, cell) => {
				return (cell && table.data.columns().indexOf(cell.column) >= 0)
					|| (!cell && table.body.cell(row, column).model !== null);
			}
		});

		this.focus = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
			execute: (row, column) => table.body.cell(row, column).addClass(`${__WEBPACK_IMPORTED_MODULE_3__definition__["GRID_PREFIX"]}-focus`),
			canExecute: (row, column, cell) => {
				cell = cell || table.body.cell(row, column).model;
				return cell
					&& cell.column.canFocus
					&& table.data.columns().indexOf(cell.column) >= 0;
			}
		});

		this.focusCell = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
			execute: cell => model.navigation({cell: cell}),
			canExecute: cell => {
				return cell
					&& cell.column.canFocus
					&& table.data.columns().indexOf(cell.column) >= 0
					&& cell !== model.navigation().cell;
			}
		});

		this.scrollTo = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
			execute: (row, column) => this.scroll(table.body, table.body.cell(row, column)),
			canExecute: (row, column) => table.body.cell(row, column).model !== null
		});

		model.navigationChanged.watch(e => {
			if (e.hasChanges('cell')) {
				const navState = e.state;
				const newTarget = e.changes.cell.newValue;
				const oldTarget = e.changes.cell.oldValue;
				const newRow = navState.rowIndex;
				const newColumn = navState.columnIndex;
				const oldRow = e.changes.cell.oldValue ? e.changes.cell.oldValue.rowIndex : -1;
				const oldColumn = e.changes.cell.oldValue ? e.changes.cell.oldValue.columnIndex : -1;

				if (this.blur.canExecute(oldRow, oldColumn, oldTarget)) {
					this.blur.execute(oldRow, oldColumn);
				}

				if (this.focus.canExecute(newRow, newColumn, newTarget)) {
					this.focus.execute(newRow, newColumn);
				}

				if (e.tag.source !== 'navigation.scroll' && this.scrollTo.canExecute(newRow, newColumn)) {
					this.scrollTo.execute(newRow, newColumn);
				}

				model.focus({
					rowIndex: newRow,
					columnIndex: newColumn
				}, {
					source: 'navigation.view'
				});
			}
		});

		model.focusChanged.watch(e => {
			if (e.tag.source !== 'navigation.view') {
				model.navigation({
					cell: table.body.cell(e.state.rowIndex, e.state.columnIndex).model
				});
			}
		});

		model.viewChanged.watch(() => model.navigation({cell: null}));
	}

	scroll(body, target) {
		const tr = target.rect();
		const cr = body.rect();
		const scrollState = this.model.scroll();

		if (cr.left > tr.left
			|| cr.left > tr.right
			|| cr.right < tr.left
			|| cr.right < tr.right) {
			if (cr.left < tr.left
				|| cr.right < tr.right) {
				body.scrollLeft(tr.right - cr.right + scrollState.left);
			} else if (cr.left > tr.left
				|| cr.left > tr.right) {
				body.scrollLeft(tr.left - cr.left + scrollState.left);
			}
		}

		if (cr.top > tr.top
			|| cr.top > tr.bottom
			|| cr.bottom < tr.top
			|| cr.bottom < tr.bottom) {
			if (cr.top < tr.top
				|| cr.bottom < tr.bottom) {
				body.scrollTop(tr.bottom - cr.bottom + scrollState.top);
			} else if (cr.top > tr.top
				|| cr.top > tr.bottom) {
				body.scrollTop(tr.top - cr.top + scrollState.top);
			}
		}
	}

	destroy() {
		this.shortcutOff();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NavigationView;


/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node__ = __webpack_require__(67);
/* harmony export (immutable) */ __webpack_exports__["a"] = nodeBuilder;



function nodeBuilder(columnMap, groupBy, valueFactory, level = 0) {
	if (groupBy.length === 0) {
		return () => [];
	}

	const groupKey = groupBy[0];
	if (!columnMap.hasOwnProperty(groupKey)) {
		throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('node.builder', `can't find column "${groupKey}"`);
	}

	const column = columnMap[groupKey];
	const getValue = valueFactory(column);
	return (rows, getRowIndex = (i) => i) => {
		const keys = [];
		const nodes = [];
		const groups = {};
		for (let i = 0, length = rows.length; i < length; i++) {
			const row = rows[i];
			const index = getRowIndex(i);
			const key = getValue(row);
			if (!groups.hasOwnProperty(key)) {
				const node = new __WEBPACK_IMPORTED_MODULE_1__node__["a" /* Node */](key, level);
				node.rows.push(index);
				keys.push(key);
				nodes.push(node);
				groups[key] = {
					node,
					rows: [row]
				};
			}
			else {
				const group = groups[key];
				group.node.rows.push(index);
				group.rows.push(row);
				keys.push(key);
			}
		}

		const nextGroupBy = groupBy.slice(1);
		if (nextGroupBy.length) {
			const build = nodeBuilder(columnMap, nextGroupBy, valueFactory, level + 1);
			for (let i = 0, length = keys.length; i < length; i++) {
				const key = keys[i];
				const group = groups[key];
				const node = group.node;
				const rows = node.rows;
				node.children = build(group.rows, i => rows[i]);
			}
		}

		return nodes;
	};
}

/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(67);
/* harmony export (immutable) */ __webpack_exports__["a"] = flatView;


function flatView(nodes, result = []) {
	for (let i = 0, nodesLength = nodes.length; i < nodesLength; i++) {
		const node = nodes[i];
		result.push(node);

		if (node.state.expand) {
			const children = node.children;
			if (children.length) {
				flatView(children, result);
			}
			else{
				const rows = node.rows;
				for (let j = 0, rowsLength = rows.length; j < rowsLength; j++) {
					const row = rows[j];
					const rowNode = new __WEBPACK_IMPORTED_MODULE_0__node__["a" /* Node */](node.key, node.level + 1, 'row');
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
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(10);


class PaginationModel {
	constructor() {
		this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
		this.current = 0;
		this.size = 50;
		this.sizeList = [5, 10, 20, 30, 40, 50];
		this.count = 0;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PaginationModel;



/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(7);


class PaginationView extends __WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */] {
	constructor(model) {
		super(model);

		model.dataChanged.watch(e => {
			if (e.hasChanges('rows') && e.tag.behavior !== 'core') {
				model.pagination({
					current: 0
				});
			}
		});

		model.filterChanged.watch(e => {
			if (e.hasChanges('by')) {
				model.pagination({
					current: 0
				});
			}
		});

		model.pivotChanged.watch(e => {
			if (e.hasChanges('by')) {
				model.pagination({
					current: 0
				});
			}
		});

		model.groupChanged.watch(e => {
			if (e.hasChanges('by')) {
				model.pagination({
					current: 0
				});
			}
		});
	}

	get current() {
		return this.model.pagination().current;
	}

	get size() {
		return this.model.pagination().size;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PaginationView;


/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_factory__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_column_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = columnPipe;




function columnPipe(memo, context, next) {
	const model = context.model;
	const pivot = memo.pivot;
	const nodes = memo.nodes;
	const heads = pivot.heads;
	const columns = [];
	const addSelectColumn = selectColumnFactory(model);
	const addGroupColumn = groupColumnFactory(model, nodes);
	const addDataColumns = dataColumnsFactory(model);
	const addPivotColumns = pivotColumnsFactory(model);
	const addPadColumn = padColumnFactory(model);

	/*
	 * Add column with select boxes
	 * if selection unit is row
	 *
	 */
	addSelectColumn(columns, {rowspan: heads.length, row: 0});

	/*
	 * Add group column with nodes
	 *
	 */
	addGroupColumn(columns, {rowspan: heads.length, row: 0});

	columns.forEach((c, i) => c.index = i);

	/*
	 * Add columns defined by user
	 * that are visible
	 *
	 */
	addDataColumns(columns, {rowspan: heads.length, row: 0});


	/*
	 * Persist order of draggable columns
	 *
	 */
	let index = 0;
	const columnMap = __WEBPACK_IMPORTED_MODULE_1__column_column_service__["map"](columns.map(c => c.model));
	const indexMap = model.columnList()
		.index
		.filter(key => columnMap.hasOwnProperty(key))
		.reduce((memo, key) => {
			memo[key] = index++;
			return memo;
		}, {});

	const hangoutColumns = columns.filter(c => !indexMap.hasOwnProperty(c.model.key));
	const indexedColumns = columns.filter(c => indexMap.hasOwnProperty(c.model.key));
	const startIndex = hangoutColumns.length;

	hangoutColumns.forEach((c, i) => c.model.index = i);
	indexedColumns.forEach(c => c.model.index = startIndex + indexMap[c.model.key]);

	columns.sort((x, y) => x.model.index - y.model.index);

	if (heads.length) {
		/*
		 * Add column rows for pivoted data
		 * if pivot is turned on
		 *
		 */

		memo.columns = addPivotColumns(columns, heads);
	}
	else {
		/*
		 * Add special column type
		 * that fills remaining place (width = 100%)
		 *
		 */
		addPadColumn(columns, {rowspan: heads.length, row: 0});
		memo.columns = [columns];
	}

	next(memo);
}

function selectColumnFactory(model) {
	const dataColumns = model.data().columns;
	const selection = model.selection();

	const selectColumn = dataColumns.find(item => item.type === 'select');
	const indicatorColumn = dataColumns.find(item => item.type === 'row-indicator');

	if (!indicatorColumn && selection.unit === 'mix') {
		const createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["a" /* columnFactory */])(model);
		return (columns, context) => {
			const selectColumn = createColumn('row-indicator');
			selectColumn.model.source = 'generation';
			selectColumn.rowspan = context.rowspan;
			columns.push(selectColumn);
			return selectColumn;
		};
	}

	if (!selectColumn && selection.unit === 'row' && selection.mode !== 'range') {
		const createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["a" /* columnFactory */])(model);
		return (columns, context) => {
			const selectColumn = createColumn('select');
			selectColumn.model.source = 'generation';
			selectColumn.rowspan = context.rowspan;
			columns.push(selectColumn);
			return selectColumn;
		};
	}

	return __WEBPACK_IMPORTED_MODULE_2__services_utility__["noop"];
}

function groupColumnFactory(model, nodes) {
	const dataColumns = model.data().columns;
	const groupColumn = dataColumns.find(item => item.type === 'group');
	if (nodes.length && !groupColumn) {
		const createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["a" /* columnFactory */])(model);
		return (columns, context) => {
			const groupColumn = createColumn('group');
			groupColumn.model.source = 'generation';
			groupColumn.rowspan = context.rowspan;
			columns.push(groupColumn);
			return groupColumn;
		};
	}

	return __WEBPACK_IMPORTED_MODULE_2__services_utility__["noop"];
}

function dataColumnsFactory(model) {
	const createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["a" /* columnFactory */])(model);
	return (columns, context) => {
		const dataColumns = model.data().columns;
		columns.push(...
			__WEBPACK_IMPORTED_MODULE_1__column_column_service__["dataView"](
				dataColumns
					.map(c => {
						const dataColumn = createColumn(c.type || 'text', c);
						dataColumn.rowspan = context.rowspan;
						return dataColumn;
					}),
				model));

		return dataColumns;
	};
}

function padColumnFactory(model) {
	const createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["a" /* columnFactory */])(model);
	return (columns, context) => {
		const padColumn = createColumn('pad');
		padColumn.rowspan = context.rowspan;
		columns.push(padColumn);
		return padColumn;
	};
}

function pivotColumnsFactory(model) {
	const createColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_factory__["a" /* columnFactory */])(model);
	const addPadColumn = padColumnFactory(model);
	return (columns, heads) => {
		const rows = [columns];

		/*
		 * Data columns + first row pivot columns
		 *
		 */
		const head = heads[0];
		const headLength = head.length;
		const row = new Array(headLength);
		const startIndex = columns.length;
		for (let j = 0; j < headLength; j++) {
			const headColumn = head[j];
			const pivotColumn = createColumn('pivot');
			pivotColumn.colspan = headColumn.value;
			const pivotColumnModel = pivotColumn.model;
			pivotColumnModel.title = headColumn.key;
			pivotColumnModel.key = pivotColumnModel.key + `[0][${j}]`;

			pivotColumnModel.rowIndex = 0;
			pivotColumnModel.index = startIndex + j;
			row[j] = pivotColumn;
		}

		const firstRow = rows[0];
		firstRow.push(...row);

		/*
		 * Add special column type
		 * that fills remaining place (width = 100%)
		 *
		 */
		addPadColumn(firstRow, {rowspan: 1, row: 0});

		/*
		 * Next rows pivot columns
		 *
		 */
		for (let i = 1, length = heads.length; i < length; i++) {
			const head = heads[i];
			const headLength = head.length;
			const row = new Array(headLength);
			for (let j = 0; j < headLength; j++) {
				const headColumn = head[j];
				const pivotColumn = createColumn('pivot');
				pivotColumn.colspan = headColumn.value;
				const pivotColumnModel = pivotColumn.model;
				pivotColumnModel.title = headColumn.key;
				pivotColumnModel.key = pivotColumnModel.key + `[${i}][${j}]`;

				pivotColumnModel.rowIndex = i;
				pivotColumnModel.index = j;
				row[j] = pivotColumn;
			}

			/*
			 * Add special column type
			 * that fills remaining place (width = 100%)
			 *
			 */
			addPadColumn(row, {rowspan: 1, row: i});

			rows.push(row);
		}

		return rows;
	};
}

/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dataPipe;
function dataPipe(data, context, next) {
	const model = context.model;
	const result = data.length ? data : model.data().rows;
	if (result.length) {
		model.data({rows: result}, {source: 'data.pipe', behavior: 'core'});
	}

	next(result);
}

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = filterPipe;
function filterPipe(data, context, next) {
	const model = context.model;
	const filterState = model.filter();
	const match = filterState.match(context);
	const result = [];

	for (let i = 0, length = data.length; i < length; i++) {
		const item = data[i];
		if (match(item)) {
			result.push(item);
		}
	}

	next(result);
}

/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node__ = __webpack_require__(41);
/* harmony export (immutable) */ __webpack_exports__["a"] = groupPipe;



function groupPipe(memo, context, next) {
	const model = context.model;
	const dataState = model.data();
	const groupState = model.group();

	const build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__node__["b" /* nodeBuilder */])(
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_service__["map"])(dataState.columns),
		groupState.by,
		context.valueFactory
	);

	memo.nodes = build(memo.rows);
	next(memo);
}

/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = memoPipe;
function memoPipe(data, ctx, next) {
	next({
		rows: data,
		pivot: {heads: [], rows: []},
		nodes: []
	});
}


/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = paginationPipe;
function paginationPipe(data, context, next) {
	const model = context.model;
	if (model.scroll().mode !== 'virtual') {
		const paginationState = model.pagination();
		const size = paginationState.size;
		const current = paginationState.current;
		const start = current * size;

		model.pagination({count: data.length}, {source: 'pagination.pipe', behavior: 'core'});
		next(data.slice(start, start + size));
	}
	else {
		next(data);
	}
}

/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(17);
/* harmony export (immutable) */ __webpack_exports__["a"] = build;


function build(model, valueFactory) {
	return function run(source, changes, pipe) {
		const pipes = pipe || model.data().pipe;
		const middleware = new __WEBPACK_IMPORTED_MODULE_0__services__["Middleware"](pipes);
		const context = {
			model: model,
			source: source,
			valueFactory: valueFactory,
			changes: changes
		};

		return middleware.run(context);
	};
}

/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_column_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pivot__ = __webpack_require__(69);
/* harmony export (immutable) */ __webpack_exports__["a"] = pivotPipe;



function pivotPipe(memo, context, next) {
	const model = context.model;
	const dataState = model.data();
	const pivotState = model.pivot();
	const build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__pivot__["build"])(
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__column_column_service__["map"])(dataState.columns),
		pivotState.by,
		context.valueFactory
	);

	memo.pivot = build(memo.rows);
	next(memo);
}

/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_sort_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_column_service__ = __webpack_require__(8);
/* harmony export (immutable) */ __webpack_exports__["a"] = sortPipe;





function sortPipe(data, context, next) {
	const model = context.model;
	const by = model.sort().by;
	let result = data;

	if (by.length) {
		const columns = model.data().columns;
		const mappings = [];
		const directions = [];

		for (let i = 0, length = by.length; i < length; i++) {
			const sortEntry = by[i];
			const	sortKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__sort_sort_service__["a" /* key */])(sortEntry);
			const	sortDir = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__sort_sort_service__["b" /* direction */])(sortEntry);
			const	sortColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__column_column_service__["find"])(columns, sortKey);
			if (!sortColumn) {
				throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('sort.pipe', `Column "${sortKey}" is not found`);
			}

			mappings.push(context.valueFactory(sortColumn));
			directions.push(sortDir);
		}

		result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["orderBy"])(data, mappings, directions);
	}

	next(result);
}



/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(41);
/* harmony export (immutable) */ __webpack_exports__["a"] = viewPipe;


function viewPipe(memo, context, next) {
	const model = context.model;
	const rows = memo.nodes.length ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__node__["a" /* flatView */])(memo.nodes) : memo.rows;

	model.view({
		rows: rows,
		nodes: memo.nodes,
		pivot: memo.pivot,
		columns: memo.columns
	}, {
		source: 'view.pipe',
		behavior: 'core'
	});

	next(memo);
}

/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pivot__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pivot_form__ = __webpack_require__(123);
/* harmony export (immutable) */ __webpack_exports__["a"] = build;




function buildFactory(columnMap, valueFactory) {
	return function run(pivot, pivotBy, level = 0) {
		const key = pivotBy[0];
		const column = columnMap[key];
		const getValue = valueFactory(column);

		return pivot({
			factory: () => ({}),
			selector: row => [getValue(row)],
			name: __WEBPACK_IMPORTED_MODULE_0__services_utility__["identity"],
			value: (parent, row, pivot) => {
				const nextPivotBy = pivotBy.slice(1);
				if (nextPivotBy.length) {
					return run(
						pivot,
						nextPivotBy,
						level + 1)(row);
				}

				return true;
			}
		});
	};
}

function build(columnMap, pivotBy, valueFactory) {
	let doPivot = null;
	if (pivotBy.length) {
		const doBuild = buildFactory(columnMap, valueFactory);
		doPivot = doBuild(__WEBPACK_IMPORTED_MODULE_1__pivot__["a" /* pivot */], pivotBy);
	}

	return rows => {
		if (doPivot) {
			const data = doPivot(rows);
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__pivot_form__["a" /* pivotForm */])(data);
		}

		return {heads: [], rows: []};
	};
}

/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(10);


class PivotModel {
	constructor() {
		this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
		this.by = [];
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PivotModel;


/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_value__ = __webpack_require__(20);





class PivotView extends __WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */] {
	constructor(model) {
		super(model);

		this.rows = [];
		this.valueFactory = __WEBPACK_IMPORTED_MODULE_3__services_value__["getFactory"];

		model.viewChanged.watch(() => this.invalidate(model));
	}

	invalidate(model) {
		__WEBPACK_IMPORTED_MODULE_2__infrastructure__["Log"].info('view.pivot', 'invalidate');

		const pivot = model.view().pivot;
		const pivotRows = pivot.rows;
		if (pivotRows.length && model.group().by.length) {
			const build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__group__["groupBuilder"])(model);
			this.rows = build(this.valueFactory);
		}
		else {
			this.rows = pivotRows;
		}
	}

	value(row, column) {
		const rowIndex = this.model.view().rows.indexOf(row);
		return this.rows[rowIndex][column.index];
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PivotView;


/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_model__ = __webpack_require__(319);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__plugin_model__["a"]; });


/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(10);


class PluginModel {
	constructor() {
		this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PluginModel;


/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__progress_model__ = __webpack_require__(321);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__progress_model__["a"]; });


/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(10);


class ProgressModel {
	constructor() {
		this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
		this.isBusy = false;
		this.queue = [];
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProgressModel;



/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__ = __webpack_require__(125);
/* unused harmony export factory */



function factory(resource, key) {
	const data = resource.data;
	const scope = resource.scope;
	if (resource instanceof __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__["a" /* EnumerableResource */]) {
		let keyIndex = 1;
		let count = resource.count;
		const originKey = key;
		while (data.hasOwnProperty(key)) {
			key = originKey + keyIndex++;
		}

		if (count < keyIndex) {
			count = keyIndex;
		}

		return (content, env) => {
			// TODO: do we need full clone here?
			data[key] = content;
			if (Object.keys(env).length) {
				scope[key] = env;
			}
			return new __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__["a" /* EnumerableResource */](data, scope, count);
		};
	}

	return (content, env) => {
		// TODO: do we need full clone here?
		data[key] = content;
		if (Object.keys(env).length) {
			scope[key] = env;
		}
		return new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */](data, scope);
	};
}

/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__row_model__ = __webpack_require__(324);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__row_model__["a"]; });


/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(10);


class RowModel {
	constructor() {
		this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();

		this.height = 0;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RowModel;


/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ScrollModel {
	constructor() {
		this.mode = 'default';

		this.top = 0;
		this.left = 0;
		this.width = 0;
		this.height = 0;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScrollModel;


/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);



class ScrollView extends __WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */] {
	constructor(model, table, vscroll, gridService) {
		super(model);

		this.table = table;

		const scroll = model.scroll;
		this.y = vscroll.factory({
			threshold: model.pagination().size,
			rowHeight: model.row().height
		});

		const apply = this.y.container.apply;
		this.y.container.apply = f => {
			apply(() => {
				f();
				const container = this.y.container;
				this.model.pagination({
					current: Math.floor(container.position / model.pagination().size),
					count: container.total
				}, {
					source: 'scroll.view',
					behavior: 'core'
				});
			});
		};

		switch (scroll().mode) {
			case 'virtual': {
				this.y.settings.fetch = (skip, take, d) => {
					this.model.pagination({
						current: Math.floor(skip / take)
					}, {
						source: 'scroll.view',
						behavior: 'core'
					});

					gridService
						.invalidate('scroll.view')
						.then(d.resolve(model.view().rows.length));
				};

				break;
			}
			default:
				model.paginationChanged.watch(() => {
					this.y.container.reset();
				});
		}

		model.scrollChanged.watch(e => {
			if (e.hasChanges('left') || e.hasChanges('top')) {
				this.invalidate(e.tag.pin);
			}
		});
	}

	invalidate(pin) {
		__WEBPACK_IMPORTED_MODULE_1__infrastructure__["Log"].info('layout', 'invalidate scroll');

		const table = this.table;
		const scroll = this.model.scroll();
		if(pin === this.table.pin) {
			table.head.scrollLeft(scroll.left);
			table.foot.scrollLeft(scroll.left);
		}

		table.body.scrollTop(scroll.top);
	}

	get mode() {
		return this.model.scroll().mode;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScrollView;


/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(4);



class SelectionModel {
	constructor() {
		this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
		this.unit = 'cell';//row|cell|column|mix
		this.mode = 'single';//single|multiple|range
		this.entries = [];
		this.items = [];
		this.key = {
			row: __WEBPACK_IMPORTED_MODULE_1__services_utility__["identity"],
			column: __WEBPACK_IMPORTED_MODULE_1__services_utility__["identity"]
		};
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SelectionModel;


/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range_build__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__definition__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_utility__ = __webpack_require__(4);







class SelectionView extends __WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */] {
	constructor(model, table, commandManager) {
		super(model);

		this.table = table;

		this.selectionState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__state__["a" /* selectionStateFactory */])(model);
		this.buildRange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__range_build__["a" /* rangeBuilder */])(model);

		const shortcut = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Shortcut"](table, commandManager);
		const commands = this.commands;
		this.shortcutOff = shortcut.register('selectionNavigation', commands);
		this.toggleRow = commands.get('toggleRow');
		this.toggleColumn = commands.get('toggleColumn');
		this.toggleCell = commands.get('toggleCell');

		this.reset = commands.get('reset');

		model.dataChanged.watch(() => {
			this.selectionState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__state__["a" /* selectionStateFactory */])(model);

			const items = model.selection().items;
			const entries = this.selectionState.lookup(items);

			this.select(entries);
		});

		model.navigationChanged.watch(e => {
			if (e.hasChanges('cell') && e.tag.source !== 'selection') {
				const selectionState = model.selection();
				if (selectionState.unit === 'cell' && selectionState.mode === 'single') {
					if (e.state.cell) {
						this.select(e.state.cell, true);
					}
				}
			}
		});

		model.selectionChanged.watch(e => {
			if (e.hasChanges('mode')) {
				const newClassName = `${__WEBPACK_IMPORTED_MODULE_4__definition__["GRID_PREFIX"]}-select-${model.selection().mode}`;
				const view = table.view;
				view.addClass(newClassName);

				if (e.changes.mode.oldValue != e.changes.mode.newValue) {
					const oldClassName = `${__WEBPACK_IMPORTED_MODULE_4__definition__["GRID_PREFIX"]}-select-${e.changes.mode.oldValue}`;
					view.removeClass(oldClassName);
				}
			}

			if (e.hasChanges('unit') || e.hasChanges('mode')) {
				if (!e.hasChanges('items') && !e.hasChanges('entries')) {
					model.selection({
						items: [],
						entries: []
					});
					this.selectionState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__state__["a" /* selectionStateFactory */])(model);
				}

				model.navigation({cell: null}, {source: 'selection'});
			}

			if (e.hasChanges('entries') && !e.hasChanges('items')) {
				const entries = model.selection().entries;
				model.selection({
					items: this.selectionState.view(entries),
					entries: entries
				});
			}
		});
	}

	get commands() {
		const model = this.model;
		const table = this.table;
		const commands = {
			toggleRow: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
				execute: (item, state) => {
					this.select(item, state);
				}
			}),
			toggleColumn: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
				execute: (item, state) => {
					this.select(item, state);
				}
			}),
			toggleCell: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
				execute: (item, state) => {
					this.select(item, state);
				}
			}),
			toggleActiveRow: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
				shortcut: 'shift+space',
				execute: () => {
					const navState = model.navigation();
					const rowIndex = navState.rowIndex;

					let row;
					if (rowIndex >= 0) {
						row = this.rows[rowIndex];
					} else {
						row = this.rows[rowIndex + 1];
						model.navigation({
							cell: table.body.cell(rowIndex + 1, navState.columnIndex)
						}, {
							source: 'selection'
						});
					}

					this.select(row);
				},
				canExecute: () => model.selection().unit === 'row' && this.rows.length > 0
			}),
			togglePrevRow: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
				shortcut: 'shift+up',
				execute: () => {
					const navState = model.navigation();
					const rowIndex = navState.rowIndex - 1;
					const row = this.rows[rowIndex];
					this.select(row);
					model.navigation({cell: table.body.cell(rowIndex, navState.columnIndex).model}, {source: 'selection'});
				},
				canExecute: () => model.selection().unit === 'row' && model.navigation().rowIndex > 0
			}),
			toggleNextRow: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
				shortcut: 'shift+down',
				execute: () => {
					const navState = model.navigation();
					const rowIndex = navState.rowIndex + 1;
					const row = this.rows[rowIndex];
					this.select(row);
					model.navigation({cell: table.body.cell(rowIndex, navState.columnIndex).model}, {source: 'selection'});
				},
				canExecute: () => model.selection().unit === 'row' && model.navigation().rowIndex < this.rows.length - 1
			}),
			toggleActiveColumn: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
				shortcut: 'ctrl+space',
				execute: () => {
					const columnIndex = model.navigation().columnIndex;
					const entries = Array.from(model.selection().entries);
					const column = this.columns[columnIndex].key;
					this.select([...entries, column]);
				},
				canExecute: () => model.selection().unit === 'column' && model.navigation().columnIndex >= 0
			}),
			toggleNextColumn: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
				shortcut: 'shift+right',
				execute: () => {
					const navState = model.navigation();
					const columnIndex = navState.columnIndex + 1;
					const column = this.columns[columnIndex].key;
					this.select(column);
					model.navigation({cell: table.body.cell(navState.rowIndex, columnIndex).model}, {source: 'selection'});
				},
				canExecute: () => model.selection().unit === 'column' && model.navigation().columnIndex < this.columns().length - 1
			}),
			togglePrevColumn: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
				shortcut: 'shift+left',
				execute: () => {
					const navState = model.navigation();
					const columnIndex = navState.columnIndex - 1;
					const column = this.columns[columnIndex].key;
					this.select(column);
					model.navigation({cell: table.body.cell(navState.rowIndex, columnIndex).model}, {source: 'selection'});
				},
				canExecute: () => model.selection().unit === 'column' && model.navigation().columnIndex > 0
			}),
			selectAll: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
				shortcut: 'ctrl+a',
				execute: () => this.select(),
				canExecute: () => model.selection().mode === 'multiple'
			}),
			reset: new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
				execute: () => {
					this.reset();
				}
			})
		};

		return new Map(
			Object.entries(commands)
		);
	}

	selectRange(startCell, endCell) {
		const range = this.buildRange(startCell, endCell);
		this.select(range);
	}

	select(items) {
		if (arguments.length && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__services_utility__["isUndefined"])(items)) {
			if (this.selection.mode === 'range') {
				this.selectionState.clear();
				this.selectionState.toggle(items, true);
			} else {
				this.selectionState.toggle(items);
			}
		}
		else {
			if (this.state() || this.model.selection().mode === 'single') {
				this.selectionState.clear();
			}
			else {
				this.selectionState.select(this.model.view().rows, true);
			}
		}

		const entries = this.selectionState.entries();
		this.model.selection({
			entries: entries,
		}, {source: 'toggle'});
	}

	state(item) {
		if (!arguments.length) {
			item = this.model.view().rows;
		}

		return this.selectionState.state(item) === true;
	}

	isIndeterminate(item) {
		if (!arguments.length) {
			item = this.model.view().rows;
		}

		return this.selectionState.state(item) === null;
	}

	destroy() {
		this.shortcutOff();
	}

	get selection() {
		return this.model.selection();
	}

	get rows() {
		return this.table.data.rows();
	}

	get columns() {
		return this.table.data.columns();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SelectionView;


/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multiple_selection_state__ = __webpack_require__(129);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selection_state_factory__ = __webpack_require__(330);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__selection_state_factory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_state__ = __webpack_require__(71);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_selection_state__ = __webpack_require__(130);
/* unused harmony namespace reexport */






/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__single_selection_state__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multiple_selection_state__ = __webpack_require__(129);
/* harmony export (immutable) */ __webpack_exports__["a"] = selectionStateFactory;




function selectionStateFactory(model) {
	const mode = model.selection().mode;
	switch (mode) {
		case 'single':
			return new __WEBPACK_IMPORTED_MODULE_1__single_selection_state__["a" /* SingleSelectionState */](model);
		case 'multiple':
		case 'range':
			return new __WEBPACK_IMPORTED_MODULE_2__multiple_selection_state__["a" /* MultipleSelectionState */](model);
		default:
			throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"]('selection.state.factory', `Invalid selection mode "${mode}"`);
	}
}

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Aggregation {
	constructor() {
	}

	static first(rows, getValue) {
		if (!rows.length) {
			return null;
		}

		return getValue(rows[0]);
	}

	static last(rows, getValue) {
		if (!rows.length) {
			return null;
		}

		return getValue(rows[rows.length - 1]);
	}

	static max(rows, getValue) {
		if (!rows.length) {
			return null;
		}

		let length = rows.length;
		let i = 0;
		let max = getValue(rows[i++]);

		while (i < length) {
			if (getValue(rows[i]) > max) {
				max = getValue(rows[i]);
			}
			i++;
		}

		return max;
	}

	static min(rows, getValue) {
		if (!rows.length) {
			return null;
		}

		let length = rows.length;
		let i = 0;
		let min = getValue(rows[i++]);

		while (i < length) {
			if (getValue(rows[i]) < min) {
				min = getValue(rows[i]);
			}
			i++;
		}

		return min;
	}

	static minMax(rows, getValue) {
		if (!rows.length) {
			return null;
		}

		let length = rows.length;
		let i = 0;
		let min = getValue(rows[i++]);
		let max = min;

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

	static avg(rows, getValue, options) {
		if (!rows.length) {
			return null;
		}

		if (options.distinct) {
			let uniqueSet = new Set();
			return Aggregation.sum(rows, getValue, options, uniqueSet) / uniqueSet.size;
		}

		return Aggregation.sum(rows, getValue) / rows.length;
	}

	static sum(rows, getValue, options, container) {
		if (!rows.length) {
			return null;
		}

		let length = rows.length;
		let i = 0;
		let sum = 0;

		if (options.distinct) {
			let uniqueValues = container || new Set();
			let value = null;

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

	static join(rows, getValue, options) {
		if (!rows.length) {
			return null;
		}

		let separator = options.separator || '';
		let length = rows.length;
		let i = 0;
		let join = getValue(rows[i++]);

		if (options.distinct) {
			let uniqueValues = new Set();
			let value = join;
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

	static count(rows, getValue, options) {
		if (!rows.length) {
			return null;
		}

		if (options.distinct) {
			let length = rows.length;
			let i = 0;
			let uniqueValues = new Set();
			let value = null;

			while (i < length) {
				value = Number(getValue(rows[i]));
				uniqueValues.add(value);
				i++;
			}

			return uniqueValues.size;
		}

		return rows.length;
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Aggregation;


/***/ }),
/* 332 */
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
			const itemType = getType(value[0]);
			if (!isPrimitive(itemType)) {
				return 'collection';
			}
		}

		return 'array';
	}

	if (parseNumber(value) !== null && !isNaN(value)) {
		return 'number';
	}

	if(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isBoolean"])(value)){
		return 'bool';
	}

	if (parseDate(value) !== null) {
		return 'date';
	}

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isObject"])(value)) {
		return 'object';
	}

	if(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["isEmail"])(value)){
		return 'email';
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
	return value === 'true' 
      ? true 
      : value === 'false' 
         ? false 
         : null;
}

function parseText(value) {
	return '' + value;
}

function parseDate(value) {
	if (value === null) {
		return null;
	}

	const date = new Date(value);
	if (date !== 'Invalid Date' && !isNaN(date)) {
		return date;
	}

	return null;
}

function parseNumber(value) {
	const number = parseFloat(value);
	if (!isNaN(number) && isFinite(number)) {
		return number;
	}

	return null;
}

// function parseInteger(value) {
// 	const number = parseInt(value);
// 	if (!isNaN(number) && isFinite(number)) {
// 		return number;
// 	}
//
// 	return null;
// }

/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_value__ = __webpack_require__(20);






class GridService {
	constructor(model, apply = __WEBPACK_IMPORTED_MODULE_2__services_utility__["noop"]) {
		this.model = model;
		this.apply = apply;
	}

	invalidate(source = 'invalidate', changes = {}, pipe = null) {
		__WEBPACK_IMPORTED_MODULE_1__infrastructure__["Log"].info('invalidate', source);

		const model = this.model;
		model.head().cache.clear();
		model.body().cache.clear();
		model.foot().cache.clear();

		const cancelBusy = this.busy();
		const run = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__pipe__["build"])(model, __WEBPACK_IMPORTED_MODULE_4__services_value__["getFactory"]);
		return run(source, changes, pipe)
			.then(this.apply)
			.then(cancelBusy)
			.catch(cancelBusy);
	}

	busy() {
		const id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services__["guid"])();
		const progress = this.model.progress;
		progress({queue: progress().queue.concat([id])});
		return () => {
			const queue = Array.from(progress().queue);
			const index = queue.indexOf(id);
			if (index >= 0) {
				queue.splice(index, 1);
				progress({queue: queue});
			}
		};
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GridService;


/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = guid;
function guid() {
	function p8(s) {
		const p = (Math.random().toString(16) + '000000000').substr(2, 8);
		return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p;
	}

	return p8() + p8(true) + p8(true) + p8();
}

/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = build;
function build(style) {
	return Object
		.keys(style)
		.reduce((memo, key) => {
			const entry = style[key];
			const body = Object
				.keys(entry)
				.reduce((memo, key) => {
					memo.push(`${key}:${entry[key]} !important;`);
					return memo;
				}, []);

			memo.push(`${key}{${body.join('')}}`);
			return memo;
		}, [])
		.join('');
}


/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = merge;
﻿

function merge(settings) {
	const context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["assignWith"])({
		equals: (l, r) => l === r,
		update: (l, r /*left, i*/) => {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["assignWith"])(l, r);
			return l;
		},
		remove: (l, left, i) => {
			left.splice(i, 1);
			return l;
		},
		insert: (r, left) => {
			left.push(r);
			return r;
		}
	}, settings);

	return (left, right, result) => {
		const ls = left.slice();
		const rs = right.slice();
		let updated = 0;
		let removed = 0;

		result = result || left;
		for (let i = 0, lsLength = ls.length; i < lsLength; i++) {
			const l = ls[i];
			let matched = false;
			for (let j = 0, rsLength = rs.length; j < rsLength; j++) {
				const r = rs[j];
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

		const inserted = rs.length;
		for (let i = 0; i < inserted; i++) {
			context.insert(rs[i], result);
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
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Middleware {
	constructor(pipes) {
		this.pipes = pipes;
	}

	run(context, memo = []) {
		const pipes = this.pipes
			.map(pipe => memo =>
				new Promise((resolve, reject) =>
					pipe(memo, context, resolve, reject)));

		return start(pipes, memo);
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Middleware;


function start(pipes, memo) {
	pipes = Array.from(pipes);
	return new Promise((resolve, reject) => {
		invoke(memo);

		function invoke(memo) {
			if (pipes.length) {
				const pipe = pipes.shift();
				const promise = pipe(memo);
				promise
					.then(invoke)
					.catch(ex => {
						reject(ex);
						throw ex;
					});
			}
			else {
				resolve(memo);
			}
		}
	});
}

/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = key;
/* harmony export (immutable) */ __webpack_exports__["b"] = index;
/* harmony export (immutable) */ __webpack_exports__["c"] = value;
/* harmony export (immutable) */ __webpack_exports__["d"] = map;


function key(pair) {
	const key = Object.keys(pair)[0];
	if(!key){
		throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"](
			'pair',
			`Key is not defined in "${pair}"`);
	}

	return key;
}

function index(pairs, pairKey) {
	return pairs.map(key).findIndex(k => k === pairKey);
}

function value(pair) {
	const pairKey = key(pair);
	return pair[pairKey];
}

function map(pairs) {
	return pairs.reduce((memo, pair) => {
		const pairKey = key(pair);
		memo[pairKey] = pair[pairKey];
		return memo;
	}, {});
}



/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(10);


class SortModel {
	constructor() {
		this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
		this.by = [];
		this.mode = 'multiple';
		this.trigger = ['reorder'];
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SortModel;


/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sort_sort_service__ = __webpack_require__(72);





class SortView extends __WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */] {
	constructor(model) {
		super(model);
		this.hover = false;
		this.toggle = new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["Command"]({
			canExecute: column => {
				const key = column.key;
				const map = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["map"](model.data().columns);
				return map.hasOwnProperty(key) && map[key].canSort !== false;
			},
			execute: column => {
				const key = column.key;
				const sort = model.sort;
				const sortState = sort();
				const by = Array.from(sortState.by);
				const index = __WEBPACK_IMPORTED_MODULE_3__sort_sort_service__["c" /* index */](by, key);
				if (index >= 0) {
					const dir = __WEBPACK_IMPORTED_MODULE_3__sort_sort_service__["b" /* direction */](by[index]);
					switch (dir) {
						case 'desc': {
							by.splice(index, 1);
							this.hover = false;
							break;
						}
						case 'asc': {
							const entry = {[key]: 'desc'};
							by.splice(index, 1);
							by.splice(index, 0, entry);
							this.hover = false;
							break;
						}
						default:
							throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__infrastructure__["AppError"])(
								'head.core',
								`Invalid sort direction ${dir}`);
					}
				}
				else {
					if (sortState.mode === 'single') {
						by.length = 0;
					}

					const entry = {[key]: 'asc'};
					by.push(entry);
				}

				sort({by: by});
			}
		});

		this.onInit();
	}

	onInit() {
		const model = this.model;
		const sort = model.sort;

		model.columnListChanged.watch(e => {
			if (e.hasChanges('index')) {
				const sortState = sort();
				if (sortState.trigger.indexOf('reorder') >= 0) {
					let index = 0;
					const indexMap = model.columnList().index
						.reduce((memo, key) => {
							memo[key] = index++;
							return memo;
						}, {});

					const sortBy = Array.from(sortState.by);
					sortBy.sort((x, y) => indexMap[__WEBPACK_IMPORTED_MODULE_3__sort_sort_service__["a" /* key */](x)] - indexMap[__WEBPACK_IMPORTED_MODULE_3__sort_sort_service__["a" /* key */](y)]);

					if (!this.equals(sortBy, sortState.by)) {
						sort({by: sortBy});
					}
				}
			}
		});

		model.dataChanged.watch(e => {
			if (e.hasChanges('columns')) {
				const sortState = sort();
				const columnMap = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["map"](e.state.columns);
				const sortBy = sortState.by.filter(entry => columnMap.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_3__sort_sort_service__["a" /* key */](entry)));
				if (!this.equals(sortBy, sortState.by)) {
					sort({by: sortBy});
				}
			}
		});
	}

	equals(x, y) {
		return JSON.stringify(x) === JSON.stringify(y);
	}

	direction(column) {
		const key = column.key;
		const state = this.model.sort();
		const by = state.by;
		return __WEBPACK_IMPORTED_MODULE_3__sort_sort_service__["d" /* map */](by)[key];
	}

	order(column) {
		const key = column.key;
		const state = this.model.sort();
		const by = state.by;
		return __WEBPACK_IMPORTED_MODULE_3__sort_sort_service__["c" /* index */](by, key);
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SortView;


/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(4);


class StyleModel {
	constructor() {
		this.row = __WEBPACK_IMPORTED_MODULE_0__services_utility__["noop"];
		this.cell = __WEBPACK_IMPORTED_MODULE_0__services_utility__["noop"];
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StyleModel;


/***/ }),
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_style__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_value__ = __webpack_require__(20);





class StyleView extends __WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */] {
	constructor(model, table) {
		super(model);

		this.table = table;
		this.valueFactory = __WEBPACK_IMPORTED_MODULE_3__services_value__["getFactory"];
		this.active = {
			row: false,
			cell: false
		};

		this.monitor = {
			row: new __WEBPACK_IMPORTED_MODULE_1__services_style__["a" /* Monitor */](model),
			cell: new __WEBPACK_IMPORTED_MODULE_1__services_style__["a" /* Monitor */](model)
		};

		model.viewChanged.watch(() => {
			this.invalidate();
		});

		model.styleChanged.watch(e => {
			if (e.hasChanges('row')) {
				this.active.row = true;
			}

			if (e.hasChanges('cell')) {
				this.active.cell = true;
			}

			this.invalidate();
		});
	}

	invalidate() {
		const active = this.active;
		if (!(active.row || active.cell)) {
			return;
		}

		const table = this.table;
		const valueFactory = this.valueFactory;
		const model = this.model;
		const styleState = model.style();
		const dataRows = model.view().rows;
		const bodyRows = table.body.rows();
		const rowMonitor = this.monitor.row;
		const cellMonitor = this.monitor.cell;
		const columns = table.data.columns();
		const columnMap = __WEBPACK_IMPORTED_MODULE_2__column_column_service__["map"](columns);
		// TODO: improve perfomance
		const value = (row, column) => {
			return valueFactory(column)(row);
		};
		const domCell = cellMonitor.enter();
		const domRow = rowMonitor.enter();
		try {
			for (let i = 0, rowsLength = Math.min(bodyRows.length, dataRows.length); i < rowsLength; i++) {
				const dataRow = dataRows[i];
				// TODO: get rid of '.element'
				const bodyRow = bodyRows[i].element;

				if (active.row) {
					const rowContext = {
						class: domRow(bodyRow),
						row: i,
						value: value,
						columns: {
							map: columnMap,
							list: columns
						}
					};

					styleState.row(dataRow, rowContext);
				}

				if (active.cell) {
					const cells = bodyRow.cells;
					for (let j = 0, cellsLength = cells.length; j < cellsLength; j++) {
						const cell = cells[j];
						const column = columns[j];
						const cellContext = {
							class: domCell(cell),
							row: i,
							column: j,
							value: value,
							columns: {
								map: columnMap,
								list: columns
							}
						};

						styleState.cell(dataRow, column, cellContext);
					}
				}
			}
		}
		finally {
			rowMonitor.exit(domRow);
			cellMonitor.exit(domCell);
		}
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StyleView;


/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_view__ = __webpack_require__(344);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TableView", function() { return __WEBPACK_IMPORTED_MODULE_0__table_view__["a"]; });


/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class TableView {
	constructor(model) {
		this.model = model;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TableView;


/***/ }),
/* 345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class TemplateModel {
	constructor() {
		this.resource = {};
	}
}
/* unused harmony export TemplateModel */


/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(4);



const resolvers = {};
class TemplatePath {
	constructor() {
	}

	static register(name, resolve) {
		if (resolvers.hasOwnProperty(name)) {
			throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"](
				'template.path',
				`"${name}" is already registered`);
		}


		resolvers[name] = resolve;
		return TemplatePath;
	}

	static get(source) {
		const path = this.find(source);
		if (!path) {
			throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["AppError"](
				'template.path',
				'Template path can\'t be found');
		}

		return path;
	}

	static find(source) {
		const getName = this.name;
		for (let key of Object.keys(resolvers)) {
			const name = getName(key);
			const value = source[name];
			if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["isUndefined"])(value) && value !== null) {
				const path = resolvers[key](source, value);
				if (path) {
					return path;
				}
			}
		}

		return null;
	}

	static name(name) {
		return '_' + name;
	}

	static get require() {
		const getName = this.name;
		return Object.keys(resolvers)
			.reduce((memo, key) => {
				memo[getName(key)] = `^^?${key}`;
				return memo;
			}, {});
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TemplatePath;


/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar_model__ = __webpack_require__(348);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__toolbar_model__["a"]; });


/***/ }),
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(10);


class ToolbarModel {
	constructor() {
		this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ToolbarModel;


/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class View{
	constructor(model) {
		this.model = model;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = View;


/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ViewModel {
	constructor() {
		this.items = [];
		this.rows = [];
		this.columns = [];
		this.nodes = [];
		this.pivot = {heads: [], rows: []};
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ViewModel;


/***/ }),
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visibility_model__ = __webpack_require__(352);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__visibility_model__["a"]; });


/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(10);


class VisibilityModel {
	constructor() {
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
			right: false,
		};

		this.plugin = {};
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VisibilityModel;


/***/ }),
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var app_service_1 = __webpack_require__(149);
var AppComponent = (function () {
    function AppComponent(appState) {
        this.appState = appState;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [
            __webpack_require__(597),
            __webpack_require__(598)
        ],
        template: "\n    <header>\n    </header>\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n    <footer>\n    </footer>\n  "
    }),
    tslib_1.__metadata("design:paramtypes", [app_service_1.AppState])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(32);
var forms_1 = __webpack_require__(196);
var http_1 = __webpack_require__(197);
var core_1 = __webpack_require__(1);
var hmr_1 = __webpack_require__(101);
var router_1 = __webpack_require__(607);
var animations_1 = __webpack_require__(369);
var material_1 = __webpack_require__(198);
var flex_layout_1 = __webpack_require__(366);
/*
 * Platform and Environment providers/directives/pipes
 */
var environment_1 = __webpack_require__(100);
var app_routes_1 = __webpack_require__(373);
// App is our top level component
var app_component_1 = __webpack_require__(370);
var app_resolver_1 = __webpack_require__(372);
var app_service_1 = __webpack_require__(149);
var home_1 = __webpack_require__(150);
var no_content_1 = __webpack_require__(151);
var src_1 = __webpack_require__(383);
var data_service_1 = __webpack_require__(152);
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
    return AppModule;
}());
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
exports.AppModule = AppModule;


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(193);
__webpack_require__(605);
var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = tslib_1.__decorate([
    core_1.Injectable()
], DataResolver);
exports.DataResolver = DataResolver;
// an array of services to resolve routes with data
exports.APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var home_1 = __webpack_require__(150);
var no_content_1 = __webpack_require__(151);
exports.ROUTES = [
    { path: '', component: home_1.HomeComponent },
    { path: 'home', component: home_1.HomeComponent },
    { path: '**', component: no_content_1.NoContentComponent },
];


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var data_service_1 = __webpack_require__(152);
var HomeComponent = (function () {
    function HomeComponent(dataService) {
        this.dataService = dataService;
        this.rows = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService
            .getPeople(100)
            .subscribe(function (people) { return _this.rows = people; });
    };
    return HomeComponent;
}());
HomeComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'home',
        providers: [],
        template: __webpack_require__(579)
    }),
    tslib_1.__metadata("design:paramtypes", [data_service_1.DataService])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    return NoContentComponent;
}());
NoContentComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'no-content',
        template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
    })
], NoContentComponent);
exports.NoContentComponent = NoContentComponent;


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Angular bootstraping
 */
var platform_browser_dynamic_1 = __webpack_require__(225);
var environment_1 = __webpack_require__(100);
var hmr_1 = __webpack_require__(101);
/*
 * App Module
 * our top level module that holds all of our components
 */
var app_1 = __webpack_require__(206);
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
/* 377 */,
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var dnd_1 = __webpack_require__(380);
var CommonModule = (function () {
    function CommonModule() {
    }
    return CommonModule;
}());
CommonModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [],
        exports: [
            dnd_1.DndModule
        ],
        imports: [],
        providers: []
    })
], CommonModule);
exports.CommonModule = CommonModule;


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var drag_directive_1 = __webpack_require__(153);
var drop_directive_1 = __webpack_require__(154);
var DndModule = (function () {
    function DndModule() {
    }
    return DndModule;
}());
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
exports.DndModule = DndModule;


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(153));
__export(__webpack_require__(154));
__export(__webpack_require__(78));
__export(__webpack_require__(379));


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(378));


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var main_1 = __webpack_require__(419);
var theme_service_1 = __webpack_require__(159);
var template_1 = __webpack_require__(25);
var infrastructure_1 = __webpack_require__(3);
var core_2 = __webpack_require__(286);
var grid_1 = __webpack_require__(80);
var column_1 = __webpack_require__(156);
var GridModule = (function () {
    function GridModule(themeService, theme) {
        core_2.setup(infrastructure_1.Model);
        themeService.name = theme.name;
    }
    return GridModule;
}());
GridModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [],
        exports: [
            grid_1.GridComponent,
            column_1.ColumnListComponent
        ],
        imports: [
            main_1.MainModule
        ],
        providers: [
            template_1.TemplateLinkService,
            template_1.ThemeService
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [template_1.ThemeService, theme_service_1.ThemeService])
], GridModule);
exports.GridModule = GridModule;


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(382));


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CommandManager = (function () {
    function CommandManager() {
    }
    CommandManager.prototype.execute = function (commands) {
        // First we need to get list of executable commands, cause execution of prev command can
        // impact on canExecute of next command
        // TODO: refactor command pipeline
        var executableCommands = commands.filter(function (cmd) { return cmd.canExecute(); });
        executableCommands.forEach(function (cmd) { return cmd.execute(); });
    };
    return CommandManager;
}());
exports.CommandManager = CommandManager;


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(384));


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
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
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var layer_1 = __webpack_require__(391);
var row_1 = __webpack_require__(392);
var column_1 = __webpack_require__(388);
var cell_1 = __webpack_require__(79);
var element_1 = __webpack_require__(36);
var BoxCore = (function (_super) {
    tslib_1.__extends(BoxCore, _super);
    function BoxCore() {
        return _super.call(this) || this;
    }
    BoxCore.prototype.column = function () {
        return column_1.Column.empty;
    };
    BoxCore.prototype.row = function () {
        return row_1.Row.empty;
    };
    BoxCore.prototype.rows = function () {
        return [];
    };
    BoxCore.prototype.rowCount = function () {
        return 0;
    };
    BoxCore.prototype.columnCount = function () {
        return 0;
    };
    BoxCore.prototype.cell = function () {
        return cell_1.Cell.empty;
    };
    BoxCore.prototype.addLayer = function () {
        return layer_1.Layer.empty;
    };
    BoxCore.prototype.removeLayer = function () {
    };
    BoxCore.prototype.scrollLeft = function () {
        return 0;
    };
    BoxCore.prototype.scrollTop = function () {
        return 0;
    };
    return BoxCore;
}(element_1.ElementCore));
var empty = new BoxCore();
var Box = (function (_super) {
    tslib_1.__extends(Box, _super);
    function Box(document, element, name) {
        var _this = _super.call(this, element) || this;
        _this.document = document;
        _this.element = element;
        _this.name = name;
        _this.layers = new Map();
        return _this;
    }
    Object.defineProperty(Box, "empty", {
        get: function () {
            return empty;
        },
        enumerable: true,
        configurable: true
    });
    Box.prototype.column = function (index) {
        if (index >= 0) {
            var rows = this.boxRows();
            if (rows.length) {
                var cellsCount = (rows[0]).cells.length;
                if (index < cellsCount) {
                    return new column_1.Column(this.element, index);
                }
            }
        }
        return column_1.Column.empty;
    };
    Box.prototype.row = function (index) {
        if (index >= 0) {
            var rows = this.boxRows();
            if (index < rows.length) {
                return new row_1.Row(rows[index]);
            }
        }
        return row_1.Row.empty;
    };
    Box.prototype.rows = function () {
        return this.boxRows().map(function (element) { return new row_1.Row(element); });
    };
    Box.prototype.rowCount = function () {
        return this.boxRows().length;
    };
    Box.prototype.columnCount = function () {
        if (this.rowCount() > 0) {
            var row = this.boxRows()[0];
            return row.cells.length;
        }
        return 0;
    };
    Box.prototype.cell = function (row, column) {
        if (row >= 0 && column >= 0) {
            var rows = this.boxRows();
            if (rows.length) {
                var cellsCount = rows[0].cells.length;
                if (row < rows.length && column < cellsCount) {
                    var cell = rows[row].cells.item(column);
                    return new cell_1.Cell(cell);
                }
            }
        }
        return cell_1.Cell.empty;
    };
    Box.prototype.addLayer = function (name) {
        // const layers = this.layers;
        // if (layers.has(name)) {
        //   return layers.get(name);
        // }
        //
        // const node = this.document.createElement(`div`);
        // node.classList.add(name);
        // this.element.appendChild(node);
        //
        // const ctrl = angular.element(this.element).controller(this.name);
        // if (!ctrl) {
        //   throw new AppError('box', 'Controller for box is not found')
        // }
        //
        // if (!ctrl.$scope) {
        //   throw new AppError('box', 'Controller scope for box is not found')
        // }
        //
        // const layer = new Layer(node);
        // layers.set(name, layer);
        // return layer;
    };
    Box.prototype.removeLayer = function (name) {
        // const layers = this.layers;
        // if (layers.has(name)) {
        //   const layer = layers.get(name);
        //   layer.destroy();
        //   layer.element.parentElement.removeChild(layer.element);
        //   layers.delete(name);
        // }
    };
    Box.prototype.scrollLeft = function (value) {
        if (!arguments.length) {
            return this.element.scrollLeft;
        }
        this.element.scrollLeft = value;
    };
    Box.prototype.scrollTop = function (value) {
        if (!arguments.length) {
            return this.element.scrollTop;
        }
        this.element.scrollTop = value;
    };
    Box.prototype.boxRows = function () {
        var rows = this.element.rows;
        var result = [];
        for (var i = 0, length_1 = rows.length; i < length_1; i++) {
            var row = rows.item(i);
            if (!row.classList.contains('vscroll-mark')) {
                result.push(row);
            }
        }
        return result;
    };
    return Box;
}(element_1.Element));
exports.Box = Box;


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var cell_1 = __webpack_require__(79);
var element_1 = __webpack_require__(36);
var ColumnCore = (function (_super) {
    tslib_1.__extends(ColumnCore, _super);
    function ColumnCore() {
        return _super.call(this) || this;
    }
    ColumnCore.prototype.cells = function () {
        return [];
    };
    ColumnCore.prototype.cell = function () {
        return cell_1.Cell.empty;
    };
    ColumnCore.prototype.cellCount = function () {
        return 0;
    };
    return ColumnCore;
}(element_1.ElementCore));
var empty = new ColumnCore();
var Column = (function (_super) {
    tslib_1.__extends(Column, _super);
    function Column(element, index) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        _this.index = index;
        return _this;
    }
    Object.defineProperty(Column, "empty", {
        get: function () {
            return empty;
        },
        enumerable: true,
        configurable: true
    });
    Column.prototype.cells = function () {
        var index = this.index;
        var rows = this.rows();
        var result = [];
        for (var i = 0, length_1 = rows.length; i < length_1; i++) {
            var cell = rows[i].cells.item(index);
            result.push(new cell_1.Cell(cell));
        }
        return result;
    };
    Column.prototype.cell = function (row) {
        if (row >= 0 && row < this.cellCount()) {
            var rows = this.rows();
            var cell = rows[row][this.index];
            return new cell_1.Cell(cell);
        }
        return cell_1.Cell.empty;
    };
    Column.prototype.cellCount = function () {
        return this.rows().length;
    };
    Column.prototype.rows = function () {
        var rows = this.element.rows;
        var result = [];
        for (var i = 0, length_2 = rows.length; i < length_2; i++) {
            var row = rows.item(i);
            if (!row.classList.contains('vscroll-mark')) {
                result.push(row);
            }
        }
        return result;
    };
    return Column;
}(element_1.Element));
exports.Column = Column;


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var columnService = __webpack_require__(8);
var Data = (function () {
    function Data(model, pin) {
        this.model = model;
        this.pin = pin;
    }
    Data.prototype.columns = function () {
        var _this = this;
        var columns = this.model.view().columns;
        return columnService
            .lineView(columns)
            .map(function (v) { return v.model; })
            .filter(function (c) { return c.pin === _this.pin; });
    };
    Data.prototype.columnMap = function () {
        return columnService.map(this.columns());
    };
    Data.prototype.rows = function () {
        return this.model.view().rows;
    };
    return Data;
}());
exports.Data = Data;


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(393));


/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var element_1 = __webpack_require__(36);
var LayerCore = (function (_super) {
    tslib_1.__extends(LayerCore, _super);
    function LayerCore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerCore.prototype.resource = function () {
    };
    return LayerCore;
}(element_1.ElementCore));
var empty = new LayerCore();
var Layer = (function (_super) {
    tslib_1.__extends(Layer, _super);
    function Layer(element) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        return _this;
    }
    Object.defineProperty(Layer, "empty", {
        get: function () {
            return empty;
        },
        enumerable: true,
        configurable: true
    });
    Layer.prototype.resource = function (id, state) {
        // const link = this.template.link(
        //   `qgrid.${id}.tpl.html`,
        //   state,
        //   [id]
        // );
        //
        // const $element = angular.element(this.element);
        // this.$layerScope = this.$scope.$new();
        // link($element, this.$layerScope);
    };
    Layer.prototype.destroy = function () {
        // if (this.$layerScope) {
        //   this.$layerScope.$destroy();
        //   this.$layerScope = null;
        // }
    };
    return Layer;
}(element_1.Element));
exports.Layer = Layer;


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var cell_1 = __webpack_require__(79);
var element_1 = __webpack_require__(36);
var RowCore = (function (_super) {
    tslib_1.__extends(RowCore, _super);
    function RowCore() {
        return _super.call(this) || this;
    }
    RowCore.prototype.cells = function () {
        return [];
    };
    RowCore.prototype.cell = function () {
        return cell_1.Cell.empty;
    };
    RowCore.prototype.cellCount = function () {
        return 0;
    };
    return RowCore;
}(element_1.ElementCore));
var empty = new RowCore();
var Row = (function (_super) {
    tslib_1.__extends(Row, _super);
    function Row(element) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        return _this;
    }
    Object.defineProperty(Row, "empty", {
        get: function () {
            return empty;
        },
        enumerable: true,
        configurable: true
    });
    Row.prototype.cells = function () {
        var cells = this.element.cells;
        var result = [];
        for (var i = 0, length_1 = cells.length; i < length_1; i++) {
            var cell = cells.item(i);
            result.push(new cell_1.Cell(cell));
        }
        return result;
    };
    Row.prototype.cell = function (column) {
        if (column >= 0 && column < this.cellCount()) {
            var cells = this.element.cells;
            var cell = cells.item(column);
            return new cell_1.Cell(cell);
        }
        return cell_1.Cell.empty;
    };
    Row.prototype.cellCount = function () {
        return this.element.cells.length;
    };
    return Row;
}(element_1.Element));
exports.Row = Row;


/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var box_1 = __webpack_require__(387);
var data_1 = __webpack_require__(389);
var element_1 = __webpack_require__(36);
var infrastructure_1 = __webpack_require__(3);
var Table = (function () {
    function Table(model, markup) {
        this.model = model;
        this.markup = markup;
        this.pin = null;
    }
    Table.prototype.isFocused = function () {
        var markup = this.markup;
        var target = markup.table;
        var current = markup.document.activeElement;
        while (current) {
            if (current === target) {
                return true;
            }
            current = current.parentNode;
        }
        return false;
    };
    Table.prototype.keyDown = function (f) {
        return new infrastructure_1.EventListener(this, this.markup.document)
            .on('keydown', f);
    };
    Object.defineProperty(Table.prototype, "head", {
        get: function () {
            if (this.headBox) {
                return this.headBox;
            }
            var document = this.markup.document;
            var head = this.markup.head;
            if (document && head) {
                return this.headBox = new box_1.Box(document, head, 'q-grid-core-head');
            }
            return box_1.Box.empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "body", {
        get: function () {
            if (this.bodyBox) {
                return this.bodyBox;
            }
            var document = this.markup.document;
            var body = this.markup.body;
            if (document && body) {
                return this.bodyBox = new box_1.Box(document, body, 'q-grid-core-body');
            }
            return box_1.Box.empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "foot", {
        get: function () {
            if (this.footBox) {
                return this.footBox;
            }
            var document = this.markup.document;
            var foot = this.markup.foot;
            if (document && foot) {
                return this.footBox = new box_1.Box(document, foot, 'q-grid-core-foot');
            }
            return box_1.Box.empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "data", {
        get: function () {
            return new data_1.Data(this.model, this.pin);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "view", {
        get: function () {
            if (this.viewElement) {
                return this.viewElement;
            }
            var view = this.markup.view;
            if (view) {
                return this.viewElement = new element_1.Element(view);
            }
            return element_1.Element.empty;
        },
        enumerable: true,
        configurable: true
    });
    Table.prototype.focus = function () {
        this.markup.table.focus();
    };
    Table.prototype.blur = function () {
        this.markup.table.blur();
    };
    return Table;
}());
exports.Table = Table;


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var ng_component_1 = __webpack_require__(48);
var theme_service_1 = __webpack_require__(158);
var definition_1 = __webpack_require__(19);
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
        model.dragChanged.watch(function (e) {
            if (e.hasChanges('isActive')) {
                if (model.drag().isActive) {
                    _this.element.classList.add(definition_1.GRID_PREFIX + "-drag");
                }
                else {
                    _this.element.classList.remove(definition_1.GRID_PREFIX + "-drag");
                }
            }
        });
    };
    BoxComponent.prototype.initTheme = function () {
        var _this = this;
        var element = this.element;
        element.classList.add(definition_1.GRID_PREFIX);
        this.theme.changed.watch(function (e) {
            if (e) {
                element.classList.remove(definition_1.GRID_PREFIX + "-theme-" + e.oldValue);
            }
            element.classList.add(definition_1.GRID_PREFIX + "-theme-" + _this.theme.name);
        });
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
    return BoxComponent;
}(ng_component_1.NgComponent));
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
exports.BoxComponent = BoxComponent;


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(394));


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var model_component_1 = __webpack_require__(155);
var root_service_1 = __webpack_require__(49);
var ColumnListComponent = (function (_super) {
    tslib_1.__extends(ColumnListComponent, _super);
    function ColumnListComponent(root) {
        var _this = _super.call(this, root) || this;
        _this.columnListGeneration = null;
        _this.models = ['columnList'];
        return _this;
    }
    return ColumnListComponent;
}(model_component_1.ModelComponent));
tslib_1.__decorate([
    core_1.Input('generation'),
    tslib_1.__metadata("design:type", String)
], ColumnListComponent.prototype, "columnListGeneration", void 0);
ColumnListComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'q-grid-columns',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [root_service_1.RootService])
], ColumnListComponent);
exports.ColumnListComponent = ColumnListComponent;


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var event_listener_1 = __webpack_require__(113);
//import * as pathFinder from '@grid/view/services/path.find';
var view_core_service_1 = __webpack_require__(21);
var component_1 = __webpack_require__(24);
var BodyCoreComponent = (function () {
    function BodyCoreComponent(element, $view, root) {
        this.$view = $view;
        this.root = root;
        this.element = null;
        this.documentListener = new event_listener_1.EventListener(this, document);
        this.listener = null;
        this.rangeStartCell = null;
        this.element = element.nativeElement;
        this.listener = new event_listener_1.EventListener(this, this.element);
    }
    BodyCoreComponent.prototype.ngOnInit = function () {
        this.listener.on('scroll', this.onScroll);
        this.listener.on('click', this.onClick);
        this.listener.on('mousedown', this.onMouseDown);
        this.listener.on('mouseup', this.onMouseUp);
        this.documentListener.on('mousemove', this.onMouseMove);
    };
    BodyCoreComponent.prototype.onScroll = function () {
        var element = this.element;
        var scroll = this.model.scroll;
        scroll({
            top: element.scrollTop,
            left: element.scrollLeft,
            width: element.scrollWidth,
            height: element.scrollHeight
        }, {
            source: 'body.core',
            pin: this.$view.pin
        });
    };
    BodyCoreComponent.prototype.onDestroy = function () {
        this.listener.off();
    };
    BodyCoreComponent.prototype.onClick = function (e) {
        // const cell = pathFinder.cell(e.path);
        // if (cell) {
        //   this.navigate(cell);
        //
        //   if (cell.column.editorOptions.trigger === 'click'
        //     && this.$view.edit.cell.enter.canExecute(cell)) {
        //       this.$view.edit.cell.enter.execute(cell);
        //   }
        //
        //   if (cell.column.type !== 'select') {
        //     this.$view.selection.selectRange(cell);
        //   }
        // }
    };
    BodyCoreComponent.prototype.onMouseDown = function (e) {
        // if (this.selection.mode === 'range') {
        //   this.rangeStartCell = pathFinder.cell(e.path);
        //
        //   if (this.rangeStartCell) {
        //     this.$view.selection.selectRange(this.rangeStartCell);
        //   }
        // }
    };
    BodyCoreComponent.prototype.onMouseMove = function (e) {
        // if (this.selection.mode === 'range') {
        //   const startCell = this.rangeStartCell;
        //   const endCell = pathFinder.cell(e.path);
        //
        //   if (startCell && endCell) {
        //     this.$view.selection.selectRange(startCell, endCell);
        //     this.navigate(endCell);
        //   }
        // }
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
    return BodyCoreComponent;
}());
BodyCoreComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'tbody[q-grid-core-body]',
        template: __webpack_require__(580)
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef,
        view_core_service_1.ViewCoreService,
        component_1.RootService])
], BodyCoreComponent);
exports.BodyCoreComponent = BodyCoreComponent;


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(397));
__export(__webpack_require__(399));


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
//import cellBuilder from '../cell/cell.build';
var definition_1 = __webpack_require__(19);
var view_core_service_1 = __webpack_require__(21);
var component_1 = __webpack_require__(24);
var template_1 = __webpack_require__(25);
var TdCoreContext = (function () {
    function TdCoreContext($implicit) {
        this.$implicit = $implicit;
    }
    return TdCoreContext;
}());
exports.TdCoreContext = TdCoreContext;
var TdCoreDirective = (function () {
    function TdCoreDirective($view, root, templateCache, templateLink, viewContainerRef, element) {
        this.$view = $view;
        this.root = root;
        this.templateCache = templateCache;
        this.templateLink = templateLink;
        this.viewContainerRef = viewContainerRef;
        this.element = null;
        this.element = element.nativeElement.parentElement;
    }
    TdCoreDirective.prototype.ngOnInit = function () {
        var column = this.column;
        var element = this.element;
        this.$view.style.monitor.cell.add(element);
        element.classList.add(definition_1.GRID_PREFIX + "-" + column.key);
        element.classList.add(definition_1.GRID_PREFIX + "-" + column.type);
        if (column.hasOwnProperty('editor')) {
            element.classList.add(definition_1.GRID_PREFIX + "-" + column.editor);
        }
        var context = new TdCoreContext(this);
        var template = this.templateCache.get('body-cell-text.tpl.html') ||
            this.templateLink.get('body-cell-text.tpl.html');
        this.viewContainerRef.createEmbeddedView(template, context);
        this.mode('init');
    };
    TdCoreDirective.prototype.mode = function (value) {
        var model = this.root.model;
        // switch (value) {
        //   case 'view':
        //   case 'init': {
        //     let link = cache.find(column.key);
        //     if (!link) {
        //       const build = cellBuilder(this.view.template);
        //       link = build('body', model, column);
        //       cache.set(column.key, link);
        //     }
        //
        //     link(this.$element, templateScope);
        //     if (value !== 'init') {
        //       element.classList.remove(`${GRID_PREFIX}-edit`);
        //     }
        //     break;
        //   }
        //   case 'edit': {
        //     let link = cache.find(`${column.key}.edit`);
        //     if (!link) {
        //       const build = cellBuilder(this.view.template, 'edit');
        //       link = build('body', model, column);
        //       cache.set(`${column.key}.edit`, link);
        //     }
        //
        //     link(this.$element, templateScope);
        //     element.classList.add(`${GRID_PREFIX}-edit`);
        //   }
        //     break;
        //   default:
        //     throw new AppError('td.core', `Invalid mode ${value}`);
        // }
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
            return this.$view.body.columns[this.columnIndex].model;
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
        this.$view.style.monitor.cell.remove(this.element);
    };
    return TdCoreDirective;
}());
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
        template_1.TemplateCacheService,
        template_1.TemplateLinkService,
        core_1.ViewContainerRef,
        core_1.ElementRef])
], TdCoreDirective);
exports.TdCoreDirective = TdCoreDirective;


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(32);
var view_1 = __webpack_require__(415);
var toolbar_1 = __webpack_require__(413);
var body_1 = __webpack_require__(398);
var head_1 = __webpack_require__(405);
var foot_1 = __webpack_require__(402);
var row_1 = __webpack_require__(410);
var scroll_1 = __webpack_require__(157);
var markup_1 = __webpack_require__(408);
var template_1 = __webpack_require__(25);
var template_module_1 = __webpack_require__(84);
var common_1 = __webpack_require__(381);
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            view_1.ViewCoreComponent,
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
exports.CoreModule = CoreModule;


/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var view_core_service_1 = __webpack_require__(21);
var FootCoreComponent = (function () {
    function FootCoreComponent($view) {
        this.$view = $view;
    }
    return FootCoreComponent;
}());
FootCoreComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'tfoot[q-grid-core-foot]',
        template: __webpack_require__(581)
    }),
    tslib_1.__metadata("design:paramtypes", [view_core_service_1.ViewCoreService])
], FootCoreComponent);
exports.FootCoreComponent = FootCoreComponent;


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(401));
__export(__webpack_require__(403));


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var definition_1 = __webpack_require__(19);
var view_core_service_1 = __webpack_require__(21);
var template_1 = __webpack_require__(25);
var TfCoreContext = (function () {
    function TfCoreContext($implicit) {
        this.$implicit = $implicit;
    }
    Object.defineProperty(TfCoreContext.prototype, "$view", {
        get: function () {
            return this.$implicit.$view;
        },
        enumerable: true,
        configurable: true
    });
    return TfCoreContext;
}());
exports.TfCoreContext = TfCoreContext;
var TfCoreDirective = (function () {
    function TfCoreDirective($view, templateCache, templateLink, viewContainerRef, element) {
        this.$view = $view;
        this.templateCache = templateCache;
        this.templateLink = templateLink;
        this.viewContainerRef = viewContainerRef;
        this.element = null;
        this.element = element.nativeElement.element;
    }
    TfCoreDirective.prototype.ngOnInit = function () {
        var column = this.column;
        var element = this.element;
        element.classList.add(definition_1.GRID_PREFIX + "-" + column.key);
        element.classList.add(definition_1.GRID_PREFIX + "-" + column.type);
        if (column.hasOwnProperty('editor')) {
            element.classList.add(definition_1.GRID_PREFIX + "-" + column.editor);
        }
        var context = new TfCoreContext(this);
        var template = this.templateCache.get('foot-cell-text.tpl.html') ||
            this.templateLink.get('foot-cell-text.tpl.html');
        this.viewContainerRef.createEmbeddedView(template, context);
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
    return TfCoreDirective;
}());
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
        template_1.TemplateCacheService,
        template_1.TemplateLinkService,
        core_1.ViewContainerRef,
        core_1.ElementRef])
], TfCoreDirective);
exports.TfCoreDirective = TfCoreDirective;


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var view_core_service_1 = __webpack_require__(21);
var HeadCoreComponent = (function () {
    function HeadCoreComponent($view) {
        this.$view = $view;
    }
    return HeadCoreComponent;
}());
HeadCoreComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'thead[q-grid-core-head]',
        template: __webpack_require__(582)
    }),
    tslib_1.__metadata("design:paramtypes", [view_core_service_1.ViewCoreService])
], HeadCoreComponent);
exports.HeadCoreComponent = HeadCoreComponent;


/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(404));
__export(__webpack_require__(406));


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var definition_1 = __webpack_require__(19);
var view_core_service_1 = __webpack_require__(21);
var template_1 = __webpack_require__(25);
var ThCoreContext = (function () {
    function ThCoreContext($implicit) {
        this.$implicit = $implicit;
    }
    Object.defineProperty(ThCoreContext.prototype, "$view", {
        get: function () {
            return this.$implicit.$view;
        },
        enumerable: true,
        configurable: true
    });
    return ThCoreContext;
}());
exports.ThCoreContext = ThCoreContext;
var ThCoreDirective = (function () {
    function ThCoreDirective($view, templateCache, templateLink, viewContainerRef, element) {
        this.$view = $view;
        this.templateCache = templateCache;
        this.templateLink = templateLink;
        this.viewContainerRef = viewContainerRef;
        this.element = null;
        this.element = element.nativeElement.parentElement;
    }
    ThCoreDirective.prototype.ngOnInit = function () {
        var column = this.column;
        var element = this.element;
        element.classList.add(definition_1.GRID_PREFIX + "-" + column.key);
        element.classList.add(definition_1.GRID_PREFIX + "-" + column.type);
        if (column.hasOwnProperty('editor')) {
            element.classList.add(definition_1.GRID_PREFIX + "-" + column.editor);
        }
        var context = new ThCoreContext(this);
        var template = this.templateCache.get('head-cell-text.tpl.html') ||
            this.templateLink.get('head-cell-text.tpl.html');
        this.viewContainerRef.createEmbeddedView(template, context);
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
    return ThCoreDirective;
}());
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
        template_1.TemplateCacheService,
        template_1.TemplateLinkService,
        core_1.ViewContainerRef,
        core_1.ElementRef])
], ThCoreDirective);
exports.ThCoreDirective = ThCoreDirective;


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(400));


/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(409));


/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var view_core_service_1 = __webpack_require__(21);
var MarkupDirective = (function () {
    function MarkupDirective(view, element) {
        this.view = view;
        this.element = element;
        this.name = '';
    }
    MarkupDirective.prototype.ngOnInit = function () {
        this.view.markup[this.name] = this.element.nativeElement;
    };
    MarkupDirective.prototype.ngOnDestroy = function () {
        delete this.view.markup[this.name];
    };
    return MarkupDirective;
}());
tslib_1.__decorate([
    core_1.Input('q-grid-markup'),
    tslib_1.__metadata("design:type", Object)
], MarkupDirective.prototype, "name", void 0);
MarkupDirective = tslib_1.__decorate([
    core_1.Directive({
        selector: '[q-grid-markup]'
    }),
    tslib_1.__metadata("design:paramtypes", [view_core_service_1.ViewCoreService, core_1.ElementRef])
], MarkupDirective);
exports.MarkupDirective = MarkupDirective;


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(411));


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var view_core_service_1 = __webpack_require__(21);
var TrCoreDirective = (function () {
    function TrCoreDirective(element) {
        this.element = element;
    }
    TrCoreDirective.prototype.ngOnInit = function () {
        this.view.style.monitor.row.add(this.element.nativeElement);
    };
    TrCoreDirective.prototype.ngOnDestroy = function () {
        this.view.style.monitor.row.remove(this.element.nativeElement);
    };
    return TrCoreDirective;
}());
tslib_1.__decorate([
    core_1.Input('q-grid-core-tr'),
    tslib_1.__metadata("design:type", view_core_service_1.ViewCoreService)
], TrCoreDirective.prototype, "view", void 0);
TrCoreDirective = tslib_1.__decorate([
    core_1.Directive({
        selector: '[q-grid-core-tr]'
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
], TrCoreDirective);
exports.TrCoreDirective = TrCoreDirective;


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function factory(settings) {
    return {
        settings: {},
        container: {
            reset: function () {
            },
            apply: function () {
            }
        }
    };
}
var VScrollService = (function () {
    function VScrollService() {
    }
    Object.defineProperty(VScrollService.prototype, "factory", {
        get: function () {
            return factory;
        },
        enumerable: true,
        configurable: true
    });
    return VScrollService;
}());
exports.VScrollService = VScrollService;


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(414));


/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var ToolbarCoreComponent = (function () {
    function ToolbarCoreComponent() {
    }
    ToolbarCoreComponent.prototype.ngOnInit = function () {
    };
    return ToolbarCoreComponent;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], ToolbarCoreComponent.prototype, "position", void 0);
ToolbarCoreComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'q-grid-core-toolbar',
        template: __webpack_require__(583)
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ToolbarCoreComponent);
exports.ToolbarCoreComponent = ToolbarCoreComponent;


/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(416));
__export(__webpack_require__(21));


/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var component_1 = __webpack_require__(24);
var dom_1 = __webpack_require__(390);
var body_1 = __webpack_require__(102);
var head_1 = __webpack_require__(110);
var foot_1 = __webpack_require__(109);
var layout_1 = __webpack_require__(115);
var group_1 = __webpack_require__(65);
var pivot_1 = __webpack_require__(69);
var navigation_1 = __webpack_require__(116);
var highlight_1 = __webpack_require__(111);
var sort_1 = __webpack_require__(135);
var filter_1 = __webpack_require__(108);
var edit_1 = __webpack_require__(106);
var selection_1 = __webpack_require__(127);
var pagination_1 = __webpack_require__(117);
var table_1 = __webpack_require__(343);
var style_1 = __webpack_require__(136);
var column_1 = __webpack_require__(253);
var scroll_1 = __webpack_require__(126);
var view_core_service_1 = __webpack_require__(21);
var grid_1 = __webpack_require__(80);
var scroll_2 = __webpack_require__(157);
var command_1 = __webpack_require__(385);
var ViewCoreComponent = (function (_super) {
    tslib_1.__extends(ViewCoreComponent, _super);
    function ViewCoreComponent(root, view, gridService, vscroll) {
        var _this = _super.call(this) || this;
        _this.root = root;
        _this.view = view;
        _this.gridService = gridService;
        _this.vscroll = vscroll;
        _this.pin = null;
        return _this;
    }
    ViewCoreComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        var model = this.model;
        var table = new dom_1.Table(model, this.view.markup);
        table.pin = this.pin;
        this.view.pin = this.pin;
        var gridService = this.gridService.service(model);
        var commandManager = new command_1.CommandManager();
        this.view.style = new style_1.StyleView(model, table);
        this.view.table = new table_1.TableView(model);
        this.view.head = new head_1.HeadView(model, table, 'q-grid-core-th');
        this.view.body = new body_1.BodyView(model, table);
        this.view.foot = new foot_1.FootView(model, table);
        this.view.columns = new column_1.ColumnView(model, gridService);
        this.view.layout = new layout_1.LayoutView(model, table, gridService);
        this.view.selection = new selection_1.SelectionView(model, table, commandManager);
        this.view.group = new group_1.GroupView(model);
        this.view.pivot = new pivot_1.PivotView(model);
        this.view.highlight = new highlight_1.HighlightView(model, table, setTimeout);
        this.view.sort = new sort_1.SortView(model);
        this.view.filter = new filter_1.FilterView(model);
        this.view.edit = new edit_1.EditView(model, table, commandManager);
        this.view.nav = new navigation_1.NavigationView(model, table, commandManager);
        this.view.pagination = new pagination_1.PaginationView(model);
        this.view.scroll = new scroll_1.ScrollView(model, table, this.vscroll, gridService);
        // TODO: how we can avoid that?
        // this.$scope.$watch(this.style.invalidate.bind(this.style));
        //
        // TODO: add event
        // model.selectionChanged.watch(e => {
        //   if (e.hasChanges('entries')) {
        //     this.root.selectionChanged.emit({
        //       state: model.selection(),
        //       changes: e.changes
        //     });
        //   }
        //
        //   if (e.hasChanges('unit') || e.hasChanges('mode')) {
        //     service.invalidate('selection', e.changes, PipeUnit.column);
        //   }
        // });
        var triggers = model.data().triggers;
        // TODO: think about invalidation queue
        var needInvalidate = true;
        Object.keys(triggers)
            .forEach(function (name) {
            return model[name + 'Changed']
                .watch(function (e) {
                var changes = Object.keys(e.changes);
                if (e.tag.behavior !== 'core' && triggers[name].find(function (key) { return changes.indexOf(key) >= 0; })) {
                    needInvalidate = false;
                    gridService.invalidate(name, e.changes);
                }
            });
        });
        if (needInvalidate) {
            gridService.invalidate('grid');
        }
    };
    ViewCoreComponent.prototype.ngOnDestroy = function () {
        this.view.layout.destroy();
        this.view.nav.destroy();
        this.view.selection.destroy();
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
    return ViewCoreComponent;
}(component_1.NgComponent));
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], ViewCoreComponent.prototype, "pin", void 0);
ViewCoreComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'q-grid-core-view',
        template: __webpack_require__(584),
        providers: [view_core_service_1.ViewCoreService]
    }),
    tslib_1.__param(0, core_1.Optional()),
    tslib_1.__metadata("design:paramtypes", [component_1.RootService,
        view_core_service_1.ViewCoreService,
        grid_1.GridService,
        scroll_2.VScrollService])
], ViewCoreComponent);
exports.ViewCoreComponent = ViewCoreComponent;


/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var template_1 = __webpack_require__(25);
var component_1 = __webpack_require__(24);
var GridComponent = (function (_super) {
    tslib_1.__extends(GridComponent, _super);
    function GridComponent(rootService) {
        var _this = _super.call(this) || this;
        _this.rootService = rootService;
        _this.selectionChanged = new core_1.EventEmitter();
        _this.models = ['data', 'selection', 'sort', 'group', 'pivot', 'edit'];
        _this.modelChanged.watch(function (model) { return _this.rootService.model = model; });
        return _this;
    }
    GridComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.model.viewChanged.watch(function (e) {
            if (e.hasChanges('columns')) {
                _this.invalidateVisibility();
            }
        });
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
    Object.defineProperty(GridComponent.prototype, "visibility", {
        get: function () {
            // TODO: get rid of that
            return this.model.visibility();
        },
        enumerable: true,
        configurable: true
    });
    return GridComponent;
}(component_1.RootComponent));
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
    core_1.Output(),
    tslib_1.__metadata("design:type", Object)
], GridComponent.prototype, "onSelectionChanged", void 0);
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
            __webpack_require__(599),
            __webpack_require__(600)
        ],
        template: __webpack_require__(585),
        encapsulation: core_1.ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [component_1.RootService])
], GridComponent);
exports.GridComponent = GridComponent;


/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var infrastructure_1 = __webpack_require__(3);
var services_1 = __webpack_require__(17);
var pipe_1 = __webpack_require__(118);
var units_1 = __webpack_require__(68);
var utility_1 = __webpack_require__(4);
var value_1 = __webpack_require__(20);
var label_1 = __webpack_require__(47);
var core_1 = __webpack_require__(1);
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
            return infrastructure_1.Command;
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
    return GridService;
}());
GridService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], GridService);
exports.GridService = GridService;


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(420));


/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(32);
var grid_1 = __webpack_require__(80);
var column_1 = __webpack_require__(156);
var box_1 = __webpack_require__(395);
var core_2 = __webpack_require__(407);
var theme_module_1 = __webpack_require__(433);
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            grid_1.GridComponent,
            column_1.ColumnListComponent,
            box_1.BoxComponent
        ],
        exports: [
            grid_1.GridComponent,
            column_1.ColumnListComponent,
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
exports.MainModule = MainModule;


/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(425));
__export(__webpack_require__(81));


/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(424));


/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var infrastructure_1 = __webpack_require__(3);
var plugin_component_1 = __webpack_require__(81);
var root_service_1 = __webpack_require__(49);
var PagerComponent = (function (_super) {
    tslib_1.__extends(PagerComponent, _super);
    function PagerComponent(root) {
        var _this = _super.call(this, root) || this;
        _this.next = new infrastructure_1.Command({
            execute: function () { return _this.current = _this.current + 1; },
            canExecute: function () { return (_this.current + 1) * _this.size < _this.total; }
        });
        _this.prev = new infrastructure_1.Command({
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
    return PagerComponent;
}(plugin_component_1.PluginComponent));
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
        template: __webpack_require__(586)
    }),
    tslib_1.__param(0, core_1.Optional()),
    tslib_1.__metadata("design:paramtypes", [root_service_1.RootService])
], PagerComponent);
exports.PagerComponent = PagerComponent;


/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var pager_component_1 = __webpack_require__(423);
var template_module_1 = __webpack_require__(84);
var PagerModule = (function () {
    function PagerModule() {
    }
    return PagerModule;
}());
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
exports.PagerModule = PagerModule;


/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var pagination_1 = __webpack_require__(422);
var progress_1 = __webpack_require__(426);
var PluginModule = (function () {
    function PluginModule() {
    }
    return PluginModule;
}());
PluginModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [],
        exports: [
            pagination_1.PagerModule,
            progress_1.ProgressModule
        ],
        imports: [],
        providers: []
    })
], PluginModule);
exports.PluginModule = PluginModule;


/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(428));


/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var plugin_component_1 = __webpack_require__(81);
var component_1 = __webpack_require__(24);
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
    return ProgressComponent;
}(plugin_component_1.PluginComponent));
ProgressComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'q-grid-progress',
        template: __webpack_require__(587)
    }),
    tslib_1.__param(0, core_1.Optional()),
    tslib_1.__metadata("design:paramtypes", [component_1.RootService])
], ProgressComponent);
exports.ProgressComponent = ProgressComponent;


/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var progress_component_1 = __webpack_require__(427);
var template_1 = __webpack_require__(25);
var ProgressModule = (function () {
    function ProgressModule() {
    }
    return ProgressModule;
}());
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
exports.ProgressModule = ProgressModule;


/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var template_cache_service_1 = __webpack_require__(82);
var TemplateCacheDirective = (function () {
    function TemplateCacheDirective(templateCache, templateRef) {
        this.templateCache = templateCache;
        this.templateRef = templateRef;
        this.key = '';
    }
    TemplateCacheDirective.prototype.ngOnInit = function () {
        this.templateCache.put(this.key, this.templateRef);
    };
    return TemplateCacheDirective;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], TemplateCacheDirective.prototype, "key", void 0);
TemplateCacheDirective = tslib_1.__decorate([
    core_1.Directive({
        selector: 'ng-template[for]'
    }),
    tslib_1.__metadata("design:paramtypes", [template_cache_service_1.TemplateCacheService, core_1.TemplateRef])
], TemplateCacheDirective);
exports.TemplateCacheDirective = TemplateCacheDirective;


/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var template_link_service_1 = __webpack_require__(83);
var TemplateLinkDirective = (function () {
    function TemplateLinkDirective(templateLink, templateRef) {
        this.templateLink = templateLink;
        this.templateRef = templateRef;
        this.key = '';
    }
    TemplateLinkDirective.prototype.ngOnInit = function () {
        this.templateLink.put(this.key, this.templateRef);
    };
    return TemplateLinkDirective;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], TemplateLinkDirective.prototype, "key", void 0);
TemplateLinkDirective = tslib_1.__decorate([
    core_1.Directive({
        selector: 'ng-template[key]'
    }),
    tslib_1.__metadata("design:paramtypes", [template_link_service_1.TemplateLinkService, core_1.TemplateRef])
], TemplateLinkDirective);
exports.TemplateLinkDirective = TemplateLinkDirective;


/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var template_link_service_1 = __webpack_require__(83);
var template_cache_service_1 = __webpack_require__(82);
var TemplateDirective = (function () {
    function TemplateDirective(templateLink, templateCache, viewContainerRef) {
        this.templateLink = templateLink;
        this.templateCache = templateCache;
        this.viewContainerRef = viewContainerRef;
        this.key = '';
        this.context = null;
    }
    TemplateDirective.prototype.ngOnInit = function () {
        console.log(this.key);
    };
    TemplateDirective.prototype.ngDoCheck = function () {
        var template = this.templateCache.get(this.key) ||
            this.templateLink.get(this.key);
        if (template !== this.template) {
            this.template = template;
            if (this.viewRef) {
                this.viewRef.destroy();
            }
            this.viewRef = this.viewContainerRef.createEmbeddedView(template, this.context);
        }
    };
    return TemplateDirective;
}());
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
exports.TemplateDirective = TemplateDirective;


/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var templates = [
    __webpack_require__(590),
    __webpack_require__(588),
    __webpack_require__(589),
    __webpack_require__(596),
    __webpack_require__(593),
    __webpack_require__(594),
    __webpack_require__(595),
    __webpack_require__(591),
    __webpack_require__(592),
];
var ThemeComponent = (function () {
    function ThemeComponent() {
    }
    return ThemeComponent;
}());
ThemeComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'q-grid-theme',
        template: templates.join('\n\n')
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ThemeComponent);
exports.ThemeComponent = ThemeComponent;


/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(32);
var forms_1 = __webpack_require__(196);
var theme_service_1 = __webpack_require__(159);
var theme_component_1 = __webpack_require__(432);
var plugins_1 = __webpack_require__(421);
var template_1 = __webpack_require__(25);
var material_1 = __webpack_require__(198);
var ThemeModule = (function () {
    function ThemeModule() {
    }
    return ThemeModule;
}());
ThemeModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            theme_component_1.ThemeComponent
        ],
        exports: [
            theme_component_1.ThemeComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            template_1.TemplateModule,
            plugins_1.PluginModule,
            material_1.MdIconModule,
            material_1.MdButtonModule,
            material_1.MdCheckboxModule,
            material_1.MdSelectModule,
            material_1.MdTooltipModule,
            material_1.MdProgressBarModule
        ],
        providers: [
            theme_service_1.ThemeService
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ThemeModule);
exports.ThemeModule = ThemeModule;


/***/ }),
/* 434 */,
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(undefined);
// imports


// module
exports.push([module.i, "html, body {\n  font-family: Roboto, 'Helvetica Neue', sans-serif;\n  font-size: 14px;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\nmain {\n  height: 100%; }\n  main .mat-card {\n    height: calc(100% - 32px);\n    margin: 15px;\n    padding: 0px 16px; }\n", ""]);

// exports


/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(undefined);
// imports


// module
exports.push([module.i, "/*\n*\n*  Responsive attributes\n*\n*  References:\n*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex\n*  2) https://css-tricks.com/almanac/properties/f/flex/\n*  3) https://css-tricks.com/snippets/css/a-guide-to-flexbox/\n*  4) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items\n*  5) http://godban.com.ua/projects/flexgrid\n*\n*\n*/\n/* IE10-IE11 column-flex bug fix (set proper default value) */\n.layout-column > .flex {\n  -ms-flex-basis: auto;\n  flex-basis: auto; }\n\n/* Apply Mixins to create Layout/Flexbox styles */\n.flex-order {\n  order: 0; }\n\n.flex-order--20 {\n  order: -20; }\n\n.flex-order--19 {\n  order: -19; }\n\n.flex-order--18 {\n  order: -18; }\n\n.flex-order--17 {\n  order: -17; }\n\n.flex-order--16 {\n  order: -16; }\n\n.flex-order--15 {\n  order: -15; }\n\n.flex-order--14 {\n  order: -14; }\n\n.flex-order--13 {\n  order: -13; }\n\n.flex-order--12 {\n  order: -12; }\n\n.flex-order--11 {\n  order: -11; }\n\n.flex-order--10 {\n  order: -10; }\n\n.flex-order--9 {\n  order: -9; }\n\n.flex-order--8 {\n  order: -8; }\n\n.flex-order--7 {\n  order: -7; }\n\n.flex-order--6 {\n  order: -6; }\n\n.flex-order--5 {\n  order: -5; }\n\n.flex-order--4 {\n  order: -4; }\n\n.flex-order--3 {\n  order: -3; }\n\n.flex-order--2 {\n  order: -2; }\n\n.flex-order--1 {\n  order: -1; }\n\n.flex-order-0 {\n  order: 0; }\n\n.flex-order-1 {\n  order: 1; }\n\n.flex-order-2 {\n  order: 2; }\n\n.flex-order-3 {\n  order: 3; }\n\n.flex-order-4 {\n  order: 4; }\n\n.flex-order-5 {\n  order: 5; }\n\n.flex-order-6 {\n  order: 6; }\n\n.flex-order-7 {\n  order: 7; }\n\n.flex-order-8 {\n  order: 8; }\n\n.flex-order-9 {\n  order: 9; }\n\n.flex-order-10 {\n  order: 10; }\n\n.flex-order-11 {\n  order: 11; }\n\n.flex-order-12 {\n  order: 12; }\n\n.flex-order-13 {\n  order: 13; }\n\n.flex-order-14 {\n  order: 14; }\n\n.flex-order-15 {\n  order: 15; }\n\n.flex-order-16 {\n  order: 16; }\n\n.flex-order-17 {\n  order: 17; }\n\n.flex-order-18 {\n  order: 18; }\n\n.flex-order-19 {\n  order: 19; }\n\n.flex-order-20 {\n  order: 20; }\n\n.offset-0, .flex-offset-0 {\n  margin-left: 0; }\n  [dir=rtl] .offset-0, [dir=rtl] .flex-offset-0 {\n    margin-left: auto;\n    margin-right: 0; }\n\n.offset-5, .flex-offset-5 {\n  margin-left: 5%; }\n  [dir=rtl] .offset-5, [dir=rtl] .flex-offset-5 {\n    margin-left: auto;\n    margin-right: 5%; }\n\n.offset-10, .flex-offset-10 {\n  margin-left: 10%; }\n  [dir=rtl] .offset-10, [dir=rtl] .flex-offset-10 {\n    margin-left: auto;\n    margin-right: 10%; }\n\n.offset-15, .flex-offset-15 {\n  margin-left: 15%; }\n  [dir=rtl] .offset-15, [dir=rtl] .flex-offset-15 {\n    margin-left: auto;\n    margin-right: 15%; }\n\n.offset-20, .flex-offset-20 {\n  margin-left: 20%; }\n  [dir=rtl] .offset-20, [dir=rtl] .flex-offset-20 {\n    margin-left: auto;\n    margin-right: 20%; }\n\n.offset-25, .flex-offset-25 {\n  margin-left: 25%; }\n  [dir=rtl] .offset-25, [dir=rtl] .flex-offset-25 {\n    margin-left: auto;\n    margin-right: 25%; }\n\n.offset-30, .flex-offset-30 {\n  margin-left: 30%; }\n  [dir=rtl] .offset-30, [dir=rtl] .flex-offset-30 {\n    margin-left: auto;\n    margin-right: 30%; }\n\n.offset-35, .flex-offset-35 {\n  margin-left: 35%; }\n  [dir=rtl] .offset-35, [dir=rtl] .flex-offset-35 {\n    margin-left: auto;\n    margin-right: 35%; }\n\n.offset-40, .flex-offset-40 {\n  margin-left: 40%; }\n  [dir=rtl] .offset-40, [dir=rtl] .flex-offset-40 {\n    margin-left: auto;\n    margin-right: 40%; }\n\n.offset-45, .flex-offset-45 {\n  margin-left: 45%; }\n  [dir=rtl] .offset-45, [dir=rtl] .flex-offset-45 {\n    margin-left: auto;\n    margin-right: 45%; }\n\n.offset-50, .flex-offset-50 {\n  margin-left: 50%; }\n  [dir=rtl] .offset-50, [dir=rtl] .flex-offset-50 {\n    margin-left: auto;\n    margin-right: 50%; }\n\n.offset-55, .flex-offset-55 {\n  margin-left: 55%; }\n  [dir=rtl] .offset-55, [dir=rtl] .flex-offset-55 {\n    margin-left: auto;\n    margin-right: 55%; }\n\n.offset-60, .flex-offset-60 {\n  margin-left: 60%; }\n  [dir=rtl] .offset-60, [dir=rtl] .flex-offset-60 {\n    margin-left: auto;\n    margin-right: 60%; }\n\n.offset-65, .flex-offset-65 {\n  margin-left: 65%; }\n  [dir=rtl] .offset-65, [dir=rtl] .flex-offset-65 {\n    margin-left: auto;\n    margin-right: 65%; }\n\n.offset-70, .flex-offset-70 {\n  margin-left: 70%; }\n  [dir=rtl] .offset-70, [dir=rtl] .flex-offset-70 {\n    margin-left: auto;\n    margin-right: 70%; }\n\n.offset-75, .flex-offset-75 {\n  margin-left: 75%; }\n  [dir=rtl] .offset-75, [dir=rtl] .flex-offset-75 {\n    margin-left: auto;\n    margin-right: 75%; }\n\n.offset-80, .flex-offset-80 {\n  margin-left: 80%; }\n  [dir=rtl] .offset-80, [dir=rtl] .flex-offset-80 {\n    margin-left: auto;\n    margin-right: 80%; }\n\n.offset-85, .flex-offset-85 {\n  margin-left: 85%; }\n  [dir=rtl] .offset-85, [dir=rtl] .flex-offset-85 {\n    margin-left: auto;\n    margin-right: 85%; }\n\n.offset-90, .flex-offset-90 {\n  margin-left: 90%; }\n  [dir=rtl] .offset-90, [dir=rtl] .flex-offset-90 {\n    margin-left: auto;\n    margin-right: 90%; }\n\n.offset-95, .flex-offset-95 {\n  margin-left: 95%; }\n  [dir=rtl] .offset-95, [dir=rtl] .flex-offset-95 {\n    margin-left: auto;\n    margin-right: 95%; }\n\n.offset-33, .flex-offset-33 {\n  margin-left: calc(100% / 3); }\n\n.offset-66, .flex-offset-66 {\n  margin-left: calc(200% / 3); }\n  [dir=rtl] .offset-66, [dir=rtl] .flex-offset-66 {\n    margin-left: auto;\n    margin-right: calc(200% / 3); }\n\n.layout-align,\n.layout-align-start-stretch {\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: stretch; }\n\n.layout-align-start,\n.layout-align-start-start,\n.layout-align-start-center,\n.layout-align-start-end,\n.layout-align-start-stretch {\n  justify-content: flex-start; }\n\n.layout-align-center,\n.layout-align-center-start,\n.layout-align-center-center,\n.layout-align-center-end,\n.layout-align-center-stretch {\n  justify-content: center; }\n\n.layout-align-end,\n.layout-align-end-start,\n.layout-align-end-center,\n.layout-align-end-end,\n.layout-align-end-stretch {\n  justify-content: flex-end; }\n\n.layout-align-space-around,\n.layout-align-space-around-center,\n.layout-align-space-around-start,\n.layout-align-space-around-end,\n.layout-align-space-around-stretch {\n  justify-content: space-around; }\n\n.layout-align-space-between,\n.layout-align-space-between-center,\n.layout-align-space-between-start,\n.layout-align-space-between-end,\n.layout-align-space-between-stretch {\n  justify-content: space-between; }\n\n.layout-align-start-start,\n.layout-align-center-start,\n.layout-align-end-start,\n.layout-align-space-between-start,\n.layout-align-space-around-start {\n  align-items: flex-start;\n  align-content: flex-start; }\n\n.layout-align-start-center,\n.layout-align-center-center,\n.layout-align-end-center,\n.layout-align-space-between-center,\n.layout-align-space-around-center {\n  align-items: center;\n  align-content: center;\n  max-width: 100%; }\n\n.layout-align-start-center > *,\n.layout-align-center-center > *,\n.layout-align-end-center > *,\n.layout-align-space-between-center > *,\n.layout-align-space-around-center > * {\n  max-width: 100%;\n  box-sizing: border-box; }\n\n.layout-align-start-end,\n.layout-align-center-end,\n.layout-align-end-end,\n.layout-align-space-between-end,\n.layout-align-space-around-end {\n  align-items: flex-end;\n  align-content: flex-end; }\n\n.layout-align-start-stretch,\n.layout-align-center-stretch,\n.layout-align-end-stretch,\n.layout-align-space-between-stretch,\n.layout-align-space-around-stretch {\n  align-items: stretch;\n  align-content: stretch; }\n\n.flex {\n  flex: 1;\n  box-sizing: border-box; }\n\n.flex-grow {\n  flex: 1 1 100%;\n  box-sizing: border-box; }\n\n.flex-initial {\n  flex: 0 1 auto;\n  box-sizing: border-box; }\n\n.flex-auto {\n  flex: 1 1 auto;\n  box-sizing: border-box; }\n\n.flex-none {\n  flex: 0 0 auto;\n  box-sizing: border-box; }\n\n.flex-noshrink {\n  flex: 1 0 auto;\n  box-sizing: border-box; }\n\n.flex-nogrow {\n  flex: 0 1 auto;\n  box-sizing: border-box; }\n\n.flex-0 {\n  flex: 1 1 0%;\n  max-width: 0%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-0 {\n  flex: 1 1 0%;\n  max-width: 0%;\n  max-height: 100%;\n  box-sizing: border-box;\n  min-width: 0; }\n\n.layout-column > .flex-0 {\n  flex: 1 1 0%;\n  max-width: 100%;\n  max-height: 0%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-0 {\n  flex: 1 1 0%;\n  max-width: 0%;\n  max-height: 100%;\n  box-sizing: border-box;\n  min-width: 0; }\n\n.layout-column > .flex-0 {\n  flex: 1 1 0%;\n  max-width: 100%;\n  max-height: 0%;\n  box-sizing: border-box;\n  min-height: 0; }\n\n.flex-5 {\n  flex: 1 1 5%;\n  max-width: 5%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-5 {\n  flex: 1 1 5%;\n  max-width: 5%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-5 {\n  flex: 1 1 5%;\n  max-width: 100%;\n  max-height: 5%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-5 {\n  flex: 1 1 5%;\n  max-width: 5%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-5 {\n  flex: 1 1 5%;\n  max-width: 100%;\n  max-height: 5%;\n  box-sizing: border-box; }\n\n.flex-10 {\n  flex: 1 1 10%;\n  max-width: 10%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-10 {\n  flex: 1 1 10%;\n  max-width: 10%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-10 {\n  flex: 1 1 10%;\n  max-width: 100%;\n  max-height: 10%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-10 {\n  flex: 1 1 10%;\n  max-width: 10%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-10 {\n  flex: 1 1 10%;\n  max-width: 100%;\n  max-height: 10%;\n  box-sizing: border-box; }\n\n.flex-15 {\n  flex: 1 1 15%;\n  max-width: 15%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-15 {\n  flex: 1 1 15%;\n  max-width: 15%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-15 {\n  flex: 1 1 15%;\n  max-width: 100%;\n  max-height: 15%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-15 {\n  flex: 1 1 15%;\n  max-width: 15%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-15 {\n  flex: 1 1 15%;\n  max-width: 100%;\n  max-height: 15%;\n  box-sizing: border-box; }\n\n.flex-20 {\n  flex: 1 1 20%;\n  max-width: 20%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-20 {\n  flex: 1 1 20%;\n  max-width: 20%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-20 {\n  flex: 1 1 20%;\n  max-width: 100%;\n  max-height: 20%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-20 {\n  flex: 1 1 20%;\n  max-width: 20%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-20 {\n  flex: 1 1 20%;\n  max-width: 100%;\n  max-height: 20%;\n  box-sizing: border-box; }\n\n.flex-25 {\n  flex: 1 1 25%;\n  max-width: 25%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-25 {\n  flex: 1 1 25%;\n  max-width: 25%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-25 {\n  flex: 1 1 25%;\n  max-width: 100%;\n  max-height: 25%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-25 {\n  flex: 1 1 25%;\n  max-width: 25%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-25 {\n  flex: 1 1 25%;\n  max-width: 100%;\n  max-height: 25%;\n  box-sizing: border-box; }\n\n.flex-30 {\n  flex: 1 1 30%;\n  max-width: 30%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-30 {\n  flex: 1 1 30%;\n  max-width: 30%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-30 {\n  flex: 1 1 30%;\n  max-width: 100%;\n  max-height: 30%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-30 {\n  flex: 1 1 30%;\n  max-width: 30%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-30 {\n  flex: 1 1 30%;\n  max-width: 100%;\n  max-height: 30%;\n  box-sizing: border-box; }\n\n.flex-35 {\n  flex: 1 1 35%;\n  max-width: 35%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-35 {\n  flex: 1 1 35%;\n  max-width: 35%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-35 {\n  flex: 1 1 35%;\n  max-width: 100%;\n  max-height: 35%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-35 {\n  flex: 1 1 35%;\n  max-width: 35%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-35 {\n  flex: 1 1 35%;\n  max-width: 100%;\n  max-height: 35%;\n  box-sizing: border-box; }\n\n.flex-40 {\n  flex: 1 1 40%;\n  max-width: 40%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-40 {\n  flex: 1 1 40%;\n  max-width: 40%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-40 {\n  flex: 1 1 40%;\n  max-width: 100%;\n  max-height: 40%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-40 {\n  flex: 1 1 40%;\n  max-width: 40%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-40 {\n  flex: 1 1 40%;\n  max-width: 100%;\n  max-height: 40%;\n  box-sizing: border-box; }\n\n.flex-45 {\n  flex: 1 1 45%;\n  max-width: 45%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-45 {\n  flex: 1 1 45%;\n  max-width: 45%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-45 {\n  flex: 1 1 45%;\n  max-width: 100%;\n  max-height: 45%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-45 {\n  flex: 1 1 45%;\n  max-width: 45%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-45 {\n  flex: 1 1 45%;\n  max-width: 100%;\n  max-height: 45%;\n  box-sizing: border-box; }\n\n.flex-50 {\n  flex: 1 1 50%;\n  max-width: 50%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-50 {\n  flex: 1 1 50%;\n  max-width: 50%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-50 {\n  flex: 1 1 50%;\n  max-width: 100%;\n  max-height: 50%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-50 {\n  flex: 1 1 50%;\n  max-width: 50%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-50 {\n  flex: 1 1 50%;\n  max-width: 100%;\n  max-height: 50%;\n  box-sizing: border-box; }\n\n.flex-55 {\n  flex: 1 1 55%;\n  max-width: 55%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-55 {\n  flex: 1 1 55%;\n  max-width: 55%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-55 {\n  flex: 1 1 55%;\n  max-width: 100%;\n  max-height: 55%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-55 {\n  flex: 1 1 55%;\n  max-width: 55%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-55 {\n  flex: 1 1 55%;\n  max-width: 100%;\n  max-height: 55%;\n  box-sizing: border-box; }\n\n.flex-60 {\n  flex: 1 1 60%;\n  max-width: 60%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-60 {\n  flex: 1 1 60%;\n  max-width: 60%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-60 {\n  flex: 1 1 60%;\n  max-width: 100%;\n  max-height: 60%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-60 {\n  flex: 1 1 60%;\n  max-width: 60%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-60 {\n  flex: 1 1 60%;\n  max-width: 100%;\n  max-height: 60%;\n  box-sizing: border-box; }\n\n.flex-65 {\n  flex: 1 1 65%;\n  max-width: 65%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-65 {\n  flex: 1 1 65%;\n  max-width: 65%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-65 {\n  flex: 1 1 65%;\n  max-width: 100%;\n  max-height: 65%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-65 {\n  flex: 1 1 65%;\n  max-width: 65%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-65 {\n  flex: 1 1 65%;\n  max-width: 100%;\n  max-height: 65%;\n  box-sizing: border-box; }\n\n.flex-70 {\n  flex: 1 1 70%;\n  max-width: 70%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-70 {\n  flex: 1 1 70%;\n  max-width: 70%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-70 {\n  flex: 1 1 70%;\n  max-width: 100%;\n  max-height: 70%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-70 {\n  flex: 1 1 70%;\n  max-width: 70%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-70 {\n  flex: 1 1 70%;\n  max-width: 100%;\n  max-height: 70%;\n  box-sizing: border-box; }\n\n.flex-75 {\n  flex: 1 1 75%;\n  max-width: 75%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-75 {\n  flex: 1 1 75%;\n  max-width: 75%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-75 {\n  flex: 1 1 75%;\n  max-width: 100%;\n  max-height: 75%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-75 {\n  flex: 1 1 75%;\n  max-width: 75%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-75 {\n  flex: 1 1 75%;\n  max-width: 100%;\n  max-height: 75%;\n  box-sizing: border-box; }\n\n.flex-80 {\n  flex: 1 1 80%;\n  max-width: 80%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-80 {\n  flex: 1 1 80%;\n  max-width: 80%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-80 {\n  flex: 1 1 80%;\n  max-width: 100%;\n  max-height: 80%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-80 {\n  flex: 1 1 80%;\n  max-width: 80%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-80 {\n  flex: 1 1 80%;\n  max-width: 100%;\n  max-height: 80%;\n  box-sizing: border-box; }\n\n.flex-85 {\n  flex: 1 1 85%;\n  max-width: 85%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-85 {\n  flex: 1 1 85%;\n  max-width: 85%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-85 {\n  flex: 1 1 85%;\n  max-width: 100%;\n  max-height: 85%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-85 {\n  flex: 1 1 85%;\n  max-width: 85%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-85 {\n  flex: 1 1 85%;\n  max-width: 100%;\n  max-height: 85%;\n  box-sizing: border-box; }\n\n.flex-90 {\n  flex: 1 1 90%;\n  max-width: 90%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-90 {\n  flex: 1 1 90%;\n  max-width: 90%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-90 {\n  flex: 1 1 90%;\n  max-width: 100%;\n  max-height: 90%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-90 {\n  flex: 1 1 90%;\n  max-width: 90%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-90 {\n  flex: 1 1 90%;\n  max-width: 100%;\n  max-height: 90%;\n  box-sizing: border-box; }\n\n.flex-95 {\n  flex: 1 1 95%;\n  max-width: 95%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-95 {\n  flex: 1 1 95%;\n  max-width: 95%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-95 {\n  flex: 1 1 95%;\n  max-width: 100%;\n  max-height: 95%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-95 {\n  flex: 1 1 95%;\n  max-width: 95%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-95 {\n  flex: 1 1 95%;\n  max-width: 100%;\n  max-height: 95%;\n  box-sizing: border-box; }\n\n.flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33, .layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66, .layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex {\n  min-width: 0; }\n\n.layout-column > .flex-33, .layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66, .layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-column > .flex {\n  min-height: 0; }\n\n.layout, .layout-column, .layout-row {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.layout-column {\n  flex-direction: column; }\n\n.layout-row {\n  flex-direction: row; }\n\n.layout-padding-sm > *,\n.layout-padding > .flex-sm {\n  padding: 4px; }\n\n.layout-padding,\n.layout-padding-gt-sm,\n.layout-padding-md,\n.layout-padding > *,\n.layout-padding-gt-sm > *,\n.layout-padding-md > *,\n.layout-padding > .flex,\n.layout-padding > .flex-gt-sm,\n.layout-padding > .flex-md {\n  padding: 8px; }\n\n.layout-padding-gt-md > *,\n.layout-padding-lg > *,\n.layout-padding-gt-lg > *,\n.layout-padding > .flex-gt-md,\n.layout-padding > .flex-lg,\n.layout-padding > .flex-lg,\n.layout-padding > .flex-gt-lg {\n  padding: 16px; }\n\n.layout-margin-sm > *,\n.layout-margin > .flex-sm {\n  margin: 4px; }\n\n.layout-margin,\n.layout-margin-gt-sm,\n.layout-margin-md,\n.layout-margin > *,\n.layout-margin-gt-sm > *,\n.layout-margin-md > *,\n.layout-margin > .flex,\n.layout-margin > .flex-gt-sm,\n.layout-margin > .flex-md {\n  margin: 8px; }\n\n.layout-margin-gt-md > *,\n.layout-margin-lg > *,\n.layout-margin-gt-lg > *,\n.layout-margin > .flex-gt-md,\n.layout-margin > .flex-lg,\n.layout-margin > .flex-gt-lg {\n  margin: 16px; }\n\n.layout-wrap {\n  flex-wrap: wrap; }\n\n.layout-nowrap {\n  flex-wrap: nowrap; }\n\n.layout-fill {\n  margin: 0;\n  width: 100%;\n  min-height: 100%;\n  height: 100%; }\n\n.q-grid tbody > tr.vscroll-mark {\n  height: 0; }\n\n.q-grid ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px; }\n\n.q-grid ::-webkit-scrollbar-thumb {\n  height: 15px;\n  background-color: #c8c8c8;\n  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.07); }\n\n.q-grid ::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none; }\n\n.q-grid ::-webkit-scrollbar-corner {\n  background-color: transparent; }\n\n.q-grid ::-webkit-scrollbar-track,\n.q-grid ::-webkit-scrollbar-track-piece {\n  background-color: #f8f8f8; }\n\n.q-grid.q-grid-box {\n  height: 100%;\n  min-height: 100%;\n  max-height: 100%; }\n\n.q-grid tbody > tr.vscroll-mark {\n  height: 0; }\n\n.q-grid table {\n  border-spacing: 0;\n  overflow: hidden;\n  table-layout: fixed;\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  width: 100%;\n  outline: none; }\n  .q-grid table thead, .q-grid table tfoot {\n    /* head takes the height it requires,\r\n\t\tand it's not scaled when table is resized */\n    flex: 0 0 auto;\n    width: calc(100% - 8px);\n    overflow: hidden; }\n  .q-grid table tbody {\n    /* body takes all the remaining available space */\n    flex: 1 1 auto;\n    display: block;\n    overflow-y: scroll; }\n  .q-grid table tbody tr {\n    width: 100%;\n    display: table-row;\n    table-layout: fixed; }\n\n.q-grid td, .q-grid th {\n  vertical-align: middle;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  position: relative;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box; }\n  .q-grid td > *, .q-grid th > * {\n    vertical-align: middle; }\n  .q-grid td.q-grid-pivot, .q-grid th.q-grid-pivot {\n    text-align: center; }\n\n.q-grid thead th > div {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  outline: none; }\n\n.q-grid thead td, .q-grid thead th, .q-grid tfoot td, .q-grid tfoot th, .q-grid tbody td, .q-grid tbody th {\n  width: 150px;\n  min-width: 150px;\n  max-width: 150px; }\n  .q-grid thead td.q-grid-pad, .q-grid thead th.q-grid-pad, .q-grid tfoot td.q-grid-pad, .q-grid tfoot th.q-grid-pad, .q-grid tbody td.q-grid-pad, .q-grid tbody th.q-grid-pad {\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%;\n    padding: 0 0 0 1px !important;\n    margin: 0 !important; }\n  .q-grid thead td.q-grid-group, .q-grid thead th.q-grid-group, .q-grid tfoot td.q-grid-group, .q-grid tfoot th.q-grid-group, .q-grid tbody td.q-grid-group, .q-grid tbody th.q-grid-group {\n    width: 200px;\n    min-width: 200px;\n    max-width: 200px; }\n  .q-grid thead td.q-grid-pivot, .q-grid thead th.q-grid-pivot, .q-grid tfoot td.q-grid-pivot, .q-grid tfoot th.q-grid-pivot, .q-grid tbody td.q-grid-pivot, .q-grid tbody th.q-grid-pivot {\n    width: 80px;\n    min-width: 80px;\n    max-width: 80px; }\n  .q-grid thead td.q-grid-email, .q-grid thead th.q-grid-email, .q-grid tfoot td.q-grid-email, .q-grid tfoot th.q-grid-email, .q-grid tbody td.q-grid-email, .q-grid tbody th.q-grid-email {\n    width: 200px;\n    min-width: 200px;\n    max-width: 200px; }\n  .q-grid thead td.q-grid-password, .q-grid thead th.q-grid-password, .q-grid tfoot td.q-grid-password, .q-grid tfoot th.q-grid-password, .q-grid tbody td.q-grid-password, .q-grid tbody th.q-grid-password {\n    width: 100px;\n    min-width: 100px;\n    max-width: 100px; }\n  .q-grid thead td.q-grid-bool, .q-grid thead th.q-grid-bool, .q-grid tfoot td.q-grid-bool, .q-grid tfoot th.q-grid-bool, .q-grid tbody td.q-grid-bool, .q-grid tbody th.q-grid-bool {\n    width: 80px;\n    min-width: 80px;\n    max-width: 80px; }\n  .q-grid thead td.q-grid-date, .q-grid thead th.q-grid-date, .q-grid tfoot td.q-grid-date, .q-grid tfoot th.q-grid-date, .q-grid tbody td.q-grid-date, .q-grid tbody th.q-grid-date {\n    width: 110px;\n    min-width: 110px;\n    max-width: 110px; }\n  .q-grid thead td.q-grid-number, .q-grid thead th.q-grid-number, .q-grid tfoot td.q-grid-number, .q-grid tfoot th.q-grid-number, .q-grid tbody td.q-grid-number, .q-grid tbody th.q-grid-number {\n    width: 100px;\n    min-width: 100px;\n    max-width: 100px; }\n  .q-grid thead td.q-grid-array, .q-grid thead th.q-grid-array, .q-grid tfoot td.q-grid-array, .q-grid tfoot th.q-grid-array, .q-grid tbody td.q-grid-array, .q-grid tbody th.q-grid-array {\n    width: 250px;\n    min-width: 250px;\n    max-width: 250px; }\n  .q-grid thead td.q-grid-row-indicator, .q-grid thead th.q-grid-row-indicator, .q-grid tfoot td.q-grid-row-indicator, .q-grid tfoot th.q-grid-row-indicator, .q-grid tbody td.q-grid-row-indicator, .q-grid tbody th.q-grid-row-indicator {\n    width: 55px;\n    min-width: 55px;\n    max-width: 55px; }\n  .q-grid thead td.q-grid-row-number, .q-grid thead th.q-grid-row-number, .q-grid tfoot td.q-grid-row-number, .q-grid tfoot th.q-grid-row-number, .q-grid tbody td.q-grid-row-number, .q-grid tbody th.q-grid-row-number {\n    width: 55px;\n    min-width: 55px;\n    max-width: 55px; }\n  .q-grid thead td.q-grid-select, .q-grid thead th.q-grid-select, .q-grid tfoot td.q-grid-select, .q-grid tfoot th.q-grid-select, .q-grid tbody td.q-grid-select, .q-grid tbody th.q-grid-select {\n    width: 55px;\n    min-width: 55px;\n    max-width: 55px; }\n\n.q-grid tbody td.q-grid-number {\n  text-align: right; }\n\n.q-grid tbody td.q-grid-bool, .q-grid tbody td.q-grid-password, .q-grid tbody td.q-grid-select {\n  text-align: center; }\n\n.q-grid tbody td.q-grid-dropdown select {\n  width: 100%; }\n\n.q-grid .q-grid-can-drag {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -khtml-user-drag: element;\n  -webkit-user-drag: element; }\n\n.q-grid th .q-grid-divider {\n  top: 20%;\n  bottom: 20%;\n  right: 0;\n  height: 60%;\n  width: 4px;\n  z-index: 2;\n  background: transparent;\n  position: absolute;\n  border-right: 1px solid rgba(0, 0, 0, 0.12);\n  cursor: col-resize;\n  visibility: hidden; }\n\n.q-grid th:hover .q-grid-divider, .q-grid th.q-grid-highlighted-prev .q-grid-divider {\n  visibility: visible; }\n\n.q-grid .q-grid-toolbar-left, .q-grid .q-grid-toolbar-right {\n  max-width: 250px;\n  overflow: auto; }\n\n.q-grid .q-grid-view.q-grid-select-range thead td, .q-grid .q-grid-view.q-grid-select-range thead th, .q-grid .q-grid-view.q-grid-select-range tfoot td, .q-grid .q-grid-view.q-grid-select-range tfoot th, .q-grid .q-grid-view.q-grid-select-range tbody td, .q-grid .q-grid-view.q-grid-select-range tbody th {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default; }\n\n.q-grid .q-grid-view.q-grid-view-left, .q-grid .q-grid-view.g-grid-view-right {\n  margin-bottom: 8px; }\n  .q-grid .q-grid-view.q-grid-view-left tbody, .q-grid .q-grid-view.g-grid-view-right tbody {\n    overflow-x: hidden; }\n\n.q-grid .q-grid-view.q-grid-view-left tbody {\n  overflow-y: hidden; }\n\n.q-grid .q-grid-with-right-pin .q-grid-view-center tbody {\n  overflow-y: hidden; }\n", ""]);

// exports


/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(undefined);
// imports


// module
exports.push([module.i, ".q-grid.q-grid-theme-material.q-grid-box {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.q-grid.q-grid-theme-material .q-grid-view thead tr, .q-grid.q-grid-theme-material .q-grid-view tfoot tr {\n  height: 56px; }\n  .q-grid.q-grid-theme-material .q-grid-view thead tr th, .q-grid.q-grid-theme-material .q-grid-view thead tr td, .q-grid.q-grid-theme-material .q-grid-view tfoot tr th, .q-grid.q-grid-theme-material .q-grid-view tfoot tr td {\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 12px;\n    font-weight: bold;\n    padding: 0 16px; }\n    .q-grid.q-grid-theme-material .q-grid-view thead tr th.q-grid-select md-checkbox, .q-grid.q-grid-theme-material .q-grid-view thead tr td.q-grid-select md-checkbox, .q-grid.q-grid-theme-material .q-grid-view tfoot tr th.q-grid-select md-checkbox, .q-grid.q-grid-theme-material .q-grid-view tfoot tr td.q-grid-select md-checkbox {\n      margin: 0;\n      margin-left: 2px; }\n    .q-grid.q-grid-theme-material .q-grid-view thead tr th label, .q-grid.q-grid-theme-material .q-grid-view thead tr td label, .q-grid.q-grid-theme-material .q-grid-view tfoot tr th label, .q-grid.q-grid-theme-material .q-grid-view tfoot tr td label {\n      display: inline; }\n    .q-grid.q-grid-theme-material .q-grid-view thead tr th:hover label, .q-grid.q-grid-theme-material .q-grid-view thead tr td:hover label, .q-grid.q-grid-theme-material .q-grid-view tfoot tr th:hover label, .q-grid.q-grid-theme-material .q-grid-view tfoot tr td:hover label {\n      font-weight: bold; }\n\n.q-grid.q-grid-theme-material tbody {\n  border-collapse: separate; }\n  .q-grid.q-grid-theme-material tbody > tr {\n    height: 48px; }\n    .q-grid.q-grid-theme-material tbody > tr:hover td {\n      background-color: #eee !important; }\n      .q-grid.q-grid-theme-material tbody > tr:hover td.q-grid-text-area > span {\n        overflow: hidden;\n        position: relative;\n        line-height: 1.2em;\n        max-height: 3.6em;\n        text-align: justify;\n        margin-right: -1em;\n        padding-right: 1em; }\n        .q-grid.q-grid-theme-material tbody > tr:hover td.q-grid-text-area > span:before {\n          content: '...';\n          position: absolute;\n          right: 0;\n          bottom: 0; }\n        .q-grid.q-grid-theme-material tbody > tr:hover td.q-grid-text-area > span:after {\n          content: '';\n          position: absolute;\n          right: 0;\n          width: 1em;\n          height: 1em;\n          margin-top: 0.2em;\n          background-color: #eee; }\n    .q-grid.q-grid-theme-material tbody > tr.q-grid-selected {\n      background-color: #f5f5f5; }\n    .q-grid.q-grid-theme-material tbody > tr td {\n      color: rgba(0, 0, 0, 0.87);\n      font-size: 13px;\n      border-top: 1px solid rgba(0, 0, 0, 0.12);\n      padding: 0 16px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-array ul {\n        list-style: none;\n        margin: 0;\n        padding: 0;\n        overflow: hidden; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-array ul li {\n          display: inline-block;\n          min-width: 16px;\n          padding: 4px 8px;\n          text-align: center;\n          white-space: nowrap;\n          vertical-align: middle;\n          background-color: #e0e0e0;\n          border-radius: 16px;\n          margin-right: 4px; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-array ul li:last-child {\n          margin-right: 0; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-row-indicator md-icon {\n        font-size: 13px;\n        width: 13px;\n        height: 13px;\n        min-width: 13px;\n        min-height: 13px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-select md-checkbox {\n        margin: 0; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-selected, .q-grid.q-grid-theme-material tbody > tr td.q-grid-sorted {\n        background-color: #f5f5f5; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-highlighted.q-grid-text-area > span {\n        overflow: hidden;\n        position: relative;\n        line-height: 1.2em;\n        max-height: 3.6em;\n        text-align: justify;\n        margin-right: -1em;\n        padding-right: 1em; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-highlighted.q-grid-text-area > span:before {\n          content: '...';\n          position: absolute;\n          right: 0;\n          bottom: 0; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-highlighted.q-grid-text-area > span:after {\n          content: '';\n          position: absolute;\n          right: 0;\n          width: 1em;\n          height: 1em;\n          margin-top: 0.2em;\n          background-color: #eee; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-text-area > span {\n        display: block;\n        white-space: normal;\n        overflow: hidden;\n        position: relative;\n        line-height: 1.2em;\n        max-height: 3.6em;\n        text-align: justify;\n        margin-right: -1em;\n        padding-right: 1em; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-text-area > span:before {\n          content: '...';\n          position: absolute;\n          right: 0;\n          bottom: 0; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-text-area > span:after {\n          content: '';\n          position: absolute;\n          right: 0;\n          width: 1em;\n          height: 1em;\n          margin-top: 0.2em;\n          background-color: #fff; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file > div, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url > div, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email > div, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference > div {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        outline: none; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-download,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-download,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-download,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-download,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-reference-edit {\n        position: absolute;\n        top: calc(50% - 8px);\n        font-size: 12px;\n        min-width: 16px;\n        width: 16px;\n        min-height: 16px;\n        height: 16px;\n        outline: none;\n        border: none;\n        background: transparent;\n        padding: 0;\n        margin: 0 2px; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-download md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-url-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-email-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-reference-edit md-icon, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-download md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-url-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-email-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-reference-edit md-icon, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-download md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-url-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-email-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-reference-edit md-icon, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-download md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-url-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-email-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-reference-edit md-icon {\n          color: rgba(0, 0, 0, 0.54);\n          font-size: 16px;\n          height: 16px;\n          width: 16px;\n          min-height: 16px;\n          min-width: 16px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-reference-edit {\n        right: 0; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-download, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-download, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-download, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-download {\n        right: 16px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file {\n        padding: 0 32px 0 16px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-image {\n        text-align: center; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-image img {\n          max-height: 24px;\n          max-width: 24px; }\n\n.q-grid.q-grid-theme-material tbody {\n  border-collapse: separate; }\n  .q-grid.q-grid-theme-material tbody > tr {\n    height: 48px; }\n    .q-grid.q-grid-theme-material tbody > tr:hover td {\n      background-color: #eee !important; }\n      .q-grid.q-grid-theme-material tbody > tr:hover td.q-grid-text-area > span {\n        overflow: hidden;\n        position: relative;\n        line-height: 1.2em;\n        max-height: 3.6em;\n        text-align: justify;\n        margin-right: -1em;\n        padding-right: 1em; }\n        .q-grid.q-grid-theme-material tbody > tr:hover td.q-grid-text-area > span:before {\n          content: '...';\n          position: absolute;\n          right: 0;\n          bottom: 0; }\n        .q-grid.q-grid-theme-material tbody > tr:hover td.q-grid-text-area > span:after {\n          content: '';\n          position: absolute;\n          right: 0;\n          width: 1em;\n          height: 1em;\n          margin-top: 0.2em;\n          background-color: #eee; }\n    .q-grid.q-grid-theme-material tbody > tr.q-grid-selected {\n      background-color: #f5f5f5; }\n    .q-grid.q-grid-theme-material tbody > tr td {\n      color: rgba(0, 0, 0, 0.87);\n      font-size: 13px;\n      border-top: 1px solid rgba(0, 0, 0, 0.12);\n      padding: 0 16px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-array ul {\n        list-style: none;\n        margin: 0;\n        padding: 0;\n        overflow: hidden; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-array ul li {\n          display: inline-block;\n          min-width: 16px;\n          padding: 4px 8px;\n          text-align: center;\n          white-space: nowrap;\n          vertical-align: middle;\n          background-color: #e0e0e0;\n          border-radius: 16px;\n          margin-right: 4px; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-array ul li:last-child {\n          margin-right: 0; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-row-indicator md-icon {\n        font-size: 13px;\n        width: 13px;\n        height: 13px;\n        min-width: 13px;\n        min-height: 13px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-select md-checkbox {\n        margin: 0; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-selected, .q-grid.q-grid-theme-material tbody > tr td.q-grid-sorted {\n        background-color: #f5f5f5; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-highlighted.q-grid-text-area > span {\n        overflow: hidden;\n        position: relative;\n        line-height: 1.2em;\n        max-height: 3.6em;\n        text-align: justify;\n        margin-right: -1em;\n        padding-right: 1em; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-highlighted.q-grid-text-area > span:before {\n          content: '...';\n          position: absolute;\n          right: 0;\n          bottom: 0; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-highlighted.q-grid-text-area > span:after {\n          content: '';\n          position: absolute;\n          right: 0;\n          width: 1em;\n          height: 1em;\n          margin-top: 0.2em;\n          background-color: #eee; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-text-area > span {\n        display: block;\n        white-space: normal;\n        overflow: hidden;\n        position: relative;\n        line-height: 1.2em;\n        max-height: 3.6em;\n        text-align: justify;\n        margin-right: -1em;\n        padding-right: 1em; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-text-area > span:before {\n          content: '...';\n          position: absolute;\n          right: 0;\n          bottom: 0; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-text-area > span:after {\n          content: '';\n          position: absolute;\n          right: 0;\n          width: 1em;\n          height: 1em;\n          margin-top: 0.2em;\n          background-color: #fff; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file > div, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url > div, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email > div, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference > div {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        outline: none; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-download,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-download,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-download,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-download,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-reference-edit {\n        position: absolute;\n        top: calc(50% - 8px);\n        font-size: 12px;\n        min-width: 16px;\n        width: 16px;\n        min-height: 16px;\n        height: 16px;\n        outline: none;\n        border: none;\n        background: transparent;\n        padding: 0;\n        margin: 0 2px; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-download md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-url-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-email-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-reference-edit md-icon, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-download md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-url-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-email-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-reference-edit md-icon, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-download md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-url-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-email-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-reference-edit md-icon, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-download md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-url-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-email-edit md-icon,\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-reference-edit md-icon {\n          color: rgba(0, 0, 0, 0.54);\n          font-size: 16px;\n          height: 16px;\n          width: 16px;\n          min-height: 16px;\n          min-width: 16px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-reference-edit, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-url-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-email-edit,\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-reference-edit {\n        right: 0; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file .q-grid-file-download, .q-grid.q-grid-theme-material tbody > tr td.q-grid-url .q-grid-file-download, .q-grid.q-grid-theme-material tbody > tr td.q-grid-email .q-grid-file-download, .q-grid.q-grid-theme-material tbody > tr td.q-grid-reference .q-grid-file-download {\n        right: 16px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-file {\n        padding: 0 32px 0 16px; }\n      .q-grid.q-grid-theme-material tbody > tr td.q-grid-image {\n        text-align: center; }\n        .q-grid.q-grid-theme-material tbody > tr td.q-grid-image img {\n          max-height: 24px;\n          max-width: 24px; }\n\n.q-grid.q-grid-theme-material tfoot > tr {\n  height: 48px; }\n  .q-grid.q-grid-theme-material tfoot > tr td {\n    color: rgba(0, 0, 0, 0.87);\n    font-size: 13px;\n    border-top: 1px rgba(0, 0, 0, 0.12) solid;\n    padding: 0 16px; }\n\n.q-grid.q-grid-theme-material .q-grid-pager {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  height: 24px;\n  color: rgba(0, 0, 0, 0.54);\n  float: right;\n  padding: 16px 0;\n  font-size: 12px; }\n  .q-grid.q-grid-theme-material .q-grid-pager > div md-select {\n    width: 50px;\n    max-width: 50px;\n    background: transparent;\n    border: 0;\n    margin: 0 0 0 12px;\n    display: inline-flex;\n    vertical-align: middle; }\n    .q-grid.q-grid-theme-material .q-grid-pager > div md-select .mat-select-trigger {\n      min-width: 50px;\n      width: 50px; }\n      .q-grid.q-grid-theme-material .q-grid-pager > div md-select .mat-select-trigger .mat-select-value {\n        font-size: 12px; }\n  .q-grid.q-grid-theme-material .q-grid-pager > div .q-grid-page {\n    margin-left: 32px;\n    margin-right: 14px; }\n  .q-grid.q-grid-theme-material .q-grid-pager > div button {\n    background: transparent;\n    border: none;\n    font-size: 20px;\n    width: 24px;\n    height: 24px;\n    min-width: 24px;\n    min-height: 24px;\n    padding: 0;\n    display: inline-flex;\n    vertical-align: middle; }\n    .q-grid.q-grid-theme-material .q-grid-pager > div button .mat-button-wrapper {\n      line-height: 24px; }\n    .q-grid.q-grid-theme-material .q-grid-pager > div button.q-grid-prev-page {\n      margin-left: 18px;\n      margin-right: 0; }\n    .q-grid.q-grid-theme-material .q-grid-pager > div button.q-grid-next-page {\n      margin-left: 24px;\n      margin-right: 14px; }\n\n.q-grid.q-grid-theme-material .q-grid-toolbar-right {\n  margin: 0px 4px; }\n\n.q-grid.q-grid-theme-material .q-grid-toolbar-top {\n  position: relative; }\n\n.q-grid.q-grid-theme-material .q-grid-sort-bar {\n  height: 100%;\n  padding: 0 10px; }\n  .q-grid.q-grid-theme-material .q-grid-sort-bar label {\n    font-weight: bold; }\n  .q-grid.q-grid-theme-material .q-grid-sort-bar ul {\n    list-style-type: none;\n    margin: 0;\n    display: inline-block;\n    padding: 0; }\n    .q-grid.q-grid-theme-material .q-grid-sort-bar ul li {\n      display: inline-block; }\n  .q-grid.q-grid-theme-material .q-grid-sort-bar button {\n    background: transparent;\n    border: none;\n    margin-right: 12px; }\n  .q-grid.q-grid-theme-material .q-grid-sort-bar select {\n    background: transparent;\n    border: none;\n    width: 90px; }\n  .q-grid.q-grid-theme-material .q-grid-sort-bar md-input-container {\n    margin: 0; }\n\n.q-grid.q-grid-theme-material .q-grid-group-bar {\n  height: 100%;\n  padding: 0 10px; }\n  .q-grid.q-grid-theme-material .q-grid-group-bar label {\n    font-weight: bold; }\n  .q-grid.q-grid-theme-material .q-grid-group-bar ul {\n    list-style-type: none;\n    margin: 0;\n    display: inline-block;\n    padding: 0; }\n    .q-grid.q-grid-theme-material .q-grid-group-bar ul li {\n      display: inline-block; }\n  .q-grid.q-grid-theme-material .q-grid-group-bar button {\n    background: transparent;\n    border: none;\n    margin-right: 12px; }\n  .q-grid.q-grid-theme-material .q-grid-group-bar select {\n    background: transparent;\n    border: none;\n    width: 90px; }\n  .q-grid.q-grid-theme-material .q-grid-group-bar md-input-container {\n    margin: 0; }\n\n.q-grid.q-grid-theme-material .q-grid-pivot-bar {\n  height: 100%;\n  padding: 0 10px; }\n  .q-grid.q-grid-theme-material .q-grid-pivot-bar label {\n    font-weight: bold; }\n  .q-grid.q-grid-theme-material .q-grid-pivot-bar ul {\n    list-style-type: none;\n    margin: 0;\n    display: inline-block;\n    padding: 0; }\n    .q-grid.q-grid-theme-material .q-grid-pivot-bar ul li {\n      display: inline-block; }\n  .q-grid.q-grid-theme-material .q-grid-pivot-bar button {\n    background: transparent;\n    border: none;\n    margin-right: 12px; }\n  .q-grid.q-grid-theme-material .q-grid-pivot-bar select {\n    background: transparent;\n    border: none;\n    width: 90px; }\n  .q-grid.q-grid-theme-material .q-grid-pivot-bar md-input-container {\n    margin: 0; }\n\n.q-grid.q-grid-theme-material .q-grid-selection-bar {\n  margin-top: 20px;\n  height: 100%;\n  padding: 0 10px; }\n  .q-grid.q-grid-theme-material .q-grid-selection-bar label {\n    font-weight: bold; }\n  .q-grid.q-grid-theme-material .q-grid-selection-bar ul {\n    list-style-type: none;\n    margin: 0;\n    display: inline-block;\n    padding: 0; }\n    .q-grid.q-grid-theme-material .q-grid-selection-bar ul li {\n      display: inline-block; }\n  .q-grid.q-grid-theme-material .q-grid-selection-bar button {\n    background: transparent;\n    border: none;\n    margin-right: 12px; }\n  .q-grid.q-grid-theme-material .q-grid-selection-bar select {\n    background: transparent;\n    border: none;\n    width: 90px; }\n  .q-grid.q-grid-theme-material .q-grid-selection-bar md-input-container {\n    margin: 0; }\n    .q-grid.q-grid-theme-material .q-grid-selection-bar md-input-container .md-errors-spacer {\n      height: 0;\n      min-height: 0; }\n\n.q-grid.q-grid-theme-material td.q-grid-group button {\n  background: transparent;\n  border: none; }\n\n.q-grid.q-grid-theme-material .q-grid-view thead tr:last-child th.q-grid-pivot {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.q-grid.q-grid-theme-material .q-grid-view thead th.q-grid-pivot {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-left: 1px solid rgba(0, 0, 0, 0.12);\n  padding: 0; }\n  .q-grid.q-grid-theme-material .q-grid-view thead th.q-grid-pivot:nth-last-child(2) {\n    border-right: 1px solid rgba(0, 0, 0, 0.12); }\n\n.q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-drag) th:hover .q-grid-sort {\n  visibility: visible; }\n\n.q-grid.q-grid-theme-material .q-grid-sort {\n  position: absolute;\n  display: inline;\n  cursor: pointer;\n  visibility: hidden;\n  font-size: 12px;\n  width: 16px;\n  outline: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  left: 0;\n  margin-top: -1px; }\n  .q-grid.q-grid-theme-material .q-grid-sort.q-grid-active {\n    visibility: visible; }\n    .q-grid.q-grid-theme-material .q-grid-sort.q-grid-active md-icon {\n      color: rgba(0, 0, 0, 0.87); }\n    .q-grid.q-grid-theme-material .q-grid-sort.q-grid-active + label {\n      color: rgba(0, 0, 0, 0.87); }\n  .q-grid.q-grid-theme-material .q-grid-sort md-icon {\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 16px;\n    height: 16px;\n    width: 16px;\n    min-height: 16px;\n    min-width: 16px; }\n\n.q-grid.q-grid-theme-material td md-checkbox .md-label, .q-grid.q-grid-theme-material th md-checkbox .md-label {\n  display: none; }\n\n.q-grid.q-grid-theme-material td.q-grid-edit {\n  overflow: visible !important; }\n  .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor {\n    position: absolute;\n    width: 160px;\n    height: 40px;\n    border-radius: 4px;\n    background-color: #fcfcfc;\n    color: rgba(0, 0, 0, 0.87);\n    padding: 24px;\n    left: 4px;\n    top: 0;\n    box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    flex-direction: column;\n    z-index: 1;\n    box-sizing: content-box; }\n    .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor md-input-container {\n      padding: 0;\n      margin: 0; }\n    .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-text-area {\n      height: 160px;\n      width: 300px; }\n      .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-text-area textarea {\n        height: 150px !important; }\n    .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-date {\n      width: 200px !important;\n      height: 110px !important; }\n      .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-date .md-datepicker-button {\n        margin-left: 0;\n        padding: 0;\n        width: 24px;\n        height: 24px; }\n      .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-date .md-datepicker-triangle-button {\n        margin-right: 0;\n        padding: 0;\n        width: 24px;\n        height: 24px; }\n    .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor h2 {\n      margin-top: 0; }\n    .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-array {\n      min-height: 120px;\n      width: 400px;\n      height: inherit;\n      padding-bottom: 0; }\n      .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-array .q-grid-array-view {\n        max-height: 400px;\n        overflow-y: auto; }\n    .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-url, .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-email {\n      height: auto;\n      width: 270px;\n      padding-bottom: 0; }\n      .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-url .q-grid-url-fields,\n      .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-url .q-grid-email-fields, .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-email .q-grid-url-fields,\n      .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-email .q-grid-email-fields {\n        padding-top: 8px; }\n    .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file {\n      height: auto;\n      width: 270px;\n      padding-bottom: 0; }\n      .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file h2 {\n        text-align: left; }\n      .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file .q-grid-file-upload-area {\n        position: relative;\n        border: 1px dashed rgba(0, 0, 0, 0.12);\n        text-align: center;\n        height: 120px; }\n        .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file .q-grid-file-upload-area .q-grid-file-upload-message {\n          position: relative;\n          top: 40%; }\n          .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file .q-grid-file-upload-area .q-grid-file-upload-message span {\n            overflow: hidden;\n            text-overflow: ellipsis; }\n          .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file .q-grid-file-upload-area .q-grid-file-upload-message md-icon {\n            margin: 0 5px; }\n        .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file .q-grid-file-upload-area.q-grid-file-has-preview .q-grid-file-upload-message {\n          visibility: hidden; }\n        .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file .q-grid-file-upload-area .q-grid-file-upload-filename {\n          padding: 10px;\n          font-weight: bold;\n          color: rgba(0, 0, 0, 0.54); }\n        .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file .q-grid-file-upload-area input {\n          opacity: 0;\n          position: absolute;\n          height: 100%;\n          width: 100%;\n          left: 0;\n          top: 0;\n          z-index: 2; }\n        .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file .q-grid-file-upload-area .q-grid-file-preview {\n          opacity: 1;\n          position: absolute;\n          left: 0;\n          top: 0;\n          height: 100%;\n          width: 100%;\n          vertical-align: middle;\n          text-align: center; }\n          .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file .q-grid-file-upload-area .q-grid-file-preview img {\n            position: relative;\n            max-height: 100%;\n            max-width: 100%;\n            z-index: 3; }\n      .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file .q-grid-file-upload-area:hover {\n        background-color: #f5f5f5; }\n        .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file .q-grid-file-upload-area:hover .q-grid-file-preview {\n          opacity: 0;\n          transition: opacity .2s ease-in-out; }\n          .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file .q-grid-file-upload-area:hover .q-grid-file-preview img {\n            z-index: 1; }\n        .q-grid.q-grid-theme-material td.q-grid-edit .q-grid-editor.q-grid-file .q-grid-file-upload-area:hover .q-grid-file-upload-message {\n          visibility: visible; }\n  .q-grid.q-grid-theme-material td.q-grid-edit.q-grid-dropdown md-select {\n    margin: 5px 0;\n    max-height: 30px; }\n  .q-grid.q-grid-theme-material td.q-grid-edit.q-grid-autocomplete md-autocomplete {\n    min-width: 30px;\n    background-color: transparent; }\n  .q-grid.q-grid-theme-material td.q-grid-edit.q-grid-autocomplete md-autocomplete-wrap {\n    box-shadow: none; }\n  .q-grid.q-grid-theme-material td.q-grid-edit.q-grid-autocomplete input {\n    border-color: rgba(0, 0, 0, 0.12);\n    border-width: 0 0 1px 0;\n    border-radius: 0;\n    border-style: solid;\n    line-height: 26px;\n    padding: 2px 2px 1px 2px;\n    height: 30px; }\n  .q-grid.q-grid-theme-material td.q-grid-edit.q-grid-autocomplete:not(.q-grid-selected) input {\n    border-color: #3f51b5;\n    border-width: 0 0 2px 0; }\n  .q-grid.q-grid-theme-material td.q-grid-edit md-checkbox {\n    margin: 0; }\n\n.q-grid.q-grid-theme-material .q-grid-editor.q-grid-reference {\n  height: 350px;\n  width: 500px; }\n\n.q-grid.q-grid-theme-material .q-grid-actions .md-button {\n  margin: 8px 0 8px 8px;\n  float: right; }\n\n.q-grid.q-grid-theme-material .q-grid-visibility ul {\n  list-style-type: none; }\n\n.q-grid.q-grid-theme-material .q-grid-toolbar .q-grid-column-chooser .q-grid-column-chooser-filter {\n  margin-top: 18px; }\n\n.q-grid.q-grid-theme-material .q-grid-column-chooser {\n  width: 320px; }\n  .q-grid.q-grid-theme-material .q-grid-column-chooser ul {\n    list-style-type: none;\n    padding: 0; }\n  .q-grid.q-grid-theme-material .q-grid-column-chooser md-checkbox {\n    margin: 0 0 10px 0; }\n  .q-grid.q-grid-theme-material .q-grid-column-chooser .q-grid-column-chooser-filter {\n    margin-left: 4px;\n    margin-right: 4px;\n    margin-bottom: 0;\n    margin-top: 0; }\n    .q-grid.q-grid-theme-material .q-grid-column-chooser .q-grid-column-chooser-filter .md-errors-spacer {\n      display: none; }\n  .q-grid.q-grid-theme-material .q-grid-column-chooser .q-grid-column-chooser-list {\n    margin: 0;\n    overflow-y: auto;\n    height: 340px; }\n    .q-grid.q-grid-theme-material .q-grid-column-chooser .q-grid-column-chooser-list md-input-container {\n      margin: 0; }\n  .q-grid.q-grid-theme-material .q-grid-column-chooser .q-grid-column-chooser-actions {\n    padding: 7px 0; }\n\n.q-grid.q-grid-theme-material .q-grid-progress {\n  position: absolute;\n  width: 100%; }\n\n.q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-drag) tbody td.q-grid-highlighted, .q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-drag) tbody tr.q-grid-highlighted {\n  background-color: #eee; }\n\n.q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-drag) tbody td.q-grid-focus, .q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-drag) tbody tr.q-grid-focus {\n  background-color: #ddd !important; }\n\n.q-grid.q-grid-theme-material .q-grid-highlight-part {\n  background-color: yellow;\n  color: #000; }\n\n.q-grid.q-grid-theme-material.q-grid-popup-panel md-card {\n  margin: 0; }\n  .q-grid.q-grid-theme-material.q-grid-popup-panel md-card md-card-content {\n    max-height: 500px;\n    overflow: hidden; }\n  .q-grid.q-grid-theme-material.q-grid-popup-panel md-card md-card-header {\n    width: 100%;\n    padding: 0;\n    background-color: #fff; }\n    .q-grid.q-grid-theme-material.q-grid-popup-panel md-card md-card-header md-card-title {\n      padding: 0; }\n      .q-grid.q-grid-theme-material.q-grid-popup-panel md-card md-card-header md-card-title md-card-title-text {\n        margin-left: 10px; }\n        .q-grid.q-grid-theme-material.q-grid-popup-panel md-card md-card-header md-card-title md-card-title-text .md-subhead {\n          line-height: 30px;\n          vertical-align: middle; }\n    .q-grid.q-grid-theme-material.q-grid-popup-panel md-card md-card-header .md-icon-button {\n      padding: 0;\n      margin: 0;\n      max-height: 30px;\n      min-height: 20px; }\n\n.q-grid.q-grid-theme-material.q-grid-box:not(.q-grid-drag) th:hover .q-grid-column-filter {\n  visibility: visible; }\n\n.q-grid.q-grid-theme-material .q-grid-column-filter {\n  visibility: hidden;\n  position: absolute;\n  right: 0;\n  top: calc(50% - 8px); }\n  .q-grid.q-grid-theme-material .q-grid-column-filter.q-grid-active {\n    visibility: visible; }\n    .q-grid.q-grid-theme-material .q-grid-column-filter.q-grid-active md-icon {\n      color: rgba(0, 0, 0, 0.87); }\n    .q-grid.q-grid-theme-material .q-grid-column-filter.q-grid-active + label {\n      color: rgba(0, 0, 0, 0.87); }\n  .q-grid.q-grid-theme-material .q-grid-column-filter button {\n    font-size: 12px;\n    width: 16px;\n    min-width: 16px;\n    min-height: 16px;\n    height: 16px;\n    outline: none;\n    border: none;\n    background: transparent;\n    padding: 0;\n    left: 0;\n    margin: 0 2px; }\n    .q-grid.q-grid-theme-material .q-grid-column-filter button md-icon {\n      color: rgba(0, 0, 0, 0.54);\n      font-size: 16px;\n      height: 16px;\n      width: 16px;\n      min-height: 16px;\n      min-width: 16px; }\n\n.q-grid.q-grid-theme-material .q-grid-column-filter-panel {\n  width: 320px; }\n  .q-grid.q-grid-theme-material .q-grid-column-filter-panel ul {\n    list-style-type: none;\n    padding: 0; }\n  .q-grid.q-grid-theme-material .q-grid-column-filter-panel md-input-container {\n    margin: 0;\n    width: 100%; }\n  .q-grid.q-grid-theme-material .q-grid-column-filter-panel md-checkbox {\n    margin: 0 0 10px 0; }\n  .q-grid.q-grid-theme-material .q-grid-column-filter-panel .q-grid-column-filter-filter {\n    margin-left: 4px;\n    margin-right: 4px;\n    margin-bottom: 0;\n    margin-top: 0; }\n    .q-grid.q-grid-theme-material .q-grid-column-filter-panel .q-grid-column-filter-filter .md-errors-spacer {\n      display: none; }\n  .q-grid.q-grid-theme-material .q-grid-column-filter-panel .q-grid-column-filter-list {\n    overflow-y: auto;\n    height: 376px; }\n    .q-grid.q-grid-theme-material .q-grid-column-filter-panel .q-grid-column-filter-list ul {\n      margin: 0; }\n  .q-grid.q-grid-theme-material .q-grid-column-filter-panel .q-grid-column-filter-actions {\n    padding: 7px 0; }\n\n.q-grid.q-grid-theme-material .q-grid-edit-form-panel {\n  width: 550px;\n  height: 450px; }\n  .q-grid.q-grid-theme-material .q-grid-edit-form-panel .q-grid-edit-form-panel-body {\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 10px 20px 0 0; }\n  .q-grid.q-grid-theme-material .q-grid-edit-form-panel .q-grid-edit-form-reference {\n    height: 300px;\n    margin-bottom: 40px; }\n  .q-grid.q-grid-theme-material .q-grid-edit-form-panel .q-grid-edit-form-panel-actions {\n    margin-bottom: -20px; }\n    .q-grid.q-grid-theme-material .q-grid-edit-form-panel .q-grid-edit-form-panel-actions .md-button {\n      margin: 8px 0 8px 8px;\n      float: right; }\n  .q-grid.q-grid-theme-material .q-grid-edit-form-panel md-input-container {\n    margin: 0;\n    width: 100%; }\n  .q-grid.q-grid-theme-material .q-grid-edit-form-panel .md-datepicker-input-container {\n    width: 100%; }\n    .q-grid.q-grid-theme-material .q-grid-edit-form-panel .md-datepicker-input-container .md-input {\n      max-width: none; }\n  .q-grid.q-grid-theme-material .q-grid-edit-form-panel h4.md-title {\n    margin-top: 0; }\n\n.q-grid.q-grid-theme-material .q-grid-edit-form-popup h2 {\n  margin: 0 0 0 0; }\n\n.q-grid.q-grid-theme-material .q-grid-edit-form-popup md-icon {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n  min-height: 16px;\n  min-width: 16px; }\n", ""]);

// exports


/***/ }),
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
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
/* 579 */
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <q-grid [rows]=\"rows\">\r\n    <q-grid-columns [generation]=\"'deep'\"></q-grid-columns>\r\n  </q-grid>\r\n</md-card>\r\n"

/***/ }),
/* 580 */
/***/ (function(module, exports) {

module.exports = "<tr *ngFor=\"let $row of $view.body.rows; let $rowIndex = index\"\r\n    [q-grid-core-tr]=\"$view\">\r\n  <td *ngFor=\"let $column of $view.body.columns; let $columnIndex = index\">\r\n    <ng-container q-grid-core-td\r\n                  [q-grid-core-column-index]=\"$columnIndex\"\r\n                  [q-grid-core-row-index]=\"$rowIndex\">\r\n    </ng-container>\r\n  </td>\r\n</tr>\r\n\r\n"

/***/ }),
/* 581 */
/***/ (function(module, exports) {

module.exports = "<tr *ngFor=\"let $row of $view.foot.rows; let $rowIndex = index\">\r\n  <td *ngFor=\"let $column of $view.foot.columns; let $columnIndex = index\"\r\n      [attr.rowspan]=\"$column.rowspan\"\r\n      [attr.colspan]=\"$column.colspan\">\r\n    <ng-container q-grid-core-tf\r\n                  [q-grid-core-column-index]=\"$columnIndex\"\r\n                  [q-grid-core-row-index]=\"$rowIndex\">\r\n    </ng-container>\r\n  </td>\r\n</tr>\r\n"

/***/ }),
/* 582 */
/***/ (function(module, exports) {

module.exports = "<tr *ngFor=\"let $row of $view.head.rows; let $rowIndex = index\">\n  <th *ngFor=\"let $column of $row; let $columnIndex = index\"\n      (mouseenter)=\"$view.highlight.column.execute($column.model, true)\"\n      (mouseleave)=\"$view.highlight.column.execute($column.model, false)\"\n      [attr.rowspan]=\"$column.rowspan\"\n      [attr.colspan]=\"$column.colspan\"\n      q-grid-drag=\"$view.head.transfer($column.model)\"\n      q-grid-drop=\"$view.head.transfer($column.model)\"\n      q-grid-on-drop=\"$view.head.drop.execute($event)\"\n      q-grid-can-drop=\"$view.head.drop.canExecute($event)\"\n      q-grid-can-drag=\"$view.head.drag.canExecute($event)\"\n      q-grid-resizable=\"$view.head.resize.canExecute($event)\"\n      q-grid-resize=\"$column.model.key\"\n      q-grid-resize-path=\"columns\"\n      q-grid-can-resize=\"$view.head.resize.canExecute($event)\">\n    <ng-container q-grid-core-th\n                  [q-grid-core-column-index]=\"$columnIndex\"\n                  [q-grid-core-row-index]=\"$rowIndex\">\n    </ng-container>\n  </th>\n</tr>\n"

/***/ }),
/* 583 */
/***/ (function(module, exports) {

module.exports = "<ng-container key=\"toolbar-{{position}}.tpl.html\"></ng-container>\n"

/***/ }),
/* 584 */
/***/ (function(module, exports) {

module.exports = "<table q-grid-markup=\"table\" tabindex=\"0\">\r\n  <thead *ngIf=\"visibility.head\"\r\n         q-grid-core-head\r\n         q-grid-markup=\"head\"\r\n         q-grid-animate=\"false\"\r\n         q-grid-core-head>\r\n  </thead>\r\n  <tbody *ngIf=\"visibility.body\"\r\n         q-grid-markup=\"body\"\r\n         q-grid-animate=\"false\"\r\n         vscroll\r\n         vscroll-port-y=\"$view.scroll.y\"\r\n         q-grid-core-body>\r\n  </tbody>\r\n  <tfoot *ngIf=\"visibility.foot\"\r\n         q-grid-markup=\"foot\"\r\n         q-grid-animate=\"false\"\r\n         q-grid-core-foot>\r\n  </tfoot>\r\n</table>\r\n"

/***/ }),
/* 585 */
/***/ (function(module, exports) {

module.exports = "<q-grid-theme></q-grid-theme>\n<q-grid-box class=\"q-grid-box layout-column\">\n  <q-grid-core-toolbar position=\"top\"\n                       class=\"q-grid-toolbar q-grid-toolbar-top flex-auto\"\n                       *ngIf=\"visibility.toolbar.top\">\n  </q-grid-core-toolbar>\n  <div class=\"flex-100 layout-row\"\n       [ngClass]=\"{\n\t\t  \t'q-grid-with-left-pin': visibility.pin.left,\n\t\t  \t'q-grid-with-right-pin': visibility.pin.right\n\t\t  }\">\n    <q-grid-core-toolbar position=\"left\"\n                         class=\"q-grid-toolbar q-grid-toolbar-left flex-auto\"\n                         *ngIf=\"visibility.toolbar.left\">\n    </q-grid-core-toolbar>\n    <q-grid-core-view *ngIf=\"visibility.pin.left\"\n                      class=\"q-grid-view q-grid-view-left layout-column\"\n                      pin=\"left\"\n                      q-grid-markup=\"view\">\n    </q-grid-core-view>\n    <q-grid-core-view class=\"q-grid-view q-grid-view-center layout-column flex\"\n                      q-grid-markup=\"view\">\n    </q-grid-core-view>\n    <q-grid-core-view *ngIf=\"visibility.pin.right\"\n                      pin=\"right\"\n                      class=\"q-grid-view q-grid-view-right layout-column\"\n                      q-grid-markup=\"view\">\n    </q-grid-core-view>\n    <q-grid-core-toolbar position=\"right\"\n                         class=\"q-grid-toolbar q-grid-toolbar-right flex-auto\"\n                         *ngIf=\"visibility.toolbar.right\">\n    </q-grid-core-toolbar>\n  </div>\n  <q-grid-core-toolbar position=\"bottom\"\n                       class=\"q-grid-toolbar q-grid-toolbar-bottom flex-auto\"\n                       *ngIf=\"visibility.toolbar.bottom\">\n  </q-grid-core-toolbar>\n</q-grid-box>\n"

/***/ }),
/* 586 */
/***/ (function(module, exports) {

module.exports = "<ng-container key=\"plugin-pager.tpl.html\" [context]=\"context\"></ng-container>\n"

/***/ }),
/* 587 */
/***/ (function(module, exports) {

module.exports = "<ng-container key=\"plugin-progress.tpl.html\" [context]=\"context\"></ng-container>\n"

/***/ }),
/* 588 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-text.tpl.html' let-$cell>\n  <span>{{$cell.value}}</span>\n</ng-template>\n"

/***/ }),
/* 589 */
/***/ (function(module, exports) {

module.exports = "<ng-template key='body-cell-text.tpl.html' let-$cell>\n  <span>{{$cell.value}}</span>\n</ng-template>\n"

/***/ }),
/* 590 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"head-cell-text.tpl.html\" let-$cell let-$view=\"$view\">\n  <div (click)=\"$view.sort.toggle.execute($cell.column)\"\n       (mouseover)=\"$view.sort.hover = true\"\n       (mouseleave)=\"$view.sort.hover = false\">\n    <div class=\"q-grid-sort\"\n         [ngClass]=\"{'q-grid-active': $view.sort.order($cell.column) >= 0}\"\n         *ngIf=\"$cell.column.canSort\"\n         [ngSwitch]=\"$view.sort.direction($cell.column)\">\n      <md-icon class=\"q-grid-asc\" *ngSwitchCase=\"'asc'\">arrow_downward</md-icon>\n      <md-icon class=\"q-grid-desc\" *ngSwitchCase=\"'desc'\">arrow_upward</md-icon>\n      <ng-container *ngSwitchDefault>\n        <md-icon *ngIf=\"$view.sort.hover\">arrow_downward</md-icon>\n      </ng-container>\n    </div>\n    <label [mdTooltip]=\"$cell.column.title\">\n      {{$cell.column.title}}\n    </label>\n  </div>\n  <!--<q-grid:column-filter ng-if=\"$cell.column.canFilter\"-->\n  <!--class=\"q-grid-column-filter\"-->\n  <!--key=\"$cell.column.key\"-->\n  <!--title=\"{{$cell.column.title}}\"-->\n  <!--ng-class=\"{'q-grid-active': $view.filter.has($cell.column)}\">-->\n  <!--</q-grid:column-filter>-->\n</ng-template>\n"

/***/ }),
/* 591 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"plugin-pager.tpl.html\" let-$pager>\n  <div class=\"q-grid-pager\" [ngSwitch]=\"$pager.scroll.mode\">\n    <div *ngSwitchCase=\"'virtual'\">\n      <label class=\"q-grid-page\" [ngSwitch]=\"$pager.mode\">\n        <span *ngSwitchCase=\"'row'\">{{$pager.from}}-{{$pager.to}} of {{$pager.total}}</span>\n        <span *ngSwitchDefault>{{$pager.current + 1}} of {{$pager.totalPages}}</span>\n      </label>\n    </div>\n    <div *ngSwitchDefault>\n      <label class=\"q-grid-page-size\">Rows per page:</label>\n      <md-select aria-label=\"Page Size List\"\n                 class=\"q-grid-page-size\"\n                 [(ngModel)]=\"$pager.size\">\n        <md-option *ngFor=\"let size of $pager.sizeList\" [value]=\"size\">{{size}}</md-option>\n      </md-select>\n      <label class=\"q-grid-page\" ng-switch=\"::$pager.mode\">\n        <span *ngSwitchCase=\"row\">{{$pager.from}}-{{$pager.to}} of {{$pager.total}}</span>\n        <span *ngSwitchDefault>{{$pager.current + 1}} of {{$pager.totalPages}}</span>\n      </label>\n      <button md-button\n              class=\"md-icon-button q-grid-prev-page\"\n              [disabled]=\"!$pager.prev.canExecute()\"\n              (click)=\"$pager.prev.execute();\">\n        <md-icon>keyboard_arrow_left</md-icon>\n      </button>\n      <button md-button\n              class=\"md-icon-button q-grid-next-page\"\n              [disabled]=\"!$pager.next.canExecute()\"\n              (click)=\"$pager.next.execute();\">\n        <md-icon>keyboard_arrow_right</md-icon>\n      </button>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),
/* 592 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"plugin-progress.tpl.html\" let-$progress>\n  <div class=\"q-grid-progress\" *ngIf=\"$progress.isBusy\">\n    <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n  </div>\n</ng-template>\n"

/***/ }),
/* 593 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"toolbar-bottom.tpl.html\">\n  <q-grid-pager></q-grid-pager>\n</ng-template>\n"

/***/ }),
/* 594 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"toolbar-left.tpl.html\">\n</ng-template>\n"

/***/ }),
/* 595 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"toolbar-left.tpl.html\">\n</ng-template>\n"

/***/ }),
/* 596 */
/***/ (function(module, exports) {

module.exports = "<ng-template key=\"toolbar-top.tpl.html\">\n  <h3 class=\"mat-card-title\"\n      style=\"margin: 0; height: 56px; line-height: 56px;\">\n    ANGULAR 2 QGRID SANDBOX\n  </h3>\n  <q-grid-progress></q-grid-progress>\n</ng-template>\n"

/***/ }),
/* 597 */,
/* 598 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(435);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 599 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(436);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 600 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(437);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(11))(172)

/***/ }),
/* 606 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(11))(175)

/***/ }),
/* 607 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(11))(220)

/***/ }),
/* 608 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(11))(226)

/***/ })
],[376]);
//# sourceMappingURL=main.bundle.js.map