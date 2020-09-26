import React, {Component} from "react";
import * as axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ShowFriends from "./ShowFriends";
import AddFriend from "./AddFriend";
import DeleteFriend from "./DeleteFriend";
import AddDish from "./AddDish";
import Paper from "@material-ui/core/Paper";
import DeleteDish from "./DeleteDish";
import Separate from "./Separate";

class ShowTotal extends  Component{
    constructor(props) {
        super(props);
        this.state ={
            name:"Unnamed",
            totalCost:0
        }
    }
    componentDidMount(props) {
        axios.get("https://localhost:44395/api/group/name/" + this.props.name)
            .then(res => {
                const group = res.data;
                console.log(group)
                this.setState({totalCost: group.totalCost})
            });
    }
    render() {
        return(
            <Typography component="h2" variant="h5">Total cost {this.state.totalCost}</Typography>
        )
    }
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Unnamed",
            groups: [],
            id: 0,
            totalCost: 0,
            friends: [],
            isShow: false,
            isAdd: false,
            isDelete: false,
            isTotal: false,
            isAddDish: false,
            isDeleteDish: false,
            isSeparate: false
        }

    }

    componentDidMount(props) {
        console.log("name of group", this.props.location.state.name);
        this.setState({name: this.props.location.state.name});
        axios.get("https://localhost:44395/api/group/name/" + this.props.location.state.name)
            .then(res => {
                const group = res.data;
                console.log(group)
                this.setState({id: group.id})
                this.setState({totalCost: group.totalCost})
                this.setState({friends: group.friends})
                console.log(this.state.groups)
            });
        console.log(this.state.groups)

    }


    render() {
        const showFriend = this.state.isShow && <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{
            position: "absolute",
            top: '200px',
            left: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: "15px 100px 15px 100px",
            padding: "40px"

        }}>
            <ShowFriends name={this.props.location.state.name}/>
        </Grid>
        const addFriend = this.state.isAdd && <AddFriend id={this.state.id}/>
        const deleteFriend = this.state.isDelete && <DeleteFriend name={this.props.location.state.name}/>
        const total = this.state.isTotal && <ShowTotal  name={this.props.location.state.name}/>
        const addDish = this.state.isAddDish && <AddDish name={this.props.location.state.name}/>
        const deleteDish  = this.state.isDeleteDish && <DeleteDish name={this.props.location.state.name}/>
        const separate =  this.state.isSeparate && <Separate name={this.props.location.state.name}/>

        return (
            <div>
                <Typography component="h2" variant="h5">
                    Welcome to {this.state.name} Group
                    {total}

                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={8} sm={8} md={5}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleShow}
                        >
                            Show all friends
                        </Button>
                    </Grid>
                    <Grid item xs={8} sm={8} md={5}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleNewFriend}
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
                            onClick={this.handleDelete}
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
                            onClick={this.handleTotal}
                        >
                            Show total cost
                        </Button>
                    </Grid>
                    <Grid item xs={8} sm={8} md={5}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={this.handleAddDish}
                        >
                            Add new dish
                        </Button>
                    </Grid>
                    <Grid item xs={8} sm={8} md={5}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={this.handleDeleteDish}
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
                            onClick={this.handleSeparate}
                        >
                            Separate
                        </Button>
                    </Grid>
                </Grid>
                {showFriend}
                {addFriend}
                {deleteFriend}
                {addDish}
                {deleteDish}
                {separate}

            </div>
        );
    }

    handleShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })

    }

    handleNewFriend = () => {
        this.setState({
            isAdd: !this.state.isAdd
        })
    }
    handleDelete = () => {
        this.setState({
            isDelete: !this.state.isDelete
        })
    }
    handleTotal = () => {
        this.setState({
            isTotal: !this.state.isTotal
        })
    }
    handleAddDish = () => {
        this.setState({
            isAddDish: !this.state.isAddDish
        })
    }
    handleDeleteDish = () => {
        this.setState({
            isDeleteDish: !this.state.isDeleteDish
        })
    }
    handleSeparate = () => {
        this.setState({
            isSeparate: !this.state.isSeparate
        })
    }


}

export default Main
