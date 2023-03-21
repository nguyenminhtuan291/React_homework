import React from 'react'

function GlassesDetails({product}) {
  return (
    <div className="col-sm-6 d-flex justify-content-center">
    <div className="card card-model justify-content-center w-50">
        <img className="card-img-top " src="./glassesImage/model.jpg" alt="Model" />
        <img className="card-glasses img-fluid w-50" src={product.url} alt="" />
        <div className="card-body vg-glasses">
            <h2 className="card-branch">{product.name}</h2>
            <h6 className="card-text">{product.desc}</h6>
        </div>
    </div>
</div>
  )
}

export default GlassesDetails