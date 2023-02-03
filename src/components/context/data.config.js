import React from "react";
// SVG
import Cobalt from "../../assets/images/svg/Cobalt";
import Antimony from "../../assets/images/svg/Antimony";
import Tin from "../../assets/images/svg/Tin";
import Copper from "../../assets/images/svg/Copper";
import Tungsten from "../../assets/images/svg/Tungsten";
import Molybdenum from "../../assets/images/svg/Molybdenum";
import Rheniun from "../../assets/images/svg/Rheniun";
import REE from "../../assets/images/svg/REE";
import Silver from "../../assets/images/svg/Silver";
import Model1 from "../../assets/images/svg/Model1";
import Model2 from "../../assets/images/svg/Model2";
import Model3 from "../../assets/images/svg/Model3";
import Solar_Panels from "../screen1/vector_svg/Solar_Panels"
import Smart_Phone from "../screen1/vector_svg/Smart_Phone"
import Wind_Turbine from "../screen1/vector_svg/Wind_Turbine"
import Satellite from "../screen1/vector_svg/Satellite"
import Electric_vehicle from "../screen1/vector_svg/Electric vehicle"
import F16_Jet from "../screen1/vector_svg/F-16 Jet"
import Li_ion_batteries from "../screen1/vector_svg/Li-ion batteries"
import Drone from "../screen1/vector_svg/Drone"
import Laptop from "../screen1/vector_svg/Laptop"
import Light_Switch from "../screen1/vector_svg/Light Switch"
import Pacemaker from "../screen1/vector_svg/Pacemaker"
//PNG
import CobaltImg from "../../assets/images/Cobalt.png";
import AntimonyImg from "../../assets/images/Antimony.png";
import SilverImg from "../../assets/images/Silver.png";
import TungstenImg from "../../assets/images/Tungsten.png";
import MoReImg from "../../assets/images/MoRe.png";
import REEImg from "../../assets/images/REE.png";
import TinImg from "../../assets/images/Tin.png";
import CopperImg from "../../assets/images/Copper.png";
import Img_Q1 from "../../assets/images/Quiz_Q1_Map.png"
import Img_Q2 from "../../assets/images/Quiz_Q2_Map.png"
import Img_Q3 from "../../assets/images/Quiz_Q3_Map.png"
import Img_Q4 from "../../assets/images/Quiz_Q4_Map.png"
import Img_Q5 from "../../assets/images/Quiz_Q5_Map.png"
import Img_Q6 from "../../assets/images/Quiz_Q6_Map.png"
import Img_Q7 from "../../assets/images/Quiz_Q7_Map.png"
import Img_Q8 from "../../assets/images/Quiz_Q8_Map.jpg"
export const Data = [
  {
    quest_num: 1,
    screen_1: {
      element: [<Cobalt />],
      question:
        "These specimens contain <span>Cobalt</span> Can you guess which technologies <span>Cobalt</span> is essential for?",
      image: {image:CobaltImg,width:527.39,height:436.09},
      answers: [
        {
          id: 0,
          icon: <Solar_Panels />,
          text: "Solar Panels"
        },
        {
          id: 1,
          icon: <Smart_Phone />,
          text: " Smart Phone",
          answer: true
        },
        {
          id: 2,
          icon: <Wind_Turbine />,
          text: "Wind Turbine"
        },
        {
          id: 3,
          icon: <Satellite />,
          text: "Satellite",
        },
        {
          id: 4,
          icon: <Electric_vehicle />,
          text: "Electric vehicle",
          answer: true
        },
        {
          id: 5,
          icon: <F16_Jet />,
          text: "F-16 Jet",
          answer: true

        },
        {
          id: 6,
          icon: <Li_ion_batteries />,
          text: "Li-ion batteries",
          answer: true
        },
        {
          id: 7,
          icon: <Drone />,
          text: "Drone",
          answer: true
        },
        {
          id: 8,
          icon: <Laptop />,
          text: "Laptop",
          answer: true
        },
        {
          id: 9,
          icon: <Light_Switch />,
          text: "Light Switch",
        },
        {
          id: 10,
          icon: <Pacemaker />,
          text: "Pacemaker"
        },
      ]
    },
    screen_2: {
      image: {image:CobaltImg,width:430.8,height:356.22},
      description:
        "<span>Cobalt (Co)</span> is an essential material used in rechargeable lithium-ion batteries (up to 50% Co or more). Co is also used in the manufacture of high temperature metal alloys, typically in jet engine turbines or gas turbines. Co is also used in high strength magnets which can be used in electric motors etc.<br/><span>Cobalt can be found in NSW.</span>",
      model: <Model3 />,
    },
    screen_3: {
      centerCoord: { lat: -31.330503162685716, lng: 145.18538028001788 },
      zoom: 6,
      placement: [
        {
          place: "Broken Hill",
          coord: { lat: -31.95, lng: 141.46 },
          description: ["Cobaltite crystals in siderite"],
          element: [<Cobalt />],
          mine: "A.B.H. Consols Mine",
        },
        {
          place: "Carcoar",
          coord: { lat: -33.611037, lng: 149.140362 },
          description: ["Erythrite"],
          element: [<Cobalt />],
          mine: "Pyrite Hill, Thackaringa",
        },
      ],
      element: [<Cobalt />],
      image_map: Img_Q1
    },
  },
  {
    quest_num: 2,
    screen_1: {
      element: [<Antimony />],
      question:
        "These specimens contain <span>Antimony</span> Can you guess which technologies <span>Antimony</span> is essential for?",
      image: {image:AntimonyImg,width:384.1,height:445.94},
      answers: [
        {
          id: 0,
          icon: <Solar_Panels />,
          text: "Solar Panels"
        },
        {
          id: 1,
          icon: <Smart_Phone />,
          text: " Smart Phone",
          answer: true
        },
        {
          id: 2,
          icon: <Wind_Turbine />,
          text: "Wind Turbine"
        },
        {
          id: 3,
          icon: <Satellite />,
          text: "Satellite",
          answer: true
        },
        {
          id: 4,
          icon: <Laptop />,
          text: "Laptop",
          answer: true
        },
        {
          id: 5,
          icon: <F16_Jet />,
          text: "F-16 Jet",
          answer: true
        },
        {
          id: 6,
          icon: <Li_ion_batteries />,
          text: "Li-ion batteries",
        },
        {
          id: 7,
          icon: <Drone />,
          text: "Drone",
          answer: true
        },
        {
          id: 8,
          icon: <Electric_vehicle />,
          text: "Electric vehicle",
          answer: true
        },
        {
          id: 9,
          icon: <Light_Switch />,
          text: "Light Switch",
        },
        {
          id: 10,
          icon: <Pacemaker />,
          text: "Pacemaker"
        },
      ]
    },
    screen_2: {
      image: {image:AntimonyImg,width:308.33,height:357.98},
      description:
        "<span>Antimony (Sb)</span> is mainly used as a component in semiconductors and diodes used in a variety of electronic device circuitry. Sb is also used in batteries, light or infrared sensors, paints, special metal alloys, bullets and cable sheathing, plus glass, ceramics, flame retardants. <span>Antimony can be found in NSW.</span>",
      model: <Model2 />,
    },
    screen_3: {
      centerCoord: {lat: -30.437964017870918, lng: 152.367939054966},
      zoom: 9,
      placement: [
        {
          place: "Taylors Arm",
          coord: { lat: -30.75, lng: 152.883333 },
          description: ["Stibnite crystals on quartz"],
          element: [<Antimony />],
          mine: "Burrapine Mine, Taylors Arm",
        },
        {
          place: "Hillgrove",
          coord: { lat: -30.56, lng: 151.9 },
          description: ["Smelted antimony"],
          element: [<Antimony />],
          mine: "Hillgrove",
        },
      ],
      element: [<Antimony />],
      image_map: Img_Q2
    },
  },
  {
    quest_num: 3,
    screen_1: {
      element: [<Tin />],
      question:
        "These specimens contain <span>Tin</span> Can you guess which technologies <span>Tin</span> is essential for?",
      image: {image:TinImg,width:578.65,height:433.16},
      answers: [
        {
          id: 0,
          icon: <Solar_Panels />,
          text: "Solar Panels",
          answer: true
        },
        {
          id: 1,
          icon: <Smart_Phone />,
          text: " Smart Phone",
          answer: true
        },
        {
          id: 2,
          icon: <Wind_Turbine />,
          text: "Wind Turbine",
          answer: true
        },
        {
          id: 3,
          icon: <Satellite />,
          text: "Satellite",
          answer: true
        },
        {
          id: 4,
          icon: <Laptop />,
          text: "Laptop",
          answer: true
        },
        {
          id: 5,
          icon: <F16_Jet />,
          text: "F-16 Jet",
          answer: true
        },
        {
          id: 6,
          icon: <Li_ion_batteries />,
          text: "Li-ion batteries",
          answer: true
        },
        {
          id: 7,
          icon: <Drone />,
          text: "Drone",
          answer: true
        },
        {
          id: 8,
          icon: <Electric_vehicle />,
          text: "Electric vehicle",
          answer: true
        },
        {
          id: 9,
          icon: <Light_Switch />,
          text: "Light Switch",
          answer: true
        },
        {
          id: 10,
          icon: <Pacemaker />,
          text: "Pacemaker",
          answer: true
        },
      ]
    },
    screen_2: {
      image: {image:TinImg,width:446.15,height:333.97},
      description:
        "<span>Tin (Sn)</span> is an essential component in touch screens – providing an electrical conductive thin clear coating to enable touch control with your fingers. Tin is also a significant material in many types of solder alloys – the solder is used to join electronic components together in electrical circuitry. Tin is also an excellent corrosion preventive material, often used to coat other metals. Alloys of tin are also used in superconducting magnets, bronze alloys. Tin compounds are also used in dyes, gas sensors and ceramics. <span>Tin can be found in NSW.</span>",
      model: <Model3 />,
    },
    screen_3: {
      centerCoord: {lat: -29.736947527208894, lng: 151.19856176432225},
      zoom: 12,
      placement: [
        {
          place: "Elsmore",
          coord: { lat: -29.8, lng: 151.28 },
          description: [
            "Cassiterite crystals on greissen",
            "Cassiterite crystallised on quartz crystals",
          ],
          element: [<Tin />],
          mine: "Elsmore Dredging Co., Inverell",
        },
        {
          place: "Inverell",
          coord: { lat: -29.766667, lng: 151.116667 },
          description: ["Tin metal smelted from Elsmore concentrate"],
          element: [<Tin />],
          mine: "Elsmore tin mine, Inverell",
        },
      ],
      element: [<Tin />],
      image_map: Img_Q3
    },
  },
  {
    quest_num: 4,
    screen_1: {
      element: [<Copper />],
      question:
        "These specimens contain <span>Copper</span> Can you guess which technologies <span>Copper</span> is essential for?",
      image: {image:CopperImg,width:430.95,height:520.24},
      answers: [
        {
          id: 0,
          icon: <Solar_Panels />,
          text: "Solar Panels",
          answer: true
        },
        {
          id: 1,
          icon: <Smart_Phone />,
          text: " Smart Phone",
          answer: true
        },
        {
          id: 2,
          icon: <Wind_Turbine />,
          text: "Wind Turbine",
          answer: true
        },
        {
          id: 3,
          icon: <Satellite />,
          text: "Satellite",
          answer: true
        },
        {
          id: 4,
          icon: <Laptop />,
          text: "Laptop",
          answer: true
        },
        {
          id: 5,
          icon: <F16_Jet />,
          text: "F-16 Jet",
          answer: true
        },
        {
          id: 6,
          icon: <Li_ion_batteries />,
          text: "Li-ion batteries",
          answer: true
        },
        {
          id: 7,
          icon: <Drone />,
          text: "Drone",
          answer: true
        },
        {
          id: 8,
          icon: <Electric_vehicle />,
          text: "Electric vehicle",
          answer: true
        },
        {
          id: 9,
          icon: <Light_Switch />,
          text: "Light Switch",
          answer: true
        },
        {
          id: 10,
          icon: <Pacemaker />,
          text: "Pacemaker",
          answer: true
        },
      ]
    },
    screen_2: {
      image: {image:CopperImg,width:332.29,height:401.13},
      description:
        "<span>Copper (Cu)</span> is an essential part of electrical wiring and electric motors or generators. There can be well over a tonne of copper in a large electric-powered truck prime-mover for example. Copper is an excellent conductor of electricity and heat and can be easily drawn into wires. Other uses include coins, metal plating or piping, heat exchangers in cooling systems, and many industrial chemical compounds. <span>Copper can be found throughout much of NSW</span>",
      model: <Model1 />,
    },
    screen_3: {
      centerCoord: {lat: -30.909387143434802, lng: 144.10607144236567},
      zoom: 7,
      placement: [
        {
          place: "Girilambone",
          coord: { lat: -31.25, lng: 146.9 },
          description: [
            "Cathode copper 99.99% pure",
          ],
          element: [<Copper />],
          mine: "Girilambone Copper Mine",
        },
        {
          place: "Broken Hill",
          coord: { lat: -31.95, lng: 141.46 },
          description: [
            "Native Copper, twinned crystals",
          ],
          element: [<Copper />],
          mine: "Broken Hill Proprietary Mine",
        },
        {
          place: "Mount Hope",
          coord: { lat: -32.840278, lng: 145.876694 },
          description: ["Malachite in breccia", "Azurite crystals"],
          element: [<Copper />],
          mine: "Mount Hope Copper Mine",
        },
      ],
      element: [<Copper />],
      image_map: Img_Q4
    },
  },
  {
    quest_num: 5,
    screen_1: {
      element: [<Tungsten />],
      question:
        "These specimens contain <span>Tungsten</span> Can you guess which technologies <span>Tungsten</span> is essential for?",
      image: {image:TungstenImg,width:388,height:439},
      answers: [
        {
          id: 0,
          icon: <Solar_Panels />,
          text: "Solar Panels"
        },
        {
          id: 1,
          icon: <Smart_Phone />,
          text: " Smart Phone",
        },
        {
          id: 2,
          icon: <Wind_Turbine />,
          text: "Wind Turbine"
        },
        {
          id: 3,
          icon: <Satellite />,
          text: "Satellite",
        },
        {
          id: 4,
          icon: <Electric_vehicle />,
          text: "Electric vehicle"
        },
        {
          id: 5,
          icon: <F16_Jet />,
          text: "F-16 Jet",
          answer: true
        },
        {
          id: 6,
          icon: <Li_ion_batteries />,
          text: "Li-ion batteries",
          answer: true
        },
        {
          id: 7,
          icon: <Drone />,
          text: "Drone"
        },
        {
          id: 8,
          icon: <Laptop />,
          text: "Laptop",
        },
        {
          id: 9,
          icon: <Light_Switch />,
          text: "Light Switch",
        },
        {
          id: 10,
          icon: <Pacemaker />,
          text: "Pacemaker"
        },
      ]
    },
    screen_2: {
      image: {image:TungstenImg,width:324,height:367},
      description:
        "<span>Tungsten (W)</span> and its alloys or compounds have a huge variety of uses. Typical uses include abrasives, high tech metal alloys, welding rods, magnets, high temperature filaments or appliances, cathode ray tubes, military weapons, and explosives. One of the most common abrasive products is Tungsten carbide, which is nearly as hard as a diamond. Tungsten is also used as a chemical catalyst in industrial chemical processes. Tungsten also provides an alternative to using Cobalt in Lithium-ion battery manufacture. <span>Tungsten can be found in NSW.</span>",
      model: <Model3 />,

    },
    screen_3: {
      centerCoord: {lat: -30.240655517871623, lng: 151.92993164062503},
      zoom: 7,
      placement: [
        {
          place: "Newcastle",
          coord: { lat: -32.916667, lng: 151.75 },
          description: [
            "Ferrotungsten", "artifical"
          ],
          element: [<Tungsten />],
          mine: "Newcastle",
        },
        {
          place: "Emmaville",
          coord: { lat: -29.45, lng: 151.6 },
          description: ["Wolframite with quartz"],
          element: [<Tungsten />],
          mine: "Butlers Lode, Emmaville",
        },
        {
          place: "Hillgrove",
          coord: { lat: -30.56, lng: 151.9 },
          description: ["Scheelite", "octahedral crystals "],
          element: [<Tungsten />],
          mine: "Hillgrove",
        },
      ],
      element: [<Tungsten />],
      image_map: Img_Q5
    },
  },
  {
    quest_num: 6,
    screen_1: {
      element: [<Molybdenum />, <Rheniun />],
      question:
        "These specimens contain <span>Molybdenum / Rhenium</span>. <span>Rhenium</span> is a byproduct of Mo mining. Can you guess which technologies <span>Rhenium</span> is essential for?",
      image: {image:MoReImg,width:588,height:444},
      answers: [
        {
          id: 0,
          icon: <Solar_Panels />,
          text: "Solar Panels"
        },
        {
          id: 1,
          icon: <Smart_Phone />,
          text: " Smart Phone",
        },
        {
          id: 2,
          icon: <Wind_Turbine />,
          text: "Wind Turbine"
        },
        {
          id: 3,
          icon: <Satellite />,
          text: "Satellite",
          answer: true
        },
        {
          id: 4,
          icon: <Electric_vehicle />,
          text: "Electric vehicle",
          answer: true
        },
        {
          id: 5,
          icon: <F16_Jet />,
          text: "F-16 Jet",
          answer: true
        },
        {
          id: 6,
          icon: <Li_ion_batteries />,
          text: "Li-ion batteries",
        },
        {
          id: 7,
          icon: <Drone />,
          text: "Drone"
        },
        {
          id: 8,
          icon: <Laptop />,
          text: "Laptop",
        },
        {
          id: 9,
          icon: <Light_Switch />,
          text: "Light Switch",
        },
        {
          id: 10,
          icon: <Pacemaker />,
          text: "Pacemaker"
        },
      ]
    },
    screen_2: {
      image: {image:MoReImg,width:454,height:342},
      description:
        "<span>Tungsten (W)</span> and its alloys or compounds have a huge variety of uses. Typical uses include abrasives, high tech metal alloys, welding rods, magnets, high temperature filaments or appliances, cathode ray tubes, military weapons, and explosives. One of the most common abrasive products is Tungsten carbide, which is nearly as hard as a diamond. Tungsten is also used as a chemical catalyst in industrial chemical processes. Tungsten also provides an alternative to using Cobalt in Lithium-ion battery manufacture. <span>Tungsten can be found in NSW.</span>",
      model: <Model3 />,
    },
    screen_3: {
      centerCoord: {lat: -29.530738390751118, lng: 151.754150390625},
      zoom: 8,
      placement: [
        {
          place: "Kingsgate",
          coord: { lat: -29.7361799999999, lng: 151.73596 },
          description: [
            "Molybdenite crystals on matrix with minor quartz crystals"
          ],
          element: [<Molybdenum />, <Rheniun />],
          mine: "Sachs Mine, Kingsgate",
        },
      ],
      element: [<Molybdenum />, <Rheniun />],
      image_map: Img_Q6
    },
  },
  {
    quest_num: 7,
    screen_1: {
      element: [<REE />],
      question:
        "This specimen contains <span>Rare Earth Elements</span>.</br>Can you guess which technologies <span>Rare Earth Elements</span> are essential for?",
      image: {image:REEImg,width:588,height:400},
      answers: [
        {
          id: 0,
          icon: <Solar_Panels />,
          text: "Solar Panels",
          answer: true
        },
        {
          id: 1,
          icon: <Smart_Phone />,
          text: " Smart Phone",
          answer: true
        },
        {
          id: 2,
          icon: <Wind_Turbine />,
          text: "Wind Turbine",
          answer: true

        },
        {
          id: 3,
          icon: <Satellite />,
          text: "Satellite",
          answer: true
        },
        {
          id: 4,
          icon: <Laptop />,
          text: "Laptop",
          answer: true
        },
        {
          id: 5,
          icon: <F16_Jet />,
          text: "F-16 Jet",
          answer: true
        },
        {
          id: 6,
          icon: <Li_ion_batteries />,
          text: "Li-ion batteries",
          answer: true
        },
        {
          id: 7,
          icon: <Drone />,
          text: "Drone",
          answer: true
        },
        {
          id: 8,
          icon: <Electric_vehicle />,
          text: "Electric vehicle",
          answer: true
        },
        {
          id: 9,
          icon: <Light_Switch />,
          text: "Light Switch",
          answer: true
        },
        {
          id: 10,
          icon: <Pacemaker />,
          text: "Pacemaker",
          answer: true
        },
      ]
    },
    screen_2: {
      image: {image:REEImg,width:420,height:286},
      description:
        "<span>REEs</span> are all metals, with 17 in total. REEs metals and the alloys that contain them are used in many essential components of modern devices and technology. Demand for REEs is growing rapidly due to our increasingly technology dependent world. Typical uses include computer memory, catalytic converters, magnets, rechargeable batteries, mobile phones, fluorescent lighting, LEDs and much more. <span>REEs can be found in NSW.</span>",
      model: <Model2 />,
    },
    screen_3: {
      centerCoord: {lat: -31.2869224677559, lng: 148.62116865813732},
      zoom: 8,
      placement: [
        {
          place: "Dubbo",
          coord: { lat: -32.256944, lng: 148.601111 },
          description: [
            'Trachyte', 'polymetallic resource of rare earths', 'zirconium', 'niobium', 'hafnium', 'tantalum and yttrium'
          ],
          element: [<REE />],
          mine: "Toongi Rare Earth Deposit, Dubbo",
        },
      ],
      element: [<REE />],
      image_map: Img_Q7
    },
  },
  {
    quest_num: 8,
    screen_1: {
      element: [<Silver />],
      question:
        "This specimen contains <span>Silver</span>.<br/>Can you guess which technologies <span>Silver</span> is essential for?",
      image: {image:SilverImg,width:394,height:494},
      answers: [
        {
          id: 0,
          icon: <Solar_Panels />,
          text: "Solar Panels",
          answer: true
        },
        {
          id: 1,
          icon: <Smart_Phone />,
          text: " Smart Phone",
          answer: true
        },
        {
          id: 2,
          icon: <Wind_Turbine />,
          text: "Wind Turbine",
          answer: true
        },
        {
          id: 3,
          icon: <Satellite />,
          text: "Satellite",
          answer: true
        },
        {
          id: 4,
          icon: <Laptop />,
          text: "Laptop",
          answer: true
        },
        {
          id: 5,
          icon: <F16_Jet />,
          text: "F-16 Jet",
          answer: true
        },
        {
          id: 6,
          icon: <Li_ion_batteries />,
          text: "Li-ion batteries",
        },
        {
          id: 7,
          icon: <Drone />,
          text: "Drone",
          answer: true
        },
        {
          id: 8,
          icon: <Electric_vehicle />,
          text: "Electric vehicle",
          answer: true
        },
        {
          id: 9,
          icon: <Light_Switch />,
          text: "Light Switch",
          answer: true
        },
        {
          id: 10,
          icon: <Pacemaker />,
          text: "Pacemaker",
          answer: true
        },
      ]
    },
    screen_2: {
      image: {image:SilverImg,width:268,height:336},
      description:
        "Although <span>Silver (Sg)</span> is probably best known for its use in coins, jewelry, silverware and photographic films, it also has a growing variety of uses in the latest technology, including electronics, solar panel photo voltaic cells, industrial chemistry processes, solders, mirrors, ceramics, batteries, and medical or biological applications. Silver is the best thermal and electrical conductor of all the metals and is resistant to oxidation and corrosion. It is also both malleable and ductile, so can be drawn out into thin wires or flattened into thin sheets. Silver is also commonly used in many electroplating processes, such as super strong, heat and wear-resistant steel bearings used in engines. Silver and “nano-silver” is also being used more and more in high technology applications such as jet engine components, micro electronics and superconductors. <span>Silver can be found in NSW.</span>",
    },
    screen_3: {
      centerCoord: { lat: -29.582732949089557, lng: 141.6473749279976 },
      zoom: 6,
      placement: [
        {
          place: "Broken Hill",
          coord: { lat: -31.95, lng: 141.46 },
          description: ["Silver"],
          element: [<Silver />],
          mine: "A.B.H. Consols Mine",
        },
      ],
      element: [<Silver />],
      image_map: Img_Q8
    },
  },
];
