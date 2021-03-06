import React from 'react';

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <textarea {...input} {...props} />
      {hasError && <span>Error</span>}
    </div>
  );
};
export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <input {...input} {...props} />
      {hasError && <span>Error</span>}
    </div>
  );
};
