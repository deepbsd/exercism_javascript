
export const meetupDay = (year, month, weekday, which) => {


    const months = {"Jan":0, "Feb":1, "Mar":2, "Apr":3, "May":4, "Jun":5, "Jul":6, "Aug":7, "Sep":8, "Oct":9, "Nov":10, "Dec":11};
    const days = {"Sunday":0, "Monday":1, "Tuesday":2, "Wednesday":3, "Thursday":4, "Friday":5, "Saturday":6};
    const ranges = {"1st": [1,2,3,4,5,6,7], "teenth": [13,14,15,16,17,18,19], "2nd": [8,9,10,11,12,13,14], "3rd": [15,16,17,18,19,20,21],
                    "4th": [22,23,24,25,26,27,28,29,30], "5th": [25,26,27,28,29,30,31], "last": [25,26,27,28,29,30,31] };
    
    let today = new Date("2019-05-13T04:00:00Z");
    let targetDate;

    today.setUTCFullYear(year); 
    today.setUTCMonth(month);

    ranges[which].forEach(function(date){
        today.setUTCDate(date);
        
        if ((today.getDay() === days[weekday]) && (today.getUTCMonth() === month) && (today.getUTCDate() === date) ) {
            let testDay = new Date(today.toString());
            
            console.log("today:    ",today, "\nnew test: ", testDay, " equal? ",today.toString() == testDay.toString());
            
            //if (testDay.toString() === today.toString() && (today.getUTCMonth() === month)) {
            if (! today.toString().includes('Invalid')) {
                //console.log("Is Valid! ","today: ", today, " month: ", month,"date: ",date, " dayOfWeek: ",days[weekday]);
                targetDate = date;    
            }
        }
    })

    today.setUTCDate(targetDate);
    console.log("Final Date: ", today.toString())

    if ( (today.getUTCFullYear() != year) || (today.getUTCMonth() != month) || today.getUTCDate() != targetDate ) throw "Invalid Date.";
    

    return today;
}






