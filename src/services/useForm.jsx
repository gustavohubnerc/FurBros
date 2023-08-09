import { useState } from 'react';

export default function useForm(emptyForm) {
  const [form, setForm] = useState(emptyForm);

  const changeForm = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return { form, changeForm };
}
