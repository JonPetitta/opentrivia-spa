webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".open-trivia-title {\r\n    color: white;\r\n    background: #984B43;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <h1 class=\"row justify-content-center open-trivia-title p-4 mb-3\">\n    {{ title }}\n  </h1>\n  <app-otquestion></app-otquestion>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__open_trivia_db_service__ = __webpack_require__("../../../../../src/app/open-trivia-db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Open Trivia Demo';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__open_trivia_db_service__["a" /* OpenTriviaDbService */]]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__otmenu_otmenu_component__ = __webpack_require__("../../../../../src/app/otmenu/otmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__otquestion_otquestion_component__ = __webpack_require__("../../../../../src/app/otquestion/otquestion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__otresults_otresults_component__ = __webpack_require__("../../../../../src/app/otresults/otresults.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__open_trivia_db_service__ = __webpack_require__("../../../../../src/app/open-trivia-db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__otmenu_otmenu_component__["a" /* OtmenuComponent */],
            __WEBPACK_IMPORTED_MODULE_8__otquestion_otquestion_component__["a" /* OtquestionComponent */],
            __WEBPACK_IMPORTED_MODULE_9__otresults_otresults_component__["a" /* OtresultsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__open_trivia_db_service__["a" /* OpenTriviaDbService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/open-trivia-db.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenTriviaDbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpenTriviaDbService = (function () {
    function OpenTriviaDbService(http) {
        this.http = http;
        this.baseUrl = 'https://opentdb.com/';
        this.questionEndpoint = 'api.php';
        this.tokenEndpoint = 'api_token.php';
        this.categoryEndpoint = 'api_category.php';
    }
    OpenTriviaDbService.prototype.getToken = function () {
        var tokenUrl = this.baseUrl +
            this.tokenEndpoint +
            '?command=request';
        return this.http.get(tokenUrl)
            .map(function (res) { return res.json(); });
    };
    OpenTriviaDbService.prototype.categories = function () {
        var categoryUrl = this.baseUrl +
            this.categoryEndpoint;
        return this.http.get(categoryUrl)
            .map(function (res) { return res.json(); });
    };
    OpenTriviaDbService.prototype.getQuestion = function (token, category, difficulty, type) {
        var questionUrl = this.baseUrl +
            this.questionEndpoint;
        var queryParams = this.formatQueryParams(token, category, difficulty, type);
        return this.http.get(questionUrl + queryParams)
            .map(function (res) { return res.json(); });
    };
    OpenTriviaDbService.prototype.formatQueryParams = function (token, category, difficulty, type) {
        var queryParams = "?amount=1&token=" + token;
        if (undefined != category) {
            queryParams += "&category=" + category;
        }
        if (undefined != difficulty) {
            queryParams += "&difficulty=" + difficulty;
        }
        if (undefined != type) {
            queryParams += "&type=" + type;
        }
        return queryParams;
    };
    return OpenTriviaDbService;
}());
OpenTriviaDbService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], OpenTriviaDbService);

var _a;
//# sourceMappingURL=open-trivia-db.service.js.map

/***/ }),

/***/ "../../../../../src/app/otmenu/otmenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/otmenu/otmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4 pt-2 pb-2\">\n    \n    <span *ngIf=\"!categories\"><em>Loading...</em></span>\n    \n    <div ngbDropdown \n         class=\"d-inline-block\"\n         *ngIf=\"categories\">\n      <button class=\"btn btn-outline-secondary\" id=\"catDrop\" ngbDropdownToggle>\n        Category\n      </button>\n      <div ngbDropdownMenu aria-labelledby=\"catDrop\">\n        <button class=\"dropdown-item\"\n                (click)=\"setCategory(0)\">\n          Any\n        </button>\n        <button class=\"dropdown-item\"\n                *ngFor=\"let category of categories\"\n                (click)=\"setCategory(category.id)\">\n          {{ category.name }}\n        </button>\n      </div>\n    </div>\n    \n  </div>\n  <div class=\"col-sm-4 pt-2 pb-2\">\n\n    <div ngbDropdown \n         class=\"d-inline-block\">\n      <button class=\"btn btn-outline-secondary\" id=\"catDrop\" ngbDropdownToggle>\n        Difficulty\n      </button>\n      <div ngbDropdownMenu aria-labelledby=\"catDrop\">\n        <button class=\"dropdown-item\"\n                *ngFor=\"let difficulty of difficulties\"\n                (click)=\"setDifficulty(difficulty.Value)\">\n          {{ difficulty.Name }}\n        </button>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"col-sm-4 pt-2 pb-4\">\n\n    <div ngbDropdown \n         class=\"d-inline-block\">\n      <button class=\"btn btn-outline-secondary\" id=\"catDrop\" ngbDropdownToggle>\n        Type\n      </button>\n      <div ngbDropdownMenu aria-labelledby=\"catDrop\">\n        <button class=\"dropdown-item\"\n                *ngFor=\"let type of types\"\n                (click)=\"setType(type.Value)\">\n          {{ type.Name }}\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/otmenu/otmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__open_trivia_db_service__ = __webpack_require__("../../../../../src/app/open-trivia-db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OtmenuComponent = (function () {
    function OtmenuComponent(openTriviaDB) {
        this.openTriviaDB = openTriviaDB;
        this.onCatagorySelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onDifficultySelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onTypeSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.difficulties = [{ Name: "Any", Value: "any" },
            { Name: "Easy", Value: "easy" },
            { Name: "Medium", Value: "medium" },
            { Name: "Hard", Value: "hard" }];
        this.types = [{ Name: "Any", Value: "any" },
            { Name: "Multiple Choice", Value: "multiple" },
            { Name: "True / False", Value: "boolean" }];
    }
    OtmenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.openTriviaDB.categories()
            .subscribe(function (res) {
            _this.categories = res.trivia_categories;
        }, function (error) { return console.error(error); });
    };
    OtmenuComponent.prototype.setCategory = function (id) {
        this.onCatagorySelect.emit(id);
    };
    OtmenuComponent.prototype.setDifficulty = function (difficulty) {
        this.onDifficultySelect.emit(difficulty);
    };
    OtmenuComponent.prototype.setType = function (type) {
        this.onTypeSelect.emit(type);
    };
    return OtmenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], OtmenuComponent.prototype, "onCatagorySelect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], OtmenuComponent.prototype, "onDifficultySelect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], OtmenuComponent.prototype, "onTypeSelect", void 0);
OtmenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-otmenu',
        template: __webpack_require__("../../../../../src/app/otmenu/otmenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/otmenu/otmenu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__open_trivia_db_service__["a" /* OpenTriviaDbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__open_trivia_db_service__["a" /* OpenTriviaDbService */]) === "function" && _a || Object])
], OtmenuComponent);

var _a;
//# sourceMappingURL=otmenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/otquestion/otquestion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hand {\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\n\r\n.hand:hover {\r\n  background-color:  rgba(52, 138, 199, 0.44) !important;\r\n}\r\n\r\n.hand-selected {\r\n  background-color:  rgba(52, 138, 199, 0.44) !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/otquestion/otquestion.component.html":
/***/ (function(module, exports) {

module.exports = "<app-otmenu (onCatagorySelect)=\"onCatagorySelect($event)\"\n            (onDifficultySelect)=\"onDifficultySelect($event)\"\n            (onTypeSelect)=\"onTypeSelect($event)\"></app-otmenu>\n\n<div class=\"row\">\n  <div class=\"col-12 pt-2 pb-2\">\n    <strong class=\"mr-3\">Question:</strong>\n    <span *ngIf=\"!question\"><em>Loading...</em></span>\n    <span *ngIf=\"question\">\n      {{ question }}\n    </span>\n  </div>\n  <hr class=\"col ml-4 mr-4 h-5 bg-dark\">\n  <div class=\"col-12 mt-3 mb-3\">\n    <span *ngIf=\"!answers\"><em>Loading...</em></span>\n    <ul class=\"list-unstyled\"\n        *ngIf=\"answers\">\n      <li class=\"m-3\"\n          *ngFor=\"let answer of answers\">\n        <div id=\"{{ answer.answerId }}\"\n             class=\"{{ baseClass }}\"\n             (click)=\"selectAnswer($event)\">\n          {{ answer.answerText }}\n        </div>\n      </li>\n    </ul>\n  </div>\n  <hr class=\"col ml-4 mr-4 h-5 bg-dark\">\n</div>\n\n<div class=\"row justify-content-center pt-4\">\n    <!-- <button mat-raised-button class=\"col-sm-4 mr-md-3 mb-3 p-2\"\n                              (click)=\"checkAnswer()\">Am I Right</button> -->\n    <ngb-alert [dismissible]=\"false\" *ngIf=\"alert\">{{ alert }}</ngb-alert>\n    <button mat-raised-button class=\"col-sm-4 mb-3 p-2\"\n                              (click)=\"nextQuestion()\">Next Question</button>\n</div>\n\n<app-otresults (onReset)=\"onReset($event)\"></app-otresults>"

/***/ }),

/***/ "../../../../../src/app/otquestion/otquestion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtquestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__otresults_otresults_component__ = __webpack_require__("../../../../../src/app/otresults/otresults.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__open_trivia_db_service__ = __webpack_require__("../../../../../src/app/open-trivia-db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OtquestionComponent = (function () {
    function OtquestionComponent(openTriviaDB) {
        this.openTriviaDB = openTriviaDB;
        this.baseClass = "hand border rounded p-2";
        this.selectedClass = "hand hand-selected border rounded p-2";
        this.selectedCorrectClass = "hand hand-selected border border-success rounded p-2";
        this.selectedWrongClass = "hand hand-selected border border-danger rounded p-2";
        this.correctClass = "hand border border-success rounded p-2";
    }
    OtquestionComponent.prototype.ngOnInit = function () {
        this.getToken();
    };
    OtquestionComponent.prototype.getToken = function () {
        var _this = this;
        this.openTriviaDB.getToken()
            .subscribe(function (res) {
            _this.tokenResponse = res;
            _this.nextQuestion();
        }, function (error) { return console.error(error); });
    };
    OtquestionComponent.prototype.selectAnswer = function (event) {
        if (undefined != this.selectedElement) {
            return;
        }
        this.selectedElement = event.srcElement;
        this.selectedElement.className = this.selectedClass;
        this.selectedAnswerId = this.selectedElement.id;
        this.checkAnswer();
    };
    OtquestionComponent.prototype.checkAnswer = function () {
        if (this.selectedAnswerId == this.correctAnswerId) {
            this.otResults.correctAnswer();
            this.markAnswerCorrect(this.selectedElement);
        }
        else {
            this.otResults.wrongAnswer();
            this.markAnswerWrong(this.selectedElement);
        }
    };
    OtquestionComponent.prototype.markAnswerCorrect = function (selection) {
        selection.className = this.selectedCorrectClass;
    };
    OtquestionComponent.prototype.markAnswerWrong = function (selection) {
        selection.className = this.selectedWrongClass;
        var grandParent = selection.parentElement.parentElement.children;
        for (var index = 0; index < grandParent.length; index++) {
            var parent = grandParent[index].children;
            for (var index2 = 0; index2 < parent.length; index2++) {
                var question = parent[index2];
                if (this.correctAnswerId == question.id) {
                    question.className = this.correctClass;
                }
            }
        }
    };
    OtquestionComponent.prototype.nextQuestion = function () {
        var _this = this;
        this.openTriviaDB.getQuestion(this.tokenResponse.token, this.categoryId, this.difficulty, this.type)
            .subscribe(function (res) {
            _this.questions = res;
            _this.formatQuestion();
        }, function (error) { return console.error(error); });
        this.selectedElement = undefined;
        this.selectedAnswerId = undefined;
    };
    OtquestionComponent.prototype.formatQuestion = function () {
        if (0 != this.questions.response_code) {
            this.setAlert(this.questions.response_code);
        }
        else {
            this.alert = undefined;
        }
        this.question = this.unescape(this.questions.results[0].question);
        var correctAnswer = this.questions.results[0].correct_answer;
        var wrongAnswers = this.questions.results[0].incorrect_answers;
        this.answers = this.formatAnswers(correctAnswer, wrongAnswers);
    };
    OtquestionComponent.prototype.setAlert = function (resCode) {
        switch (resCode) {
            case 1:
                this.alert = "No Results Could not return results. The API doesn't have enough questions for your query.";
                break;
            case 2:
                this.alert = "Invalid Parameter Contains an invalid parameter. Arguements passed in aren't valid.";
                break;
            case 3:
                this.alert = "Token Not Found Session Token does not exist.";
                break;
            case 4:
                this.alert = "Token Empty Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.";
                break;
            default:
                break;
        }
    };
    OtquestionComponent.prototype.formatAnswers = function (correctAnswer, wrongAnswers) {
        var numberAnswers = wrongAnswers.length + 1;
        var answers = new Array(numberAnswers);
        var correctId; //default zero for true/false questions
        if (correctAnswer == "True") {
            correctId = 0;
        }
        else if (correctAnswer == "False") {
            correctId = 1;
        }
        else {
            correctId = Math.floor((Math.random() * numberAnswers));
        }
        this.correctAnswerId = correctId;
        for (var index = 0; index < numberAnswers; index++) {
            if (index == correctId) {
                answers[index] = { answerId: index,
                    answerText: this.unescape(correctAnswer),
                    correct: true };
            }
            else {
                if (index < correctId) {
                    answers[index] = { answerId: index,
                        answerText: this.unescape(wrongAnswers[index]),
                        correct: false };
                }
                else {
                    answers[index] = { answerId: index,
                        answerText: this.unescape(wrongAnswers[index - 1]),
                        correct: false };
                }
            }
        }
        return answers;
    };
    OtquestionComponent.prototype.unescape = function (input) {
        var e = document.createElement('div');
        e.innerHTML = input;
        // handle case of empty input
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    };
    OtquestionComponent.prototype.onCatagorySelect = function (event) {
        if (0 == event) {
            this.categoryId = undefined;
        }
        else {
            this.categoryId = event;
        }
    };
    OtquestionComponent.prototype.onDifficultySelect = function (event) {
        if ("any" == event) {
            this.difficulty = undefined;
        }
        else {
            this.difficulty = event;
        }
    };
    OtquestionComponent.prototype.onTypeSelect = function (event) {
        if ("any" == event) {
            this.type = undefined;
        }
        else {
            this.type = event;
        }
    };
    OtquestionComponent.prototype.onReset = function (event) {
        if (event) {
            this.categoryId = undefined;
            this.difficulty = undefined;
            this.type = undefined;
            this.selectedElement = undefined;
            this.selectedAnswerId = undefined;
            this.alert = undefined;
            this.getToken();
        }
    };
    return OtquestionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__otresults_otresults_component__["a" /* OtresultsComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__otresults_otresults_component__["a" /* OtresultsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__otresults_otresults_component__["a" /* OtresultsComponent */]) === "function" && _a || Object)
], OtquestionComponent.prototype, "otResults", void 0);
OtquestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-otquestion',
        template: __webpack_require__("../../../../../src/app/otquestion/otquestion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/otquestion/otquestion.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__open_trivia_db_service__["a" /* OpenTriviaDbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__open_trivia_db_service__["a" /* OpenTriviaDbService */]) === "function" && _b || Object])
], OtquestionComponent);

var _a, _b;
//# sourceMappingURL=otquestion.component.js.map

/***/ }),

/***/ "../../../../../src/app/otresults/otresults.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/otresults/otresults.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center mb-3\">\n  <div  class=\"col-sm-4\">\n    <strong class=\"mr-3\">Correct Answers:</strong>\n    <span>{{ correctAnswers }}</span>\n  </div>\n  <div class=\"col-sm-4\">\n      <strong class=\"mr-3\">Wrong Answers:</strong>\n      <span>{{ wrongAnswers }}</span>      \n  </div>\n</div>\n<div class=\"row justify-content-center\">\n  <button mat-raised-button class=\"col-4 p-2 mb-3\"\n                            (click)=\"reset()\">Reset</button>    \n</div>"

/***/ }),

/***/ "../../../../../src/app/otresults/otresults.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtresultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OtresultsComponent = (function () {
    function OtresultsComponent() {
        this.onReset = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
    }
    OtresultsComponent.prototype.correctAnswer = function () {
        this.correctAnswers += 1;
    };
    OtresultsComponent.prototype.wrongAnswer = function () {
        this.wrongAnswers += 1;
    };
    OtresultsComponent.prototype.reset = function () {
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.onReset.emit(true);
    };
    return OtresultsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], OtresultsComponent.prototype, "onReset", void 0);
OtresultsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-otresults',
        template: __webpack_require__("../../../../../src/app/otresults/otresults.component.html"),
        styles: [__webpack_require__("../../../../../src/app/otresults/otresults.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OtresultsComponent);

//# sourceMappingURL=otresults.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    hmr: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/hmr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hmrBootstrap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__ = __webpack_require__("../../../../@angularclass/hmr/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__);


var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return ngModule = mod; });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};
//# sourceMappingURL=hmr.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hmr__ = __webpack_require__("../../../../../src/hmr.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
var bootstrap = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]); };
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].hmr) {
    if (false) {
        hmrBootstrap(module, bootstrap);
    }
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap();
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map