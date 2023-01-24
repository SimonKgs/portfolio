//  ids simulados deberian venir de DB, los de cada tecnología son necesarios como keys unicas
//  los id de cada objeto de experiencia no estan en uso pero sería ideal tenerlos en la db
export const experienciObjetos = [
  {
    id: 'exp1',
    cabecera: "Desarrollador web en I-logica | 9 meses, 3 de prácticas:",
    descripcion: "Desarrollo y diseño de página web completa",
    tecnologias: [
      {
        id: "tec0",
        tecnologia: "JavaScript",
      },
      {
        id: "tec1",
        tecnologia: "PHP",
      },
      {
        id: "tec2",
        tecnologia: "MariaDB",
      },
      {
        id: "tec3",
        tecnologia: "HTML5",
      },
      {
        id: "tec4",
        tecnologia: "SASS",
      },
    ],
  },
  {
    id: 'exp2',
    cabecera: "Operador CPD en ASAC Comunicaciones S.L. | 3 meses:",
    descripcion:
      "Solución de incidencias, gestión de usuarios, monitorización, control de backups",
    tecnologias: [
      {
        id: "tec5",
        tecnologia: "Windows / Windows Server",
      },
      {
        id: "tec6",
        tecnologia: "Linux / Linux Server",
      },
      {
        id: "tec7",
        tecnologia: "Paessler PRTG",
      },
      {
        id: "tec8",
        tecnologia: "Citrix XenApp",
      },
      {
        id: "tec9",
        tecnologia: "Veeam, Backup Exec",
      },
    ],
  },
  {
    id: 'exp3',
    cabecera:
      "Técnico en sistemas informáticos en Seresco, C.G.S.I  | 9 meses, 3 meses de prácticas:",
    descripcion:
      "Solución e identificación de incidencias, reparación, sustitución e instalación de equipos, configuración e instalación de aplicaciones",
    tecnologias: [
      { id: "tec10", tecnologia: "Windows" },
      { id: "tec11", tecnologia: "Linux" },
      { id: "tec12", tecnologia: "Periféricos" },
    ],
  },
  {
    id: 'exp4',
    cabecera:
      "Técnico en tienda informática en I-logica | 12 meses, 3 meses de prácticas:",
    descripcion:
      "Reparación de distintos equipos, configuración e instalación de aplicaciones",
    tecnologias: [
      { id: "tec13", tecnologia: "Windows" },
      { id: "tec14", tecnologia: "Linux" },
      { id: "tec15", tecnologia: "Mac" },
    ],
  },
];
