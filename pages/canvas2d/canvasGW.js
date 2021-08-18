// pages/canvas2d/canvasGW.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:''
  },

  
  onLoad: function (options) {
    let url=options.url
    this.setData({
      url:url
    })

  },

  onShow: function () {

  },

  
  //获取url参数 
  getParams(params) {
    const reg = new RegExp("(^|&)" + params + "=([^&]*)(&|$)", "i");
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return decodeURIComponent(r[2]);
    }
    return null;
  },

})