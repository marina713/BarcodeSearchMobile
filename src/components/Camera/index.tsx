import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowBarcodeScanner } from "../../state/search/actions";
import { getShowBarcodeScanner } from "../../state/search/selectors";
import { Button, CameraIcon } from "./styles";

type Props = {
    inputRef: any
}

const Camera = React.memo(({ inputRef }: Props) => {
    const dispatch = useDispatch();
    const showBarcodeScanner = useSelector(getShowBarcodeScanner);
    const handlePress = () => {
        dispatch(setShowBarcodeScanner(!showBarcodeScanner));
        inputRef?.current?.blur();
    }

    return (
        <Button onPress={handlePress}>
            <CameraIcon source={require("../../assets/camera.png")} />
        </Button>
    )
})

export default Camera;
