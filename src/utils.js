export const TIME_FORMAT = {
    TO_STANDARD: (seconds) => {
        var date = new Date(0);
        date.setSeconds(seconds);
        return date.toISOString().substr(11, 8);
    }
}