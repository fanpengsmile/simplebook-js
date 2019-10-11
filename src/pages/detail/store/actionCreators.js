import axios from 'axios';
import * as contants from './constants';

const changeDetail = (data) => ({
    type: contants.CHANGE_DETAIL,
    title: data.title,
    content: data.content
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get("/api/detail.json?id=" + id).then((res) => {
            let data = res.data.data;
            dispatch(changeDetail(data));
        })
    }
}