import React from "react";
import Link from "next/link";

const Features = () => {
	return (
		<div className="our-features-area bg-color-f1efee pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="top-title">Our Programs </span>
					<h2>Why You Should Choose Bano Qabil</h2>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-4 col-sm-6">
						<div className="single-features">
							<img
								src="/images/features/feature-1.svg"
								alt="feature"
							/>
							<h3>IT Trainings</h3>
							{/* <p>100% free, advanced, in-demand, practical IT courses.</p> */}
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-features">
							<img
								src="/images/features/feature-2.svg"
								alt="feature"
							/>
							<h3>Career Enablement Services</h3>
							{/* <p>Designed for Pakistani Women facing inflation and economic crises.</p> */}
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 ">
						<div className="single-features">
							<img
								src="/images/features/feature-3.svg"
								alt="feature"
							/>
							<h3>Startup Seed Funding</h3>
							{/* <p>For juniors want to pursue their career in the IT Industry.</p> */}
						</div>
					</div>

					{/* <div className="col-lg-3 col-sm-6">
						<div className="single-features">
							<img
								src="/images/features/feature-4.svg"
								alt="feature"
							/>
							<h3>Always Interactive Learning</h3>

							<p>
								Instructors from around the world teach millions
								of students on Edmy through video.
							</p>
						</div>
					</div> */}
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-6 col-sm-12">
						<div className="video-responsive">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/TgXxSR091oA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
					</div>

					<div className="col-lg-6 col-sm-12">
						<div className="video-responsive">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/TgXxSR091oA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12">
						<div className="video-responsive">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/TgXxSR091oA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12">
						<div className="video-responsive">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/TgXxSR091oA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
	);
};

export default Features;
