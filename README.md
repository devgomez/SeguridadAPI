# SeguridadAPI

# rutas

router.use("/sistema", middlewares.checkToken, sistemaController);
router.use("/usuario", middlewares.checkToken, usuarioController);
router.use("/login", loginController);
router.use("/menu", middlewares.checkToken, menuController);
router.use("/aplicacion", middlewares.checkToken, aplicacionController);
router.use("/usuario/menu", middlewares.checkToken, usuarioMenusController);
router.use(
"/usuario/opcionesmenu",
middlewares.checkToken,
opcionesMenuController
);
router.use(
"/usuario/opcionesmenuopcion",
middlewares.checkToken,
opcionesMenuOpcionController
);

# token expired

{
"estadoToken": false,
"error": "El token a expirado"
}

# basic response

{
"totalItems": 22,
"datos": [
{
"id": 1,
"codigo": "SISFARM",
"nombre": "Sistema de Farmacia",
"createdAt": "2020-11-27T22:43:10.000Z",
"updatedAt": "2020-11-27T22:43:10.000Z"
},
{
"id": 2,
"codigo": "SISFARM",
"nombre": "Sistema de Farmacia",
"createdAt": "2020-11-27T22:43:12.000Z",
"updatedAt": "2020-11-27T22:43:12.000Z"
},
{
"id": 3,
"codigo": "SISFARM",
"nombre": "Sistema de Farmacia",
"createdAt": "2020-11-27T22:43:13.000Z",
"updatedAt": "2020-11-27T22:43:13.000Z"
},
{
"id": 4,
"codigo": "SISFARM",
"nombre": "Sistema de Farmacia",
"createdAt": "2020-11-27T22:43:13.000Z",
"updatedAt": "2020-11-27T22:43:13.000Z"
},
{
"id": 5,
"codigo": "SISFARM",
"nombre": "Sistema de Farmacia",
"createdAt": "2020-11-27T22:43:36.000Z",
"updatedAt": "2020-11-27T22:43:36.000Z"
},
{
"id": 6,
"codigo": "SISFARM",
"nombre": "Sistema de Farmacia",
"createdAt": "2020-11-27T22:43:37.000Z",
"updatedAt": "2020-11-27T22:43:37.000Z"
},
{
"id": 7,
"codigo": "SISFARM",
"nombre": "Sistema de Farmacia",
"createdAt": "2020-11-27T22:43:37.000Z",
"updatedAt": "2020-11-27T22:43:37.000Z"
},
{
"id": 8,
"codigo": "SISFARM",
"nombre": "Sistema de Farmacia",
"createdAt": "2020-11-27T22:43:38.000Z",
"updatedAt": "2020-11-27T22:43:38.000Z"
},
{
"id": 9,
"codigo": "SISFARM",
"nombre": "Sistema de Farmacia",
"createdAt": "2020-11-27T22:43:38.000Z",
"updatedAt": "2020-11-27T22:43:38.000Z"
},
{
"id": 10,
"codigo": "SISFARM",
"nombre": "Sistema de Farmacia",
"createdAt": "2020-11-27T22:43:39.000Z",
"updatedAt": "2020-11-27T22:43:39.000Z"
}
],
"totalPages": 3,
"currentPage": 0
}
