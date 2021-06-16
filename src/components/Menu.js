import {Nav} from 'react-bootstrap';

export default function Menu({location}){
    return (
        <Nav activeKey={location.pathname} variant="pills">
            <Nav.Item>
                <Nav.Link href="/">Онлайн-мониторинг</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/workload">Загруженность сотрудников</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}