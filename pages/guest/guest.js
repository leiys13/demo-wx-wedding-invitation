// pages/guest/guest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picker: {
      arr: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '更多'],
      index: 1
    }
  },

  pickerChange: function(e) {
    this.setData({
      'picker.index': e.detail.value
    })
  },

  nameChange: function(e) {
    this.checkName(e.detail.value)
  },

  phoneChange: function(e) {
    this.checkPhone(e.detail.value)
  },

  checkName: function(data) {
    var reg = /^[\u4E00-\u9FA5A-Za-z]+$/
    return this.check(data, reg, '姓名输入错误')
  },

  checkPhone: function(data) {
    var reg = /^(((13)|(15)|(17)|(18))\d{9})$/
    return this.check(data, reg, '手机号输入错误')
  },

  formSubmit: function(e) {
    var name = e.detail.value.name
    var phone = e.detail.value.phone
    if(this.checkName(name) && this.checkPhone(phone)) {
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 1500
      })
    }
  },

  check: function(data, reg, errMsg) {
    if(!reg.test(data)) {
      wx.showToast({
        title: errMsg,
        icon: 'none',
        duration: 1500
      })
      return false
    }
    return true
  }

})