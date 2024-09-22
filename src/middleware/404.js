export function notFound(req, res, next) {
  const responseMessage = `The endpoint ${req.originalUrl} was not found.`;
  res.status(404).json({
    Type: 'Client Error',
    error: responseMessage,
  });
}
