// components/customTb/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    idx: {
      type: Number,
      value: 0
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    tabBar: [{
      "pagePath": "/pages/index/index",
      "text": "首页",
      "switchQr": false,
      "iconPath": "../../img/tabbar01.png",
      "selectedIconPath": "../../img/tabbar02.png",
    },
    {
      "pagePath": "",
      "text": "看一看",
      "switchQr": true,
      "iconPath": "https://i.postimg.cc/mgsKJGLw/susu1.jpg",
    },
    {
      "pagePath": "/pages/my/index",
      "text": "我的",
      "switchQr": false,
      "iconPath": "../../img/tabbar03.png",
      "selectedIconPath": "../../img/tabbar04.png",
    },
    ]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    goToTab: function (e) {
      //如果点击当前页面则不进行跳转
      if (this.data.idx == e.currentTarget.dataset.index) {
        return false
      }
      wx.switchTab({
        url: e.currentTarget.dataset.url
      })
    },
    // 扫码
    switchQr() {
      this.triggerEvent('look',)
    },

  }
})