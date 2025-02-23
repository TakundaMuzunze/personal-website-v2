<script lang="ts">
  import { onMount } from 'svelte';
  import { links } from '../stores/data.stores.svelte';
  import { fly } from 'svelte/transition';

  let scrollProgress = $state(0);

  let isMenuOpen = $state(false);

  function openMenu(event: MouseEvent): void {
    isMenuOpen = true;
  }

  onMount(() => {
    function updateScrollProgress() {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      scrollProgress = (scrollTop / scrollHeight) * 100;

      scrollProgress = Math.min(Math.max(scrollProgress, 0), 100);
    }

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  });
</script>

<header class=" fixed top-0 z-2 flex w-full bg-[#242629]">
  <div class=" text-heading-text flex w-full flex-row items-center justify-between p-5">
    <h1 class="text-xl font-bold">TM.</h1>
    <button onclick={openMenu} class="cursor-pointer" aria-label="open navigation menu">
      <svg class="size-6" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
        ><path
          d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
        /></svg
      >
    </button>
  </div>
  <div class=" absolute bottom-0 h-1 w-full">
    <progress class="w-full" max={100} value={scrollProgress} data-testval={scrollProgress}></progress>
  </div>
</header>

{#if isMenuOpen}
  <div
    tabindex="0"
    role="button"
    aria-label="Close menu"
    onclick={() => (isMenuOpen = false)}
    onkeydown={(event) => event.key === 'Escape' && (isMenuOpen = false)}
    transition:fly={{ duration: 200 }}
    class="fixed inset-0 z-10 bg-gray-200/50 backdrop-blur-lg"
  ></div>

  <div
    transition:fly|global={{ x: 20, duration: 200 }}
    class="bg-card-bg fixed top-0 right-0 z-20 flex h-full w-[75vw] flex-col items-center justify-center p-5 shadow-lg lg:w-[30vw]"
  >
    <button onclick={() => (isMenuOpen = false)} class="absolute top-5 right-5" aria-label="open nav menu">
      <svg class="size-8" fill="#7f5af0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
        ><path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        /></svg
      >
    </button>
    {#each links.navLinks as link}
      <ul class="mb-4">
        <li class="text-body-text font-semibold hover:opacity-40 lg:text-lg xl:text-2xl">
          <a href={link.href} onclick={() => (isMenuOpen = false)}>{link.label}</a>
        </li>
      </ul>
    {/each}
  </div>
{/if}

<style>
  progress::-webkit-progress-bar {
    background-color: #242629;

    border-radius: 9999px;
    height: 4px;
  }
  progress::-webkit-progress-value {
    background-color: white;
    border-radius: 9999px;
  }
</style>
