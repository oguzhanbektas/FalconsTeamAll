import React from 'react'
import { API_PRODUCTS } from '../paths';
import Left from './../components/Left'
import Right from './../components/Right';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: []
        }
    }

    componentDidMount() {
        fetch(API_PRODUCTS, { method: 'GET' })
            .then(r => r.json())
            .then(responseJSON => {
                console.log(responseJSON);
                this.setState({
                    productList: responseJSON
                })
            }).catch(e => {
                this.setState({
                    errorMessage: e.toString()
                })
            })
    }

    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <h1 className="my-3">Kategoriler</h1>
                    <div className="list-group">
                        <Left />
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        <Right productList={this.state.productList} />
                    </div>
                </div>
            </div>
        </div>)
    }
}
export default Home;