// leeg voorbeeld ter info.
object spaceExLaunch = {
    //hier staat alle info in.
}

const missionName = spaceExLaunch.mission_name;
const launchYear = spaceExLaunch.launch_year;
const rocketName = spaceExLaunch.rocket.rocket_name;

// Maar dat kan doormiddel van destructuring natuurlijk veel korter.
    const { mission_name, launch_year, } = spaceExLaunch;