import React, { useState } from 'react'
import data from './dataShoeShop.json'
import ShoeDetails from './ShoeDetails'
import ShoeLIst from './ShoeLIst';

function ShoeSHop() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleGetProduct = (product) => {
    setSelectedProduct(product);
  };
  return (
    <div className='container'>
      <h1 className='text-center'>ShoeShop</h1>
      <ShoeLIst products={data} onSelectProduct={handleGetProduct} />
      <ShoeDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      </div>
  )
}

export default ShoeSHop