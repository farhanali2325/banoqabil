const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://banoqabillahore.pk/staging"
		: "http://localhost:3000";

export default baseUrl;
