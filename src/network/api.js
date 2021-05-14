const api = {};
// 基本地址
api.BASE_URL = 'http://aston.zapto.org:28500/web/pictures';

// 登录
api.LOGIN = `${api.BASE_URL}/login`;

// 注册
api.REGISTER = `${api.BASE_URL}/register`;

// 修改个人信息
api.MODIFY_INFO = `${api.BASE_URL}/save`;

// 获取个人所有信息
api.FETCH_INFO = `${api.BASE_URL}/acquire`;

// 热门标签
api.HOT_TAGS = `${api.BASE_URL}/tags`;

// 标签对应的表情包组
api.HOT_TAG_GROUPS = `${api.BASE_URL}/tag-detail`;

// 表情包组
api.GROUP_PAGINATION = `${api.BASE_URL}/group`;

// 热门表情包组
api.HOT_PAGINATION = `${api.BASE_URL}/hot`;

// 表情包分类
api.SORT_GROUPS = `${api.BASE_URL}/sort`;

// 表情包收藏
api.GROUP_STAR = `${api.BASE_URL}/star`;

// 表情包是否已收藏
api.GROUP_STAR_EXIST = `${api.BASE_URL}/exist`;

// 表情包取消收藏
api.CANCEL_STAR = `${api.BASE_URL}/cancel`;

// 获取已经收藏的表情包
api.FETCH_STAR_LIST = `${api.BASE_URL}/star-list`;

// 获取自己发布的表情包
api.FETCH_SELF_LIST = `${api.BASE_URL}/upload-list`;

// 发布表情包
api.UPLOAD = `${api.BASE_URL}/upload`;

// 搜索表情包
api.SEARCH = `${api.BASE_URL}/search`;

export default api;
