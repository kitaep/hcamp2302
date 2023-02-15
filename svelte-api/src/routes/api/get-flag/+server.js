import { json } from '@sveltejs/kit';
import { flag } from '$env/static/private';

const flagPassword = 'hackingcamp';

function isAllowed(pass) {
	if (pass.toUpperCase() !== flagPassword.toUpperCase()) {
		return true;
	}
}

export async function GET({ url, getClientAddress }) {
	const u = url.searchParams.get('pass');
	const ip = getClientAddress();

	if (!['localhost', '127.0.0.1', '', '::1'].includes(ip)) {
		return json({
			text: 'only localhost allowed',
			ip: ip
		});
	}

	if (!u) {
		return json({
			text: '?pass='
		});
	}

	if (!isAllowed(u)) {
		return json({
			text: 'not allowed'
		});
	}

	const a = u.toLowerCase();

	if (a === flagPassword) {
		return json({
			text: flag
		});
	}

	return json({
		text: a
	});
}
