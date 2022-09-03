
// app para averiguar precios de perifericos acorde al presupuesto del cliente

let MenuPrincipal = true
do {
    let MensajeBienvenida = parseInt(prompt(`Bienvenido! Que quieres comprar? Ingrese "1" o "2"
1. Auriculares
2. Teclados`))
//Funcion para aquellos que buscan Auriculares
function PresupuestoAuriculares () {
let VerPrecios = true
do {
let precioAuris = parseInt(prompt(`Que presupuesto tienes para comprar tus auriculares?
Ingresar valor desde $2.800 a $10.000 sin simbolos`))
    if(precioAuris < 2800) {
        alert(`Valor invalido! Ingrese valor desde $2.800 a $10.000 sin simbolos`) 
        }else if (precioAuris == 2800) {
            alert(`Te puede interesar:
        1. Auriculares gamer Kotion Each G9000 $2800
    
        Contactate con nosotros al +1233456778655
        `)
        }else if (precioAuris <= 3500) {
            alert(`Te pueden interesar:
        1. Auriculares gamer Kotion Each G9000 $2800
        2. Auriculares gamer Redragon Ares $3.231

        Contactate con nosotros al +1233456778655
        `)
            }else if (precioAuris <= 5000) {
                alert(`Te pueden interesar:
            2. Auriculares gamer Redragon Ares $3.231
            3. Auriculares Logitech H151 $4000
            4. Auriculares gamer Onikuma K5 $4990

            Contactate con nosotros al +1233456778655
            `)
                }else if (precioAuris <= 8000) {
                    alert(`Te pueden interesar:
                2. Auriculares gamer Redragon Chroma Lamia 2 $5.509
                3. Auriculares Logitech H390 $6600
                4. Auriculares gamer JBL Quantum $7.999

                Contactate con nosotros al +1233456778655
                `)
                    }else if (precioAuris <= 10000) {
                        alert(`Te pueden interesar:
                    2. Auriculares Logitech H390 $8.149
                    3. Auriculares gamer Nisuta NSAUG300C $9.626
                    4. Auriculares gamer HyperX Cloud Stinger Core $9.849

                    Contactate con nosotros al +1233456778655
                    `)
                  

                    }else{
                       alert(`Valor invalido! Ingrese valor desde $2.800 a $10.000 sin simbolos`)

                    } 
                
                    let pregunta = prompt(`Desea seguir viendo precios de auriculares? Ingrese "si" o "no"`)
                    if (pregunta == "si") {
                      
                    }else if (pregunta == "no"){
                      let respuesta = prompt(`Desea volver al menu principal? Ingrese "si" o "no"`)
                      if(respuesta == "no"){
                          alert("Muchas gracias, vuelva pronto")
                          VerPrecios= false
                          MenuPrincipal = false
                      } else if (respuesta == "si") {
                       VerPrecios = false
                      }
                    } else if (pregunta != "si" || "no") {
                        alert("valor invalido")
                        VerPrecios= false
                      }
                    } while(VerPrecios)
                }
                //Funcion para aquellos que buscan Teclados
                function PresupuestoTeclados () {
                    let VerPrecios = true
                    do {
                    let precioTeclado = parseInt(prompt(`Que presupuesto tienes para comprar tu teclado?
                    Ingresar valor desde $2.800 a $10.000 sin simbolos`))
                        if(precioTeclado < 2800) {
                            alert(`Valor invalido! Ingrese valor desde $2.800 a $10.000 sin simbolos`) 
                            }else if (precioTeclado == 2800) {
                                alert(`Te puede interesar:
                            1. Auriculares gamer Kotion Each G9000 $2800
                        
                            Contactate con nosotros al +1233456778655
                            `)
                            }else if (precioTeclado <= 3500) {
                                alert(`Te pueden interesar:
                            1. Teclado 1 $2800
                            2. Teclado 2 $3.231
                    
                            Contactate con nosotros al +1233456778655
                            `)
                                }else if (precioTeclado <= 5000) {
                                    alert(`Te pueden interesar:
                                2. Teclado 1 $3.231
                                3. Teclado 2 $4000
                                4. Teclado 3 $4990
                    
                                Contactate con nosotros al +1233456778655
                                `)
                                    }else if (precioTeclado <= 8000) {
                                        alert(`Te pueden interesar:
                                    2. Teclado 1 $5.509
                                    3. Teclado 2 $6600
                                    4. Teclado 3 $7.999
                    
                                    Contactate con nosotros al +1233456778655
                                    `)
                                        }else if (precioTeclado <= 10000) {
                                            alert(`Te pueden interesar:
                                        2. Teclado 1 $8.149
                                        3. Teclado 2 $9.626
                                        4. Teclado 4 $9.849
                    
                                        Contactate con nosotros al +1233456778655
                                        `)
                                      
                    
                                        }else{
                                           alert(`Valor invalido! Ingrese valor desde $2.800 a $10.000 sin simbolos`)
                    
                                        } 
                                    
                                      let pregunta = prompt(`Desea seguir viendo precios de teclados? Ingrese "si" o "no"`)
                                      if (pregunta == "si") {
                                        
                                      }else if (pregunta == "no"){
                                        let respuesta = prompt(`Desea volver al menu principal? Ingrese "si" o "no"`)
                                        if(respuesta == "no"){
                                            alert("Muchas gracias, vuelva pronto")
                                            VerPrecios= false
                                            MenuPrincipal = false
                                        } else if (respuesta == "si") {
                                         VerPrecios = false
                                        }
                                      }else if (pregunta != "si" || "no") {
                                        alert("valor invalido")
                                        VerPrecios= false
                                      }
                                      } while(VerPrecios)
                                    }

              //Llamado a funciones                      
              if(MensajeBienvenida == 1 ) {
                PresupuestoAuriculares()
              } else if (MensajeBienvenida == 2) {
                PresupuestoTeclados()
              }else if (MensajeBienvenida != 1 || 2){
                alert(`Valor invalido`)
              }}while(MenuPrincipal)
              //ACLARACION! El precio que muestra, muchas veces es mayor que el que pone el usuario, y es intencional ya que es una orientacion de presupuesto.
              //Estoy muy contento con mi trabajo :D Espero que este bien. Gracias profe y Lucila! Aguardo devoluciones
                  
        