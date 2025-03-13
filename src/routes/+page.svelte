<script lang="ts">
	const project = $state({
    name: "Noodle Shop",
    framework: {
      name: "Svelte",
      version: 5
    },
		contributors: ["Jason", "Marika", "Will"]
	});
</script>

<div class="max-w-4xl mx-auto p-6">
  <h1>Project Overview</h1>

  <p class="text-lg">{project.name}</p>

  <div class="card mt-8">
    <table class="w-full">
      <thead>
        <tr class="border-b">
          <th class="text-left py-3 px-4">Property</th>
          <th class="text-left py-3 px-4">Value</th>
        </tr>
      </thead>

      <tbody>
        <tr class="border-b">
          <td class="py-3 px-4">Framework</td>
          <td class="py-3 px-4">{project.framework.name}</td>
        </tr>

        <tr class="border-b">
          <td class="py-3 px-4">Version</td>
          <td class="py-3 px-4">{project.framework.version}</td>
        </tr>
        
        <tr class="border-b">
          <td class="py-3 px-4">Contributors</td>
          <td class="py-3 px-4">
            <p>{#each project.contributors as contributor}
              {contributor + ", "}
            {/each}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<style>
</style>
