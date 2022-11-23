// pages/music/music.js
let request = require('../../utils/request')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //热门歌单
    hotCarList:[],
    //官方歌单
    officialsList:[],
    // 飙升榜
    upList:[],
    upPlay:0,
    // 热歌榜
    hotList:[],
    hotPlay:0,
    // 新歌榜
    newList:[],
    newPlay:0,
    //推荐歌曲
    randomMC:[]
  },

  //播放
  toplay(e){
    wx.navigateTo({
      url: `/pages/playMusic/playMusic?name=${e.currentTarget.dataset.name}&as=${e.currentTarget.dataset.as}`,
    })
  },
    
  gohot(){
    wx.navigateTo({
      url: '/pages/hotMusic/hotMusic',
    })
  },

  goup(){
    wx.navigateTo({
      url: '/pages/upMusic/upMusic',
    })
  },

  gonew(){
    wx.navigateTo({
      url: '/pages/newMusic/newMusic',
    })
  },

  gohotcar(){
    wx.navigateTo({
      url: '/pages/hotcar/hotcar',
    })
  },

  goocar(){
    wx.navigateTo({
      url: '/pages/ocar/ocar',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //播放状态
    wx.setStorageSync('play', false)

    //热门歌单
    request({
      url:'http://localhost:3000/api/hotCar'
    }).then(res=>{
      let data = res.filter((item,index)=>index<6);
      this.setData({
        hotCarList:data
      })
    })

    //官方歌单
    request({
      url:'http://localhost:3000/api/officialsCar'
    }).then(res=>{
      let data = res.filter((item,index)=>index<6);
      this.setData({
        officialsList:data
      })
    })

    //飙升榜
    request({
      url:'http://localhost:3000/api/up'
    }).then(res=>{
      let data = res.data.filter((item,index)=>index<3);
      this.setData({
        upList:data,
        upPlay:res.play_num
      })
    })

     //热歌榜
     request({
      url:'http://localhost:3000/api/hot'
    }).then(res=>{
      let data = res.data.filter((item,index)=>index<3);
      this.setData({
        hotList:data,
        hotPlay:res.play_num
      })
    })

    //推荐歌曲
    request({
      url:'http://localhost:3000/api/hotRandom'
    }).then(res=>{
      let data = res.map(item=>item[0])
      this.setData({
        randomMC:data
      })
    })

     //新歌榜
     request({
      url:'http://localhost:3000/api/new'
    }).then(res=>{
      let data = res.data.filter((item,index)=>index<3);
      this.setData({
        newList:data,
        newPlay:res.play_num
      })
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