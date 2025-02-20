<script lang="ts">
  import '../app.css';
  import { Toaster } from 'svelte-hot-french-toast';
  let { children } = $props();
</script>

{@render children()}

<Toaster />
