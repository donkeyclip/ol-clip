import { HTMLClip,loadPlugin } from "@donkeyclip/motorcortex";
import MapsDef from "@donkeyclip/motorcortex-ol";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";

import { fontSize, fontWeight, height, left, draw,top, scale, GotoIncident } from "./incidents";
import { initParams } from "./initParams";
const Maps = loadPlugin(MapsDef);

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParams: initParams[0].value,
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;700;800;900&display=swap`,
    },
  ],
});

const base = MapsDef.utils.fromLonLat([0,46.95]);
const bern = MapsDef.utils.fromLonLat([360, 46.95]);
const finish = MapsDef.utils.fromLonLat([720,46.95]);

const mapClip = new Maps.Clip(
  {
    parameters: {
      view: { center: base, zoom: 1 }
    }
  },
  {
    selector: ".map",
    containerParams: { width: "400px", height: "400px" },
    initParams: {color:"@initParams.color"},
  }
);


mapClip.addIncident(GotoIncident(bern,1),8200)
mapClip.addIncident(GotoIncident(finish,4,6000),12200)
clip.addIncident(mapClip,0)
clip.addIncident(top("0%",".welcome-later", 1000,"@stagger(0, 600)","easeInOutExpo"), 0);
clip.addIncident(top("0%",".to-later", 1000,"@stagger(0, 600)","easeInOutExpo"), 0);
clip.addIncident(top("0%",".motor-later", 1000,"@stagger(0, 600)","easeInOutExpo"), 0);
clip.addIncident(top("0%",".open-later", 1000,"@stagger(0, 600)","easeInOutExpo"), 0);
clip.addIncident(top("0%",".plugin-later", 1000,"@stagger(0, 600)","easeInOutExpo"), 0);
//text2
clip.addIncident(top("0%",".in-later", 1000,"@stagger(0, 600)","easeInOutExpo"), 1600);
clip.addIncident(top("0%",".clip-later", 1000,"@stagger(0, 600)","easeInOutExpo"), 1600);
clip.addIncident(top("0%",".some-later", 1000,"@stagger(0, 600)","easeInOutExpo"), 1600);
clip.addIncident(top("0%",".will-later", 1000,"@stagger(0, 600)","easeInOutExpo"), 1600);
clip.addIncident(top("0%",".cap-later", 1000,"@stagger(0, 600)","easeInOutExpo"), 1600);
clip.addIncident(top("0%",".of-later", 1000,"@stagger(0, 600)","easeInOutExpo"), 1600);

clip.addIncident(top("69%",".text",1000,0,"easeInOutExpo"),5200);
clip.addIncident(top("5%",".text2",1000,0,"easeInOutExpo"),5200);
clip.addIncident(fontWeight("100",".later",1000,0,"easeInOutExpo"),5200)
clip.addIncident(fontSize("50px",".later",1000,0,"easeInOutExpo"),5200)
clip.addIncident(height("54px",".welcome-text,.description-text",1000,0,"easeInOutExpo"),5200)
clip.addIncident(left("72%",".text2",1000,0,"easeInOutExpo"),5200)
clip.addIncident(draw(),6200)
clip.addIncident(scale(0,1.4,".map-wrapper",1000,0,"easeInOutExpo"),7200)
clip.addIncident(scale(1.4,2.4,".map-wrapper",4000,0),12200)
clip.addIncident(top("100%",".later",1000,0,"easeInOutExpo"),8200)
clip.addIncident(left("-258%",".big-text-wrapper",8000,0),9200)
clip.addIncident(top("50%",".news-letter",500,0,"easeInOutExpo"),18200)
