export default function isFormValid(formData) {
  return (formData.category && formData.title && formData.capacity && formData.units && formData.price) ? true : false;
}