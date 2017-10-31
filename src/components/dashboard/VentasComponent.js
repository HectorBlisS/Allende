import React from 'react';
import Grafica from './Grafica';
import * as fakeFirebase from './fake';
import Card from './Card';

const VentasComponent = (props) => {
    return (
        <div>
            <Card
                cardProps = {{
                    className: 'cardVentas'
                }}
                cardHeaderProps={{
                    title: props.title,
                    subtitle: props.subtitle
                }}
                cardMedia = {(
                    <Grafica
                        medidasLista={fakeFirebase.data}
                    />
                )}
                cardText = {
                    (<div>
                        <p style={{
                            fontSize: 20
                        }}>
                            Ha vendido {props.ventas} {props.medida}
                        </p>
                    </div>)
                }
            />
        </div>
    );
};

export default VentasComponent;