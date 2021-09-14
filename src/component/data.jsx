import React from "react";
import './data.css';

function Data() {
    return (
        <div>
            <div className="data-heading">
                
                <center className="data-heading-text" >Our Course Benefits</center>
                
            </div>
        <div className="data-container">
            
            <div className="data-img1">
                <center>                <img src="data:image/png;base64,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" alt="dataimg1" /></center>
                <p className="data-subheadings">Expert Teachers</p>
                <p className="data-para">Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback.
                    We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.</p>


            </div>

            <div className="data-img1">
                <center><img src="https://static.thenounproject.com/png/3633950-200.png" alt="dataimg2" /></center>
                <p className="data-subheadings">
                    Online Community</p>
                <p className="data-para">Feel like home, with a "family of invisible friends".</p>
            </div>
            <div className="data-img1">
                <center><img src="https://static.thenounproject.com/png/1497700-200.png" alt="dataimg3" /></center>
                <p className="data-subheadings" >Flexible Curriculum</p>
                <p className="data-para">Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch.</p>
            </div>
        </div>
        </div>
    )
}
export default Data;