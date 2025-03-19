import db from '$lib/db';

export const actions = {
	addAnimals: async (event) => {
		const form = await event.request.formData();
		const name = form.get('name');
		const isCute = form.get('isCute');
		const dagerLevel = form.get('dangerLevel');

		await db.animal.create({
			data: { name: name, isCute: isCute, dangerLevel: parseInt(dangerLevel) }
		});
	}
};

export async function load() {
	// SELECT * FROM friend

	return {
		animals: await db.animal.findMany()
	};
}
