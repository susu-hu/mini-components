// components/tab/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navList:{
      type:Array,
      value:[]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    type:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabNav(e) {
      let {index} = e.currentTarget.dataset;
      if (this.data.type === index || index === undefined) {
        return false;
      } else {
        this.setData({ type: index})
      }
      this.triggerEvent('change', index);
    },

  }
})
