import React from 'react';
import './AboutUs.css'; // Importing the CSS file

const AboutUs = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <div className="container mt-5">
                <div className="grid-container">
                    <p className="text-center mb-4" id="font1" style={{ fontSize: '50px' }}>About CampusQuery</p>
                    <p className="about-text">Welcome to CampusQuery, a community-driven platform dedicated to fostering knowledge sharing, collaboration,
                        and problem-solving in the realm of academia and student life. At CampusQuery, our mission is to empower
                        students and educators around the world to learn, grow, and excel in their academic pursuits.</p>
                    <h3 className="mt-4" id="font1">Our Story</h3>
                    <p className="about-text">CampusQuery was founded with a simple yet powerful vision: to create a space where students, educators, and
                        enthusiasts alike can come together to exchange ideas, ask questions, and find solutions to their most
                        pressing challenges. Since our inception, we've been committed to building a vibrant community where
                        knowledge knows no bounds and curiosity is celebrated.</p>
                    <h3 className="mt-4" id="font1">What We Offer</h3>
                    <ul className="about-text">
                        <li><strong>Q&A Platform:</strong> Our core offering revolves around a robust question and answer platform
                            where users can ask questions, provide answers, and engage in meaningful discussions related to
                            academia, student life, and beyond.</li>
                        <li><strong>Community-driven:</strong> CampusQuery thrives on the collective wisdom of its users. Our
                            community members are the heart and soul of our platform, driving engagement and fostering a culture of
                            learning.</li>
                        <li><strong>Quality Assurance:</strong> To ensure the highest standards of content quality and accuracy, our
                            platform employs various mechanisms such as peer review, voting, and moderation.</li>
                        <li><strong>Tagging System:</strong> With a comprehensive tagging system, users can easily navigate through
                            a vast repository of topics and find content relevant to their academic interests.</li>
                        <li><strong>Gamification:</strong> We believe in recognizing and rewarding contributions. Through our
                            gamification system, users earn reputation points and badges for their valuable contributions to the
                            community.</li>
                    </ul>
                    <h3 className="mt-4" id="font1">Our Values</h3>
                    <ul className="about-text">
                        <li><strong>Inclusivity:</strong> We welcome students, educators, and enthusiasts from all backgrounds and
                            disciplines, fostering an inclusive environment where everyone feels empowered to participate.</li>
                        <li><strong>Openness:</strong> Transparency and openness are the cornerstones of our community. We encourage
                            open dialogue, constructive feedback, and continuous improvement.</li>
                        <li><strong>Respect:</strong> Mutual respect is fundamental to healthy discourse. We uphold a code of
                            conduct that promotes respectful communication and discourages harassment or discrimination of any kind.
                        </li>
                        <li><strong>Learning:</strong> At CampusQuery, we embrace a lifelong learning mindset. We believe that every
                            interaction, whether asking, answering, or simply reading, is an opportunity to expand one's knowledge
                            and skills.</li>
                    </ul>
                    <h3 className="mt-4" id="font1">Join Us</h3>
                    <p className="about-text">Whether you're a student seeking academic assistance, an educator sharing your expertise, or an enthusiast
                        curious about various topics, we invite you to join our community and embark on a journey of discovery,
                        collaboration, and growth. Together, let's build a brighter future fueled by the power of knowledge sharing.
                    </p>
                    <h3 className="mt-4" id="font1">Contact Us</h3>
                    <p className="about-text">Have questions, feedback, or suggestions? We'd love to hear from you! Feel free to reach out.</p>
                </div>
            </div>

            <footer>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <a href="#"><i className="fa-brands fa-instagram icon"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter icon"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook icon"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin icon"></i></a>
                    </div>

                    <div className="col-4"></div>
                </div>
                <p>&copy; 2024 Campus Query. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default AboutUs;
