    const dropzone = document.querySelector("#dropzone");
    const divDropzone = document.querySelector("#dropzone div");
    const inputFile = document.querySelector("#dropzone input");

    dropzone.addEventListener("dragover", e => {
        dropzone.classList.add("hover");
    })

    dropzone.addEventListener("dragleave", e => {
        dropzone.classList.remove("hover")
    })


    inputFile.addEventListener("change", e => {
        var file = e.target.files[0];

        dropzone.classList.remove("hover");

        if (inputFile.accept && !inputFile.accept.split(/, ?/).includes(file.type))
            return alert('Tipo de arquivo não permitido.');

        dropzone.classList.add("dropped");

        if ((/^image\/(gif|png|jpg|jpeg)$/i).test(file.type)) {
            var reader = new FileReader(file);

            reader.readAsDataURL(file);

            reader.onload = function(e) {
                var data = e.target.result;
                console.log(data)
                divDropzone.innerHTML = `
                    <img src="${data}" />
                `
            };
        } else {
            var ext = file.name.split('.').pop();
            divDropzone.innerHTML = ext;
            console.log(ext)

        }

    })