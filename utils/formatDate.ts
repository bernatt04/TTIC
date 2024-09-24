// src/utils/formatDate.ts

export const formatDate = (date: Date, format: string = 'short', locale: string = 'es-ES'): string => {
    const options: Intl.DateTimeFormatOptions = 
      format === 'long' 
        ? { year: 'numeric', month: 'long', day: 'numeric' }
        : { year: 'numeric', month: '2-digit', day: '2-digit' };
  
    return new Intl.DateTimeFormat(locale, options).format(date);
  };
  