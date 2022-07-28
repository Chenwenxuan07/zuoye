let tbody: HTMLTableSectionElement = document.getElementsByTagName('tbody')[0]
let span: HTMLSpanElement = document.getElementsByTagName('span')[0]
let span1: HTMLSpanElement = document.getElementsByTagName('span')[1]
interface guize {
    id: number,
    goods_name: string,
    price: number
}
let arrays: Array<guize> = [
    {
        id: 1,
        goods_name: "vivo 手机 p30",
        price: 1242
    },
    {
        id: 2,
        goods_name: "苹果手机 iphone plus",
        price: 45000
    },
    {
        id: 3,
        goods_name: "宝马 X7 4驱",
        price: 750000
    },
    {
        id: 4,
        goods_name: "宝马 5系 2驱",
        price: 450000
    },
    {
        id: 5,
        goods_name: "锤子手机 200G",
        price: 2000
    },
    {
        id: 6,
        goods_name: "华为手机 P40",
        price: 5000
    },
    {
        id: 7,
        goods_name: "红米 手机",
        price: 1200
    },
    {
        id: 8,
        goods_name: "海尔电冰箱 3匹",
        price: 980
    },
    {
        id: 9,
        goods_name: "苹果笔记本电脑 i9",
        price: 20000
    },
    {
        id: 10,
        goods_name: "精品手机 华为 200G",
        price: 3200
    }
]
let array: Array<guize> = arrays
let flagid: boolean = true
let flagjg: boolean = true

// 渲染
function xr(arr: Array<guize>) {
    tbody.innerHTML = ''
    arr.forEach(ele => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
                <td>
                ${ele.id}
                </td>
                <td>
                ${ele.goods_name}
                </td>
                <td>
                ${ele.price}
                </td>
        `
        tbody.appendChild(tr)
    });
    span.innerHTML = String(array.length)
    let numipt: HTMLInputElement = document.getElementsByTagName('input')[1]
    let ym: number = Number(Math.ceil(array.length / Number(numipt.value)))
    span1.innerHTML = ''
    for (let i = 0; i < ym; i++) {
        let span = document.createElement('span')
        span.innerHTML = `
            <button onclick="go(this)">
            ${String(i + 1)}
            </button>
            `
        span1.appendChild(span)
    }
}
xr(array)

// ID排序
function pxid(ele: HTMLButtonElement) {
    if (flagid) {
        array.sort(function (a, b) {
            return b.id - a.id
        })
        ele.innerHTML = '正序'
        flagid = false
    } else {
        array.sort(function (a, b) {
            return a.id - b.id
        })
        ele.innerHTML = '倒序'
        flagid = true
    }
    xr(array)
}

// 价格排序
function pxjg(ele: HTMLButtonElement) {
    if (flagjg) {
        array.sort(function (a, b) {
            return b.price - a.price
        })
        ele.innerHTML = '正序'
        flagjg = false
    } else {
        array.sort(function (a, b) {
            return a.price - b.price
        })
        ele.innerHTML = '倒序'
        flagjg = true
    }
    xr(array)
}

// 搜索
function sou(ele: HTMLInputElement) {
    let val = ele.value
    var arr = array.filter(ele => {
        return ele.goods_name.includes(val)
    })
    xr(arr)
}

// 分页按钮的渲染
function anxr(ele: HTMLInputElement) {
    if (ele.value != '') {
        let ym: number = Number(Math.ceil(array.length / Number(ele.value)))
        span1.innerHTML = ''
        for (let i = 0; i < ym; i++) {
            let span = document.createElement('span')
            span.innerHTML = `
            <button onclick="go(this)">
            ${String(i + 1)}
            </button>
            `
            span1.appendChild(span)
        }
        let numipt: HTMLInputElement = document.getElementsByTagName('input')[1]
        let btn: HTMLButtonElement = document.getElementsByTagName('button')[2]
        let ksindex = (Number(btn.innerHTML.trim()) - 1) * Number(numipt.value)
        let jsindex = Number(btn.innerHTML.trim()) * Number(numipt.value)
        let arr = arrays.slice(ksindex, jsindex)
        xr(arr)
    }
    if (Number(ele.value) > 10) {
        ele.value = '10'
    }
    if (Number(ele.value) < 1) {
        ele.value = '1'
    }
}
// 点击分页按钮
function go(ele: HTMLButtonElement) {
    let numipt: HTMLInputElement = document.getElementsByTagName('input')[1]
    let ksindex = (Number(ele.innerHTML.trim()) - 1) * Number(numipt.value)
    let jsindex = Number(ele.innerHTML.trim()) * Number(numipt.value)
    let arr = arrays.slice(ksindex, jsindex)
    xr(arr)
}