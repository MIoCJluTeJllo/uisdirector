import { TIME_FORMAT } from './../utils';

export const STREAMING_SHEME = [
    { key: "success_count", text: "Принятые", color: "rgb(6, 153, 79)" },
    { key: "lost_count", text: "Необработанные", color: "rgb(224, 60, 0)" },
    { key: "1", text: "Среднее время ожидания ответа", prepare: {
        keys: ["waiting_operator_answer_duration_sum", "waiting_operator_answer_duration_count"],
        func: (args)=> Math.round(args[0] / args[1]) ? Math.round(args[0] / args[1]) + " c" : ""
    }},
    { key: "active_without_operator_count", text: "На входе в систему"},
    { key: "in_waiting_operator_answer_count", text: "Ожидают ответа" },
    { key: "in_talk_count", text: "В разговоре" },
    { key: "in_waiting_transfer_count", text: "Ожидают перевода" },
]

export const EMPLOYESS_SHEME = [
    { key: "available_count", text: "Свободные" },
    { key: "in_talk_count", text: "В разговоре" },
    { key: "in_in_call_count", text: "На входящем" },
    { key: "in_out_call_count", text: "На исходящем" },
]

export const TABLE_SHEME = [
    { key: "employee_full_name", text: "Сотрудник" },
    { key: "group_name", text: "Группа" },
    { key: "status_name", text: "Статус" },
    { key: "1", text: "Время в статусе", prepare: {
        keys: ["in_status_since"],
        func: (args) => {
            const {hours, minutes} = TIME_FORMAT.DURATION_TIME(TIME_FORMAT.FROM_NOW(args[0]));
            const result = (hours ? hours + " ч " : "") + (minutes ? minutes + " мин" : "");
            return (result == "" ? "< 1 мин" : result.trim());
        }
    }},
    { key: "in_status_since", text: "Статус изменён", prepare: {
        keys: ["in_status_since"],
        func: (args) => TIME_FORMAT.STANDART_DATE(args[0])}},
    { key: "employee_last_talk_finish_time", text: "Время посл. разговора", prepare: {
        keys: ["employee_last_talk_finish_time"],
        func: (args) => TIME_FORMAT.STANDART_DATE(args[0])}},
    { key: "line_number", text: "Линия" },
    { key: "state_description", text: "Состояние" },
    { key: "subscriber_number", text: "Номер абонента" },
    { key: "in_state_since", text: "Начало сессии", prepare: {
        keys: ["in_state_since"],
        func: (args) => TIME_FORMAT.STANDART_DATE(args[0])}},
    { key: "2", text: "Время сессии", 
        prepare: {
            keys: ["in_state_since"],
            func: (args) => TIME_FORMAT.FROM_NOW(args[0]).asMilliseconds()
        },
        timer: {
            depend_check: (value)=>(value ? true : false),
            depend_key: "state_description",
            func: (value) => {
                const {hours, minutes, seconds} = TIME_FORMAT.DURATION_TIME(value);
                const result = (hours ? hours + " ч " : "") + (minutes ? minutes + " мин " : "") + (seconds ? seconds + " с" : "");
                return result.trim();
            }
        }   
    },
    { key: "3", text: "Время в разговоре", 
        prepare: {
            keys: ["state_description", "employee_last_talk_start_time"],
            depend_key: "state_description",
            func: (args) => args[0] ? TIME_FORMAT.FROM_NOW(args[1]).asMilliseconds() : ""
        },
        timer: {
            depend_check: (value)=>(value == "В разговоре"),
            depend_key: "state_description",
            func: (value) => {
                const {hours, minutes, seconds} = TIME_FORMAT.DURATION_TIME(value);
                const result = (hours ? hours + " ч " : "") + (minutes ? minutes + " мин " : "") + (seconds ? seconds + " с" : "");
                return result.trim();
            }
        }}
]