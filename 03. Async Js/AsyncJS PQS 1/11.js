
        const fakeFetch = (url) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (url === "https://example.com/api/profile/NC002") {
                        resolve({
                            status: 200,
                            data: {
                                message: "Success",
                                data: { id: "NC002", name: "Roshan", institute: "neoG Camp" }
                            }
                        });
                    } else {
                        reject({
                            status: 404,
                            message: "Resource not found"
                        });
                    }
                }, 2000);
            });
        };

        const displayOutput = document.querySelector("#output");

        fakeFetch("https://example.com/api/profile/NC002")
            .then((response) => {
                if (response.status === 200) {
                    const user = response.data.data;
                    displayOutput.textContent = `Welcome!, ${user.name} from ${user.institute}`;
                }
            })
            .catch((error) => {
                if (error.status === 404) {
                    displayOutput.textContent = "Resource not found";
                }
            });
