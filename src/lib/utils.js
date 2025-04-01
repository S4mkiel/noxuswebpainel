export const formatDate = (date) => {
  return `<t:${Math.floor(new Date(date).getTime() / 1000)}:F>`;
};

export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};
