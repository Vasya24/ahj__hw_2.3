const sortIdUp = (field) => (a, b) => (a[field] > b[field] ? 1 : -1);
export const sortIdDown = (field) => (a, b) => (a[field] < b[field] ? 1 : -1);
export default sortIdUp;