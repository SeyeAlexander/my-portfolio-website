import React from "react";

type NavLinkProps = {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({ href, isActive, children }) => {
  const childText = children?.toString().toLowerCase();

  const iconClasses = `transition-all duration-300 ease-in-out ${
    isActive
      ? "text-slate-900 dark:text-slate-200 translate-x-2 "
      : "text-slate-500 group-hover:text-slate-900 dark:group-hover:text-slate-200"
  }`;
  const textClasses = `text-sm tracking-widest transition-all duration-300 ease-in-out ${
    isActive
      ? "text-slate-900 dark:text-slate-200 translate-x-2 "
      : "text-slate-500 group-hover:text-slate-900 dark:group-hover:text-slate-200"
  }`;

  const getIcon = () => {
    switch (childText) {
      case "about":
        return <span className={`${iconClasses} text-lg`}>+</span>;
      case "experience":
        return (
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className={iconClasses}
            fill='currentColor'
          >
            <path d='M4.825 12.025L8.7 15.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T2.426 12t.063-.375t.212-.325l4.6-4.6q.3-.3.713-.3t.712.3t.3.713t-.3.712zm14.35-.05L15.3 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213-.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.3.3-.7.288t-.7-.313t-.3-.712t.3-.713z' />
          </svg>
        );
      case "projects":
        return (
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className={iconClasses}
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22'
              clipRule='evenodd'
            />
            <path d='m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383' />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <a
      href={href}
      className={`group flex items-center cursor-default gap-2 py-2 transition-all duration-300 ease-in-out active:scale-[.96] ${!isActive ? "hover:translate-x-2" : ""}`}
    >
      {getIcon()}
      <span className={textClasses}>{children}</span>
    </a>
  );
};

export default NavLink;
