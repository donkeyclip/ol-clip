import { CSSEffect, loadPlugin } from "@donkeyclip/motorcortex";
import SVGDDef from "@donkeyclip/motorcortex-svgdraw";
import MapsDef from "@donkeyclip/motorcortex-ol";
const SVGD = loadPlugin(SVGDDef);
const Maps = loadPlugin(MapsDef);

export const opacity = (selector, duration, delay, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 1,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );

export const top = (
  value,
  selector,
  duration,
  delay,
  easing = "linear",
  initialValues = {}
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        top: value,
      },
      initialValues,
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );

export const fontWeight = (
  value,
  selector,
  duration,
  delay,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        fontWeight: value,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );

export const fontSize = (value, selector, duration, delay, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        fontSize: value,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );
export const height = (value, selector, duration, delay, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        height: value,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );
export const left = (
  value,
  selector,
  duration,
  delay,
  easing = "linear",
  initialValues = {}
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        left: value,
      },
      initialValues,
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );

export const draw = () =>
  new SVGD.Draw(
    {
      animatedAttrs: {
        cover: 1,
      },
    },
    {
      selector: ".st1",
      duration: 1000,
    }
  );

export const scale = (
  start,
  end,
  selector,
  duration,
  delay,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform: { scale: end },
      },
      initialValues: {
        transform: { scale: start },
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );
export const GotoIncident = (valeu, zoom, duration = 4000) =>
  new Maps.GoTo(
    {
      animatedAttrs: {
        goto: {
          zoom: zoom,
          center: valeu,
        },
      },
    },
    { duration, selector: "!#olmap" }
  );
