import { Container, Table, Button } from 'react-bootstrap';


export default function FarmerDashboard({ orders }) {
return (
<Container className="my-4">
<h3>Farmer Dashboard</h3>
<Table responsive striped bordered hover>
<thead>
<tr>
<th>Order ID</th>
<th>Customer</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{orders.map(o => (
<tr key={o._id}>
<td>{o._id}</td>
<td>{o.userName}</td>
<td>{o.status}</td>
<td><Button size="sm">Update</Button></td>
</tr>
))}
</tbody>
</Table>
</Container>
);
}
