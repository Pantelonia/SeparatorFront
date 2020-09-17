import React, {Component} from "react";
import * as axios from "axios";

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

    changeId(e){
        var val = e.target.value;
        this.setState({id: val});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handlerDelete}>
                    <label>
                        Person ID:
                        <input type="text" name="id" onChange={this.changeId} />
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    }

}
export default  DeleteGroup

function deleteData(item, url) {
    return axios.delete(url + '/' + item)
        .then(res => {
            console.log(res);
            console.log(res.data);
            alert("You delete thaat gays id:" +  item);
        })
}
