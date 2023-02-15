import { json } from '@sveltejs/kit';

export function GET() {
	return json({
		text: 'API Service'
	});
}
