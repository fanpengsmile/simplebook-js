const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    if (action.type === 'search_focused') {
        return{
            focused: true
        }
    } else if (action.type === 'search_blur') {
        return{
            focused: false
        }
    }
    return state;
} 