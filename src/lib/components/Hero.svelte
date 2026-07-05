<script lang="ts">
  import { gsap } from 'gsap/dist/gsap';
  import { onMount } from 'svelte';

  onMount(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // Top text animation
    tl.from('.hero-greeting', {
      y: -50,
      opacity: 0,
      duration: 0.8,
    })

      // Typing effect for name
      .from('.hero-name', {
        width: 0,
        duration: 1,
        ease: 'none',
      })

      // Emoji wave animation
      .to(
        '.wave-emoji',
        {
          rotation: 20,
          duration: 0.2,
          repeat: 5,
          yoyo: true,
        },
        '-=1',
      )

      // Bottom text animation
      .from(
        '.hero-tagline',
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.4',
      )
      .from(
        '.hero-summary',
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.4',
      )

      // Button fade in
      .from('.hero-buttons', {
        opacity: 0,
        duration: 0.5,
      })

      // Image animation
      .from(
        '.hero-image',
        {
          x: 80,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.8',
      );
  });
</script>

<section class="mx-auto flex min-h-screen max-w-5xl items-center justify-center p-5">
  <div class="flex flex-col-reverse gap-10 md:flex-row md:gap-40">
    <div class="flex max-w-[468px] flex-col gap-3 lg:gap-5">
      <h2 class="hero-greeting text-body-text text-lg lg:text-2xl">Hello there<span class="wave-emoji inline-block">👋</span>. My name is,</h2>

      <h1 class="hero-name text-heading-text overflow-hidden text-3xl font-bold whitespace-nowrap lg:text-5xl">Takunda Muzunze</h1>

      <p class="hero-tagline text-body-text text-lg lg:text-2xl">
        Frontend Software Engineer building production software for major consumer brands.
      </p>

      <p class="hero-summary text-body-text lg:text-lg">
        I specialize in TypeScript, Svelte and modern frontend engineering, creating workflow automation tools, interactive customer experiences and
        performant web applications.
      </p>

      <div class="hero-buttons flex flex-col items-start justify-start gap-6 md:flex-row">
        <a href="#work">
          <button
            class="bg-main-btn w-fit transform cursor-pointer rounded-xl px-4 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105 lg:text-lg"
          >
            View my work
          </button>
        </a>
        <a href="#contact">
          <button
            class=" border-main-btn text-main-btn w-fit transform cursor-pointer rounded-xl border px-4 py-3 font-semibold transition-transform duration-300 hover:scale-105 lg:text-lg"
          >
            Get in touch
          </button>
        </a>
      </div>
    </div>
    <div class="hero-image">
      <img class="size-48 lg:size-72" src="/headshot.svg" alt="Head shot" />
    </div>
  </div>
</section>

