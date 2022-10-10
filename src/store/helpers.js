export const processData = async (path) => {
  let data = await fetch(path)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err);
    });
  return data;
};
