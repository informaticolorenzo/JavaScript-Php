//Esta función se puede mejorar añadiendo control de errores y demás. Este solo es un ejemplo básico para empezar.
function getApi() {
    $('#tblUsuarios').DataTable({
        responsive: true,
        destroy: true,
        ajax: {
            data: "",
            url: "php/getApi.php",
            type: "POST",
            dataSrc: "",
        },
        columns: [
            { data: "id" },
            { data: "name" },
            { data: "username" },
            { data: "email" },
        ],
    });
}
