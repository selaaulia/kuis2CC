import { useState, useEffect } from 'react'
import api from '../service/api';
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await api.get('/');
        setProduct(response.data);
    }

    const deleteProduct = async (id) => {
        await api.delete(`/${id}`);
        getProducts();
    }

    return (
        <div>
            <Link to="/add" className='button is-primary mt-5'>Add New</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className='button is-small is-info mr-2'>Edit</Link>
                                <button onClick={() => deleteProduct(product.id)} className='button is-small is-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default ProductList
