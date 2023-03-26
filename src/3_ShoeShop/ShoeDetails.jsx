import React from 'react'

function ShoeDetails({product, onClose}) {
  if(!product) {
    return null;
  }
  return (
<>
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex={-1}
      >
        <div className="modal-dialog modal-lg" >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Chi tiết sản phẩm </h5>
              <button className="btn-close" onClick={onClose}/>
            </div>
            <div className="modal-body">
              <table className="table">
              <tbody>
          <tr>
            <td>Alias</td>
            <td>{product.alias}</td>
          </tr>
          <tr>
            <td>Giá</td>
            <td>{product.price}</td>
          </tr>
          <tr>
            <td>Mô tả</td>
            <td>{product.description}</td>
          </tr>
          <tr>
            <td>Ngắn Mô Tả</td>
            <td>{product.shortDescription}</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>{product.quantity}</td>
          </tr>
        </tbody>
              </table>
            </div>
            <div className="modal-footer">
            <button className="btn btn-secondary" onClick= {onClose} >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  )
}

export default ShoeDetails



