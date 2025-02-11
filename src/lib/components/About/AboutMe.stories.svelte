<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import AboutMe from './AboutMe.svelte';

  const { Story } = defineMeta({
    component: AboutMe,
  });
</script>

<Story name="Bio Section" />
