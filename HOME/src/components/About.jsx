import React from 'react';
import './About.css';
import image3 from '../images/25217.jpg';
import image2 from '../images/5446828.jpg';
import image1 from '../images/7151.jpg';
import profile1 from '../images/profile1.jpg';
import profile2 from '../images/profile2.jpg';
import profile3 from '../images/profile3.jpg';
import profile4 from '../images/profile4.jpg';

const Card = ({ image, heading, text }) => {
  return (
    <div className="card">
      <img src={image} alt="Background" className="card-image" />
      <div className="card-content">
        <h2 className="card-heading">{heading}</h2>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

const ProfileCard = ({ image, name, description, linkedIn }) => {
  return (
    <div className="card-profile">
      <img src={image} alt="Profile" className="card-image-profile" />
      <div className="card-content-profile">
        <h2 className="card-name-profile">{name}</h2>
        <p className="card-description-profile">{description}</p>
        <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="card-button">
          View Profile
        </a>
      </div>
    </div>
  );
};

function About() {
  return (
    <div className="AboutMain">
      <div className="main ">
        <div className="aboutDescription">
          <div className="aboutDes">
            <h1 id="aboutHeading">About Us</h1>
            <p id="description">
              At BookNest, we bridge the gap in access to diverse books and knowledge. Our digital platform offers a vast collection of books, personalized recommendations, and a user-friendly interface accessible anytime, anywhere. We reward loyal customers with beneficiaries in the form of coins, and our community-driven approach supports lifelong learning and literacy. BookNest generates revenue through subscriptions, sales commissions, and advertising, ensuring a sustainable and expansive digital library for all. We are a dedicated team of four members working passionately on this project.
            </p>
          </div>
        </div>
        <div className="aboutImage"></div>
      </div>
      <div className="featuresSec">
        <h1 id="features">Features</h1>
        <div className="card-container">
          <Card
            image={image1}
            heading="Extensive eBook Library"
            text="Offers a vast collection of eBooks across various genres and authors, accessible anytime, anywhere."
          />
          <Card
            image={image2}
            heading="Community-Driven Reviews and Ratings"
            text="Allows users to rate and review books they have read, contributing to a community-driven feedback system."
          />
          <Card
            image={image3}
            heading="Virtual Bookshelf and Wishlist"
            text="Users can create and manage their own virtual bookshelves and wishlists, organizing books they have read and plan to read."
          />
        </div>
      </div>
      <div className="aboutTeam">
        <h1 id="team">Meet the team</h1>
        <div className="profiles">
          <ProfileCard
            image={profile1}
            name="Shreya Agarwal"
            description="Third-year B.Tech CSE student with a passion for art and painting, blending technical expertise with creative expression and innovation."
            linkedIn="https://www.linkedin.com/in/shreya-agarwal-276bb6276/"
          />
          <ProfileCard
            image={profile2}
            name="Venu Gopal"
            description="A BTech student, is a technology enthusiast and passionate football fan, dedicated to innovation and sports"
            linkedIn="#"
          />
          <ProfileCard
            image={profile3}
            name="Monesha Ra"
            description="Passionate BTech student combining creativity with technology to create user-friendly,appealing designs, focusing on experiences."
            linkedIn="https://www.linkedin.com/in/monesha-ra-136905279/"
          />
          <ProfileCard
            image={profile4}
            name="Anisha Plawat"
            description="A B.Tech student in Computer Science, enthusiastic, hardworking, eager to learn, and contribute to new technologies and projects."
            linkedIn="https://www.linkedin.com/in/anisha-plawat-19b693259/"
          />
        </div>
      </div>
    </div>
  );
}

export default About;