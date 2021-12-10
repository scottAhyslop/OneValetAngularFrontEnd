using OneValetAssessmentAPI.Controllers;

namespace OneValetAssessmentAPI.Data
{
    public interface IDeviceService
    {
        List<Device> GetAllDevices();
        Device GetDeviceById(int id);
        void UpdateDevice(int id, Device device);
        void DeleteDevice(int id);
        void AddDevice(Device newDevice);
        
    }
}