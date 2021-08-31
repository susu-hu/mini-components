// pages/loading/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s1:false,
    s2:false,
    s3:false,
    s4:false,

  },
  showModal(e){
    let {type}=e.currentTarget.dataset,va='';
    if(type=='s1'){
      va="s1";
    }
    if(type=='s2'){
      va="s2";
    }
    if(type=='s3'){
      va="s3";
    }
    if(type=='s4'){
      va="s4";
    }
    this.setData({
      [va]:true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showLoading({
    //   title: '123',
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})