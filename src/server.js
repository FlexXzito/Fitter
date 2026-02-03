import 'dotenv/config';
import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}/`);
  console.log(`Press CTRL+C to stop the server`);
  console.log(`Register: : http://localhost:${PORT}/api/register`)
});