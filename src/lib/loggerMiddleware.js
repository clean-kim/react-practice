const loggerMiddleware = store => next => action => {
    console.group(action && action.type);   // 액션 타입으로 log를 그룹화한다.
    console.log('이전 상태', store.getState());
    console.log('액션', action);
    next(action);
    console.log('다음 상태', store.getState());
    console.groupEnd();
};

/*
const loggerMiddlewareForm = function (store) {
    return function (next) {
        return function (action) {
        //    미들웨어 기본 구조
        }
    }
}
*/

export default loggerMiddleware;