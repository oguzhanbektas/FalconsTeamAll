import React from 'react';
import { Link } from 'react-router-dom'
import { API_CART_POST } from '../paths';
//import * as mockData from '../data.json';

class Right extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartList: []
        }
        //  this.addCartProduct = this.addCartProduct.bind(this);
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
        const { productList } = this.props;
        console.log(productList);
        console.log(this.state.cartList);
        return productList.map((item, index) =>
                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                    <div className="card h-100">
                        <Link to="/">
                            <img className="card-img-top" src={require(`../images/${item.picture}.jpg`)} alt="img" width="100px;" height="300px;" />
                        </Link>
                        <div className="card-body">
                            <h4 className="card-title">
                                <Link to={`/DetailBook/${item.id}`}><h4> {item.name}</h4></Link>
                            </h4>
                            <br />
                            <h6>{item.author}</h6>

                            <h6>{item.publisher} Yayın Evi </h6>

                            <h5> {item.price} TL</h5>
                            <p className="card-text"></p>
                        </div>
                        <div className="card-footer">
                            <h5><button type="button" className="btn btn-primary" onClick={() => {
                                this.addCartProduct(item.id)
                            }}>Ekle</button>  </h5>
                        </div>
                    </div>
                </div>
            )
    }
}


export default Right;