import { useEffect, useState } from 'react';
import './monitoring.css';

import {EMPLOYESS_SHEME, STREAMING_SHEME, TABLE_SHEME} from '../scheme/monitoringSheme';

import PageTitle from './common/PageTitle';
import GroupList from './groupList/GroupList';
import Table from './table/Table';
import NumberCell from './monitoring/NumberCell';

import {PORT, URLS} from './../const';

export default function Monitoring(){
    const [employee_state_list, employee_state_list_SET] = useState([]);
    const [employee_summary, employee_summary_SET] = useState([]);
    const [call_session_summary, call_session_summary_SET] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:${PORT}//${URLS.call_session_summary}`)
        .then(response => response.json())
        .then(result => call_session_summary_SET(result))
        fetch(`http://localhost:${PORT}//${URLS.employee_summary}`)
        .then(response => response.json())
        .then(result => employee_summary_SET(result))
        fetch(`http://localhost:${PORT}//${URLS.employee_state_list}`)
        .then(response => response.json())
        .then(result => employee_state_list_SET(result))
    }, [])
    return(
        <div className='monitoring'>
            <PageTitle text={'Онлайн-мониторинг'}/>
            <div className='group_list_title'>Входящий поток</div>
            <GroupList items={STREAMING_SHEME.map(data => ({...data, 
                form: <NumberCell 
                    color={data.color} 
                    text={data.prepare ? 
                        data.prepare.func(data.prepare.keys.map(key => call_session_summary[key])) : call_session_summary[data.key]}/>}))}/>
            <hr/>
            <div className='group_list_title'>Сотрудники</div>
            <GroupList items={EMPLOYESS_SHEME.map(data => ({...data, form: <NumberCell text={employee_summary[data.key]}/>}))}/>
            <Table data={employee_state_list} headers={TABLE_SHEME}/>
        </div>
    )
}