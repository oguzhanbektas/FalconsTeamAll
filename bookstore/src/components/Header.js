import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">Kitap Evreni</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Anasayfa
              <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Hakkımızda</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/AddBook">Ürün Ekle</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/BookDelete">Ürün Sil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-success btn-sm ml-3" to="/cart">
                                <i className="fa fa-shopping-cart"></i>'      Sepet<span className="badge badge-light"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    }

}
export default Header;