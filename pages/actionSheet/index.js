// pages/actionSheet/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s1:false,
    s2:false,
    s3:false,
    s4:false,
    list1:[
      {
        name:"分享一下哦~",
        icon:'/img/share.png',
        open_type:'share'
      },
      {
        name:"转发一下哦~",
        icon:'/img/love.png'
      },
    ]
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

  
  onLoad: function (options) {

  },

  
  onShow: function () {

  },

  cancel(){
    console.log('用户点击了取消按钮')
  },
  confirmClick(e){
    if(e.detail.index==0){
      console.log('用户点击了第一个选项')
    }
    if(e.detail.index==1){
      console.log('用户点击了第2个选项')
    }
  },
})