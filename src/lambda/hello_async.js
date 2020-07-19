import cron from 'node-cron';
import mongoose from 'mongoose';
const { Schema } = mongoose;

exports.handler = async (event, context) => {

  var thingSchema = new Schema({}, { strict: false });
  var Thing = mongoose.model('test', thingSchema);

  const connectionUrl = 'mongodb+srv://test:test@nps.uc8zf.mongodb.net/test?retryWrites=true&w=majority';
  await mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true });

  cron.schedule('* * * * *', () => {
    console.error('running a task every minute');
    var thing = new Thing({ iAmNotInTheSchema: true });
    thing.save()
    //getLatestNav();
  });
  console.error("testing console")
  return {
    statusCode: 200,
    body: "Hello, World "
  };
};
