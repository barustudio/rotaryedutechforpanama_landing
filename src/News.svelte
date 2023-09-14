<script>
    import data from './data.json';
    let { sectionTitle, sectionSubtitle, categories, items } = data.news;
  </script>

  <section id="news" class="news-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title text-center pb-20">
            <h3 class="title">{sectionTitle}</h3>
            <p class="text">{sectionSubtitle}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="news-menu pt-30 text-center">
            <ul>
                <li data-filter="*" class="active">ALL</li>
                {#each categories as category}
                <li data-filter=".{category.toLowerCase()}-3">{category}</li>
                {/each}
            </ul>
          </div>
        </div>
      </div>
      <div class="row grid">
        {#each items as item (item.id)}
          <div class="col-lg-4 col-sm-6 {item.categories.join(' ')}">
            <div class="single-news mt-30 wow fadeInUp" data-wow-duration="1.5s">
            <div class="news-image">
              <img src="{item.image}" alt="">
              <div class="news-overlay d-flex align-items-center justify-content-center">
                <div class="news-content">
                  <div class="news-icon">
                    <a class="image-popup" href="{item.image}" target="_blank">
                      <i class="lni-zoom-in"></i>
                    </a>
                  </div>
                  <div class="news-icon">
                    <a href="{item.url}" target="_blank">
                      <i class="lni-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="news-text">
              <h4 class="news-title"><a href="#">{item.title}</a></h4>
              <p class="text">{item.description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
