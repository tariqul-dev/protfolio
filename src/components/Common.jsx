import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <>
            <section id="header" className="mb-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto ">
                            <div className="row">

                                <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-block align-self-center">
                                    <h1>{props.title} <strong className="brand-name">TariqulTech </strong> </h1>
                                    <h2 className="my-3"> {props.subTitle} </h2>

                                    <div className="mt-3">
                                        <NavLink className="btn btn-outline-success px-2" to={props.navigateTo}> {props.btnName} </NavLink>
                                    </div>
                                </div>
                                <div className="col-md-6 pt-5 order-2 order-lg-2 d-flex align-self-center header-img">
                                    {/* <h1>Img</h1> */}
                                    <img src={props.imgSrc} alt="banner" className="img-fluid" />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Common;