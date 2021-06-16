import moment from 'moment';

export const TIME_FORMAT = {
    FROM_NOW: (prevDate) =>  moment.duration(moment().diff(moment(prevDate).utcOffset(3, true))),
    DURATION_TIME: (duration) => {
        const hours = Math.trunc(moment.duration(duration).asHours());
        const minutes = Math.trunc(moment.duration(duration).minutes());
        const seconds = Math.trunc(moment.duration(duration).seconds());
        return {hours, minutes, seconds}
    },
    STANDART_DATE: (date, with_s=true) => moment(date).format('HH:mm' + (with_s ? ':ss' : '')),
    DURATION_TO_HM: (duration) => {
        const {hours : h, minutes : m, seconds : s} = TIME_FORMAT.DURATION_TIME(duration*1000);
        const addZero = (num) =>  (num.toString().length == 1 ? '0' + num : num);
        return (h ? h + ":" : "") + addZero(m) + ":" +  addZero(s);
    }
}