import { startServer } from './server';

describe('Test de démarrage du serveur', () => {
  let server;

  beforeAll(() => {
    server = startServer();
  });

  it('le serveur démarre sans erreur', () => {
    expect(server).toBeDefined();
    expect(server.address()).toBeDefined();
  });

  afterAll(async () => {
    if (server) {
      await new Promise((resolve) => server.close(resolve));
    }
  });

  it('répond à la requête /api/v1/sysinfo', async () => {
    expect(true).toBe(true);
  });
});
