import React, { useEffect, useState, useRef } from "react";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";

const campuses = ({ user }) => {
    return (
        <>
            <Navbar user={user} />
            <PageBanner
                pageTitle="Campuses"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Campuses"
            />


            <div className="ptb-100" >
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="single-courses">
                                <div className="courses-main-img">
                                    <img src="/images/campuses/1.jpg" alt="Image" />
                                </div>
                                <div className="courses-content">
                                    <h3>Al-Aqsa Library</h3>
                                    <p>Adjacent to Jamia Masjid Al-Aqsa Block 13 Gulshan e Iqbal, Karachi</p>
                                    <a href="https://goo.gl/maps/geNbvgfg1dSk6FRo9">Pin Location</a>
                                </div>

                               
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-courses">
                                <div className="courses-main-img">
                                    <img src="/images/campuses/2.jpg" alt="Image" />
                                </div>
                                <div className="courses-content">
                                    <h3>Anjuman Complex Sakhi Hasan</h3>
                                    <p>ST-5, Block J, Near Sakhi Hasan Chorangi, North Nazimabad</p>
                                    <a href="https://goo.gl/maps/MwMCYHHfKbq6EVyA7" target="_blank" tabindex="0">Pin Location</a>
                                </div>

                               
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-courses">
                                <div className="courses-main-img">
                                    <img src="/images/campuses/3.jpg" alt="Image" />
                                </div>
                                <div className="courses-content">
                                    <h3>Arqam Public School Campus-7</h3>
                                    <p>ST-84 Saudabad No.1 Adjacent Farooqui Masjid, Begum Khursheed Rd, Saudabad, Karachi</p>
                                    <a href="https://goo.gl/maps/C1dpxuMiGatEGsQh9" target="_blank" tabindex="0">Pin Location</a>
                                </div>

                               
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-courses">
                                <div className="courses-main-img">
                                    <img src="/images/campuses/4.jpg" alt="Image" />
                                </div>
                                <div className="courses-content">
                                    <h3>Askari Degree College</h3>
                                    <p>399/3, Siraj-ud-Daula Road? Near Ismail Chowrangi, Bahadurabad Bahadur Yar Jang CHS, Karachi</p>
                                    <a href="https://goo.gl/maps/THAa3ZYTgrvKpmWaA">Pin Location</a>
                                </div>

                               
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="single-courses">
                                <div className="courses-main-img">
                                    <img src="/images/campuses/5.jpg" alt="Image" />
                                </div>
                                <div className="courses-content">
                                    <h3>Circle Social Welfare Foundation</h3>
                                    <p>Adjacent  to Jamia Masjid Al-Aqsa Block 13 Gulshan e Iqbal</p>
                                    <a href="https://goo.gl/maps/gNupk8pudzAYtHvW9" target="_blank" tabindex="0">Pin Location</a>
                                </div>

                               
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-courses">
                                <div className="courses-main-img">
                                    <img src="/images/campuses/6.jpg" alt="Image" />
                                </div>
                                <div className="courses-content">
                                    <h3>SKH solutions Gulistan e Johar</h3>
                                    <p>Near AL-Faizan CNG Station block 14 Gulistan-e-Johar</p>
                                    <a href="https://goo.gl/maps/Wg27gsMHchGG9PHB9" target="_blank" tabindex="0">Pin Location</a>
                                </div>

                               
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-courses">
                                <div className="courses-main-img">
                                    <img src="/images/campuses/6.jpg" alt="Image" />
                                </div>
                                <div className="courses-content">
                                    <h3>SKH solutions Defence phase VI</h3>
                                    <p>Plot #59-C, main Khayaban-e-Sehar, shehbaz commercial area DHA Phase 6</p>
                                    <a href="https://goo.gl/maps/sGNZxHf8Uwz8RhNVA" target="_blank" tabindex="0">Pin Location</a>
                                </div>

                               
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-courses">
                                <div className="courses-main-img">
                                    <img src="/images/campuses/7.jpg" alt="Image" />
                                </div>
                                <div className="courses-content">
                                    <h3>Escuela Schooling System</h3>
                                    <p>SNPA-68 Bahadurabad, Off Bahadurabad Club</p>
                                    <a href="https://goo.gl/maps/Ubvomss6xRTajxF77" target="_blank" tabindex="0">Pin Location</a>
                                </div>

                               
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-courses">
                                <div className="courses-main-img">
                                    <img src="/images/campuses/8.jpg" alt="Image" />
                                </div>
                                <div className="courses-content">
                                    <h3>Idara Noor-e-Haq</h3>
                                    <p>503-504, Quaideen Colony New MA Jinnah Road Karachi</p>
                                    <a href="https://goo.gl/maps/QhBZfBx72U9Vs2Km6" target="_blank" tabindex="0">Pin Location</a>
                                </div>

                               
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-courses">
                                <div className="courses-main-img">
                                    <img src="/images/campuses/9.jpg" alt="Image" />
                                </div>
                                <div className="courses-content">
                                    <h3>Pakistan Central Homeopathic College</h3>
                                    <p>V/C-33, P.B.S.T 3, Nazimabad, Behind Matric Board Office, Karachi-Pakistan</p>
                                    <a href="Pakistan Central Homeopathic Medical College &amp; Hospit" target="_blank" tabindex="0">Pin Location</a>
                                </div>

                               
                            </div>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>



            <Footer />
        </>
    );
};
export default campuses;
