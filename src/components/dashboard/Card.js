import React from 'react';
import {Card, CardHeader, CardMedia, CardText, Paper} from 'material-ui';

const CardFixter = (props) => {
    const {
        cardProps,
        cardHeaderProps,
        cardTextProps,
        cardText,
        cardMediaProps,
        cardMedia
    } = props;
    return (
        <Paper zDepth={3} >
            <Card {...cardProps} >
                <CardHeader {...cardHeaderProps} />
                { cardText !== undefined &&
                    <CardText { ...cardTextProps}>
                        {cardText}
                    </CardText>
                }
                { cardMedia !== undefined &&
                    <CardMedia { ...cardMediaProps}>
                        {cardMedia}
                    </CardMedia>
                }

            </Card>
        </Paper>
    );
};

export default CardFixter;