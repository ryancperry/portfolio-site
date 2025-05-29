const capitalize = (str: string = ''): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const slugifyString = (str: string = ''): string => {
  return str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

export { capitalize, slugifyString };
