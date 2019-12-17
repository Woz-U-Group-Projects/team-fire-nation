import React from 'react';
import Header from '../component/Header';

const Profile = () => (
    <div>
        <Header title="" />
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-2">
                    <img src="https://via.placeholder.com/150" />
                </div>
                <div className="col-md">
                    <h3>userName</h3>
                    <h4>userUsername</h4>
                </div>
                <div className="col-md">
                    <h5>Bio</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quis vitae blanditiis doloribus. Reprehenderit ipsum at quam iusto sapiente eum officiis voluptas aut commodi, quae voluptate similique rem repellendus enim!</p>
                </div>
            </div>
        </div>
        <div>
            <h3 className="text-center">Projects</h3>
            <div className="row">
                <div className="col-sm"><img src="https://via.placeholder.com/150" /></div>
                <div className="col-sm"><img src="https://via.placeholder.com/150" /></div>
                <div className="col-sm"><img src="https://via.placeholder.com/150" /></div> 
                <div className="col-sm"><img src="https://via.placeholder.com/150" /></div> 
                <div className="col-sm"><img src="https://via.placeholder.com/150" /></div>
                <div className="col-sm"><img src="https://via.placeholder.com/150" /></div>
            </div>
        </div>
        <div>
            <h2 className="text-center">My Post</h2>
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>    
        </div>
    </div>
);

export default Profile;
