export function isLogined() {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
}
export function gerToken() {
  return localStorage.getItem("token");
}
export function setToken(v) {
  return localStorage.setItem("token", v);
}
export const serverUrl = "http://192.168.11.103:3009";
