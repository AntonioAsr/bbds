import { COLORS } from "../lib/constants";
import { FONTS } from "../lib/constants";
import Text from "../components/Text";
import { Container, Row, Col } from 'react-grid-system';

const typographyTypes = {
    active: COLORS.primary,
    inactive: COLORS.inactive,
    white: COLORS.white,
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    tertiary: COLORS.tertiary
}

export default function FontPage() {
    const allFonts = Object.keys(FONTS);
    const typographyColors = Object.keys(typographyTypes);
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Container>
                <Row>
                    {
                        typographyColors.map((textType, index) => {
                            return (
                                <Col key={index} xs={12} sm={6} md={3} style={{ marginTop: "30px" }}>
                                    {
                                        allFonts.map((font, index) => {
                                            const color = COLORS[textType]
                                            console.log(color)
                                            return (
                                                <div key={index} style={{ alignItems: "center" }}>
                                                    <Text fontType={`${font}`} color={color}>{`${font.toUpperCase()} ${font}`}</Text>
                                                </div>
                                            )
                                        })
                                    }
                                </Col>
                            )
                        })
                    }
                </Row>
                <Text fontType={"bodyXSmallRegular"} color={COLORS.alert}>Body x-small regular</Text>
            </Container>
        </div>
    )
}