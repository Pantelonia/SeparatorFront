import React, {Component} from "react";
import * as axios from 'axios';
import DeleteGroup from "./DeleteGroup";
import CreateGroup from "./CreateGroup";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";




class API extends Component {
    state = {
        groups: [],
        isCreate: false,
        isDelete: false


    }


    async componentDidMount() {
        axios.get("https://localhost:44395/api/group/")
            .then(res => {
                const groups = res.data;
                this.setState({groups: groups})
            })
        console.log(this.state.group)
    }

    render() {
        const {groups} = this.state;
        const create = this.state.isCreate && <CreateGroup/>;
        const deletes = this.state.isDelete && <DeleteGroup/>;
        return (
            <div>
                <ul>
                    {groups.map(group => (
                        <li key={group.name}>
                            {group.id} {group.name} {group.totalCost}
                        </li>
                    ))}
                </ul>
                <Grid container component="menu" spacing={1}>
                    <Grid container wrap="nowrap" spacing={2}  >
                        <Button
                            fullWidth
                            onClick={this.handleCreate}
                            variant="contained"
                            color="secondary"
                            style={{margin: '40px' }}
                            >
                            Create new group
                        </Button>
                    </Grid>
                    <Grid container wrap="nowrap" spacing={2}>
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
}

export default API
// function deleteDatas(item, url) {
//     return fetch(url + '/' + item, {
//         method: 'delete'
//     })
//         .then(response => response.json());
// }

