// components/loading/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否显示弹框
    is_show:{
      type:Boolean,
      value:false
    },
    l_width:{
      type:Number,
      value:150,
    },
    l_height:{
      type:Number,
      value:150,
    },
    l_bg:{
      type:String,
      value:'#fff',
    },
    loading_text:{
      type:String,
      value:"加载中..."
    },
    imgSrc:{
      type:String,
      value:"https://i.postimg.cc/mgsKJGLw/susu1.jpg"
    },

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    closeModal() {
      this.cancel();
    },
    cancel() {
      this.setData({
        is_show:false
      })
      this.triggerEvent('cancel');
    },
  }
})
