<script>
  import Card from './Card.svelte';
</script>

<section class="mx-auto flex min-h-screen max-w-5xl items-center p-5">
  <div class="flex w-full flex-col items-start justify-start gap-10 lg:gap-20">
    <div class="flex max-w-2xl flex-col gap-3 lg:gap-5">
      <h3 class="font-semibold text-[#006FFF] uppercase md:text-lg lg:text-xl">My Projects</h3>
      <h2 class="text-2xl font-bold capitalize md:text-3xl lg:text-4xl">building engaging experiences</h2>
      <p class="lg:text-lg">
        Below are some of my key projects, each reflecting my journey and growth as a frontend developer. Each project demonstrates how I apply my
        skills in real-world scenarios.
      </p>
    </div>
    <div class="w-full">
      <Card />
    </div>
  </div>
</section>
