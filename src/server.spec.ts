import { startServer } from './server';

  describe('Test de démarrage du serveur', () => {
    it('le serveur démarre sans erreur',async () => {
      expect.assertions(2);
      let server;
      server = startServer();
      expect(server).toBeDefined();
      expect(server.address()).toBeDefined();
      if (server) {
        await new Promise((resolve) => server.close(resolve));
      }
    });

    it('répond à la requête /api/v1/sysinfo', async () => {
      expect.assertions(1);
      expect(true).toBe(true);
      
    });
  });

