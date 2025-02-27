<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { onMount } from 'svelte';

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    });

    tl.from('.content-left', {
      x: -80,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    }).from(
      '.about-image',
      {
        x: 80,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.4',
    ); // Slight overlap for smoother transition
  });
</script>

<section class="about-section mx-auto flex min-h-screen max-w-5xl items-center justify-center p-5">
  <div class="flex flex-col items-center gap-10 md:flex-row lg:gap-20">
    <div class="content-left flex max-w-[468px] flex-col gap-3 lg:gap-5">
      <h3 class="text-body-text font-semibold uppercase md:text-lg lg:text-xl">About me</h3>
      <h2 class="text-heading-text text-2xl font-bold capitalize md:text-3xl lg:text-4xl">The developer behind the screen</h2>
      <p class="text-body-text lg:text-lg">
        Hey, I'm Takunda! A frontend developer passionate about crafting smooth, accessible, and user-friendly web experiences. I love turning ideas
        into intuitive and engaging applications.
      </p>
      <p class="text-body-text lg:text-lg">
        My focus is on building clean, performant interfaces that make the web a joy to use—whether it's refining animations, optimizing user flows,
        or experimenting with new UI patterns
      </p>
    </div>
    <div class="about-image w-full max-w-[300px] md:max-w-[400px] lg:max-w-[468px]">
      <img
        class="my-auto h-auto w-full rotate-12 object-cover drop-shadow-[8px_8px_15px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105"
        src="/code-snippet.png"
        alt="Code Snippet"
      />
    </div>
  </div>
</section>
