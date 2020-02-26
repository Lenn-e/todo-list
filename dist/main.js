/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _todo_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-container */ \"./src/todo-container.js\");\n/* harmony import */ var _organizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organizer */ \"./src/organizer.js\");\n/* harmony import */ var _user_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-interface */ \"./src/user-interface.js\");\n\n\n\n\n\nconst projectListDisplay = document.querySelector(\".project-list\");\n\nconst controller = (() => {\n    function displayContainer(event) {\n        let container = event.target;\n        container = _organizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjectContainer(event.target.id);\n        _user_interface__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderContainer(container);\n    }\n\n    return{\n        displayContainer,\n    };\n})();\n\nprojectListDisplay.addEventListener('click', controller.displayContainer);\n\n\nwindow.org = _organizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nwindow.org.createProjectContainer(\"trip\");\nwindow.org.getProjectContainer(\"project-0\").addTodo(Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"some task\"));\nwindow.org.getProjectContainer(\"project-0\").addTodo(Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"proj 0\"));\nwindow.org.getProjectContainer(\"project-0\").addTodo(Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"do it\"));\nwindow.org.getProjectContainer(\"project-1\").addTodo(Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"idk do something\"));\nwindow.org.getProjectContainer(\"project-1\").addTodo(Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"proj 1\"));\nwindow.org.getProjectContainer(\"project-1\").addTodo(Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"idk do shahahahaing\"));\nwindow.org.getProjectContainer(\"project-2\").addTodo(Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"cook\"));\nwindow.org.getProjectContainer(\"project-2\").addTodo(Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"proj 2\"));\nwindow.org.getProjectContainer(\"project-2\").addTodo(Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"workout\"));\n_user_interface__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderProjectMenu(window.org.getProjectContainers());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/organizer.js":
/*!**************************!*\
  !*** ./src/organizer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-container */ \"./src/todo-container.js\");\n\n\nconst organizer = (() => {\n    const todayContainer = Object(_todo_container__WEBPACK_IMPORTED_MODULE_0__[\"TodoContainerTimePeriod\"])(\"Today\", 1);\n    const nextWeekContainer = Object(_todo_container__WEBPACK_IMPORTED_MODULE_0__[\"TodoContainerTimePeriod\"])(\"Next 7 days\", 7);\n    const projectContainers = [todayContainer, nextWeekContainer];\n\n    const getTodayContainer = () => todayContainer;\n\n    const getNextWeekContainer = () => nextWeekContainer;\n\n    const getProjectContainer = (projectID) => projectContainers.find(project => project.getProjectID() === projectID);\n\n    const createProjectContainer = (projectName) => {\n        projectContainers.push(Object(_todo_container__WEBPACK_IMPORTED_MODULE_0__[\"TodoContainer\"])(projectName));\n    };\n\n    const getProjectContainers = () => projectContainers;\n\n    return {\n        getTodayContainer,\n        getNextWeekContainer,\n        getProjectContainer,\n        createProjectContainer,\n        getProjectContainers\n    }\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (organizer);\n\n//# sourceURL=webpack:///./src/organizer.js?");

/***/ }),

/***/ "./src/todo-container.js":
/*!*******************************!*\
  !*** ./src/todo-container.js ***!
  \*******************************/
/*! exports provided: TodoContainer, TodoContainerTimePeriod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoContainer\", function() { return TodoContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoContainerTimePeriod\", function() { return TodoContainerTimePeriod; });\nlet projectIndex = 0;\n\nconst TodoContainer = (name) => {\n    const projectID = `project-${projectIndex++}`;\n    const todos = [];\n\n    const getProjectID = () => {\n        return projectID;\n    }\n\n    const getName = () => {\n        return name;\n    };\n\n    const getTodos = () => {\n        return todos;\n    };\n\n    const addTodo = (todo) => {\n        todos.push(todo);\n    };\n\n    return {\n        getProjectID,\n        getTodos,\n        addTodo,\n        getName\n    };\n};\n\nconst TodoContainerTimePeriod = (name, timePeriod) => {\n    const prototype = TodoContainer(name);\n    \n    const findTodosFromPeriod = () => {\n        console.log(timePeriod);\n    };\n\n    return Object.assign({}, prototype, {findTodosFromPeriod});\n}\n\n\n\n\n//# sourceURL=webpack:///./src/todo-container.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Todo = (content) => {\n    let checked = false;\n\n    const getContent = function() {\n        return content;\n    };\n\n    const isChecked = function() {\n        return checked;\n    };\n    \n    const toggleChecked = function() {\n        checked = !checked;\n    };\n\n    return {\n        getContent,\n        isChecked,\n        toggleChecked,\n    };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ }),

/***/ "./src/user-interface.js":
/*!*******************************!*\
  !*** ./src/user-interface.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst projectListDisplay = document.querySelector(\".project-list\");\nconst todosListDisplay = document.querySelector(\".project-todos\");\n\nconst userInterface = (() => {\n    const createProjectMenuItemHtml = (container) => {\n        return `\n        <li id=\"${container.getProjectID()}\">\n            ${container.getName()}\n        </li>`;\n    };\n\n    const clearListDisplay = (listDisplay) => {\n        listDisplay.innerHTML = '';\n    }\n\n    const renderProjectMenu = (projectContainers) => {\n        const html = projectContainers.map(container => {\n            return createProjectMenuItemHtml(container);\n        }).join('');\n\n        clearListDisplay(projectListDisplay);\n        projectListDisplay.innerHTML = html;\n    };\n\n    const createTodoItemHtml = (todo) => {\n        return `\n        <li>\n            ${todo.getContent()}\n        </li>\n        `\n    }\n\n    const renderContainer = (container) => {\n        const html = container.getTodos().map(todo => {\n            return createTodoItemHtml(todo);\n        }).join('');\n        clearListDisplay(todosListDisplay);\n        todosListDisplay.innerHTML = html;\n    }\n\n    return {\n        renderProjectMenu,\n        renderContainer\n    };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (userInterface);\n\n//# sourceURL=webpack:///./src/user-interface.js?");

/***/ })

/******/ });