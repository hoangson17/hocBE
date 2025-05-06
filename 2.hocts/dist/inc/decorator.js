"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLassDecorator = CLassDecorator;
exports.Logger = Logger;
exports.MethodDecorator = MethodDecorator;
exports.PropertyDecorrator = PropertyDecorrator;
exports.MinLength = MinLength;
exports.LogAccessor = LogAccessor;
exports.ValidateBlacklist = ValidateBlacklist;
exports.LogParam = LogParam;
function CLassDecorator(contructor) {
    console.log("khởi tạo class ", contructor.name);
}
function Logger(params) {
    return (constructor) => {
        console.log("Logger: ", params);
        console.log("a = ", constructor.name);
    };
}
function MethodDecorator(target, key, descriptor) {
    //   console.log("target", target);
    //   console.log("key", key);
    //   console.log("descriptor", descriptor);
    const methodName = key;
    console.log("methodName ", methodName);
    const method = descriptor.value; // lấy hàm ban đầu
    // console.log(method);
    descriptor.value = function (...arg) {
        console.log(`method ${methodName} call with aruments : `, arg);
        console.log(this);
        // return method.apply(this, arg)
        return method(...arg);
    };
}
function PropertyDecorrator(target, key) {
    console.log("target ", target);
    console.log("key ", key);
}
function MinLength(min) {
    return (target, key) => {
        console.log("key ", key);
        console.log("min ", min);
        let value;
        Object.defineProperty(target, key, {
            set: (newValue) => {
                if ((newValue === null || newValue === void 0 ? void 0 : newValue.length) && newValue.length < min) {
                    throw new Error(`độ dài của key phải từ ${min} kí tự`);
                }
                value = newValue;
            },
            get: () => value,
        });
    };
}
function LogAccessor(target, key, descriptor) {
    // console.log("target",target);
    // console.log('key',key);
    // console.log('descriptor',descriptor);
    const methodName = key;
    const method = descriptor.get;
    descriptor.get = function () {
        // console.log("method",methodName,"call");
        return method === null || method === void 0 ? void 0 : method.apply(this);
    };
}
function ValidateBlacklist(target, key, descriptor) {
    const method = descriptor.set;
    descriptor.set = function (newValue) {
        if (newValue.toLowerCase().includes("admin")) {
            // throw new Error("admin is not allowed")
            return;
        }
        return method === null || method === void 0 ? void 0 : method.apply(this, [newValue]);
    };
}
function LogParam(target, key, index) {
    {
        console.log("target", target);
        console.log("key", key);
        console.log("index", index);
    }
}
