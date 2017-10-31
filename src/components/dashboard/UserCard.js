import React from 'react';
import Card from './Card';

const UserCard = (props) => {
    return (
        <Card 
            cardHeaderProps = {{
                title:props.title,
                subtitle:props.subtitle,
                avatar:"http://cerveceriaallende.mx/wp-content/uploads/2015/05/logo.png"
            }}
        />
    );
};

export default UserCard;