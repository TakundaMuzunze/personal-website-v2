<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import BackToTop from './BackToTop.svelte';

  const { Story } = defineMeta({
    component: BackToTop,
  });
</script>

<Story name="Scroll To Top" />
