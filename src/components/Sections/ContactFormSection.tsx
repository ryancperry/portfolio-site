import { Heading } from '@/components/Headings';
import ContactForm from '@/components/ContactForm/ContactForm';

function ContactFormSection() {
  return (
    <section className="contact__section banner" id="contact">
      <div className="banner__background bg--triangles" />
      <div className="container--inner banner__container">
        <header className="banner__text-container">
          <Heading as="h2" level={2}>
            Contact Me
          </Heading>
          <p>
            Have a question or want to talk about a project? Send me a message.
          </p>
        </header>
        <div className="contact__form-container">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
