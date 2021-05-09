import api from './api';
import request from './request'

export const martchLogin = (data) => request.post(api.LOGIN, data);

export const registerUser = (data) => request.post(api.REGISTER, data);

export const modifyInfomation = (data) => request.post(api.MODIFY_INFO, data);

export const fetchInformation = (data) => request.post(api.FETCH_INFO, data);

export const fetchHotTags = () => request.get(api.HOT_TAGS);

export const fetchHotGroups = (data) => request.post(api.HOT_TAG_GROUPS, data);

export const fetchGroupList = (data) => request.post(api.GROUP_PAGINATION, data);

export const fetchHotList = (data) => request.post(api.HOT_PAGINATION, data);

export const fetchSortGroup = (data) => request.post(api.SORT_GROUPS, data);

export const starGroup = (data) => request.post(api.GROUP_STAR, data);

export const groupStarExist = (data) => request.post(api.GROUP_STAR_EXIST, data);

export const cancelGroupStar = (data) => request.post(api.CANCEL_STAR, data);

export const fetchStarList = (data) => request.post(api.FETCH_STAR_LIST, data);

export const fetchSelfList = (data) => request.post(api.FETCH_SELF_LIST, data);

export const uploadGroup = (data) => request.post(api.UPLOAD, data);

export const searchList = (data) => request.post(api.SEARCH, data);
