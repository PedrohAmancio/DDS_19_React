import Table from 'react-bootstrap/Table';

const Sobre = () => {
  return (
    <div>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Senha</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
};

export default Sobre;
