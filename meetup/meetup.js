
export const meetupDay = (year, month, weekday, which) => {

    const weekdays = {"Sunday":0, "Monday":1, "Tuesday":2, "Wednesday":3, "Thursday":4, "Friday":5, "Saturday":6};
    // Get the date of the first instance of weekday
    const firstDate = (weekdays[weekday] - new Date(year, month).getDay() + 7) % 7 + 1;
    // How many instances of weekday are in this month?
    const length = Math.floor((new Date(year, month+1, 0).getDate() - firstDate) / 7) + 1;
    // get an array of all instances of that weekday in month
    const arrayOfDates = (Array.from({length}, (_, i) => firstDate + i * 7));
    
    const ranges = {"1st": arrayOfDates[0], "teenth": arrayOfDates.find( date => date > 12 ), "2nd": arrayOfDates[1],  
        "3rd": arrayOfDates[2], "4th": arrayOfDates[3], "5th": arrayOfDates[4], "last": arrayOfDates[arrayOfDates.length-1] };
    
    const date = ranges[which];

    const meetupDay = new Date(year,month,date)

    if (meetupDay.toString().includes('nvalid')) throw "Bad Date!";

    return meetupDay;
}






