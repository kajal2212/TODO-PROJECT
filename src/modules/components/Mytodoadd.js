import React, { useState } from 'react';

function Mytodoadd(props) {
    const [name, setname] = useState('');
    const [desg, setdesg] = useState('');

    const add = () => {
        props.adddetail(`${name},${desg}`);
        setname("")
        setdesg("")
        console.log(name);
        console.log(desg);

    }


    return (

        <div className='todo-wrapper'>
            <div className='add-inputs'>
                <div className='input-items'>
                    <label>Name of joinee</label>
                    <input type="text" value={name} onChange={(a) => setname(a.target.value)} placeholder='Yours full name'/>
                </div>
                <div className='input-items'>
                    <label>Designation</label>
                    <input type="text" value={desg} onChange={(a) => setdesg(a.target.value)} placeholder='like Mern Developer'/>
                </div>

            </div>
            <div className='input-items'>
                <button type='button' className='Btn' onClick={add}>ADD</button>
            </div>
            <hr></hr>
        </div>




    )
}

export default Mytodoadd;
