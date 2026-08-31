import Image from "next/image";
import QuoteIcon from "../icons/QuoteIcon";

const columns = [
  [
    {
      quote:
        "TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.",
      name: "Sheryl Berge",
      role: "CEO at Lynch LLC",
      avatar: "/avatar-1.webp",
    },
    {
      quote:
        "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
      name: "Amy Hahn",
      role: "Director at Velocity Industries",
      avatar: "/avatar-4.webp",
    },
  ],
  [
    {
      quote:
        "The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
      name: "Leland Kiehn",
      role: "Founder of Kiehn and Sons",
      avatar: "/avatar-5.webp",
    },
    {
      quote:
        "There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.",
      name: "Erin Powlowski",
      role: "COO at Armstrong Inc",
      avatar: "/avatar-2.webp",
    },
  ],
  [
    {
      quote:
        "I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.",
      name: "Peter Renolds",
      role: "Founder of West Inc",
      avatar: "/avatar-3.webp",
    },
    {
      quote:
        "This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
      name: "Amy Hahn",
      role: "Director at Velocity Industries",
      avatar: "/avatar-4.webp",
    },
  ],
];

const Testemonials = () => {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center flex flex-col items-center justify-center">
          <h2 className="section-title">
            Loved by businesses worldwide.
          </h2>
          <p className="mt-4 section-p">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {columns.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial) => (
                  <li key={testimonial.name + testimonial.quote}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight leading-8 text-slate-900">
                          {testimonial.quote}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="text-base text-slate-900 font-lexend">
                            {testimonial.name}
                          </div>
                          <div className="mt-1.5 text-sm text-slate-500">
                            {testimonial.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            alt=""
                            width={56}
                            height={56}
                            className="h-14 w-14 object-cover"
                            src={testimonial.avatar}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testemonials;
