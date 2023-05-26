<script>
  export let videoId;
</script>

<div class="video-responsive">
  <iframe
    src="https://www.youtube.com/embed/{videoId}"
    width="560"
    height="315"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
  <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/83yaqqkAJm0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
</div>

<style>
  .video-responsive {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
  }

  .video-responsive iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
