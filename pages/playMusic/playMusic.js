// pages/playMusic/playMusic.js
var app = getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    play:false,
    as:''
  },

  play(){
    app.globalData.innerAudioContext.src = 'https://qvqzhm.oss-cn-guangzhou.aliyuncs.com/wxMusic/%E6%9C%89%E4%BD%95%E4%B8%8D%E5%8F%AF%20%28%E8%87%AA%E7%99%BD%E7%89%88%29%20-%20%E8%AE%B8%E5%B5%A9.mp3'
    
    app.globalData.innerAudioContext.play() // 播放
    this.setData({
      play:true
    })
    wx.setStorageSync('play', true)
  },

  pus(){
    app.globalData.innerAudioContext.pause()
    this.setData({
      play:false
    })
    wx.setStorageSync('play', false)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title:options.name
    })
    this.setData({
      as:options.as
    })
    this.setData({
      play:wx.getStorageSync('play')
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})