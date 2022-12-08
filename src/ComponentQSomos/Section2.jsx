import perfil4 from "../Img/johanaim.jpeg"; 

const Section4 = () => {
    return (
        <div className="album text-white text-center">
            <div className="">
                <div className="row py-5">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
                        <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}

                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                        <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={perfil4} alt="" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg p-3 mb-5 rounded" width="500" height="500"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section4;