const netlifyGraph = require("./netlifyGraph"); // make sure this is the path to your netlify/functions dir

exports.handler = async function (event, context) {
  try {
    const { errors, data } = await netlifyGraph.fetchDailyTotal(
      {},
      { accessToken: event.netlifyGraphToken }
    );

    return {
      statusCode: errors ? 500 : 200,
      body: JSON.stringify(errors || data),
      headers: { "Content-Type": "application/json" },
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
      headers: { "Content-Type": "application/json" },
    };
  }
};
