import "./Banner.css"
const Banner = ({ title, image }) => {


    return (
        <>
            <section className="conatiner-fluid bannerManin">
                <div className="container pt-4 banner">
                    <div className="row">
                        <div className="left col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-start flex-column my-3">
                            <h1 className="">Unlock Your <span>Global Dream</span></h1>
                            <p className="text-justify para">
                                Powered by AI, driven by your goals — we turn complex study abroad processes into a smooth, personalised journey.
                            </p>
                            <div>
                                <button className="btns">Get Your Personalised Plan for Free</button>
                                <button className="btns btns1">Talk to an Expert</button>
                            </div>
                            <p className="para">95% of our students get an admit in less than 4 weeks</p>
                            <p className="para" style={{ marginTop: "30px" , color:"#002147" }}>Our students finished University to work at global offices of</p>
                            <div className="imageDiv">
                                <img src="https://publicassets.leverageedu.com/landing-pages-new/Frame34300.png" alt=""  />
                            </div>
                        </div>
                        <div className="right col-lg-6 col-md-6 col-12  d-flex justify-content-center align-items-center ">
                            <img className="img-fluid" src="https://publicassets.leverageedu.com/homepage/homepageV2/desktopGirlImg.png" alt=""  />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
