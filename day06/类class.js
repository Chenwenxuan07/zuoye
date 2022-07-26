//Es6中类的定义

/**
 *1. 声明人的类
 */

class People {
    constructor(name, age) {
        this.name = name
        this.age = age

    }
    //类的方法
    sport() {
        return this.name + '会运动'
    }
}

//对类进行实例化
let p = new People('小明', 18)

//调用类的方法
console.log(p.sport());

//获取类的属性
console.log(p.age);



/**
 * 2.Ts中类的定义
 */
class People {
    name: string
    age: number
    constructor(name: String, age) {
        this.name = name
        this.age = age
    }
    sport(): string {
        return `${this.name}会运动`
    }
}

//对类进行实例化
let p = new People('小明', 18)
//注意声明类的时候约束name属性为string类型，age属性为数字类型；实例化的时候要严格按照类型传参

//调用类的方法
console.log(p.sport());

//获取类的属性
console.log(p.age);


// 在ES5中继承可以通过原型链来实现继承

//    声明一个动物的构造函数


function Animal(name) {
    this.name = name
    this.run = () => {
        console.log(this.name + '会跑步');
    }
}
// 构造函数原型链上添加方法
Animal.prototype.song = function () {
    console.log(`${this.name}会唱歌`);
}



//    原型链继承


function Dog(name) {

}
Dog.prototype = Animal.prototype

let d = new Dog('哈哈')
d.song() // undefined会唱歌



//    原型链加冒充对象的继承方式


function Dog(name) {
    Animal.call(this, name)
}

let d = new Dog('哈士奇')

console.log(d.name); // 哈士奇
console.log(d.run()); // 哈士奇会跑步
console.log(d.song()); // 报错： d.song is not a function
// 不能继承原型链上的方法




//    组合继承


function Dog(name) {
    Animal.call(this, name)
}
Dog.prototype = Animal.prototype

let d = new Dog('哈士奇')

console.log(d.name);// 哈士奇
d.run()// 哈士奇会跑步
d.song()// 哈士奇会唱歌


// 2. ES6中的继承

//    声明一个动物的类


class Animal {
    constructor(name) {
        this.name = name
    }
    run() {
        console.log(`${this.name}会跑步`);
    }
}



//    声明 狗 类 继承动物类

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
}


let d = new Dog('哈士奇')
console.log(d.name); // 哈士奇
d.run(); // 哈士奇会跑步



// 3. TS中类的继承

//    和ES6中的继承一样，只是添加了属性的数据类型


class Animal {
    name: string
    constructor(name) {
        this.name = name
    }
    getName(): string {
        return this.name
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
}

let d = new Dog('哈士奇')
console.log(d.name); // 哈士奇
console.log(d.getName());// 哈士奇





// 1. 使用 public 修饰符，公有，类里面、子类、类外面都可以访问


class Animal {
    name: string
    constructor(name) {
        this.name = name
    }
    getName(): string {
        // 父类内部获取name属性
        return this.name
    }
}
// 实例化父类
let a = new Animal('动物')
// 父类外获取name属性
console.log(a.name);

// 声明 狗类 继承 动物类
class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    run(): string {
        // 子类内部获取name属性
        return this.name + '会运动'
    }
}

// 实例化子类
let d = new Dog('哈士奇')
// 子类 类外
console.log(d.name);
console.log(d.getName());


// 2. 使用 protected 修饰符，类里面、子类可以访问  类外面不可以访问


class Animal {
    protected name: string
    constructor(name) {
        this.name = name
    }
    getName(): string {
        // 父类内部获取name属性
        return this.name
    }
}
// 实例化父类
let a = new Animal('动物')
// 父类外获取name属性
console.log(a.name); // 编译报错 属性“name”受保护，只能在类“Animal”及其子类中访问。

// 声明 狗类 继承 动物类
class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    run(): string {
        // 子类内部获取name属性
        return this.name + '会运动'
    }
}

// 实例化子类
let d = new Dog('哈士奇')
// 子类 类外
console.log(d.name);  // 编译报错 属性“name”受保护，只能在类“Animal”及其子类中访问。
console.log(d.getName());




// 3. 使用 private 修饰符，类里面可以访问，其他不行


class Animal {
    private name: string
    constructor(name) {
        this.name = name
    }
    getName(): string {
        // 父类内部获取name属性
        return this.name
    }
}
// 实例化父类
let a = new Animal('动物')
// 父类外获取name属性
console.log(a.name); // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问

// 声明 狗类 继承 动物类
class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    run(): string {
        // 子类内部获取name属性
        return this.name + '会运动' // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问
    }
}

// 实例化子类
let d = new Dog('哈士奇')
// 子类 类外
console.log(d.name); // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问
console.log(d.getName());





// 1. 静态属性

//    使用static修饰静态属性


class Animal {
    name: string
    static prop: string = '1'
    constructor(name: string) {
        this.name = name
    }
    getName(): string {
        return this.name
    }
}

console.log(Animal.prop); // 1

let a = new Animal('小狗')

console.log(a.prop); // 属性“prop”在类型“Animal”上不存在


//    静态属性不能在实例上获取

// 2. 静态方法

class Animal {
    name: string
    static prop: string = '1'
    constructor(name: string) {
        this.name = name
    }
    getName(): string {
        return this.name
    }
    static sayHello(): string {
        return 'hello'
    }
}
// Animal.prop = 'haha'

console.log(Animal.prop); // 1

console.log(Animal.sayHello()); // hello

let a = new Animal('小狗')

console.log(a.prop); // 属性“prop”在类型“Animal”上不存在
console.log(a.sayHello()); // 性“sayHello”在类型“Animal”上不存在












/**
 *1. 声明人的类
 */

class People {
    constructor(name, age) {
        this.name = name
        this.age = age

    }
    //类的方法
    sport() {
        return this.name + '会运动'
    }
}

//对类进行实例化
let p = new People('小明', 18)

//调用类的方法
console.log(p.sport());

//获取类的属性
console.log(p.age);



/**
 * 2.Ts中类的定义
 */
class People {
    name: string
    age: number
    constructor(name: String, age) {
        this.name = name
        this.age = age
    }
    sport(): string {
        return `${this.name}会运动`
    }
}

//对类进行实例化
let p = new People('小明', 18)

//调用类的方法
console.log(p.sport());

//获取类的属性
console.log(p.age);




function Animal(name) {
    this.name = name
    this.run = () => {
        console.log(this.name + '会跑步');
    }
}
// 构造函数原型链上添加方法
Animal.prototype.song = function () {
    console.log(`${this.name}会唱歌`);
}



function Dog(name) {

}
Dog.prototype = Animal.prototype

let d = new Dog('哈哈')
d.song() // undefined会唱歌



function Dog(name) {
    Animal.call(this, name)
}

let d = new Dog('哈士奇')

console.log(d.name);
console.log(d.run());
console.log(d.song());




//    组合继承


function Dog(name) {
    Animal.call(this, name)
}
Dog.prototype = Animal.prototype

let d = new Dog('哈士奇')

console.log(d.name);// 哈士奇
d.run()// 哈士奇会跑步
d.song()// 哈士奇会唱歌


// 2. ES6中的继承



class Animal {
    constructor(name) {
        this.name = name
    }
    run() {
        console.log(`${this.name}会跑步`);
    }
}





class Dog extends Animal {
    constructor(name) {
        super(name)
    }
}


let d = new Dog('哈士奇')
console.log(d.name);
d.run();






class Animal {
    name: string
    constructor(name) {
        this.name = name
    }
    getName(): string {
        return this.name
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
}

let d = new Dog('哈士奇')
console.log(d.name);
console.log(d.getName());



class Animal {
    name: string
    constructor(name) {
        this.name = name
    }
    getName(): string {
        // 父类内部获取name属性
        return this.name
    }
}
// 实例化父类
let a = new Animal('动物')
// 父类外获取name属性
console.log(a.name);

// 声明 狗类 继承 动物类
class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    run(): string {
        // 子类内部获取name属性
        return this.name + '会运动'
    }
}

// 实例化子类
let d = new Dog('哈士奇')
// 子类 类外
console.log(d.name);
console.log(d.getName());


// 2. 使用 protected 修饰符，类里面、子类可以访问  类外面不可以访问


class Animal {
    protected name: string
    constructor(name) {
        this.name = name
    }
    getName(): string {
        // 父类内部获取name属性
        return this.name
    }
}
// 实例化父类
let a = new Animal('动物')
// 父类外获取name属性
console.log(a.name);

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    run(): string {
        // 子类内部获取name属性
        return this.name + '会运动'
    }
}

// 实例化子类
let d = new Dog('哈士奇')
// 子类 类外
console.log(d.name);
console.log(d.getName());




// 3. 使用 private 修饰符，类里面可以访问，其他不行


class Animal {
    private name: string
    constructor(name) {
        this.name = name
    }
    getName(): string {
        // 父类内部获取name属性
        return this.name
    }
}
// 实例化父类
let a = new Animal('动物')
// 父类外获取name属性
console.log(a.name);

// 声明 狗类 继承 动物类
class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    run(): string {
        // 子类内部获取name属性
        return this.name + '会运动'
    }
}

// 实例化子类
let d = new Dog('哈士奇')
// 子类 类外
console.log(d.name);
console.log(d.getName());





// 1. 静态属性




class Animal {
    name: string
    static prop: string = '1'
    constructor(name: string) {
        this.name = name
    }
    getName(): string {
        return this.name
    }
}

console.log(Animal.prop); // 1

let a = new Animal('小狗')

console.log(a.prop);




// 2. 静态方法

class Animal {
    name: string
    static prop: string = '1'
    constructor(name: string) {
        this.name = name
    }
    getName(): string {
        return this.name
    }
    static sayHello(): string {
        return 'hello'
    }
}


console.log(Animal.prop); // 1

console.log(Animal.sayHello()); // hello

let a = new Animal('小狗')

console.log(a.prop);
console.log(a.sayHello());







class People {
    constructor(name, age) {
        this.name = name
        this.age = age

    }
    //类的方法
    sport() {
        return this.name + '会运动'
    }
}

//对类进行实例化
let p = new People('小明', 18)

//调用类的方法
console.log(p.sport());

//获取类的属性
console.log(p.age);



/**
 * 2.Ts中类的定义
 */
class People {
    name: string
    age: number
    constructor(name: String, age) {
        this.name = name
        this.age = age
    }
    sport(): string {
        return `${this.name}会运动`
    }
}

//对类进行实例化
let p = new People('小明', 18)

//调用类的方法
console.log(p.sport());

//获取类的属性
console.log(p.age);




function Animal(name) {
    this.name = name
    this.run = () => {
        console.log(this.name + '会跑步');
    }
}
// 构造函数原型链上添加方法
Animal.prototype.song = function () {
    console.log(`${this.name}会唱歌`);
}



function Dog(name) {

}
Dog.prototype = Animal.prototype

let d = new Dog('哈哈')
d.song() // undefined会唱歌



function Dog(name) {
    Animal.call(this, name)
}

let d = new Dog('哈士奇')

console.log(d.name);
console.log(d.run());
console.log(d.song());




//    组合继承


function Dog(name) {
    Animal.call(this, name)
}
Dog.prototype = Animal.prototype

let d = new Dog('哈士奇')

console.log(d.name);// 哈士奇
d.run()// 哈士奇会跑步
d.song()// 哈士奇会唱歌


// 2. ES6中的继承



class Animal {
    constructor(name) {
        this.name = name
    }
    run() {
        console.log(`${this.name}会跑步`);
    }
}





class Dog extends Animal {
    constructor(name) {
        super(name)
    }
}


let d = new Dog('哈士奇')
console.log(d.name);
d.run();






class Animal {
    name: string
    constructor(name) {
        this.name = name
    }
    getName(): string {
        return this.name
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
}

let d = new Dog('哈士奇')
console.log(d.name);
console.log(d.getName());



class Animal {
    name: string
    constructor(name) {
        this.name = name
    }
    getName(): string {
        // 父类内部获取name属性
        return this.name
    }
}
// 实例化父类
let a = new Animal('动物')
// 父类外获取name属性
console.log(a.name);

// 声明 狗类 继承 动物类
class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    run(): string {
        // 子类内部获取name属性
        return this.name + '会运动'
    }
}

// 实例化子类
let d = new Dog('哈士奇')
// 子类 类外
console.log(d.name);
console.log(d.getName());


// 2. 使用 protected 修饰符，类里面、子类可以访问  类外面不可以访问


class Animal {
    protected name: string
    constructor(name) {
        this.name = name
    }
    getName(): string {
        // 父类内部获取name属性
        return this.name
    }
}
// 实例化父类
let a = new Animal('动物')
// 父类外获取name属性
console.log(a.name);

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    run(): string {
        // 子类内部获取name属性
        return this.name + '会运动'
    }
}

// 实例化子类
let d = new Dog('哈士奇')
// 子类 类外
console.log(d.name);
console.log(d.getName());




// 3. 使用 private 修饰符，类里面可以访问，其他不行


class Animal {
    private name: string
    constructor(name) {
        this.name = name
    }
    getName(): string {
        // 父类内部获取name属性
        return this.name
    }
}
// 实例化父类
let a = new Animal('动物')
// 父类外获取name属性
console.log(a.name);

// 声明 狗类 继承 动物类
class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    run(): string {
        // 子类内部获取name属性
        return this.name + '会运动'
    }
}

// 实例化子类
let d = new Dog('哈士奇')
// 子类 类外
console.log(d.name);
console.log(d.getName());


// 1. 静态属性


class Animal {
    name: string
    static prop: string = '1'
    constructor(name: string) {
        this.name = name
    }
    getName(): string {
        return this.name
    }
}

console.log(Animal.prop); // 1

let a = new Animal('小狗')

console.log(a.prop);




// 2. 静态方法

class Animal {
    name: string
    static prop: string = '1'
    constructor(name: string) {
        this.name = name
    }
    getName(): string {
        return this.name
    }
    static sayHello(): string {
        return 'hello'
    }
}


console.log(Animal.prop); // 1

console.log(Animal.sayHello()); // hello

let a = new Animal('小狗')

console.log(a.prop);
console.log(a.sayHello());

