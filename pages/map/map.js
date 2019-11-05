// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 25.597831,
    longitude: 112.362335,
    markers: [{
      iconPath: '/images/4.jpg',
      id: 0,
      latitude: 25.597831,
      longitude: 112.362335,
      width: 30,
      height: 30
    }]
  },

  markertap: function() {
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      name: '天禧大酒店',
      address: '郴州市嘉禾县晋屏北路98号'
    })
  }
})