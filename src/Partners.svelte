<script>
    import data from './data.json';
    let { title, description, images } = data.partners;
</script>

<section id="partners" class="partners-area">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="section-title text-center pb-20">
                    <h3 class="title">{title}</h3>
                    <p class="text">{description}</p>
                </div> <!-- section title -->
            </div>
        </div> <!-- row -->
        <div class="row client-active">
            {#each images as image}
            <div class="col-lg-3">
                <div class="single-client text-center">
                    <img src={image.src} alt={image.alt}>
                </div> <!-- single client -->
            </div>
            {/each}
        </div> <!-- row -->
    </div> <!-- container -->
</section>

<style></style>
