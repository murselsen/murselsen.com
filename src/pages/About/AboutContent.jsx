import React from 'react'
import Css from './Css/AboutContent.module.css'
// Page Components
import GithubItem from './githubItem'
const AboutContent = () => {
    return (
        <div className={Css.about__content}>
            <div className={Css.content__info} id="aboutContent">
                <p className={Css.tag}>/**</p>
                <p className={Css.text}>I'm Mürsel</p>
                <p className={Css.text}>I live in İzmir, but my dreams are wide enough to reach every corner of the
                    world, line by line, through code. My
                    technical journey began with electricity meters, but over time, my growing passion for software opened up an
                    entirely
                    new path. Writing code, for me, is more than just a job—it's the most powerful way to create, to solve
                    problems, and to
                    express myself. I put on my music, grab a coffee, and start coding—becoming a little more myself with every
                    line I
                    write.</p>
                <p className={Css.text}>Right now, I'm steadily progressing on the path to becoming a Full Stack
                    Developer. I'm eager to learn new technologies,
                    build different kinds of projects, and pursue this craft with passion. I'm ready to turn this passion from a
                    hobby into
                    a full-fledged career. Because I truly believe that anything done with passion eventually turns into
                    success. And I’m
                    determined to walk that path.</p>
                <p className={Css.tag}>&nbsp;&nbsp;*/</p>
            </div>
            <div className={Css.content__gh}>

                <div className={Css.content__ghList} id="ghList">
                    <GithubItem />
                    <GithubItem />
                </div>
            </div>
        </div>
    )
}

export default AboutContent