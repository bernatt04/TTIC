// src/hooks/useForm.ts
import { useState, ChangeEvent, FormEvent } from 'react';

const useForm = <T extends Record<string, any>>(initialValues: T, onSubmit: (values: T) => void) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = (values: T) => {
    const validationErrors: Partial<Record<keyof T, string>> = {};
    // Añadir validaciones personalizadas aquí
    return validationErrors;
  };

  return { values, errors, handleChange, handleSubmit };
};

export default useForm;
