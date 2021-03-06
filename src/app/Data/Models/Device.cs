using System.Collections.Generic;

namespace OneValetAssessmentAPI.Controllers
{
    public class Device
    {
        //DeviceId incrementer holder value
        private static int deviceIdIncrementer = 0;

        //blank constructor
        public Device()
        {
        }

        //these values will be pulled from data to populate the device, all values can be null, except for DeviceId which is created upon instantiation, and temp which will be wired to the device
        public Device(string deviceName, float temp, string deviceIconPath, string deviceOSIconPath, string deviceOS, string deviceType,  string deviceStatus, TimeSpan timeInUse)
      {
          //create a new DeviceId
          this.DeviceId = System.Threading.Interlocked.Increment(ref deviceIdIncrementer);

          //Properties that may or may not be null depending on what data is passed in
          DeviceName = deviceName;
          if (temp==0)
          {
            //assuming the temp of the Device is being tracked and updated by the tick...
            Temperature = this.Temperature;
          }
          //These fields will be chosen by the user in AddDevice
          //Drop-down menus in forms that will show icons co-relating to the OSs and Devices chosen
          //The icons, devices, and OSs currently can be populated into dictionaries by methods found in the DeviceController
          DeviceIconPath = deviceIconPath;
          DeviceOSIconPath = deviceOSIconPath;
          DeviceOS = deviceOS;
          DeviceType = deviceType;

          //a general health of the machine check, assuming that there is an active routine montioring 'health' params and that this app would have access to that, in the meantime, it's a string
          DeviceStatus = deviceStatus;
          
          //if timeInUse is null when Device is instantiated, sets TimeInUse to zero
          if (timeInUse==null)
          {
              TimeInUse = new TimeSpan(0,0,0,0);
          }
      }
        public int DeviceId { get; set; }
        public string? DeviceName { get; set; }
        public float Temperature { get; set; }
        public string? DeviceIconPath { get; set; }
        public string? DeviceOSIconPath { get; set; }
        public string? DeviceType{get; set; }
        public string? DeviceOS{get; set; }
        public string? DeviceStatus { get; set; } 
         public TimeSpan TimeInUse { get; set; }

      
    }
}
