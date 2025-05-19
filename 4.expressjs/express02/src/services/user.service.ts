import { Injectable } from "../Core/decorators";
import AuthService from "./auth.service";
@Injectable
export default class UserService {
    constructor(private authService: AuthService){}
    findAll(){
        // console.log(this.authService);
        this.authService.login();
        return 'findAll';
    }
}