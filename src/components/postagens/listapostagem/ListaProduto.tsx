import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListaProduto.css';
import useLocalStorage from 'react-use-localstorage';
import {useNavigate, useParams } from 'react-router-dom'
import { busca } from '../../../service/service';
import Produto from '../../../models/Produto';

function ListaProduto() {
  const [prod, setProd] = useState<Produto[]>([])
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      navigate("/login")

    }
  }, [token])

  async function getProd() {
    await busca("/produto", setProd, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getProd()

  }, [prod.length])

  return (
    <>
      {
        prod.map(prod => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  
                </Typography>
                <Typography variant="h5" component="h2">
                  {prod.nome}
                </Typography>
                <Typography variant="body2" component="p">
                  {prod.email}
                </Typography>
                <Typography variant="body2" component="p">
                  {prod.contato}
                </Typography>
                <Typography variant="body2" component="p">
                  {prod.foto}
                </Typography>
                <Typography variant="body2" component="p">
                  {prod.categoria?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${prod.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletar/${prod.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListaProduto;