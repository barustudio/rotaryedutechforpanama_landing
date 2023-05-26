<script>
    import ContactForm from "./ContactForm.svelte";
    import data from "./data.json";

    let { title, description, contactTitle, contactText, contactInfo } = data.contact;
</script>

<section id="contact" class="contact-area">
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
            <div class="col-lg-6">
                <div
                    class="contact-two mt-50 wow fadeIn"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                >
                    <h4 class="contact-title">{contactTitle}</h4>
                    <p class="text">{contactText}</p>
                    <ul class="contact-info">
                        {#each contactInfo as info}
                        <li>
                            <i class={info.icon} />
                                {#if info.type === "mail"}
                                <a href={"mailto:" + info.text}>{info.text}</a>
                                {:else if info.type === "phone"}
                                <a href={"tel:" + info.text}>{info.text}</a>
                                {:else}
                                {info.text}
                                {/if}
                        {/each}
                    </ul>
                </div>
            </div>
            <div class="col-lg-6">
                <div
                    class="contact-form form-style-one mt-35 wow fadeIn"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.5s"
                >
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
</section>
