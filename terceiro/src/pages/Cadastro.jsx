import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const Cadastro = () => {
  return (
    <div>
      <h1>Cadastro</h1>
      {/* caixinha de nome  */}
      <FloatingLabel
       
       controlId="floatingInputNome"
       label="Nome"
       className="mb-3"
     >
       <Form.Control size="lg" 
       type="text" 
       placeholder="" />
     </FloatingLabel>
       
       <FloatingLabel
       
        controlId="floatingInputEmail"
        label="Email"
        className="mb-3"
      >
        <Form.Control size="lg" 
        type="email" 
        placeholder="" />
      </FloatingLabel>
      {/* caixinha de email */}
      <FloatingLabel 
      controlId="floatingPassword" 
      label="Senha"
      className="mb-3"
      >
        <Form.Control size="lg" 
        type="password" 
        placeholder="" />
      </FloatingLabel>
      {/* caixinha de arquivo */}
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Envie uma imagem</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      {/* caixinha de select */}
      <Form.Select size="lg">
      <option>Tipo de usuario</option>
      <option value="Administrador">Administrador</option>
      <option value="Funcionario">Funcionario</option>
      <option value="Gerente">Gerente</option>
    </Form.Select>
    </div>
  );
};

export default Cadastro;
