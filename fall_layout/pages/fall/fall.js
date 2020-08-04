let col1H = 0;
let col2H = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {

    imgWidth: 0,
    loadingCount: 0,
    images: [],
    col1: [],
    col2: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
          let ww = res.windowWidth;
          let wh = res.windowHeight;
          let imgWidth = ww * 0.48;
          let scrollH = wh;

          this.setData({
              imgWidth: imgWidth
          });

          this.loadImages();
      }
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

onImageLoad:function(e){
  let imageId = e.currentTarget.id;
  let oImgW = e.detail.width;         //图片原始宽度
  let oImgH = e.detail.height;        //图片原始高度
  let imgWidth = this.data.imgWidth;  //图片设置的宽度
  let scale = imgWidth / oImgW;        //比例计算
  let imgHeight = oImgH * scale;      //自适应高度

  let images = this.data.images;
  let imageObj = null;
  let textHeight= 0 ;
  for (let i = 0; i < images.length; i++) {
      let img = images[i];
      if(img.content!="")
      {
         textHeight=5 ;
      }
      if (img.id === imageId) {
          imageObj = img;
          break;
      }
  }

  imageObj.height = imgHeight;

  let loadingCount = this.data.loadingCount - 1;
  let col1 = this.data.col1;
  let col2 = this.data.col2;

  if (col1H <= col2H) {
      col1H += imgHeight+textHeight;
      col1.push(imageObj);
  } else {
      col2H += imgHeight+textHeight;
      col2.push(imageObj);
  }

  let data = {
      loadingCount: loadingCount,
      col1: col1,
      col2: col2
  };

  if (!loadingCount) {
      data.images = [];
  }

  this.setData(data);
},
loadImages: function () {
  let images =[
    {pic:"../../utils/images/1.jpg",height:0,content:"好看！"},
    {pic:"../../utils/images/2.jpg",height:0,content:"好看！"},
    {pic:"../../utils/images/3.jpg",height:0,content:"好看！"},
    {pic:"../../utils/images/4.jpg",height:0,content:"好看！"},
    {pic:"../../utils/images/5.jpg",height:0,content:"好看！"},
    {pic:"../../utils/images/6.jpg",height:0,content:"好看！"},
    {pic:"../../utils/images/7.jpg",height:0,content:"好看！"},
    {pic:"../../utils/images/8.jpg",height:0,content:"好看！"},
    {pic:"../../utils/images/9.jpg",height:0,content:"好看！"},
    {pic:"../../utils/images/10.jpg",height:0,content:"好看！"},
    {pic:"../../utils/images/11.jpg",height:0,content:"好看！"}
  ];

  let baseId = "img-" + (+new Date());

  for (let i = 0; i < images.length; i++) {
      images[i].id = baseId + "-" + i;
  }

  this.setData({
      loadingCount: images.length,
      images: images
  });
},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})