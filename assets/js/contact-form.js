// ===============================
// RG Perforaciones - Contact Form
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const submitButton = form.querySelector("button[type='submit']");

    // Crear contenedor de mensajes
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("form-status");
    messageContainer.style.marginTop = "20px";
    messageContainer.style.textAlign = "center";

    form.appendChild(messageContainer);

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        // Spinner + deshabilitar botón
        submitButton.disabled = true;

        submitButton.innerHTML = `
            <span class="spinner"></span>
            Enviando...
        `;

        messageContainer.innerHTML = "";

        try {

            const formData = new FormData(form);

            const response = await fetch(form.action, {
                method: "POST",
                body: formData
            });

            if (response.ok) {

                messageContainer.innerHTML = `
                    <div class="success-message">
                        ✅ El correo fue enviado correctamente.
                        Pronto nos contactaremos.
                    </div>
                `;

                form.reset();

            } else {

                messageContainer.innerHTML = `
                    <div class="error-message-custom">
                        ❌ Ocurrió un error al enviar el formulario.
                    </div>
                `;
            }

        } catch (error) {

            messageContainer.innerHTML = `
                <div class="error-message-custom">
                    ❌ No se pudo enviar el formulario.
                </div>
            `;
        }

        // Restaurar botón
        submitButton.disabled = false;

        submitButton.innerHTML = "Enviar consulta";

    });

});