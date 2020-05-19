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
          background-color: lightgrey;
        }
        * {
          box-sizing: border-box;
        }
        @font-face {
          font-family: Swiss721BT-BoldCondensed;
          src: url('/fonts/Swiss721BT-BoldCondensed.otf');
        }
        @font-face {
          font-family: ProximaNova-Bold;
          src: url('/fonts/proximanova-bold.otf');
        }
        @font-face {
          font-family: ProximaNova-Semibold;
          src: url('/fonts/ProximaNova-Semibold.ttf');
        }
        @font-face {
          font-family: ProximaNova-Regular;
          src: url('/fonts/ProximaNova-Regular.ttf');
        }
        @font-face {
          font-family: ProximaNova-Light;
          src: url('/fonts/ProximaNova-Light.ttf');
        }
      `}</style>
    </>
  )
}