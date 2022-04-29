/**
 * This is just an error handler that express will use as a fallback
 * if there are errors during the request
 */

const handleErrors = (err, req, res) => {
  if (err) {
    return res.status(500).json({
      status: 'error',
      message: err.message,
      stack: err.stack,
    });
  }
};

export default handleErrors;