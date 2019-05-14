import { takeLatest, put, call }  from 'redux-saga/effects';
import { action } from 'typesafe-actions';
import * as pagesActions from '../actions/pages';

export function* submitJSONViaPost(__action)
{
	let __error;
	let __route = 'upload-success';
	try
	{
		const __headers = {
			'Content-Type': 'application/json'
		}
		const __response = yield call(fetch,'/jsontransform', {
			method:'POST',
			headers:__headers,
			body:__action.payload
		});
		const __data = yield __response.json();
		yield put(action(pagesActions.SET_JSON_RESPONSE, __data));
	}
	catch(__err)
	{
		__route = 'upload-error';
		__error = __err;
	}
	yield call(setError, action(pagesActions.SET_JSON_RESPONSE_ERROR, __error));
	yield call(setRoute, action(pagesActions.SET_ROUTE, __route));
}

export function* setError(__action)
{
	yield put(action(pagesActions.SET_JSON_RESPONSE_ERROR, __action.payload));
}

export function* setRoute(__action)
{
	yield put(action(pagesActions.SET_ROUTE, __action.payload));
}

export function* watchPagesSaga()
{
	yield takeLatest(pagesActions.SUBMIT_JSON_VIA_POST_SAGA, submitJSONViaPost);
}