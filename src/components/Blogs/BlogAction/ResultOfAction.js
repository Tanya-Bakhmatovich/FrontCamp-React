import React from 'react';

export default class ResultOfAction extends React.Component {

    render() {
        const { message, success } = this.props;
        const actionClass = success ? 'alert-success' : 'alert-danger';

        return (
            <div className={`${actionClass}`}>
                {message}
            </div>
        );
    }
}
