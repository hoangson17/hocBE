import 'reflect-metadata';

export function LogTime() {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const timeStart = performance.now();
    const method = descriptor.value;
    method();
    const timeEnd = performance.now();
    const methodName = key;
    console.log(methodName + " chạy trong " + (timeEnd - timeStart).toFixed(2)+"ms");
  };
}


export function ValidateTypes(){
  return function (target:any,key:string,descriptor:PropertyDescriptor){
    const paramsTypes = Reflect.getMetadata("design:paramtypes",target,key);
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args:any[]){
      for(let i =0; i< args.length;i++){
        const expectedType = paramsTypes[i];        
        const actualArg =args[i];
        
        if(!(actualArg instanceof expectedType) && typeof actualArg !== expectedType.name.toLowerCase()){
          throw new TypeError(
            ` tham số thứ ${i+1} của phương thức '${key}' cần là kiểu ${expectedType.name}, nhưng nhận được là ${typeof actualArg}`
          );
        }
      }

      return originalMethod.apply(this,args);
    }
    return descriptor;
  }
}


export function InjectDefaults(defaultConfig:any){
  return function (contructor:Function){
    Object.keys(defaultConfig).forEach((key)=>{
      contructor.prototype[key] = defaultConfig[key];
    })
  }
}


// bài tập 4: Viết Decorator kết hợp @Controller và @Route(method, path)

/*
Yêu cầu:

Giống cách NestJS hoạt động:

@Controller('/users') định nghĩa base path.

@Route('GET', '/') áp dụng cho method.

Tạo metadata để sau này router có thể lấy ra được endpoint.
*/

import 'reflect-metadata';

export function Controller(basePath: string) {
  return function (target: Function) {
    Reflect.defineMetadata('basePath', basePath, target);
  };
}

export function Route(method: string, path: string) {
  return function (target: any, propertyKey: string) {
    const routes: any[] = Reflect.getMetadata('routes', target.constructor) || [];
    routes.push({
      method,
      path,
    });
    Reflect.defineMetadata('routes', routes, target.constructor);
  };
}
