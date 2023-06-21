import React, { useState } from 'react'

function Classcrud1() {
    const [count, setcount] = useState(0)
    let blackObj = { id: 0, fname: '', email: '', hobbie: [], gender: '' }
    const [object, setobject] = useState(blackObj)
    const [array, setarray] = useState([])

    const getValue = (e) => {
        if (e.target.name == "hobbie") {
            if (e.target.checked) {
                object.hobbie.push(e.target.value);
            }
            else {
                object.hobbie = object.hobbie.filter(x => x != e.target.value)
            }
        }
        else {
            object[e.target.name] = e.target.value;
            // setobject({...object, [e.target.name] : e.target.value })
        }
        setobject({ ...object })
        // console.log(hobbie);
    }

    // function setItem() {
    //     array.push(object);
    //     array.map((x, i) => {
    //         // console.log(object);
    //         setobject({ ...object });
    //     })
    //     // console.log(array);
    //     document.getElementById('frm').reset();
    // }

    const saveUser = () => {
        console.log(object);
        if (object.id == 0) {
            let c1 = count + 1;
            setcount(c1);
            object.id = c1;
            array.push(object);
        }
        else {
            let index = array.findIndex((x) => x.id == object.id);
            array.splice(index, 1, object)
        }
        setarray([...array]);
        setobject({ ...blackObj })
    }
    const deleteUser = (i) => {
        array.splice(i, 1)
        setarray([...array])
    }
    const editUser = (x) => {
        setobject({ ...x })
    }
    
    // window.location.reload
    return (
        <>
            <div className='container'>
                <div>
                    <form action="" id='frm' className="p-5 shadow container">
                        <div className='row'>
                            <label htmlFor="" className='col-4'>First Name</label>
                            <input type="text" className='col-8' value={object.fname} name="fname" onChange={getValue} />
                        </div>
                        <div className='row'>
                            <label htmlFor="" className='col-4'>Last Name</label>
                            <input type="text" className='col-8' value={object.lname} name="lname" onChange={getValue} />
                        </div>
                        <div className='row'>
                            <label htmlFor="" className='col-4'>Gender:</label>
                            <div className='col-8'>
                                <input type="radio" name="gender" value='male' checked={object.gender?.includes('male')} onChange={getValue} />Male
                                <input type="radio" name="gender" value='female' checked={object.gender?.includes('female')} onChange={getValue} />Female
                            </div>
                        </div>
                        <div className='row'>
                            <label htmlFor="" className='col-4'>Hobbies:</label>
                            <div className='col-8'>
                                <input type="checkbox" name="hobbie" value='Read' checked={object.hobbie?.includes('Reading')} onChange={getValue} />Reading
                                <input type="checkbox" name="hobbie" value='write' checked={object.hobbie?.includes('Writeing')} onChange={getValue} />Writeing
                                <input type="checkbox" name="hobbie" value='movie' checked={object.hobbie?.includes('Movie')} onChange={getValue} />Movie
                                <input type="checkbox" name="hobbie" value='song' checked={object.hobbie?.includes('Song')} onChange={getValue} />Song
                            </div>
                        </div>
                        <button type='button' className='btn btn-info' onChange={saveUser}>Submit</button>
                    </form>
                </div>
            </div>
            <div>
                <table className='table table-success table-striped'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Hobbies</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            array. map((x, i) => {
                                return <tr key={i}>
                                    <td>{Object.fname}</td>
                                    <td>{Object.lname}</td>
                                    <td>{Object.gender}</td>
                                    <td>{Object.hobbie}</td>    
                                    <td>
                                        <button className='btn btn--warning' onClick={() => editUser(x)}></button>
                                        <button className='btn btn--danger ms-2' onClick={() => deleteUser(x)}></button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )

}
export default Classcrud1