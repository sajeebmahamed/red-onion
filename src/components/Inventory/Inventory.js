import React from 'react';
const Inventory = () => {
    const handleProductD = () => {
        // console.log("Clicked Hyse", data);
        // fetch('http://localhost:3000/addProducts', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body:JSON.stringify(data)
        // })
        // .then(res => res.json())
        // .then(json => {
        //     console.log("post successfull",json);
        // })
    }
    return (
        <div>
            <button onClick = {handleProductD}>Add Products</button>
        </div>
    );
};

export default Inventory;