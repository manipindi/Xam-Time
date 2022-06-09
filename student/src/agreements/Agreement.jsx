import React, { Fragment } from "react";
import { Link } from "react-router-dom";


let Agreement = (e) =>{
    const agreeTerms = () => {
        const checked = e.target.checked;
        if (e.target.checked) {
            console.log('checked');
        } else {
            console.log('not');
        }
    }
    return(
        <Fragment>
                <nav className="navbar navbar-expand-md p-4 border-bottom  bg-light shadow-sm">
                    <h3>Terms & Conditions</h3>
                </nav>

                <section className="m-5">
                    <h5>
                    (A) Security Rules
                    </h5>
                    <p>
Visitors are prohibited from violating or attempting to violate the security of the Web site, including, without limitation, (1) accessing data not intended for such user or logging into a server or account which the user is not authorised to access, (2) attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorisation, (3) attempting to interfere with service to any user, host or network, including, without limitation, via means of submitting a virus or “Trojan horse” to the Website, overloading, “flooding”, “mailbombing” or “crashing”, or (4) sending unsolicited electronic mail, including promotions and/or advertising of products or services. Violations of system or network security may result in civil or criminal liability. The business and/or it’s associate entities will have the right to investigate occurrences that they suspect as involving such violations and will have the right to involve and cooperate with, law enforcement authorities in prosecuting users who are involved in such violations.
                    </p>
                    <h5 className="mt-4">
                        (B) Terms & Conditions
                    </h5>
                    <p>
                    Although most changes are likely to be minor, conduct exam may change its Terms & Condition from time to time, and in conduct exam’s sole discretion. Conduct exam encourages visitors to frequently check this page for any changes to its Terms & Condition. Your continued use of these services after any change in this Terms & Condition will constitute your acceptance of such change.
                    </p>
                    
                    <h5 className="mt-4">
                    (C) General Rules
                    </h5>
                    <p>
Visitors may not use the Web Site in order to transmit, distribute, store or destroy material (a) that could constitute or encourage conduct that would be considered a criminal offence or violate any applicable law or regulation, (b) in a manner that will infringe the copyright, trademark, trade secret or other intellectual property rights of others or violate the privacy or publicity of other personal rights of others, or (c) that is libellous, defamatory, pornographic, profane, obscene, threatening, abusive or hateful.</p>
                </section>

                <nav className="shadow-lg border-top fixed-bottom navbar navbar-expand-md p-5 bg-light">
                <div>
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" onClick={(e)=>{agreeTerms(e)}}/>
                    <span className="lead m-2 fw-bold">I am accepting the terms and conditions</span>
                </div>
                <button className="btn btn-secondary btn-lg margin_left"><Link className=" text-black text-decoration-none" to={'/test'}>Next <span className="fa fa-arrow-right"></span></Link></button>
                </nav>

        </Fragment>
    )
};

export default Agreement;