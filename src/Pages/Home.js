import React from 'react'
import './style.css'

const Home = () => {
    return (
        <main className="flex-shrink-0">

            {/* Header*/}
            <header className="bg-dark py-5">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">
                                    ProcodeBox Your Vision my creation
                                </h1>
                                <p className="lead fw-normal text-white-50 mb-4">
                                    we are offer best qulatiy softwware and tools in all over world and different different country .
                                </p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a
                                        className="btn btn-primary btn-lg px-4 me-sm-3"
                                        href="#features"
                                    >
                                        Get Started
                                    </a>
                                    <a className="btn btn-outline-light btn-lg px-4" href="#!">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                            <img
                                className="img-fluid rounded-3 my-5"
                                src="https://blogger.googleusercontent.com/img/a/AVvXsEhNTBJRJn6-KCNzFnu7uCvKrv8zF_ILfSy8Qp-QssJeySIE-dnNkbOA9UrkKUeTVcNGU9aDod3AYebd_Fd1QX-QsJNlStIS5VzpBV4-PW0-MKIKQ6KSgDxh7KL6KyLVAFonHqmoLoRVS6VQSHD5Tc-_BlYCsHh-yoXLef9uXb_15QGwL7gpJIhXrXpI"
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
            </header>
            {/* Features section*/}
            <div className="py-5 service-24">
                <div className="container">
                    <h2 class="our-service text-center" style={{ fontWeight: 'bold' }}>Our Services </h2>

                    {/* Row */}
                    <div className="row wrap-service-24">
                        {/* Column */}
                        <div className="col-lg-3 col-md-6">
                            <div className="card rounded card-shadow border-0 mb-4">
                                <a
                                    href="javascript:void(0)"
                                    className="card-hover py-4 text-center d-block rounded"
                                >
                                    <span className="bg-success-grediant">R</span>
                                    <h6 className="ser-title">Retargeting Market</h6>
                                </a>
                            </div>
                        </div>
                        {/* Column */}
                        {/* Column */}
                        <div className="col-lg-3 col-md-6">
                            <div className="card card-shadow border-0 mb-4">
                                <a
                                    href="javascript:void(0)"
                                    className="card-hover py-4 text-center d-block rounded"
                                >
                                    <span className="bg-success-grediant">D</span>
                                    <h6 className="ser-title">Digital Marketing</h6>
                                </a>
                            </div>
                        </div>
                        {/* Column */}
                        {/* Column */}
                        <div className="col-lg-3 col-md-6">
                            <div className="card card-shadow border-0 mb-4">
                                <a
                                    href="javascript:void(0)"
                                    className="card-hover py-4 text-center d-block rounded"
                                >
                                    <span className="bg-success-grediant">S</span>
                                    <h6 className="ser-title">SEO Techniques</h6>
                                </a>
                            </div>
                        </div>
                        {/* Column */}
                        {/* Column */}
                        <div className="col-lg-3 col-md-6">
                            <div className="card card-shadow border-0 mb-4">
                                <a
                                    href="javascript:void(0)"
                                    className="card-hover py-4 text-center d-block rounded"
                                >
                                    <span className="bg-success-grediant">C</span>
                                    <h6 className="ser-title">Client Management</h6>
                                </a>
                            </div>
                        </div>
                        {/* Column */}
                        {/* Column */}
                        <div className="col-lg-3 col-md-6">
                            <div className="card card-shadow border-0 mb-4">
                                <a
                                    href="javascript:void(0)"
                                    className="card-hover py-4 text-center d-block rounded"
                                >
                                    <span className="bg-success-grediant">E</span>
                                    <h6 className="ser-title">Email Campaign</h6>
                                </a>
                            </div>
                        </div>
                        {/* Column */}
                        {/* Column */}
                        <div className="col-lg-3 col-md-6">
                            <div className="card card-shadow border-0 mb-4">
                                <a
                                    href="javascript:void(0)"
                                    className="card-hover py-4 text-center d-block rounded"
                                >
                                    <span className="bg-success-grediant">W</span>
                                    <h6 className="ser-title">Website Strategy</h6>
                                </a>
                            </div>
                        </div>
                        {/* Column */}
                        {/* Column */}
                        <div className="col-lg-3 col-md-6">
                            <div className="card card-shadow border-0 mb-4">
                                <a
                                    href="javascript:void(0)"
                                    className="card-hover py-4 text-center d-block rounded"
                                >
                                    <span className="bg-success-grediant">E</span>
                                    <h6 className="ser-title">eCommerce Shop</h6>
                                </a>
                            </div>
                        </div>
                        {/* Column */}
                        {/* Column */}
                        <div className="col-lg-3 col-md-6">
                            <div className="card card-shadow border-0 mb-4">
                                <a
                                    href="javascript:void(0)"
                                    className="card-hover py-4 text-center d-block rounded"
                                >
                                    <span className="bg-success-grediant">C</span>
                                    <h6 className="ser-title">Cloud Hosting</h6>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-12 mt-3 text-center">
                            {" "}
                            <a className="btn btn-outline-success btn-md">
                                <span>View Details</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial section*/}
            <div className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-10 col-xl-7">
                            <div className="text-center">
                                <div className="fs-4 mb-4 fst-italic">
                                    At ProcodeBox, the elements used for Search Engine Optimization (SEO) are diverse and
                                    varied in comparison with rest. We operate with the circumplex model of SEO services.
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <img
                                        className="rounded-circle me-3"
                                        src="https://dummyimage.com/40x40/ced4da/6c757d"
                                        alt="..."
                                    />
                                    <div className="fw-bold">

                                        <span className="fw-bold text-primary mx-1">/</span>
                                        CEO, AMit Tripathi
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog preview section*/}
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="fw-bolder">From our blog</h2>
                                <p className="lead fw-normal text-muted mb-5">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                                    fugit ratione dicta mollitia. Officiis ad.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img
                                    className="card-img-top"
                                    src="https://dummyimage.com/600x350/ced4da/6c757d"
                                    alt="..."
                                />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                                        News
                                    </div>
                                    <a
                                        className="text-decoration-none link-dark stretched-link"
                                        href="#!"
                                    >
                                        <h5 className="card-title mb-3">Blog post title</h5>
                                    </a>
                                    <p className="card-text mb-0">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="rounded-circle me-3"
                                                src="https://dummyimage.com/40x40/ced4da/6c757d"
                                                alt="..."
                                            />
                                            <div className="small">
                                                <div className="fw-bold">Kelly Rowan</div>
                                                <div className="text-muted">
                                                    March 12, 2023 · 6 min read
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img
                                    className="card-img-top"
                                    src="https://dummyimage.com/600x350/adb5bd/495057"
                                    alt="..."
                                />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                                        Media
                                    </div>
                                    <a
                                        className="text-decoration-none link-dark stretched-link"
                                        href="#!"
                                    >
                                        <h5 className="card-title mb-3">Another blog post title</h5>
                                    </a>
                                    <p className="card-text mb-0">
                                        This text is a bit longer to illustrate the adaptive height of
                                        each card. Some quick example text to build on the card title
                                        and make up the bulk of the card's content.
                                    </p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="rounded-circle me-3"
                                                src="https://dummyimage.com/40x40/ced4da/6c757d"
                                                alt="..."
                                            />
                                            <div className="small">
                                                <div className="fw-bold">Josiah Barclay</div>
                                                <div className="text-muted">
                                                    March 23, 2023 · 4 min read
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img
                                    className="card-img-top"
                                    src="https://dummyimage.com/600x350/6c757d/343a40"
                                    alt="..."
                                />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                                        News
                                    </div>
                                    <a
                                        className="text-decoration-none link-dark stretched-link"
                                        href="#!"
                                    >
                                        <h5 className="card-title mb-3">
                                            The last blog post title is a little bit longer than the
                                            others
                                        </h5>
                                    </a>
                                    <p className="card-text mb-0">
                                        Some more quick example text to build on the card title and make
                                        up the bulk of the card's content.
                                    </p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="rounded-circle me-3"
                                                src="https://dummyimage.com/40x40/ced4da/6c757d"
                                                alt="..."
                                            />
                                            <div className="small">
                                                <div className="fw-bold">Evelyn Martinez</div>
                                                <div className="text-muted">
                                                    April 2, 2023 · 10 min read
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Call to action*/}
                    <aside className="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
                        <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                            <div className="mb-4 mb-xl-0">
                                <div className="fs-3 fw-bold text-white">
                                    New products, delivered to you.
                                </div>
                                <div className="text-white-50">
                                    Sign up for our newsletter for the latest updates.
                                </div>
                            </div>
                            <div className="ms-xl-4">
                                <div className="input-group mb-2">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Email address..."
                                        aria-label="Email address..."
                                        aria-describedby="button-newsletter"
                                    />
                                    <button
                                        className="btn btn-outline-light"
                                        id="button-newsletter"
                                        type="button"
                                    >
                                        Sign up
                                    </button>
                                </div>
                                <div className="small text-white-50">
                                    We care about privacy, and will never share your data.
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>


    )
}

export default Home