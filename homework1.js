const members = [
    {
        name : "이재훈",
        sopt : 'YB',
        age : 26,
        school : "단국대학교",
        attitude : "처음엔 낯가림 but 적응력 갑",

    },
    {
        name : "천주윤",
        sopt : 'OB',
        age : 23,
        school : "서울여자대학교",
        attitude : "추우면 화나는편",
    },
    {
        name : "엄서영",
        sopt : 'OB',
        age : 26,
        school : "이화여자대학교",
        attitude : "더우면 움직이지 못하는편..",

    }
];

// 기본 for
for (let i =0; i< members.length; i++) {
    const member = members[i];
    console.log(`
    이름 : ${member.name}\n
    솝트활동 : ${member.sopt}\n
    나이 : ${member.age}\n
    학교 : ${member.school}\n
    성격 : ${member.attitude}`)
    console.log("-----------------------");
}
// for of
for (let it of members) {
    console.log(`
    이름 : ${it.name}\n
    솝트활동 : ${it.sopt}\n
    나이 : ${it.age}\n
    학교 : ${it.school}\n
    성격 : ${it.attitude}`)
    console.log("-----------------------");
}
 

// for in
for (let it in members) {
    const member = members[it];
        console.log(`
    이름 : ${member.name}\n
    솝트활동 : ${member.sopt}\n
    나이 : ${member.age}\n
    학교 : ${member.school}\n
    성격 : ${member.attitude}`)
    console.log("-----------------------");
}

// forEach
const memberInfo = members.forEach( it => {
    console.log(`
    이름 : ${it.name}\n
    솝트활동 : ${it.sopt}\n
    나이 : ${it.age}\n
    학교 : ${it.school}\n
    성격 : ${it.attitude}`)
    console.log("-----------------------");
    
});
