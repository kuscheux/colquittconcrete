import {
  ArrowRight,
  Check,
  CircleDot,
  Hammer,
  HardHat,
  MapPin,
  Ruler,
  ShieldCheck,
  Shovel,
  Sparkles,
} from "lucide-react";

const contactEmail = "Colquittconcrete@yahoo.com";
const contactPhone = "770-688-9648";
const estimateHref =
  "mailto:Colquittconcrete@yahoo.com?subject=Concrete%20Estimate%20Request&body=Name%3A%0APhone%20or%20email%3A%0AProject%20type%3A%0AProject%20address%3A%0AApproximate%20size%3A%0ADetails%3A";

const services = [
  {
    title: "Driveways and parking pads",
    text: "New concrete pours, widened drives, clean control joints, and broom-finished surfaces built for daily use.",
    image: "/media/IMG_3745.jpeg",
  },
  {
    title: "Patios, porches, and walkways",
    text: "Backyard pads, curved patio extensions, front entries, porch slabs, and smooth transitions around homes.",
    image: "/media/IMG_3945.jpeg",
  },
  {
    title: "Stamped and patterned concrete",
    text: "Decorative hex-pattern concrete for sidewalks, public paths, and custom outdoor surfaces.",
    image: "/media/IMG_4035.jpeg",
  },
  {
    title: "Demo, prep, and rebuilds",
    text: "Concrete removal, excavation, forms, base preparation, reinforcement, and replacement pours.",
    image: "/media/IMG_4074.jpeg",
  },
];

const gallery = [
  {
    src: "/media/IMG_3745.jpeg",
    label: "Residential driveway extension",
    type: "Driveway",
  },
  {
    src: "/media/IMG_3945.jpeg",
    label: "Fresh patio finish",
    type: "Patio",
  },
  {
    src: "/media/IMG_4037.jpeg",
    label: "Hex pattern walkway",
    type: "Decorative",
  },
  {
    src: "/media/IMG_4060.jpeg",
    label: "Curved concrete approach",
    type: "Walkway",
  },
  {
    src: "/media/IMG_4070.jpeg",
    label: "Backyard slab and apron",
    type: "Slab",
  },
  {
    src: "/media/IMG_4081.jpeg",
    label: "Large pad finishing",
    type: "Site work",
  },
];

const process = [
  "Site review and measurements",
  "Demo, grading, and form setup",
  "Reinforcement and pour planning",
  "Finish, joints, cleanup, and cure guidance",
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Colquitt Concrete home">
          <span className="brandMark">CC</span>
          <span>
            Colquitt Concrete
            <small>Outdoor Solutions</small>
          </span>
        </a>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <img
          className="heroImage"
          src="/media/IMG_4081.jpeg"
          alt="Large concrete slab being finished near a wooded property"
        />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow">
            <HardHat size={16} />
            Concrete and outdoor construction
          </p>
          <h1>Colquitt Concrete and Outdoor Solutions</h1>
          <p className="heroCopy">
            Driveways, slabs, patios, sidewalks, decorative concrete, demo, and
            site prep handled by a crew that knows the work from dirt to finish.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#contact">
              Request an estimate <ArrowRight size={17} />
            </a>
            <a className="button secondary" href="tel:7706889648">
              {contactPhone}
            </a>
            <a className="button secondary" href="#work">
              View recent work
            </a>
          </div>
        </div>
      </section>

      <section className="quickStats" aria-label="Company highlights">
        <div>
          <span className="mono">01</span>
          <strong>Residential and light commercial</strong>
          <p>Concrete surfaces around homes, streets, and job sites.</p>
        </div>
        <div>
          <span className="mono">02</span>
          <strong>Full prep included</strong>
          <p>Removal, grading, forms, rebar, and finish work.</p>
        </div>
        <div>
          <span className="mono">03</span>
          <strong>Clean outdoor solutions</strong>
          <p>Practical layouts with drainage, access, and durability in mind.</p>
        </div>
      </section>

      <section className="section split" id="services">
        <div className="sectionIntro">
          <p className="eyebrow dark">
            <CircleDot size={15} />
            Services
          </p>
          <h2>Concrete work built for everyday use.</h2>
          <p>
            The photos show a crew handling the complete sequence: breaking out
            old concrete, shaping the grade, setting forms, placing steel,
            pouring, finishing, and cutting clean joints.
          </p>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <img src={service.image} alt="" />
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section workBand" id="work">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow dark">
              <Sparkles size={15} />
              Project gallery
            </p>
            <h2>Recent concrete and outdoor work.</h2>
          </div>
          <p>
            A mix of smooth broom-finished pads, large slabs, sidewalk work, and
            decorative patterned concrete.
          </p>
        </div>
        <div className="gallery">
          {gallery.map((item) => (
            <figure key={item.src} className="galleryItem">
              <img src={item.src} alt={item.label} />
              <figcaption>
                <span>{item.label}</span>
                <small>{item.type}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section process">
        <div>
          <p className="eyebrow dark">
            <Ruler size={15} />
            Process
          </p>
          <h2>Measured first. Poured once.</h2>
          <p>
            Strong concrete starts before the truck arrives. The site needs the
            right layout, compacted base, forms, reinforcement, and finish plan.
          </p>
        </div>
        <ol className="steps">
          {process.map((step, index) => (
            <li key={step}>
              <span className="mono">{String(index + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="mediaStrip" aria-label="Jobsite videos">
        <video
          src="/media/IMG_3744.mov"
          poster="/media/IMG_3921.jpeg"
          muted
          playsInline
          controls
        />
        <video
          src="/media/IMG_4066.mov"
          poster="/media/IMG_4071.jpeg"
          muted
          playsInline
          controls
        />
      </section>

      <section className="section proof">
        <div className="proofCard">
          <ShieldCheck size={24} />
          <h3>Outdoor concrete that fits the property.</h3>
          <p>
            From tight residential entries to larger slabs near wooded lots, the
            work is formed around access, slope, edges, existing structures, and
            long-term use.
          </p>
        </div>
        <div className="proofList">
          {[
            ["Surface prep", Shovel],
            ["Demolition", Hammer],
            ["Forms and reinforcement", Ruler],
            ["Finish and cleanup", Check],
          ].map(([label, Icon]) => (
            <div key={label as string}>
              <Icon size={19} />
              <span>{label as string}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">
            <MapPin size={15} />
            Estimates
          </p>
          <h2>Ready to price a driveway, patio, slab, or sidewalk?</h2>
          <p>
            Share the project location, approximate size, and a few photos of
            the area. Colquitt Concrete and Outdoor Solutions can review the
            scope and plan the next step.
          </p>
          <div className="contactDirect">
            <a href="tel:7706889648">{contactPhone}</a>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </div>
        </div>
        <form className="contactForm">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Phone or email
            <input type="text" name="contact" placeholder="Best way to reach you" />
          </label>
          <label>
            Project type
            <select name="project">
              <option>Driveway or parking pad</option>
              <option>Patio or porch slab</option>
              <option>Sidewalk or walkway</option>
              <option>Stamped or decorative concrete</option>
              <option>Demo, grading, or site prep</option>
            </select>
          </label>
          <label>
            Details
            <textarea
              name="details"
              placeholder="Approximate size, location, access notes, and timing"
            />
          </label>
          <a className="formButton" href={estimateHref}>
            Prepare estimate request <ArrowRight size={17} />
          </a>
        </form>
      </section>
    </main>
  );
}
