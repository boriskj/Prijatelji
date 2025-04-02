import db from '$lib/db';

export const actions = {
	addAnimals: async (event) => {
		const form = await event.request.formData();
		const name = form.get('name');
		const isCute = form.get('isCute');
		const dangerLevel = form.get('dangerLevel');
		const color = form.get('color');
		const image = form.get('image');

		await db.animal.create({
			data: {
				name: name,
				isCute: isCute == 'true',
				dangerLevel: parseInt(dangerLevel),
				color: color,
				image: image
			}
		});
	},
	deleteAnimals: async (event) => {
		const form = await event.request.formData();
		const id = form.get('deleteAnimal');

		await db.animal.delete({
			where: { id: parseInt(id) }
		});
	}
};

export async function load() {
	// SELECT * FROM friend

	return {
		animals: await db.animal.findMany()
	};
}
