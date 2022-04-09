import React from "react";
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common 
                title = "About of "
                subTitle = "Your dream my code will make your dream in life"
                btnName = "Contact now"
                imgSrc = "https://source.unsplash.com/550x450?cartoon+computer+desk"
                navigateTo = "/contact"
            />
        </>
    );
};

export default About;