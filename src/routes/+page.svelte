<script>
  import AboutMe from '$lib/components/About/AboutMe.svelte';
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Experience from '$lib/components/Experience/Experience.svelte';
  import Projects from '$lib/components/Projects/Projects.svelte';

  import ContactSection from '$lib/components/ContactSection/ContactSection.svelte';
  import Footer from '$lib/components/Footer/Footer.svelte';
</script>

<main class="h-screen scroll-smooth">
  <Header />
  <Hero />
  <AboutMe />
  <Experience />
  <Projects />
  <ContactSection />
  <Footer />
</main>
