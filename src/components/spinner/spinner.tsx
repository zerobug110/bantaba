import { RotatingLines } from "react-loader-spinner"
import './spinner.scss';

export const Spinner = () => {
    return (
        <div className="spinner">
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>

    )
}