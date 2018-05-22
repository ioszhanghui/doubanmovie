Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**/
    requestUrl:"http://t.yushu.im/v2/movie/subject/",
    detail:{},
    summary: "里昂（让·雷诺饰）是名孤独的职业杀手，受人雇佣。一天，邻居家小姑娘马蒂尔达（纳塔丽·波特曼饰)敲开他的房门，要求在他那里暂避杀身之祸。原来邻居家的主人是警方缉毒组的眼线，只因贪污了一小包毒品而遭恶警（加里·奥德曼饰）杀害全家的惩罚。马蒂尔达得到里昂的留救，幸免于难，并留在里昂那里。里昂教小女孩使枪，她教里昂法文，两人关系日趋亲密，相处融洽。\n女孩想着去报仇，反倒被抓，里昂及时赶到，将女孩救回。混杂着哀怨情仇的正邪之战渐次升级，更大的冲突在所难免……©豆瓣"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    console.log(params.id+"参数");
    console.log(this);
    console.log(this.requestUrl+"请求的参数");
    var that = this;
    wx.request({
      url: this.data.requestUrl + params.id,
      data:{},
      header:{
        "content-type":"application/json"
      },
      success:function(res){
        that.setData({
          detail:res.data
        })
        console.log(res.aka+"摘要");
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
})