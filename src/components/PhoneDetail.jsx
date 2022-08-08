import React, { Component } from 'react'

export default class PhoneDetail extends Component {
  render() {
    const {dt} = this.props
    return (
      <React.Fragment>
        <div className='col-6 text-center'>
          <h3 className='text-success'>{dt.tenSP}</h3>
          <img
            width={250}
            height={250}
            src={dt.hinhAnh}
          />
        </div>
        <div className='col-6'>
          <h3>Thông Số Kỹ Thuật</h3>
          <table className='table'>
            <tbody>
              <tr>
                <td>Màn Hình</td>
                <td>{dt.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ Điều Hành</td>
                <td>{dt.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera Trước</td>
                <td>{dt.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera Sau</td>
                <td>{dt.cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{dt.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{dt.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
