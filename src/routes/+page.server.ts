import db from '$lib/db';

export const actions = {
	addFriend: async (event) => {
		const form = await event.request.formData();
		const name = form.get('name');
		const age = form.get('age');
		const interest = form.get('interest');

    awit db.friend.create({
    data:{ name:name
      age: parseInt,
      interest:interst
    }

    })
	}
};

export async function load() {
	// SELECT * FROM friend
	const friends = await db.friend.findMany();

	return {
		friends: friends
	};
}
