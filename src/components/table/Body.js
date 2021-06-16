import Row from './Row';
import {Accordion} from 'react-bootstrap';
import moment from 'moment';

export default function Body({data=[], structure, accordion}){
    return(
        <div>
            {accordion ?
                (data.map((items, index) => (
                    <Accordion key={new Date().getTime() + index} style={{display: 'flex', flexDirection: 'column'}}>
                        <Accordion.Toggle eventKey="0" style={{flex: 1}}>
                            <Row employee={items.first} structure={structure}/>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <div>{items.other.map((item, index) => <div><Row key={new Date().getTime() + index} employee={item} structure={structure}/></div>)}</div>        
                        </Accordion.Collapse>
                    </Accordion>
                ))):
                (data.map((item, index) => <Row key={new Date().getTime() + index} employee={item} structure={structure}/>))
            }
        </div>
    )
}
