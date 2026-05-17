const projects = [
    {
        pid: 1,
        tech: "Siemens",
        title: "Celda de palletizado",
        description: "Descripción de celda de palletizado",
        category: "Siemens S7-1500",
        date: "2021",
        images: [
            "assets/img/project/celda-pallet.png",
            "assets/img/project/celda-pallet.png",
            "assets/img/project/celda-pallet.png",
            "assets/img/project/celda-pallet.png",
        ],
    },
    {
        pid: 2,
        title: "Encajonador de sobres",
        tech: "Siemens",
        description: "Descripción de casepacker",
        category: "Siemens S7-1200",
        date: "2022",
        images: [
            "assets/img/project/casepacker.png",
            "assets/img/project/casepacker.png",
            "assets/img/project/casepacker.png",
            "assets/img/project/casepacker.png",
        ],
    },
    {
        pid: 3,
        title: "Planta de tratamiento de efluentes",
        tech: "Unitronics",
        description: "Descripción de la planta",
        category: "Unitronics Unistream 7",
        date: "2022",
        images: [
            "assets/img/project/planta-eflu.png",
            "assets/img/project/planta-eflu.png",
            "assets/img/project/planta-eflu.png",
            "assets/img/project/planta-eflu.png",
        ],
    },
    // Agrega más proyectos aquí
];

// Exportar la variable si se usa en un entorno con módulos
if (typeof module !== "undefined") {
    module.exports = projects;
}
