<script>
  import About from "./About.svelte";
  // import CallToAction from "./CallToAction.svelte";
  import Contact from "./Contact.svelte";
  import Footer from "./Footer.svelte";
    import GoogleAnalytics from "./GoogleAnalytics.svelte";
  import Header from "./Header.svelte";
  import Metatags from "./Metatags.svelte";
  // import News from "./News.svelte";
  import Partners from "./Partners.svelte";
  import Preloader from "./Preloader.svelte";
  // import Testimonials from "./Testimonials.svelte";
  import BackToTopButton from "./lib/BackToTopButton.svelte";
</script>

<div>
  <GoogleAnalytics />
  <Metatags />
  <Preloader />
  <Header />
  <About />
  <!-- <News /> -->
  <Partners />
  <!-- <CallToAction /> -->
  <!-- <Testimonials /> -->
  <Contact />
  <Footer />
  <BackToTopButton />
</div>

<style></style>
