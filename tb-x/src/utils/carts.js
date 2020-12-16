import { post, get, delate } from './request.js';
/* 调用购物车接口 */
/* 商品和商品id */
export function addToCart(product, num) {
  return post('/api/v1/shop_carts', {
    product,
    quantity: num,
  });
}
/* 加载购物车 */
export function loadCarts() {
  return get('/api/v1/shop_carts');
}
// 根据id删除商品
export function delpro(id) {
  return delate('/api/v1/shop_carts/' + id);
}
