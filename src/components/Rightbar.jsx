import React from 'react'
import Box from '@mui/material/Box';

const Rightbar = () => {

    return (
        <Box bgcolor="white" flex={1} 
        p={2}
        sx={{display: {xs: "none", sm:"block" } }}
        > Recomendaciones 


<section class="vh-100" style= {{backgroundColor: '#9de2ff' }}>
    

    <div class="container py-5 h-100">
        <div class=" row d-flex justify-content-center align-items-center h-100">
            <div class="col col-md-9 col-lg-7 col-xl-5">
                <div className="card" style={{borderRadius:'15px'}} >
                    <div class="card-body p-4">
                        <div class="d-flex text-black">
                            <div class="flex-shrink-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image" class="img-fluid"
                  style={{ width: '180px', borderRadius: '10px' }}/>

                            </div>
                            <div class="flew-grow-1 ms-3">
                                <h5 class="mb-1">Hannia </h5>
                                <p className="mb-2 pb-1" style={{ color: '#2b2a2a' }}>Senior Web Dev</p>

                                <div class="d-flex justify-content-start rounded-3 p-2  mb-2"
                                style={{ color: '##808080' }}>
                                    <div>
                                        <p class="small text-muted mb-1">Jobs</p>
                                        <p class="mb-0">8</p>
                                    </div>
                                    <div>
                                        <p class="small text-muted mb-1">Followers</p>
                                        <p class="mb-0">500</p>
                                        <div>
                                        <p class="small text-muted mb-1">Experiencia</p>
                                        <p class="mb-0">4 años</p>
                                    </div>
                                    </div>
                                    <div class="d-flex pt-1">
                                        <button type="button" class="btn btn-outline-primary me-1 flex-grow-1" >Chat</button>
                                        <button type="button" class="btn btn-primary flex-grow-1">Follow</button>
                                    </div>



                                </div>

                            </div>

                        </div>

                    </div>

                </div>


            </div>


        </div>


    </div>













    </section>
        </Box>




    )

}

export default Rightbar