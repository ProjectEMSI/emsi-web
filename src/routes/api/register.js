import api from "../../lib/utils/api.js";

export async function post({ locals, request }) {
    const data = await request.formData();

    let response;
    try {
        response = await api.post('/auth/register', {
            name: data.get('email'),
            username: data.get('username'),
            email: data.get('email'),
            password: data.get('password'),
            password_confirmation: data.get('password_confirmation')
        })
    } catch (err) {
        return err.response;
    }

    locals.session.data = {
        user: response.data,
        api_token: response.data.meta.token,
    }

    return {
        status: 303,
        headers: {
            location: '/'
        }
    }
}
