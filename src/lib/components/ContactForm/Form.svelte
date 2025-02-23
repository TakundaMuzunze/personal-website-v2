<script lang="ts">
  import toast from 'svelte-hot-french-toast';

  let name: string = $state('');
  let email: string = $state('');
  let message: string = $state('');

  const isFormFilled = $derived(name.trim() && email.trim() && message.trim());
  const disabledSubmission = $derived(!isFormFilled);

  async function submitForm(event: Event) {
    event.preventDefault();

    if (disabledSubmission) {
      return;
    }

    try {
      const response = await fetch('/backend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.error || 'Error: Form submission unsuccessful. Please try again later.');
        console.error('Error: Form submission unsuccessful. Please try again later - ', Error);
        return;
      }

      name = email = message = '';
      toast.success('Form submission successful!');
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
      toast.error('Error: Form submission unsuccessful. Please try again later.');
      console.error('Error: Form submission unsuccessful. Please try again later - ', error);
      return;
    }
  }

  function autoResize(event: Event) {
    const messageArea = event.target as HTMLTextAreaElement;
    if (messageArea) {
      messageArea.style.height = 'auto'; // Reset height to auto to shrink if needed
      messageArea.style.height = messageArea.scrollHeight + 'px'; // Adjust height to fit content
    }
  }
</script>

<form class="max-w-lg" method="POST" onsubmit={submitForm}>
  <div class=" grid w-full grid-cols-1 gap-3 xl:gap-10">
    <input
      type="text"
      bind:value={name}
      placeholder="Full name"
      class=" placeholder:text-body-text border-card-bg bg-card-bg col-span-1 rounded-2xl border-2 p-4 text-white shadow-lg placeholder:text-sm md:placeholder:text-base"
    />
    <input
      type="text"
      bind:value={email}
      placeholder="Email"
      class=" placeholder:text-body-text border-card-bg bg-card-bg col-span-1 rounded-2xl border-2 p-4 text-white shadow-lg placeholder:text-sm md:placeholder:text-base"
    />
    <textarea
      bind:value={message}
      placeholder="Message"
      rows="3"
      oninput={autoResize}
      class=" placeholder:text-body-text border-card-bg bg-card-bg col-span-1 w-full resize-none rounded-2xl border-2 p-5 text-white shadow-lg placeholder:text-sm md:placeholder:text-base"
    ></textarea>

    <div class="mx-auto">
      <button
        disabled={disabledSubmission}
        type="submit"
        class="bg-main-btn col-span-1 w-fit cursor-pointer rounded-xl px-4 py-2 font-bold text-white disabled:opacity-50 xl:px-8 xl:py-3 xl:text-base"
        >Submit</button
      >
    </div>
  </div>
</form>
