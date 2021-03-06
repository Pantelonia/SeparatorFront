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
import {Redirect} from "react-router-dom";

class ShowTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Unnamed",
            totalCost: 0
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
        return (
            <Typography id="totalCost" component="h2" variant="h5">Total cost {this.state.totalCost}</Typography>
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
            isSeparate: false,
            isBack: false
        }

    }

    componentDidMount(props) {
        console.log("name of group", this.props.location.state.name);
        setTimeout(function(){
            console.log("World!"); }, 3000);
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
        const showFriend = this.state.isShow &&
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
                <ShowFriends name={this.props.location.state.name}/>
            </Grid>
        const addFriend = this.state.isAdd && <AddFriend id={this.state.id}/>
        const deleteFriend = this.state.isDelete && <DeleteFriend name={this.props.location.state.name}/>
        const total = this.state.isTotal && <ShowTotal name={this.props.location.state.name}/>
        const addDish = this.state.isAddDish && <AddDish name={this.props.location.state.name} friends={this.state.friends}/>
        const deleteDish = this.state.isDeleteDish && <DeleteDish name={this.props.location.state.name}/>
        const separate = this.state.isSeparate && <Separate name={this.props.location.state.name}/>
        const back = this.state.isBack && <Redirect to={{pathname: '/'}}/>

        return (
            <div id="main" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography id = "Hi" component="h2" variant="h5">
                    Welcome to {this.state.name} Group
                    {total}

                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={8} sm={8} md={12}>
                        <Button
                            id = "showFriendRtn"
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleShow}
                        >
                            Show all friends
                        </Button>
                    </Grid>
                    <Grid item xs={8} sm={8} md={6}>
                        <Button
                            type="submit"
                            id = "creatfriendBtn"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleNewFriend}
                        >
                            Add new friends
                        </Button>
                    </Grid>
                    <Grid item xs={8} sm={8} md={6}>
                        <Button
                            id="deleteFriendBtn"
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleDelete}
                        >
                            delete lost  friend
                        </Button>
                    </Grid>
                    <Grid item xs={8} sm={8} md={12}>
                        <Button
                            id="btnTotal"
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleTotal}
                        >
                            Show total cost
                        </Button>
                    </Grid>
                    <Grid item xs={8} sm={8} md={6}>
                        <Button
                            id = "addDishBtn"
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={this.handleAddDish}
                        >
                            Add new dish
                        </Button>
                    </Grid>
                    <Grid item xs={8} sm={8} md={6}>
                        <Button
                            id = "deleteDishBtn"
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={this.handleDeleteDish}
                        >
                            delete dish
                        </Button>
                    </Grid>
                    <Grid item xs={8} sm={8} md={12}>
                        <Button
                            id="separateBtn"
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleSeparate}
                        >
                            Separate
                        </Button>
                    </Grid>
                    <Grid item xs={8} sm={8} md={12}>
                        <Button
                            id ="backToMain"
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleBack}
                        >
                            back to welcome page
                        </Button>
                    </Grid>
                </Grid>
                {showFriend}
                {addFriend}
                {deleteFriend}
                {addDish}
                {deleteDish}
                {separate}
                {back}

            </div>
        );
    }

    handleShow = () => {
        this.closeAll();
        this.setState({
            isShow: !this.state.isShow
        })

    }

    handleNewFriend = () => {
        this.closeAll();
        this.setState({
            isAdd: !this.state.isAdd
        })
    }
    handleDelete = () => {
        this.closeAll();
        this.setState({
            isDelete: !this.state.isDelete
        })
    }
    handleTotal = () => {
        this.closeAll();
        this.setState({
            isTotal: !this.state.isTotal
        })
    }
    handleAddDish = () => {
        this.closeAll();
        this.setState({
            isAddDish: !this.state.isAddDish
        })
    }
    handleDeleteDish = () => {
        this.closeAll();
        this.setState({
            isDeleteDish: !this.state.isDeleteDish
        })
    }
    handleSeparate = () => {
        this.closeAll();
        this.setState({
            isSeparate: !this.state.isSeparate
        })
    }
    closeAll = () => {
        this.setState({
            isShow: false,
            isAdd: false,
            isDelete: false,
            isTotal: false,
            isAddDish: false,
            isDeleteDish: false,
            isSeparate: false
        })
    }
    handleBack = () => {
        this.setState({
            isBack: !this.state.isBack
        })
    }


}

export default Main
