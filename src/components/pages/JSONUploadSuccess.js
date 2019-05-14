import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as pagesActions from '../../store/actions/pages';
import { action } from 'typesafe-actions';

class JSONUploadSuccess extends React.Component
{
	componentDidMount()
	{
		this.props.onFindCurrentPage();  
	}
	
	render()
	{
		if (this.props.response)
		{
			return (
				<section  className="grid__container u-padding-top-from-nav">
					<p>JSON Upload success</p>
					<p>Response below:</p>
					<p key='response'>{JSON.stringify(this.props.response)}</p>
					<Link
						to='/'
						onClick={() => this.props.onResetJSON()}>Start Over</Link>
				</section>
			)
		}
		else
		{
			return (
				<Link
					to='/'
					onClick={() => this.props.onResetJSON()}>Start Over</Link>)
		}
	}
}

const _mapStateToProps = (__state) => {
	return {
		response : __state.json.pages.response
	}
}

const _mapDispatchToProps = (__dispatch) => {
    return {
				onFindCurrentPage   		:		() => __dispatch(pagesActions.findCurrentPage('upload-success')),
				onResetJSON					:		() => __dispatch(action(pagesActions.RESET_JSON_UPLOAD))
    }
}

export default connect(_mapStateToProps, _mapDispatchToProps)(JSONUploadSuccess);