<template>
    <div class="video-container">
        <div class="video" >
            <video ref="player" src="http://he.yinyuetai.com/uploads/videos/common/74D00142F8C43F61A973ED3996903573.flv?sc=0a31cbf641b0b669&br=3126&vid=834600&aid=215&area=ML&vst=0"></video>
        </div>
        <div class="controller">
            <div class="button" @click="play" :class="{paused: isPaused}">{{status}}</div> 
            <div class="progress"></div>
            <div class="voice-wrap">
                <div class="mute"></div>
                <div class="voice"></div>
            </div>
            <div class="full-screen" @click="enterfullScreen">Full</div>
        </div>
    </div>
</template>

<script>
/**
 *  HTML5 视频控件
 *  实现功能 :
 *  1. 基本的暂停、播放
 *  2. 进度条样式自定义、缓冲显示、可拖动
 *  3. 音量控制、全屏显示
 */
export default {
  data () {
    return {
      isPaused: true,
      status: 'play'
    }
  },
  methods: {
    play () {
      if (this.isPaused) {
        this.$refs.player.play()
        this.isPaused = false
        this.status = 'pause'
      } else {
        this.$refs.player.pause()
        this.isPaused = true
        this.status = 'play'
      }
    },
    enterfullScreen () {
      var player = this.$refs.player
      player.requestFullscreen ? player.requestFullscreen() : player.webkitRequestFullScreen()
    },
    exitfullScreen () {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitCancelFullScreen()
    }
  }
}
</script>

<style lang="stylus" scoped>
.video-container {
    width 600px
    height 600px
    border 1px solid #ccc
    margin 0 auto 
    .video {
        width 100%
        height 427px
        border-bottom 1px solid #ccc
        video {
            object-fit fill
            width 100%
            height 100%
        }
    }
    .controller {
        width 100%
        height 170px
        display flex
        align-items center 
        justify-content space-between
        padding 0 4px 0 4px
        .button {
            width 50px
            height 50px
            line-height 50px
            border-radius 50%
            background var(--info)
            text-align center
            font-size 14px
            color #fff
            cursor pointer
        }
        .progress {
            width 250px
            height 5px
            border-radius 6px
            background var(--warning)
        }
        .voice-wrap {
            width 105px
            height 30px
            display flex
            align-items center
            justify-content space-between
            .mute {
                width 20px
                height 20px
                border-radius 50%
                background var(--info)
            }
            .voice {
                width 80px
                height 5px
                border-radius 6px
                background var(--warning)
            }
        }
        .full-screen {
            width 40px
            height 40px
            line-height 40px
            text-align center
            border-radius 6px
            background var(--primary)
            color #fff
            font-size 14px
            cursor pointer
        }
    }
}
</style>


