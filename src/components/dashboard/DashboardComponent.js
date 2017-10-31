import React from 'react';
import './DashboardStyles.css';
import UserCard from "./UserCard";
import VentasComponent from "./VentasComponent";
import ShowUltimaVenta from './ShowResumen';
import ProductoDash from "./ProductoDash";

const DashboardComponent = (props) => {
    const {
        distributor,
        slogan,
        ultimaVenta,
        promedioCompras,
        productoMasComprado,
        productoMenosComprado
    } = props;
    return (
        <div className="dashMain">
            <div className="userCard">
                < UserCard
                    title={distributor.name}
                    subtitle={slogan}
                />
            </div>
            <h2>Resumen</h2>
            <div className="ultimaVenta">
                <ShowUltimaVenta
                    ultimaVenta={ultimaVenta}
                    promedioCompras={promedioCompras}
                    productoMasComprado={productoMasComprado}
                    productoMenosComprado={productoMenosComprado}
                />
            </div>
            <h2>Productos</h2>
            <div style={{display:'block'}}>
                <div style={{display:'inline'}}>
                    <div className="ventasPiezaMain">
                        <ProductoDash
                            tipo="Artesanal1"
                            img="http://cerveceriaallende.mx/wp-content/uploads/2014/08/Cerveza-Allende-Brown.png"
                        />
                    </div>
                </div>
                <div style={{display:'inline'}}>
                    <div className="ventasPrecioMain">
                        <ProductoDash/>
                    </div>
                </div>
            </div>

            <h2>Ventas</h2>
            <div style={{display:'inline'}}>
                <div className="ventasPiezaMain">
                    <VentasComponent
                        title="Lista de ventas"
                        subtitle="Por cantidad de cajas"
                        ventas={200}
                        medida="cajas"
                    />
                </div>
                <div className="ventasPrecioMain">
                    <VentasComponent
                        title="Lista de ventas"
                        subtitle="Por cantidad de dinero"
                        ventas='$300,000'
                        medida="pesos"
                    />
                </div>

            </div>
        </div>
    );
};

export default DashboardComponent;