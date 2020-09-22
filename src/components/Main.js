import React, {Component} from "react";
import * as axios from 'axios';
import DeleteGroup from "./DeleteGroup";
import CreateGroup from "./CreateGroup";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Unnamed",
            groups: [],
            id: 0
        }

    }

    componentDidMount(props) {
        console.log("name of group", this.props.location.state.name);
        this.setState({name: this.props.location.state.name});
        // axios.get("https://localhost:44395/api/group/name/" + this.props.location.state.name)
        //     .then(res => {
        //         const group = res.data;
        //         console.log(group)
        //         this.setState({groups: [group]})
        //         this.setState({id: group.id})
        //         console.log(this.state.groups)
        //     });
        // console.log(this.state.groups)

    }

    render() {
        return (
            <div>
                <Typography component="h2" variant="h7">
                    Welcome to {this.state.name} Group
                </Typography>
                <Grid container spacing={3}>
                    <Grid item item xs={8} sm={8} md={5}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleSubmit}
                        >
                            Show all friends
                        </Button>
                    </Grid>
                    <Grid item item xs={8} sm={8} md={5}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleSubmit}
                        >
                            Add new friends
                        </Button>
                    </Grid>
                    <Grid item xs={8} sm={8} md={5}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleSubmit}
                        >
                            delete friend
                        </Button>
                    </Grid>
                    <Grid item xs={8} sm={8} md={5}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleSubmit}
                        >
                            Add new friends
                        </Button>
                    </Grid>
                    <Grid item item xs={8} sm={8} md={5}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={this.handleSubmit}
                        >
                            Add new dish
                        </Button>
                    </Grid>
                    <Grid item item xs={8} sm={8} md={5}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={this.handleSubmit}
                        >
                            delete dish
                        </Button>
                    </Grid>
                    <Grid item xs={8} sm={8} md={10}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleSubmit}
                        >
                            Separate
                        </Button>
                    </Grid>
                </Grid>




            </div>
        );
    }
}

export default Main