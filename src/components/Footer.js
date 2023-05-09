import React from 'react'

const Footer = () => {
    return (
        <>
            {/* Remove the container if you want to extend the Footer to full width. */}
            <div className="container-fluid mt-5">
                {/* Footer */}
                <footer
                    className="text-center text-lg-start text-white"
                    style={{ backgroundColor: "black" }}
                >
                    {/* Grid container */}
                    <div className="container">
                        {/* Section: Links */}
                        <section className="">
                            {/*Grid row*/}
                            <div className="row">
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Company name
                                    </h6>
                                    <p>
                                        ProcodeBox Design and Development
                                    </p>
                                </div>
                                {/* Grid column */}
                                <hr className="w-100 clearfix d-md-none" />
                                {/* Grid column */}
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Quick Links</h6>
                                    <p>
                                        <a className="text-white">Contact</a>
                                    </p>
                                    <p>
                                        <a className="text-white">Support</a>
                                    </p>
                                    <p>
                                        <a className="text-white">Brand Operations</a>
                                    </p>
                                    <p>
                                        <a className="text-white">Hire Developers </a>
                                    </p>
                                </div>
                                {/* Grid column */}
                                <hr className="w-100 clearfix d-md-none" />
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a className="text-white">Blogs</a>
                                    </p>
                                    <p>
                                        <a className="text-white">Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a className="text-white">Tools</a>
                                    </p>
                                    <p>
                                        <a className="text-white">Help</a>
                                    </p>
                                </div>
                                {/* Grid column */}
                                <hr className="w-100 clearfix d-md-none" />
                                {/* Grid column */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                    <p>
                                        <i className="fas fa-home mr-3" /> New Delhi , India 110096
                                    </p>
                                    <p>
                                        <i className="fas fa-envelope mr-3" /> info.techhower@gmail.com
                                    </p>
                                    <p>
                                        <i className="fas fa-phone mr-3" /> + 9876543210
                                    </p>

                                </div>
                                {/* Grid column */}
                            </div>
                            {/*Grid row*/}
                        </section>
                        {/* Section: Links */}
                        <hr className="my-3" />
                        {/* Section: Copyright */}
                        <section className="p-3 pt-0">
                            <div className="row d-flex align-items-center">
                                {/* Grid column */}
                                <div className="col-md-7 col-lg-8 text-center text-md-start">
                                    {/* Copyright */}
                                    <div className="p-3">
                                        © 2023 Copyright: &nbsp;
                                        <a className="text-white" href="https://procodebox.com/">
                                            Procodebox.com
                                        </a>
                                    </div>
                                    {/* Copyright */}
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                    {/* Facebook */}
                                    <a
                                        className="btn btn-outline-light btn-floating m-1"
                                        role="button"
                                    >
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    {/* Twitter */}
                                    <a
                                        className="btn btn-outline-light btn-floating m-1"
                                        role="button"
                                    >
                                        <i className="fab fa-twitter" />
                                    </a>
                                    {/* Google */}
                                    <a
                                        className="btn btn-outline-light btn-floating m-1"
                                        role="button"
                                    >
                                        <i className="fab fa-google" />
                                    </a>
                                    {/* Instagram */}
                                    <a
                                        className="btn btn-outline-light btn-floating m-1"
                                        role="button"
                                    >
                                        <i className="fab fa-instagram" />
                                    </a>
                                </div>
                                {/* Grid column */}
                            </div>
                        </section>
                        {/* Section: Copyright */}
                    </div>
                    {/* Grid container */}
                </footer>
                {/* Footer */}
            </div>
            {/* End of .container */}
        </>

    )
}

export default Footer