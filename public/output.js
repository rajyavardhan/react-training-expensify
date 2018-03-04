"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.state = {
			options: props.options
		};
		_this.handleDeleteAll = _this.handleDeleteAll.bind(_this);
		_this.handleClick = _this.handleClick.bind(_this);
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.handleDelete = _this.handleDelete.bind(_this);
		return _this;
	}

	_createClass(IndecisionApp, [{
		key: "handleDeleteAll",
		value: function handleDeleteAll() {
			// console.log("delete all got triggered");		
			this.setState(function () {
				return { options: [] };
			});
		}
	}, {
		key: "handleClick",
		value: function handleClick() {
			var index = Math.floor(Math.random() * this.state.options.length);
			//console.log(Math.random() * this.state.options.length);
			alert(this.state.options[index]);
		}
	}, {
		key: "handleAddOption",
		value: function handleAddOption(option) {
			if (!option) {
				return "error";
			} else if (this.state.options.indexOf(option) > -1) {
				return "it exist";
			}
			//e.preventDefault();
			//console.log(e.target.elements.input.value);
			//const option = e.target.elements.input.value;
			this.setState(function (prevState) {
				return { options: prevState.options.concat(option) };
			});
		}
	}, {
		key: "handleDelete",
		value: function handleDelete(option) {
			//console.log(option);
			//const index = this.state.options.indexOf(option);
			// if(index > -1) {
			// 	this.setState((prevState) => ({options: prevState.options.slice(0,index).concat(prevState.options.slice(index + 1))}));
			// }
			this.setState(function (prevState) {
				return { options: prevState.options.filter(function (value) {
						return value != option;
					}) };
			});
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			try {
				var json = localStorage.getItem('options');
				var options = JSON.parse(json);
				options && this.setState(function () {
					return { options: options };
				});
			} catch (e) {}
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate(prevProps, prevState) {
			console.log('hai');
			if (prevState.options.length !== this.state.options.length) {
				console.log('hello');
				var data = JSON.stringify(this.state.options);
				localStorage.setItem('options', data);
			}
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			console.log("component Will UnMOunt");
		}
	}, {
		key: "render",
		value: function render() {
			var title = "IndecisionApp";
			var subTitle = "Put your life in the hands of a computer";
			//const options = ['thing1', 'thing2', 'thing3'];
			console.log(this.state.options);
			return React.createElement(
				"div",
				null,
				React.createElement(Header /*title = {title}*/, { subTitle: subTitle }),
				React.createElement(Action, { hasOptions: this.state.options.length, handleOptionPick: this.handleClick }),
				React.createElement(Options, {
					options: this.state.options,
					deleteOptions: this.handleDeleteAll,
					handleDelete: this.handleDelete
				}),
				React.createElement(AddOption, { onAddOption: this.handleAddOption })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
	options: []
};
var Header = function Header(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"h1",
			null,
			" ",
			props.title,
			"  "
		),
		React.createElement(
			"h2",
			null,
			" ",
			props.subTitle,
			" "
		)
	);
};
Header.defaultProps = {
	title: 'Some Thing'
	/*class Header extends React.Component {
 	render() {
 		console.log(this.props);
 		return (
 			<div>
 				<h1> {this.props.title}  </h1>
 				<h2> {this.props.subTitle} </h2>
 			</div>
 		) 
 	}
 }*/

};var Action = function Action(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"button",
			{
				disabled: !props.hasOptions,
				onClick: props.handleOptionPick
			},
			"What should I do?"
		)
	);
};

var Options = function Options(props) {
	return React.createElement(
		"div",
		null,
		props.options.length == 0 && React.createElement(
			"p",
			null,
			"Add an option to start"
		),
		props.options.map(function (option) {
			return React.createElement(Option, { handleDelete: props.handleDelete, key: option, option: option });
		}),
		React.createElement(
			"button",
			{ onClick: props.deleteOptions },
			"Remove All"
		)
	);
};
var Option = function Option(props) {
	return React.createElement(
		"div",
		null,
		props.option + "           ",
		React.createElement(
			"button",
			{ onClick: function onClick() {
					props.handleDelete(props.option);
				} },
			" Remove "
		)
	);
};

var AddOption = function (_React$Component2) {
	_inherits(AddOption, _React$Component2);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this2.handleAddOption = _this2.handleAddOption.bind(_this2);
		_this2.state = {
			error: undefined
		};
		return _this2;
	}

	_createClass(AddOption, [{
		key: "handleAddOption",
		value: function handleAddOption(e) {
			e.preventDefault();
			//console.log(e);
			var option = e.target.elements.input.value;
			var error = this.props.onAddOption(option);
			console.log(error);;
			this.setState(function () {
				return { error: error };
			});
			e.target.elements.input.value = "";
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				this.state.error && React.createElement(
					"p",
					null,
					this.state.error
				),
				React.createElement(
					"form",
					{ onSubmit: this.handleAddOption },
					React.createElement("input", { type: "text", name: "input" }),
					React.createElement(
						"button",
						null,
						"Add Option"
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, { options: ['Bangalore', 'Tinfactory'] }), document.getElementById("root"));
