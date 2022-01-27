// ARREGLO RADIOLOGIA

// especialidad 1 caja (array)
//objetos
const radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

const traumatologia = [
  {
    hora: "08:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

const dental = [
  {
    hora: "08:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

const atencionRadiologia = document.querySelector(".orden1")
atencionRadiologia.innerHTML = `Primera atención : ${radiologia[0].paciente} - ${radiologia[0].prevision} | Ultima atención ${radiologia[4].paciente} - ${radiologia[4].prevision}`

const fila1 = document.querySelector(".datos1")
radiologia.forEach((item) => {
  fila1.innerHTML += `
  <tr>
  <td> ${item.hora} </td>
  <td> ${item.especialista} </td>
    <td> ${item.paciente}</td>
    <td>${item.rut}</td>
    <td>${item.prevision}</td>
  </tr>`
});

const atencionTraumatologia = document.querySelector(".orden2")
atencionTraumatologia.innerHTML = `Primera atención : ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Ultima atención ${traumatologia[6].paciente} - ${traumatologia[6].prevision}`

const fila = document.querySelector(".datos")
traumatologia.forEach((item) => {
  fila.innerHTML += `
  <tr>
  <td> ${item.hora} </td>
  <td> ${item.especialista} </td>
    <td> ${item.paciente}</td>
    <td>${item.rut}</td>
    <td>${item.prevision}</td>
  </tr>`
  
});

const atencionDental = document.querySelector(".orden3")
atencionDental.innerHTML = `Primera atención : ${dental[0].paciente} - ${dental[0].prevision} | Ultima atención ${dental[5].paciente} - ${dental[5].prevision}`


const fila2 = document.querySelector(".datos2")
dental.forEach((item) => {
  fila2.innerHTML += `
  <tr>
  <td> ${item.hora} </td>
  <td> ${item.especialista} </td>
    <td> ${item.paciente}</td>
    <td>${item.rut}</td>
    <td>${item.prevision}</td>
  </tr>`
});
