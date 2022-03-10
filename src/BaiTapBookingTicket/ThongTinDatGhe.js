import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../redux/actions/BaitapDatVeAction'
import { HUY_GHE } from '../redux/types/BaiTapDatVeType'
class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                    <button className='gheDuocChon'></button> <span className='text-light' style={{ fontSize: '30px' }}>Ghế đã đặt</span><br />
                    <button className='gheDangChon'></button> <span className='text-light' style={{ fontSize: '30px' }}>Ghế đang đặt</span> <br />
                    <button className='ghe' style={{ marginLeft: 0 }}></button> <span className='text-light' style={{ fontSize: '30px' }}>Ghế chưa chọn</span><br />
                </div>

                <div className='mt-2 '>
                    <table className="table" border="2">
                        <thead>
                            <tr className='text-light' style={{ fontSize: '25px' }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='text-warning'>
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia}</td>
                                    <td><button onClick={() => {
                                        this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                                    }}>Hủy</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className='text-warning'>
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                    return tongTien += gheDangDat.gia;
                                }, 0).toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}
export default connect(mapStateToProps)(ThongTinDatGhe)
