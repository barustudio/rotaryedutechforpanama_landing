<script>
    import data from './data.json';
    let { title, description, items } = data.testimonials;
</script>

<section id="testimonials" class="testimonial-area">
<div class="container">
    <div class="row justify-content-center">
    <div class="col-lg-6">
        <div class="section-title text-center pb-20">
        <h3 class="title">{title}</h3>
        <p class="text">{description}</p>
        </div>
    </div>
    </div>

    <div class="row">
    <div class="col-lg-12">
        <div class="row testimonial-active">
        {#each items as testimonial}
            <div class="col-lg-4">
            <div class="single-testimonial mt-30 mb-30 text-center">
                <div class="testimonial-image">
                <img src={testimonial.image} alt="Author">
                </div>
                <div class="testimonial-content">
                <p class="text">{testimonial.text}</p>
                <h6 class="author-name">{testimonial.author}</h6>
                <span class="sub-title">{testimonial.title}</span>
                </div>
            </div>
            </div>
        {/each}
        </div>
    </div>
    </div>
</div>
</section>
