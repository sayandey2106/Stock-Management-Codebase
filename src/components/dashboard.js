import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "./cards/Card";
import CardHeader from "./cards/CardHeader";
import CardIcon from "./cards/CardIcon";
import CardContent from "@material-ui/core/CardContent";
import Icon from "@material-ui/core/Icon";
import withStyles from "@material-ui/core/styles/withStyles";
import ReactCardFlip from 'react-card-flip';

const card = {
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    marginTop: 50
};

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Grid style={{marginTop:"10%"}}>
                    <Grid container justify="center" spacing={5}>
                        <Grid item lg={3} >
                            <Card>
                                <CardHeader>
                                    <CardIcon>
                                        local_bar
                                    </CardIcon>
                                </CardHeader>
                                <CardContent>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={3}>
                            <Card>
                                <CardHeader>
                                    <CardIcon>
                                        localbar
                                    </CardIcon>
                                </CardHeader>
                                <CardContent>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={3}>
                            <Card>
                                <CardHeader>
                                    <CardIcon>
                                        localbar
                                    </CardIcon>
                                </CardHeader>
                                <CardContent>

                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" spacing={5}>
                        <Grid item lg={3}>
                            <Card>
                                <CardHeader>
                                    <CardIcon>
                                        localbar
                                    </CardIcon>
                                </CardHeader>
                                <CardContent>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={3}>
                            <Card>
                                <CardHeader>
                                    <CardIcon>
                                        localbar
                                    </CardIcon>
                                </CardHeader>
                                <CardContent>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={3}>
                            <Card>
                                <CardHeader>
                                    <CardIcon>
                                        localbar
                                    </CardIcon>
                                </CardHeader>
                                <CardContent>

                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" spacing={5}>
                        <Grid item lg={3}>
                            <Card>
                                <CardHeader>
                                    <CardIcon>
                                        <Icon>local_bar</Icon>
                                    </CardIcon>
                                </CardHeader>
                                <CardContent>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={3}>
                            <Card>
                                <CardHeader>
                                    <CardIcon>
                                        local_bar
                                    </CardIcon>
                                </CardHeader>
                                <CardContent>

                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
