import React,{Fragment, useState } from "react";



const Input = () => {

    const [company_id,setId] = useState("");
    const [company_name,setName] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {company_id,company_name};
            console.log(body);
            const res = await fetch("http://localhost:8000/addCompany",{
                method : "POST",
                headers :{"content-type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(res);

        } catch (error) {
            console.log(error.message);
        }

    };

    return (
        <Fragment>
            <h1 className="text-center mt-5">Enter the name of Company.</h1>
            <form onSubmit={onSubmitForm}>
                <div className="d-flex mt-5">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Company Id"
                    value={company_id} 
                    onChange ={ e => setId(e.target.value)}
                    ></input>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Company Name"
                    value={company_name}
                    onChange ={ e => setName(e.target.value)}
                    ></input>
                <button className="btn btn-success">Add</button>
                </div>
            </form>
        </Fragment>
    );
};

export default Input;
