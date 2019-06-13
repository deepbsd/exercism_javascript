
export const meetupDay = (year, month, weekday, which) => {
//const meetupDay = (year, month, weekday, which) => {

    const months = {"Jan":0, "Feb":1, "Mar":2, "Apr":3, "May":4, "Jun":5, "Jul":6, "Aug":7, "Sep":8, "Oct":9, "Nov":10, "Dec":11};
    const days = {"Monday":1, "Tuesday":2, "Wednesday":3, "Thursday":4, "Friday":5, "Saturday":6, "Sunday":0};
    const ranges = {"1st": [1,2,3,4,5,6,7], "teenth": [13,14,15,16,17,18,19], "2nd": [8,9,10,11,12,13,14], "3rd": [15,16,17,18,19,20,21],
                    "4th": [22,23,24,25,26,27,28,29,30], "5th": [25,26,27,28,29,30,31], "last": [25,26,27,28,29,30,31] };
    
    let today = new Date();
    let [hours, minutes, seconds, ms] = [4, 0, 0, 0];
    let targetDate;

    today.setUTCFullYear(+year); 
    today.setUTCMonth(month);

    ranges[which].forEach(function(date){
        today.setUTCDate(date) ;
        console.log("date: ", date, "weekday: ",days[weekday])
        if (today.getDay() === days[weekday]) {
            if (! new Date(`${+year}-${date}-${month}`) !== 'Invalid Date') {
                console.log("today: ", today, " month: ", month,"date: ",date, " dayOfWeek: ",days[weekday]);
                targetDate = date;    
            }
        }
    })

    let date = targetDate;

    if (new Date(year,month,date) === 'Invalid Date') throw("Invalid Date.");

    today.setUTCDate(date);
    today.setUTCHours(hours, seconds, minutes, ms);

    
    //console.log(today);

    return today;


}


//const today = meetupDay(2013, 4, "Monday", "teenth" );




/*
from datetime import date
from calendar import monthrange

class MeetupDayException(Exception):
    def __init__(self, message):
        self.message = message

def meetup_day(yr, mo, day, when):
    count = []
    w2d = {"Monday":1, "Tuesday":2, "Wednesday":3, "Thursday":4, "Friday":5, "Saturday":6, "Sunday":7}
    seq = {"1st": range(1,8), "teenth": range(13,20), "2nd": range(8,15), "last": range(25,32), "3rd": range(15,22), "4th": range(22,32), "5th": range(25,32)}

    if mo == 2 and when in ['last', '4th', '5th']:
        period = range(monthrange(yr,mo)[1]-6, monthrange(yr, mo)[1]+1)
    else:
        period = seq[when]
    if mo == 2 and when == "5th":
        for n in range(monthrange(yr,mo)[0],monthrange(yr,mo)[1]):
            count.append(n)
            if len(count) < 5:
                raise MeetupDayException('Not a Valid Date.')
    for n in period:
        if date(yr, mo, n).isoweekday() == w2d[day]: return date(yr, mo, n)

    raise MeetupDayException('Not a Valid Date.')
*/
