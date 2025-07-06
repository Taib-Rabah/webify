import Link from "next/link";
import Section, { type Link as LinkData } from "./Section";

export default function Footer() {
  return (
    <footer className="wrapper bg-hero-background text-hero-foreground py-10 lg:py-20 xl:py-30">
      <div className="flex flex-col gap-10 min-sm:max-lg:px-6">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-17 xl:gap-25">
          {Object.entries(links).map(([key, value]) => (
            <Section key={key} title={key} links={value} />
          ))}
        </div>
        <div className="border-t-1 border-t-hero-foreground/10 pt-10 flex-wrap gap-6 flex items-center justify-between">
          <p className="text-hero-foreground/70">
            © {new Date().getFullYear()} Copyright, All Right Reserved, Made by Sejal_ui_ux with{" "}
            <svg className="inline-block" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.8427 1.20657C11.2998 -0.401767 8.78893 -0.401767 7.24579 1.20657C7.16024 1.29575 7.07835 1.38968 7.00011 1.48806C6.92188 1.38937 6.83999 1.29575 6.75414 1.20625C5.2113 -0.402085 2.70038 -0.402085 1.15724 1.20625C-0.3859 2.81459 -0.385595 5.43211 1.15724 7.04077L6.78458 12.907C6.84394 12.9689 6.92188 13 6.99981 13C7.07774 13 7.15568 12.9689 7.21504 12.907L12.8424 7.04077C14.3858 5.43243 14.3858 2.81491 12.8427 1.20657Z"
                fill="#1082E9"
              />
            </svg>
          </p>
          <ul className="flex gap-8">
            {socials.map((social) => (
              <li key={social.id}>
                <Link href={social.href}>{social.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

const socials = [
  {
    id: "twitter",
    href: "/",
    icon: (
      <svg
        className="hover:*:fill-primary *:duration-150"
        width="17"
        height="15"
        viewBox="0 0 17 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 1.73969C16.3625 2.04897 15.6896 2.24227 14.9812 2.35825C15.6896 1.89433 16.2563 1.15979 16.5042 0.270619C15.8313 0.695876 15.0875 1.00515 14.2729 1.19845C13.6354 0.463918 12.7146 0 11.7229 0C9.81042 0 8.25208 1.70103 8.25208 3.78866C8.25208 4.09794 8.2875 4.36856 8.35833 4.63918C5.48958 4.48454 2.90417 2.9768 1.16875 0.657216C0.885417 1.23711 0.708333 1.85567 0.708333 2.55155C0.708333 3.86598 1.31042 5.02577 2.26667 5.72165C1.7 5.68299 1.16875 5.52835 0.672917 5.25773V5.29639C0.672917 7.15206 1.87708 8.69845 3.47083 9.04639C3.1875 9.12371 2.86875 9.16237 2.55 9.16237C2.3375 9.16237 2.08958 9.12371 1.87708 9.08505C2.3375 10.5928 3.6125 11.7139 5.13542 11.7139C3.93125 12.7191 2.44375 13.3376 0.814583 13.3376C0.53125 13.3376 0.247917 13.3376 0 13.299C1.55833 14.3814 3.36458 15 5.34792 15C11.7583 15 15.2646 9.20103 15.2646 4.17526C15.2646 4.02062 15.2646 3.82732 15.2646 3.67268C15.9375 3.1701 16.5396 2.51289 17 1.73969Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: "facebook",
    href: "/",
    icon: (
      <svg
        className="hover:*:fill-primary *:duration-150"
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 9.5573C18.9992 4.4726 15.0424 0.278485 9.99592 0.0132214C4.94945 -0.252042 0.579855 3.50441 0.0525261 8.56134C-0.474803 13.6183 3.02473 18.2055 8.01601 19V12.3203H5.60428V9.5573H8.01601V7.45142C8.01601 5.0558 9.43443 3.73253 11.6039 3.73253C12.3164 3.74247 13.0272 3.80477 13.7307 3.91892V6.27153H12.5325C12.1189 6.21626 11.7028 6.35325 11.4017 6.64381C11.1006 6.93437 10.9471 7.34697 10.9847 7.76506V9.5573H13.6196L13.1981 12.3203H10.9847V19C15.6013 18.2651 19.0007 14.2603 19 9.5573Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: "instagram",
    href: "/",
    icon: (
      <svg
        className="hover:*:fill-primary *:duration-150"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.28937 0.054C6.24937 0.0105 6.55575 0 9 0C11.4443 0 11.7506 0.0105 12.7106 0.054C14.1739 0.12075 15.4583 0.47925 16.4895 1.5105C17.5211 2.54212 17.8792 3.82687 17.946 5.28937C17.9895 6.24937 18 6.55575 18 9C18 11.4443 17.9895 11.7506 17.946 12.7106C17.8792 14.1739 17.5208 15.4583 16.4895 16.4895C15.4579 17.5211 14.1727 17.8792 12.7106 17.946C11.7506 17.9895 11.4443 18 9 18C6.55575 18 6.24937 17.9895 5.28937 17.946C3.82612 17.8792 2.54175 17.5208 1.5105 16.4895C0.478875 15.4579 0.12075 14.1731 0.054 12.7106C0.0105 11.7506 0 11.4443 0 9C0 6.55575 0.0105 6.24937 0.054 5.28937C0.12075 3.82612 0.47925 2.54175 1.5105 1.5105C2.54212 0.478875 3.82687 0.12075 5.28937 0.054ZM12.6368 1.674C11.6876 1.6305 11.403 1.6215 9 1.6215C6.597 1.6215 6.31238 1.63087 5.36325 1.674C4.33913 1.72088 3.3885 1.926 2.65725 2.65725C1.926 3.3885 1.72088 4.33913 1.674 5.36325C1.6305 6.31238 1.6215 6.597 1.6215 9C1.6215 11.403 1.63087 11.6876 1.674 12.6368C1.72088 13.6609 1.926 14.6115 2.65725 15.3427C3.3885 16.074 4.33913 16.2791 5.36325 16.326C6.312 16.3695 6.59663 16.3785 9 16.3785C11.4034 16.3785 11.688 16.3691 12.6368 16.326C13.6609 16.2791 14.6115 16.074 15.3427 15.3427C16.074 14.6115 16.2791 13.6609 16.326 12.6368C16.3695 11.6876 16.3785 11.403 16.3785 9C16.3785 6.597 16.3691 6.31238 16.326 5.36325C16.2791 4.33913 16.074 3.3885 15.3427 2.65725C14.6115 1.926 13.6609 1.72088 12.6368 1.674Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.90909 9.40918C4.90909 6.92403 6.92357 4.90918 9.40909 4.90918C11.8946 4.90918 13.9091 6.92366 13.9091 9.40918C13.9091 11.8947 11.8946 13.9092 9.40909 13.9092C6.92357 13.9092 4.90909 11.8943 4.90909 9.40918ZM6.48796 9.40918C6.48796 11.0224 7.79589 12.3303 9.40909 12.3303C11.0223 12.3303 12.3302 11.0224 12.3302 9.40918C12.3302 7.79599 11.0223 6.48805 9.40909 6.48805C7.79589 6.48805 6.48796 7.79599 6.48796 9.40918Z"
          fill="white"
        />
        <circle cx="13.5" cy="4.49998" r="1.22727" fill="white" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    href: "/",
    icon: (
      <svg
        className="hover:*:fill-primary *:duration-150"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.75 0H17.25C17.6625 0 18 0.3375 18 0.75V17.25C18 17.6625 17.6625 18 17.25 18H0.75C0.3375 18 0 17.6625 0 17.25V0.75C0 0.3375 0.3375 0 0.75 0ZM2.6625 15.3375H5.325V6.75H2.6625V15.3375ZM4.0125 5.5875C3.15 5.5875 2.475 4.9125 2.475 4.05C2.475 3.1875 3.15 2.5125 4.0125 2.5125C4.875 2.5125 5.55 3.1875 5.55 4.05C5.55 4.875 4.875 5.5875 4.0125 5.5875ZM12.675 15.3375H15.3V10.6125C15.3 8.2875 14.8125 6.525 12.1125 6.525C10.8375 6.525 9.9375 7.2375 9.6 7.9125H9.5625V6.75H7.0125V15.3375H9.675V11.1C9.675 9.975 9.9 8.8875 11.2875 8.8875C12.675 8.8875 12.675 10.1625 12.675 11.175V15.3375Z"
          fill="white"
        />
      </svg>
    ),
  },
];

const links = {
  company: [
    { id: "about", label: "About us", href: "/" },
    { id: "contact", label: "Contact us", href: "/" },
    { id: "careers", label: "Careers", href: "/" },
    { id: "press", label: "Press", href: "/" },
  ],
  product: [
    {
      id: "features",
      label: "Features",
      href: "/",
    },
    {
      id: "pricing",
      label: "Pricing",
      href: "/",
    },
    {
      id: "news",
      label: "News",
      href: "/",
    },
    {
      id: "help",
      label: "Help desk",
      href: "/",
    },
    {
      id: "support",
      label: "Support",
      href: "/",
    },
  ],
  services: [
    {
      id: "digital-marketing",
      label: "Digital Marketing",
      href: "/",
    },
    {
      id: "content-writing",
      label: "Content Writing",
      href: "/",
    },
    {
      id: "seo",
      label: "SEO for Business",
      href: "/",
    },
    {
      id: "ui-design",
      label: "UI Design",
      href: "/",
    },
  ],
  legal: [
    {
      id: "privacy-policy",
      label: "Privacy Policy",
      href: "/",
    },
    {
      id: "terms-and-conditions",
      label: "Terms & Conditions",
      href: "/",
    },
    {
      id: "return-policy",
      label: "Return Policy",
      href: "/",
    },
  ],
  contact: [
    {
      id: "email",
      label: "support@brainwave.io",
      href: "mailto:support@brainwave.io",
    },
    {
      id: "phone",
      label: "+133-394-3439-1435",
      href: "tel:+133-394-3439-1435",
    },
  ],
} satisfies Record<string, LinkData[]>;
