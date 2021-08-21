// components/toastModal/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    is_show:{
      type:Boolean,
      value:false
    },
    title:{
      type:String,
      value:'提示'
    },
    content:{
      type:String,
      value:''
    },
    cancelText:{
      type:String,
      value:''
    },
    confirmText:{
      type:String,
      value:''
    },
    // 取消按钮颜色默认为999
    cancelColor:{
      type:String,
      value:'#999'
    },
    // 确认按钮颜色默认为999
    confirmColor:{
      type:String,
      value:'#0a9117'
    },
    // 是否可以编辑
    editable:{
      type:Boolean,
      value:false
    },
    placeholderText:{
      type:String,
      value:'请输入'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 关闭弹框
    cancel(){
      this.setData({
        is_show:false
      })
      this.triggerEvent('cancel')
    },
    // 确定按钮：
    confirm(){
      this.setData({
        is_show:false
      })
      var myEventDetail = { a:'123'} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      // 自定义组件触发事件时，需要使用 triggerEvent 方法，指定事件名、detail对象和事件选项：
      this.triggerEvent('confirm',myEventDetail,myEventOption)
    },
    //获取input框的内容
    getInputValue(e){
      let inputValue=e.detail.value;
      this.setData({
        inputValue
      })
      this.triggerEvent('input',e.detail.value)
    }
  }
})
