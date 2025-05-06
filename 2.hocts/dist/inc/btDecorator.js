"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogTime = LogTime;
exports.ValidateTypes = ValidateTypes;
exports.InjectDefaults = InjectDefaults;
exports.Controller = Controller;
require("reflect-metadata");
function LogTime() {
    return function (target, key, descriptor) {
        const timeStart = performance.now();
        const method = descriptor.value;
        method();
        const timeEnd = performance.now();
        const methodName = key;
        console.log(methodName + " chạy trong " + (timeEnd - timeStart).toFixed(2) + "ms");
    };
}
function ValidateTypes() {
    return function (target, key, descriptor) {
        const paramsTypes = Reflect.getMetadata("design:paramtypes", target, key);
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            for (let i = 0; i < args.length; i++) {
                const expectedType = paramsTypes[i];
                const actualArg = args[i];
                if (!(actualArg instanceof expectedType) && typeof actualArg !== expectedType.name.toLowerCase()) {
                    throw new TypeError(` tham số thứ ${i + 1} của phương thức '${key}' cần là kiểu ${expectedType.name}, nhưng nhận được là ${typeof actualArg}`);
                }
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
function InjectDefaults(defaultConfig) {
    return function (contructor) {
        Object.keys(defaultConfig).forEach((key) => {
            contructor.prototype[key] = defaultConfig[key];
        });
    };
}
// bài tập 4: Viết Decorator kết hợp @Controller và @Route(method, path)
/*
Yêu cầu:

Giống cách NestJS hoạt động:

@Controller('/users') định nghĩa base path.

@Route('GET', '/') áp dụng cho method.

Tạo metadata để sau này router có thể lấy ra được endpoint.
*/
function Controller(router) {
    return function (contructor) {
        contructor.prototype['method'] = router;
    };
}
