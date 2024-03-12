import React from "react";
import '../imgs/Usac_logo.png';
import '../css/PaginaP.css';


const PaginaP = () => {
    return(
        <div>        
            <div className="container_fondo">
                <div className="container center">
                    <div className="container fondo">
                        <h1 id="titulo">UNIVERSIDAD DE SAN CARLOS DE GUATEMALA</h1>
                        <h2 id="facultad">FACULTAD DE INGENIERIA</h2>

                        <h3 id="parrafoIn">¡Bienvenido a nuestro sitio web dedicado a ayudarte a tomar decisiones informadas sobre los catedráticos en la Universidad de San Carlos de Guatemala!</h3>

                        <p className="parrafoInicio">
                        Nuestro objetivo es proporcionarte información detallada y objetiva sobre la calidad de la enseñanza, la accesibilidad, la claridad en la presentación de los contenidos, y otros aspectos importantes que influyen en tu elección de catedrático. Además, puedes contribuir a la comunidad compartiendo tus propias experiencias para ayudar a otros estudiantes en su búsqueda.

                        Recuerda que la calidad de la educación es un factor crucial en tu desarrollo académico, y estamos aquí para facilitarte el proceso de elegir a los catedráticos que mejor se adapten a tus necesidades y metas educativas.

                        ¡Explora, comparte y toma decisiones informadas para tener una experiencia universitaria excepcional en la Universidad de San Carlos de Guatemala!</p>
                    </div>
                </div>
            </div>
        </div>
           

    );
}

export default PaginaP;