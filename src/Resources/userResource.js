const format = (data) => ({
  name: data.name,
  email: data.email,
});

const userResource = (data) => (
  Array.isArray(data) ? data.map((r) => format(r)) : format(data)
);

module.exports = userResource;
