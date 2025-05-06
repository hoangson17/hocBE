import { InjectDefaults } from "../inc/btDecorator";

const defaultConfig = {
    apiUrl : "https://api.example.com",
    retry : 3,
};

@InjectDefaults(defaultConfig)
class apiService{
    apiUrl!: string;
    retry!: number;
}
//apiUrl!: string; // cam ket giá trị sẽ không bao giờ là null hoặc undefine

const api = new apiService();

console.log(api.apiUrl);
console.log(api.retry);


