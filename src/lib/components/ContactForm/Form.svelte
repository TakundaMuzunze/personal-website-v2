<script lang="ts">
  let name: string = '';
  let email: string = '';
  let message: string = '';
</script>

<form class="max-w-lg" method="POST">
  <div class=" grid w-full grid-cols-1 gap-3 xl:gap-10">
    <input
      type="text"
      bind:value={name}
      placeholder="Full name"
      class=" plcaeholder:text-sm col-span-1 rounded-2xl border-2 border-black/20 p-4 shadow-lg"
    />
    <input
      type="text"
      bind:value={email}
      placeholder="Subject"
      class=" plcaeholder:text-sm col-span-1 rounded-2xl border-2 border-black/20 p-4 shadow-lg"
    />
    <textarea bind:value={message} placeholder="Message" class=" plcaeholder:text-sm col-span-1 rounded-2xl border-2 border-black/20 p-5 shadow-lg"
    ></textarea>
    <div class="mx-auto">
      <button class="bg-dark-blue col-span-1 w-fit cursor-pointer rounded-xl px-4 py-2 font-bold text-white xl:px-8 xl:py-3 xl:text-base"
        >Submit</button
      >
    </div>
  </div>
</form>
