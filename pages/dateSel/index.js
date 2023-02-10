// pages/dateSel/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sel_list: {
      start_time: "2022-1-4",
      end_time: "2022-1-1"
    }
  },
  // 提交
  dateSubmit(e) {
    let {
      end,
      start
    } = e.detail;
    let {
      sel_list
    } = this.data;
    sel_list.start_time = start.year + "-" + start.month + "-" + start.date;
    sel_list.end_time = end.year + "-" + end.month + "-" + end.date;
    this.setData({
      sel_list,
    })
    console.log('当前选中', this.data.sel_list);
  },
  // 关闭弹框
  closeModal() {
    console.log('关闭')
  },
})