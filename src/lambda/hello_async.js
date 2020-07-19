exports.handler = async (event, context) => {
  const date = new Date();
  console.log(date);
  return {
    statusCode: 200,
    body: "Hello, World " + date
  };
};
