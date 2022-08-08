import React, { Component } from 'react';

export default class ProductItem extends Component {
  render() {
    const { dt, showDetail, themGioHang } = this.props;
    return (
      <div className='card'>
        <img
          className='card-img-top'
          width={200}
          height={350}
          src={dt.hinhAnh}
          alt='Title'
        />
        <div className='card-body'>
          <h4 className='card-title'>{dt.tenSP}</h4>
          <button className='btn btn-success' onClick={() => showDetail(dt)}>
            Xem Chi Tiết
          </button>
          <button className='btn btn-danger ms-4' onClick={() => themGioHang(dt)}>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
