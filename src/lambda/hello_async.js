import cron from 'node-cron';

exports.handler = async (event, context) => {

  cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
    //getLatestNav();
  });
  return {
    statusCode: 200,
    body: "Hello, World "
  };
};
