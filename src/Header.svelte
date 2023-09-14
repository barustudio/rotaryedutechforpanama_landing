<script>
    import data from "./data.json";
    let { navbarItems, carouselItems } = data.header;
</script>

<section class="header-area">
    <div class="navbar-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand-lg row">
                        <a class="navbar-brand col-lg-6 col-10" href="#">
                            <img
                                src="images/favicon.png"
                                alt="Logo of Digital Interactive Classrooms Project, a Rotary initiative."
                            />
                            Digital Interactive Classrooms Project
                        </a>

                        <button
                            class="navbar-toggler col-2"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarEight"
                            aria-controls="navbarEight"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="toggler-icon" />
                            <span class="toggler-icon" />
                            <span class="toggler-icon" />
                        </button>

                        <div
                            class="collapse navbar-collapse sub-menu-bar col-lg-6 col-12"
                            id="navbarEight"
                        >
                            <ul class="navbar-nav ml-auto">
                                {#each navbarItems as item, i (item.id)}
                                    <li class="nav-item {item.active ? 'active' : ''}" >
                                        <a class="page-scroll" href={item.href}>
                                            {item.name}
                                        </a>
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <div id="home" class="slider-area">
        <div class="bd-example">
            <div id="carouselOne" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    {#each carouselItems as item, i (item.id)}
                        <li
                            data-target="#carouselOne"
                            data-slide-to={i}
                            class={i === 0 ? "active" : ""}
                        />
                    {/each}
                </ol>

                <div class="carousel-inner">
                    {#each carouselItems as item, i (item.id)}
                        <div
                            class="carousel-item bg_cover {i === 0 ? 'active' : ''}"
                            style="background-image: url({item.backgroundImage})"
                        >
                            <div class="carousel-caption">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-xl-6 col-lg-7 col-sm-10" >
                                            <h2 class="carousel-title">
                                                {item.title}
                                            </h2>
                                            <ul class="carousel-btn rounded-buttons" >
                                                <li>
                                                    <a
                                                        class="main-btn rounded-three"
                                                        href={item.href}
                                                    >
                                                        {item.buttonText}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>

                <a
                    class="carousel-control-prev"
                    href="#carouselOne"
                    role="button"
                    data-slide="prev"
                >
                    <i class="lni-arrow-left-circle" />
                </a>

                <a
                    class="carousel-control-next"
                    href="#carouselOne"
                    role="button"
                    data-slide="next"
                >
                    <i class="lni-arrow-right-circle" />
                </a>
            </div>
        </div>
    </div>
</section>

<style>
    .navbar-brand img {
        width: 1.5rem;
        margin-right: 0.25rem;
        vertical-align: text-top;
     }
    .navbar-brand {
        color: #fff;
        margin: 0;
        white-space: initial;
    }
    .navbar-brand:hover {
        color: #f7a81b;
    }
    .navbar-area .navbar .navbar-collapse {}
        @media only screen and (max-width: 991px) {
            .navbar-area .navbar .navbar-collapse {
                background: linear-gradient(to right, #17458f 0%, #00a2e0 100%);
            }
        }
    .slider-area {}
        @media only screen and (max-width: 991px) {
            .slider-area {
                padding-top: 60px;
            }
        }
    .toggler-icon {
        background-color: #fff !important;
    }
</style>
