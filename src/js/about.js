import axios from 'axios';

const allAccordion = document.querySelectorAll('.accordion');
console.log(allAccordion);

allAccordion.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        const list = accordion.parentNode.children[1]
        if (list.nodeName === "UL") {
            list.classList.toggle('active');
        }
    })

});


//LosAlgoritmos / Cinemania
const getRepoData = async (user, repo) => {
    // https://api.github.com/repos/LosAlgoritmos/Cinemania
    const url = `https://api.github.com/repos/${user}/${repo}`;
    const repoResponse = await axios.get(url);
    console.log(repoResponse.data);
    const languagesResponse = await axios.get(repoResponse.data.languages_url);
    const contributorsResponse = await axios.get(repoResponse.data.contributors_url);
    console.log(contributorsResponse.data);
    return {
        name: repoResponse.data.name,
        description: repoResponse.data.description,
        topics: repoResponse.data.topics,
        homepage: repoResponse.data.homepage,
        language: repoResponse.data.language,
        languages: Object.keys(languagesResponse.data),
        contributors: [],
    }

}


getRepoData('murselsen', 'murselsen.com').then((data) => {
    console.log("murselsen - GetRepoData:", data)
})
getRepoData('LosAlgoritmos', 'Cinemania').then((data) => {
    console.log("LosAlgoritmos - GetRepoData:", data)
})


/* 

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
                        <!-- Releases -->
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

*/

