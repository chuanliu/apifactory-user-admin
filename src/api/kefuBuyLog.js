import request from '@/utils/request'

export function fetchDataList(page, pageSize, data) {
  return request({
    url: '/user/kefuBuyLog/list',
    method: 'post',
    data: {
      page,
      pageSize,
      ...data
    }
  })
}
