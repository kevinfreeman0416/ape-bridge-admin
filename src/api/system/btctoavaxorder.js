import request from '@/utils/request'

// 查询btc跨链信息列表
export function listBtctoavaxorder(query) {
  return request({
    url: '/system/btctoavaxorder/list',
    method: 'get',
    params: query
  })
}

// 查询btc跨链信息详细
export function getBtctoavaxorder(id) {
  return request({
    url: '/system/btctoavaxorder/' + id,
    method: 'get'
  })
}

// 新增btc跨链信息
export function addBtctoavaxorder(data) {
  return request({
    url: '/system/btctoavaxorder',
    method: 'post',
    data: data
  })
}

// 修改btc跨链信息
export function updateBtctoavaxorder(data) {
  return request({
    url: '/system/btctoavaxorder',
    method: 'put',
    data: data
  })
}

// 删除btc跨链信息
export function delBtctoavaxorder(id) {
  return request({
    url: '/system/btctoavaxorder/' + id,
    method: 'delete'
  })
}
