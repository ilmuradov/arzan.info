const SET_DISCOUNTS = "SET_DISCOUNTS"

const initialState = {
    discounts: [
        { 
            name: "😘😘Arzanladyş!!! ❤ Çaga basanoşga",
            img: "https://arzan.info:3021/api/uploads/posts/20675/01238115-cf27-47e7-8fbc-1e3aa68fd49e.png"
        }
    ]
}

const discountsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DISCOUNTS: return {
            ...state
        }
        default: return state
    }
}

export default discountsReducer