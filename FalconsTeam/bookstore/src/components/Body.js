import React from 'react';
import Left from './Left';
import Right from './Right';

class Body extends React.Component {
    render() {
        return <div className="container">
            <div className="row">
                <Left />
                <div className="col-lg-9">
                    <div className="row">
                        <Right />
                    </div>
                </div>
            </div>
        </div>
    }

}


export default Body;