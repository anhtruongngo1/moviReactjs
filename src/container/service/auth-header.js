export default function authHeader() {
    const user = localStorage.getItem("user");

    if (user) {
        // For Spring Boot back-end
        return { token: "Bearer " + user };

        // for Node.js Express back-end
        // return { "x-access-token": user };
    } else {
        return {};
    }
}