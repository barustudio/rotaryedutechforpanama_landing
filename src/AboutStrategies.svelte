<script>
    import data from "./data.json";
    let { strategies } = data.about;
</script>

<!-- strategies -->
<section id="about-strategies" class="about-strategies-area">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="section-title text-center pb-20">
                    <h3 class="title">{strategies.title}</h3>
                    <p class="text">{strategies.description}</p>
                </div>
            </div>
        </div>
        <div class="row">
            {#each strategies.items as strategy (strategy.title)}
                <div class="col-lg-6">
                    <div
                        class="single-about d-sm-flex mt-30 wow fadeInUp"
                        data-wow-duration="1s"
                    >
                        <div class="about-icon">
                            <img src={strategy.icon} alt="Icon" />
                        </div>
                        <div class="about-content media-body">
                            <h4 class="about-title">{strategy.title}</h4>
                            <p class="text">{strategy.description}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .about-strategies-area {
        position: relative;
        background-color: white;
        padding-top: 50px;
        padding-bottom: 50px;
    }
</style>
