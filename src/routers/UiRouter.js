import React from 'react';
import { connect } from 'react-redux';
import{ Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../store/configureStore';
import NotFoundPage from '../components/pages/NotFoundPage';
import JSONUpload from '../components/pages/JSONUpload';
import JSONUploadError from '../components/pages/JSONUploadError';
import JSONUploadSuccess from '../components/pages/JSONUploadSuccess';

// Modes
// Confirm
class UiRouter extends React.Component
{
    
    render(){
        return <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={JSONUpload} />
                <Route path="/upload" component={JSONUpload} />
                <Route path="/upload-success" component={JSONUploadSuccess} />
                <Route path="/upload-error" component={JSONUploadError} />
                <Route component={NotFoundPage}/>
            </Switch>  
        </ConnectedRouter>
    }   
}

const mapStateToProps = (state)=>{
    return {
        currentPage :   state.router.location.pathname
    }
}

export default connect(mapStateToProps)(UiRouter);
