(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-main></app-main>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/main/getting-started/getting-started-content/getting-started-content.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/main/getting-started/getting-started-content/getting-started-content.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    It is very simple to add material in the angular-application.\n</div>\n<div>\n    Here are the few steps to getting started with material design.\n</div>\n<div>\n    <ul>\n        <li>\n            Go to angular application root folder.\n        </li>\n        <li>\n            Give command <b>ng add @angular/material</b>\n        </li>\n    </ul>\n</div>\n\n<div>\n    This command will install all the supported packages automatically.\n</div>\n\n<div>\n    <ul>\n        <li>\n            Go to any module.ts file (prefer app.module.ts file), the root module.\n        </li>\n        <li>\n            We will import material component say button, expansion, dropdown etc here in app.module.ts file.\n        </li>\n        <li>\n            Lets say we have to use material button in our application.\n            <ul>\n                <li>\n                    <b>{{importModuleStr}}</b> in app.module.ts file.\n                </li>\n                <li>\n                    Add <b>MatButtonModule</b> in the imports array in app.module.ts file.\n                </li>\n                <li>\n                    Move to <b>app.component.html file (any html file)</b>.\n                </li>\n                <li>\n                    Add button as : {{buttonStr}}\n                </li>\n                <li>\n                    Run <b>ng serve</b> command and see the results.\n                </li>\n                <li> \n                    If you are seeing more beautiful button then You will ready to start to play with <b><i>material.</i></b>\n                 </li>\n            </ul>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/main/getting-started/getting-started.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/main/getting-started/getting-started.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel>\n    <mat-expansion-panel-header>\n        <mat-panel-title>\n            Getting Started\n        </mat-panel-title>\n        <mat-panel-description>\n            Total Duration: 15 mins\n        </mat-panel-description>\n    </mat-expansion-panel-header>\n    <app-getting-started-content></app-getting-started-content>\n</mat-expansion-panel>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/main/main.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/main/main.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-getting-started></app-getting-started>\n<app-typography></app-typography>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/main/typography/typography-content/typography-content.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/main/typography/typography-content/typography-content.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>We have code written corresponding to each styles.</h3> <hr>\n\n\n<div class=\"mat-display-4\">This is display 4 <span class=\"bgColor\">{{display4}}</span></div>\n<div class=\"mat-display-3\">This is display 3 <span class=\"bgColor\">{{display3}}</span></div>\n<div class=\"mat-display-2\">This is display 2 <span class=\"bgColor\">{{display2}}</span></div>\n<div class=\"mat-display-1\">This is display 1 <span class=\"bgColor\">{{display1}}</span></div>\n\n\n<hr>\n\n<div class=\"mat-headline\">This is a heading for h1 <span class=\"bgColor\">{{headline}}</span></div>\n<div class=\"mat-title\">This is a heading for h2 <span class=\"bgColor\">{{title}}</span></div>\n<div class=\"mat-subheading-2\">This is a heading for h3 <span class=\"bgColor\">{{subheading2}}</span></div>\n<div class=\"mat-subheading-1\">This is a heading for h4 <span class=\"bgColor\">{{subheading1}}</span></div>\n\n<hr>\n\n<div class=\"mat-body-1\">This is a body text <span class=\"bgColor\">{{body1}}</span></div>\n<div class=\"mat-body-2\">This is a bold body text <span class=\"bgColor\">{{body2}}</span></div>\n<div class=\"mat-caption\">This is a caption text <span class=\"bgColor\">{{caption}}</span></div>\n\n<hr>\n<h3>We have one generic class for typography.</h3>\n<div class=\"bgColor\">{{generalTypography}}</div>\n<div class=\"mat-typography\">\n    <h1>This is a heading for h1</h1>\n    <h2>This is a heading for h2</h2>\n    <h3>This is a heading for h3</h3>\n    <h4>This is a heading for h4</h4>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/main/typography/typography.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/main/typography/typography.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel>\n    <mat-expansion-panel-header>\n        <mat-panel-title>\n            Typography\n        </mat-panel-title>\n        <mat-panel-description>\n            Total Duration: 10 mins\n        </mat-panel-description>\n    </mat-expansion-panel-header>\n    <app-typography-content></app-typography-content>\n</mat-expansion-panel>\n\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'material-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_main_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main/getting-started/getting-started.component */ "./src/app/components/main/getting-started/getting-started.component.ts");
/* harmony import */ var _components_main_getting_started_getting_started_content_getting_started_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main/getting-started/getting-started-content/getting-started-content.component */ "./src/app/components/main/getting-started/getting-started-content/getting-started-content.component.ts");
/* harmony import */ var _components_main_typography_typography_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main/typography/typography.component */ "./src/app/components/main/typography/typography.component.ts");
/* harmony import */ var _components_main_typography_typography_content_typography_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main/typography/typography-content/typography-content.component */ "./src/app/components/main/typography/typography-content/typography-content.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_main_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_8__["GettingStartedComponent"],
            _components_main_getting_started_getting_started_content_getting_started_content_component__WEBPACK_IMPORTED_MODULE_9__["GettingStartedContentComponent"],
            _components_main_typography_typography_component__WEBPACK_IMPORTED_MODULE_10__["TypographyComponent"],
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
            _components_main_typography_typography_content_typography_content_component__WEBPACK_IMPORTED_MODULE_11__["TypographyContentComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/main/getting-started/getting-started-content/getting-started-content.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/main/getting-started/getting-started-content/getting-started-content.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLWNvbnRlbnQvZ2V0dGluZy1zdGFydGVkLWNvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/main/getting-started/getting-started-content/getting-started-content.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/main/getting-started/getting-started-content/getting-started-content.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: GettingStartedContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedContentComponent", function() { return GettingStartedContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GettingStartedContentComponent = class GettingStartedContentComponent {
    constructor() {
        this.importModuleStr = `import {MatButtonModule} from '@angular/material/button';`;
        this.buttonStr = `<button mat-button>My Awesome Button</button>`;
    }
    ngOnInit() {
    }
};
GettingStartedContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-getting-started-content',
        template: __webpack_require__(/*! raw-loader!./getting-started-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/main/getting-started/getting-started-content/getting-started-content.component.html"),
        styles: [__webpack_require__(/*! ./getting-started-content.component.scss */ "./src/app/components/main/getting-started/getting-started-content/getting-started-content.component.scss")]
    })
], GettingStartedContentComponent);



/***/ }),

/***/ "./src/app/components/main/getting-started/getting-started.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/main/getting-started/getting-started.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/main/getting-started/getting-started.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/main/getting-started/getting-started.component.ts ***!
  \******************************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GettingStartedComponent = class GettingStartedComponent {
    constructor() { }
    ngOnInit() {
    }
};
GettingStartedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-getting-started',
        template: __webpack_require__(/*! raw-loader!./getting-started.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/main/getting-started/getting-started.component.html"),
        styles: [__webpack_require__(/*! ./getting-started.component.scss */ "./src/app/components/main/getting-started/getting-started.component.scss")]
    })
], GettingStartedComponent);



/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/components/main/typography/typography-content/typography-content.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/main/typography/typography-content/typography-content.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgColor {\n  background-color: bisque;\n  font-size: smaller !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS1jb250ZW50L0M6XFxVc2Vyc1xca2Fybmt1bWFcXERlc2t0b3BcXHNlbGZfc3R1ZHlcXEFuZ3VsYXItbWF0ZXJpYWwtdHV0b3JpYWxcXFVJXFxtYXRlcmlhbC1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW5cXHR5cG9ncmFwaHlcXHR5cG9ncmFwaHktY29udGVudFxcdHlwb2dyYXBoeS1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vdHlwb2dyYXBoeS90eXBvZ3JhcGh5LWNvbnRlbnQvdHlwb2dyYXBoeS1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS1jb250ZW50L3R5cG9ncmFwaHktY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ0NvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyICFpbXBvcnRhbnQ7XHJcbn0iLCIuYmdDb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcbiAgZm9udC1zaXplOiBzbWFsbGVyICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/main/typography/typography-content/typography-content.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/main/typography/typography-content/typography-content.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TypographyContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyContentComponent", function() { return TypographyContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TypographyContentComponent = class TypographyContentComponent {
    constructor() {
        this.display1 = `<div class="mat-display-1">This is display 1</div>`;
        this.display2 = `<div class="mat-display-2">This is display 1</div>`;
        this.display3 = `<div class="mat-display-3">This is display 1</div>`;
        this.display4 = `<div class="mat-display-4">This is display 1</div>`;
        this.headline = `<div class="mat-headline">This is a heading for h1</div>`;
        this.title = `<div class="mat-title">This is a heading for h2</div>`;
        this.subheading2 = `<div class="mat-subheading-2">This is a heading for h3</div>`;
        this.subheading1 = `<div class="mat-subheading-1">This is a heading for h4</div>`;
        this.body1 = `<div class="mat-body-1">This is a body text</div>`;
        this.body2 = `<div class="mat-body-2">This is a bold body text</div>`;
        this.caption = `<div class="mat-body-1">This is a caption text</div>`;
        this.generalTypography = `<div class="mat-typography"> \n 
  <h1>This is a heading for h1</h1>
  <h2>This is a heading for h2</h2>
  <h3>This is a heading for h3</h3>
  <h4>This is a heading for h4</h4>
</div>`;
    }
    ngOnInit() {
    }
};
TypographyContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-typography-content',
        template: __webpack_require__(/*! raw-loader!./typography-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/main/typography/typography-content/typography-content.component.html"),
        styles: [__webpack_require__(/*! ./typography-content.component.scss */ "./src/app/components/main/typography/typography-content/typography-content.component.scss")]
    })
], TypographyContentComponent);



/***/ }),

/***/ "./src/app/components/main/typography/typography.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/main/typography/typography.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi90eXBvZ3JhcGh5L3R5cG9ncmFwaHkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/main/typography/typography.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/main/typography/typography.component.ts ***!
  \********************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TypographyComponent = class TypographyComponent {
    constructor() { }
    ngOnInit() {
    }
};
TypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-typography',
        template: __webpack_require__(/*! raw-loader!./typography.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/main/typography/typography.component.html"),
        styles: [__webpack_require__(/*! ./typography.component.scss */ "./src/app/components/main/typography/typography.component.scss")]
    })
], TypographyComponent);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




const MaterialComponents = [
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            MaterialComponents
        ],
        exports: [MaterialComponents]
    })
], MaterialModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\karnkuma\Desktop\self_study\Angular-material-tutorial\UI\material-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map