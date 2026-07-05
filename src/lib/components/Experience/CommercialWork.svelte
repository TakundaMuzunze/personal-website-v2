<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { onMount } from 'svelte';

  gsap.registerPlugin(ScrollTrigger);

  type CommercialProject = {
    title: string;
    category: string;
    description: string;
    impact?: string;
    tags: string[];
  };

  let projects: CommercialProject[] = [];

  async function fetchCommercialWork() {
    try {
      const response = await fetch('/data/commercial-work.json');

      if (!response.ok) {
        throw new Error('Unable to load commercial work.');
      }

      projects = await response.json();
    } catch (error) {
      console.error('Error loading commercial work:', error);
    }
  }

  onMount(async () => {
    await fetchCommercialWork();

    const cards = gsap.utils.toArray<HTMLElement>('.commercial-card');

    gsap.from('.commercial-content', {
      scrollTrigger: {
        trigger: '.commercial-section',
        start: 'top 75%',
      },
      x: -80,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    });

    gsap.from(cards, {
      scrollTrigger: {
        trigger: '.commercial-grid',
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.12,
    });
  });
</script>

<section id="work" class="commercial-section mx-auto flex max-w-5xl items-center p-5">
  <div class="flex w-full flex-col gap-10">
    <div class="commercial-content flex max-w-2xl flex-col gap-3 lg:gap-5">
      <h3 class="text-body-text font-semibold uppercase md:text-lg lg:text-xl">Selected Commercial Work</h3>

      <h2 class="text-heading-text text-2xl font-bold capitalize md:text-3xl lg:text-4xl">Software built for real teams and real customers</h2>

      <p class="text-body-text lg:text-lg">
        A selection of production work delivered at iSiteTV, spanning workflow automation, internal tooling and interactive customer experiences.
      </p>
    </div>

    <div class="commercial-grid grid w-full gap-6 md:grid-cols-2">
      {#each projects as project}
        <article
          class="commercial-card bg-card-bg border-card-bg flex min-h-[300px] flex-col justify-between gap-6 rounded-2xl border p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div class="flex flex-col gap-3">
            <p class="text-main-btn text-sm font-semibold tracking-wide uppercase">
              {project.category}
            </p>

            <h3 class="text-heading-text text-xl font-bold lg:text-2xl">
              {project.title}
            </h3>

            <p class="text-body-text leading-relaxed">
              {project.description}
            </p>

            {#if project.impact}
              <p class="text-heading-text rounded-lg border border-white/10 p-3 text-sm font-semibold">
                {project.impact}
              </p>
            {/if}
          </div>

          <div class="flex flex-wrap gap-2">
            {#each project.tags as tag}
              <span class="bg-main-btn font-regular rounded-full px-3 py-1 text-sm text-white">
                {tag}
              </span>
            {/each}
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

