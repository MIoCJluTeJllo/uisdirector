import { useEffect, useState } from 'react';
import './workload.css';
import moment from 'moment';
import PageTitle from './common/PageTitle';
import DatePicker from './common/DatePicker';
import Indicator from './common/Indicator';
import GroupList from './groupList/GroupList';
import Table from './table/Table';
import AverageTime from './workload/AverageTime';
import TotalTime from './workload/TotalTime';

import {TABLE_SHEME, TOTAL_TIME_SHEME, AVERAGE_TIME_SHEME} from './../scheme/workloadSheme';

import {PORT, URLS} from './../const';

export default function Workload(){
    const [employee_efficiency_and_workload, employee_efficiency_and_workload_SET] = useState({});
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        updateDate();
    }, [])
    const updateDate = (data={start: moment().format("Y-MM-DD"), end: moment().format("Y-MM-DD")}) => {
        setLoading(true);
        fetch(`http://localhost:${PORT}//${URLS.employee_efficiency_and_workload}`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            setLoading(false);
            employee_efficiency_and_workload_SET(result)
            if (result?.data) group(result.data)
        })
    }
    const group = (list) => {
        const uniqueList = list.map(item => item.employee_full_name).filter((item, index, self) => self.indexOf(item) == index)
        const groupList = uniqueList.map(value => {
            const groupItem = list.filter(item => item.employee_full_name == value);
            if (groupItem.length > 1){
                let keys = TABLE_SHEME.map(item => item.sub_headers ? item.sub_headers.map(sub_item => sub_item.key) : item.key).flat()
                keys = keys.filter(key => !['work_status_finish_time', 'work_status_start_time', 'employee_full_name'].includes(key))
                let sum = {...groupItem[0]};
                keys.map(key => {
                    sum[key] = groupItem.reduce((all, item) =>  all + item[key], 0);
                    return
                });
                sum.employee_utilization = Math.round(sum.employee_utilization/groupItem.reduce((sum, item) => item.employee_utilization != null ? sum + 1 : sum, 0));
                sum.in_avg_between_call_duration = Math.round(sum.in_avg_between_call_duration/groupItem.reduce((sum, item) => item.in_avg_between_call_duration != null ? sum + 1 : sum, 0));
                sum.out_avg_between_call_duration = Math.round(sum.out_avg_between_call_duration/groupItem.reduce((sum, item) => item.out_avg_between_call_duration != null ? sum + 1 : sum, 0));
                
                sum.work_status_finish_time = sum.work_status_start_time = "";
                groupItem.map(item => item.employee_full_name = moment(item.day).format('DD.MM.Y'));
                return {first: sum, other: groupItem}
            }
            return {first: groupItem[0], other: []}
        })
        setData(groupList);
    }
    return (
        <div className='workload'>
            <DatePicker onSelect={updateDate}/>
            <PageTitle text={'Загруженность сотрудников'}/>
            <GroupList items={
                [
                    {
                        text: "Среднее время в рабочих статусах", 
                        form: <AverageTime data={employee_efficiency_and_workload.total} structure={AVERAGE_TIME_SHEME}/>
                    },
                    {
                        text: "Общее время в разговоре", 
                        form: <TotalTime data={employee_efficiency_and_workload.total} structure={TOTAL_TIME_SHEME}/>
                    },
                ]
            }/>
            <div className='indicator'>
                <Indicator loading={loading}/>
            </div>
            <Table data={data ? data : []} headers={TABLE_SHEME} accordion={true}/>
        </div>
    );
}