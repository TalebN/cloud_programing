const { startServer } = require('./server');

describe('Test de démarrage du serveur', () => {
  let server;

  beforeAll(() => {
    server = startServer();
  });

  it('le serveur démarre sans erreur', () => {
    // Vérifier que le serveur a été démarré avec succès
    expect(server).toBeDefined();
    expect(server.address()).toBeDefined();
  });

  afterAll((done) => {
    if (server) {
      server.close(done);
    }
  });

  it('répond à la requête /api/v1/sysinfo', async () => {
    //
  });
});
