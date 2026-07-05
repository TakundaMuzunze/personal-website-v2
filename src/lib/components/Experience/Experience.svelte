<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import Carousel from './Carousel.svelte';
  import { onMount } from 'svelte';

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.experience-section',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    });

    tl.from('.experience-content', {
      x: -80,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    }).from(
      '.carousel-container',
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.4',
    );
  });
</script>

<section class="experience-section een mx-auto flex max-w-5xl items-center p-5">
  <div class="flex w-full flex-col items-start justify-start gap-10 lg:gap-20">
    <div class="experience-content flex max-w-2xl flex-col gap-3 lg:gap-5">
      <h3 class="text-body-text font-semibold uppercase md:text-lg lg:text-xl">Commercial Experience</h3>
      <h2 class="text-heading-text text-2xl font-bold capitalize md:text-3xl lg:text-4xl">Building software that solves real problems</h2>
      <p class="text-body-text lg:text-lg">
        Since joining iSiteTV, I've worked across customer-facing web applications, interactive retail experiences, internal tooling and workflow
        automation. My work has supported major consumer brands including Samsung, Currys and Croydex.
      </p>
    </div>
    <div class="carousel-container w-full">
      <Carousel />
    </div>
  </div>
</section>

