import { get, post } from "./request";
/* 获取用户信息 */
export function loadUserInfo() {
  return get("/api/v1/users/info");
}
/* 修改用户信息 */
export function modifyUserInfo(nickName, avatar) {
  return post("/api/v1/users/change_info", {
    nickName,
    avatar,
  });
}
/* 修改用户密码 */
export function modifyUserPassword(oldPassword, password) {
  return post("/api/v1/users/change_pwd", {
    oldPassword,
    password,
  });
}
export function uploadUserAvatar(file) {
  return post("/api/v1/common/file_upload", file);
}
