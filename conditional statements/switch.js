const monitorcolor = "red"

switch (monitorcolor){
    case "yellow":
        console.log("het is yellow");
        break;
    case "red":
        console.log("het is red");
        break;
    case "green":
        console.log("het is green");
        break;
    case "purple":
        console.log("het is purle");
        break;
    default:
        console.log("geen kleur aangegeven");
}

// een switch mag je ook op deze manier doen, als er dezelfde uitkomst gelogd dient te worden.
const browser = "chrome";

switch (browser){  // dit logt je bent goed bezig
    case "edge":
        console.log("snel iets anders installeren!");
        break;

    case "chrome":
    case "firefox":
    case "internet exploder":
    case "opera":
    case "safari":
        console.log("je bent goed bezig");
        break;
    default:
        console.log("Hopelijk zie je deze pagina. ")
}