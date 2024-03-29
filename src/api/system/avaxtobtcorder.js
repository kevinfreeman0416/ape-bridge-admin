import request from '@/utils/request'

// 查询AvaxToBtcOrder列表
export function listOrder(query) {
  return request({
    url: '/system/avaxtobtcorder/list',
    method: 'get',
    params: query
  })
}

// 查询AvaxToBtcOrder详细
export function getOrder(id) {
  return request({
    url: '/system/avaxtobtcorder/' + id,
    method: 'get'
  })
}

// 新增AvaxToBtcOrder
export function addOrder(data) {
  return request({
    url: '/system/avaxtobtcorder',
    method: 'post',
    data: data
  })
}

// 修改AvaxToBtcOrder
export function updateOrder(data) {
  return request({
    url: '/system/avaxtobtcorder',
    method: 'put',
    data: data
  })
}

// 删除AvaxToBtcOrder
export function delOrder(id) {
  return request({
    url: '/system/avaxtobtcorder/' + id,
    method: 'delete'
  })
}
