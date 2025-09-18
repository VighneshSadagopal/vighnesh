import Service from "../organisms/Service";

export default function About() {
    return (
      <article className="about active" data-page="about">
                <header>
                  <h2 className="h2 article-title">About me</h2>
                </header>
      
                <section className="about-text">
                  <p>
                  Hey there! I’m Vighnesh Sadagopal – Drupal enthusiast, contributor, and community builder based in Pune.
      
                  I love bringing people together through Drupal Meetups and DrupalCamps (currently helping steer DrupalCamp 2025). On the code side, you’ll usually find me deep in backend development and exploring ways to power up Drupal with AI.
                  </p>
                  <p>When I’m not geeking out over code, I’m all about growing the Drupal community and making open source a little more awesome every day.</p>
                </section>
      
                {/* Services */}
                <Service />
              </article>
    );
    }