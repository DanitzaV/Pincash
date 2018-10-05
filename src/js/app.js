// Timeout de la cortina
setTimeout(function() {
    const courtainContainer = document.getElementById('courtainContainer');
    courtainContainer.style.visibility = 'hidden';
    courtainContainer.style.opacity = '0';
}, 1000);

// Diseño de la cortina
courtainContainer.innerHTML =
    `
<div class="row">
  <div class="col-12 text-center">
    <img class="whiteLogo topRow animated bounceInDown text-center" src="./src/img/logoblanco.png" alt="Logo">
  </div>
</div>
<div class="row">
  <div class="col-12 mt-3">
    <h1 class="titleWelcome animated bounceInUp text-center">PINCASH</h1>
  </div>
</div>
`;

// Página del login
login.innerHTML = `
<div class="row">
  <div class="col-12 text-center">
    <img class="logocolor topRow" src="./src/img/logocolor.png" alt="Logo">
  </div>
</div>
<div class="row">
  <div class="col-12 mt-3">
    <h1 class="titleLogin text-center">PINCASH</h1>
  </div>
</div>
<div class="row">
    <div class="col-12 text-center">
        <p class="noAcc">¿No tienes cuenta?</p>
        <button type="button" class="btn regist mb-1" data-toggle="modal" data-target="#signUp">Regístrate</button>
        <div class="modal fade" id="signUp" tabindex="-1" role="dialog" aria-labelledby="signUpLabel" aria-hidden="true">
            <div class="modal-dialog intro" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="signUpLabel">Ingresa tus datos</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="signUpEmail">Correo Electrónico</label>
                                <input type="email" class="form-control" id="signUpEmail" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="signUpPassword">Contraseña</label>
                                <input type="password" class="form-control" id="signUpPassword" placeholder="Password">
                            </div>
                            <small class="form-text text-muted" id="conditions">Registrándote, automáticamente aceptas los <a onclick="terms()" data-dismiss="modal">Términos y condiciones.</a></small>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-enter" onclick="signUp()" data-dismiss="modal">Registrar</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <button type="button" class="btn mailLogin" data-toggle="modal" data-target="#signIn">COMIENZA</button>
                <div class="modal fade" id="signIn" tabindex="-1" role="dialog" aria-labelledby="signInLabel" aria-hidden="true">
                    <div class="modal-dialog intro" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="signInLabel">Ingresa tus datos</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="signInEmail">Correo Electrónico</label>
                                        <input type="email" class="form-control" id="signInEmail" aria-describedby="emailHelp" placeholder="Enter email">
                                    </div>
                                    <div class="form-group">
                                        <label for="signInPassword">Contraseña</label>
                                        <input type="password" class="form-control" id="signInPassword" placeholder="Password">
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-enter" onclick="signIn()" data-dismiss="modal">Entrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-12">
                <p class="option mt-2">o ingresa con</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <button type="button" class="btn fbBtn" onclick="loginFacebook()">Facebook</button>
                <button type="button" class="btn googleBtn" onclick="loginGoogle()">Google</button>
            </div>
        </div>
    </div>
</div>
`;
// Términos y condiciones
terms.innerHTML = `
        <div class="container-fluid transition p-0">
        <div class="row cash">
            <div class="col-12 text-center">
            <h5 class="text-center mt-5 ml-3 mr-3">¡Bienvenido!</h5>
            <p class="terms text-justify mt-3 ml-3 mr-3 mb-3">
            Estás a punto de unirte a la primera a la primer red de cajeros y locales comerciales con efectivo en Chile, Pincash es 50% generado por nosotros y el otro 50% por los usuarios. Necesitamos de su colaboración para poder ayudarse mutuamente en mejorar los servicios prestados por los bancos y entidades comerciales.
            <br>
            <br>
            Al hacer clic en "Aceptar", confirmas que:
            <br>
            <br>
            1. Ha leído y está de acuerdo con los 'Términos de uso' http://www.pincash.cl/legal/ y 'Política de privacidad' http://www.pincash.cl/legal/privacy/ (la " Acuerdos "). El uso del Servicio está sujeto a los Acuerdos e indica su consentimiento a ellos. Este resumen no pretende sustituirlos. Está destinado únicamente para fines de conveniencia.
            <br>
            <br>
            2. LOS DATOS DE UBICACIÓN PUEDEN NO SER EXACTOS.
            <br>
            <br>
            3. Usted acepta que Pincash reciba desde su dispositivo móvil información detallada sobre la ubicación y la ruta, por ejemplo, en forma de señales de GPS y otra información. Pincash utiliza esta información para ofrecerle el Servicio, para mejorar la calidad del Servicio que ofrece a usted y para todos sus usuarios, y para mejorar la precisión de sus datos de mapeo y navegación. En particular, Pincash utiliza esta ubicación para poder ayudarle a mejorar su ruta y encontrar mejores alternativas para elegir el lugar más cercano a los usuarios y alternativas más rápidas para llegar a su destino.La configuración de registro permite que pueda el usuario acceder acceder a ciertas funciones de los Servicios (por ejemplo, edición de mapas, clasificación, etc, deberá configurar un nombre de usuario.
            <br>
            <br>
            4. Por la presente, usted confirma que posee todos los derechos exclusivos sobre cualquier dato y contenido (el "Contenido") que proporcione al Servicio y puede asignar dichos derechos a la licencia. Usted conserva todos los títulos y derechos del Contenido, pero le otorga a Pincash, Inc. (la "Compañía") una licencia mundial, gratuita, no exclusiva, irrevocable, sublicimible, transferible y perpetua para usar, copiar, distribuir, crear trabajos derivados de, mostrar públicamente, realizar públicamente y explotar de cualquier otra manera el Contenido. Sujeto a lo mencionado anteriormente, la Compañía conserva los títulos y todos los derechos de la base de datos del Servicio que puede utilizar únicamente para fines no comerciales y privados.
            <br>
            <br>
            5. El servicio Pincash se ofrece de forma gratuita, con la esperanza de que lo encuentre útil. Sin embargo, Pincash o sus empleados, directores, accionistas, asesores o cualquier persona en su nombre no serán responsables ante usted o ante un tercero, por cualquier motivo, como resultado del uso del producto o Servicio de la Compañía. Por la presente, libera irrevocablemente todo lo anterior de cualquier responsabilidad de cualquier tipo, por cualquier consecuencia que surja del uso del Cliente o del Servicio, incluyendo cualquier pérdida, pérdida de beneficios, daños a la reputación, honorarios, gastos o daños, directos o indirectos, financieros o no financieros.
            <br>  
            <br>      
            6. Pincash utiliza el mapa de Here,  y su api places para saber la ubicación de locales comerciales y cajeros automáticos alrededor de su ubicación.
            </p>
            <button type="button" class="btn btn-back mb-5" onclick="login()">Volver</button>
            </div>
        </div>
    </div>
`;

terms = () => {
    login.style.display = 'none';
    start.style.display = 'none';
    terms.style.display = 'block';
}

login = () => {
    login.style.display = 'block';
    start.style.display = 'none';
    terms.style.display = 'none';
}

// Página mapa
// start.innerHTML = `
// <div class="row cash">
//   <div class="col-2 p-0">
//     <i class="fas fa-bell"></i>
//   </div>
//   <div class="col-10">
//     <p class="firstTitle p-4 m-0">LUGARES CON EFECTIVO</p>
//   </div>
// </div>
// <div class="row">
//   <div class="col-12">
//     <div id="mapa"></div>
//   </div>
// </div>
// <div class="row" id="footer">
//   <div class="col-12 text-center">
//     <button type="button" class="btn btn-footer p-4" onclick="logOut()">Salir</button>
//   </div>
// </div>
// `;