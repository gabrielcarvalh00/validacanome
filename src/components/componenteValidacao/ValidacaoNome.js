import React, { useState, useEffect } from 'react';
import * as yup from 'yup';

// ESQUEMA DE VALIDAÇÃO (Regras: Obrigatório e Sem Números)
const yupSchema = yup.object().shape({
    nome: yup
        .string()
        .required('Nome obrigatório!') 
        .matches(/^[^0-9]+$/, 'Não pode ter números.')
});

function ValidaNomeResumido() {
    
    const [nome, setNome] = useState('');
    const [erro, setErro] = useState('');
    
    // Assiste ao 'nome' e valida a cada mudança
    useEffect(() => {
        setErro(''); // Limpa o erro ao iniciar a validação

        yupSchema
            .validate({ nome }, { abortEarly: true }) // Valida o objeto { nome: ... }
            .catch(error => {
                 // Captura e exibe o erro se a validação falhar
                 if (error instanceof yup.ValidationError) {
                     setErro(error.errors[0]);
                 }
            });
    }, [nome]); // Executa sempre que o estado 'nome' mudar

    return (
        <div>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)} // Atualiza o estado 'nome'
            />
          <p>{erro}</p>
      </div>
    );
}

export default ValidaNomeResumido;