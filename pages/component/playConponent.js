// component/playConponent.js
var app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {
      this.setData({
        isplay:wx.getStorageSync('play')
      })
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    isplay:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    topaly(){
      app.globalData.innerAudioContext.play() // 播放

      this.setData({
        isplay:true
      })
      wx.setStorageSync('play', true)
    },
    topus(){
      app.globalData.innerAudioContext.pause() // 暂停
      this.setData({
        isplay:false
      })
      wx.setStorageSync('play', false)
    }
  }
})
