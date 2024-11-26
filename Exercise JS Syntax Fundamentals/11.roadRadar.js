function solve(speed, area) {
    function processStatus(currSpeed, speedLimit) {
        if (currSpeed > speedLimit) {
            const difference = currSpeed - speedLimit;
            let status = '';
            if (difference <= 20) {
                status = 'speeding';

            }
            else if (difference <= 40) {
                status = 'excessive speeding';
            }
            else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
        else {
            console.log(`Driving ${currSpeed} km/h in a ${speedLimit} zone`);

        }
    }
    switch (area) {
        case 'motorway':
            processStatus(speed, 130);
            break;
        case 'interstate':
            processStatus(speed, 90);
            break;
        case 'city':
            processStatus(speed, 50);
            break;
        case 'residential':
            processStatus(speed, 20);
            break;

    }
}
solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');