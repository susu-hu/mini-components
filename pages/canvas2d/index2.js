// pages/targetPlan/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    showDialog:true,//筛选弹框默认隐藏

    hasData:true,//是否有数据

    data_list:[
      {
        name:'苏苏是是是是 申达股份申达股份水电费水电费施工方',
        value:30
      },
      {
        name:'苏苏是是是是',
        value:30
      },
      {
        name:'苏苏是是是是 申达股份申达股份费水电费施工方',
        value:99
      },
      {
        name:'苏苏是是是是 申达股份申达股份费水电费施工方',
        value:99
      },
      {
        name:'苏苏是是是是 申达股份申达股份水电费水电费施工方',
        value:99
      },
      {
        name:'苏苏是是是是 申达股份申达股份费水电费施工方',
        value:99
      },
      {
        name:'苏苏是是是是 申达股份申达股份费水电费施工方',
        value:99
      },
      {
        name:'苏苏是是是是 申达股份申达股份费水电费施工方',
        value:99
      },
    ],//数据列表
    typeList:[],// 时间类型
    monthList:[],  //月度选择
    show_more:undefined,
    targetList:[],//目标分类

    num_per:0,//

    //时间进度条
    progressWidth:0,
    progressTime:60,
    mark:true,  
    playPausetips:"开始",

    imagePath:''
    
  },

  
  getRings(data_list){
    //循环生成进度条
    console.log(data_list)
    data_list.forEach((item,index)=>{
      this.canvasRing = this.selectComponent("#canvasRing" + index);
      this.canvasRing.drawCanvasRing()
    })
  },
 
  onShow: function () {
    this.getRings(this.data.data_list)
  },
  getData(){
    let typeList=[
      {
        type_id:0,
        type_name:'苏苏1'
      },
      {
        type_id:1,
        type_name:'苏苏2'
      },
      {
        type_id:2,
        type_name:'苏苏3'
      },
    ];
    let monthList=[
      {
        value:'2021-01'
      },
      {
        value:'2021-02'
      },
      {
        value:'2021-03'
      },
      {
        value:'2021-04'
      },
      {
        value:'2021-05'
      },{
        value:'2021-06'
      },
      {
        value:'2021-07'
      },
      {
        value:'2021-08'
      },
    ];
    let targetList=[
      {
        type_name:'苏苏4'
      },
      {
        type_name:'苏苏5'
      },
      {
        type_name:'苏苏6'
      },
      {
        type_name:'苏苏7'
      },
    ];
    
    this.setData({
      typeList,
      monthList,
      targetList,
      show_more:monthList.length>6?true:undefined
    })

  },
  //显示弹框
  showDialog(){
    //获取筛选数据
    this.getData()
    this.setData({
      showDialog:!this.data.showDialog
    })
    let data_list=[{
      name:'苏苏是是是是 申达股份施工方',
      value:0
    },
    {
      name:'苏苏是是是是 费施工方',
      value:9
    },
    {
      name:'苏苏是是是是 ',
      value:90
    },]
    this.setData({
      data_list,
    },this.getRings(data_list))
  },
  closePop(){
    this.setData({
      showDialog:true
    })
  },
  //展开收起
  showMore(e){
    this.setData({
      show_more:!this.data.show_more
    })
  },
  //选择（多选）
  choseKey(e){
    let {index,list}=e.currentTarget.dataset;
    this.data[list][index].chosed=!this.data[ list ][index].chosed;
    this.setData({
      [list]:this.data[list]
    })
  },
  //单选 
  choseAlone(e){
    let {index}=e.currentTarget.dataset,{peList}=this.data;
    peList.forEach(item=>{
      item.chosed=false
    })
    peList[index].chosed=true;
    this.setData({
      peList
    })
  },
 
  onReady: function () {

  }, 
 
})