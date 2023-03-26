import React from 'react'
import ShoeItem from './ShoeItem'

function ShoeLIst({ products, onSelectProduct }) {
  const handleGetProduct = (product) => {
    onSelectProduct(product);
  };
  return (
    <div className="row">
    {products.map(product =>{
      return(
        <div key={product.id} className="col-sm-4">
          <ShoeItem product ={product}
              onSelectProduct={handleGetProduct} />
        </div>
      )
    })}
  </div>
  )
}

export default ShoeLIst