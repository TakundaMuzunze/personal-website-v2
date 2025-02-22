<script lang="ts">
  import { links } from '../stores/data.stores.svelte';
  import { fly } from 'svelte/transition';

  let isMenuOpen = $state(false);

  function openMenu(event: MouseEvent): void {
    isMenuOpen = true;
  }
</script>

<header class=" sticky top-0 z-2 flex w-full">
  <div class=" flex w-full flex-row items-center justify-between border-b-2 border-gray-200 p-5">
    <h1 class="text-xl font-bold">TM.</h1>
    <button onclick={openMenu} class="cursor-pointer" aria-label="open navigation menu">
      <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
        ><path
          d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
        /></svg
      >
    </button>
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
    class="absolute inset-0 z-10 bg-gray-200/50 backdrop-blur-lg"
  ></div>

  <div
    transition:fly|global={{ x: 20, duration: 200 }}
    class="absolute top-0 right-0 z-20 flex h-full w-[75vw] flex-col items-center justify-center bg-white p-5 shadow-lg lg:w-[30vw]"
  >
    <button onclick={() => (isMenuOpen = false)} class="absolute top-5 right-5" aria-label="open nav menu">
      <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
        ><path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        /></svg
      >
    </button>
    {#each links.navLinks as link}
      <ul class="mb-4">
        <li class=" font-semibold hover:text-gray-400 lg:text-lg xl:text-2xl">{link.label}</li>
      </ul>
    {/each}
  </div>
{/if}
