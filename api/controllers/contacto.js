const Contacto = require('../models/contacto');

// AGREGAR CONTACTO
async function agregarContacto(req, res) {
    console.log("Objeto que viene", req.body);
    try {
        let telefonoEncontrado = await Contacto.findOne({ where: { TELEFONO: req.body.TELEFONO } });
        if (telefonoEncontrado) {
            res.status(400).send({
                mensaje: 'Este número de teléfono ya está registrado'
            });
        } else {
            let contacto = Contacto.build();
            contacto.NOMBRE = req.body.NOMBRE;
            contacto.TELEFONO = req.body.TELEFONO;

            let contactoGuardado = await contacto.save();
            res.status(200).send(contactoGuardado);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            mensaje: error.name
        });
    }
}

// LISTAR TODOS
async function listarContactos(req, res) {
    try {
        let contactos = await Contacto.findAll();
        res.status(200).send(contactos);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            mensaje: error.name
        });
    }
}

// BUSCAR POR NOMBRE
async function buscarPorNombre(req, res) {
    try {
        let contactos = await Contacto.findAll({ where: { NOMBRE: req.params.nombre } });
        res.status(200).send(contactos);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            mensaje: error.name
        });
    }
}

// ACTUALIZAR CONTACTO
async function actualizarContacto(req, res) {
    try {
        let contacto = {
            NOMBRE: req.body.nombre,
            TELEFONO: req.body.telefono,
        };

        let contactoActualizado = await Contacto.update(contacto, { where: { ID: req.body.id } });

        if (contactoActualizado[0] === 0) {
            res.status(404).send({
                mensaje: 'Contacto no encontrado'
            });
        } else {
            let contactoActualizadoCompleto = await Contacto.findOne({ where: { ID: req.body.id } });
            res.status(200).send(contactoActualizadoCompleto);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            mensaje: error.name
        });
    }
}

// ELIMINAR CONTACTO
async function eliminarContacto(req, res) {
    try {
        let eliminado = await Contacto.destroy({ where: { ID: req.params.id } });

        if (eliminado === 0) {
            res.status(404).send({
                mensaje: 'Contacto no encontrado'
            });
        } else {
            res.status(200).send({
                mensaje: 'Contacto eliminado exitosamente'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            mensaje: error.name
        });
    }
}

module.exports = {
    agregarContacto,
    listarContactos,
    buscarPorNombre,
    actualizarContacto,
    eliminarContacto
};