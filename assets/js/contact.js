document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");

    const loading = document.querySelector(".loading");
    const errorMessage = document.querySelector(".error-message");
    const sentMessage = document.querySelector(".sent-message");

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        loading.style.display = "block";
        errorMessage.style.display = "none";
        sentMessage.style.display = "none";

        const formData = new FormData(form);

        try {

            const response = await fetch(
                "https://formsubmit.co/ajax/augusto.atp.91@gmail.com",
                {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: formData
                }
            );

            const result = await response.json();

            loading.style.display = "none";

            if (result.success === "true") {

                sentMessage.style.display = "block";
                form.reset();

            } else {

                errorMessage.innerHTML =
                    "❌ Ocurrió un error al enviar el mensaje.";

                errorMessage.style.display = "block";
            }

        } catch (error) {

            loading.style.display = "none";

            errorMessage.innerHTML =
                "❌ No se pudo enviar el mensaje.";

            errorMessage.style.display = "block";
        }

    });

});