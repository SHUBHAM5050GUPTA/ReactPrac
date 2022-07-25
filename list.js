import React,{Fragment, useState,useEffect } from "react";

const ListCompany = () =>{

    const [company_details,setCompnayDetails] = useState([]);

    const getCompany = async()=>{

        const res = await fetch('http://localhost:8000/getCompany',{
            method :'GET'
        });
        const jsonData = await res.json();
        setCompnayDetails(jsonData);
        //console.log(jsonData);

    };

    useEffect(()=>{
        getCompany();
    },[]);

    console.log(company_details);
    return (
        <Fragment>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Company Id</th>
                <th scope="col">Company Name</th>
                </tr>
            </thead>
            <tbody>
                {/* {<tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>} */}
                {company_details.map(company =>(
                    <tr>
                        <th scope="col">{company.company_id}</th>
                        <th scope="col">{company.company_name} </th>
                    </tr>
                ))}
            </tbody>
            </table>
        </Fragment>
    );
};

export default  ListCompany ;
