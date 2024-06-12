import 'reflect-metadata';

const key = Symbol.for('descriptor');

// 类描述装饰器
export function classDescriptor(description: string) {
    // return function (target: Function) {
    //     // 将类的描述信息挂载到类的原型上
    //     target.prototype.$classDescriptor = descriptor;
    // }

    // 使用 reflect-metadata库 改造
    return Reflect.metadata(key, description);
}

// 属性描述装饰器
export function propDescriptor(description: string) {
    // return function (target: any, propKey: string) {
    //     // 将属性的描述信息挂载到类的原型上
    //     if (!target.$propDescriptors) {
    //         target.$propDescriptors = [];
    //     }
    //     target.$propDescriptors.push({
    //         propKey,
    //         descriptor
    //     })
    // }

    // 使用 reflect-metadata库 改造
    return Reflect.metadata(key, description);
}

// 因为使用 reflect-metadata库 改造类描述装饰器和属性描述装饰器都是一样的,所以可以统一写一个
export function descriptor(description: string) {
    return Reflect.metadata(key, description);
}

export function printObj(obj: any) {
    // 输出类的描述信息
    // if (!obj.$classDescriptor) {
    //     // console.log(obj.__proto__.constructor.name);
    //     console.log(Object.getPrototypeOf(obj).constructor.name);
    // } else {
    //     console.log(obj.$classDescriptor);
    // }
    // console.log(obj.$classDescriptor ? obj.$classDescriptor : Object.getPrototypeOf(obj).constructor.name);
    // 输出属性的描述信息
    // if (!obj.$propDescriptors) {
    //     obj.$propDescriptors = [];
    // } else {
    //     for (const key in obj) {
    //         if (Object.hasOwnProperty.call(obj, key)) {
    //             const prop = obj.$propDescriptors.find((item: any) => item.propKey === key);
    //             // if (prop) {
    //             //     console.log(`\t${prop.descriptor}: ${obj[key]}`)
    //             // } else {
    //             //     console.log(`\t${key}: ${obj[key]}`);
    //             // }
    //             console.log(prop ? `\t${prop.descriptor}: ${obj[key]}` : `\t${key}: ${obj[key]}`)
    //         }
    //     }
    // }

    // 使用 reflect-metadata库 改造
    const cons = Object.getPrototypeOf(obj).constructor;
    // 输出类的描述信息
    // if (Reflect.hasMetadata(key, cons)) {
    //     console.log(Reflect.getMetadata(key, cons));
    // } else {
    //     console.log(cons.name);
    // }
    console.log(Reflect.hasMetadata(key, cons) ? Reflect.getMetadata(key, cons) : cons.name);
    // 输出属性的描述信息
    for (const k in obj) {
        // if (Reflect.hasMetadata(key, obj, k)) {
        //     console.log(`\t${Reflect.getMetadata(key, obj, k)}: ${obj[k]}`);
        // } else {
        //     console.log(`\t${k}: ${obj[k]}`);
        // }
        console.log(Reflect.hasMetadata(key, obj, k) ? `\t${Reflect.getMetadata(key, obj, k)}: ${obj[k]}` : `\t${k}: ${obj[k]}`);
    }
}