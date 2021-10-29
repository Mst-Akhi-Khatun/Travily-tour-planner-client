import React from 'react';

const ClientComment = () => {
    return (
        <div className="container text-center">
            <h1 className="pb-2">What They’re Saying</h1>

            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div>
                        <img src="https://tevily-html.vercel.app/assets/images/testimonial/testimonial-one-img-1.png" className="rounded-circle" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div>
                        <img src="https://tevily-html.vercel.app/assets/images/testimonial/testimonial-one-img-2.png" className="rounded-circle" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div>
                        <img src="https://tevily-html.vercel.app/assets/images/testimonial/testimonial-one-img-3.png" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div>
                        <img src="http://jituchauhan.com/site-templates/medical-website-template/06_pathology_lab/images/team-1.jpg" className="rounded-circle" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientComment;