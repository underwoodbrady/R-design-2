import type { Actions } from '../$types';
import { sendEmail } from '$lib/emailService';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const firstName = data.get('First Name');
		const lastName = data.get('Last Name');
		const email = data.get('Email');
		const phone = data.get('Phone') || "empty";
		const serviceType = data.get('What type of service would you like?') || "empty";
		const location = data.get('Location') || "empty";
		const sizeOfSpace = data.get('Size of Tree or Size of Space') || "empty";
		const numberPeople = data.get('If an Event, How Many People?') || "empty";
		const budgetTimeline = data.get('What is Your Budget and Desired Timeline?') || "empty";
		const style = data.get('What style best aligns with your vision?') || "empty";
		const objective = data.get('What is The Reason you Would Like Spruce to Help you?') || "empty";

		const result = await sendEmail(
			'New Consultation Request | spruceseasonalstaging.com',
			`Name: ${firstName} ${lastName}
			Email: ${email}
			Phone: ${phone}
			Service Type: ${serviceType}
			Location: ${location}
			Size of Tree or Size of Space: ${sizeOfSpace}
			If Event, How Many People?: ${numberPeople}
			What is Your Budget and Desired Timeline?: ${budgetTimeline}
			What Style Best Aligns With your Vision?: ${style}
			What is The Reason you Would Like Spruce to Help you?: ${objective}`,
			`<p><strong>Name:</strong> ${firstName} ${lastName}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Phone:</strong> ${phone}</p>
       <p><strong>Service Type:</strong> ${serviceType}</p>
       <p><strong>Location:</strong> ${location}</p>
       <p><strong>Size of Tree or Size of Space:</strong> ${sizeOfSpace}</p>
       <p><strong>If Event, How Many People?:</strong> ${numberPeople}</p>
       <p><strong>What is Your Budget and Desired Timeline?:</strong> ${budgetTimeline}</p>
       <p><strong>What Style Best Aligns With your Vision?:</strong> ${style}</p>
       <p><strong>What is The Reason you Would Like Spruce to Help you?:</strong> ${objective}</p>
       `
		);

		return result;
	}
} satisfies Actions;
