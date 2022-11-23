// pages/MV/MV.js
let request = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [],
    activeTab: 0,
    mvTuiJianList:[],
    upShua:true,
    mvList:[],
    beginNum:0
  },

  onTabClick(e) {
    const index = e.detail.index
    this.setData({ 
      activeTab: index 
    })
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({ 
      activeTab: index 
    })
  },

  getnew(){
    request({
      url:'http://localhost:3000/api/mvTuiJian'
    }).then(res=>{
      let data = res.map(item=>item[0])
      this.setData({
        mvTuiJianList:data,
        upShua:false
      })
    })
  },

  getmore(){
    if (this.data.beginNum<240) {
      
      if (this.data.activeTab == 1) {
        request({
          url:`http://localhost:3000/api/mv?page=${this.data.beginNum}`
        }).then(res=>{
          this.setData({
            mvList : [...this.data.mvList,...res]
          })
        })

        this.setData({
          beginNum:this.data.beginNum+8
        })
      }

      
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const tabs = [
      {
        title: '推荐',
      },
      {
        title: 'MV',
      }
    ]
    this.setData({ tabs })
    
    // tuijianmvlist
    this.getnew()
    

    //mvlist
    this.getmore()
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