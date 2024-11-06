import type { Actions } from './$types';
import { sendEmail } from '$lib/emailService';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('Email');
		const result = await sendEmail(
			'New Mailing List Request | spruceseasonalstaging.com',
			`Email: ${email}`,
			`<p><strong>Email:</strong> ${email}</p>`
		);

		return result;
	}
} satisfies Actions;
