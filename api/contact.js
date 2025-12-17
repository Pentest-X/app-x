export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (name.length < 2 || message.length < 10) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  console.log('Contact Request:', { name, email, company });

  return res.status(200).json({
    success: true,
    message: 'Thank you. Our security team will contact you shortly.'
  });
}
