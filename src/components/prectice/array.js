import React from 'react'

function Array() {
    const workDuration = [
        {
            'name': 'Write tutorials',
            'duration': 120
        },
        {
            'name': 'Running',
            'duration': 60
        },
        {
            'name': 'Process',
            'duration': 240
        }
    ];
    console.table(workDuration);
    //1)add another element to the end of the workDuration list
    // let obj={'name':'tine','duration':100}
    workDuration.push({ 'name': 'Running', 'duration': 100 })
    console.log(workDuration, "------>end of obj");

    //2)add another element to the beginning of the workDuration list
    workDuration.unshift({ 'name': 'Write', 'duration': 230 })
    console.log(workDuration, "------>beginning of obj");

    //3)length of the workDuration list
    console.log(workDuration.length, "------>workDuration length");

    //4)remove the last element 
    workDuration.pop()
    console.log(workDuration.length, "------>After Remove workDuration length");

    //5)print value
    for (let i = 0; i < workDuration.length; i++) {
        console.log(workDuration.indexOf(workDuration[i]), "-------->indexOf()");
        console.log(workDuration[i], "-------->(object)")
        let value = Object.values(workDuration[i])
        console.log(value, "----->values");
        // Object.values(workDuration[i]).forEach((i)=>{
        //  console.log(workDuration[i]),"---->values";
        // })
    }

    //6)array of object into array of sring with help map
    // Object.keys(workDuration).map(key=>{
    // return key['name'];
    // })    
    const names = workDuration.map((item) => {
        return item['name'];
    });
    console.log(names, "------->[names](6)");

    //7)sort the workDuration by duration and print
    const duration = workDuration.map((item) => {
        return item['duration'];
    });
    const sort = duration.sort((a, b) => {    //only num
        return a - b
    });
    console.log(sort, "------->[duration sort()](7)");

    //8)duration less than 100 and greater than 200

    const less_than = workDuration.filter(n => n.duration < 100)
    console.log(less_than, '------>less than 100');

    const greater_than = workDuration.filter(n => n.duration > 200)
    console.log(greater_than, '------>greater than 200');
    //9) duration in 240
    const equal = workDuration.find(n => n.duration == 240)
    console.log(equal, '------>equal == 240');

    //10)Print the index of whose work element name is Running.

    // const index = workDuration.findIndex(object  =>  {return object.duration === 'Runnning';})
    const index = workDuration.map(obj  => obj.duration).indexOf('Runnning');
    console.log(workDuration,"-->");
    console.log(index, '------>Running');
return (
    <div>
        <h2>Array:</h2>
        <table border="1">
            {
                <tr>
                    <td>Name</td>
                    <td>Duration</td>
                </tr>
            }
            {
                workDuration.map((data) =>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.duration}</td>
                    </tr>
                )
            }
        </table>
    </div>

)
        }

export default Array