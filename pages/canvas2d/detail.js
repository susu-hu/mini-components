// pages/canvas2d/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html'

  },

  
  onLoad: function (options) {

  },

 
  onShow: function () {

  },
  toGW(){
    wx.navigateTo({
      url: '/pages/canvas2d/canvasGW?url='+this.data.src,
    })
  }
  
})