import si from 'systeminformation';

export const gatherSystemInformation = async () => {
  const systemInformation = {
    cpu: await si.cpu(),
    system: await si.system(),
    mem: await si.mem(),
    os: await si.osInfo(),
    currentLoad: await si.currentLoad(),
    processes: await si.processes(),
    diskLayout: await si.diskLayout(),
    networkInterfaces: await si.networkInterfaces(),
  };
  return systemInformation;
};
