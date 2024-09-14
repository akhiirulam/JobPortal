import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required."),
  lastName: yup.string().required("Last name is required."),
  country: yup.string().required("Country is required."),
  streetAddress: yup.string().required("Street address is required."),
  city: yup.string().required("City is required."),
  state: yup.string().required("State is required."),
  zipCode: yup.string().required("ZIP code is required."),
  phone: yup.string().required("Phone number is required."),
  email: yup.string().email("Email address is invalid.").required("Email address is required."),
  paymentMethod: yup.string().required("Please select a payment method.")
});
