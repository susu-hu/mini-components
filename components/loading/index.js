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
    text_size:{
      type:Number,
      value:14,
    },
    six_width:{
      type:Number,
      value:60,
    },
    l_bg:{
      type:String,
      value:'',
    },
    six_bg:{
      type:String,
      value:'',
    },
    loading_text:{
      type:String,
      value:"加载中..."
    },
    imgSrc:{
      type:String,
      value:""
    },
    // 渐变色1
    text_color1:{
      type:String,
      value:"#d4b81a"
    },
    //渐变色2
    text_color2:{
      type:String,
      value:"#32a2b1"
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
