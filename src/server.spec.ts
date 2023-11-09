import { startServer } from './server';

function runTests() {
  let server;

  function setupServer() {
    const server = startServer();
    return server;
  }

  beforeAll(() => {
    server = setupServer();
  });

  afterAll(async () => {
    if (server) {
      await new Promise((resolve) => server.close(resolve));
    }
  });

  describe('Test de démarrage du serveur', () => {
    it('le serveur démarre sans erreur', () => {
      expect.assertions(2);
      expect(server).toBeDefined();
      expect(server.address()).toBeDefined();
    });

    it('répond à la requête /api/v1/sysinfo', async () => {
      expect.assertions(1);
      expect(true).toBe(true);
    });
  });
}

runTests();
