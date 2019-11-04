// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList: [{
      createTime: '2019-08-10 20:56',
      title: '林俊杰演唱会 - 珠海1',
      src: '/images/IMG_6515.MP4',
      danmuList: [{
        text: '可惜没如果',
        color: '#ff0000',
        time: 1
      }, {
        text: '这妹纸是谁啊，好漂亮啊',
        color: '#ff00ff',
        time: 7
      }, {
        text: '妹纸唱歌真好听',
        color: '#ff00ff',
        time: 10
      }, {
        text: '好可爱de妹纸',
        color: '#ff00ff',
        time: 12
      }]
    }, {
      createTime: '2019-08-10 20:58',
      title: '林俊杰演唱会 - 珠海2',
      src: '/images/IMG_6517.MP4'
    }]
  },

  videoContext: null,
  inputValue: '',

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  bindInputBlur: function(e) {
    this.inputValue = e.detail.value
  },

  bindSendDanmu: function() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: '#f90'
    })
  }
})