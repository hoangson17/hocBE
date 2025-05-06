export function CLassDecorator(contructor: Function) {
  console.log("khởi tạo class ", contructor.name);
}

export function Logger(params: any) {
  return (constructor: Function) => {
    console.log("Logger: ", params);
    console.log("a = ", constructor.name);
  };
}

export function MethodDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  //   console.log("target", target);
  //   console.log("key", key);
  //   console.log("descriptor", descriptor);
  const methodName = key;
  console.log("methodName ", methodName);
  const method = descriptor.value; // lấy hàm ban đầu
  // console.log(method);

  descriptor.value = function (...arg: any) {
    console.log(`method ${methodName} call with aruments : `, arg);
    console.log(this);
    // return method.apply(this, arg)
    return method(...arg);
  };
}

export function PropertyDecorrator(target: any, key: string) {
  console.log("target ", target);
  console.log("key ", key);
}

export function MinLength(min: number) {
  return (target: any, key: string) => {
    console.log("key ", key);
    console.log("min ", min);
    let value: string;
    Object.defineProperty(target, key, {
      set: (newValue: string) => {
        if ((newValue as string)?.length && newValue.length < min) {
          throw new Error(`độ dài của key phải từ ${min} kí tự`);
        }
        value = newValue;
      },
      get: () => value,
    });
  };
}

export function LogAccessor(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  // console.log("target",target);
  // console.log('key',key);
  // console.log('descriptor',descriptor);
  const methodName = key;
  const method = descriptor.get;
  descriptor.get = function () {
    // console.log("method",methodName,"call");
    return method?.apply(this);
  };
}

export function ValidateBlacklist(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  const method = descriptor.set;
  descriptor.set = function (newValue: string) {
    if (newValue.toLowerCase().includes("admin")) {
      // throw new Error("admin is not allowed")
      return;
    }
    return method?.apply(this, [newValue]);
  };
}

export function LogParam(target: any, key: string, index: number) {
  {
    console.log("target", target);
    console.log("key", key);
    console.log("index", index);
  }
}
