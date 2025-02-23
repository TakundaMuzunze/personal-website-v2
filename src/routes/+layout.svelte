<script lang="ts">
  import BackToTop from '$lib/components/ScrollButton/BackToTop.svelte';
  import '../app.css';
  import { Toaster } from 'svelte-hot-french-toast';
  let { children } = $props();
</script>

{@render children()}

<Toaster />
<BackToTop />
