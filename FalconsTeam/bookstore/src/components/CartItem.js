import React from 'react';
import { API_CART, API_CART_DELETE } from '../paths';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartList: [],
            errorMessage: ''
        }
        this.showMessage = this.showMessage.bind(this);
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
    removeItem(id) {
        fetch(API_CART_DELETE + '/' + id)
            .then(r => r.json())
            .then(responseJSON => {
                console.log(`Remove Item Metodu Çalıştı`);
                const deletedList = this.state.cartList.filter((item) => {
                    return item.id !== id;
                })
                this.setState({
                    cartList:deletedList
                })
            }).catch(e => {
                this.setState({
                    errorMessage: e.toString()
                })
            })

    }
    showMessage() {

    }
    render() {
        return this.state.cartList.map((item, index) =>
            <tr key={index}>
                <td><img src={require(`../images/${item.picture}.jpg`)} height={50} width={50} alt="İmg" /> </td>
                <td>{item.name}</td>
                <td>{item.author}</td>
                <td className="text-center">{item.publisher}</td>
                <td className="text-right">{item.price}</td>
                <td className="text-right"><button className="btn btn-sm btn-danger" onClick={() => {
                    this.removeItem(item.id)
                }}><i className="fa fa-trash"></i> </button> </td>

            </tr>
        )
    }
}

export default CartItem;