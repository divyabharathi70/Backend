import React, { useState } from 'react'

const ProductUpdate = () => {

    const [product, setProduct] = useState({
        name: "Laptop",
        price: 45000,
        stock: 10
    })

    const addBrand = () => {

        let update = { ...product }

        update["name"] = "Dell"

        setProduct(update)
    }

    const updatePrice = () => {
        let update = { ...product }
        update.price = update.price + 5000
        setProduct(update)
    }

    return (

        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-3">
                    Product: {product.name}
                </h3>

                <h3 className="text-lg font-medium mb-3">
                    Price: ₹{product.price}
                </h3>

                <h3 className="text-lg font-medium mb-5">
                    Stock: {product.stock}
                </h3>

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-3"
                    onClick={addBrand}
                >
                    Add Brand
                </button>

                <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={updatePrice}
>
                    Update Price
                </button>

            </div>

        </div>

    )
}

export default ProductUpdate