import api from "./axios"

export const getProducts = () => {
    return api.get("/product")
}

export const getProduct = (id: string|undefined) => {
    return api.get(`/product/${id}`)
}

export const createProduct = (data: any) => {
    return api.post("/product", data)
}

export const removeProduct = (id: string|undefined) => {
    return api.delete(`/product/${id}`)
}

export const updateProduct = (id: string|undefined, data: any) =>{
    return api.put(`/product/${id}`, data)
}