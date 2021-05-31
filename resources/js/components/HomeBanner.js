import React, { Component } from "react";

export default class HomeBanner extends Component {
    render() {
        return (
            <div className="widget">
                <div className="banner medium-opacity bluesh">
                    {/* <div
                        className="bg-image"
                        style="
                        background-image: url(/site/images/resources/baner-widgetbg.jpg);
                    "
                    ></div> */}
                    <div className="baner-top">
                        <span>
                            <img alt="" src="/site/images/book-icon.png" />
                        </span>
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                    <div className="banermeta">
                        <p>create your own favourit page.</p>
                        <span>like them all</span>
                        <a data-ripple="" title="" href="#">
                            start now!
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
