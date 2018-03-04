import React, {Component} from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

const now = moment();

export default class ExpenseForm extends Component {
	state = {
		description: this.props.expense.description || '',
		notes: this.props.expense.notes || '',
		amount:this.props.expense.amount||  '',
		createdAt:  moment(this.props.expense.createdAt) || moment(),
		calenderFocused: false,
		errorState: false
	};
	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(()=>({
			description
		}));
	};
	onNoteChange = (e) => {
		const notes = e.target.value;
		this.setState(() => ({
			notes
		}));
	};
	onAmountChange = (e) => {
		const amount = e.target.value;
		if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(()=> ({amount}));
		}
		
	};
	onDateChanged = (createdAt) => {
		if(createdAt){
			this.setState(()=>({
				createdAt
			}));
		}
	};

	onFocusedChanged = ({focused}) => {
		this.setState(()=>({
			calenderFocused:focused
		}));
	};

	onSubmit = (e) => {
		e.preventDefault();
		if(!this.state.description || !this.state.amount) {
			this.setState(()=>({
				errorState: true
			}));
		} else {
			this.setState(()=>({
				errorState: false
			}));
			this.props.onSubmit({
				description: this.state.description,
				createdAt:this.state.createdAt.valueOf(),
				amount: parseFloat(this.state.amount, 10)*100,
				notes: this.state.notes
			});
			//console.log('submitted')
		}
	};
	render() {
		return (
			<div>
				{this.state.errorState && <p>Please submit both Description and amount</p>}
				<form onSubmit = {this.onSubmit}>
				<input 
					type = 'text'
					placeholder = 'Description'
					autoFocus 
					value = {this.state.description}
					onChange = {this.onDescriptionChange}
					/>
					<br />
				<input
					type = 'text'
					placeholder = 'amount'
					value = {this.state.amount}
					onChange = {this.onAmountChange}
					/>
				<br />
				<SingleDatePicker 
					date = {this.state.createdAt}
					onDateChange = {this.onDateChanged}
					focused = {this.state.calenderFocused}
					onFocusChange = {this.onFocusedChanged}
					isOutsideRange = {()=>false}
					numberOfMonths = {1}
				/>
				<textarea
					placeholder = 'Add the notes'
					value = {this.state.notes}
					onChange = {this.onNoteChange}
				>
				</textarea>
				<br />
				<button> Add Expense </button>
				</form>
			</div>
		)
	}
}
ExpenseForm.defaultProps = {
	expense: {
		description: '',
		notes:  '',
		amount: '',
		createdAt: moment()
	}
}