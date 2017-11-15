import React from 'react';
import { CircularProgress, Paper, RaisedButton, TextField} from "material-ui";

import AlertIcon from 'material-ui/svg-icons/alert/warning';

export const ChangePasswordDisplay = ({onChange, credential, error, loading, updatePassword, redirectToDash}) => {
    const errorMsg = 'La contraseña no coincide';
    return (
        <div className="tabla">
            <div className="centrado">
                <Paper
                    zDepth={5}
                    className="card">
                    <h2>Actualiza tu contraseña</h2>
                    <div className="login">
                        <div className="alerta-caja">
                            <AlertIcon color="orange" className="warnig-icon parpadea" style={{width:'15%', height:'15%'}} />
                            <p className="warning-text">
                                ¡Bienvenido! Lo primero es lo primero,
                                actualmente tu contraseña ha sido asignada automáticamente
                                y por seguridad debes establecer una nueva.
                            </p>
                        </div>

                        <TextField
                            onChange={onChange}
                            value={credential.password}
                            name="password"
                            type="password"
                            floatingLabelText="Nueva contraseña"
                            errorText={error.password ? errorMsg : ''}
                            underlineFocusStyle={styles.underlineStyle}
                            floatingLabelStyle={styles.floatingLabelStyle}
                        />
                        <TextField
                            onChange={onChange}
                            value={credential.confirmPassword}
                            name="confirmPassword"
                            type="password"
                            floatingLabelText="Confirmar contraseña"
                            errorText={error.passwordConfirm ? errorMsg : ''}
                            underlineFocusStyle={styles.underlineStyle}
                            floatingLabelStyle={styles.floatingLabelStyle}
                        />
                        <div className="botones">
                            <RaisedButton
                                //onTouchTap={onLogin}
                                onClick={redirectToDash}
                                labelColor="#FFFFFF"
                                backgroundColor="orange"
                                label={loading ? <CircularProgress color="white" size={30}/>:"Más tarde"}
                            />
                            <RaisedButton
                                //onTouchTap={onLogin}
                                onClick={updatePassword}
                                labelColor="#FFFFFF"
                                backgroundColor="green"
                                label={loading ? <CircularProgress color="white" size={30}/>:"Actualizar"}
                            />
                        </div>
                    </div>
                </Paper>
            </div>
        </div>
    );
};

const styles = {
    underlineStyle: {
        borderColor: 'green'
    },
    floatingLabelStyle: {
        color: '#424242',
    },
};