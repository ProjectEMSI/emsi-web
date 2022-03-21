import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import { handleSession } from 'svelte-kit-cookie-session';
import { locales } from "./lib/translations/index.js";

export async function getSession({ locals }) {
	console.log(locals);
	return {
		isLoggedIn: !!locals.session.data?.api_token,
		language: locals.cookies.language || locals.language,
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

		const language = event.request.headers.get('accept-language').match(/([a-z]{2})(?:-([a-z]{2}))?/i)

		event.locals.userid = cookies.userid || uuid();

		locales.subscribe((value => {
			event.locals.language = cookies.language || value.includes(language[0]) ? language[0] : 'cs';
		}))

		const response = await resolve(event);

		if (!cookies.userid) {
			response.headers.append('set-cookie', cookie.serialize('userid', event.locals.userid, {
				path: '/',
				httpOnly: true,
				SameSite: 'lax',
			}))
		}

		if (!cookies.language) {
			response.headers.append('set-cookie', cookie.serialize('language', event.locals.language, {
				path: '/',
				httpOnly: false,
				SameSite: 'lax',
			}))
		}

		return response;
	}
);
