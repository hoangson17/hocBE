import UserService from "../services/user.service";
// import "reflect-metadata";

export default class Controller {
    static load(controller: any, action: string) {
        const dependencies = Reflect.getMetadata("design:paramtypes", controller);
        const DIContainer = (target: any) => {
            if(!target){
                return [];
            }
            const instanceDependencies = target.map((dependency: any) => {                
                const metadata = Reflect.getMetadata("design:paramtypes", dependency);
                return new dependency(...DIContainer(metadata));
            });
            return instanceDependencies;
        };
        const instanceDependencies = DIContainer(dependencies);
        const instance = new controller(...instanceDependencies);
        return instance[action].bind(instance);
    }
}
