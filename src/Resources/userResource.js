const format = (data) => {
  const test = (data && Object.keys(data).length ? {
    id: data.id,
    email: data.email,
    name: data.name,
  } : {});
  return test;
};

const userResource = (data) => (
  Array.isArray(data) ? data.map((r) => format(r)) : format(data)
);

module.exports = userResource;
