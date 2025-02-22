<!-- Parent Component -->
<script lang="ts">
  import Carousel from './Carousel.svelte';
</script>

<section class="mx-auto flex h-screen max-w-5xl items-center p-5">
  <div class="flex w-full flex-col items-start justify-start gap-10 lg:gap-20">
    <div class="flex max-w-2xl flex-col gap-3 lg:gap-5">
      <h3 class="text-dark-blue font-semibold uppercase md:text-lg lg:text-xl">Experience</h3>
      <h2 class="text-2xl font-bold capitalize md:text-3xl lg:text-4xl">My Professional Journey</h2>
      <p class="lg:text-lg">
        Explore my journey so far, from university to internships and beyond. Here's a look at the key experiences that have shaped my development as
        a software developer.
      </p>
    </div>
    <div class="w-full">
      <Carousel />
    </div>
  </div>
</section>
