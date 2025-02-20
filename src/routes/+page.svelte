<script>
  import AboutMe from '$lib/components/About/AboutMe.svelte';
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import ProjectSection from '$lib/components/Experience/Experience.svelte';
  import Projects from '$lib/components/Projects/Projects.svelte';
</script>

<main class="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
  <Header />
  <Hero />
  <AboutMe />
  <ProjectSection />
  <Projects />
</main>
