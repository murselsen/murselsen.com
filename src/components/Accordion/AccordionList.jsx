import React from 'react'
import './Accordion.css';

// AccordionList component
const AccordionList = () => {
    return (
        <ul class="accordion">
            <li class="accordion-item">
                <h5 class="accordion-item-title accordion">personal-info</h5>
                <ul class="accordion-item__list">
                    <li class="accordion-item__list-item">
                        <a href="#" target="_blank">
                            <i class="ri-file-pdf-2-line"></i>
                            <span>Cv</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="accordion-item">
                <h5 class="accordion-item-title accordion">social-media</h5>
                <ul class="accordion-item__list">
                    <li class="accordion-item__list-item">
                        <a href="https://www.github.com/murselsen/" target="_blank">
                            <i class="ri-github-fill"></i>
                            <span>murselsen</span>
                        </a>
                    </li>

                    <li class="accordion-item__list-item">
                        <a href="https://www.instagram.com/35.mursel/" target="_blank">
                            <i class="ri-instagram-fill"></i>
                            <span>35.mursel</span>
                        </a>

                    </li>
                    <li class="accordion-item__list-item">
                        <a href="https://www.linkedin.com/in/murselsen/" target="_blank">
                            <i class="ri-linkedin-fill"></i>
                            <span>murselsen</span>
                        </a>
                    </li>
                    <li class="accordion-item__list-item">
                        <a href="https://www.facebook.com/35mursel/" target="_blank">
                            <i class="ri-facebook-fill"></i>
                            <span>35mursel</span>
                        </a>
                    </li>
                    <li class="accordion-item__list-item">
                        <a href="https://open.spotify.com/user/11186162261" target="_blank">
                            <i class="ri-spotify-fill"></i>
                            <span>11186162261</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="accordion-item">
                <h5 class="accordion-item-title accordion">contacts</h5>
                <ul class="accordion-item__list">
                    <li class="accordion-item__list-item">
                        <a href="mailto:murselsen_35@hotmail.com">
                            <i class="ri-mail-fill"></i>
                            <span>murselsen_35</span>
                        </a>
                    </li>
                    <li class="accordion-item__list-item">
                        <a href="tel:+905331474924">
                            <i class="ri-phone-fill"></i>
                            <span>+90-533-147-49-24</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

const AccordionItem = () => {

}

export default AccordionList