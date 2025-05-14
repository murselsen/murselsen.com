import React from "react";
import Badge from "../../components/Badge/Badge";
import Css from "./Css/GithubItem.module.css";
const GithubItem = () => {

    return (
        <div className={Css.GithubItem} >
            <img src="https://api.murselsen.com//photos/IMG_20231015_135507.jpg" alt="Repo Name" className={Css.img} />
            <div className={Css.main} a="content__gh-list-item__main">
                <h3 className={Css.title}>Repo Name</h3>
                <p className={Css.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum, unde, omnis voluptatibus esse suscipit.
                </p>

                <div className={Css.mainAlt}>
                    <div className={Css.tags}>
                        <Badge title="Html" tag={true} />
                        <Badge title="Css" tag={true} />
                        <Badge title="JavaScript" tag={true} />
                        <Badge title="Php" tag={true} />
                    </div>
                    <span className={Css.language}>
                        <i className="ri-code-box-fill" style={{ marginInline: 10 }}></i>
                        <b>Javascript</b>
                    </span>
                </div>
            </div>
            <div className={Css.footer}>
                <div className="Contributors">
                    <div className="Contributors-item">
                        <a href="#" className="Contributors-link" title="Username" target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/512/6858/6858463.png" alt="Username"
                                className="Contributors-link__img" />
                        </a>
                    </div>
                </div>
                <div className="Controllers">

                    <a href="#" title="{RepoName} | Github Repository | " className="Controllers-link">
                        <i className="ri-red-packet-fill"></i>
                    </a>
                    <a href="#" title="{RepoName} | Github Repository Releases | " className="Controllers-link">
                        <i className="ri-github-fill"></i>
                    </a>
                    <a href="#" title="{RepoName} | Page Link | " className="Controllers-link">
                        <i className="ri-window-fill"></i>
                    </a>
                </div>
            </div>
        </div>
    )

};

export default GithubItem;