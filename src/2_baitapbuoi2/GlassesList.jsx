import React from 'react'

function GlassesList({products, onSelect}) {
  return (
    <div className="container">
    <div className='mt-4 bg-light'>
        <div className="row">
            {products.map((product => {
                return (
                    <div key={product.id} className=" mx-auto col">
                        <button onClick={() => onSelect(product)} > 
                            <img className='img-fluid w-50' src={product.url} alt="#" />
                        </button>
                    </div>
                )
            }))}
        </div>
    </div>
</div>
  )
}

export default GlassesList