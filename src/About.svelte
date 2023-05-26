<script>
    import data from './data.json';
    import YouTubeVideo from './lib/YouTubeVideo.svelte';
    let { title, texts, objective, strategies, expectedOutcomes } = data.about;
</script>

<section id="about" class="about-area">
    <div class="container">
        <!-- title and texts -->
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
                <div class="section-title text-center mt-30 pb-40">
                    <h4 class="title wow fadeInUp" data-wow-duration="1.5s">{title}</h4>
                </div>
            </div>
            <div class="row justify-content-center">
                {#each texts as text}
                <div class="col-lg-4">
                    <p class="text wow fadeInUp" data-wow-duration="1s">{text}</p>
                </div>
                {/each}
            </div>
        </div>

        <!-- objective -->
        <div class="row about-subtitle">
            <div class="col-xl-6 col-lg-6">
                <div class="section-title text-center mt-30 pb-40">
                    <h4 class="wow fadeInUp" data-wow-duration="1s">{objective.title}</h4>
                    <p class="text wow fadeInUp" data-wow-duration="1s">{objective.description}</p>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 wow fadeInUp" data-wow-duration="1s">
                <YouTubeVideo videoId="{objective.video}" />
            </div>
        </div>

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

        <!-- expected outcomes -->
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
    </div>
</section>

<style>
    .about-subtitle {
        margin-top: 50px;
        margin-bottom: 50px;
    }
</style>