export function home(req, res) {
  res.status(200).json({ 'server-status': 'Online' });

}