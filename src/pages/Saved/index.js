import React from 'react';
import "./saved.css"
import { Grid, Cell, Card, CardActions, Button, CardTitle, CardText } from 'react-mdl';
import Jumbotron from '../../components/Jumbotron'

function Saved() {
    return (
        <div>
            <h3>Saved Books</h3>
            <Grid className="saved-grid">
                <Cell col={12}>
                    <Jumbotron>
                        <h1>Google Books Search</h1>
                        <h5>Search for and Save Books of Interest</h5>
                    </Jumbotron>
                </Cell>
                <div className="container">
                    <h6>Saved Books</h6>
                    <Cell col={12}>
                        <Card shadow={1}>
                            <CardTitle>
                                <p>Title</p>
                                <CardActions>
                                    <Button >View</Button>
                                    <Button >Delete</Button>
                                </CardActions>
                            </CardTitle>
                            <CardText>
                                <img className="card-img" src="http://www.getmdl.io/assets/demos/dog.png" />
                            </CardText>
                        </Card>
                    </Cell>
                </div>
            </Grid>
        </div>
    )
}

export default Saved;