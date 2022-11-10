import React from "react";

const GeneralTab = () => {
    return(
        <div className="row py-1">
            <div className="col-lg-3 col-md-3 col-sm-6 mb-2">
                <p className="fs-7 fw-500">Tenant ID</p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-6 col-sm-6 mb-2">
                <p className="fs-7 d-flex"><span className="fs-7 fw-500 mr-3">:</span>TEN00025</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-2">
                <p className="fs-7 fw-500">Address</p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-6 mb-2">
                <p className="fs-7 d-flex"><span className="fs-7 fw-500 mr-3">:</span>Dummy Address</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-2">
                <p className="fs-7 fw-500">Date of birth</p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-6 mb-2">
                <p className="fs-7 d-flex"><span className="fs-7 fw-500 mr-3">:</span>06-06-2022</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-2">
                <p className="fs-7 fw-500">Social Security Number</p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-6 mb-2">
                <p className="fs-7 d-flex"><span className="fs-7 fw-500 mr-3">:</span>5623527624284</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-2">
                <p className="fs-7 fw-500">Company Registration Number</p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-6 mb-2">
                <p className="fs-7 d-flex"><span className="fs-7 fw-500 mr-3">:</span>46797897878</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-2">
                <p className="fs-7 fw-500">Authentication Method</p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-6 mb-2">
                <p className="fs-7 d-flex"><span className="fs-7 fw-500 mr-3">:</span>Norwegian BankID</p>
            </div>
        </div>
    )
}

export default GeneralTab