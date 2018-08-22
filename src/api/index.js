import axios from 'axios'

export default {
  getHotQuesList (page) {
    return axios({
      method: 'GET',
      url: `https://wx.idsbllp.cn/game/xzbbm2018/index.php/api/getQuestion/最热问题/${page}/10`
    })
  },
  getNewQuesList (page) {
    return axios({
      method: 'GET',
      url: `https://wx.idsbllp.cn/game/xzbbm2018/index.php/api/getQuestion/最新问题/${page}/10`
    })
  },
  getCommentList (id) {
    return axios({
      method: 'GET',
      url: `https://wx.idsbllp.cn/game/xzbbm2018/index.php/api/question/${id}`
    })
  }
}
