import React, {Component} from "react";
import * as axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class DeleteGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [],
            name: "Unnamed",
            nameIsValid: false,
        };
        this.handlerDelete = this.handlerDelete.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    async componentDidMount() {
        axios.get("https://localhost:44395/api/group/")
            .then(res => {
                const groups = res.data;
                this.setState({groups: groups})
            })
        console.log(this.state.group)
    }

    handlerDelete(e) {
        e.preventDefault();
        console.log(this.state.nameIsValid);
        if (this.state.nameIsValid === true) {
            var group = this.state.groups.find(obj => {
                return obj.name === this.state.name
            })
            deleteData(group.id, 'https://localhost:44395/api/group');
            this.closeAll()
        } else {
            alert("Incorrect name:" + this.state.name)
        }


    }

    validateName(name) {
        const {groups} = this.state;
        var found = false;
        for (var i = 0; i < groups.length; i++) {
            if (groups[i].name === name) {
                found = true;
                break;
            }
        }
        return found
    }

    changeName(e) {
        var val = e.target.value;
        var valid = this.validateName(val);
        this.setState({name: val, nameIsValid: valid});
    }

    render() {
        const {groups} = this.state;
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
                <ul>
                    {groups.map(group => (
                        <li id={group.name} key={group.name}>
                            {group.id} {group.name} {group.totalCost}
                        </li>
                    ))}
                </ul>
                <form id="deleteGroupForm" onSubmit={this.handlerDelete}>
                    <TextField
                        id="nameDelete"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Deleted Group"
                        name="id"
                        autoComplete="remove group by id"
                        autoFocus
                        onChange={this.changeName}
                    />
                    <Button
                        id="deleteBtn"
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.handlerDelete }
                    >
                        Delete group
                    </Button>
                </form>
            </Grid>
        )
    }
    closeAll =() =>{
        const {onButtonClick} = this.props;
        onButtonClick();

    }

}

export default DeleteGroup

export function  deleteData(item, url) {
    return axios.delete(url + '/' + item)
        .then(res => {
            console.log(res);
            console.log(res.data);
            // alert("You delete thaat gays id:" + item);
        })
}
