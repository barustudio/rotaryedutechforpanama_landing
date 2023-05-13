<script>
    import data from "./data.json";
    let { title, description, contactTitle, contactText, contactInfo } =
        data.contact;
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
                            <li><i class={info.icon} /> {info.text}</li>
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
                    <form
                        id="contact-form"
                        action="assets/contact.php"
                        method="post"
                    >
                        <div class="form-input mt-15">
                            <label>Name</label>
                            <div class="input-items default">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                />
                                <i class="lni-user" />
                            </div>
                        </div>
                        <div class="form-input mt-15">
                            <label>Email</label>
                            <div class="input-items default">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                />
                                <i class="lni-envelope" />
                            </div>
                        </div>
                        <div class="form-input mt-15">
                            <label>Massage</label>
                            <div class="input-items default">
                                <textarea
                                    placeholder="Massage"
                                    name="massage"
                                />
                                <i class="lni-pencil-alt" />
                            </div>
                        </div>
                        <p class="form-message" />
                        <div class="form-input rounded-buttons mt-20">
                            <button type="submit" class="main-btn rounded-three"
                                >Submit</button
                            >
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
