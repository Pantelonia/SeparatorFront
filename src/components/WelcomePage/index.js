import React, {Component} from "react";
import DeleteGroup from "../DeleteGroup";
import CreateGroup from "../CreateGroup";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import FoundGroup from "../FoundGroup";
import "./welcome.css"


class WelcomePage extends Component {
    state = {
        isCreate: false,
        isDelete: false,
        isFound: false
    }

    render() {
        const create = this.state.isCreate && <CreateGroup/>;
        const deletes = this.state.isDelete && <DeleteGroup onButtonClick={this.handleClose}/>;
        const found = this.state.isFound && <FoundGroup/>;
        return (

            <Grid id="welcomePage" container component="menu" spacing={4}>

                <Grid item xs={10} sm={10} md={12}>
                    <Button
                        className="myButton"
                        id="createGroupButton"
                        fullWidth
                        onClick={this.handleCreate}
                        variant="contained"
                        color="secondary"
                    >
                        Create new group
                    </Button>
                </Grid>
                <Grid item xs={10} sm={10} md={12}>
                    <Button
                        className="myButton"
                        id="foundGroupButton"
                        fullWidth
                        onClick={this.handleFound}
                        variant="contained"
                        color="secondary"
                    >
                        Found group
                    </Button>
                </Grid>
                <Grid item xs={10} sm={10} md={12}>
                    <Button
                        fullWidth
                        className="myButton"
                        id="deleteGroupButton"
                        onClick={this.handleDelete}
                        variant="contained"
                        color="secondary"
                    >
                        Delete Group by name
                    </Button>
                </Grid>
                {create}
                {found}
                {deletes}
            </Grid>

        );
    }

    handleClose = () => {
        this.setState({
            isDelete: false,
            isFound: false,
            isCreate: false
        })
    }
    handleCreate = () => {
        console.log('---', 'clicked')
        this.setState({
            isDelete: false,
            isFound: false,
            isCreate: !this.state.isCreate
        })
    }
    handleDelete = () => {
        this.setState({
            isCreate: false,
            isFound: false,
            isDelete: !this.state.isDelete
        })
    }
    handleFound = () => {
        this.setState({
            isDelete: false,
            isCreate: false,
            isFound: !this.state.isFound
        })
    }
}

export default WelcomePage
// function deleteDatas(item, url) {
//     return fetch(url + '/' + item, {
//         method: 'delete'
//     })
//         .then(response => response.json());
// }

