<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Card from './Card.svelte';

  const { Story } = defineMeta({
    component: Card,
  });
</script>

<Story name="Project Card" />
