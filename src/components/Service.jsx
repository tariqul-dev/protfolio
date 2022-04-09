import React from "react";
import Card from "./Card";
import Data from '../data/Data';

const Service = () => {
    return (
        <>
            <div className="text-center my-5">
                <h1>Our Services</h1>
            </div>


            <div className="container-fluid mb-5 service">

                <div className="row">

                    <div className="col-10 mx-auto">

                        <div className="row gy-4">
                            {
                                Data.map((val, index) => {
                                    return <Card
                                        key={index}
                                        img={val.img}
                                        title={val.title}
                                        subTitle={val.subtitle}
                                    />
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Service;