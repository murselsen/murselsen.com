import React from "react";
import Badge from "../../components/Badge/Badge";
import Css from "./Css/GithubItem.module.css";

// Copmonent
import Contributors from "../../components/Contributors/Contributors";
const GithubItem = () => {

    return (
        <div className={Css.GithubItem} >
            {/* <img src="https://api.murselsen.com//photos/IMG_20231015_135507.jpg" alt="Repo Name" className={Css.img} /> */}
            <div className={Css.main} a="content__gh-list-item__main">
                <h3 className={Css.title}>Repo Name</h3>
                <p className={Css.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum, unde, omnis voluptatibus esse suscipit.
                </p>

                <div className={Css.mainAlt}>
                    <div className={Css.tags}>
                        <Badge title="Php" tag={true} />
                        <Badge title="Javascript" tag={true} />
                    </div>
                    <span className={Css.language}>
                        <i className="ri-code-box-fill" style={{ marginInline: 10 }}></i>
                        <b>Javascript</b>
                    </span>
                </div>
            </div>
            <div className={Css.footer}>
                <Contributors contributors={[
                    {
                        title: "Mürsel Sen",
                    }
                ]} />
                <div className={Css.Controllers}>

                    <a href="#" title="{RepoName} | Github Repository | " className={Css.link}>
                        <i className="ri-red-packet-fill"></i>
                    </a>
                    <a href="#" title="{RepoName} | Github Repository Releases | " className={Css.link}>
                        <i className="ri-github-fill"></i>
                    </a>
                    <a href="#" title="{RepoName} | Page Link | " className={Css.link}>
                        <i className="ri-window-fill"></i>
                    </a>
                </div>
            </div>
        </div>
    )

};

export default GithubItem;