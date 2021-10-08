Page({

  /**
   * 页面的初始数据
   */
  data: {
    color: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    value: ''
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

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

  },
  shengcheng: function () {
    var k = this
    // 自定义颜色
    // var color = ['#FFC796', '#fdcb6e', '#00cec9', '#9EFBD3', '#57E9F2', '#45D4FB', '#FF6B95']
    // 自定义比例
    var id_1 = Math.ceil(Math.random() * 360);
    var id_2 = Math.ceil(Math.random() * 10);
    var id_3 = Math.ceil(Math.random() * 60) + 20;
    var id_4 = Math.ceil(Math.random() * 80);
    var randomx = Math.floor(Math.random() * 10);
    // console.log(randomx)
    // 0 1 2
    // 3 4 5
    // 0 6 5
    
    // 生成随机色 
    //  var temp=id_1+"deg,"+"#55efc4"+" "+id_2+"%,"+"#81ecec"+" "+id_3+"%,"+"#ff7675"+" "+id_4+"%"
    //  var temp=id_1+"deg,"+"#FFC796"+" "+id_2+"%,"+"#FF6B95"+" "+id_3+"%,"+"#6c5ce7"+" "+id_4+"%"
    var temp=id_1+"deg,"+"#6c5ce7"+" "+id_2+"%,"+"#6c5ce7"+" "+id_3+"%,"+"#74b9ff"+" "+id_4+"%"
    // var temp = id_1 + "deg," + "#ee4866" + " " + id_2 + "%," + "#eea2a4" + " " + id_3 + "%," + "#eea2a4" + " " + id_4 + "%"
    k.setData({
      color: temp
    })
  },
  copy() {
    var k = this
    wx.setClipboardData({
      data: k.data.color,
      success: res => {
        wx.showToast({
          title: '已复制',
          duration: 2000,
        })
      }
    })
  },
})
