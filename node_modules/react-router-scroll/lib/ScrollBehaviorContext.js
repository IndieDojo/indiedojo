'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _scrollBehavior = require('scroll-behavior');

var _scrollBehavior2 = _interopRequireDefault(_scrollBehavior);

var _StateStorage = require('./StateStorage');

var _StateStorage2 = _interopRequireDefault(_StateStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  shouldUpdateScroll: _react2.default.PropTypes.func,
  children: _react2.default.PropTypes.element.isRequired,
  location: _react2.default.PropTypes.object.isRequired,
  history: _react2.default.PropTypes.object.isRequired
};

var childContextTypes = {
  scrollBehavior: _react2.default.PropTypes.object.isRequired
};

var ScrollContext = function (_React$Component) {
  _inherits(ScrollContext, _React$Component);

  function ScrollContext(props, context) {
    _classCallCheck(this, ScrollContext);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.shouldUpdateScroll = function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      }

      // Hack to allow accessing scrollBehavior._stateStorage.
      return shouldUpdateScroll.call(_this.scrollBehavior, prevRouterProps, routerProps);
    };

    _this.registerElement = function (key, element, shouldUpdateScroll) {
      _this.scrollBehavior.registerElement(key, element, shouldUpdateScroll, _this.getRouterProps());
    };

    _this.unregisterElement = function (key) {
      _this.scrollBehavior.unregisterElement(key);
    };

    var history = props.history;


    _this.scrollBehavior = new _scrollBehavior2.default({
      addTransitionHook: history.listen,
      stateStorage: new _StateStorage2.default(),
      getCurrentLocation: function getCurrentLocation() {
        return _this.props.location;
      },
      shouldUpdateScroll: _this.shouldUpdateScroll
    });

    _this.scrollBehavior.updateScroll(null, _this.getRouterProps());
    return _this;
  }

  ScrollContext.prototype.getChildContext = function getChildContext() {
    return {
      scrollBehavior: this
    };
  };

  ScrollContext.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _props = this.props,
        location = _props.location,
        history = _props.history;

    var prevLocation = prevProps.location;

    if (location === prevLocation) {
      return;
    }

    var prevRouterProps = {
      history: prevProps.history,
      location: prevProps.location
    };

    this.scrollBehavior.updateScroll(prevRouterProps, { history: history, location: location });
  };

  ScrollContext.prototype.componentWillUnmount = function componentWillUnmount() {
    this.scrollBehavior.stop();
  };

  ScrollContext.prototype.getRouterProps = function getRouterProps() {
    var _props2 = this.props,
        history = _props2.history,
        location = _props2.location;

    return { history: history, location: location };
  };

  ScrollContext.prototype.render = function render() {
    return _react2.default.Children.only(this.props.children);
  };

  return ScrollContext;
}(_react2.default.Component);

ScrollContext.propTypes = propTypes;
ScrollContext.childContextTypes = childContextTypes;

exports.default = (0, _reactRouterDom.withRouter)(ScrollContext);
module.exports = exports['default'];