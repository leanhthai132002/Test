import React, { useEffect, useState } from "react";
import { getProducts, removeProduct } from "../api/product";
import { Link } from "react-router-dom";
type PRODUCT_TYPE = {
    id: number,
    name: string,
    price: number
}

function Product() {
    const [products, setproducts] = useState<PRODUCT_TYPE[]>([])

    const handleGetProducts = async () => {
        const response = await getProducts()
        setproducts(response.data)
    }

    const onRemove = async (id: string | undefined) => {
        const response = await removeProduct(id)
        if (response.status = 200) {
            handleGetProducts()
        }
    }

    useEffect(() => {
        handleGetProducts()
    }, [])
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><Link className="btn btn-danger" to={`/edit/${product.id}`}>Edit</Link></td>
                            <td>
                                <button className="btn btn-success" onClick={() => onRemove(product.id as any)}>
                                    Xoá
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Product