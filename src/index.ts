import { descriptor, printObj } from "./descriptor";

@descriptor('文章')
class Article {
    @descriptor('标题')
    private title: string;

    @descriptor('内容')
    private content: string;

    @descriptor('发布日期')
    private date: Date;
}

const article = new Article();
article['title'] = '装饰器模式';
article['content'] = '装饰器模式是一种结构型设计模式';
article['date'] = new Date();

printObj(article);


/* 练习使用 reflect-metadata库 */
// import 'reflect-metadata';

// @Reflect.metadata('key', '人')
// class Person {
//     @Reflect.metadata('key', '张三')
//     name: string;

//     @Reflect.metadata('key', 18)
//     age: number;
// }

// const person = new Person();

// // 得到某一个类的元数据信息
// console.log(Reflect.getMetadata('key', Person));
// // 得到某一个成员的元数据信息
// console.log(Reflect.getMetadata('key', person, 'name'));