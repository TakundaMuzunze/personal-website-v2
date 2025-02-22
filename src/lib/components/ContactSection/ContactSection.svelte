<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import Form from '../ContactForm/Form.svelte';
  import Details from '../ContactDetails/Details.svelte';
  import { onMount } from 'svelte';

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    });

    tl.from('.contact-content', {
      x: -80,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    })
      .from(
        '.contact-form',
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.4',
      )
      .from(
        '.contact-details',
        {
          x: 80,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.6',
      );
  });
</script>

<section class="contact-section mx-auto flex h-screen max-w-5xl snap-start items-center p-5">
  <div class="flex w-full flex-col items-start justify-start gap-10 lg:gap-20">
    <div class="contact-content flex max-w-2xl flex-col gap-3 lg:gap-5">
      <h3 class="text-dark-blue font-semibold uppercase md:text-lg lg:text-xl">Reaching out</h3>
      <h2 class="text-2xl font-bold capitalize md:text-3xl lg:text-4xl">Feel free to get in touch. I'd love to hear from you.</h2>
      <p class="lg:text-lg">
        Interested in discussing opportunities or have any questions? Feel free to reach out by filling out the form or contacting me via email. I'm
        looking forward to connecting with you! 🚀
      </p>
    </div>
    <div class="flex w-full flex-col-reverse items-center gap-10 md:flex-row md:items-start">
      <div class="contact-form w-full md:w-1/2 xl:w-2/3">
        <Form />
      </div>
      <div class="contact-details w-full md:w-1/2 xl:w-1/3">
        <Details />
      </div>
    </div>
  </div>
</section>
