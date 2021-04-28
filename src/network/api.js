const api = {};
api.BASE_URL = 'http://127.0.0.1:8000/pictures';

// login
api.LOGIN = `${api.BASE_URL}/login`;

// register
api.REGISTER = `${api.BASE_URL}/register`;

// pagination
api.GROUP_PAGINATION = `${api.BASE_URL}/group`;

// pagination
api.HOT_PAGINATION = `${api.BASE_URL}/hot`;

export default api;
