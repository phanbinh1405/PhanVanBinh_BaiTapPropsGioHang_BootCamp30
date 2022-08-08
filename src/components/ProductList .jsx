import React, { Component } from 'react';
import PhoneDetail from './PhoneDetail';
import ProductItem from './ProductItem ';
const data = [
  {
    maSP: 1,
    tenSP: 'VinSmart Live',
    manHinh: 'AMOLED, 6.2, Full HD+',
    heDieuHanh: 'Android 9.0 (Pie)',
    cameraTruoc: '20 MP',
    cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
    ram: '4 GB',
    rom: '64 GB',
    giaBan: 5700000,
    hinhAnh: './img/vsphone.jpg',
  },
  {
    maSP: 2,
    tenSP: 'Meizu 16Xs',
    manHinh: 'AMOLED, FHD+ 2232 x 1080 pixels',
    heDieuHanh: 'Android 9.0 (Pie); Flyme',
    cameraTruoc: '20 MP',
    cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
    ram: '4 GB',
    rom: '64 GB',
    giaBan: 7600000,
    hinhAnh: './img/meizuphone.jpg',
  },
  {
    maSP: 3,
    tenSP: 'Iphone XS Max',
    manHinh: 'OLED, 6.5, 1242 x 2688 Pixels',
    heDieuHanh: 'iOS 12',
    cameraSau: 'Chính 12 MP & Phụ 12 MP',
    cameraTruoc: '7 MP',
    ram: '4 GB',
    rom: '64 GB',
    giaBan: 27000000,
    hinhAnh: './img/applephone.jpg',
  },
];

export default class ProductList extends Component {
  renderDienThoai = () => {
    return data.map((dt) => {
      return (
        <div className='col-4' key={dt.maSP}>
          <ProductItem dt={dt} showDetail={this.props.showDetail} themGioHang={this.props.themGioHang} />
        </div>
      );
    });
  };
  render() {
    const { gioHang, dt } = this.props;
    let tongSoLuong = gioHang.reduce((tongSoLuong, item) => {
      return (tongSoLuong += item.soLuong);
    }, 0);
    return (
      <div className='container'>
        <div className='d-flex my-5 justify-content-between align-items-center'>
          <h2 className='text-success'>Danh Sách Sản Phẩm</h2>
          <span
            data-bs-toggle='modal'
            data-bs-target='#modelId'
            style={{ cursor: 'pointer', fontWeight: 'bold', color: 'red' }}
          >
            Giỏ hàng (<span>{tongSoLuong}</span>)
          </span>
        </div>
        <div className='row mb-5'>{this.renderDienThoai()}</div>
        <div className='row'>
          <PhoneDetail dt={dt} />
        </div>
      </div>
    );
  }
}
