import './style.scss'


// 异步函数
console.log('a');
// 函数 setTimeout 接受两个参数：待加入队列的消息和一个时间值（可选，默认为 0）。这个时间值代表了消息被实际加入到队列的最小延迟时间。如果队列中没有其他消息并且栈为空，在这段延迟时间过去之后，消息会被马上处理。但是，如果有其他消息，setTimeout 消息必须等待其他消息处理完。因此第二个参数仅仅表示最少延迟时间，而非确切的等待时间
// callback
// setTimeout(()=>{console.log('b');},0)
console.log('c');

// document.querySelector('btn').addEventListener('click',callback)


// callback 回调地狱
console.clear();
function printString(string,callback){
setTimeout(()=>{
    console.log(string);
    callback()
},Math.floor(Math.random()*100)+1)

}
function printAll(){
    printString('a',()=>{
        printString('b',()=>{
            printString('c',()=>{

            })
        })
    })
    
    
}
// printAll()








function log(string){
    console.log(string);
}
// class 本质上是fuction演变 语法糖
class User{
    constructor(name,age){
        this.name=name
        this.age=age
    }

    printName(){
        console.log(this.name);
    }
    printAge(){
        console.log(this.age);
    }
}
const newPerson = new User('john',30)
newPerson.printName()
newPerson.printAge()

// 类（Class）：咖啡厅菜单上的 "咖啡" 这个概念对应于编程中的一个类。就像 "咖啡" 这个词描述了咖啡的一般特性和类型，一个类定义了对象的通用结构和行为。
// 属性（Attributes）：具体的咖啡特征——如咖啡豆的类型、是否含牛奶、是否添加糖、份量大小——这些可以对应于类中的属性。属性是类的成员变量，用于存储对象的状态信息。
class Coffee {
    constructor(beanType, hasMilk, hasSugar, size) {
        this.beanType = beanType;
        this.hasMilk = hasMilk;
        this.hasSugar = hasSugar;
        this.size = size;
    }
}
// 方法（Methods）：描述可以对咖啡执行的动作——如制作咖啡、加热咖啡、加料——在类中对应于方法。方法是定义在类上的函数，可以对对象的内部状态进行操作。
// class Coffee {
//     // ...先前的属性定义
//     make() {
//         console.log(`Making a ${this.size} ${this.beanType} coffee.`);
//     }

//     heat() {
//         console.log(`Heating up the coffee.`);
//     }

//     addCondiments(condiments) {
//         console.log(`Adding ${condiments.join(", ")} to the coffee.`);
//     }
// }

// 实例（Instances）：每当顾客在咖啡厅订一杯特定类型的咖啡时，就好比是根据类模板创建了一个实例。例如，创建一个美式咖啡的实例，它具有了 Coffee 类提供的所有属性和方法，但每个属性的值具体化了，符合美式咖啡的特征。
// const americano = new Coffee("Arabica", false, false, "Medium");
// americano.make(); // 输出：Making a Medium Arabica coffee.
// 在这个编程中的 class 概念里，每一个对象实例，如美式咖啡或卡布奇诺，都是根据 Coffee 类创建出来的，这使得所有咖啡对象都有相同的结构（属性和方法）但可以有各自不同的属性值。










// Promise
const dinnerPromise = new Promise((resolve, reject) => {
    // 模拟异步操作，比如制作食物
    const ingredientsAvailable = true; // 假设食材可用
    if (ingredientsAvailable) {
        resolve('晚餐准备好了！'); // 食物准备好了，兑现承诺
    } else {
        reject('材料不足，无法准备晚餐。'); // 无法兑现承诺，拒绝
    }
});

dinnerPromise
    .then(result => {
        console.log(result); // 当承诺被兑现时执行
    })
    .catch(error => {
        console.error(error); // 当承诺被拒绝时执行
    });




    // 创建一个 Promise 对象
const myPromise = new Promise((resolve, reject) => {
    const condition = true; // 这里只是一个简单的条件，实际中可能是复杂的逻辑

    if (condition) {
        resolve("这里是成功的结果"); // 如果条件满足，则 "解决" Promise，提供结果数据
    } else {
        reject("这里是错误或拒绝的原因"); // 如果条件不满足，则 "拒绝" Promise，提供错误信息
    }
});

// 使用 .then() 处理成功解决的 Promise
myPromise.then((resolvedResult) => {
    console.log(resolvedResult); // 这里的 resolvedResult 对应上面 resolve 函数调用时的参数 "这里是成功的结果"
}).catch((rejectedError) => {
    console.log(rejectedError); // 这里的 rejectedError 对应上面 reject 函数调用时的参数 "这里是错误或拒绝的原因"
});


// const fetchUserData = new Promise((resolve, reject) => {
//     // 异步操作：获取用户数据
//     fetchDataFromServer((error, data) => {
//         if (error) {
//             reject(error); // 处理失败情况
//         } else {
//             resolve(data); // 处理成功情况
//         }
//     });
// });

// fetchUserData
//     .then(data => {
//         // 接收到数据后可以进行进一步处理
//         console.log("获取到用户数据：", data);
//     })
//     .catch(error => {
//         // 错误处理
//         console.error("获取用户数据出错：", error);
//     });



async function fetchData() {
    try {
        // 等待fetch Promise解决
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
        // 继续等待转换响应体为json完成
        const data = await response.json(); 
        console.log(data);
    } catch (error) {
        // 如果在上述任一await表达式抛出异常，此处将捕获
        console.error('Error:', error);
    }
}