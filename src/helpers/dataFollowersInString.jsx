export const dataFollowersInString = (f) => {
  if (f.toString().length > 3) {
    return (
      f.toString().slice(0, f.toString().length - 3) +
      "," +
      f.toString().slice(f.toString().length - 3)
    );
  }
  return f.toString();
};
