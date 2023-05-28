'use client'
import '../globals.css' 
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Cadastro() {

    const route = useRouter();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [num_inscricao, setNum_inscricao] = useState();


    const cadastrar = (e) => {
        e.preventDefault()
        const aluno = {
            nome: nome,
            curso: curso,
            num_inscricao: num_inscricao
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3003/alunos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }
    return (
        <div className='LoginBox'>
            <div className='LoginContainer'>
            <h1 >Cadastro de Alunos</h1>
            <form className='LoginForm' action='' onSubmit={cadastrar}>

                <input className='LoginInput' placeholder='Nome do Aluno' nome="nome" type="text"
                    onChange={e => setNome(e.target.value)}></input>
                <span className='LoginSpam'></span>

                <input className='LoginInput' placeholder='Informe o Curso' nome="curso" type="text"
                    onChange={e => setCurso(e.target.value)}></input>
                <span className='LoginSpam'></span>


                <input className='LoginInput' placeholder='Informe a Inscrição' nome="num_inscricao" type="number"
                    onChange={e => setNum_inscricao(e.target.value)}></input>
                <span className='LoginSpam'></span>

                <button className='LoginBotaoCadastrar' type='submit'>Cadastrar</button>
                
                <a className='LoginAhref' href='/'>Voltar</a>
            </form>
            </div>
        </div>

    );

}


//  const alunoJson = JSON.stringify(aluno);
//  essa linha de código serve para transformar o aluno - que é uma string; stringify - em um JSON
