import { Link } from "react-router";

const About = () => {
  return (
    <section>
      <h1>About us!</h1>
      <h2>We are small software house located in California, USA</h2>
      <p>
        We create from passion in order to help micro influencers reach out to
        more people!
      </p>
      <span>
        <Link to="/">
          <i>{"<- Go back"}</i>
        </Link>
      </span>
    </section>
  );
};

export default About;
