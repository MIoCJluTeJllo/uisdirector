import { TIME_FORMAT } from './../utils';

export const TABLE_SHEME = [
    { key: "employee_full_name", text: "Сотрудник" },
    { key: "1", text: "Время в рабочих статусах", sub_headers: [
        { key: "work_status_duration", text: "Всего", prepare: TIME_FORMAT.TO_STANDARD }]  },
    { key: "employee_utilization", text: "Коэффициент утилизации сотрудника", prepare: (text)=>text ? `${text}%` : "" },
    { key: "work_status_start_time", text: "Время прихода на работу" },
    { key: "work_status_finish_time", text: "Время ухода с работы" },
    { key: "2", text: "Всего вызовов", sub_headers: [
        { key: "call_count", text: "Всего" },
        { key: "in_call_count", text: "Вход" },
        { key: "out_call_count", text: "Исход" },]  },
    { key: "3", text: "Общее время в разговоре", sub_headers: [
        { key: "sum_talk_duration", text: "Всего", prepare: TIME_FORMAT.TO_STANDARD },
        { key: "in_sum_talk_duration", text: "Вход", prepare: TIME_FORMAT.TO_STANDARD },
        { key: "out_sum_talk_duration", text: "Исход", prepare: TIME_FORMAT.TO_STANDARD },]  },
    { key: "4", text: "Общее время дозвона", sub_headers: [
        { key: "sum_answer_duration", text: "Всего", prepare: TIME_FORMAT.TO_STANDARD },
        { key: "in_sum_answer_duration", text: "Вход", prepare: TIME_FORMAT.TO_STANDARD },
        { key: "out_sum_answer_duration", text: "Исход", prepare: TIME_FORMAT.TO_STANDARD },]  },
    { key: "5", text: "Ср. время между вызовами", sub_headers: [
        { key: "in_avg_between_call_duration", text: "Вход", prepare: TIME_FORMAT.TO_STANDARD },
        { key: "out_avg_between_call_duration", text: "Исход", prepare: TIME_FORMAT.TO_STANDARD },] },
]