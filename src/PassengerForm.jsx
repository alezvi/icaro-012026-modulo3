import { useState } from "react";

// import react-hook-form
// import yup
// schema

export default function PassengerForm(pax) {
    return (
        <div className="row">
            <div className="col">
                <div className="form-row">
                    <input type="text" defaultValue={pax.nombre} placeholder="Nombre" className="form-control" />
                </div>
                <div className="form-row">
                    <input type="text" defaultValue={pax.apellido} placeholder="Apellido" className="form-control" />
                </div>
                <div className="form-row">
                    <input type="text" defaultValue={pax.documento} placeholder="Documento" className="form-control" />
                </div>
            </div>
        </div>
    )
}