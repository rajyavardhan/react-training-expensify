"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleState = function (_React$Component) {
	_inherits(ToggleState, _React$Component);

	function ToggleState(props) {
		_classCallCheck(this, ToggleState);

		var _this = _possibleConstructorReturn(this, (ToggleState.__proto__ || Object.getPrototypeOf(ToggleState)).call(this, props));

		_this.state = {
			toggle: 0
			//this.toggleState = this.togglState.bind(this);
		};return _this;
	}

	_createClass(ToggleState, [{
		key: "togglState",
		value: function togglState() {
			console.log('rajya');
			this.setState(function (previousState) {
				return {
					toggle: !previousState.toggle
				};
			});
			//this.setState({toggle: !this.state.toggle})
		}
	}, {
		key: "render",
		value: function render() {
			var toggle = this.state.toggle;
			console.log(toggle);
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h1",
					null,
					" Visibility Toggle "
				),
				React.createElement(
					"button",
					{ onClick: toggleState },
					" ",
					toggle ? "hide Details" : "showDetails"
				),
				toggle && React.createElement(
					"p",
					null,
					" Showing Sensitive info"
				)
			);
		}
	}]);

	return ToggleState;
}(React.Component);

ReactDOM.render(React.createElement(ToggleState, null), document.getElementById('root'));

// const rootEle = document.getElementById('root');
// let toggle = 0;
// let display;
// const toggleState = () => {
// 	toggle = !toggle
// 	renderTogglingTemplate();	 
// }

// const renderTogglingTemplate = () => {

// 	//let style =  
// 	//console.log(style);
// 	const togglingTemplate = (
// 		<div>
// 			<h1>Visibiity Toggle</h1>
// 			<button onClick = {toggleState}>{0 == toggle? "Show the details":"Hide the details"}</button>
// 			{toggle && <p> Showing the private information </p>}
// 		</div>
// 	)
// 	ReactDOM.render(togglingTemplate, rootEle)	
// }

// renderTogglingTemplate();
