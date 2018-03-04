'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
	_inherits(Counter, _React$Component);

	function Counter(props) {
		_classCallCheck(this, Counter);

		var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

		_this.handleInc = _this.handleInc.bind(_this);
		_this.handleDec = _this.handleDec.bind(_this);
		_this.handleReset = _this.handleReset.bind(_this);
		_this.state = {
			count: props.count
		};
		return _this;
	}

	_createClass(Counter, [{
		key: 'handleInc',
		value: function handleInc() {
			this.setState(function (prevState) {
				return {
					count: prevState.count + 1
				};
			});
		}
	}, {
		key: 'handleDec',
		value: function handleDec() {
			this.setState(function (prevState) {
				return {
					count: prevState.count - 1
				};
			});
		}
	}, {
		key: 'handleReset',
		value: function handleReset() {
			this.setState(function () {
				return { count: 0 };
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var count = parseInt(localStorage.getItem('count'));
			count && this.setState(function () {
				return { count: count };
			});
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			prevState.count !== this.state.count && localStorage.setItem('count', this.state.count);
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Count: ',
					this.state.count
				),
				React.createElement(
					'button',
					{ onClick: this.handleInc },
					'+1'
				),
				React.createElement(
					'button',
					{ onClick: this.handleDec },
					'-1'
				),
				React.createElement(
					'button',
					{ onClick: this.handleReset },
					'Reset'
				)
			);
		}
	}]);

	return Counter;
}(React.Component);

Counter.defaultProps = {
	count: 0
};
ReactDOM.render(React.createElement(Counter, null), document.getElementById('root'));

/*let count = 0;
const someId = "incButton";
const addOne = () => {
	count++;
	renderCounter();
	//console.log("first button added");
}
const subOne = () => {
	count--;
	renderCounter();
	//console.log("substract one");
}
const reset = () => {
	count = 0;
	renderCounter();
	//console.log('reset');
}
const renderCounter = () => {
	const template2 = (
		<div>
			<h1> Count: {count}</h1>
			<button id = {someId} onClick = {addOne} className = "">+1</button>
			<button  onClick = {subOne} className = "">-1</button>
			<button onClick = {reset} className = "">Reset</button>
		</div>
	)

	ReactDOM.render(template2, base);	
}
renderCounter();*/
