// pages/toastModal/index.js
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

  onLoad: function (options) {
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   editable:true,
    //   placeholderText:'zhuzhuzhzuz',
    //   success (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
  },

  onShow: function () {

  },
  confirmbtn(e){
    console.log(e)
    console.log('点击了确定键！')
  },
  cancelBtn(){
    console.log('点击了取消！')
  },
  getIptValue(e){
    console.log(e.detail)
  }
})