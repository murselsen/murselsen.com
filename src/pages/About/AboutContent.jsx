import React from 'react'

const AboutContent = () => {
    return (
        <div class="content">
            <div class="content__about" id="aboutContent">
                <p class="content__about-tag">/**</p>
                <p class="content__about-text">I'm Mürsel</p>
                <p class="content__about-text">I live in İzmir, but my dreams are wide enough to reach every corner of the
                    world, line by line, through code. My
                    technical journey began with electricity meters, but over time, my growing passion for software opened up an
                    entirely
                    new path. Writing code, for me, is more than just a job—it's the most powerful way to create, to solve
                    problems, and to
                    express myself. I put on my music, grab a coffee, and start coding—becoming a little more myself with every
                    line I
                    write.</p>
                <p class="content__about-text">Right now, I'm steadily progressing on the path to becoming a Full Stack
                    Developer. I'm eager to learn new technologies,
                    build different kinds of projects, and pursue this craft with passion. I'm ready to turn this passion from a
                    hobby into
                    a full-fledged career. Because I truly believe that anything done with passion eventually turns into
                    success. And I’m
                    determined to walk that path.</p>
                <p class="content__about-tag">&nbsp;&nbsp;*/</p>
            </div>
            <div class="content__gh">

                <div class="content__gh-list" id="ghList">
                    <div class="content__gh-list-item">
                        <img src="https://api.murselsen.com//photos/IMG_20231015_135507.jpg" alt="Repo Name"
                            class="content__gh-list-item__img" />
                        <div class="content__gh-list-item__main">
                            <h3 class="content__gh-list-item__title">Repo Name</h3>
                            <p class="content__gh-list-item__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam,
                                voluptatum, unde, omnis
                                voluptatibus
                                esse suscipit.</p>

                            <div class="content__gh-list-item__main-alt">
                                <ul class="content__gh-list-item__tags">
                                    <li>Javascript</li>
                                    <li>Css</li>
                                    <li>Html</li>
                                    <li>Php</li>
                                </ul>
                                <span class="content__gh-list-item__languages">
                                    <b>Javascript</b>
                                    <i class="ri-code-box-fill"></i>
                                </span>
                            </div>
                        </div>
                        <div class="content__gh-list-item__footer">
                            <ul class="Contributors">

                                <li class="Contributors-item">
                                    <a href="#" class="Contributors-link" title="Username" target="_blank">
                                        <img src="https://cdn-icons-png.flaticon.com/512/6858/6858463.png" alt="Username"
                                            class="Contributors-link__img" />
                                    </a>
                                </li>


                            </ul>
                            <div class="Controllers">
                              
                                <a href="#" title="{RepoName} | Github Repository | " class="Controllers-link">
                                    <i class="ri-red-packet-fill"></i>
                                </a>
                                <a href="#" title="{RepoName} | Github Repository Releases | " class="Controllers-link">
                                    <i class="ri-github-fill"></i>
                                </a>
                                <a href="#" title="{RepoName} | Page Link | " class="Controllers-link">
                                    <i class="ri-window-fill"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutContent