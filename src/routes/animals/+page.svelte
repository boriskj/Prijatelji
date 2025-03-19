<script lang="ts">
	export let data;
	const animals = data.animals;
</script>

<form method="POST" action="?/addAnimals" class="bg-blue-300 flex flex-col gap-4 p-4">
	<input name="name" required />
	<select name="isCute" required>
		<option value="Yes">da</option>
		<option value="No">ne</option>
	</select>
	<input name="dangerLevel" type="number" required />

	<button type="submit">Dodaj žival</button>
</form>

<h1 class="text-3xl font-bold underline">MOJE ŽIVALI</h1>

<div class="grid grid-cold-3 p-4 bg-slate-300 gap-4">
	{#each animals as f}
		<div class=" bg-stone-400 rounded-sm">
			<div class="text-lg font-bold">#{f.id}{f.name} ({f.isCute})</div>
			<div class="text-sm text-gray-600">{f.dangerLevel}</div>
		</div>
	{/each}
</div>
