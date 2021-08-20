// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page_list:[
      {
        showmore:false,
        name:'组件一：',
        list:[
          {
            name:'canvas2d--圆环进度条',
            url:'/pages/canvas2d/index'
          },
          {
            name:'组件详情',
            url:'/pages/canvas2d/detail'
          },
        ]
      }, 
      {
        showmore:true,
        name:'组件二：',
        list:[
          {
            name:'根据wx.showModal封装的弹框组件',
            url:'/pages/toastModal/index'
          },
          {
            name:'组件详情',
            url:'/pages/toastModal/detail'
          },
        ]
      }, 
      
    ]

  },
  
  toDetail(e){
    let {url}=e.currentTarget.dataset;
    wx.navigateTo({
      url: url,
    })
  },
 
  onLoad: function (options) {
    wx.stopPullDownRefresh() //刷新完成后停止下拉刷新动效
  },

  onReady: function () {

  },


  onShow: function () {
   
  
  },
  showMore(e){
    let {index}=e.currentTarget.dataset,{page_list}=this.data;
    page_list[index].showmore=!page_list[index].showmore
    this.setData({
      page_list:page_list
    })
  }


 


})