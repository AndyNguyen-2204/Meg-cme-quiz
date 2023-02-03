import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Header from "../header/Header";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/button";
import { useAppContext } from "../context/dataContext";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import ReactDOMServer from "react-dom/server";
const GetMap = ({ data }: any) => {
  const map = useMap();
  const point = L.point(2, -88);
  const html = `<div class="popup_content"><div class="popup_content_element"><div class="element_wrapper">
  ${data.element.map((item: any, index: any) => {
    return ReactDOMServer.renderToString(item);
  })}</div>
  <p>${
    data.place
  }</p></div><div class="popup_content_placement">${ReactDOMServer.renderToString(
    data.description.map((elm: any, index: any) => {
      return <p>{elm}</p>;
    })
  )}</div></div>`;
  const popup = L.popup({
    closeButton: false,
    autoClose: false,
    closeOnClick: true,
    offset: point,
  })
    .setLatLng([data.coord.lat, data.coord.lng])
    .setContent(html);

  map.openPopup(popup as any, data.coord);
  return null;
};
const EventMap = () => {
  const map = useMap();
  const { data } = useAppContext();
  // const mapEvent = useMapEvents({
  //   click(e) {
  //     console.log({e})

  //   }
  // });
  useEffect(() => {
    map.setView(data?.screen_3?.centerCoord, data?.screen_3?.zoom);
  }, [data?.screen_3?.centerCoord, data?.screen_3?.zoom]);
  return null;
};
function ThirdScreen() {
  const { data, handleNext } = useAppContext();
  const redMarker = L.divIcon({ className: "my-div-icon" });
  let online = navigator.onLine;
  const [popup, setPopup] = useState();
  const point = L.point(1, -88);
  let popupRef = useRef();

  return (
    <div className="third_screen">
      <hr />
      <Header quest_num={data.quest_num} title="Occurences in NSW" />
      <div className="map_wrapper">
        {online === true ? (
          <MapContainer
            center={data?.screen_3?.centerCoord}
            scrollWheelZoom={false}
            zoom={data?.screen_3?.zoom}
            minZoom={3}
            maxZoom={16}
            style={{ width: "100%", height: "100%" }}>
            <TileLayer url="http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png" />
            {data?.screen_3?.placement.map((item: any, index: any) => {
              return (
                <Marker
                  position={item.coord}
                  icon={redMarker}
                  key={index}
                  >
                  <GetMap data={item} />
                  <Popup
                    autoClose={true}
                    offset={point}
                    closeButton={true}
                    closeOnClick={true}
                    ref={popupRef as any}>
                    <div className="popup_content">
                      <div className="popup_content_element">
                        <div className="element_wrapper">
                          {item.element.map((item: any, index: any) => {
                            return <div key={index}>{item}</div>;
                          })}
                        </div>
                        <p>{item.place}</p>
                      </div>
                      <div className="popup_content_placement">
                        {item.description.map((item: any, index: any) => {
                          return <p key={index}>{item}</p>;
                        })}
                      </div>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
            <EventMap />
          </MapContainer>
        ) : (
          <div className="image_map_offline">
            <img src={data.screen_3.image_map}></img>
          </div>
        )}
      </div>
      <div className="third_screen_element_placement">
        <div className="element">
          {data.screen_3.element.map((item: any, index: any) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
        <div className="placement">
          {data.screen_3.placement.map((item: any, index: any) => {
            return <p key={index}>{item.mine}</p>;
          })}
        </div>
      </div>
      <div className="bottom_wrapper">
        <div
          className={
            data.screen_3.element.length > 1
              ? "button_screen3 multi_element"
              : "button_screen3"
          }>
          <Link to="/second-screen">
            <Button name_btn="Go Back" style="Go back" />
          </Link>
          <div onClick={() => handleNext()}>
            <Button name_btn="Next Question" style="Next Question" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdScreen;
