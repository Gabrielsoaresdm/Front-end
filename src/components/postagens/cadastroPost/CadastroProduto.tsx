import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroProduto.css';
import {useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../service/service';
import Categoria from '../../../models/Categoria';


function CadastroProduto() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    const [categoria, setCategoria] = useState<Categoria>(
        {
            id: 0,
            descricao: ''
        })
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        email: '',
        contato: '',
        foto: ''
    })

    useEffect(() => { 
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categoria", setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produto  /${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/produto`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto atualizado com sucesso');
        } else {
            post(`/produto`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto cadastrado com sucesso');
        }
        back()

    }

    function back() {
        navigate('/produtos')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <Typography className='cadastro' variant="h3" color="textSecondary" component="h1" align="center" >Cadastrar doação</Typography>
            <form onSubmit={onSubmit}>
                
                <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth />
                <TextField value={produto.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="email" label="E-mail" variant="outlined" name="email" margin="normal" fullWidth />
                <TextField value={produto.contato} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="contato" label=" " variant="outlined" name="contato" margin="normal" fullWidth />
                <TextField value={produto.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="foto" label="foto" name="foto" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                   
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroProduto;