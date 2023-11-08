import { gatherSystemInformation } from './sysinfo';

describe('Test sysinfo', () => {
  jest.setTimeout(100000); 
  it('should return the information of the CPU', async () => {
    expect.assertions(1); 
    const systemInformation = await gatherSystemInformation();
    expect(systemInformation).toHaveProperty('cpu');
   
  });
});
