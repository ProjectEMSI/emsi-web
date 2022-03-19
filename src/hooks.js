import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import { handleSession } from 'svelte-kit-cookie-session';

export async function getSession({ locals }) {
	return {
		isLoggedIn: !!locals.session.data?.api_token
	};
}

export const handle = handleSession(
	{
		key: 'ssid',
		secret: 'RrZT3RFaJVisgXs8jov1LbQCqMW4E0nx', // TODO: Change before deploy
		rolling: true
	},
	async function ({ event, resolve }) {
		const cookies = cookie.parse(event.request.headers.get('cookie') || '');

		event.locals.userid = cookies.userid || uuid();

		const response = await resolve(event);

		if (!cookies.userid) {
			response.headers.set(
				'set-cookie',
				cookie.serialize('userid', event.locals.userid, {
					path: '/',
					httpOnly: true
				})
			);
		}

		return response;
	}
);
