import './monitoring.css';

import { STREAMING, EMPLOYESS, MONITORING_TABLE } from '../structure';

import GroupList from './groupList/GroupList';
import MonitoringTable from './table/MonitoringTable';

export default function Monitoring(){
    const call_session_summary = {
        "success_count": 2, 
        "lost_count": 3, 
        "active_without_operator_count": 1, 
        "in_talk_count": 0, 
        "in_waiting_operator_answer_count": 0, 
        "waiting_operator_answer_duration_sum": 20, 
        "waiting_operator_answer_duration_count": 2, 
        "snapshot_timestamp": 1623239117.2553, 
        "in_waiting_transfer_count": 0
    }
    const employee_summary = {
        "available_count": 3, 
        "in_talk_count": 0, 
        "in_in_call_count": 0, 
        "in_out_call_count": 0, 
        "snapshot_timestamp": 1623229691.68026
    }
    const employee_state_list = [{"employee_id": 1819524, "employee_full_name": "Кравец Елена Валериевна", "group_id": null, "group_name": null, "status_id": 497849, "status_name": "Доступен", "phone_number": null, "in_status_since": "2021-06-07 19:39:55.085863", "line_number": null, "state_description": null, "in_state_since": null, "in_talk_since": null, "snapshot_timestamp": 1623229691.68252, "subscriber_number": null, "is_sip_online": false, "employee_last_talk_start_time": null, "employee_last_talk_finish_time": null}, {"employee_id": 1816578, "employee_full_name": "(bitrix24) Киселёв Виталий", "group_id": null, "group_name": null, "status_id": 497861, "status_name": "Нет на работе", "phone_number": null, "in_status_since": "2021-06-06 21:00:53.788295", "line_number": null, "state_description": null, "in_state_since": null, "in_talk_since": null, "snapshot_timestamp": 1623229691.68252, "subscriber_number": null, "is_sip_online": true, "employee_last_talk_start_time": null, "employee_last_talk_finish_time": null}, {"employee_id": 1467996, "employee_full_name": "Хусаинов Виталий Аскарович", "group_id": null, "group_name": null, "status_id": 497849, "status_name": "Доступен", "phone_number": null, "in_status_since": "2021-06-08 20:43:35.86967", "line_number": null, "state_description": null, "in_state_since": null, "in_talk_since": null, "snapshot_timestamp": 1623229691.68252, "subscriber_number": null, "is_sip_online": false, "employee_last_talk_start_time": null, "employee_last_talk_finish_time": null}, {"employee_id": 1830942, "employee_full_name": "(bitrix24) Сивоплясов Алексей Семенович", "group_id": null, "group_name": null, "status_id": 497855, "status_name": "Не беспокоить", "phone_number": null, "in_status_since": "2021-06-09 09:01:18.398778", "line_number": null, "state_description": null, "in_state_since": null, "in_talk_since": null, "snapshot_timestamp": 1623229691.68252, "subscriber_number": null, "is_sip_online": true, "employee_last_talk_start_time": null, "employee_last_talk_finish_time": null}, {"employee_id": 1792722, "employee_full_name": "(bitrix24) Дружков Дмитрий Евгеньевич", "group_id": null, "group_name": null, "status_id": 497855, "status_name": "Не беспокоить", "phone_number": null, "in_status_since": "2021-06-08 20:29:35.348398", "line_number": null, "state_description": null, "in_state_since": null, "in_talk_since": null, "snapshot_timestamp": 1623229691.68252, "subscriber_number": null, "is_sip_online": true, "employee_last_talk_start_time": null, "employee_last_talk_finish_time": null}, {"employee_id": 1384035, "employee_full_name": "Вагнер Роман Александрович", "group_id": null, "group_name": null, "status_id": 497849, "status_name": "Доступен", "phone_number": null, "in_status_since": "2021-06-09 09:05:24.95561", "line_number": null, "state_description": null, "in_state_since": null, "in_talk_since": null, "snapshot_timestamp": 1623229691.68252, "subscriber_number": null, "is_sip_online": true, "employee_last_talk_start_time": null, "employee_last_talk_finish_time": null}]
    return(
        <div className='monitoring'>
            <div className='monitoring_body'>
                <h1 className='monitoring_title'>Онлайн-мониторинг</h1>
                <div className='group_list_title'>Входящий поток</div>
                <div>
                    <GroupList structure={STREAMING} data={call_session_summary}/>
                </div>
                <hr/>
                <div>
                    <GroupList structure={EMPLOYESS} data={employee_summary}/>
                </div>
                <MonitoringTable data={employee_state_list} header={MONITORING_TABLE}/>
            </div>
        </div>
    )
}