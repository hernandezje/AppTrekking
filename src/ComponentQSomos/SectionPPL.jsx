import perfil2 from "../Img/johana.jpeg"; 

const Section3 = () => {
    return (
        <div className="album text-white">
            <div className="container">
                <div className="row justify-content-center my-4 text-center ">
                    <div className="col-lg-4 ">
                        {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}

                        <h2 className="fw-normal">Heading</h2>
                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                        
                    </div>
                    <div className="col-lg-4">
                        <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={perfil2} alt="" />
                        <h2 className="fw-normal">Heading</h2>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                       
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Section3;