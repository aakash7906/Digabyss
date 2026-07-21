import { httpsCallable } from 'firebase/functions'
import { functions } from './index'

export const createStripePaymentIntent = async (payload: {
  amount: number,
  currency: string,
  bookingId: string,
  homeownerId: string,
  proId: string,
}) => {
  const createPaymentIntent = httpsCallable(functions, 'createPaymentIntent')
  const result = await createPaymentIntent(payload)
  return (result.data as { clientSecret: string }).clientSecret
}

export const createMembershipPaymentIntent = async (payload: {
  amount: number,
  currency: string,
  planId: string,
  planName: string,
  proId: string,
  billingCycle: string,
}) => {
  const fn = httpsCallable(functions, 'createMembershipPaymentIntent')
  const result = await fn(payload)
  return (result.data as { clientSecret: string }).clientSecret
}

export const createAdditionalUserPaymentIntent = async (payload: {
  amount: number,
  currency: string,
  role: string,
  companyId: string,
  inviteeEmail: string,
}) => {
  const fn = httpsCallable(functions, 'createAdditionalUserPaymentIntent')
  const result = await fn(payload)
  return (result.data as { clientSecret: string }).clientSecret
}

export const createStripeSetupIntent = async () => {
  const fn = httpsCallable(functions, 'createStripeSetupIntent')
  const result = await fn()
  return (result.data as { clientSecret: string }).clientSecret
}

export const updatePaymentIntentWithPaymentMethod = async (payload: {
  paymentIntentId: string;
  paymentMethodId: string;
}) => {
  const fn = httpsCallable(functions, 'updatePaymentIntentWithPaymentMethod')
  const result = await fn(payload)
  return result.data as { success: boolean; amount: number; surchargeApplied: boolean; cardCountry: string }
}


