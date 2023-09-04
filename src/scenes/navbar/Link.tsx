import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage; //para el 'id' de cada anchor, los llamamos coin minuscula

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `} // si es la seleccionada, cambio estilos
      href={`#${lowerCasePage}`} // href, para el id al cual llevr
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;