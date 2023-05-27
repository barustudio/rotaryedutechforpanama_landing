<script>
  import data from './data.json';
  let { expectedOutcomes } = data.about;
</script>

<section id="about-outcomes" class="about-outcomes-area">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="section-title text-center pb-20">
          <h3 class="title">{expectedOutcomes.title}</h3>
          <p class="text">{expectedOutcomes.description}</p>
        </div>
      </div>
    </div>
    <div class="row">
      {#each expectedOutcomes.items as outcome (outcome.title)}
      <div class="col-lg-6">
          <div class="single-about d-sm-flex mt-30 wow fadeInUp" data-wow-duration="1s">
              <div class="about-icon">
                  <img src={outcome.icon} alt="Icon">
              </div>
              <div class="about-content media-body">
                  <h4 class="about-title">{outcome.title}</h4>
                  <p class="text">{outcome.description}</p>
              </div>
          </div>
      </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .about-outcomes-area {
    position: relative;
    background-color: #f4f6f7;
    padding-top: 50px;
    padding-bottom: 50px;
  }
</style>