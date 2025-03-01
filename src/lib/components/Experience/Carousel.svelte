<script lang="ts">
  import { onMount } from 'svelte';
  import { register } from 'swiper/element/bundle';
  register();

  let swiperEl: HTMLElement;
  let activeIndex = 0;

  const scrollToSlide = (index: number) => {
    console.log('Scrolling to slide:', index);
    swiperEl?.swiper.slideTo(index);
    swiperEl?.swiper.update(); // Ensure the swiper updates its internal state
    activeIndex = index; // Update active index directly to trigger reactivity
  };

  let previousExperiences: Experience[] = [];

  async function fetchData() {
    try {
      const response = await fetch('/data/experience.json');
      previousExperiences = await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  onMount(async () => {
    await fetchData();

    if (!swiperEl) {
      console.error('swiperEl not bound properly');
      return;
    }

    swiperEl.addEventListener('swiper', () => {
      console.log('Swiper initialized:', swiperEl.swiper);
      activeIndex = swiperEl.swiper.realIndex;

      swiperEl.swiper.on('slideChange', () => {
        activeIndex = swiperEl.swiper.realIndex;
        console.log('Slide changed, new index:', activeIndex);
      });
    });
  });
</script>

<div class="relative flex w-full flex-col-reverse items-start gap-8 md:flex-row md:gap-36 lg:gap-52">
  <!-- Timeframe Navigation (Top on Mobile, Left on Desktop) -->
  <div class="order-1 flex flex-row gap-4 md:order-none md:flex-col md:gap-8">
    {#each previousExperiences as experience, i}
      <button
        onclick={() => scrollToSlide(i)}
        class="cursor-pointer rounded-lg px-2 py-2 text-sm whitespace-nowrap transition duration-300 md:px-4 lg:text-base"
        class:bg-main-btn={activeIndex === i}
        class:bg-white={activeIndex !== i}
        class:text-white={activeIndex === i}
      >
        {experience.timeframe}
      </button>
    {/each}
  </div>

  <!-- Swiper (Right) -->
  <swiper-container
    bind:this={swiperEl}
    slides-per-view="1"
    loop="false"
    class="w-full max-w-full min-w-[250px] px-5 transition-transform duration-300 hover:-translate-y-5 sm:max-w-[400px] lg:max-w-[500px] xl:max-h-[450px] xl:max-w-[600px]"
  >
    {#each previousExperiences as experience}
      <swiper-slide class="bg-card-bg relative flex h-full w-full flex-col justify-between gap-5 rounded-xl p-6 shadow-lg hover:shadow-2xl">
        <h3 class="text-heading-text text-lg font-semibold md:text-xl">{experience.title}</h3>
        <p class="text-heading-text">{experience.companyName}</p>
        <p class="text-body-text lg:text-lg">{experience.description}</p>

        <div class="flex flex-wrap gap-2">
          {#each experience.tags as tag}
            <span class="bg-main-btn font-regular rounded-full px-3 py-1 text-xs text-white">
              {tag}
            </span>
          {/each}
        </div>
      </swiper-slide>
    {/each}
  </swiper-container>
</div>
