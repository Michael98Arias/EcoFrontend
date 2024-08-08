// Texts in the Spanish language.

export default {
  error: {
    notFound: "Ups. Nada aquí...",
    withoutPermission: "Lo siento, no tienes permisos.",
    labelButton: "Ir al inicio",
  },
  buttons: {
    accept: "Aceptar",
    cancel: "Cancelar",
    update: "Actualizar",
    create: "Crear",
    delete: "Eliminar",
    enable: "Habilitar",
    downloadFile: "Descargar el archivo",
    shopNow: "Comprar ahora ->",
    logOut: "Cerrar Sesión",
    toggle: {
      showAll: "Mostrar Todo",
      active: "Mostrar Activos",
      inactive: "Mostrar Inactivos",
    },
  },
  globalMessages: {
    wait: "Por favor, espere un momento...",
    successfulChange: "¡Cambio con éxito!",
    successfulCreate: "¡Creado con éxito!",
    errorApi: "Ocurrió algo inesperado intenta de nuevo.",
    errorNotFound: "Usuario no encontrado.",
    errorDisabled: "Usuario deshabilitado.",
    confirm: "¿Está seguro?",
    delete: "Se Eliminará: ",
    enable: "Se habilitará: ",
    required: "Ingresa la Información Requerida.",
    minLengthRule: "Este campo debe tener al menos {min} caracteres",
    maxLengthRule: "Este campo no debe tener más de {max} caracteres",
    titleNew: "Crear Nuevo",
    titleUpdate: "Actualizar",
  },
  layout: {
    mainLayout: {
      header: {
        home: "Inicio",
        shop: "Comprar",
        about: "Acerca de",
      },
      home: {
        images: {
          titlePhotoOne: "Haz de tu espacio un reflejo de tu estilo.",
          titlePhotoTwo:
            "Crea momentos inolvidables con nuestra exquisita colección de muebles.",
          titlePhotoThree:
            "Eleva Tu experiencia de vida con muebles que hablan por sí solos",
          titlePhotoFour:
            "Transforma tu hogar con muebles que inspiran en cada rincón.",
        },
      },
      loginPage: {
        titles: {
          logIn: "Iniciar Sesión",
          createAccount: "Crear Cuenta",
          userType: "Selecciona un tipo de usuario:",
        },
      },
      shop: {
        categorias: {
          bedrooms: "Dormitorios",
          offices: "Oficinas",
          kitchens: "Cocinas",
          decorAndAccessories: "Decoración y Accesorios",
        },
      },
    },
    mainLayoutUsers: {
      sideBar: {
        title: "Panel CRM",
        options: {
          analysis: {
            title: "Análisis",
          },
          users: {
            title: "Usuarios",
            pageUsers: {
              cards: {
                overall: "Total",
                admin: {
                  titles: "Administradores",
                  title: "Administrador",
                  buttonAction: "Ver tabla de Administradores",
                },
                seller: {
                  titles: "Vendedores",
                  title: "Vendedor",
                  buttonAction: "Ver tabla de vendedores",
                },
                customer: {
                  titles: "Clientes",
                  title: "Cliente",
                  buttonAction: "Ver tabla de Clientes",
                },
              },
              dialog: {
                options: {
                  name: "Nombre Completo",
                  username: "Nombre de Usuario",
                  hintName: "Nombre y apellido",
                  email: "Correo electrónico",
                  password: "Contraseña",
                  updatePassword: "Actualizar Contraseña",
                  role: "Rol",
                  state: "Estado",
                  creationDate: "Fecha de Creación",
                  updateDate: "Fecha de Actualización",
                  emailRule:
                    "Por favor ingrese una dirección de correo electrónico válida",
                  passwordRule:
                    "La contraseña debe tener al menos 8 caracteres e incluir un número, una letra mayúscula y un carácter especial",
                },
              },
            },
          },
          products: {
            title: "Productos",
            pageProducts: {
              cards: {
                overall: "Total",
                category: {
                  titles: "Categorías",
                  title: "Categoría",
                  buttonAction: "Ver tabla de Categorías",
                },
                product: {
                  titles: "Productos",
                  title: "Producto",
                  buttonAction: "Ver tabla de Productos",
                },
              },
              dialog: {
                titleNew: 'Crear Nueva',
                options: {
                  name: "Nombre",
                  usernameSeller: "Nombre de Usuario",
                  hintName: "Nombre Único",
                  categoryName: "Categoría",
                  description: "Descripción",
                  amount: "Cantidad",
                  price: "Precio",
                  state: "Estado",
                  creationDate: "Fecha de Creación",
                  updateDate: "Fecha de Actualización",
                  actions: "Acciones",
                  nameRule:
                    "Asegúrese de ingresar un nombre que aún no esté en uso.",
                },
              },
            },
          },
          sales: {
            title: "Ventas",
            pageSales: {},
          },
          marketing: {
            title: "Mercadotecnia",
            pageMarketing: {
              cards: {
                overall: "Total",
                channel: {
                  titles: "Canales",
                  title: "Canal",
                  buttonAction: "Ver tabla de Canales",
                },
                campaign: {
                  titles: "Campañas",
                  title: "Campaña",
                  buttonAction: "Ver tabla por Campañas",
                },
              },
              dialog: {
                titleNew: 'Crear Nueva',
                options: {
                  name: "Nombre",
                  hintName: "Nombre Único",
                  startDate: "Fecha de Inicio",
                  endDate: "Fecha de Fin",
                  hintTotalDays: "Días Totales:{days}",
                  category: "Categoría",
                  selectCategory: "Seleccione una Categoría",
                  marketingChannel: "Canal de Marketing",
                  discount: "Descuento",
                  numberDiscount: "El número debe estar entre 1 y 100.",
                  conditions: "Condiciones",
                  state: "Estado",
                  creationDate: "Fecha de Creación",
                  updateDate: "Fecha de Actualización",
                  actions: "Acciones",
                },
              },
            },
          },
          reports: {
            title: "Reportes",
            pageMarketing: {},
          },
        },
      },
    },
  },
};
