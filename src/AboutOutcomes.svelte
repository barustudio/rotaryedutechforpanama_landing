<script>
  import data from './data.json';
  let { expectedOutcomes } = data.about;
</script>

<div class="row justify-content-center about-subtitle">
  <div class="col-xl-6 col-lg-8">
      <h4 class="wow fadeInUp" data-wow-duration="1s">{expectedOutcomes.title}</h4>
      <p class="text wow fadeInUp" data-wow-duration="1s">{expectedOutcomes.description}</p>
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

<section id="services" class="services-area">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="section-title text-center pb-20">
          <h3 class="title">Our Services</h3>
          <p class="text">
            Stop wasting time and money designing and managing a website that
            doesn’t get results. Happiness guaranteed!
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <div
          class="single-services mt-30 wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay="0.2s"
          style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.2s; animation-name: fadeInUp;"
        >
          <div class="services-icon">
            <i class="lni-rocket" />
          </div>
          <div class="services-content">
            <h5 class="services-title">
              <a href="#">Best Creative Solution</a>
            </h5>
            <p class="text">
              We use product UI, UX Motion to the interaction design to craft
              products that makes better solutions.
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div
          class="single-services mt-30 wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay="0.4s"
          style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.4s; animation-name: fadeInUp;"
        >
          <div class="services-icon">
            <i class="lni-layers" />
          </div>
          <div class="services-content">
            <h5 class="services-title"><a href="#">Branding Support</a></h5>
            <p class="text">
              We use product UI, UX Motion to the interaction design to craft
              products that makes better solutions.
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div
          class="single-services mt-30 wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay="0.7s"
          style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.7s; animation-name: fadeInUp;"
        >
          <div class="services-icon">
            <i class="lni-offer" />
          </div>
          <div class="services-content">
            <h5 class="services-title">
              <a href="#">Bussiness Consultancy</a>
            </h5>
            <p class="text">
              We use product UI, UX Motion to the interaction design to craft
              products that makes better solutions.
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div
          class="single-services mt-30 wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay="0.2s"
          style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.2s; animation-name: fadeInUp;"
        >
          <div class="services-icon">
            <i class="lni-bullhorn" />
          </div>
          <div class="services-content">
            <h5 class="services-title"><a href="#">Startup Bussiness</a></h5>
            <p class="text">
              We use product UI, UX Motion to the interaction design to craft
              products that makes better solutions.
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div
          class="single-services mt-30 wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay="0.4s"
          style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.4s; animation-name: fadeInUp;"
        >
          <div class="services-icon">
            <i class="lni-archive" />
          </div>
          <div class="services-content">
            <h5 class="services-title">
              <a href="#">Good Service Guarantee</a>
            </h5>
            <p class="text">
              We use product UI, UX Motion to the interaction design to craft
              products that makes better solutions.
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div
          class="single-services mt-30 wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay="0.7s"
          style="visibility: visible; animation-duration: 1.5s; animation-delay: 0.7s; animation-name: fadeInUp;"
        >
          <div class="services-icon">
            <i class="lni-briefcase" />
          </div>
          <div class="services-content">
            <h5 class="services-title">
              <a href="#">Bussiness Consultancy</a>
            </h5>
            <p class="text">
              We use product UI, UX Motion to the interaction design to craft
              products that makes better solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
