import React from 'react'

function Array2() {
    let dailyActivities = ['sleep', 'work', 'exercise']
    let newRoutine = ['eat'];

    // 1.sorting elements in the alphabetical order
    let join=dailyActivities.concat(newRoutine);
    console.log(join,"--->concat");
    let sort=join.sort();
    console.log(sort,'--->sorting');
    // 2.finding the index position of string
    let index=join.indexOf('string');
    console.log(index,"-->index position");   
    // 3.slicing the array elements
    let slicing=join.slice(1,3)
    console.log(slicing,"--->slicing the array elements");
    // 4.concatenating two arrays
    let concat=dailyActivities.concat(newRoutine);
    console.log(concat,"--->concat");
    // 5.this gives the total number of elements in an array
    let total=join.length;
    console.log(total,"--> total number of elements");
    // 6.remove the first element
    let remove_first=join.shift()
    console.log(remove_first,"-->remove_first");
    // 7.remove the last element
    let remove_last=join.pop()
    console.log(remove_last,"-->remove_last");
    // 8.this will add the new element 'presize' at the 3 index
    join.splice(3, 0, "presize");
    // 9. this will add the new element 'exercise' at the 2 index
    join.splice(2, 0, "exercise");
    // 10.add an element at the start
    join.unshift('Driving')
    console.log(join,"-->add_start");
    // 11.add an element at the end
    join.push('Dressing')
    console.log(join,"-->add_end");
    // 12. get first element and  second element
     let a=join[0]
     console.log(a,'--->a');
     let b=join[1]
     console.log(b,'--->b');
    // 13. write array with mixed data types
    let arr=['reshma',100,null,0,true,"500",false,1,""]
    // 14. write  empty array
    let empty=[];
    return (
        <div>
            <h2>Array:</h2>
        </div>

    )
}

export default Array2