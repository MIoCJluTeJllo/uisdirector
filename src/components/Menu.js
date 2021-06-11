import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Menu(){
    return (
        <Nav variant="pills" defaultActiveKey="1">
            <Nav.Item>
                <Nav.Link eventKey="1" as={Link} to="/monitoring">Онлайн-мониторинг</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2" as={Link} to="/workload">Загруженность сотрудников</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}