export const loginUser = async (email: string, password: string) => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {  
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error("Failed to login user");
    }

    return response.json();
};