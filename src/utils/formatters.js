export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

export const formatClosePrice = (price) => {
  return parseFloat(price).toFixed(2);
};