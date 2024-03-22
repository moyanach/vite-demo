import reuqests from "../utils/requests";

export const userLogin = async (data) =>
	reuqests.post("/cmdb/v1/user/login/", data, {
		headers: { "content-type": "application/x-www-form-urlencoded" },
	});
