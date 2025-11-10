import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import DoctorData from "../data/config/prescription.json"
import siteinfo from "../data/setting/siteDetels.json"
import logo from "../assets/img/logo.jpg"

// icons
import { FaPrescription } from "react-icons/fa6";
import { IoMdPrint } from "react-icons/io";





export default function Prescription() {
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        contentRef: componentRef,
    });



    return (
        <>




{/* form */}
            <div className="flex">
                <div className="grap">
                    <label htmlFor="">Canagory:</label>
                    <br />
                    <select name="" id="" className="select w100px">
                        <option value="" selected disabled>Select</option>
                        <option value="">Tap.</option>
                        <option value="">Cap.</option>
                    </select>
                </div>
                <div className="grap">
                    <label htmlFor="">Medechin Name:</label><br />
                    <input type="text" className="input w200px" placeholder="Type KeyWord" />
                </div>

                <div className="grap">
                    <label htmlFor="">Set Label</label>
                    <div className="shortDiv flex around center medel">
                        <input type="text" className="input w50px" placeholder="সকাল"/>+
                        <input type="text" className="input w50px" placeholder="দুপুর"/>+
                        <input type="text" className="input w50px" placeholder="রাত"/>
                    </div>
                </div>
            </div>






{/* form end */}











            <br />
            <div className="hash flex flex-end w100">
                <button className="printBtn" onClick={handlePrint}> <IoMdPrint className="iconx" /> Print</button>
            </div>
            <br />
            <div className="mainBox  flex center">
                <div>
                    <div className="contBox">
                        <div className="ex" ref={componentRef}>
                            {/* modiul setup 1 */}
                            <div className="modiul1">
                                {/* nodiul 1 */}
                                <div className="flex w100 center">
                                    <div className="flex around w95">
                                        <div className="w100">
                                            <h2>
                                                {DoctorData.doctor_name.bangla_name}
                                            </h2>
                                            <h3>
                                                {DoctorData.doctor_subname.bangla_subname}
                                            </h3>
                                            <p>
                                                {DoctorData.doctor_degree.bangla_degree}
                                                <br />
                                                বিডিএস রেজিঃ নং-{DoctorData.mbdc_no}
                                                <br />
                                                মোবাইল: {DoctorData.doctor_phone}
                                            </p>
                                        </div>
                                        <div className="w100 textCenter flex center end cloman">
                                            <div className="w100">
                                                <img className="pLogo" src={logo} alt="" />
                                            </div>
                                            <div className="banar flex center medel">
                                                {siteinfo.fullName}
                                            </div>
                                        </div>
                                        <div className="w100 textRight">
                                            <h2>
                                                {DoctorData.doctor_name.english_name}
                                            </h2>
                                            <h3>
                                                {DoctorData.doctor_subname.english_subname}
                                            </h3>
                                            <p>
                                                {DoctorData.doctor_degree.english_degree}
                                                <br />
                                                BMDC Reg. No.-{DoctorData.mbdc_no}
                                                <br />
                                                Mobile: {DoctorData.doctor_phone}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Modiul 2 */}
                                <div className="nameBox flex around medel w100">
                                    <span>Name:</span>
                                    <span>Sex:</span>
                                    <span>Age:</span>
                                    <span>Date:</span>
                                </div>
                            </div>
                            {/* modiul setup 2 */}
                            <div>
                                {/* modiul 3 */}
                                <div className="flex beet w100 modiul2">
                                    <div className="sideBar ">
                                        <blockquote>
                                            <div className="cloman">
                                                C/C
                                            </div>

                                            <div className="cloman">
                                                O/E
                                            </div>
                                            <div className="cloman">
                                                ADV:
                                            </div>
                                            <div className="cloman">
                                                X-Ray:
                                            </div>
                                        </blockquote>
                                    </div>
                                    <div className=" w100">
                                        <span>
                                            <FaPrescription className="iconr" />
                                            <blockquote>


                                                <div>
                                                    <div className="flex beet lineStyle">
                                                        <div className="textCenter">
                                                            <span className="captext"> Tab. Exampule Tablet 500gm</span>
                                                            <br />
                                                            ০ + ১ + ০ {" "} খাবার পর
                                                        </div>
                                                        <div>
                                                            ৭ দিন
                                                        </div>
                                                    </div>
                                                </div>






                                            </blockquote>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* moduil setup 3 */}
                            <div className="modiul3">
                                {/* modiul 4 */}
                                <div className="segestBox flex beet w100">
                                    <div className="t16">
                                        <ul>
                                            {DoctorData.detels.idaya.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>

                                        <p className="mark">
                                            চেম্নার :
                                        </p>
                                        <p>
                                            {siteinfo.fullName}
                                        </p>
                                        <p className="mark">
                                            রোগী দেখার দেখার সময়:
                                        </p>
                                        <p className="t16">
                                            {DoctorData.chamber_time}
                                        </p>

                                    </div>
                                </div>

                                {/* modiul 5 */}
                                <div className="bottomSystem t16 w100" >
                                    {DoctorData.bottomtext}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
