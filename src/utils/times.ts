import { differenceInSeconds } from 'date-fns';
export const ceremonyTime : Date = new Date(2023, 6, 27, 14, 30);
export const distanceToNow = (date: Date, includeSeconds: boolean) : string => {
    const diff = differenceInSeconds(date, new Date());
    const days = Math.trunc(diff / 60 / 60 / 24);
    const hours = Math.trunc(diff / 60 / 60 % 24);
    const minutes = Math.trunc(diff / 60 % 60);
    const seconds =  Math.trunc(diff % 60);
    let distance = `${hours} hours ${minutes} minutes`

    if (includeSeconds) {
        distance = `${distance} ${seconds} seconds`
    }
    
    if (days > 0) {
        distance = `${days} days ${distance}`
    }
    return distance;
}