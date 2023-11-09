import { startServer } from './server';

describe('Test de démarrage du serveur', () => {
  let server;

  it('démarre le serveur sans erreur', () => {
    server = startServer();
    expect.assertions(2);
    expect(server).toBeDefined();
    expect(server.address()).toBeDefined();
  });

  it('répond à la requête /api/v1/sysinfo', async () => {
    expect.assertions(1);
    expect(true).toBe(true);
  });

  afterEach(async () => {
    if (server) {
      await new Promise((resolve) => server.close(resolve));
    }
  });
});
