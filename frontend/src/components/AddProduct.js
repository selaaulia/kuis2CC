import { useState } from 'react'
import api from '../service/api';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        await api.post('/',{
            title: title,
            price: price
        });
        navigate("/");
    }
    return (
        <div>
            <form onSubmit={saveProduct}>
                <div className="field">
                    <label className="label">Title</label>
                    <input 
                    className="input" 
                    type="text" 
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label className="label">Price</label>
                    <input 
                    className="input" 
                    type="text" 
                    placeholder="Price" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className="field">
                    <button className="button is-primary">Save</button>
                    <Link to={'/'} className='button is-danger ml-2'>Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default AddProduct
