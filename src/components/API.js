import React, {Component} from "react";
import DeleteGroup from "./DeleteGroup";
import CreateGroup from "./CreateGroup";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import FoundGroup from "./FoundGroup";


class API extends Component {
    state = {
        isCreate: false,
        isDelete: false,
        isFound:false
    }




    render() {
        const create = this.state.isCreate && <CreateGroup/>;
        const deletes = this.state.isDelete && <DeleteGroup/>;
        const  found = this.state.isFound && <FoundGroup/>;
        return (
            <div >

                <Grid  container component="menu" spacing={1}>
                    <Grid item xs={8} sm={8} md={10} wrap="nowrap" >
                        <Button
                            fullWidth
                            onClick={this.handleCreate}
                            variant="contained"
                            color="secondary"
                        >
                            Create new group
                        </Button>
                    </Grid>
                    <Grid item xs={8} sm={8} md={10} wrap="nowrap" >
                        <Button
                            fullWidth
                            onClick={this.handleFound}
                            variant="contained"
                            color="secondary"
                        >
                            Found group
                        </Button>
                    </Grid>
                    <Grid item xs={8} sm={8} md={10} wrap="nowrap">
                        <Button
                            fullWidth
                            onClick={this.handleDelete}
                            variant="contained"
                            color="secondary"
                        >
                            Delete Group by id
                        </Button>
                    </Grid>
                </Grid>
                {create}
                {found}
                {deletes}
            </div>
        );
    }

    handleCreate = () => {
        console.log('---', 'clicked')
        this.setState({
            isCreate: !this.state.isCreate
        })
    }
    handleDelete = () => {
        this.setState({
            isDelete: !this.state.isDelete
        })
    }
    handleFound = () => {
        this.setState({
            isFound: !this.state.isFound
        })
    }
}

export default API
// function deleteDatas(item, url) {
//     return fetch(url + '/' + item, {
//         method: 'delete'
//     })
//         .then(response => response.json());
// }

