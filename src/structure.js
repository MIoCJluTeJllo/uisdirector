export const STREAMING = [
    { key: "success_count", text: "Принятые", color: "rgb(6, 153, 79)" },
    { key: "lost_count", text: "Необработанные", color: "rgb(224, 60, 0)" },
    { key: "1", text: "Среднее время ожидания ответа" },
    { key: "", text: "" },
    { key: "active_without_operator_count", text: "На входе в систему"},
    { key: "in_waiting_operator_answer_count", text: "Ожидают ответа" },
    { key: "in_talk_count", text: "В разговоре" },
    { key: "in_waiting_transfer_count", text: "Ожидают перевода" },
]

export const EMPLOYESS = [
    { key: "available_count", text: "Свободные" },
    { key: "in_talk_count", text: "В разговоре" },
    { key: "in_in_call_count", text: "На входящем" },
    { key: "in_out_call_count", text: "На исходящем" },
]

const MONITORING_PREPARE_FUNC = {
    STANDARD_TIME: (text) => new Date(text).toLocaleTimeString('en-GB'),
    FROM_CURRENT_TIME: (text) => new Date(text).toLocaleTimeString('en-GB'),
}

export const MONITORING_TABLE = [
    { key: "employee_full_name", text: "Сотрудник" },
    { key: "in_talk_count", text: "Группа" },
    { key: "status_name", text: "Статус" },
    { key: "1", text: "Время в статусе" },//текущее минус статус изменен
    { key: "in_status_since", text: "Статус изменён", format: MONITORING_PREPARE_FUNC.STANDARD_TIME },
    { key: "employee_last_talk_finish_time", text: "Время посл. разговора", format: MONITORING_PREPARE_FUNC.STANDARD_TIME }, //в разговоре или время
    { key: "line_number", text: "Линия" },
    { key: "state_description", text: "Состояние" },
    { key: "subscriber_number", text: "Номер абонента" },
    { key: "in_state_since", text: "Начало сессии", format: MONITORING_PREPARE_FUNC.STANDARD_TIME },
    { key: "2", text: "Время сессии" },
    { key: "3", text: "Время в разговоре" },//текущее время - employee_last_talk_start_time
]

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
        { key: "1", text: "Всего" },
        { key: "2", text: "Вход" },
        { key: "3", text: "Исход" },]  },
    { key: "in_talk_count", text: "Общее время дозвона", sub_headers: [
        { key: "1", text: "Всего" },
        { key: "2", text: "Вход" },
        { key: "3", text: "Исход" },]  },
    { key: "in_talk_count", text: "Ср. время между вызовами", sub_headers: [
        { key: "2", text: "Вход" },
        { key: "3", text: "Исход" },] },
]

export const WORKLOAD_AVERAGE_TIME = [
    { key: "avg_status_497849_duration", text: "Доступен", color: "success" },
    { key: "avg_status_497855_duration", text: "Не беспокоить", color: "danger" },
    { key: "avg_status_497852_duration", text: "Перерыв", color: "info" },
]

export const WORKLOAD_TOTAL_TIME = [
    { key: "in_sum_talk_duration", text: "Входящие", color: " rgb(17, 121, 173)" },
    { key: "out_sum_talk_duration", text: "Исходящие", color: "rgb(72, 184, 130)" },
]