import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const CandidatoForm = ({ candidato, setCandidato, handleSubmit, isEdit }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCandidato({ ...candidato, [name]: value });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nome Completo</Form.Label>
                        <Form.Control type="text" name="nomecompleto" value={candidato.nomecompleto || ''} onChange={handleChange} required />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" name="cpf" value={candidato.cpf || ''} onChange={handleChange} required disabled={isEdit}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={candidato.email || ''} onChange={handleChange} required disabled={isEdit} />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="text" name="telefone" value={candidato.telefone || ''} onChange={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control type="date" name="dataNascimento" value={candidato.dataNascimento || ''} onChange={handleChange} required />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Celular</Form.Label>
                        <Form.Control type="text" name="celular" value={candidato.celular || ''} onChange={handleChange} required />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control type="text" name="cep" value={candidato.cep || ''} onChange={handleChange} required />
                    </Form.Group>
                </Col>
                <Col md={8}>
                    <Form.Group className="mb-3">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control type="text" name="endereco" value={candidato.endereco || ''} onChange={handleChange} required />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Número</Form.Label>
                        <Form.Control type="text" name="numero" value={candidato.numero || ''} onChange={handleChange} required />
                    </Form.Group>
                </Col>
                <Col md={8}>
                    <Form.Group className="mb-3">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control type="text" name="complemento" value={candidato.complemento || ''} onChange={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control type="text" name="bairro" value={candidato.bairro || ''} onChange={handleChange} required />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control type="text" name="cidade" value={candidato.cidade || ''} onChange={handleChange} required />
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group className="mb-3">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control type="text" name="estado" value={candidato.estado || ''} onChange={handleChange} required />
                    </Form.Group>
                </Col>
            </Row>
            <Button type="submit">Salvar</Button>
        </Form>
    );
};

export default CandidatoForm;