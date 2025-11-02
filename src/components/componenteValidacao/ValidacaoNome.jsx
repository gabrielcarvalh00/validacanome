import React, { useState, useEffect } from 'react';
import * as yup from 'yup';

// criando um objeto "yupSchema" do yup
const yupSchema = yup.object().shape({
    nome: yup // mostra abaixo quais regras a variavel input/nome vai usar
        .string() //indica que o valor esperado e do tipo string
        .required('Nome obrigatório!') //camppo nao pode ser vazio
        .matches(/^[^0-9]+$/, 'Não pode ter números.') // o campo nao pode ser nulo
});

function ValidaNomeResumido() {
    //instanciando variavel e funcao no useState
    const [nome, setNome] = useState('');
    const [erro, setErro] = useState('');
   
    // Assiste ao 'nome' e valida a cada mudança
    useEffect(() => {
        setErro(''); // Limpa o erro ao iniciar a validação

        yupSchema //funcao declarada na linha 6
            .validate({ nome }, { abortEarly: true }) // Valida o objeto { nome: ... }
            .catch(error => {
                 // Captura e exibe o erro se a validação falhar
                 if (error instanceof yup.ValidationError) {
                     setErro(error.errors[0]);
                 }
            });
    }, [nome]); //array de dependencia, fica observandop se ela muda para executar o useEffect

    return (
        <div>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)} //cada vez que ha modificacao, setNome é chamado, e passa o valor de value para nome
            />
          <p>{erro}</p>
      </div>
    );
}

export default ValidaNomeResumido;