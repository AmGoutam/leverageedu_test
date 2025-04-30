import React from 'react';
import "./EveryDreamHasAStory.css"
const EveryDreamHasAStory = () => {
    const urls = [
        { youtube: "https://youtu.be/WAGXB5Jjrls?si=Lq0RHjOBg_D5yC2f" },
        { instagram: "https://youtu.be/WAGXB5Jjrls?si=Lq0RHjOBg_D5yC2f" },
        { instagram: "https://youtu.be/WAGXB5Jjrls?si=Lq0RHjOBg_D5yC2f" },
        { youtube: "https://youtu.be/qHQErTIQ3wM" },
        { youtube: "https://youtu.be/nOkxEGB3CoY?si=5_Nm1UGNzZiZ8PPK" },
    ];

    const getEmbedUrl = (urlObj) => {
        if (urlObj.youtube) {
            const videoId = urlObj.youtube.split("youtu.be/")[1]?.split("?")[0];
            return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        }
        if (urlObj.instagram) {
            return urlObj.instagram;
        }
        return "";
    };

    return (
        <section className='container-fluid'>
            <div className='container EveryDreamHasAStory'>
                <p className='para'>In the Spotlight</p>
                <h1>Every Dream Has <span>a Story <div></div></span></h1>

                {/* Card Grid */}
                <div className="grid-container">
                    {urls.map((_, index) => (
                        <div className={`card card${index + 1}`} key={index}>
                            <div className='playBtnBox'>
                                <img
                                    src="https://images.leverageedu.com/assets/img/home/play.png"
                                    alt=""
                                    role="button"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#videoModal${index + 1}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bootstrap Modals */}
                {urls.map((urlObj, index) => (
                    <div className="modal fade" id={`videoModal${index + 1}`} tabIndex="-1" key={index} aria-labelledby={`videoModalLabel${index + 1}`} aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">
                                <div className="modal-body p-0">
                                    <div className="ratio ratio-16x9">
                                        <iframe
                                            src={getEmbedUrl(urlObj)}
                                            title={`Story ${index + 1}`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EveryDreamHasAStory;
