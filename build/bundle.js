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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* This is used to pass action that is coming via dispatch through react
redux. After this the type and payload will be passed to reducer i.e. userReducers.js */

var FETCH_USERS = exports.FETCH_USERS = "fetch_users";
var fetchUsers = exports.fetchUsers = function fetchUsers() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return api.get("/users");

                        case 2:
                            res = _context.sent;

                            dispatch({
                                type: FETCH_USERS,
                                payload: res
                            });

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = "fetch_current_user";
var fetchCurrentUsers = exports.fetchCurrentUsers = function fetchCurrentUsers() {
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return api.get('/current_user');

                        case 2:
                            res = _context2.sent;


                            dispatch({
                                type: FETCH_CURRENT_USER,
                                payload: res
                            });

                        case 4:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var FETCH_ADMINS = exports.FETCH_ADMINS = "fetch_admins";
var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return api.get("/admins");

                        case 2:
                            res = _context3.sent;


                            dispatch({
                                type: FETCH_ADMINS,
                                payload: res
                            });

                        case 4:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function (_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                  Below are the routes json for using it react router config. We are using
                                                                                                                                                                                                                                                                  react router config to use route functionality. This is done because we
                                                                                                                                                                                                                                                                  are using server side rendering and we want our routes to work for server
                                                                                                                                                                                                                                                                  side too. 
                                                                                                                                                                                                                                                                   */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(11);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(14);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _UsersListPage = __webpack_require__(15);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _NotFoundPage = __webpack_require__(16);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _AdminListPage = __webpack_require__(17);

var _AdminListPage2 = _interopRequireDefault(_AdminListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: '/',
        exact: true
    }), _extends({}, _UsersListPage2.default, {
        path: '/users'
    }), _extends({}, _AdminListPage2.default, {
        path: '/admins'
    }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var _renderer = __webpack_require__(8);

var _renderer2 = _interopRequireDefault(_renderer);

var _express = __webpack_require__(19);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(3);

var _expressHttpProxy = __webpack_require__(20);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

var _createStore = __webpack_require__(21);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

/*
Set up proxy.It is used because any request level that will access
domain / api will automatically sent to main url.This it used because
we have sent our request from server to api, not from client to api.
*/

/*
1. Main file for using this application as server side rendering. In this
we are using express.static("public") to send our javascript files through
our server. It's because if we want to add event handlers or functionality
in our react app, we have to use this function. From here our javascript files
will be called. These all commands are defined in webpack.js

2. we are using react-redux on server side. It's becuase we want to load
our intial data using redux.

3. we are using macthRoutes from react-router-config. It's because we get
routes in the form of array. To get each routes we are using map function.
In some routes we are passing loadData. If loadData is passed in that route
then in that function redux store will be sent.

4. Since map function returns promises. To solve that all promise we are passing
promise to promise.all(). Inside that we are call res.send(renderer()).
Component which we have to render on the server.
*/

app.use("/api", (0, _expressHttpProxy2.default)("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = "localhost:3000";
        return opts;
    }
}));

app.use(_express2.default.static("public"));

app.get("*", function (req, res) {
    // Passing cookie to createStore.js with the help of req
    var store = (0, _createStore2.default)(req);

    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(function () {
        var context = {};
        var content = (0, _renderer2.default)(req, store, context);

        if (context.notFound) {
            res.status(404);
        }
        res.send(content);
    });
});

app.listen(3000, function () {
    console.log("Listening on port 3000");
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(9);

var _reactRouter = __webpack_require__(10);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(18);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouter.StaticRouter,
            { location: req.path, context: context },
            _react2.default.createElement(
                "div",
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
            )
        )
    ));

    return "\n    <html>\n    <head>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\n    </head>\n    <body>\n    <div id=\"root\">" + content + "</div>\n    <script>\n    window.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "\n    </script>\n    <script src=\"bundle.js\"></script>\n    </body>\n    </html>\n    ";
}; /*
   1. This is main file for rendering our data on server side. We are using
   StaticRouter because in server side routing is possible using static router
   only.
   2. In this we are passing location for accessing the path of the compoent.
   3. we are also using renderRoutes from react router config. This is much
   different than react router. It's used because we want to use navigation
   from server side.
   4. we are also using serialize javascript because to prevent from XSS = Cross
   Scripting attacks. It will sanitize our content.
   5. we are using store.getState because we want to use react redux from server
   side. We are getting initial data using getState and passing it to store.
    */

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _Header = __webpack_require__(12);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
This component is just like nextJs _app.js component. This is used to pass
the component to all other components. Like we can declare Header and Footer
Component here.
*/

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};

exports.default = {
    component: App,
    loadData: function loadData(_ref2) {
        var dispatch = _ref2.dispatch;
        return dispatch((0, _actions.fetchCurrentUsers)());
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(13);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var auth = _ref.auth;


    /*
    We only use Link tag if we want to navigate around our react app.
    Since we are redirecting it to our proxy sever(index.js). We are user a href
    Our render server is taking this request and browser doesn't know what
    is happening.
    */

    var authButton = auth ? _react2.default.createElement(
        "a",
        { href: "/api/logout" },
        "Logout"
    ) : _react2.default.createElement(
        "a",
        { href: "/api/auth/google" },
        "Login"
    );

    return _react2.default.createElement(
        "nav",
        { className: "nav-wrapper" },
        _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "/", className: "brand-logo" },
                "React SSR"
            ),
            _react2.default.createElement(
                "ul",
                { className: "right" },
                _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: "/users" },
                        "Users"
                    )
                ),
                _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: "/admins" },
                        "Admins"
                    )
                ),
                _react2.default.createElement(
                    "li",
                    null,
                    authButton
                )
            )
        )
    );
};

function mapStateToProps(_ref2) {
    var auth = _ref2.auth;

    return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
    return _react2.default.createElement(
        "div",
        { className: "center-align", style: { marginTop: "200px" } },
        _react2.default.createElement(
            "h3",
            null,
            "Welcome"
        ),
        _react2.default.createElement(
            "p",
            null,
            "Checkout these awesome features"
        )
    );
};

/*
below export is used because, since we are using react-router-config
react - router - config is pretty much differenct that react router.Due to
which this type of default is used
 */
/* 
 Home Page component
*/

exports.default = {
    component: Home
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               1. This component is used to show the user list. We have used react redux for
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               state management. We have used HOC: connect() for passing data
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               2. We have also used loaddata function. It's because this is used to use
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               react redux via server side. In this we are directly using store.dispatch.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Due to this we have omitted sending the data to action folder.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               This is used to load data for server side rendering using redux
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               3. we have used window.INITIAL_STATE becuase we are first loading data with
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               the help of server. If data is already loaded using server side. Then 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               this.props.fetchUsers() function we will not run. This will help us recalling
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               api again.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var UsersList = function (_Component) {
    _inherits(UsersList, _Component);

    function UsersList() {
        _classCallCheck(this, UsersList);

        return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));
    }

    _createClass(UsersList, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            if (!window.INITIAL_STATE) {
                this.props.fetchUsers();
            }
        }
    }, {
        key: "renderUsers",
        value: function renderUsers() {
            return this.props.users.map(function (user) {
                return _react2.default.createElement(
                    "li",
                    { key: user.id },
                    user.name
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                "Here is a big list of user",
                _react2.default.createElement(
                    "ul",
                    null,
                    this.renderUsers()
                )
            );
        }
    }]);

    return UsersList;
}(_react.Component);

function mapStateToProps(state) {
    return { users: state.users };
}

function loadData(store) {
    return store.dispatch((0, _actions.fetchUsers)());
}

exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UsersList)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 We are using staticContext because. We are passing context from index.js
 and passing context object to res.send(renderer). To get context as prop 
 in notfoundpage we have pass is it as staticContext.

 We are passing empty object in staticContext becuase our client side doesn't
 know what staticContext means. To avoid this error on client side we are
 passing staticContext as empty object.
 */

var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    "h1",
    null,
    "Oops, route not found"
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminListPage = function (_Component) {
    _inherits(AdminListPage, _Component);

    function AdminListPage() {
        _classCallCheck(this, AdminListPage);

        return _possibleConstructorReturn(this, (AdminListPage.__proto__ || Object.getPrototypeOf(AdminListPage)).apply(this, arguments));
    }

    _createClass(AdminListPage, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.props.fetchAdmins();
        }
    }, {
        key: "renderAdmins",
        value: function renderAdmins() {
            return this.props.admins.map(function (admin) {
                return _react2.default.createElement(
                    "li",
                    { key: admin.id },
                    admin.name
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h3",
                    null,
                    "Protected List of Admins"
                ),
                _react2.default.createElement(
                    "ul",
                    null,
                    this.renderAdmins()
                )
            );
        }
    }]);

    return AdminListPage;
}(_react.Component);

function mapStateToProps(_ref) {
    var admins = _ref.admins;

    return { admins: admins };
}

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _actions.fetchAdmins })(AdminListPage),
    loadData: function loadData(_ref2) {
        var dispatch = _ref2.dispatch;
        return dispatch((0, _actions.fetchAdmins)());
    }
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(5);

var _reduxThunk = __webpack_require__(22);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(23);

var _reducers2 = _interopRequireDefault(_reducers);

var _axios = __webpack_require__(27);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
We are using react redux on server side too. This is because we want to
maintain data on server side too.
This file will be get called to index.js on server side. We are using thunk
for async operation.
 */
exports.default = function (req) {
    var axiosInstance = _axios2.default.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: { cookie: req.get("cookie") || "" }
    });
    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

    return store;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(5);

var _authReducer = __webpack_require__(24);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _usersReducer = __webpack_require__(25);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _adminReducer = __webpack_require__(26);

var _adminReducer2 = _interopRequireDefault(_adminReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Main root reducer page which is used to combine several reducers together.

var rootReducers = (0, _redux.combineReducers)({
    users: _usersReducer2.default,
    auth: _authReducer2.default,
    admin: _adminReducer2.default

});
exports.default = rootReducers;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;
    }
};

var _actions = __webpack_require__(1);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
}; /*
   User reducer used to pass actions that is coming from action folder using
   dispatch method. It always have default state to avoid erros.
   */

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_ADMINS:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);