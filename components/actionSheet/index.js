// components/actionSheet/index.js
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
    // 是否显示取消按钮
    cancelText:{
      type:String,
      value:'取消'
    },
    // 选项列表
    action_list:{
      type:Array,
      value:[]
    },
    // 点击蒙层是否可以关闭
    mask_is_click:{
      type:Boolean,
      value:false
    },
    alertText:{
      type:String,
      value:''
    },
    //提示文字字颜色
    alertColor:{
      type:String,
      value:'#333'
    },
    // 按钮的文字颜色
    itemColor:{
      type:String,
      value:'#333'
    }

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
      if (this.data.mask_is_click) {
        this.cancel();
      }
    },
    cancel() {
      this.setData({
        is_show:false
      })
      this.triggerEvent('cancel');
    },
    handleClick(e) {
      this.setData({
        is_show:false
      })
      const dataset = e.currentTarget.dataset || ''
      this.triggerEvent('click', dataset)
    },

  }
})
