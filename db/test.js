const a = [
    {
        id: 1,
        name: "dsada",
        value: [{
            x:1,
            y:1
        },
        {
            x:2,
            y:2
        },
        {
            x3,
            y:3
        }]
    }
];
const b = [5,6,7];
//b.push(a[i].value[j].x)


for (var prop in a) {
    console.log(prop.id+" "+prop.name+" "+prop.value);
}