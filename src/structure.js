const MONITORING_PREPARE_FUNC = {
    STANDARD_TIME: (text) => new Date(text).toLocaleTimeString('en-GB'),
    FROM_CURRENT_TIME: (text) => new Date(text).toLocaleTimeString('en-GB'),
}

export const WORKLOAD = [
    { key: "available_count", text: "Среднее время в рабочих статусах" },
    { key: "in_talk_count", text: "Общее время в разговоре" },
]

export const WORKLOAD_TABLE = [
    { key: "employee_full_name", text: "Сотрудник" },
    { key: "1", text: "Время в рабочих статусах", sub_headers: [
        { key: "1", text: "Всего" }]  },
    { key: "employee_utilization", text: "Коэффициент утилизации сотрудника" },
    { key: "work_status_start_time", text: "Время прихода на работу" },
    { key: "work_status_finish_time", text: "Время ухода с работы" },
    { key: "in_talk_count", text: "Всего вызовов", sub_headers: [
        { key: "call_count", text: "Всего" },
        { key: "in_call_count", text: "Вход" },
        { key: "out_call_count", text: "Исход" },]  },
    { key: "in_talk_count", text: "Общее время в разговоре", sub_headers: [
        { key: "sum_talk_duration", text: "Всего" },
        { key: "in_sum_talk_duration", text: "Вход" },
        { key: "out_sum_talk_duration", text: "Исход" },]  },
    { key: "in_talk_count", text: "Общее время дозвона", sub_headers: [
        { key: "sum_answer_duration", text: "Всего" },
        { key: "in_sum_answer_duration", text: "Вход" },
        { key: "out_sum_answer_duration", text: "Исход" },]  },
    { key: "in_talk_count", text: "Ср. время между вызовами", sub_headers: [
        { key: "in_avg_between_call_duration", text: "Вход" },
        { key: "out_avg_between_call_duration", text: "Исход" },] },
]