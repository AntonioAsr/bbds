import { COLORS } from "../lib/constants";
import { FONTS } from "../lib/constants";
import FontPage from "./fontPage";
import { TEXT_TYPES } from "../lib/constants";
import { Container, Row, Col } from 'react-grid-system';
import Header from "../components/header";
import Text from "../components/Text";

const typographyTypes = {
  active: COLORS.primary,
  inactive: COLORS.inactive,
  white: COLORS.white,
  primary: COLORS.primary,
  secondary: COLORS.secondary,
  tertiary: COLORS.tertiary
}

export default function Home() {
  const allFonts = Object.keys(FONTS);
  const typographyColors = Object.keys(typographyTypes);
  return (
    <>
      <Header />
      <FontPage />
      <style jsx global>{`
        html,
        body {
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}