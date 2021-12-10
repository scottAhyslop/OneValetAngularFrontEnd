using OneValetAssessmentAPI.Controllers;

namespace OneValetAssessmentAPI.Data
{
    public class DeviceService : IDeviceService
    {
        List<Device> testDevices = new List<Device>();

        void IDeviceService.AddDevice(Device newDevice)
        {
            TestData.allDevices.Add(newDevice);
        }

        void IDeviceService.DeleteDevice(int id)
        {
            var device = TestData.allDevices.First(d => d.DeviceId == id);
             TestData.allDevices.Remove(device);
        }

        List<Device> IDeviceService.GetAllDevices()
        {
           return TestData.allDevices.ToList();
        }

        Device IDeviceService.GetDeviceById(int id)
        {
            return TestData.allDevices.First( d => d.DeviceId == id);
        }

        void IDeviceService.UpdateDevice(int id, Device newDevice)
        {
            var oldDevice = TestData.allDevices.FirstOrDefault(d => d.DeviceId == id);
            if (oldDevice!=null)
            {
                oldDevice.DeviceId = newDevice.DeviceId;
                oldDevice.DeviceName = newDevice.DeviceName;
                oldDevice.DeviceOS = newDevice.DeviceOS;
                oldDevice.DeviceType = newDevice.DeviceType;
                oldDevice.DeviceStatus = newDevice.DeviceStatus;
                oldDevice.Temperature = newDevice.Temperature;
                oldDevice.TimeInUse = newDevice.TimeInUse;
            }
        }
    }// end AngularWebAPI.Data
}// end namespace
