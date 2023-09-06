import React, { useState } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import Link from "@/utils/ActiveLink";
import ProfileDropdown from "./ProfileDropdown";
import Cart from "./Cart";
import SearchForm from "./SearchForm";
import TopHeader from "./TopHeader";
import { motion } from "framer-motion";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Navbar = ({ user }) => {
	const [menu, setMenu] = React.useState(true);
	const [isMouse, toggleMouse] = useState(false);
	const toggleMouseMenu = () => {
		toggleMouse(!isMouse);
	};
	const toggleNavbar = () => {
		setMenu(!menu);
	};
	const subMenuAnimate = {
		enter: {
			opacity: 1,
			rotateX: 0,
			transition: {
				duration: 0.3,
			},
			display: "block",
		},
		exit: {
			opacity: 0,
			rotateX: -15,
			transition: {
				duration: 0.3,
				// delay: 0.3,
			},
			transitionEnd: {
				display: "none",
			},
		},
	};

	React.useEffect(() => {
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId.classList.add("is-sticky");
			} else {
				elementId.classList.remove("is-sticky");
			}
		});
	});

	const classOne = menu
		? "collapse navbar-collapse"
		: "collapse navbar-collapse show";
	const classTwo = menu
		? "navbar-toggler navbar-toggler-right collapsed"
		: "navbar-toggler navbar-toggler-right";

	return (
		<>
			<TopHeader user={user} />
			<div id="navbar" className="navbar-area">
				<div className="desktop-nav">
					<div className="container-fluid">
						<div className="navbar navbar-expand-lg navbar-light">
							<Link href="/">
								<a
									onClick={toggleNavbar}
									className="navbar-brand"
								>
									<img src="/images/logo.png" alt="logo" />
								</a>
							</Link>

							<button
								onClick={toggleNavbar}
								className={classTwo}
								type="button"
							>
								<span className="icon-bar top-bar"></span>
								<span className="icon-bar middle-bar"></span>
								<span className="icon-bar bottom-bar"></span>
							</button>

							<div
								className={classOne}
								id="navbarSupportedContent"
							>
								{/* <div className="others-options pe-0">
									<SearchForm
										formClass="search-form style1"
										btnClass="src-btn"
									/>
								</div> */}

								<ul className="navbar-nav ms-auto">
									<motion.li
										className="nav-item"
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.5 },
										}}
										whileTap={{ scale: 0.9 }}
									>
										<Link href="/" activeClassName="active">
											<a
												onClick={toggleNavbar}
												className="nav-link"
											>
												Home
											</a>
										</Link>
									</motion.li>
									<motion.li
										className="nav-item"
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.5 },
										}}
										whileTap={{ scale: 0.9 }}
									>
										<Link href="/about-us" activeClassName="active">
											<a
												onClick={toggleNavbar}
												className="nav-link"
											>
												About Us
											</a>
										</Link>
									</motion.li>
									<motion.li
										className="nav-item dropdown profile-dropdown"
										onMouseEnter={toggleMouseMenu}
										onMouseLeave={toggleMouseMenu}
									>
										<a className="nav-link">
											Programs
										</a>
										<motion.ul
											className="dropdown-menu"
											initial="exit"
											animate={isMouse ? "enter" : "exit"}
											variants={subMenuAnimate}
										>
											<li>
												<Link href="/learning/my-courses/">
													<a className="dropdown-item">
														IT Trainings
													</a>
												</Link>
											</li>
											<li>
												<Link href="/learning/my-purchase-history/">
													<a className="dropdown-item">
													Career Services & Job Placements
													</a>
												</Link>
											</li>
											<li>
												<Link href="/learning/wishlist/">
													<a className="dropdown-item">
													Women Empowerment
													</a>
												</Link>
											</li>
											<li>
												<Link href="/learning/wishlist/">
													<a className="dropdown-item">
													Startup Funding
													</a>
												</Link>
											</li>
										</motion.ul>
									</motion.li>
									<motion.li
										className="nav-item"
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.5 },
										}}
										whileTap={{ scale: 0.9 }}
									>
										<Link href="/courses" activeClassName="active"><a onClick={toggleNavbar} className="nav-link">Courses</a></Link>
									</motion.li>
									<motion.li
										className="nav-item dropdown profile-dropdown"
										onMouseEnter={toggleMouseMenu}
										onMouseLeave={toggleMouseMenu}
									>
										<a className="nav-link">
											Faculty
										</a>
										<motion.ul
											className="dropdown-menu"
											initial="exit"
											animate={isMouse ? "enter" : "exit"}
											variants={subMenuAnimate}
										>
											<li>
												<Link href="/learning/my-courses/">
													<a className="dropdown-item">
														Digital Marketing and Freelance
													</a>
												</Link>
											</li>
											<li>
												<Link href="/learning/my-purchase-history/">
													<a className="dropdown-item">
													Website Development
													</a>
												</Link>
											</li>
											<li>
												<Link href="/learning/wishlist/">
													<a className="dropdown-item">
														Cross Platform Mobile Application Development
													</a>
												</Link>
											</li>
											<li>
												<Link href="/learning/wishlist/">
													<a className="dropdown-item">
													Graphics Designing and Video Editing
													</a>
												</Link>
											</li>
											<li>
												<Link href="/learning/wishlist/">
													<a className="dropdown-item">
													Amazon FBA Mastery
													</a>
												</Link>
											</li>
											
										</motion.ul>
									</motion.li>
									<motion.li
										className="nav-item"
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.5 },
										}}
										whileTap={{ scale: 0.9 }}
									>
										<Link href="/campuses" activeClassName="active"><a onClick={toggleNavbar} className="nav-link">Campuses</a></Link>
									</motion.li>
									<motion.li
											className="nav-item dropdown profile-dropdown"
											onMouseEnter={toggleMouseMenu}
											onMouseLeave={toggleMouseMenu}
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.5 },
										}}
										whileTap={{ scale: 0.9 }}
									>
										<a onClick={toggleNavbar} className="nav-link">Gallery</a>
										<motion.ul
											className="dropdown-menu"
											initial="exit"
											animate={isMouse ? "enter" : "exit"}
											variants={subMenuAnimate}
										>
											<li>
												<Link href="/gallery/images/">
													<a className="dropdown-item">
														Images
													</a>
												</Link>
											</li>
											<li>
												<Link href="/gallery/videos/">
													<a className="dropdown-item">Videos
													</a>
												</Link>
											</li>
											
										</motion.ul>
									</motion.li>
									<motion.li
										className="nav-item"
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.5 },
										}}
										whileTap={{ scale: 0.9 }}
									>
										<Link href="/contact-us" activeClassName="active"><a onClick={toggleNavbar} className="nav-link">Contact Us</a></Link>
									</motion.li>
									<motion.li
										className="nav-item"
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.5 },
										}}
										whileTap={{ scale: 0.9 }}
									>
										<Link href="/faqs" activeClassName="active"><a onClick={toggleNavbar} className="nav-link">FAQS</a></Link>
									</motion.li>

									{/* {user ? (
										!user.instructor_request && (
											<motion.li
												className="nav-item"
												whileHover={{
													scale: 1.1,
													transition: {
														duration: 0.5,
													},
												}}
												whileTap={{ scale: 0.9 }}
											>
												<Link
													href="/become-an-instructor"
													activeClassName="active"
												>
													<a
														onClick={toggleNavbar}
														className="nav-link"
													>
														Become An Instructor
													</a>
												</Link>
											</motion.li>
										)
									) : (
										<motion.li
											className="nav-item"
											whileHover={{
												scale: 1.1,
												transition: { duration: 0.5 },
											}}
											whileTap={{ scale: 0.9 }}
										>
											<Link
												href="/become-an-instructor"
												activeClassName="active"
											>
												<a
													onClick={toggleNavbar}
													className="nav-link"
												>
													Become An Instructor
												</a>
											</Link>
										</motion.li>
									)} */}
								</ul>
							</div>

							<div className="others-options">
								<ul className="d-flex align-items-center">
									{/* <Cart /> */}
									{user ? (
										<li className="profile_li">
											<ProfileDropdown {...user} />
										</li>
									) : (
										<motion.li whileTap={{ scale: 0.9 }}>
											<Link href="/auth">
												<a className="default-btn">
													<i className="ri-registered-line"></i>
													<span>Register Now</span>
												</a>
											</Link>
										</motion.li>
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
