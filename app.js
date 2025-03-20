import _ from 'lodash';

const arr = ['a','b','c'];

(async function() {
    console.log('it works!');
    const newArr=_.map(arr, (item, i)=>{return `${item}${i}`});
    console.log(JSON.stringify(newArr,null,2));
})()