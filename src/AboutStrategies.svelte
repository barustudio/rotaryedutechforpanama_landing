<script>
    import data from './data.json';
    let { strategies } = data.about;
</script>

<!-- strategies -->
<div class="row justify-content-center about-subtitle">
  <div class="col-xl-6 col-lg-8">
      <h4 class="wow fadeInUp" data-wow-duration="1s">{strategies.title}</h4>
      <p class="text wow fadeInUp" data-wow-duration="1s">{strategies.description}</p>
  </div>
</div>
<div class="row">
  {#each strategies.items as strategy (strategy.title)}
  <div class="col-lg-6">
      <div class="single-about d-sm-flex mt-30 wow fadeInUp" data-wow-duration="1s">
          <div class="about-icon">
              <img src={strategy.icon} alt="Icon">
          </div>
          <div class="about-content media-body">
              <h4 class="about-title">{strategy.title}</h4>
              <p class="text">{strategy.description}</p>
          </div>
      </div>
  </div>
  {/each}
</div>