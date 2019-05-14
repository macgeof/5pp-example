import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as pagesActions from '../../store/actions/pages';
import { action } from 'typesafe-actions';

class JSONUploadError extends React.Component
{
	componentDidMount()
	{
		this.props.onFindCurrentPage();  
	}
	
	render()
	{
		if (this.props.error)
		{
			return (
				<section  className="grid__container u-padding-top-from-nav">
					<p>JSON Upload failed</p>
					<p>Response below:</p>
					<p key='response'>{JSON.stringify(this.props.error)}</p>
					<Link
						to='/'
						onClick={() => this.props.onResetJSON()}>Start Over</Link>
				</section>
			)
		}
		else
		{
			return (<Link
				to='/'
				onClick={() => this.props.onResetJSON()}>Start Over</Link>)
		}
	}
}

const _mapStateToProps = (__state) => {
	return {
		error : __state.json.pages.error
	}
}

const _mapDispatchToProps = (__dispatch) => {
	return {
				onFindCurrentPage   :		()			=> __dispatch(pagesActions.findCurrentPage('upload-error')),
				onResetJSON			:		(__json)	=> __dispatch(action(pagesActions.RESET_JSON_UPLOAD))
	}
}

export default connect(_mapStateToProps, _mapDispatchToProps)(JSONUploadError);