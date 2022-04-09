import React, { useState } from "react";

const Contact = () => {


    const [data, setData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const InputEvent = (event) => {

        const { name, value } = event.target;


        setData((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        })

    };

    const onSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullName}. My email is ${data.email}. This is my phone number ${data.phoneNumber}. I want to say ${data.message}`)
    };



    return (
        <>
            <div className="container-fluid mb-auto contact">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <h1 className="text-center my-5">
                            Contact me
                        </h1>



                        <div className="row">
                            <div className="col-md-6 col-10 mx-auto">
                                <form onSubmit={onSubmit}>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="nameInput" name="fullName" onChange={InputEvent} value={data.fullName} placeholder="Enter your full name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" id="emailInput" name="email" onChange={InputEvent} value={data.email} placeholder="tariqul@gmail.com" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="number" className="form-control" id="phoneNumberInput" name="phoneNumber" onChange={InputEvent} value={data.phoneNumber} placeholder="Mobile Number: +8801XXXXXXXXX" />
                                    </div>
                                    <div className="form-text">
                                        <textarea className="form-control " placeholder="Leave a message" name="message" onChange={InputEvent} value={data.message} id="floatingTextarea"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-outline-success my-3 text-center">Send</button>
                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;