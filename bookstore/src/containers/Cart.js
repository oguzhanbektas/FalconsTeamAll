import React from 'react';

import CartItem from '../components/CartItem';
import { API_CART, API_CART_DELETE_ALL } from '../paths';
import { Link } from 'react-router-dom';


class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartList: [],
            total: 0
        }
        this.getTotal = this.getTotal.bind(this);
    }

    componentDidMount() {
        fetch(API_CART, { method: 'GET' })
            .then(r => r.json())
            .then(responseJSON => {
                console.log(responseJSON);
                this.setState({
                    cartList: responseJSON
                })
            }).catch(e => {
                this.setState({
                    errorMessage: e.toString()
                })
            })
    }
    getTotal() {
        this.state.cartList.map((item, index) =>
            this.state.total += item.price
        )
    }
    getPayment() {//İptal Sıkıntı çıkarıyor zaman kalmadı.
        fetch(API_CART_DELETE_ALL, { method: 'GET' })
            .then(r => r.json())
            .then(responseJSON => {
                console.log(responseJSON);
                this.setState({
                    cartList: responseJSON
                })
            }).catch(e => {
                this.setState({
                    errorMessage: e.toString()
                })
            })
    }

    render() {
        this.getTotal()
        console.log(this.state.total);
        return <div><div className="container mb-4">
            <div className="row">
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col"> </th>
                                    <th scope="col">Kitap Adı</th>
                                    <th scope="col">Yazarı</th>
                                    <th scope="col" className="text-center">Yayın Evi</th>
                                    <th scope="col" className="text-right">Fiyat</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                <CartItem />
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Ara Tutar  </td>
                                    <td className="text-right">{this.state.total} TL</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Kargo Ücreti  </td>
                                    <td className="text-right">6,90 TL</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>Tutar</strong></td>
                                    <td className="text-right"><strong>{this.state.total + 6.90} TL</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col mb-2">
                    <div className="row">
                        <div className="col-sm-12  col-md-6">
                            <Link to="/"><button className="btn btn-lg btn-block btn-success text-uppercase">Alışverişe Devam Et</button></Link>
                        </div>
                        <div className="col-sm-12 col-md-6 text-right">
                            <Link to="/"><button className="btn btn-lg btn-block btn-success text-uppercase">Ödemeyi Tamamla</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    }
}
export default Cart;