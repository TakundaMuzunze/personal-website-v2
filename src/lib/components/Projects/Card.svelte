<script lang="ts">
  import { onMount } from 'svelte';

  let projectInfo: ProjectCard[] = [];

  async function fetchProjects() {
    try {
      const response = await fetch('/data/projects.json');

      if (!response.ok) {
        console.error('Error fetching projects. Please refresh page and try again.');
      }

      const data = await response.json();

      projectInfo = data.slice(0, 2);

      return projectInfo;
    } catch (error) {
      console.error('Error fetching projects. Please refresh page and try again.', error);
    }
  }

  onMount(async () => {
    await fetchProjects();
  });
</script>

<div class="flex flex-col items-start justify-start gap-10 md:flex-row">
  {#each projectInfo as project}
    <div
      class=" bg-card-bg border-card-bg flex w-full flex-col overflow-hidden rounded-2xl border shadow-2xl shadow-[#16161a] transition-all duration-100 sm:w-[90%] md:w-[45%] xl:w-1/2"
    >
      <img class=" h-auto max-h-64 w-full object-contain" src={project.image} alt={project.title} />
      <div class="flex flex-col gap-4 p-5">
        <h3 class="text-heading-text text-lg font-semibold lg:text-xl">{project.title}</h3>
        <p class="text-body-text">{project.description}</p>
        <div class="flex flex-wrap gap-2">
          {#each project.skillTags as tools}
            <span class="bg-main-btn font-regular rounded-full px-3 py-1 text-sm text-white">
              {tools}
            </span>
          {/each}
        </div>
        <div class="mt-2 flex flex-wrap items-center gap-5">
          {#if project.repo}
            <a href={project.repo} target="_blank" aria-label="GitHub Repo">
              <svg
                fill="#94a1b2"
                class="h-6 w-6 transition-transform duration-200 hover:-translate-y-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </a>
          {/if}
          <a href={project.liveDemo} target="_blank" aria-label="Live Website">
            <svg
              fill="#94a1b2"
              class="h-6 w-6 transition-transform duration-200 hover:-translate-y-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>

