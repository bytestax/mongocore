

import React, { Component } from 'react';
//import { interval } from 'rxjs';
//import { startWith, switchMap } from 'rxjs/operators';
import { Auth } from './App';

interface Profile {
    id: number;
    email: string;
}

interface ProfileListProps {
    auth: Auth;
}

interface ProfileListState {
    profiles: Array<Profile>;
    isLoading: boolean;
}

class ProfileList extends Component<ProfileListProps, ProfileListState> {
    private interval: any;

    constructor(props: ProfileListProps) {
        super(props);

        this.state = {
            profiles: [],
            isLoading: false
        };
    }

    /*async fetchData() {
        this.setState({isLoading: true});

        const response = await fetch('http://localhost:3000/profiles');
        const data = await response.json();
        this.setState({profiles: data, isLoading: false});
    }*/

    /*async componentDidMount() {
        //await this.fetchData();
        //this.interval = setInterval(() => this.fetchData(), 1000);
        this.setState({isLoading: true});

        const request = interval(1000).pipe(
            startWith(0),
            switchMap(() =>
                fetch('http://localhost:3000/profiles')
                    .then((response) => response.json())
            ));

        request.subscribe((data: any) => {
            this.setState({profiles: data, isLoading: false});
        })
    }*/
/*    async componentDidMount() {
        this.setState({isLoading: true});

        const response = await fetch('http://localhost:3000/profiles');
        const data = await response.json();
        this.setState({profiles: data, isLoading: false});

        const socket = new WebSocket('ws://localhost:3000/ws/profiles');
        socket.addEventListener('message', async (event: any) => {
            const profile = JSON.parse(event.data);
            this.state.profiles.push(profile);
            this.setState({profiles: this.state.profiles});
        });
    }*/
    /*async componentDidMount() {
        this.setState({isLoading: true});
        const response = await fetch('http://localhost:3000/profiles');
        const data = await response.json();
        this.setState({profiles: data, isLoading: false});

        const eventSource = new EventSource('http://localhost:8080/sse/profiles');
        eventSource.onopen = (event: any) => console.log('open', event);
        eventSource.onmessage = (event: any) => {
            const profile = JSON.parse(event.data).source;
            this.state.profiles.push(profile);
            this.setState({profiles: this.state.profiles});
        };
        eventSource.onerror = (event: any) => console.log('error', event);
    }*/
    async componentDidMount() {
        this.setState({isLoading: true});

        const response = await fetch('http://localhost:8080/profiles', {
            headers: {
                Authorization: 'Bearer ' + await this.props.auth.getAccessToken()
            }
        });
        const data = await response.json();
        this.setState({profiles: data, isLoading: false});
    }

    /*componentWillUnmount() {
        clearInterval(this.interval);
    }*/

    render() {
        const {profiles, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <h2>Profile List</h2>
                {profiles.map((profile: Profile) =>
                    <div key={profile.id}>
                        {profile.email}<br/>
                    </div>
                )}
                <a href="/" className="App-link">Home</a>
            </div>
        );
    }
}

export default ProfileList;

