import React from 'react';
import { API_CATEGORY } from '../paths';
import { Link } from 'react-router-dom'


class Left extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: []
        }
    }
    componentDidMount() {
        fetch(API_CATEGORY, { method: 'GET' })
            .then(r => r.json())
            .then(responseJSON => {
                console.log(responseJSON);
                this.setState({
                    categoryList: responseJSON
                })
            }).catch(e => {
                this.setState({
                    errorMessage: e.toString()
                })
            })
    }
    render() {
        return <div> <Link to={`/`} className="list-group-item" >Hepsi</Link>{this.state.categoryList.map((item, index) =>//category/id şeklinde yazılacak
            <Link to={`category/${item.id}`} className="list-group-item" key={index}>{item.name}</Link>
        )}</div>
    }
}


export default Left;