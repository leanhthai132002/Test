import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { createProduct, getProduct, updateProduct } from '../api/product'

type PRODUCT_TYPE = {
    name: string,
    price: number
}

function ProductForm() {
    const navigate = useNavigate()
    const { id } = useParams()

    const { register, handleSubmit, reset } = useForm({ defaultValues: { name: '', price: 0 } })
    
    const onSubmit: SubmitHandler<PRODUCT_TYPE> = (data) => {
        const submitData = {
            ...data,
            price: +data.price
        };

        if (id) {
            return handleUpdateProduct(submitData)
        } return handleCreateProduct(submitData)
    }
        const handleUpdateProduct = async(data: any) => {
            const response = await updateProduct(id, data)
            if (response.status === 200) {
                navigate('/')
            }
        }

        const handleCreateProduct = async(data: any) => {
            const response = await createProduct(data)
            if (response.status === 201) {
                navigate('/')
            }
        }

        const handleGetPost = async (id: string) => {
            const response = await getProduct(id)
            if (response.status === 200) {
                reset({
                    ...response.data,
                    status: `${response.data.status}`
                })
            }
        }
        useEffect(()=>{
            if (id) {
                handleGetPost(id)
            }
        }, [id])
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='form-label' htmlFor="">Name</label>
                <input type="text" className='form-control' {...register('name')} />
                <label htmlFor="">Price</label>
                <input type="text" className='form-control' {...register('price')} />
                <button className='btn btn-dark'>Submit</button>
            </form>
        </div>
    )
}

export default ProductForm