import api from './api';
import request from './request'

export const martchLogin = async (data) => await request.post(api.LOGIN, data);

export const RegisterUser = async (data) => await request.post(api.REGISTER, data);

export const fetchGroupList = (data) => request.post(api.GROUP_PAGINATION, data);

export const fetchHotList = (data) => request.post(api.HOT_PAGINATION, data);
