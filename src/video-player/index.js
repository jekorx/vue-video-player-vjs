/*
* Vue-Video-Player ssr.js
* Author: surmon@foxmail.com
* Github: https://github.com/surmon-china/vue-video-player
* Adapted from Videojs (https://github.com/videojs/video.js)
*/

import VideoPlayer from './player.vue'

VideoPlayer.install = function (Vue, config) {
  if (config) {
    if (config.options) {
      VideoPlayer.props.globalOptions.default = () => config.options
    }
    if (config.events) {
      VideoPlayer.props.globalEvents.default = () => config.events
    }
  }
  Vue.component(VideoPlayer.name, VideoPlayer)
}

export default VideoPlayer
