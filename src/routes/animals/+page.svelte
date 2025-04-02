<script lang="ts">
	export let data;
	const animals = data.animals;

	let selectedFile: File | null = null;
	let base64Image: string | null = null;

	async function handleFileChange(event: Event) {
		const fileInput = event.target as HTMLInputElement;
		if (fileInput.files && fileInput.files.length > 0) {
			selectedFile = fileInput.files[0];
			base64Image = await fileToBase64(selectedFile);
		}
	}

	function fileToBase64(file: File): Promise<string> {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result as string);
			reader.onerror = (error) => reject(error);
		});
	}
</script>

<div class="grid grid-cols-2">
	<form method="POST" action="?/addAnimals" class="bg-blue-300 flex flex-col gap-4 p-4">
		<input name="name" required placeholder="Name" />
		<select name="isCute" required>
			<option value="true">da</option>
			<option value="false">ne</option>
		</select>
		<input name="dangerLevel" placeholder="Danger level" type="number" required />

		<input name="color" type="color" id="favcolor" value="#ff0000" />
		<input type="file" required on:change={handleFileChange} />
		<input type="hidden" name="image" value={base64Image} />
		<button type="submit">Dodaj žival</button>
	</form>
	<form method="POST" action="?/deleteAnimals" class="bg-blue-300 flex flex-col gap-4 p-4">
		<select name="deleteAnimal" required>
			{#each animals as a}<option value={a.id}>{a.name}</option>{/each}
		</select>
		<button type="submit">izbriši žival</button>
	</form>
</div>

<h1 class="text-3xl font-bold underline">MOJE ŽIVALI</h1>

<div class="grid grid-cold-3 p-4 bg-slate-300 gap-4">
	{#each animals as f}
		<div class="  rounded-sm" style="background-color: {f.color};">
			<div class="text-lg font-bold">#{f.id}{f.name} ({f.isCute})</div>
			<div class="text-sm text-gray-600">{f.dangerLevel}</div>
			<img src={f.image} />
		</div>
	{/each}
</div>
