import api from './api';
import request from './request'

export const martchLogin = async (data) => await request.post(api.LOGIN, data);

export const RegisterUser = async (data) => await request.post(api.REGISTER, data);

export const fetchGroupList = (data) => request.post(api.PAGINATION, data);