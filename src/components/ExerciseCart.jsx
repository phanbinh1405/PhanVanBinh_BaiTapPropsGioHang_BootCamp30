import React, { Component } from 'react';
import Cart from './Cart ';
import ProductList from './ProductList ';

export default class ExerciseCart extends Component {
  state = {
    dt: {
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
    gioHang: [],
  };

  showDetail = (dt) => {
    return this.setState({
      dt: dt,
    });
  };

  themGioHang = (sanPham) => {
    const gioHangCapNhat = [...this.state.gioHang];
    const spGioHang = {
      maSP: sanPham.maSP,
      tenSP: sanPham.tenSP,
      hinhAnh: sanPham.hinhAnh,
      soLuong: 1,
      giaBan: sanPham.giaBan,
    };
    const findIndex = gioHangCapNhat.findIndex((item) => item.maSP === sanPham.maSP);

    if (findIndex >= 0) {
      gioHangCapNhat[findIndex].soLuong += 1;
    } else {
      gioHangCapNhat.push(spGioHang);
    }

    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  xoaGioHang = (sanPham) => {
    const gioHangClone = [...this.state.gioHang];
    const gioHangCapNhat = gioHangClone.filter((item) => item.maSP !== sanPham.maSP);

    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  tangGiamSoLuong = (maSP, tangGiam) => {
    const gioHangClone = [...this.state.gioHang];
    const findIndex = gioHangClone.findIndex((item) => item.maSP === maSP);
    if (tangGiam && findIndex !== -1) {
      gioHangClone[findIndex].soLuong += 1;
    }

    if (!tangGiam && findIndex !== -1) {
      if (gioHangClone[findIndex].soLuong > 1) {
        gioHangClone[findIndex].soLuong -= 1;
      } else {
        gioHangClone.splice(findIndex, 1);
      }
    }

    this.setState({
      gioHang: gioHangClone,
    });
  };
  render() {
    return (
      <div>
        <ProductList
          gioHang={this.state.gioHang}
          dt={this.state.dt}
          showDetail={this.showDetail}
          themGioHang={this.themGioHang}
        />
        <Cart
          dt={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />
      </div>
    );
  }
}
