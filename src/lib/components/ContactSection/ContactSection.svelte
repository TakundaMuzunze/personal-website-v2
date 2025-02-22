<!-- Parent Component -->
<script lang="ts">
  import Form from '../ContactForm/Form.svelte';
  import Details from '../ContactDetails/Details.svelte';
</script>

<section class="mx-auto flex h-screen max-w-5xl snap-start items-center p-5">
  <div class="flex w-full flex-col items-start justify-start gap-10 lg:gap-20">
    <div class="flex max-w-2xl flex-col gap-3 lg:gap-5">
      <h3 class="text-dark-blue font-semibold uppercase md:text-lg lg:text-xl">Reaching out</h3>
      <h2 class="text-2xl font-bold capitalize md:text-3xl lg:text-4xl">Feel free to get in touch. I’d love to hear from you.</h2>
      <p class="lg:text-lg">
        Interested in discussing opportunities or have any questions? Feel free to reach out by filling out the form or contacting me via email. I'm
        looking forward to connecting with you! 🚀
      </p>
    </div>
    <div class="flex w-full flex-col-reverse items-center gap-10 md:flex-row md:items-start">
      <div class="w-full md:w-1/2 xl:w-2/3">
        <Form />
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3">
        <Details />
      </div>
    </div>
  </div>
</section>
