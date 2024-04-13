import Link from '@docusaurus/Link';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import styles from './FullDay.module.css';
import FAQ from './FAQ';
import hello from './img/hello.png';

export const eventName = 'Nazwa!';

export default function FullDay() {
  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>{eventName}</h1>
        </div>
      </div>
      <div className="container">
        <div className="row margin-top--lg margin-bottom--lg">
          <div className="col">
            <img
              src={hello}
              alt="a group of friendly faces, people waving to welcome you"
              width="300px"
              height="300px"
              style={{ display: 'block', marginLeft: 'auto' }}
            />
          </div>
          <div className="col">
            <p>Hello, content community!</p>
            <p>
              With a truly broken heart we received the news about the soap!
              conference not happening this year. But once the first wave of
              sadness has passed, we wiped away our tears, blew off the dust
              from our keyboards, and decided we want to meet all of you this
              year anyway!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.callToAction}>
        <div className="container">Join us at MeetContentKRK {eventName}</div>
        <Link className="button button--secondary button--lg">Register</Link>
      </div>
      <div className="container">
        <div className={styles.bigInfo}>
          <h2 className={styles.infoLabel}>What?</h2>
          <div>
            A full day MeetContent event, with workshops and presentations.
          </div>
          <h2 className={styles.infoLabel}>When?</h2>
          <div>June 8</div>
          <h2 className={styles.infoLabel}>Where?</h2>
          <div>TBD</div>
        </div>
      </div>
      <div className={styles.agendaRow}>
        <div className="container">
          <div className={styles.agenda}>
            <h2>Agenda</h2>
            <Tabs>
              <TabItem
                value="presentations"
                label="Presentations"
                default
              >
                Coing soon!
              </TabItem>
              <TabItem
                value="workshops"
                label="Workshops"
              >
                Comng soon!
              </TabItem>
            </Tabs>
          </div>
        </div>
      </div>
      <div className={styles.callForSpeakers}>
        <div className="container">
          <h2>Call for speakers and trainers!</h2>
          <p>
            Is there a content-related topic that you're particularly passionate
            about? Are you ready to share your expertise with the community?
            That's great news!
          </p>
          <p>Propose your presentation or workshop with this form:</p>
          <p>
            <Link className="button button--primary button--lg">
              Submit a proposal
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.contact}>
        <div className="container">
          <div className={styles.contactInner}>
            <div>
              Content community, Cracow in June, coś tam, coś tam… Can it get
              any better than that?
            </div>
            <div>
              Well, who knows? We have a few surprises up in our sleeve 🤫
            </div>
            <div>More details coming soon, so keep this page bookmarked!</div>
            <div>
              Want to reach out to us directly? Drop us a message at ...@...
            </div>
          </div>
        </div>
      </div>
      <div className={styles.faq}>
        <div className="container">
          <h2>FAQ</h2>
          <FAQ />
        </div>
      </div>
    </>
  );
}
