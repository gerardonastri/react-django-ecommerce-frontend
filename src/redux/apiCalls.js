import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {publicRequest} from '../requestMethods'

export const login = async (dispatch, user) =>{
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("auth/login/", {
            username: user.username,
            password: user.password
        });
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const register = async (dispatch, user) =>{
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("auth/register/", {
            username: user.username,
            password: user.password
        });
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}