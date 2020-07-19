import cron from 'node-cron';

exports.handler = async (event, context) => {

  cron.schedule('* * * * *', () => {
    console.error('running a task every minute');
    //getLatestNav();
  });
  console.error("testing console")
  return {
    statusCode: 200,
    body: "Hello, World "
  };
};
