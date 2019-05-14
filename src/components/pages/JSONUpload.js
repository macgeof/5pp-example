import React from 'react';
import { connect } from 'react-redux';
import * as pagesActions from '../../store/actions/pages';
import { action } from 'typesafe-actions';
import { Redirect } from 'react-router-dom';

class JSONUpload  extends React.Component {
	constructor(__props)
	{
		super(__props);
		this._formSubmitHandler = this._formSubmitHandler.bind(this);
		this._fileInputHandler = this._fileInputHandler.bind(this);
		this._textAreaChangedHandler = this._textAreaChangedHandler.bind(this);
		this.state = {
			defaultJSONDisplayed : true,
			fileUploadSelected : false,
			json:''
		}
	}

	componentDidMount()
	{
			this.props.onFindCurrentPage(); 
			this.setState((__prevState, __prevProps) => {
				return {
					json:this.props.defaultJSON
				}
			});   
	}

	_fileInputHandler(__event)
	{
		const __filePath = __event ? __event.currentTarget.value : '';
		this.setState((__prevState, __prevProps) => {
			return {
				fileUploadSelected : __filePath !== ''
			}
		});
	}

	_textAreaChangedHandler(__event)
	{
		const __text = __event.currentTarget.value;
		this.setState((__prevState, __prevProps) => {
			return {
				json:__text,
				defaultJSONDisplayed : __text === this.props.defaultJSON
			}
		});
	}

	_formSubmitHandler(__event)
	{
		__event.preventDefault();
		const __value = this.state.json;
		this.props.onSubmitJSONViaPost(__value);
	}

	render() {
		let __content = null;
		if (this.props.currentPage === 'upload-success')
		{
			__content = (<Redirect key='success' to='/upload-success' />);
		}
		else if (this.props.currentPage === 'upload-error')
		{
			__content = (<Redirect key='error' to='/upload-error' />);
		}
		else
		{
			__content = (
				<section key='upload'  className="grid__container u-padding-top-from-nav">
					<form onSubmit={(__event) => this._formSubmitHandler(__event)}>
						{
							this.state.fileUploadSelected 
							? null
							: (
								<div>
									<label htmlFor='json_for_upload' className='upload-label'>Type in JSON below to upload</label><br/>
									<textarea onChange={(__event) => this._textAreaChangedHandler(__event)}
										id='json_for_upload'
										rows='15' cols='50'
										placeholder='Enter JSON for upload'
										defaultValue={this.props.defaultJSON} />
								</div>)
						}
						{
							this.state.defaultJSONDisplayed 
							? null
							: (
								<div>
								<br/><br/>
								<p>Expected format of JSON shown in the example below:</p>
								<p>{this.props.defaultJSON}</p></div>)
						}
						<button type='submit'>Submit JSON</button>
					</form>
				</section>
			);
		}
		return ([__content]);
	}
}

const mapDispatchToProps = (__dispatch) => {
	return {
				onFindCurrentPage		:		()			=> __dispatch(pagesActions.findCurrentPage('upload')),
				onSubmitJSONViaGet		:		(__json)	=> __dispatch(action(pagesActions.SUBMIT_JSON_VIA_GET_SAGA, __json)),
				onSubmitJSONViaPost		:		(__json)	=> __dispatch(action(pagesActions.SUBMIT_JSON_VIA_POST_SAGA, __json)),
	}
}

// Connect component to store
const mapStateToProps = (state)=>{
	return {
		pages		:	state.json.pages.pages,
		currentPage :	state.json.pages.currentPage,
		defaultJSON	:	unescape(JSON.stringify(state.json.pages.default))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JSONUpload);