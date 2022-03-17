export async function del({ locals }) {
    locals.session.destroy();

    return {
        status: 303,
        headers: {
            location: '/login',
        }
    }
}
