import { Box, Button, FormHelperText, Grid, Select, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import './Doacoes.css'

function Doacoes() {
    return (

        <>
            <div>
                <h1>Doações:</h1>
            </div>
            <Link to="/formularioPostagem" className="text-decorator-none">
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        <button>Cadastrar Produtos</button>
                    </Typography>
                </Box>
            </Link>

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