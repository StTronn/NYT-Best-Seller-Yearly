import datetime
import time 

def get_dates():
    """ get all the dates for which to get nyt list (weeks 2018) """
    weeks=[]
    start_week=datetime.date(2018,1,7)
    end_week=datetime.date(2018,12,31) 
    delta=datetime.timedelta(days=7)
    temp=start_week
    while (temp<=end_week):
        weeks.append(temp.strftime('%Y-%m-%d'))
        temp+=delta
    return weeks
