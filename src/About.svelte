<script>
    import AboutOutcomes from './AboutOutcomes.svelte';
    import AboutStrategies from './AboutStrategies.svelte';
    import data from './data.json';
    import YouTubeVideo from './lib/YouTubeVideo.svelte';
    let { title, texts, objective } = data.about;
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
        </div>

        <div class="row justify-content-center">
            {#each texts as text}
            <div class="col-lg-4 mb-20">
                <p class="text wow fadeInUp" data-wow-duration="1s">{text}</p>
            </div>
            {/each}
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
    </div>
</section>

<!-- strategies -->
<AboutStrategies />

<!-- expected outcomes -->
<AboutOutcomes />

<style>
    .about-subtitle {
        margin-top: 50px;
        margin-bottom: 50px;
    }
</style>