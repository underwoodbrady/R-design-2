import type { Actions } from '../$types';
import { sendEmail } from '$lib/emailService';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const firstName = data.get('First Name');
		const lastName = data.get('Last Name');
		const email = data.get('Email');
		const phone = data.get('Phone');
		const thePlan = data.get('Tell Us What You Are Hoping For!');

		const result = await sendEmail(
			'New Consultation Request | sprucestaging.com',
			`Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nThe Plan: ${thePlan}`,
			`<p><strong>Name:</strong> ${firstName} ${lastName}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Phone:</strong> ${phone}</p>
       <p><strong>The Plan:</strong> ${thePlan}</p>
       `
		);

		return result;
	}
} satisfies Actions;
