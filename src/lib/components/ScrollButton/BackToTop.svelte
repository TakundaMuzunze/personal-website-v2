<script lang="ts">
  import { onMount } from 'svelte';

  let scrollUpButton: HTMLButtonElement;

  function addOpacity() {
    if (window.scrollY > 20) {
      scrollUpButton.style.opacity = '1';
    } else {
      scrollUpButton.style.opacity = '0.5';
    }
  }

  function scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMount(() => {
    window.addEventListener('scroll', addOpacity);
    addOpacity();

    return () => window.removeEventListener('scroll', addOpacity);
  });
</script>

<button
  bind:this={scrollUpButton}
  onclick={scrollUp}
  aria-label="Scroll to top"
  class="bg-dark-blue fixed right-5 bottom-[5vh] cursor-pointer rounded-full p-2 opacity-50 transition-opacity duration-200 lg:right-10"
>
  <svg class="mx-auto size-5" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 448 512">
    <path
      d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
    />
  </svg>
</button>
