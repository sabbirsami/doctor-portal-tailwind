import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState("");
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://teeth-health.herokuapp.com/user/${email}`, {
                method: "Put",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(currentUser),
            })
                .then((res) => res.json())
                .then((data) => {
                    const token = data.token;
                    localStorage.setItem("accessToken", token);
                    setToken(token);
                    console.log(data);
                });
        }
    }, [user]);
    return [token];
};

export default useToken;
