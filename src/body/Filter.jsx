import Product from "../subComponent/Product";
import "../style/filter.css"
export default function Add() {
    return (
        <div>
            <div className="outerOfFilter">
                <Product/>
            </div>
        </div>
    )
}