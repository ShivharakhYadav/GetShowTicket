import { footerLinks } from "./consts";

const Footer = () => {
  return (
    <section className="px-4">
      <div className="mx-auto grid w-full max-w-screen-xl gap-8 py-20 lg:grid-cols-5">
        <div className="sm:col-span-3 lg:col-span-2">
          <h3 className="mb-2 text-sm font-bold">Get Show Tickets</h3>
          <p className="max-w-sm text-sm">
            Get Show Tickets is your ultimate platform for discovering and
            purchasing tickets for the latest concerts, theater productions, and
            live events. Experience seamless ticket booking with user-friendly
            features and secure transactions.
          </p>
        </div>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title}>
            <h3 className="mb-4 text-sm font-bold">{footerLink.title}</h3>
            <ul className="space-y-2 text-sm">
              {footerLink.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto w-full py-2">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <p>
            <span className="text-xs">
              &copy; {new Date().getFullYear()} Four Eyed Gems
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
