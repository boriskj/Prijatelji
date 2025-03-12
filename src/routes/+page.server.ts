import db from '$lib/db';

export const actions = {
	addFriend: async (event) => {
		console.log(await event.request.formData());
	}
};

export async function load() {
	// SELECT * FROM friend
	const friends = await db.friend.findMany();

	return {
		friends: friends
	};
}
