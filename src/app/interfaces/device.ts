export interface Device {

   
    DeviceId: number;
    DeviceName?: string;
    DeviceOS?: string;
    DeviceType?: string;
    Temperature?: number;
    DeviceIconPath?: string;
    DeviceOSIconPath?:string;
    DeviceStatus?: string;
    TimeInUse?: TimeRanges;
}

/* type ListOfDevices = Device[]; */