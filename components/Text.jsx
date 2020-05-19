import { COLORS, FONTS } from "../lib/constants";

const getHeadingStyle = (fontType) => {
    return FONTS[fontType];
}

const Header = (props) => {
  
    const style = getHeadingStyle(props.fontType);

    if (props.fontType.indexOf("hero") > -1) {
        return (
            <h1 style={{ color: props.color, ...style }} className="hero">
                {props.children}
            </h1>
        )
    } else if (props.fontType.indexOf("h1") > -1) {
        return (
            <h1 style={{ color: props.color, ...style }}>
                {props.children}
            </h1>
        )
    } else if (props.fontType.indexOf("h2") > -1) {
        return (
            <h2 style={{ color: props.color, ...style }}>
                {props.children}
            </h2>
        )
    } else if (props.fontType.indexOf("h3") > -1) {
        return (
            <h3 style={{ color: props.color, ...style }}>
                {props.children}
            </h3>
        )
    } else if (props.fontType.indexOf("h4") > -1) {
        return (
            <h4 style={{ color: props.color, ...style }}>
                {props.children}
            </h4>
        )
    } else if (props.fontType.indexOf("h5") > -1) {
        return (
            <h5 style={{ color: props.color, ...style }}>
                {props.children}
            </h5>
        )
    } else if (props.fontType.indexOf("h6") > -1) {
        return (
            <h6 style={{ color: props.color, ...style }}>
                {props.children}
            </h6>
        )
    } else {
        return (
            <div style={{ color: props.color, ...style }}>
                {props.children}
            </div>
        )
    }
}

export default Header;