import React from 'react';
import { connect } from 'react-redux';
import { action } from 'typesafe-actions';
import { Link } from 'react-router-dom';
import * as pageActions from '../../store/actions/pages';

class NotFoundPage extends React.Component
{
    render()
    {
        return (
            <section  className="grid__container u-padding-top-from-nav">
                <p>Page not found</p>
                <Link
                    to='/upload'
                    onClick={() => this.props.onResetJSON()}>Start Over</Link>
            </section>
        )
    }
}

const _mapDispatchToProps = (__dispatch) => {
    return {
        onResetJSON: (__json) => __dispatch(action(pageActions.RESET_JSON_UPLOAD))
    }
}

export default connect(null, _mapDispatchToProps)(NotFoundPage);