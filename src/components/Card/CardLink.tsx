interface CardLinkProps {
  link: string;
  children: React.ReactNode;
}

const CardLink = (props: CardLinkProps) => {
  const { link, children } = props;

  return (
    <a
      className="card__link link__arrow--external"
      href={link}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
};

export default CardLink;
