import React, {Component} from "react";
import * as axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {Redirect} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class FoundGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nameIsValid: false,
            groups: [],
            rederect: false
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    async componentDidMount() {
        axios.get("https://localhost:44395/api/group/")
            .then(res => {
                const groups = res.data;
                this.setState({groups: groups})
            })
        console.log(this.state.group)
    }

    handleSubmit(e) {
        console.log(this.state.nameIsValid);
        if (this.state.nameIsValid === true) {
            this.setState({
                redirect: true
            })
        } else{
            alert("Incorrect name:" + this.state.name)
        }

    }

    validateName(name) {
        const {groups} = this.state;
        var found = false;
        for(var i = 0; i < groups.length; i++) {
            if (groups[i].name === name) {
                found = true;
                break;
            }
        }
        return found
    }

    onChangeName(e) {
        var val = e.target.value;
        var valid = this.validateName(val);
        this.setState({name: val, nameIsValid: valid});
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={{pathname: '/main', state: {name: this.state.name}}}/>
        }
    }


    render() {
        const {groups} = this.state;
        var nameColor = this.state.nameIsValid === true ? "green" : "red";
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
                <ul >
                    {groups.map(group => (
                        <li id={group.name} key={group.name}>
                            {group.id} {group.name} {group.totalCost}
                        </li>
                    ))}
                </ul>
                <form id="foundGroupForm" onSubmit={this.handleSubmit}>
                    <TextField
                        variant="outlined"
                        style={{borderColor: nameColor}}
                        margin="normal"
                        required
                        fullWidth
                        id="groupNameSelected"
                        label="Group Name"
                        name="email"
                        autoComplete="GroupName"
                        autoFocus
                        onChange={this.onChangeName}
                    />
                    <Button
                        id="foundsub"
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.handleSubmit}
                    >
                        Choose group
                    </Button>
                </form>
                {this.renderRedirect()}
            </Grid>
        )

    }

}

export default FoundGroup;
