export const requiredField = value => {
  if (value) {
    return undefined;
  } else {
    return 'field is required';
  }
};

export const maxLengthCreator = maxLength => value => {
  if (value.length >= maxLength) {
    return `Max length ${maxLength} symbol`;
  }
  return undefined;
};
