import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    const { dt, xoaGioHang, tangGiamSoLuong } = this.props;
    return (
      <div
        className='modal fade'
        id='modelId'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='modelTitleId'
        aria-hidden='true'
      >
        <div
          className='modal-dialog'
          style={{ maxWidth: '850px' }}
          role='document'
        >
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Giỏ Hàng</h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {dt.map((item) => {
                    return (
                      <tr key={item.maSP}>
                        <td>{item.maSP}</td>
                        <td>{item.tenSP}</td>
                        <td>
                          <img
                            src={item.hinhAnh}
                            width={100}
                            height={100}
                            alt=''
                          />
                        </td>
                        <td>
                          <button
                            className='btn btn-success'
                            onClick={() => tangGiamSoLuong(item.maSP, false)}
                          >
                            -
                          </button>
                          <span
                            style={{ display: 'inline-block', padding: '10px' }}
                          >
                            {item.soLuong}
                          </span>
                          <button
                            className='btn btn-success'
                            onClick={() => tangGiamSoLuong(item.maSP, true)}
                          >
                            +
                          </button>
                        </td>
                        <td>{item.giaBan.toLocaleString()}</td>
                        <td>{(item.soLuong * item.giaBan).toLocaleString()}</td>
                        <td>
                          <button
                            className='btn btn-danger text-white'
                            onClick={() => xoaGioHang(item)}
                          >
                            Xoá
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5}></td>
                    <td>Tổng tiền</td>
                    <td>
                      {dt
                        .reduce((tongTien, item) => {
                          return (tongTien += item.soLuong * item.giaBan);
                        }, 0)
                        .toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
