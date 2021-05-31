import React from "react";
import ShourtCut from "../../components/ShourtCut";
import RecentAcivities from "../../components/RecentAcivities";
import WhoIsFollowing from "../../components/WhoIsFollowing";
import HomeBanner from "../../components/HomeBanner";
import YourPage from "../../components/YourPage";
import FriendsList from "../../components/FriendsList";
import NewPost from "./NewPost";
function Home(props) {
    return (
        <div>
            <section>
                <div className="gap gray-bg">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row" id="page-contents">
                                    <div className="col-lg-3">
                                        <aside className="sidebar static">
                                            <ShourtCut />
                                            <RecentAcivities />
                                            <WhoIsFollowing />
                                        </aside>
                                    </div>
                                    <div className="col-lg-6">
                                        <NewPost />
                                    </div>
                                    <div className="col-lg-3">
                                        <aside className="sidebar static">
                                            <YourPage />
                                            <HomeBanner />
                                            <FriendsList />
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
