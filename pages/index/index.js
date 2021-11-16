// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page_list: [
      {
        showmore: false,
        title: 'canvas2d--圆环进度条',
        list: [
          {
            name: 'canvas2d--圆环进度条',
            url: '/pages/canvas2d/index'
          },
          {
            name: 'canvas2d--圆环进度条2',
            url: '/pages/canvas2d/index2'
          },
          {
            name: '组件详情',
            url: '/pages/canvas2d/detail'
          },
        ]
      },
      {
        showmore: false,
        title: 'wx.showModal封装的弹框组件',
        list: [
          {
            name: '根据wx.showModal封装的弹框组件',
            url: '/pages/toastModal/index'
          },
          {
            name: '组件详情',
            url: '/pages/toastModal/detail'
          },
        ]
      },
      {
        showmore: false,
        title: 'wx.actionSheet封装的操作菜单',
        list: [
          {
            name: '根据wx.actionSheet封装的操作菜单组件',
            url: '/pages/actionSheet/index'
          },
          {
            name: '组件详情',
            url: '/pages/actionSheet/detail'
          },
        ]
      },
      {
        title: '星星评分',
        showmore: false,
        list: [
          {
            name: '星星评分',
            url: '/pages/rating/index'
          },
          {
            name: '组件详情',
            url: '/pages/rating/detail'
          },
        ]
      },
      {
        title: '自定义swiper组件',
        showmore: false,
        list: [
          {
            name: '自定义swiper组件',
            url: '/pages/swiper/index'
          },
          {
            name: '组件详情',
            url: '/pages/swiper/detail'
          },
        ]
      },
      {
        title: '自定义头部导航栏',
        showmore: false,
        list: [
          {
            name: '自定义头部导航栏',
            url: '/pages/customNav/index'
          },
          {
            name: '组件详情',
            url: '/pages/customNav/detail'
          },
        ]
      },
      {
        title: '自定义loading加载动画组件',
        showmore: false,
        list: [
          {
            name: '自定义loading加载动画组件',
            url: '/pages/loading/index'
          },
          {
            name: '组件详情',
            url: '/pages/loading/detail'
          },
        ]
      },
      {
        showmore: false,
        title: '自定义scroll Tab',
        list: [
          {
            name: '自定义scroll Tab',
            url: '/pages/tab/index'
          }
        ]
      },
      {
        title: '自定义tabbar',
        showmore: false,
        list: [
          {
            name: '自定义tabbar',
            url: '/pages/tabBar/index'
          },
        ]
      },
      {
        title: '自定义日历组件',
        showmore: true,
        list: [
          {
            name: '日历组件，可设置主题色',
            url: '/pages/cal/index'
          },
        ]
      },

    ]

  },

  toDetail(e) {
    let { url } = e.currentTarget.dataset;
    wx.navigateTo({
      url: url,
    })
  },
  show() {
    wx.showToast({
      title: '创作不易，star+关注一下',
      icon: 'none'
    })
  },

  onLoad: function (options) {
    wx.stopPullDownRefresh() //刷新完成后停止下拉刷新动效
  },

  onReady: function () {

  },


  onShow: function () {


  },
  showMore(e) {
    let { index } = e.currentTarget.dataset, { page_list } = this.data;
    page_list[index].showmore = !page_list[index].showmore
    this.setData({
      page_list: page_list
    })
  }





})