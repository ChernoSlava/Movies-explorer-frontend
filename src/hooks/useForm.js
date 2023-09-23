import { useCallback, useState } from 'react';
import isEmail from 'validator/es/lib/isEmail';

export function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isEmptiness, setIsEmptiness] = useState(false);

  const handleChange = e => {
    const input = e.target;
    const { name, value } = input;

    if (name === 'email') {
      if (!isEmail(value)) {
        input.setCustomValidity('Указана некорректная почта');
      } else {
        input.setCustomValidity('');
      }
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsEmptiness(input.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, moreEmptiness = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsEmptiness(moreEmptiness);
    },
    [setValues, setErrors, setIsEmptiness],
  );
  return {
    values,
    handleChange,
    resetForm,
    errors,
    isEmptiness,
    setIsEmptiness,
  };
}
