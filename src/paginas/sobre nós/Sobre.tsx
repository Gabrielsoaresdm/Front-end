import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import "./Sobre.css"


function Sobre(){
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={12}>
                    <div>
                        <h1 className="text-aling-center">O que nos motiva?</h1>
                    </div>                       
                </Grid>
                <Grid alignItems="center" item xs={12}>
                    <div>
                        <p className="text-aling-center">Lorem ipsum, dolor sit amet consectetur adipisicing 
                        elit. Vero esse atque libero deleniti cumque nesciunt? Vero magnam, soluta autem velit 
                        illo iusto sequi, ea in aliquid deserunt debitis repellat mollitia! Lorem ipsum dolor 
                        sit amet consectetur adipisicing elit. Magni aperiam odit, ea nemo deserunt rem odio 
                        ipsum ducimus at est voluptatem, voluptate eum adipisci cumque! Facilis culpa esse id earum?</p>

                    </div>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://fasig.com.br/wp-content/uploads/2020/07/trabalho-voluntario-na-area-da-saude-por-que-nao.webp" alt="" width={550} />
                </Grid>
                <Grid item xs={6}>
                    <p className="text-aling-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione et accusamus qui soluta hic voluptates necessitatibus debitis totam assumenda, adipisci placeat est tempore nulla earum modi delectus in ipsam? Ex.</p>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={4}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione et accusamus qui soluta hic voluptates necessitatibus debitis totam assumenda, adipisci placeat est tempore nulla earum modi delectus in ipsam? Ex.</p>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={6}>
                    <img src="https://www.napratica.org.br/wp-content/uploads/2016/01/trabalho-voluntario.jpg" alt="" width={550} />
                </Grid>
                
            </Grid>
        </>
    );
}

export default Sobre;