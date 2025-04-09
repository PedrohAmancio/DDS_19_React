import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const Login = () => {
  return (
    <div className=" mt-3 w-50 mx-auto" >
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Digite seu email..." />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Lembrar" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Entrar
      </Button>
    </Form>
    
      <Alert variant="danger">
        você foi hackeado pelo ANTETEIGMON
        </Alert>
    </div>
  )
}

export default Login