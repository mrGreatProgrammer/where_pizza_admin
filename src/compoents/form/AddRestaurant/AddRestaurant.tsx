import { Modal, Spin } from "antd";
import axios from "axios";
import React from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import {
  useAddRestaurantMutation,
  useGetAllRestaurantQuery,
} from "../../../http/service/restaurantsService";

function LocationMarker() {
  const { isLoading: isLoadingRestaurant, data } = useGetAllRestaurantQuery(1);
  const [markers, setMarkers] = React.useState<any>(data?.length ? data : []);
  const [addRestaurant, { isLoading, isSuccess, isError }] =
    useAddRestaurantMutation();
  // const [openModal, setOpenModal] = React.useState(false);
  // const [thetitle, setTheTitle] = React.useState("");

  // const fetchDataForMap = async () => {
  //   let loading = true;
  //   let error = "";

  //   try {
  //     let data = await axios.get(
  //       "https://6246c1b4e3450d61b00249a5.mockapi.io/maps"
  //     );

  //     setMarkers(data.data);
  //     return { data, loading: false, err: "" };
  //   } catch (error) {
  //     return { data: null, err: "some err", loading: false };
  //   }
  // };

  // React.useEffect(() => {
  //   fetchDataForMap();
  // }, []);

  function addMarker(event: any) {
    // event.preventDefault();
    let thetitle = prompt("enter title");
    setMarkers((prev: any) => [
      ...prev,
      {
        title: thetitle,
        // location: [event.latlng.lat, event.latlng.lng]
        lat: event.latlng.lat,
        lang: event.latlng.lng,
      },
    ]);
    addRestaurant({
      title: thetitle,
      // location: [event.latlng.lat, event.latlng.lng],
      lat: event.latlng.lat,
      lang: event.latlng.lng,
    });
  }

  const map = useMapEvents({
    click(event: any) {
      console.log(event);
      addMarker(event);
      // setOpenModal(true);
      map.locate();
    },
    // locationfound(e) {
    //   setPosition(e.latlng);
    //   map.flyTo(e.latlng, map.getZoom());
    // },
  });

  return markers === null ? null : (
    <>
      {data ? (
        [...markers, ...data].map((item: any, id: number) => (
          <Marker key={id} position={[item.lat, item.lang]}>
            <Popup>{item.title}</Popup>
          </Marker>
        ))
      ) : (
        <Spin />
      )}
      {/* <Modal destroyOnClose open={openModal} onCancel={()=>setOpenModal(false)} onOk={()=>} >

      </Modal> */}
    </>
  );
}

const AddRestaurant = () => {
  return (
    <div>
      <div className="addrestaurant--map__container">
        <MapContainer
          //@ts-ignore
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "500px" }}
        >
          <TileLayer
            //@ts-ignore
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
      </div>
    </div>
  );
};

export default AddRestaurant;
