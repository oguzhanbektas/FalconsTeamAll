import React from 'react';

import { API_CATEGORY_BOOKS, API_CART_POST } from '../paths';
import { Link } from 'react-router-dom'
class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: [],
        }
    }
    componentDidMount() {
        fetch(API_CATEGORY_BOOKS + '/' + this.props.match.params.id, { method: 'GET' })
            .then(r => r.json())
            .then(responseJSON => {
                console.log(responseJSON);
                this.setState({
                    bookList: responseJSON
                })
            }).catch(e => {
                this.setState({
                    errorMessage: e.toString()
                })
            })
    }
    addCartProduct(id) {
        fetch(API_CART_POST + '/' + id)
            .then(r => r.json())
            .then(responseJSON => {
                this.setState({
                })
                alert('Bu ürünü zaten eklediniz .')
            }).catch(e => {
                this.setState({
                    errorMessage: e.toString()
                })
            })
    }
    render() {
        // const id=this.props.match.params.id
        return <div div className="col-lg-6" className="Qpadding">  
            <div className="row">
                {this.state.bookList.map((item, index) =>
                    <div className="col-lg-3 col-md-6 mb-4" key={index} >
                        <div className="card h-100">
                            <Link to="/">
                                <img className="card-img-top" src={require(`../images/${item.picture}.jpg`)} alt="img" width="100px;" height="350px;" />
                            </Link>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <Link to={`/DetailBook/${item.id}`}><h4> {item.name}</h4></Link>
                                </h4>
                                <br />
                                <h6>Yazar Adı <br/> {item.author}</h6>

                                <h6><br/>Yayın Evi <br/> {item.publisher}</h6>

                                <h5><br/>Fiyatı <br/>{item.price} TL</h5>
                                <p className="card-text"></p>
                            </div>
                            <div className="card-footer">
                                <h5><button type="button" className="btn btn-primary" onClick={() => {
                                    this.addCartProduct(item.id)
                                }}>Ekle</button>  </h5>
                            </div>

                        </div>
                    </div>
                )}</div></div>
    }


}

export default Category;