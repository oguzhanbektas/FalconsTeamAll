import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { API_PRODUCTS_SAVE } from '../paths';


class AddBook extends React.Component {

    constructor() {
        super();
        this.state = {
            categories: [
                { label: "Roman", value: 1 },
                { label: "Bilim-Kurgu", value: 2 },
                { label: "Çocuk", value: 3 },
                { label: "Edebiyat", value: 4 },
                { label: "Psikoloji", value: 5 },
                { label: "Şiir", value: 6 },
                { label: "Tarih", value: 7 }
            ]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target)

        fetch(API_PRODUCTS_SAVE, {
            method: 'POST',
            body: data,
        });
    }

    render() {
        return <div className="col-lg-6" className="center-div">
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Kitabın Adı</Form.Label>
                    <Form.Control type="text" placeholder="Kitabın adını giriniz" name="name" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Yazarın Adı</Form.Label>
                    <Form.Control type="text" placeholder="Yazarın adını giriniz" name="author" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Resim Yolu</Form.Label>
                    <Form.Control type="text" placeholder="Resim Yolunu Giriniz" dafaultValue="1984" name="picture" />
                </Form.Group>


                <Form.Group>
                    <Form.Label>Kategori</Form.Label>
                    <div >
                        <div>
                            <div >
                                <Select options={this.state.categories} name="category_id" />
                            </div>
                        </div>
                    </div>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Yayınevi</Form.Label>
                    <Form.Control type="text" placeholder="Kitabın yayınevini giriniz" name="publisher" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Yayın Yılı</Form.Label>
                    <Form.Control type="number" placeholder="Kitabın yayın yılını giriniz" name="publishYear" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Fiyat (TL)</Form.Label>
                    <Form.Control type="number" placeholder="Kitabın fiyatını giriniz" name="price" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Kaydet
        </Button>

            </Form>
            
        </div>
    }
}

export default AddBook;