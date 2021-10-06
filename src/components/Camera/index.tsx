import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowBarcodeScanner } from "../../state/ui/actions";
import { getShowBarcodeScanner } from "../../state/ui/selectors";
import { Button, CameraIcon } from "./styles";

type Props = {
    inputRef: any;
    scrollToTop: () => void
}

const Camera = React.memo(({ inputRef, scrollToTop }: Props) => {
    const dispatch = useDispatch();
    const showBarcodeScanner = useSelector(getShowBarcodeScanner);
    const handlePress = () => {
        dispatch(setShowBarcodeScanner(!showBarcodeScanner));
        scrollToTop();
        inputRef?.current?.blur();
    }

    return (
        <Button onPress={handlePress}>
            <CameraIcon source={require("../../assets/camera.png")} />
        </Button>
    )
})

export default Camera;
