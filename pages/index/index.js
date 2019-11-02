Page({
  data: {
    isPlayingMusic: false
  },

  bgm: null,
  music_url: 'http://tally.sadasen.com/music/wuwenxidong_wf.mp3',
  music_coverImgUrl: '/images/music-played.png',
  
  onReady: function () {
    this.bgm = wx.getBackgroundAudioManager()
    this.bgm.title = 'marry me'
    this.bgm.epname = 'wedding',
    this.bgm.singer = 'singer'
    this.bgm.coverImgUrl = this.music_coverImgUrl
    this.bgm.onCanplay(()=> {
      this.bgm.pause()
    })
    this.bgm.src = this.music_url
  },

  play: function(e) {
    if(this.data.isPlayingMusic) {
      this.bgm.pause()
    } else {
      this.bgm.play()
    }
    this.setData({
      isPlayingMusic: !this.data.isPlayingMusic
    })
  }
})
