import { Box, Button, FormHelperText, Grid, Select, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useLocalStorage from "react-use-localstorage";
import ModalProduto from "../../components/postagens/modalPostagem/ModalPostagem";
import { addToken } from "../../store/tokens/actions";
import { TokenState } from "../../store/tokens/tokensReducer";
import './Doacoes.css'

function Doacoes() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let navigate = useNavigate();
    const dispatch = useDispatch();
    
    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }
    return (

        <>
            <div>
                <h1>Doações:</h1>
            </div>
            <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalProduto />
                        </Box>
                        <Link to="/produtos" className="text-decorator-none">
                            <Button variant="outlined" className='botao'>Ver doações</Button>
                        </Link>
                    </Box>

                    <Link to="/formularioCategoria" className="text-decorator-none">
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        cadastrar Categoria
                    </Typography>
                </Box>
                </Link>

                <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box>

            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Box>
                        <h1 className="text-align-center">Produtos disponiveis</h1>
                    </Box>
                    <Box className="box1">
                        <img className="img2" src="https://images.tcdn.com.br/img/img_prod/1011547/cadeira_de_rodas_aco_90kg_1009_pneu_macico_ref_1632_jaguaribe_3399_1_bb2bf5fa0157777258d7f50b1bc439ce.jpg" alt="" width={150} />
                        <p className="text-aling-center">cadeira</p>
                        <p>Localização: Barra da Tijuca, rj</p>
                    </Box>
                    <Box className="box1">
                        <img className="img2" src="https://images.tcdn.com.br/img/img_prod/1011547/cadeira_de_rodas_aco_90kg_1009_pneu_macico_ref_1632_jaguaribe_3399_1_bb2bf5fa0157777258d7f50b1bc439ce.jpg" alt="" width={150} />
                        <p className="text-aling-center">cadeira</p>
                    </Box>
                    <Box className="box1">
                        <img className="img2" src="https://images.tcdn.com.br/img/img_prod/1011547/cadeira_de_rodas_aco_90kg_1009_pneu_macico_ref_1632_jaguaribe_3399_1_bb2bf5fa0157777258d7f50b1bc439ce.jpg" alt="" width={150} />
                        <p className="text-aling-center">cadeira</p>
                    </Box>
                    <Box className="box1">
                        <img className="img2" src="https://images.tcdn.com.br/img/img_prod/1011547/cadeira_de_rodas_aco_90kg_1009_pneu_macico_ref_1632_jaguaribe_3399_1_bb2bf5fa0157777258d7f50b1bc439ce.jpg" alt="" width={150} />
                        <p className="text-aling-center">cadeira</p>
                    </Box>
                </Grid>
            </Grid>


        </>


    )
}

export default Doacoes;