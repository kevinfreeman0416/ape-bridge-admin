import request from '@/utils/request'

// 查询KV列表
export function listKV(query) {
  return request({
    url: '/system/KV/list',
    method: 'get',
    params: query
  })
}

// 查询KV详细
export function getKV(key) {
  return request({
    url: '/system/KV/' + key,
    method: 'get'
  })
}

// 新增KV
export function addKV(data) {
  return request({
    url: '/system/KV',
    method: 'post',
    data: data
  })
}

// 修改KV
export function updateKV(data) {
  return request({
    url: '/system/KV',
    method: 'put',
    data: data
  })
}

// 删除KV
export function delKV(key) {
  return request({
    url: '/system/KV/' + key,
    method: 'delete'
  })
}
