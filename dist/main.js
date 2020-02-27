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

/***/ "./src/display-controller.js":
/*!***********************************!*\
  !*** ./src/display-controller.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-interface */ \"./src/user-interface.js\");\n/* harmony import */ var _organizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organizer */ \"./src/organizer.js\");\n/* harmony import */ var _todo_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-container */ \"./src/todo-container.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\n\n\nconst displayController = (() => {\n    const projectNameInput = document.querySelector(\".project-name-input\");\n\n    function displayContainer(event) {\n        let container = event.target;\n        container = _organizer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProjectContainer(event.target.id);\n        _user_interface__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderContainer(container);\n    }\n\n    function createNewProject(event) {\n        const projectName = projectNameInput.value;\n        const project = Object(_todo_container__WEBPACK_IMPORTED_MODULE_2__[\"TodoContainer\"])(projectName);\n        _organizer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].storeProjectContainer(project);\n        _user_interface__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderProjectListEntry(project);\n    }\n\n    function createNewTodo(event) {\n        if(event.target.classList.contains(\"create-todo-btn\")) {\n            const projectID = this.getAttribute(\"data-projectid\");\n            const todoContent = this.querySelector(\"input\").value;\n            \n            const currentProject = _organizer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProjectContainer(projectID);\n            const todo = Object(_todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(todoContent);\n            currentProject.addTodo(todo);\n\n            _user_interface__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderTodoItem(todo);\n        }\n    }\n\n    function displayTodoDetails(event) {\n        const todoItem = event.target;\n        if(todoItem.classList.contains(\"todo-item\")) {\n            const todoID = todoItem.getAttribute(\"data-todoid\");\n            const todo = _organizer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodoByID(todoID);\n            _user_interface__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderTodoItemDetails(todo);\n        }\n    }\n\n    return{\n        displayContainer,\n        createNewProject,\n        createNewTodo,\n        displayTodoDetails,\n    };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayController);\n\n//# sourceURL=webpack:///./src/display-controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _todo_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-container */ \"./src/todo-container.js\");\n/* harmony import */ var _organizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organizer */ \"./src/organizer.js\");\n/* harmony import */ var _user_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-interface */ \"./src/user-interface.js\");\n/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display-controller */ \"./src/display-controller.js\");\n\n\n\n\n\n\nconst projectListDisplay = document.querySelector(\".project-list\");\nconst createProjectBtn = document.querySelector(\".create-project-btn\");\nconst createTodoField = document.querySelector(\".create-todo-field\");\nconst projectTodoList = document.querySelector(\".project-todo-list\");\n\nprojectListDisplay.addEventListener('click', _display_controller__WEBPACK_IMPORTED_MODULE_4__[\"default\"].displayContainer);\ncreateProjectBtn.addEventListener('click', _display_controller__WEBPACK_IMPORTED_MODULE_4__[\"default\"].createNewProject);\ncreateTodoField.addEventListener('click', _display_controller__WEBPACK_IMPORTED_MODULE_4__[\"default\"].createNewTodo);\nprojectTodoList.addEventListener('click', _display_controller__WEBPACK_IMPORTED_MODULE_4__[\"default\"].displayTodoDetails);\n\n_organizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initializeOrganizer(Object(_todo_container__WEBPACK_IMPORTED_MODULE_1__[\"TodoContainerTimePeriod\"])(\"Today\", 1), Object(_todo_container__WEBPACK_IMPORTED_MODULE_1__[\"TodoContainerTimePeriod\"])(\"Next 7 days\", 7));\n\n_organizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjectContainer(\"project-0\").addTodo(Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"some task\"));\n_organizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjectContainer(\"project-0\").addTodo(Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"proj 0\"));\n_organizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjectContainer(\"project-0\").addTodo(Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"do it\"));\n_organizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjectContainer(\"project-1\").addTodo(Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"idk do something\"));\n_organizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjectContainer(\"project-1\").addTodo(Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"proj 1\"));\n_organizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjectContainer(\"project-1\").addTodo(Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"idk do shahahahaing\"));\n_user_interface__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderProjectList(_organizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjectContainers());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/organizer.js":
/*!**************************!*\
  !*** ./src/organizer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst organizer = (() => {\n    let todayContainer;\n    let nextWeekContainer;\n    let projectContainers;\n\n    const initializeOrganizer = (today, nextWeek) => {\n        todayContainer = today;\n        nextWeekContainer = nextWeek;\n        projectContainers = [todayContainer, nextWeekContainer];\n    }\n    \n    const getTodayContainer = () => todayContainer;\n\n    const getNextWeekContainer = () => nextWeekContainer;\n\n    const getProjectContainer = (projectID) => projectContainers.find(project => project.getProjectID() === projectID);\n\n    const storeProjectContainer = (project) => {\n        projectContainers.push(project);\n    };\n\n    const getProjectContainers = () => projectContainers;\n\n    const getTodoByID = (ID) => {\n        let todo;\n        projectContainers.some(project => {\n            const tempTodo = project.getTodos().find(todo => todo.getTodoID() === ID);\n            if(tempTodo) {\n                todo = tempTodo;\n                return true;\n            }\n        });\n\n        return todo;\n    };\n\n    return {\n        initializeOrganizer,\n        getTodayContainer,\n        getNextWeekContainer,\n        getProjectContainer,\n        storeProjectContainer,\n        getProjectContainers,\n        getTodoByID\n    }\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (organizer);\n\n//# sourceURL=webpack:///./src/organizer.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nlet todoIndex = 0;\n\nconst Todo = (content) => {\n    const todoID = `todo-${todoIndex++}`;\n    let checked = false;\n\n    const getTodoID = () => {\n        return todoID;\n    }\n\n    const getContent = function() {\n        return content;\n    };\n\n    const isChecked = function() {\n        return checked;\n    };\n    \n    const toggleChecked = function() {\n        checked = !checked;\n    };\n\n    return {\n        getTodoID,\n        getContent,\n        isChecked,\n        toggleChecked,\n    };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ }),

/***/ "./src/ui-container.js":
/*!*****************************!*\
  !*** ./src/ui-container.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst userInterfaceContainer = (() => {\n    const todoListDisplay = document.querySelector(\".project-todo-list\");\n    const createTodoField = document.querySelector(\".create-todo-field\");\n\n    const createTodoItemHtml = (todo) => {\n        return `\n        <li class=\"todo-item\" data-todoid=\"${todo.getTodoID()}\">\n            ${todo.getContent()}\n        </li>\n        `\n    }\n\n    const createTodoInputField = (container) => {\n        const html = `\n            <span class=\"create-todo-btn\">+</span>\n            <input type=\"text\" class=\"todo-content-input\">\n        `;\n\n        createTodoField.setAttribute(\"data-projectid\", container.getProjectID());\n        createTodoField.innerHTML = html;\n    }\n\n    const renderContainer = (container) => {\n        const html = container.getTodos().map(todo => {\n            return createTodoItemHtml(todo);\n        }).join('');\n        \n        createTodoInputField(container);\n        todoListDisplay.innerHTML = html;\n    }\n\n    const renderTodoItem = (todo) => {\n        const todoItemHtml = createTodoItemHtml(todo);\n        todoListDisplay.innerHTML += todoItemHtml;\n    } \n\n    return {\n        renderContainer,\n        renderTodoItem\n    };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (userInterfaceContainer);\n\n//# sourceURL=webpack:///./src/ui-container.js?");

/***/ }),

/***/ "./src/ui-menu.js":
/*!************************!*\
  !*** ./src/ui-menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst userInterfaceMenu = (() => {\n    const projectListDisplay = document.querySelector(\".project-list\");\n\n    const createProjectListItemHtml = (container) => {\n        return `\n        <li id=\"${container.getProjectID()}\">\n            ${container.getName()}\n        </li>`;\n    };\n\n    const renderProjectList = (projectContainers) => {\n        const html = projectContainers.map(container => {\n            return createProjectListItemHtml(container);\n        }).join('');\n\n        projectListDisplay.innerHTML = html;\n    };\n\n    const renderProjectListEntry = (container) => {\n        const listItem = createProjectListItemHtml(container);\n        projectListDisplay.innerHTML += listItem;\n    }\n\n    return {\n        renderProjectList,\n        renderProjectListEntry\n    };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (userInterfaceMenu);\n\n//# sourceURL=webpack:///./src/ui-menu.js?");

/***/ }),

/***/ "./src/ui-todo.js":
/*!************************!*\
  !*** ./src/ui-todo.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst todoDetailsDisplay = document.querySelector(\".todo-details\");\n\nconst userInterfaceTodo = (() => {\n    const renderTodoItemDetails = (todo) => {\n        const html = `\n            <h2>${todo.getContent()}</h2>\n            <p>${todo.getTodoID()}</p>\n        `;\n        todoDetailsDisplay.innerHTML = html;\n    }\n\n    return {\n        renderTodoItemDetails,\n    };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (userInterfaceTodo);\n\n//# sourceURL=webpack:///./src/ui-todo.js?");

/***/ }),

/***/ "./src/user-interface.js":
/*!*******************************!*\
  !*** ./src/user-interface.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-menu */ \"./src/ui-menu.js\");\n/* harmony import */ var _ui_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-container */ \"./src/ui-container.js\");\n/* harmony import */ var _ui_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-todo */ \"./src/ui-todo.js\");\n\n\n\n\nconst userInterface = (() => {\n    return Object.assign(\n        {},\n        _ui_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        _ui_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        _ui_todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    );\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (userInterface);\n\n//# sourceURL=webpack:///./src/user-interface.js?");

/***/ })

/******/ });