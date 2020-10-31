// JSON

// 1. Object to JSON
    // let json = JSON.stringify(true)
    // let json = JSON.stringify(['apple', 'banana']); 
    // console.log(json);

    const rabbit = {
        name : 'tori',
        color : 'white',
        size : null,
        birthDate : new Date(),
        jump : () => {
            console.log(`${name} can jump!`);
        },
    };

    json = JSON.stringify(rabbit,['name','color','size']);// 원하는 property만 골라서 보여줄 수 있다.
    // console.log(json);
    json = JSON.stringify(rabbit,(key,value)=> {
        //console.log(`key: ${key}, value: ${value}`);
        return key === 'name' ? 'dongkwan' : value;
    })
    console.log(json);
    // 객체안에 함수는 json에 포함되지 않는다


// // // 2. JSON to Object
let obj = JSON.parse(json);
// console.log(obj)
// console.log(obj.birthDate.getDate()) // 여기서는 getDate가 안된다. string형태이니까

//날짜 파싱 첫번째 방법
// console.log(typeof(obj.birthDate))
// obj.birthDate = new Date(obj.birthDate);
// console.log(typeof(obj.birthDate))
// console.log(obj.birthDate.getDate());

//날짜 파싱 두번째 방법
obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key ==='birthDate' ? new Date(value) : value;
});
console.log(obj);
console.log(obj.birthDate);
console.log(obj.birthDate.getDate())
// obj.jump(); 없다....
// console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate);


