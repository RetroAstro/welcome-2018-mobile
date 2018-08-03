import axios from 'axios'

export default {
  getList (data) {
    return axios({
      method: 'GET',
      url: 'https://cnodejs.org/api/v1/topics',
      params: data
    })
  }
}
