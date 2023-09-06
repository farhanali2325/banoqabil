/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	optimizeFonts: false,
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	env: {
		JWT_SECRET: "asdfghjklnbvcxzqwertyuiopmkioprewqasderfgnujm",
		AWS_SES_USER: "...",
		AWS_SES_PASSWORD: ".....",
		CLOUD_NAME: "dkwfbq2zz",
		UPLOAD_PRESETS: "presets",
		CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dkwfbq2zz/image/upload",
		CLOUDINARY_VIDEO_URL: "https://api.cloudinary.com/v1_1/dkwfbq2zz/video/upload",
		CLOUDINARY_ZIP_URL: "https://api.cloudinary.com/v1_1/dkwfbq2zz/raw/upload",
		STRIPE_SECRET_KEY: "sk_test_1qm3pkog7qeAU4kZygkdhK6000lsXiHKLG",
		STRIPE_PUBLISHABLE_KEY: "pk_test_H5D45kS5Knb0sPZkAzuz1miu001Vh2wToz",
	},
};

module.exports = nextConfig;