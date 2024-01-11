import { loadStripe } from '@stripe/stripe-js';

import {API_BASE, STRIPE_KEY } from "../settings";

const stripePromise = loadStripe(STRIPE_KEY);

const handleCheckout = async (plan: string) => {
  const subIdString: any = localStorage.getItem('submissionId');
  const submissionId = JSON.parse(subIdString);

    try {
        // Call your API to create a checkout session
        const response = await fetch(`${API_BASE}/article/checkout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // Include any necessary data in the body, like the submissionId
            body: JSON.stringify({ submissionId: submissionId, plan: plan }),
        });

        const session = await response.json();

        // When the session ID is received, redirect to Stripe's checkout
        const stripe: any = await stripePromise;
        const result = await stripe.redirectToCheckout({
            sessionId: session.sessionId,
        });

        if (result.error) {
            // Handle any errors that occur during the redirect
            console.error(result.error.message);
        }
    } catch (error) {
        // Handle errors in creating the checkout session
        console.error('Error in creating checkout session:', error);
    }
};


export default handleCheckout;