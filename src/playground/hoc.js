import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
		<div>
			<h1>Info</h1>
				<p>INFO: {props.info}</p>
		</div>
);
const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			<p> This is previiged information </p>
			<WrappedComponent {...props}/>
		</div>
	)
}
const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			<p>Please loging to continue</p>
			{props.isAuthenticatd && <WrappedComponent {...props}/>}
		</div>
	)
}

const AutInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

//ReactDOM.render(<AdminInfo isAdmin = {true} info = 'These are the details'/>, document.getElementById('root'));
ReactDOM.render(<AutInfo isAuthenticatd = {false} info = 'These are the details'/>, document.getElementById('root'));