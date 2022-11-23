
function request(url) {
  return new Promise((resolve,reject)=>{
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      ...url,
      success:(data)=>{
        resolve(data.data)
      },
      fail:(rej)=>{
        reject(rej)
      },
      complete:()=>{
        wx.hideLoading()
      }
    })
  })
}

module.exports = request