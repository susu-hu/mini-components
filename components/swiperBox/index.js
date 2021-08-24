// components/swiper/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgUrls:{
      type:Array,
      value:''
    },
    autoplay:{
      type:Boolean,
      value:false
    },
    interval:{
      type:String,
      value:5000,
    },
    show_dots:{
      type:Boolean,
      value:false
    },
    dot_color:{
      type:String,
      value:'#ccc'
    },
    dot_active_color:{
      type:String,
      value:'#000'
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    swiperChange(e) {
      if (e.detail.source == "touch" || e.detail.source == "autoplay") {
        this.setData({
          currentIndex: e.detail.current
        });
        this.triggerEvent('change',this.data.currentIndex);
      }
    }

  }
})
