import React, {Component} from "react";
import * as axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {Redirect} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class CreateGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            group: [],
            friend: "Organizer",
            rederect: false
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeFriend = this.onChangeFriend.bind(this);

    }


    handleSubmit(e) {
        e.preventDefault();
        axios.post('https://localhost:44395/api/group/', {"name": this.state.name})
            .then(response => this.setState({Id: response.data.id}))
            .catch(error => {
                this.setState({errorMessage: error.message});
                console.error('There was an error!', error);
            });
        this.setState({
            redirect: true
        })
    }

    onChangeName(e) {
        var val = e.target.value;
        this.setState({name: val});
    }

    onChangeFriend(e) {
        var val = e.target.value;
        this.setState({friend: val});
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={{pathname:'/main', state: {name: this.state.name}}}/>
        }
    }


    render() {
        return (
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{
                position: "absolute",
                top: '200px',
                left: '100px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: "15px 100px 15px 100px",
                padding: "40px"

            }}>
                <form id="createGroupForm" onSubmit={this.handleSubmit}>
                    <TextField
                        id = "newGroupName"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Group Name"
                        name="email"
                        autoComplete="NewGroup"
                        autoFocus
                        onChange={this.onChangeName}
                    />
                    <Button
                        id = "newGroupSub"
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.handleSubmit}
                    >
                        Create group
                    </Button>
                </form>
                {this.renderRedirect()}
            </Grid>


        )
    }

}

export default CreateGroup;
