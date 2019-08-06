import React from "react";
import "./App.css";
import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCuVla94OPSKMCjav2dZtaosyA1yUfxgqU",
    authDomain: "the-wall-49dd2.firebaseapp.com",
    databaseURL: "https://the-wall-49dd2.firebaseio.com",
    projectId: "the-wall-49dd2",
    storageBucket: "",
    messagingSenderId: "164184025896",
    appId: "1:164184025896:web:87dc1dafab4cfd38"
};
firebase.initializeApp(firebaseConfig);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            user: "",
            newComment: ""
        };
        this.commentsRef = firebase.database().ref("comments");
    }

    componentDidMount() {
        this.commentsRef.on("child_added", snapshot => {
            var comment = snapshot.val();
            comment.key = snapshot.key;
            this.setState({
                comments: this.state.comments.concat(comment)
            });
        });

        firebase.auth().onAuthStateChanged(user => {
            this.setUser(user);
        });
    }

    setUser(user) {
        console.log(user);
        this.setState({ user: user });
    }

    signIn(e) {
        e.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    }

    signOut(e) {
        e.preventDefault();
        firebase.auth().signOut();
    }

    handleChange(e) {
        this.setState({ newComment: e.target.value });
    }

    createComment(e) {
        e.preventDefault();
        this.commentsRef.push({
            username: this.state.user.email,
            content: this.state.newComment
        });
        document.getElementById("commentInput").value = "";
    }

    render() {
        return (
            <div className="App">
                {console.log("state", this.state)}
                <p>hello</p>
                {this.state.comments.map(comment => {
                    return (
                        <div key={comment.key}>
                            <p>Comment: {comment.content}</p>
                            <p>Sent by: {comment.username}</p>
                        </div>
                    );
                })}

                {this.state.user !== null ? (
                    <form onSubmit={e => this.createComment(e)}>
                        <input
                            type="text"
                            id="commentInput"
                            placeholder="Enter new comment"
                            onChange={e => this.handleChange(e)}
                        />
                        <input type="submit" value="Submit" />
                    </form>
                ) : (
                    ""
                )}

                {this.state.user !== null ? (
                    <button onClick={this.signOut}>Sign Out</button>
                ) : (
                    <button onClick={this.signIn}>
                        Sign in to add comments
                    </button>
                )}
            </div>
        );
    }
}

export default App;
