import  * as constants from './constants';
import axios from 'axios';

const homeAction = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writterList: result.writterList
});
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = homeAction(result);
            dispatch(action);
        }).catch((err) => {
            console.log(err);
        });
    }
}