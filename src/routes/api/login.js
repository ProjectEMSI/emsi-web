import api from '../../lib/utils/api.js';

export async function post({ locals, request }) {
	const data = await request.formData();

	const email = data.get('email');
	const password = data.get('password');

	let response;
	try {
		response = await api.post('/auth/login', {
			email: email,
			password: password
		});
	} catch (err) {
		return err.response.data;
	}

	locals.session.data = {
		user: response.data,
		api_token: response.data.meta.token
	};

	return {
		status: 303,
		headers: {
			location: '/'
		}
	};
}
