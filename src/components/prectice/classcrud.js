import React, { Component } from 'react'
export class Classcrud extends Component {
    constructor() {
        super();
        this.state = {
            blkobj: { id: 0, name: '', gender: '', work: [], city: '', email: '' } || {},
            obj: { id: 0, name: '', gender: '', work: [], city: '', email: '' } || {},
            array: []
        }
    }
    setData = (e) => {
        if (e.target.name === 'work') {
            if (e.target.checked) {
                this.state.obj.push(e.target.value)
            } else {
                this.state.obj.work = this.state.obj.work.filter(x => x != e.target.value)
            }
        } else {
            this.state.obj[e.target.name] = e.target.value;
        }
        this.setState({ ...this.state.obj })
    }
    submit = () => {
        if (this.state.obj.id === 0) {
            const count = 0;
            let c = this.state(count + 1);
            this.setState(c);
            // count=c;
            this.state.obj.id = c;
            this.state.array.push(this.state.obj);
            // console.log(array);
        }
        else {
            let index = this.state.array.findIndex((x) => x.id === this.state.obj.id);
            this.state.array.splice(index, 1, this.state.obj);
        }
        this.setState([...this.state.array]);
        this.setState({ ...this.state.obj });
    }
    delete(i) {
        this.state.array.splice(i, 1);
        this.setState([...this.state.array])
    }
    edit(x) {
        this.setState({ ...x })
        this.setState([...this.state.array])
    }
    render() {
        return (
            <>
                <div id="form" className='container'>
                    <form action="" className='col'>
                        <div className="row">
                            <label>Employee ID:</label>
                            <input type="number" name="id" value={this.state.obj.id} onChange={this.setData} />
                        </div>
                        <div className="row">
                        <label>Employee Name:</label>
                        <input type="text" name="name" value={this.state.obj.name} onChange={this.setData} />
                        </div>
                        <div className="row">
                        <label> Gender:</label>
                        <input type="radio" name="gender" value={this.state.obj.gender?.includes("female")} onChange={this.setData} />female
                        <input type="radio" name="gender" value={this.state.obj.gender?.includes("male")} onChange={this.setData} />male
                        </div>
                        <div className="row">
                        <label> Work:</label>
                        <input type="checkbox" name="work" value={this.state.obj.work?.includes("php")} onChange={this.setData} />PHP
                        <input type="checkbox" name="work" value={this.state.obj.work?.includes("java")} onChange={this.setData} />JAVA
                        <input type="checkbox" name="work" value={this.state.obj.work?.includes("node")} onChange={this.setData} />NODE
                        <input type="checkbox" name="work" value={this.state.obj.work?.includes("react")} onChange={this.setData} />REACT JS
                        </div>
                        <div className="row">
                        <label> City:</label>
                        <input type="text" name="city" value={this.state.obj.city} onChange={this.setData} />
                        </div>
                        <div className="row">
                        <label> Email ID: </label>
                        <input type="email" name="email" value={this.state.obj.email} onChange={this.setData} />
                        </div>
                        <button type="button" onclick={this.submit}>Submit</button>
                    </form>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Employee Name</th>
                                <th>Gender</th>
                                <th>Work</th>
                                <th>City</th>
                                <th>Email-ID</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.array.map((x, i) => {
                                    // return
                                    <tr>
                                        {/* <td key={i}></td> */}
                                        <td>{i + 1}</td>
                                        <td>{x.name}</td>
                                        <td>{x.gender}</td>
                                        <td>{x.work}</td>
                                        <td>{x.city}</td>
                                        <td>{x.email}</td>
                                        <td>
                                            <button type="button" onClick={() => this.edit(x)}>Edit</button>
                                            <button type="button" onClick={() => this.delete(i)}>Delete</button>
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
}

export default Classcrud