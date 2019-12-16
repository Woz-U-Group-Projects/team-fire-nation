import React from 'react';
import Header from '../component/Header';

const Home = () => (
    <div>
        <div className="jumbotron text-center ">
            <Header className="display-4" title="Welcome to Connected Gamers" />
            <p className="lead">The best place for gamers to connect!</p>
            <hr class="my-4"></hr>
        </div>
        <div className="row">
            <div className="col col-md-6">
                <h3>Feed: Did you know gaming?</h3>
                <a class="twitter-timeline" href="https://twitter.com/didyouknowgamin?ref_src=twsrc%5Etfw">Tweets by didyouknowgamin</a> 
            </div>
            <div className="col col-md-6">
                <div className="row">
                    <div className="col-sm-12">
                        <h4>Lorem ipsum dolor sit</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit amet ad laboriosam provident accusantium expedita hic atque, nostrum rem quas blanditiis nobis numquam, quia deleniti nesciunt ratione ea natus possimus?</p>
                        <hr />
                    </div>  
                    
                    <div className="col-sm-12">
                        <h4>Lorem ipsum dolor sit</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit amet ad laboriosam provident accusantium expedita hic atque, nostrum rem quas blanditiis nobis numquam, quia deleniti nesciunt ratione ea natus possimus?</p>
                        <hr />
                    </div> 

                    <div className="col-sm-12">
                        <h4>Lorem ipsum dolor sit</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit amet ad laboriosam provident accusantium expedita hic atque, nostrum rem quas blanditiis nobis numquam, quia deleniti nesciunt ratione ea natus possimus?</p>
                        <hr />
                    </div> 
                </div>
            </div>
        </div>
    </div>
);

export default Home;
