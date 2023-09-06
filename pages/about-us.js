import React, { useEffect, useState, useRef } from "react";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import Features from "@/components/Index/Features";
import Testimonials from "@/components/Index/Testimonials";
import Business from "@/components/Index/Business";
import Link from "next/link";
import Categories from "@/components/Index/Categories";
import Partners from "@/components/Index/Partners";
import { motion } from "framer-motion";
import CoursesList from "@/components/Courses/CoursesList";
import baseUrl from "@/utils/baseUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";


const aboutUs = ({ courses, user, categories }) => {
	const variants = {
		visible: {
			opacity: 1,
			scale: 1,
			transition: { delay: 0.2, type: "spring", duration: 1 },
		},
		hidden: { opacity: 0, scale: 0 },
	};
	const [partners, setPartners] = useState([]);

	useEffect(() => {
		const fetchPartners = async () => {
			const url = `${baseUrl}/api/partners`;
			const response = await axios.get(url);
			setPartners(response.data.partners);
		};
		fetchPartners();
	}, []);

	if (partners.length == 0) return;

	return (
		<>
			<Navbar user={user} />
			<PageBanner
				pageTitle="About Us"
				homePageUrl="/"
				homePageText="Home"
				activePageText="About Us"
			/>

			<div className="transform-area pt-100 pb-50">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-12">
							<div className="transform-conetnt">
								<h2>Introduction</h2>
								<p>Alkhidmat Foundation Pakistan is a globally recognized non-profit organization that was established in 1990 by a group of like-minded individuals who were inspired by the teachings of Islam and its emphasis on helping the poor, needy, and vulnerable members of society. The organization was formally registered as a non-profit in 1993 and since then has been providing relief and development services to the most deprived and marginalized communities in Pakistan.
								</p>

								<h2>Bano Qabil Introduction:</h2>
								<p>Bano Qabil is the latest initiative by Alkhidmat Foundation Pakistan focused on uplifting the youth of Pakistan. In these uncertain economic times it is essential that we equip our youth with skills for the future that will empower them to have long and prosperous careers. Enabling the youth with skills that will allow them to become high earners will also bring long term prosperity and economic independence to our beloved nation of Pakistan. </p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="our-features-area bg-color-f1efee pt-50 pb-70">
				<div className="container">
					<div className="section-title">
						{/* <span className="top-title">Ou </span> */}
						<h2>Areas of Focus</h2>
					</div>

					<div className="row justify-content-center">
						<div className="col-lg-4 col-sm-6">
							<div className="single-features">
								<img
									src="/images/features/feature-1.svg"
									alt="feature"
								/>
								<h3>IT Trainings</h3>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6">
							<div className="single-features">
								<img
									src="/images/features/feature-2.svg"
									alt="feature"
								/>
								<h3>Career Enablement Services</h3>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6 ">
							<div className="single-features">
								<img
									src="/images/features/feature-3.svg"
									alt="feature"
								/>
								<h3>Startup Seed Funding</h3>
							</div>
						</div>


					</div>





				</div>

				<img
					src="/images/features/feature-shape-1.svg"
					className="shape shape-1"
					alt="feature"
				/>
			</div>
			<div className="ptb-100" >
				<div className="container">
					<div className="main-content-text">
						<h3>IT Trainings</h3>
						<p>Unlock Your Potential with Our 100% Free IT Training Program!</p>

						<p>At Bano Qabil, we are proud to offer a comprehensive IT training program that comes at absolutely no cost to our students. Our primary aim is to empower young professionals with the essential skills required to thrive in today's fast-paced global economy. By forging strong partnerships with industry leaders, we have successfully curated courses that not only deliver the highest level of education and training but also pave the way for lucrative career opportunities upon graduation. All our courses are endorsed and certified by esteemed authorities like PASHA and PSEB.</p>
						<ul>
							<li><b>1. Empowering Young Professionals:</b><br />
								We firmly believe in the potential of young professionals to shape the future. Our IT training program is meticulously designed to provide a nurturing environment where students can grow, learn, and excel in their chosen fields. By offering free access to our courses, we aim to break down financial barriers and make quality education accessible to all.</li>
							<li><b>2. Bridging the Skills Gap:</b><br />
								In the rapidly evolving tech landscape, the demand for skilled IT professionals is at an all-time high. Our courses are thoughtfully curated to address this demand and bridge the skills gap in the industry. With a focus on the latest technologies and tools, our students are equipped with the knowledge needed to tackle real-world challenges.</li>
							<li><b>3. Industry-Endorsed Excellence:</b><br />
								To ensure the utmost credibility and relevance, our courses are endorsed and certified by prestigious organizations like PASHA and PSEB. These endorsements serve as a testament to the quality of education our students receive and enhance their employability in the job market.</li>
							<li><b>4. Lucrative Career Opportunities:</b><br />
								Upon successful completion of our IT training program, our students are well-prepared to embark on high-paying career paths. Thanks to our strategic partnerships with industry leaders, we offer valuable connections and job placement assistance to help our graduates kickstart their professional journeys.
							</li>

						</ul>
						<p>We invite you to explore our diverse course offerings and take the first step towards a brighter future. Join us on this journey of growth and success as we empower you with the skills and knowledge to make a lasting impact in the IT industry. Together, let's build a better tomorrow. Enroll today!</p>
						<CoursesList courses={courses} user={user} />
						<div className="gap-20"></div>


						<h3>Career Enablement Services:</h3>
						<p>Unleashing Lucrative Career Opportunities through Our IT Training Program!</p>

						<p>At Bano Qabil, our unwavering focus is on empowering students who graduate from our IT Training program with the most lucrative career opportunities in the industry. We go the extra mile to ensure our graduates are well-prepared to thrive in their professional journey. With industry-recognized certifications endorsed by PASHA and PSEB, our students gain a competitive edge in the job market. Moreover, our comprehensive career enablement services encompass resume building, interview preparation, and seamless internship and job applications, thanks to our extensive network of corporate and industry partnerships.</p>
						<ul>
							<li><b>1. Industry-Recognized Certifications:</b><br />
								As part of our commitment to excellence, all students who successfully complete our IT Training program will be awarded industry-recognized certifications. Endorsed by prestigious organizations like PASHA and PSEB, these certifications validate the skills and expertise of our graduates, positioning them as valuable assets to prospective employers.</li>
							<li><b>2. Comprehensive Career Enablement:</b><br />
								We believe that launching a successful career requires more than just technical knowledge. Our career enablement services play a crucial role in honing our graduates' professional skills. We assist them in creating compelling resumes that highlight their achievements and potential. Additionally, our dedicated team provides personalized interview preparation, empowering students to confidently showcase their abilities to potential employers.</li>
							<li><b>3. Exclusive Internship and Job Opportunities:</b><br />

								Thanks to our strong corporate and industry partnerships, we have secured commitments from top-tier companies to provide exclusive internship and job opportunities for our graduates. This means our students can apply for coveted positions in reputable organizations, propelling their careers to new heights.</li>


						</ul>
						<p>With a steadfast commitment to nurturing talent and fostering excellence, [Your Organization Name] opens doors to a world of possibilities for aspiring IT professionals. Our IT Training program not only equips students with the necessary technical skills but also provides them with the essential tools to succeed in their chosen careers. Join us on this transformative journey, and unlock a future filled with limitless opportunities. Enroll in our IT Training program today!</p>
						<Swiper
							breakpoints={{
								0: {
									slidesPerView: 2,
									spaceBetween: 20,
								},
								576: {
									slidesPerView: 3,
									spaceBetween: 20,
								},
								768: {
									slidesPerView: 4,
									spaceBetween: 30,
								},
								992: {
									slidesPerView: 6,
									spaceBetween: 30,
								},
							}}
							className="tpartner-slide"
						>
							{partners.length > 0 &&
								partners.map((partner) => (
									<SwiperSlide key={partner.id}>
										<motion.div
											className="partner-item"
											initial="hidden"
											whileInView="visible"
											transition={{
												type: "spring",
												duration: 3,
												bounce: 0.3,
											}}
											variants={{
												visible: { opacity: 1, scale: 1 },
												hidden: { opacity: 0, scale: 0 },
											}}
										>
											<img
												src={partner.partner_image}
												alt={partner.name}
											/>
										</motion.div>
									</SwiperSlide>
								))}
						</Swiper>
						<div className="gap-20"></div>
						<h3>Startup Seed Funding:</h3>
						<p><b>Our exciting seed funding for young entrepreneurs is Coming Soon</b></p>
						<p><b>Courses</b></p>
						<ul>
							<li>- The general Courses page needs to host all the courses available.</li>
							<li>- Each individual area page of courses will host just its relevant courses available. </li>
							<li>- The formatting needs to be the same box format with an option to “View Details” that will have the details of each page. </li>
						</ul>
						<p><b>Contact Us:</b></p>
						<ul>
							<li>- Same form as the home page section.</li>
						</ul>
						<p><b>Registration</b></p>

						<ul>
							<li><b>1. Student Registration:</b><br />
								<p>- A website hosted form that asks for basic information: (First Name, Last Name, Phone Number, Area of Interest [drop down option from the available areas that we offer courses in].)</p>
								<p>- Once the student submits their registration they should see a message that thanks them for registering and also lets them know that once the student portal is live they will receive their login credentials via text on the phone that they registered with. </p>
							</li>
							<li><b>2. Volunteer Registration:</b><br />
								<p>- A website hosted form that asks for basic information: (First Name, Last Name, Phone Number, Area/Town location)</p>
								<p>- Once the volunteer submits their registration they should see a message thanking them for their registration and that they will receive further instructions via text on the number they registered with. </p>
							</li>


						</ul>

					</div>



				</div>
			</div>


			{/* <Features /> */}

			{/* <Testimonials /> */}

			{/* <Business /> */}

			<Footer />
		</>
	);
};
// This gets called on every request
export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch(`${baseUrl}/api/home-courses`);
	const { courses, categories } = await res.json();

	// Pass data to the page via props
	return { props: { courses, categories } };
}
export default aboutUs;
