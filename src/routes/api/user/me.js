export async function get({ locals, request }) {
	console.log(locals.session.data);
	return {
		body: {
			isLoggedIn: locals.session.data?.api_token
		}
	};
}
