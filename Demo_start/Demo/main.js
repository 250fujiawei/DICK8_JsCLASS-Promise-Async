import './style.scss'
import axios from 'axios'



const getData = async (url) => {
    const response = await fetch(url || 'https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    return data



}

getData()

const meau = async (url) => {
    const iwant = await fetch(url || 'https://jsonplaceholder.typicode.com/users')

    const data = await iwant.json()
    console.log(data);
    return data

}

meau()






// yarn add axios
const getDataAxious = async (url) => {
    const response = await axios.get(url || 'https://jsonplaceholder.typicode.com/users')
    console.log(response.data);
    return response.data
}
getDataAxious()












function printString(string) {
    return new Promise((resolve, reject) => {
        const ingredientsAvailable = true;

        if (ingredientsAvailable) {
            setTimeout(() => {
                console.log(string);
                resolve();  // 注意：解析 Promise 以让链式调用继续
            }, Math.floor(Math.random() * 100) + 1);
        } else {
            reject('Ingredients not available');
        }
    });
}

// 使用
printString("A")
    .then(() => printString("B"))  // 这里的箭头函数返回下一个 printString("B") 的调用
    .then(() => printString("C"))  // 链式调用持续到打印 "C"
    .catch(error => console.error(error));  // 如果任何一个 Promise 被拒绝，捕获错误
