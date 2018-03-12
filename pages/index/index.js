Page({

  /**
   * 页面的初始数据
   */
  data: {
    joke:'',
    loading:true,
    page:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this    
    wx.request({
      url: 'https://route.showapi.com/341-1?showapi_appid=48591&showapi_sign=62f2d8f1a027431f823d43f7fc675b42&maxResult=10&page='+this.data.page,
      data:{},
      header:{
        "ContentType":'json'
      },
      success:function(res){
        that.setData({
            joke:res.data.showapi_res_body.contentlist,
            loading: false      
        })
      }
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const page=this.data.page+1
    this.setData({
      loading:true,
      page: page
    })
    var that = this
   
    wx.request({
      url: 'https://route.showapi.com/341-1?showapi_appid=48591&showapi_sign=62f2d8f1a027431f823d43f7fc675b42&maxResult=10&page=' + this.data.page,
      data: {},
      header: {
        "ContentType": 'json'
      },
      success: function (res) {
        that.setData({
          joke: res.data.showapi_res_body.contentlist,
          loading: false
        })
        wx.pageScrollTo({
          scrollTop: 0,
        })
      }
    })
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})