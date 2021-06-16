import { TIME_FORMAT } from './../utils';

export const TABLE_SHEME = [
    { key: "employee_full_name", text: "Сотрудник" },
    { key: "1", text: "Время в рабочих статусах", sub_headers: [
        { key: "work_status_duration", text: "Всего", prepare: {
            func: (args)=>TIME_FORMAT.DURATION_TO_HM(args[0]), 
            keys: ["work_status_duration"] }}]  },
    { key: "employee_utilization", text: "Коэффициент утилизации сотрудника", prepare: {
        func: (args)=>args[0] != null ? `${args[0]}%` : "", keys: ["employee_utilization"] }},
    { key: "work_status_start_time", text: "Время прихода на работу", prepare: {
        func: (args)=>args[0] ? TIME_FORMAT.STANDART_DATE(args[0], false) : "", keys: ["work_status_start_time"] },},
    { key: "work_status_finish_time", text: "Время ухода с работы", prepare: {
        func: (args)=>TIME_FORMAT.STANDART_DATE(args[0], false), keys: ["work_status_finish_time"] }},
    { key: "2", text: "Всего вызовов", sub_headers: [
        { key: "call_count", text: "Всего" },
        { key: "in_call_count", text: "Вход" },
        { key: "out_call_count", text: "Исход" },]  },
    { key: "3", text: "Общее время в разговоре", sub_headers: [
        { key: "sum_talk_duration", text: "Всего", prepare: {
            func: (args)=>TIME_FORMAT.DURATION_TO_HM(args[0]), keys: ["sum_talk_duration"] }},
        { key: "in_sum_talk_duration", text: "Вход", prepare: {
            func: (args)=>TIME_FORMAT.DURATION_TO_HM(args[0]), keys: ["in_sum_talk_duration"] }},
        { key: "out_sum_talk_duration", text: "Исход", prepare: {
            func: (args)=>TIME_FORMAT.DURATION_TO_HM(args[0]), keys: ["out_sum_talk_duration"] }},]  },
    { key: "4", text: "Общее время дозвона", sub_headers: [
        { key: "sum_answer_duration", text: "Всего", prepare: {
            func: (args)=>TIME_FORMAT.DURATION_TO_HM(args[0]), keys: ["sum_answer_duration"] }},
        { key: "in_sum_answer_duration", text: "Вход", prepare: {
            func: (args)=>TIME_FORMAT.DURATION_TO_HM(args[0]), keys: ["in_sum_answer_duration"] }},
        { key: "out_sum_answer_duration", text: "Исход", prepare: {
            func: (args)=>TIME_FORMAT.DURATION_TO_HM(args[0]), keys: ["out_sum_answer_duration"] }},]  },
    { key: "5", text: "Ср. время между вызовами", sub_headers: [
        { key: "in_avg_between_call_duration", text: "Вход", prepare: {
            func: (args)=>TIME_FORMAT.DURATION_TO_HM(args[0]), keys: ["in_avg_between_call_duration"] }},
        { key: "out_avg_between_call_duration", text: "Исход", prepare: {
            func: (args)=>TIME_FORMAT.DURATION_TO_HM(args[0]), keys: ["out_avg_between_call_duration"] }},] },
]

export const AVERAGE_TIME_SHEME = [
    { key: "avg_status_497849_duration", text: "Доступен", color: "success" },
    { key: "avg_status_497855_duration", text: "Не беспокоить", color: "danger" },
    { key: "avg_status_497852_duration", text: "Перерыв", color: "info" },
    { key: "avg_status_497858_duration", text: "Нет на месте", color: "warning" },
]

export const TOTAL_TIME_SHEME = [
    { key: "in_sum_talk_duration", text: "Входящие", color: " rgb(17, 121, 173)" },
    { key: "out_sum_talk_duration", text: "Исходящие", color: "rgb(72, 184, 130)" },
]