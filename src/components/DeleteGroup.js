import React, {Component} from "react";
import * as axios from "axios";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class DeleteGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0
        };
        this.handlerDelete = this.handlerDelete.bind(this);
        this.changeId = this.changeId.bind(this);
    }

    handlerDelete(e) {
        e.preventDefault();
        deleteData(this.state.id, 'https://localhost:44395/api/group')

    }

    changeId(e) {
        var val = e.target.value;
        this.setState({id: val});
    }

    render() {
        return (
            <Box color="text.primary" style={{padding: '10px'}}>
                <form style={{padding: "30px"}} onSubmit={this.handlerDelete}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="id"
                        label="Deleted Group"
                        name="id"
                        autoComplete="remove group by id"
                        autoFocus
                        onChange={this.changeId}
                        />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.handlerDelete}
                    >
                        Delete group
                    </Button>
                </form>
            </Box>
        )
    }

}

export default DeleteGroup

function deleteData(item, url) {
    return axios.delete(url + '/' + item)
        .then(res => {
            console.log(res);
            console.log(res.data);
            alert("You delete thaat gays id:" + item);
        })
}
