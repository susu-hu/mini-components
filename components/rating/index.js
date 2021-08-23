// components/rating/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    stars:{
      type:Array,
      value:[1,1,1,1,1]
    },
    // 是否只读
    readOnly:{
      type:Boolean,
      value:false,
    },
    // 星星大小
    starWidth:{
      type:Number,
      value:54,
    },
    // 显示分数
    showRating:{
      type:Boolean,
      value:false,
    },
    rating:{
      type:Number,
      value:'',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },
  lifetimes:{
    // 页面创建时执行
    attached(){
      let rating=this.properties.rating
      switch (rating) {
        case 1:
          this.properties.stars=[2,1,1,1,1]
          break;
        case 2:
          this.properties.stars=[2,2,1,1,1]
          break;
        case 3:
          this.properties.stars=[2,2,2,1,1]
          break;
        case 4:
          this.properties.stars=[2,2,2,2,1]
          break;
        case 5:
          this.properties.stars=[2,2,2,2,2]
          break;
      }
      this.setData({
        stars:this.properties.stars
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 选择星星
     * @param {*} e
     */
    choseStar: function (e) {
      let {stars}=this.data;
      stars.forEach((item,index)=> {
        stars[index] = 1;
        this.setData({
          stars,
        })
      })
      var {index} = e.currentTarget.dataset;
      for (var i = 0; i <= index; i++) {
        var item = 'stars[' + i + ']';
        this.setData({
            [item]: 2
        })
      }
      let a = this.data.stars.filter(item => item == 2)
      this.setData({
        rating: a.length
      })
      this.triggerEvent('click',this.data.rating);
    },
  }
})
