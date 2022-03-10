import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatVeType";

const initialState = {
    danhSachGheDangDat: [
        { soGhe: 'A1', gia: 1000 }
    ]
}

const BaiTapDatVeReducer = (state = initialState, action) => {
    switch (action.type) {

        case DAT_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) {
                // ghế đã có trong mảng thì remove
                danhSachGheDangDatUpdate.splice(index, 1);
            } else {
                // ghế chưa có trong mảng thì push vào
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            // cập nhật state để giao diện render lại
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
            return { ...state }
        }


        case HUY_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if (index !== -1) {
                // ghế đã có trong mảng thì remove
                danhSachGheDangDatUpdate.splice(index, 1);
            }
            // cập nhật state để giao diện render lại
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
            return { ...state }

        }
        default:
            return state;
    }
}
export default BaiTapDatVeReducer
