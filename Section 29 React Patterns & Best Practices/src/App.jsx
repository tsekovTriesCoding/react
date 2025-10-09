import Accrodion from "./components/Accordion/Accordion.jsx";
import AccordionItem from "./components/Accordion/AccordionItem.jsx";

function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>
      <Accrodion className="accordion">
        <AccordionItem
          id="experience"
          className="accordion-item"
          title="We got 20 years of experience"
        >
          <article>
            <p>You can&apos;t go wrong with us.</p>
            <p>We are in the business of planning highly individualized vacation trips for more than 20 years.</p>
          </article>
        </AccordionItem>
        <AccordionItem
          id="local-guides"
          className="accordion-item"
          title="We are working with local guides"
        >
          <article>
            <p>We are not doing this along from out office.</p>
            <p>Instead, we are working with local guides to ensure safe and pleasant vacation.</p>
          </article>
        </AccordionItem>
      </Accrodion>
    </section>
  </main>;
}

export default App;
