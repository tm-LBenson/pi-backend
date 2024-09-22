export function error(error, req, res, next) {
  res.status(500).json({
    "Type": "Server Error",
    error,
  })
}