import * as yup from'yup';


export const schema = yup.object({
    nombre: yup.string().required('Este campo es obligatorio').min(3, 'Minimo de 3 caracteres').max(20, 'Máximo 20 caracteres'),
    apellido:  yup.string().required('Este campo es obligatorio').min(3, 'Minimo de 3 caracteres').max(20, 'Máximo 20 caracteres'),
    email:  yup.string().required('Este campo es obligatorio').email('El email no es valido').matches(/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/),
    direccion: yup.string().required('Este campo es obligatorio').min(3, 'Minimo de 3 caracteres'),
    departamento: yup.string(),
    provincia: yup.string().required('Este campo es obligatorio').min(3, 'Minimo de 3 caracteres'),
    ciudad: yup.string().required('Este campo es obligatorio').min(3, 'Minimo de 3 caracteres'),
    codigoPostal: yup.string().required('Este campo es obligatorio').min(3, 'Minimo 3 caracteres'),
    numeroTarjeta: yup.string().matches(/^([0-9])*$/).required('Este campo es obligatorio'),
    nombreTitular: yup.string().required('Este campo es obligatorio'),
    fechaExp: yup.string().required('Este campo es obligatorio'),
    codigoSeguridad: yup.string().matches(/^([0-9])*$/).required('Este campo es obligatorio').min(3,  'Minimo 3 caracteres').max(3,'Máximo 3 caracteres')

})