import React from 'react';
import { Link } from 'react-router-dom'
import { API_PRODUCTS, API_PRODUCTS_DELETE } from '../paths';


class BookDeleteItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            errorMessage: ''
        }
        //  this.addCartProduct = this.addCartProduct.bind(this);
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
    deleteBook(id) {
        fetch(API_PRODUCTS_DELETE + '/' + id)
            .then(r => r.json())
            .catch(e => {
                this.setState({
                    errorMessage: e.toString()
                })
            })


    }
    render() {
        console.log(this.state.productList);
        return this.state.productList.map((item, index) =>
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <div className="card h-100">
                    <Link to="/">
                        <img className="card-img-top" src={require(`../images/${item.picture}.jpg`)} alt="img" width="100px;" height="250px;" />
                    </Link>
                    <div className="card-body">
                        <h4 className="card-title">
                            <Link to="#"><h4>Kitap Adı : {item.name}</h4></Link>
                        </h4>
                        <br />
                        <h6>Yazar Adı : {item.author}</h6>

                        <h6>Yayın Evi : {item.publisher}</h6>

                        <h5>Fiyatı : {item.price} TL</h5>
                        <p className="card-text"></p>
                    </div>
                    <div className="card-footer">
                        <h5><button type="button" className="btn btn-primary" onClick={() => {
                            this.deleteBook(item.id)
                        }}>Sil</button>  </h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookDeleteItem;