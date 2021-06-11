import './monitoring.css';

import { STREAMING, EMPLOYESS, MONITORING_TABLE } from '../structure';

import PageTitle from './common/PageTitle';
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
    const employee_state_list = [{"employee_id": 1384035, "employee_full_name": "Вагнер Роман Александрович", "group_id": null, "group_name": null, "status_id": 497849, "status_name": "Доступен", "phone_number": "050392", "in_status_since": "2021-06-10 16:26:54.235034", "line_number": 1, "state_description": "В разговоре", "in_state_since": "2021-06-10 16:44:35.313", "in_talk_since": "2021-06-10 16:44:59.066358", "snapshot_timestamp": 1623343612.84407, "subscriber_number": "79652106785", "is_sip_online": true, "employee_last_talk_start_time": "2021-06-10 16:44:59.066358", "employee_last_talk_finish_time": null}, {"employee_id": 1467996, "employee_full_name": "Хусаинов Виталий Аскарович", "group_id": null, "group_name": null, "status_id": 497855, "status_name": "Не беспокоить", "phone_number": null, "in_status_since": "2021-06-10 15:43:51.511795", "line_number": null, "state_description": null, "in_state_since": null, "in_talk_since": null, "snapshot_timestamp": 1623343612.84407, "subscriber_number": null, "is_sip_online": true, "employee_last_talk_start_time": "2021-06-10 15:38:47.438981", "employee_last_talk_finish_time": "2021-06-10 15:39:42.5775"}, {"employee_id": 1819524, "employee_full_name": "Кравец Елена Валериевна", "group_id": null, "group_name": null, "status_id": 497849, "status_name": "Доступен", "phone_number": null, "in_status_since": "2021-06-10 15:34:54.646658", "line_number": null, "state_description": null, "in_state_since": null, "in_talk_since": null, "snapshot_timestamp": 1623343612.84407, "subscriber_number": null, "is_sip_online": true, "employee_last_talk_start_time": "2021-06-10 16:29:34.356726", "employee_last_talk_finish_time": "2021-06-10 16:31:53.637454"}, {"employee_id": 1816578, "employee_full_name": "(bitrix24) Киселёв Виталий", "group_id": null, "group_name": null, "status_id": 497852, "status_name": "Перерыв", "phone_number": null, "in_status_since": "2021-06-10 16:43:41.926661", "line_number": null, "state_description": null, "in_state_since": null, "in_talk_since": null, "snapshot_timestamp": 1623343612.84407, "subscriber_number": null, "is_sip_online": true, "employee_last_talk_start_time": "2021-06-10 16:37:30.948086", "employee_last_talk_finish_time": "2021-06-10 16:43:36.962812"}, {"employee_id": 1830942, "employee_full_name": "(bitrix24) Сивоплясов Алексей Семенович", "group_id": null, "group_name": null, "status_id": 497861, "status_name": "Нет на работе", "phone_number": null, "in_status_since": "2021-06-09 21:01:34.830674", "line_number": null, "state_description": null, "in_state_since": null, "in_talk_since": null, "snapshot_timestamp": 1623343612.84407, "subscriber_number": null, "is_sip_online": false, "employee_last_talk_start_time": null, "employee_last_talk_finish_time": null}, {"employee_id": 1792722, "employee_full_name": "(bitrix24) Дружков Дмитрий Евгеньевич", "group_id": null, "group_name": null, "status_id": 497849, "status_name": "Доступен", "phone_number": null, "in_status_since": "2021-06-10 10:30:02.610965", "line_number": null, "state_description": null, "in_state_since": null, "in_talk_since": null, "snapshot_timestamp": 1623343612.84407, "subscriber_number": null, "is_sip_online": false, "employee_last_talk_start_time": "2021-06-10 10:31:29.26958", "employee_last_talk_finish_time": "2021-06-10 10:36:58.012623"}];
    return(
        <div className='monitoring'>
            <div className='monitoring_body'>
                <PageTitle text={'Онлайн-мониторинг'}/>
                <div className='group_list_title'>Входящий поток</div>
                <div>
                    <GroupList style={{gridTemplateColumns: "repeat(4,25%)"}} structure={STREAMING} data={call_session_summary}/>
                </div>
                <hr/>
                <div>
                    <GroupList style={{gridTemplateColumns: "repeat(4,25%)"}} structure={EMPLOYESS} data={employee_summary}/>
                </div>
                <MonitoringTable data={employee_state_list} headers={MONITORING_TABLE}/>
            </div>
        </div>
    )
}