export class Device {
    public userName:string;
    public modelName:string;
    public macAddress:string;
    public lastConfigured:string
    public image:string
    public image1:string
    constructor(userName,modelName,macAddress,lastConfigured,image,image1) {
        this.userName = userName;
        this.modelName = modelName;
        this.macAddress = macAddress;
        this.lastConfigured = lastConfigured;
        this.image = image;
        this.image1 = image1
    }


}