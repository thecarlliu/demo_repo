import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";


class App extends Component {

    state = {
        friends
    };

    notCarlFriend = id => {
        const friends = this.state.friends.filter(friend => friend.id !== id);
        this.setState({friends});
    };

    render() {
        return (
            <Wrapper>
                <h1 className="title">Friends List</h1>
                {
                    this.state.friends.map((friend) => (
                        <FriendCard
                            notCarlFriend = {this.notCarlFriend}
                            id={friend.id}
                            key={friend.id}
                            name={friend.name}
                            image={friend.image}
                            occupation={friend.occupation}
                            location={friend.location}>
                        </FriendCard>
                    ))
                }
            </Wrapper>
        )
    }
}

export default App;
