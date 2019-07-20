import React from 'react';
import { API_CART_POST, API_PRODUCTS } from '../paths';


class DetailBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bookList: [],
            loading:true
        }
    }
    componentDidMount() {
        fetch(API_PRODUCTS + '/' + this.props.match.params.id, { method: 'GET' })
            .then(r => r.json())
            .then(responseJSON => {
                console.log(responseJSON);
                this.setState({
                    bookList: responseJSON,
                    loading:false
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
        if( this.state.loading) return <h1>Yükleniyor</h1>
        return <div>
            <div>
                <div className="container">
                    <div className="card">
                        <div className="row">
                            <aside className="col-sm-5 border-right">
                                <article className="gallery-wrap">
                                        <img className="card-img-top" src={require(`../images/${this.state.bookList.picture}.jpg`)} alt="img" width="400px;" height="550px;" />
                                </article>
                            </aside>
                            <aside className="col-sm-7">
                                <article className="card-body p-5">
                                    <h3 className="title mb-3">{this.state.bookList.name}</h3>
                                    <br />
                                    <p className="price-detail-wrap">
                                        <span className="price h3 text-warning">
                                            <span className="currency">  {this.state.bookList.price} </span><span className="num"> TL</span>
                                        </span>
                                    </p>
                                    <br />
                                    <dl className="item-property">
                                        <dt>Yazar Adı</dt>
                                        <dd><p> {this.state.bookList.author} </p></dd>
                                    </dl>
                                    <br />
                                    <dl className="item-property">
                                        <dt>Kategori</dt>
                                        <dd><p> {this.state.bookList.category.name}</p></dd>
                                    </dl>
                                    <br />
                                    <dl className="param param-feature">
                                        <dt>Basım Yılı</dt>
                                        <dd>{this.state.bookList.publishYear}</dd>
                                    </dl>
                                    <br />
                                    <dl className="param param-feature">
                                        <dt> Yayın Evi </dt>
                                        <dd>{this.state.bookList.publisher}</dd>
                                    </dl>
                                    <br />
                                    <hr></hr>
                                    <button type="button" className="btn btn-lg btn-primary text-uppercase" onClick={() => {
                                        this.addCartProduct(this.state.bookList.id)
                                    }}> Ekle </button>
                                </article>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default DetailBook;