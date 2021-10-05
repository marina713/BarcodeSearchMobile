import React from "react";
import { useDispatch } from "react-redux";
import { showBarcodeScanner } from "../../state/search/actions";
import { Button, CameraIcon } from "./styles";

const Camera = React.memo(() => {
    const dispatch = useDispatch();
    const handlePress = () => {
        dispatch(showBarcodeScanner());
    }

    return (<Button onPress={handlePress}>
        <CameraIcon source={require("../../assets/camera.png")} />
    </Button>)
})

export default Camera;
