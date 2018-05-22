Page({
  data:{
    requestUrl: "https://api.douban.com/v2/movie/top250",
    dataList:[],
    header_title:"加载中..."
  },
  onLoad:function(){
    /*记载loading*/
    wx.showLoading({
      title: '加载中...',
      icon:"loading",
    })
    console.log(this+"XXXX");
    var that = this;
    /*请求数据*/
      wx.request({
      url: "http://t.yushu.im/v2/movie/top250",
      data:{},
      header:{
        'content-type': 'application/json'
      },     
      method:"GET",
       success:function(res){
         /*隐藏loading*/
         wx.hideLoading();
         var code = res.statusCode;
         if(code==200){
           that.setData({
             header_title: "豆瓣电影top" + res.data.total,
             dataList: res.data.subjects
           }
           )
         }
         console.log(res);
      }
      })

  },


})