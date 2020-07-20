<template>
  <div style="width: 800px">
    <VideoPlayer
      class="vjs-custom-skin"
      :options="playerOptions"
      :playsinline="true"
    />
  </div>
</template>
<script>
import VideoPlayer from '../video-player'
import 'video.js/dist/video-js.css'
import '../../styles/index.css'

export default {
  name: 'App',
  components: { VideoPlayer },
  data () {
    return {
      playerOptions: {
        // width: document.documentElement.clientWidth || document.body.clientWidth,
        autoplay: false, // 自动播放，false
        controls: true, // 控制条
        preload: 'auto', // 预加载
        language: 'zh-CN',
        fluid: true,
        aspectRatio: '16:9', // 设置宽高比，fluid需为true
        notSupportedMessage: '此视频暂时无法播放，请稍后再试',
        sources: [{
          withCredentials: false,
          type: 'application/x-mpegURL',
          src: 'https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/playlist.m3u8'
        }],
        controlBar: {
          timeDivider: false,
          remainingTimeDisplay: false,
          currentTimeDisplay: false,
          durationDisplay: false
        }
      }
    }
  }
}
</script>
