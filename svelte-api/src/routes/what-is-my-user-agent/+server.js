import { json } from '@sveltejs/kit';

export function GET(event) {
	//console.log(...event.request.headers);

	return json({
		// retrieve a specific header
		userAgent: event.request.headers.get('user-agent')
	});
}
