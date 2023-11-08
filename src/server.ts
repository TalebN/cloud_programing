import express from 'express';
import { gatherSystemInformation } from './sysinfo';

const PORT = 3000;

const startServer = () => {
  const app = express();

  app.get('/api/v1/sysinfo', async function (req, res) {
    try {
      const systemInformation = await gatherSystemInformation();
      res.status(200).json(systemInformation);
    } catch (error) {
      console.error('Error gathering system information:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.all('*', function (req, res) {
    res.status(404).send('Error 404: Not Found');
  });

  const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });

  return server; // Renvoie le serveur après l'avoir démarré
};

export { startServer };
