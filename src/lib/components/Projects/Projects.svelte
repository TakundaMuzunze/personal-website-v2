<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import Card from './Card.svelte';
  import { onMount } from 'svelte';

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    });

    tl.from('.projects-content', {
      x: -80,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    })
      .from(
        '.projects-cards',
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.4',
      )
      .from(
        '.view-more-btn',
        {
          y: 100, // Adjust as needed for the swoop effect
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.4', // Overlapping the animation slightly with the previous one
      );
  });
</script>

<section class="projects-section mx-auto flex min-h-screen max-w-5xl items-center p-5">
  <div class="flex w-full flex-col items-start justify-start gap-10 lg:gap-20">
    <div class="projects-content flex max-w-2xl flex-col gap-3 lg:gap-5">
      <h3 class="text-body-text font-semibold uppercase md:text-lg lg:text-xl">My Projects</h3>
      <h2 class="text-heading-text text-2xl font-bold capitalize md:text-3xl lg:text-4xl">building engaging experiences</h2>
      <p class="text-body-text lg:text-lg">
        Below are some of my key projects, each reflecting my journey and growth as a frontend developer. Each project demonstrates how I apply my
        skills in real-world scenarios.
      </p>
    </div>
    <div class="projects-cards w-full">
      <Card />
    </div>
    <div class="view-more-btn mx-auto flex justify-center">
      <a href="https://github.com/TakundaMuzunze" target="_blank">
        <button
          class="hero-button bg-main-btn font-regular w-fit transform cursor-pointer rounded-xl px-4 py-3 text-white transition-transform duration-300 hover:scale-105 xl:px-8 xl:py-3"
          >View more</button
        ></a
      >
    </div>
  </div>
</section>
